import { useRef, useEffect } from "react";
import type { CommunityKey, RefGroup } from "../types/communities";

export function useCommunityActions({
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

    const showAlert = (key: string) => {
        const community = data[key as CommunityKey];
        const name = community?.title || key;
        alert(`📍 ${name}\n\nClick confirmed. You are exploring this location.`);
    };

    const refs = useRef<Record<string, RefGroup>>({});
    const activeKey = useRef<string | null>(null);

    const setRef = (key: CommunityKey, type: keyof RefGroup) => (el: SVGElement | SVGAElement | null) => {
        if (!refs.current[key]) {
            refs.current[key] = {};
        }

        (refs.current[key] as any)[type] = el;
    };

    useEffect(() => {
        const keys = Object.keys(refs.current);
        const listeners = new Map<SVGElement, { click: any; enter: any; leave: any }>();

        const getParts = (group: RefGroup) => {
            const squareMain = group.square?.querySelector<SVGElement>(".st67") || null;
            const glowRects = group.square?.querySelectorAll<SVGElement>(".st53 rect") || [];
            const connectors = group.square?.querySelectorAll<SVGElement>(".st7") || [];

            const text: SVGElement[] = [];
            const icon: SVGElement[] = [];

            const collectClass = (root: SVGElement | null | undefined, className: string, target: SVGElement[]) => {
                if (!root) return;
                if (root.matches(className)) target.push(root);
                target.push(...root.querySelectorAll<SVGElement>(className));
            };

            collectClass(group.text, ".st17", text);
            collectClass(group.icon, ".st17", icon);
            collectClass(group.icon, ".st8", icon);
            return {
                squareMain,
                glowRects: Array.from(glowRects),
                connectors: Array.from(connectors),
                text: Array.from(new Set(text)),
                icon: Array.from(new Set(icon)),
            };
        };

        const reset = (key: string) => {
            const group = refs.current[key];
            if (!group) return;

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
                // group.square.style.transform = "translateY(0) scale(1)";
                group.square.style.filter = "none";
                group.square.style.removeProperty("transition");
            }
        };

        const activateHover = (key: string) => {
            const group = refs.current[key];
            if (!group) return;

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
                // group.square.style.transform = "translateY(-4px) scale(1.02)";
                group.square.style.filter = "drop-shadow(0 10px 24px rgba(145, 8, 17, 0.22))";
                group.square.style.cursor = "pointer";
            }
        };

        const activateClick = (key: string) => {
            const group = refs.current[key];
            if (!group) return;

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
                // group.square.style.transform = "translateY(-2px) scale(1.03)";
                group.square.style.filter = "drop-shadow(0 14px 30px rgba(145, 8, 17, 0.28))";
            }
        };

        keys.forEach((key) => {
            const group = refs.current[key];
            if (!group) return;

            const isCommunity = key in data;

            if (isCommunity && group.square) {
                // ✅ COMMUNITY (square controls all)
                const root = group.square;

                const onEnter = () => {
                    if (activeKey.current === key) return;
                    root.style.cursor = "pointer";
                    activateHover(key);
                };

                const onLeave = () => {
                    if (activeKey.current === key) return;
                    reset(key);
                };

                const onClick = (e: Event) => {
                    e.preventDefault();
                    e.stopPropagation();

                    if (activeKey.current && activeKey.current !== key) {
                        reset(activeKey.current);
                    }

                    activeKey.current = key;
                    activateClick(key);

                    onSelectBuilding(key as CommunityKey);
                };

                root.addEventListener("pointerenter", onEnter);
                root.addEventListener("pointerleave", onLeave);
                root.addEventListener("click", onClick);

                listeners.set(root, { click: onClick, enter: onEnter, leave: onLeave });

            } else {
                // ✅ GLOBAL ICONS (separate targets)
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