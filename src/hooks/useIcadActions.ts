import { useRef, useEffect } from "react";

type RefGroup = {
    square?: SVGElement | null;
    icon?: SVGElement | null;
    text?: SVGElement | null;
    sdeiraLogo?: SVGElement | null;
    homeIcon?: SVGAElement | null;
    aryamLogo?: SVGElement | null;
    backIcon?: SVGElement | null;
    aboutAryamIcadIcon?: SVGElement | null;
};

export function useIcadActions() {

    // Click Config
    const TEXT_CLICK_COLOR = "#910811";
    const BACKGROUND_CLICK_COLOR = "#ffffff";
    const BORDER_CLICK_COLOR = "#910811";
    // Hover Config
    const TEXT_HOVER_COLOR = "#910811";
    const BACKGROUND_HOVER_COLOR = "#ffffff";
    const BORDER_HOVER_COLOR = "#910811";
    const LABELS: Record<string, string> = {
        alReem: "Al Reem Community",
        alMesk: "Al Mesk Community",
        icadMall: "ICAD Mall",
        mosque: "Mosque",
        sportsHall: "Sports Hall",
        alNaseem: "Al Naseem Community",
        alSahab1: "Al Sahab Phase 1",
        alSahab2: "Al Sahab Phase 2",
        alDhabi1: "Al Dhabi 1",
        alDhabi2: "Al Dhabi 2",
        alDhabi3: "Al Dhabi 3",
        alYass1: "Al Yass 1",
        alYass2: "Al Yass 2",
        alMurjan: "Al Murjan Community",
    };

    const showAlert = (key: string) => {
        const name = LABELS[key] || key;

        alert(`📍 ${name}\n\nClick confirmed. You are exploring this location.`);
    };

    const refs = useRef<Record<string, RefGroup>>({});
    const activeKey = useRef<string | null>(null);

    const setRef = (key: string, type: keyof RefGroup) => (el: SVGElement | SVGAElement | null) => {
        if (!refs.current[key]) {
            refs.current[key] = {};
        }

        (refs.current[key] as any)[type] = el;
    };

    useEffect(() => {
        const keys = Object.keys(refs.current);
        const getParts = (group: RefGroup) => {
            const bg = group.square?.querySelectorAll<SVGElement>(".st53") || [];

            const text: SVGElement[] = [];

            const TEXT_CLASSES = [".st18", ".st8"];

            const collect = (root?: SVGElement | null) => {
                if (!root) return;

                TEXT_CLASSES.forEach((cls) => {
                    if (root.matches(cls)) {
                        text.push(root);
                    }
                    text.push(...root.querySelectorAll<SVGElement>(cls));
                });
            };

            collect(group.square);
            collect(group.icon);

            if (group.text) {
                text.push(group.text);
            }

            return {
                bg,
                text: Array.from(new Set(text))
            };
        };

        const reset = (key: string) => {
            const group = refs.current[key];
            if (!group) return;

            const { bg, text } = getParts(group);

            bg.forEach((b) => {
                b.style.removeProperty("fill");
                b.style.removeProperty("stroke");
                b.style.removeProperty("stroke-width");
            });

            text.forEach((t) => {
                t.style.removeProperty("fill");
            });

            if (group.square) {
                group.square.style.transform = "scale(1)";
                group.square.style.filter = "none";
            }
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

            text.forEach((t) => {
                t.style.fill = TEXT_CLICK_COLOR;
            });

            if (group.square) {
                group.square.style.filter = "drop-shadow(0 6px 14px rgba(0,0,0,0.2))";
            }
        };

        keys.forEach((key) => {
            const group = refs.current[key];
            if (!group) return;

            const targets = [group.square, group.icon, group.text].filter(
                (el): el is SVGElement => el instanceof SVGElement
            );

            targets.forEach((el) => {

                const onEnter = () => {
                    if (activeKey.current === key) return;
                    activateHover(key);
                };

                const onLeave = () => {
                    if (activeKey.current === key) return;
                    reset(key);
                };

                const onClick = () => {
                    if (activeKey.current && activeKey.current !== key) {
                        reset(activeKey.current);
                    }

                    activeKey.current = key;
                    activateClick(key);
                    showAlert(key)
                };

                el.addEventListener("mouseenter", onEnter);
                el.addEventListener("mouseleave", onLeave);
                el.addEventListener("click", onClick);
            });
        });

        return () => {
            keys.forEach((key) => {
                const group = refs.current[key];
                if (!group) return;

                const targets = [group.square, group.icon, group.text].filter(
                    (el): el is SVGElement => el instanceof SVGElement
                );

                targets.forEach((el) => {
                    el.replaceWith(el.cloneNode(true));
                });
            });
        };

    }, []);

    return { setRef };
}