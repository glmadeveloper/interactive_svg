import { useRef, useEffect } from "react";
import type { CommunityKey, RefGroup } from "../types/communities";

export function useIcadActions({
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
            const bg = group.square?.querySelectorAll<SVGElement>(".st53") || [];
            const text: SVGElement[] = [];
            const TEXT_CLASSES = [".st18", ".st8"];

            const collect = (root?: SVGElement | null) => {
                if (!root) return;
                TEXT_CLASSES.forEach((cls) => {
                    if (root.matches(cls)) text.push(root);
                    text.push(...root.querySelectorAll<SVGElement>(cls));
                });
            };

            collect(group.square);
            collect(group.icon);
            if (group.text) text.push(group.text);

            return { bg, text: Array.from(new Set(text)) };
        };

        const reset = (key: string) => {
            const group = refs.current[key];
            if (!group) return;
            const { bg, text } = getParts(group);
            bg.forEach((b) => { b.style.removeProperty("fill"); b.style.removeProperty("stroke"); b.style.removeProperty("stroke-width"); });
            text.forEach((t) => { t.style.removeProperty("fill"); });
            if (group.square) { group.square.style.transform = "scale(1)"; group.square.style.filter = "none"; }
        };

        const activateHover = (key: string) => {
            const group = refs.current[key];
            if (!group) return;
            const { bg, text } = getParts(group);
            bg.forEach((b) => {
                b.style.transition = "all 0.25s ease";
                b.style.fill = BACKGROUND_HOVER_COLOR;
                b.style.stroke = BORDER_HOVER_COLOR;
                b.style.strokeWidth = "1.5";
            });
            text.forEach((t) => {
                t.style.transition = "all 0.25s ease";
                t.style.fill = TEXT_HOVER_COLOR;
            });
            if (group.square) {
                group.square.style.filter = "drop-shadow(0 4px 10px rgba(0,0,0,0.15))";
                group.square.style.cursor = "pointer";
            }
        };

        const activateClick = (key: string) => {
            const group = refs.current[key];
            if (!group) return;
            const { bg, text } = getParts(group);
            bg.forEach((b) => {
                b.style.fill = BACKGROUND_CLICK_COLOR;
                b.style.stroke = BORDER_CLICK_COLOR;
                b.style.strokeWidth = "2";
            });
            text.forEach((t) => { t.style.fill = TEXT_CLICK_COLOR; });
            if (group.square) group.square.style.filter = "drop-shadow(0 6px 14px rgba(0,0,0,0.2))";
        };

        keys.forEach((key) => {
            const group = refs.current[key];
            if (!group) return;

            // Collect ALL possible interactive elements in this group
            const targets = [
                group.square, group.icon, group.text,
                group.sdeiraLogo, group.homeIcon, group.communityLogo,
                group.backIcon, group.aboutCommunity
            ].filter((el): el is SVGElement => el instanceof SVGElement);

            targets.forEach((el) => {
                const onEnter = () => {
                    if (activeKey.current === key) return;
                    el.style.cursor = "pointer";
                    el.style.opacity = "0.8";
                    activateHover(key);
                };

                const onLeave = () => {
                    if (activeKey.current === key) return;
                    el.style.opacity = "1";
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

                    // Unified Action Logic
                    if (key === "aboutCommunity") {
                        onSelectBuilding(key as CommunityKey);
                    } else if (key === "homeIcon" || key === "sdeiraLogo") {
                        window.open("https://sdeiragroup.ae/", "_blank");
                    } else if (key === "communityLogo") {
                        window.open(communityUrl, "_blank");
                    } else if (key === "backIcon") {
                        onBackToHome();
                    } else if (key in data) {
                        onSelectBuilding(key as CommunityKey);
                    } else {
                        showAlert(key);
                    }
                };

                el.addEventListener("mouseenter", onEnter);
                el.addEventListener("mouseleave", onLeave);
                el.addEventListener("click", onClick);

                listeners.set(el, { click: onClick, enter: onEnter, leave: onLeave });
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