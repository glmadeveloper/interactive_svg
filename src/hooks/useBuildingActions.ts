import { useRef, useEffect } from "react";
import type { CommunityKey, RefGroup } from "../types/communities";

export function useBuildingActions({
    onSelectBuilding,
    onBackToHome,
    data,
    communityUrl
}: {
    onSelectBuilding: (key: CommunityKey) => void;
    onBackToHome: () => void;
    data: Record<string, any>;
    communityUrl: string;
}) {
    const TEXT_CLICK_COLOR = "#910811";
    const BACKGROUND_CLICK_COLOR = "#ffffff";
    const BORDER_CLICK_COLOR = "#910811";
    const TEXT_HOVER_COLOR = "#910811";
    const BACKGROUND_HOVER_COLOR = "#ffffff";
    const BORDER_HOVER_COLOR = "#910811";
    const SQUARE_CLASSES = ".st67, .st6, .st11, .st7, .st13";
    const TEXT_CLASSES = ".st17, .st5, .st9, .st11";
    const ICON_CLASSES = ".st17, .st8, .st5, .st3, .st9, .st11";

    const showAlert = (key: string) => {
        const community = data[key as CommunityKey];
        const name = community?.title || key;
        alert(`📍 ${name}\n\nClick confirmed. You are exploring this location.`);
    };

    const refs = useRef<Record<string, RefGroup[]>>({});
    const activeKey = useRef<string | null>(null);
    const setRef = (key: CommunityKey, type: keyof RefGroup) => (el: SVGElement | SVGAElement | null) => {
        if (!refs.current[key]) {
            refs.current[key] = [];
        }

        let group = refs.current[key].find(g => !g[type]);

        if (!group) {
            group = {};
            refs.current[key].push(group);
        }

        (group as any)[type] = el;
    };

    useEffect(() => {
        const keys = Object.keys(refs.current);
        const listeners = new Map<SVGElement, { click: any; enter: any; leave: any }>();

        const getParts = (group: RefGroup) => {
            const squareMain = group.square?.querySelector<SVGElement>(SQUARE_CLASSES) || null;
            const glowRects = group.square?.querySelectorAll<SVGElement>(".st53 rect") || [];
            const connectors = group.square?.querySelectorAll<SVGElement>(".st7, .st1") || [];

            const text: SVGElement[] = [];
            const icon: SVGElement[] = [];

            const collectClass = (root: SVGElement | null | undefined, className: string, target: SVGElement[]) => {
                if (!root) return;
                if (root.matches(className)) target.push(root);
                target.push(...root.querySelectorAll<SVGElement>(className));
            };

            collectClass(group.text, TEXT_CLASSES, text);
            collectClass(group.icon, ICON_CLASSES, icon);

            return {
                squareMain,
                glowRects: Array.from(glowRects),
                connectors: Array.from(connectors),
                text: Array.from(new Set(text)),
                icon: Array.from(new Set(icon)),
            };
        };

        const reset = (group: RefGroup) => {
            const { squareMain, glowRects, text, icon, connectors } = getParts(group);

            if (squareMain) {
                squareMain.style.removeProperty("fill");
                squareMain.style.removeProperty("stroke");
                squareMain.style.removeProperty("stroke-width");
                squareMain.style.removeProperty("transition");
            }

            glowRects.forEach((el) => {
                el.style.removeProperty("opacity");
                el.style.removeProperty("filter");
                el.style.removeProperty("transition");
            });

            [...text, ...icon].forEach((el) => {
                el.style.removeProperty("fill");
                el.style.removeProperty("transition");
            });

            connectors.forEach((el) => {
                el.style.removeProperty("stroke");
                el.style.removeProperty("transition");
            });

            if (group.square) {
                group.square.style.filter = "none";
                group.square.style.removeProperty("transition");
            }
        };

        const activateHover = (group: RefGroup) => {
            const { squareMain, glowRects, text, icon, connectors } = getParts(group);

            if (squareMain) {
                squareMain.style.transition = "all 0.28s ease";
                squareMain.style.fill = BACKGROUND_HOVER_COLOR;
                squareMain.style.stroke = BORDER_HOVER_COLOR;
                squareMain.style.strokeWidth = "2.5";
            }

            glowRects.forEach((el) => {
                el.style.transition = "all 0.28s ease";
                el.style.opacity = "1";
                el.style.filter = "brightness(1.15)";
            });

            [...text, ...icon].forEach((el) => {
                el.style.transition = "all 0.28s ease";
                el.style.fill = TEXT_HOVER_COLOR;
            });

            connectors.forEach((el) => {
                el.style.transition = "all 0.28s ease";
                el.style.stroke = BORDER_HOVER_COLOR;
            });

            if (group.square) {
                group.square.style.transition = "transform 0.28s ease, filter 0.28s ease";
                group.square.style.transformBox = "fill-box";
                group.square.style.transformOrigin = "center";
                group.square.style.filter = "drop-shadow(0 10px 24px rgba(145, 8, 17, 0.22))";
                group.square.style.cursor = "pointer";
            }
        };

        const activateClick = (group: RefGroup) => {
            const { squareMain, glowRects, text, icon, connectors } = getParts(group);

            if (squareMain) {
                squareMain.style.fill = BACKGROUND_CLICK_COLOR;
                squareMain.style.stroke = BORDER_CLICK_COLOR;
                squareMain.style.strokeWidth = "3";
            }

            glowRects.forEach((el) => {
                el.style.opacity = "1";
                el.style.filter = "brightness(1.25)";
            });

            [...text, ...icon].forEach((el) => {
                el.style.fill = TEXT_CLICK_COLOR;
            });

            connectors.forEach((el) => {
                el.style.stroke = BORDER_CLICK_COLOR;
            });

            if (group.square) {
                group.square.style.filter = "drop-shadow(0 14px 30px rgba(145, 8, 17, 0.28))";
            }
        };

        keys.forEach((key) => {
            const groups = refs.current[key];

            groups.forEach((group) => {
                const isCommunity = key in data;

                if (isCommunity && group.square) {
                    const root = group.square;

                    const onEnter = () => {
                        if (activeKey.current === key) return;
                        activateHover(group);
                    };

                    const onLeave = () => {
                        if (activeKey.current === key) return;
                        reset(group);
                    };

                    const onClick = (e: Event) => {
                        e.preventDefault();
                        e.stopPropagation();

                        if (activeKey.current && activeKey.current !== key) {
                            refs.current[activeKey.current]?.forEach(reset);
                        }

                        activeKey.current = key;

                        refs.current[key].forEach(activateClick);

                        onSelectBuilding(key as CommunityKey);
                    };

                    root.addEventListener("pointerenter", onEnter);
                    root.addEventListener("pointerleave", onLeave);
                    root.addEventListener("click", onClick);

                    listeners.set(root, { click: onClick, enter: onEnter, leave: onLeave });

                } else {
                    const targets = [
                        group.sdeiraLogo,
                        group.homeIcon,
                        group.communityLogo,
                        group.backIcon,
                        group.aboutCommunity
                    ].filter((el): el is SVGElement => el instanceof SVGElement);

                    targets.forEach((el) => {
                        const onEnter = () => {
                            el.style.cursor = "pointer";
                            el.style.opacity = "0.8";
                        };

                        const onLeave = () => {
                            el.style.opacity = "1";
                        };

                        const onClick = (e: Event) => {
                            e.preventDefault();
                            e.stopPropagation();

                            if (key === "aboutCommunity") {
                                onSelectBuilding(key as CommunityKey);
                            } else if (key === "homeIcon" || key === "sdeiraLogo") {
                                window.open("https://sdeiragroup.ae/", "_blank");
                            } else if (key === "communityLogo") {
                                window.open(communityUrl, "_blank");
                            } else if (key === "backIcon") {
                                onBackToHome();
                            } else {
                                showAlert(key);
                            }
                        };

                        el.addEventListener("mouseenter", onEnter);
                        el.addEventListener("mouseleave", onLeave);
                        el.addEventListener("click", onClick);

                        listeners.set(el, { click: onClick, enter: onEnter, leave: onLeave });
                    });
                }
            });
        });

        return () => {
            listeners.forEach((handlers, el) => {
                el.removeEventListener("mouseenter", handlers.enter);
                el.removeEventListener("mouseleave", handlers.leave);
                el.removeEventListener("click", handlers.click);
            });
        };
    }, []);

    return { setRef };
}