import { icad_image } from "../../exports/images";
import { useIcadActions } from "../../hooks/useIcadActions"
import type { CommunityKey } from "../../types/imagesByCommunity";

type IcadSVGProps = {
    onSelectCommunity: (key: string) => void;
    onBackToHome: () => void;
};

export default function IcadSVG({ onSelectCommunity, onBackToHome }: IcadSVGProps) {
    const { setRef } = useIcadActions({
        onSelectCommunity: (key: CommunityKey) => {
            onSelectCommunity(key);
        },
        onBackToHome: () => {
            onBackToHome();
        }
    })
    return (
        <div>
            {/*?xml version="1.0" encoding="UTF-8"?*/}
            <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 2647 1588">
                {/* Generator: Adobe Illustrator 30.3.0, SVG Export Plug-In . SVG Version: 2.1.3 Build 182)  */}
                <defs>
                    <style dangerouslySetInnerHTML={{ __html: "\n                        .st0 {\n                            fill: url(#radial-gradient53);\n      }\n\n                        .st1 {\n                            clip - path: url(#clippath-6);\n      }\n\n                        .st2 {\n                            clip - path: url(#clippath-7);\n      }\n\n                        .st3 {\n                            fill: url(#radial-gradient20);\n      }\n\n                        .st4 {\n                            fill: url(#radial-gradient30);\n      }\n\n                        .st5 {\n                            fill: url(#radial-gradient28);\n      }\n\n                        .st6 {\n                            clip - path: url(#clippath-4);\n      }\n\n                        .st7 {\n                            stroke - width: 3px;\n      }\n\n                        .st7, .st8 {\n                            stroke: #fff;\n      }\n\n                        .st7, .st9 {\n                            fill: none;\n      }\n\n                        .st10 {\n                            fill: url(#radial-gradient45);\n      }\n\n                        .st11 {\n                            fill: url(#radial-gradient57);\n      }\n\n                        .st12 {\n                            fill: url(#radial-gradient39);\n      }\n\n                        .st13 {\n                            fill: url(#radial-gradient48);\n      }\n\n                        .st14 {\n                            clip - path: url(#clippath-9);\n      }\n\n                        .st15 {\n                            clip - path: url(#clippath-10);\n      }\n\n                        .st16 {\n                            fill: url(#radial-gradient55);\n      }\n\n                        .st17 {\n                            fill: url(#radial-gradient10);\n      }\n\n                        .st18, .st8 {\n                            fill: #fff;\n      }\n\n                        .st19 {\n                            fill: url(#radial-gradient41);\n      }\n\n                        .st20 {\n                            fill: url(#radial-gradient54);\n      }\n\n                        .st21 {\n                            fill: url(#radial-gradient24);\n      }\n\n                        .st22 {\n                            fill: url(#radial-gradient11);\n      }\n\n                        .st8 {\n                            stroke - width: .1px;\n      }\n\n                        .st23 {\n                            fill: url(#radial-gradient49);\n      }\n\n                        .st24 {\n                            clip - path: url(#clippath-11);\n      }\n\n                        .st25 {\n                            fill: url(#radial-gradient46);\n      }\n\n                        .st26 {\n                            fill: url(#radial-gradient34);\n      }\n\n                        .st27 {\n                            fill: url(#radial-gradient21);\n      }\n\n                        .st28 {\n                            fill: url(#radial-gradient52);\n      }\n\n                        .st29 {\n                            fill: url(#radial-gradient19);\n      }\n\n                        .st30 {\n                            fill: url(#radial-gradient22);\n      }\n\n                        .st31 {\n                            fill: url(#radial-gradient5);\n      }\n\n                        .st32 {\n                            clip - path: url(#clippath-1);\n      }\n\n                        .st33 {\n                            fill: #231f20;\n      }\n\n                        .st34 {\n                            fill: url(#radial-gradient42);\n      }\n\n                        .st35 {\n                            isolation: isolate;\n      }\n\n                        .st36 {\n                            fill: url(#radial-gradient33);\n      }\n\n                        .st37 {\n                            opacity: 0;\n      }\n\n                        .st37, .st38 {\n                            mix - blend - mode: screen;\n      }\n\n                        .st39 {\n                            clip - path: url(#clippath-5);\n      }\n\n                        .st40 {\n                            fill: url(#radial-gradient47);\n      }\n\n                        .st41 {\n                            fill: url(#radial-gradient38);\n      }\n\n                        .st42 {\n                            fill: url(#radial-gradient31);\n      }\n\n                        .st43 {\n                            clip - path: url(#clippath-8);\n      }\n\n                        .st44 {\n                            fill: url(#radial-gradient35);\n      }\n\n                        .st45 {\n                            fill: url(#radial-gradient26);\n      }\n\n                        .st46 {\n                            fill: url(#radial-gradient7);\n      }\n\n                        .st47 {\n                            fill: url(#radial-gradient37);\n      }\n\n                        .st48 {\n                            fill: url(#radial-gradient18);\n      }\n\n                        .st49 {\n                            clip - path: url(#clippath-3);\n      }\n\n                        .st50 {\n                            fill: url(#radial-gradient14);\n      }\n\n                        .st51 {\n                            fill: url(#radial-gradient13);\n      }\n\n                        .st52 {\n                            fill: url(#radial-gradient56);\n      }\n\n                        .st53 {\n                            fill - opacity: .8;\n      }\n\n                        .st53, .st54 {\n                            fill: #910811;\n      }\n\n                        .st55 {\n                            fill: url(#radial-gradient32);\n      }\n\n                        .st56 {\n                            fill: url(#radial-gradient27);\n      }\n\n                        .st57 {\n                            fill: url(#radial-gradient8);\n      }\n\n                        .st58 {\n                            fill: url(#radial-gradient12);\n      }\n\n                        .st59 {\n                            fill: url(#radial-gradient43);\n      }\n\n                        .st60 {\n                            fill: url(#radial-gradient1);\n      }\n\n                        .st60, .st61 {\n                            fill - opacity: .5;\n      }\n\n                        .st62 {\n                            fill: url(#radial-gradient25);\n      }\n\n                        .st63 {\n                            fill: url(#radial-gradient23);\n      }\n\n                        .st61 {\n                            fill: url(#radial-gradient);\n      }\n\n                        .st64 {\n                            fill: url(#radial-gradient17);\n      }\n\n                        .st65 {\n                            fill: url(#radial-gradient6);\n      }\n\n                        .st66 {\n                            fill: url(#radial-gradient2);\n      }\n\n                        .st67 {\n                            fill: url(#radial-gradient40);\n      }\n\n                        .st68 {\n                            fill: url(#radial-gradient50);\n      }\n\n                        .st69 {\n                            fill: url(#radial-gradient15);\n      }\n\n                        .st70 {\n                            fill: url(#radial-gradient44);\n      }\n\n                        .st71 {\n                            clip - path: url(#clippath-2);\n      }\n\n                        .st72 {\n                            fill: url(#radial-gradient4);\n      }\n\n                        .st73 {\n                            fill: url(#radial-gradient3);\n      }\n\n                        .st74 {\n                            fill: url(#radial-gradient29);\n      }\n\n                        .st75 {\n                            fill: url(#radial-gradient9);\n      }\n\n                        .st76 {\n                            fill: url(#radial-gradient51);\n      }\n\n                        .st77 {\n                            clip - path: url(#clippath);\n      }\n\n                        .st78 {\n                            fill: url(#radial-gradient36);\n      }\n\n                        .st79 {\n                            fill: url(#radial-gradient16);\n      }\n                    " }} />
                    <clipPath id="clippath">
                        <rect className="st9" x={64} y={54} width={410} height={158} />
                    </clipPath>
                    <radialGradient id="radial-gradient" cx="-1790.1" cy="1477.8" fx="-1790.1" fy="1477.8" r={1} gradientTransform="translate(10132.8 -689325.3) rotate(-89.9) scale(385.6 -4.5)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ff120a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient1" cx="-1790.1" cy="1477.8" fx="-1790.1" fy="1477.8" r={1} gradientTransform="translate(10132.8 -689326.3) rotate(-89.9) scale(385.6 -4.5)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ff120a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient2" cx="-1806.9" cy={1515} fx="-1806.9" fy={1515} r={1} gradientTransform="translate(-169204.6 4647.1) rotate(179.8) scale(94.8 2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient3" cx="-1806.9" cy={1515} fx="-1806.9" fy={1515} r={1} gradientTransform="translate(-169204.6 4647.1) rotate(179.8) scale(94.8 2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient4" cx="-1823.7" cy="1512.4" fx="-1823.7" fy="1512.4" r={1} gradientTransform="translate(-89020.8 4595.2) rotate(179.6) scale(49.9 2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient5" cx="-1823.7" cy="1512.4" fx="-1823.7" fy="1512.4" r={1} gradientTransform="translate(-89020.8 4595.2) rotate(179.6) scale(49.9 2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <clipPath id="clippath-1">
                        <rect className="st9" x={2100} y={404} width={52} height={39} />
                    </clipPath>
                    <radialGradient id="radial-gradient6" cx="-1806.9" cy={1515} fx="-1806.9" fy={1515} r={1} gradientTransform="translate(-170155.6 4491.1) rotate(179.8) scale(94.8 2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient7" cx="-1806.9" cy={1515} fx="-1806.9" fy={1515} r={1} gradientTransform="translate(-170155.6 4491.1) rotate(179.8) scale(94.8 2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient8" cx="-1823.7" cy="1512.4" fx="-1823.7" fy="1512.4" r={1} gradientTransform="translate(-89971.8 4439.2) rotate(179.6) scale(49.9 2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient9" cx="-1823.7" cy="1512.4" fx="-1823.7" fy="1512.4" r={1} gradientTransform="translate(-89971.8 4439.2) rotate(179.6) scale(49.9 2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <clipPath id="clippath-2">
                        <rect className="st9" x={1149} y={248} width={52} height={39} />
                    </clipPath>
                    <radialGradient id="radial-gradient10" cx="-1812.5" cy="1399.1" fx="-1812.5" fy="1399.1" r={1} gradientTransform="translate(-131248.2 3429.2) rotate(179.8) scale(73 1.8)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient11" cx="-1812.5" cy="1399.1" fx="-1812.5" fy="1399.1" r={1} gradientTransform="translate(-131248.2 3429.2) rotate(179.8) scale(73 1.8)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient12" cx="-1834.5" cy="1395.9" fx="-1834.5" fy="1395.9" r={1} gradientTransform="translate(-69477.1 3389.2) rotate(179.6) scale(38.4 1.8)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient13" cx="-1834.5" cy="1395.9" fx="-1834.5" fy="1395.9" r={1} gradientTransform="translate(-69477.1 3389.2) rotate(179.6) scale(38.4 1.8)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient14" cx="-1812.5" cy="1399.1" fx="-1812.5" fy="1399.1" r={1} gradientTransform="translate(-131319.2 3511.2) rotate(179.8) scale(73 1.8)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient15" cx="-1812.5" cy="1399.1" fx="-1812.5" fy="1399.1" r={1} gradientTransform="translate(-131319.2 3511.2) rotate(179.8) scale(73 1.8)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient16" cx="-1834.5" cy="1395.9" fx="-1834.5" fy="1395.9" r={1} gradientTransform="translate(-69548.1 3471.2) rotate(179.6) scale(38.4 1.8)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient17" cx="-1834.5" cy="1395.9" fx="-1834.5" fy="1395.9" r={1} gradientTransform="translate(-69548.1 3471.2) rotate(179.6) scale(38.4 1.8)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient18" cx="-1763.4" cy="1405.9" fx="-1763.4" fy="1405.9" r={1} gradientTransform="translate(130081.9 3494.3) rotate(.2) scale(73 -1.8)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient19" cx="-1741.3" cy="1409.3" fx="-1741.3" fy="1409.3" r={1} gradientTransform="translate(68334.1 3454.2) rotate(.4) scale(38.4 -1.8)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient20" cx="-1763.4" cy="1405.9" fx="-1763.4" fy="1405.9" r={1} gradientTransform="translate(130081.9 3494.3) rotate(.2) scale(73 -1.8)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient21" cx="-1741.3" cy="1409.3" fx="-1741.3" fy="1409.3" r={1} gradientTransform="translate(68334.1 3454.2) rotate(.4) scale(38.4 -1.8)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient22" cx="-1806.9" cy={1515} fx="-1806.9" fy={1515} r={1} gradientTransform="translate(-169582.6 4567.1) rotate(179.8) scale(94.8 2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient23" cx="-1806.9" cy={1515} fx="-1806.9" fy={1515} r={1} gradientTransform="translate(-169582.6 4567.1) rotate(179.8) scale(94.8 2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient24" cx="-1823.7" cy="1512.4" fx="-1823.7" fy="1512.4" r={1} gradientTransform="translate(-89432.8 4515.2) rotate(179.6) scale(49.9 2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient25" cx="-1823.7" cy="1512.4" fx="-1823.7" fy="1512.4" r={1} gradientTransform="translate(-89432.8 4515.2) rotate(179.6) scale(49.9 2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <clipPath id="clippath-3">
                        <rect className="st9" x={1722} y={324} width={52} height={39} />
                    </clipPath>
                    <radialGradient id="radial-gradient26" cx="-1806.9" cy={1515} fx="-1806.9" fy={1515} r={1} gradientTransform="translate(-170306.6 5280.1) rotate(179.8) scale(94.8 2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient27" cx="-1806.9" cy={1515} fx="-1806.9" fy={1515} r={1} gradientTransform="translate(-170306.6 5280.1) rotate(179.8) scale(94.8 2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient28" cx="-1823.7" cy="1512.4" fx="-1823.7" fy="1512.4" r={1} gradientTransform="translate(-90156.8 5228.2) rotate(179.6) scale(49.9 2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient29" cx="-1823.7" cy="1512.4" fx="-1823.7" fy="1512.4" r={1} gradientTransform="translate(-90156.8 5228.2) rotate(179.6) scale(49.9 2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <clipPath id="clippath-4">
                        <rect className="st9" x={998} y={1037} width={52} height={39} />
                    </clipPath>
                    <radialGradient id="radial-gradient30" cx="-1806.9" cy={1515} fx="-1806.9" fy={1515} r={1} gradientTransform="translate(-169364.6 4971.1) rotate(179.8) scale(94.8 2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient31" cx="-1806.9" cy={1515} fx="-1806.9" fy={1515} r={1} gradientTransform="translate(-169364.6 4971.1) rotate(179.8) scale(94.8 2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient32" cx="-1823.7" cy="1512.4" fx="-1823.7" fy="1512.4" r={1} gradientTransform="translate(-89214.8 4919.2) rotate(179.6) scale(49.9 2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient33" cx="-1823.7" cy="1512.4" fx="-1823.7" fy="1512.4" r={1} gradientTransform="translate(-89214.8 4919.2) rotate(179.6) scale(49.9 2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <clipPath id="clippath-5">
                        <rect className="st9" x={1940} y={728} width={52} height={39} />
                    </clipPath>
                    <radialGradient id="radial-gradient34" cx="-1769.1" cy="1520.1" fx="-1769.1" fy="1520.1" r={1} gradientTransform="translate(168085.3 4887.2) rotate(.2) scale(94.8 -2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient35" cx="-1769.1" cy="1520.1" fx="-1769.1" fy="1520.1" r={1} gradientTransform="translate(168085.3 4887.2) rotate(.2) scale(94.8 -2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient36" cx={-1752} cy="1522.7" fx={-1752} fy="1522.7" r={1} gradientTransform="translate(87935.5 4835.2) rotate(.4) scale(49.9 -2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient37" cx={-1752} cy="1522.7" fx={-1752} fy="1522.7" r={1} gradientTransform="translate(87935.5 4835.2) rotate(.4) scale(49.9 -2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <clipPath id="clippath-6">
                        <rect className="st9" x="304.7" y={644} width={52} height={39} />
                    </clipPath>
                    <radialGradient id="radial-gradient38" cx="-1769.1" cy="1520.1" fx="-1769.1" fy="1520.1" r={1} gradientTransform="translate(167874.3 4696.2) rotate(.2) scale(94.8 -2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient39" cx="-1769.1" cy="1520.1" fx="-1769.1" fy="1520.1" r={1} gradientTransform="translate(167874.3 4696.2) rotate(.2) scale(94.8 -2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient40" cx={-1752} cy="1522.7" fx={-1752} fy="1522.7" r={1} gradientTransform="translate(87724.5 4644.2) rotate(.4) scale(49.9 -2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient41" cx={-1752} cy="1522.7" fx={-1752} fy="1522.7" r={1} gradientTransform="translate(87724.5 4644.2) rotate(.4) scale(49.9 -2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <clipPath id="clippath-7">
                        <rect className="st9" x="93.7" y={453} width={52} height={39} />
                    </clipPath>
                    <radialGradient id="radial-gradient42" cx="-1769.1" cy="1520.1" fx="-1769.1" fy="1520.1" r={1} gradientTransform="translate(168310.3 4591.2) rotate(.2) scale(94.8 -2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient43" cx="-1769.1" cy="1520.1" fx="-1769.1" fy="1520.1" r={1} gradientTransform="translate(168310.3 4591.2) rotate(.2) scale(94.8 -2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient44" cx={-1752} cy="1522.7" fx={-1752} fy="1522.7" r={1} gradientTransform="translate(88160.5 4539.2) rotate(.4) scale(49.9 -2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient45" cx={-1752} cy="1522.7" fx={-1752} fy="1522.7" r={1} gradientTransform="translate(88160.5 4539.2) rotate(.4) scale(49.9 -2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <clipPath id="clippath-8">
                        <rect className="st9" x="529.7" y={348} width={52} height={39} />
                    </clipPath>
                    <radialGradient id="radial-gradient46" cx="-1769.1" cy="1520.1" fx="-1769.1" fy="1520.1" r={1} gradientTransform="translate(168864.3 4846.2) rotate(.2) scale(94.8 -2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient47" cx="-1769.1" cy="1520.1" fx="-1769.1" fy="1520.1" r={1} gradientTransform="translate(168864.3 4846.2) rotate(.2) scale(94.8 -2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient48" cx={-1752} cy="1522.7" fx={-1752} fy="1522.7" r={1} gradientTransform="translate(88714.5 4794.2) rotate(.4) scale(49.9 -2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient49" cx={-1752} cy="1522.7" fx={-1752} fy="1522.7" r={1} gradientTransform="translate(88714.5 4794.2) rotate(.4) scale(49.9 -2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <clipPath id="clippath-9">
                        <rect className="st9" x="1083.7" y={603} width={52} height={39} />
                    </clipPath>
                    <radialGradient id="radial-gradient50" cx="-1769.1" cy="1520.1" fx="-1769.1" fy="1520.1" r={1} gradientTransform="translate(168356.3 4684.2) rotate(.2) scale(94.8 -2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient51" cx="-1769.1" cy="1520.1" fx="-1769.1" fy="1520.1" r={1} gradientTransform="translate(168356.3 4684.2) rotate(.2) scale(94.8 -2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient52" cx={-1752} cy="1522.7" fx={-1752} fy="1522.7" r={1} gradientTransform="translate(88206.5 4632.2) rotate(.4) scale(49.9 -2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient53" cx={-1752} cy="1522.7" fx={-1752} fy="1522.7" r={1} gradientTransform="translate(88206.5 4632.2) rotate(.4) scale(49.9 -2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <clipPath id="clippath-10">
                        <rect className="st9" x="575.7" y={441} width={52} height={39} />
                    </clipPath>
                    <radialGradient id="radial-gradient54" cx="-1769.1" cy="1520.1" fx="-1769.1" fy="1520.1" r={1} gradientTransform="translate(169354.3 4777.2) rotate(.2) scale(94.8 -2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient55" cx={-1752} cy="1522.7" fx={-1752} fy="1522.7" r={1} gradientTransform="translate(89204.5 4725.2) rotate(.4) scale(49.9 -2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient56" cx="-1769.1" cy="1520.1" fx="-1769.1" fy="1520.1" r={1} gradientTransform="translate(169354.3 4777.2) rotate(.2) scale(94.8 -2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <radialGradient id="radial-gradient57" cx={-1752} cy="1522.7" fx={-1752} fy="1522.7" r={1} gradientTransform="translate(89204.5 4725.2) rotate(.4) scale(49.9 -2.4)" gradientUnits="userSpaceOnUse">
                        <stop offset={0} stopColor="#ffa90a" />
                        <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                    </radialGradient>
                    <clipPath id="clippath-11">
                        <rect className="st9" x="1573.7" y={534} width={52} height={39} />
                    </clipPath>
                </defs>
                <image width={2278} height={1588} xlinkHref={icad_image} />
                <image width={381} height={1588} transform="translate(2266)" xlinkHref="Bar.png" />
                <g className="st35">
                    <g id="Layer_11" data-name="Layer_1">
                        <rect className="st54" x={2278} width={369} height={1588} />
                        <rect className="st54" x={2278} width={369} height={1588} />
                        <g className="st37">
                            <rect className="st9" x={2278} y={-53} width={369} height={1672} />
                        </g>
                        <g ref={setRef('backIcon', 'backIcon')}>
                            <path className="st18" d="M2431.4,1352.2c0-.1,0-.2.2-.2h6.1c1.7,0,3,.4,3.8,1.1.8.8,1.2,1.8,1.2,3s-.2,1.6-.5,2.1-.8,1-1.3,1.2h0c.3,0,.5.3.8.5s.5.4.7.8c.2.3.4.7.5,1.1s.2.8.2,1.3c0,1.6-.5,2.7-1.5,3.4-.9.7-2.3,1.1-4,1.1h-5.9c-.1,0-.2,0-.2-.2v-15.2h-.1ZM2437.3,1358.3c.6,0,1.1-.2,1.5-.5s.6-.8.6-1.4-.2-1-.6-1.3c-.3-.3-.8-.5-1.5-.5h-2.5v3.4h2.5v.3ZM2434.7,1364.7h2.7c.7,0,1.2-.2,1.6-.5.4-.4.6-.8.6-1.4s-.2-1.1-.6-1.4c-.4-.3-.9-.5-1.6-.5h-2.7v3.6h0v.2ZM2449.4,1352.2c0-.2.1-.2.3-.2h2.9c.1,0,.2,0,.3.2l5.3,15.2c0,.1,0,.2-.2.2h-3c-.2,0-.3,0-.3-.2l-.9-2.7h-5.5l-.9,2.7c0,.2-.1.2-.3.2h-3c-.1,0-.2,0-.2-.2l5.4-15.2h0ZM2452.9,1361.7l-1.8-5.5h0l-1.8,5.5h3.6ZM2459.3,1364c0-.2-.2-.5-.2-.7,0-.3,0-.5-.1-.8v-5.2c0-.3,0-.6.1-.8,0-.2.1-.5.2-.8.4-1.3,1.1-2.2,2.1-2.9,1-.6,2.1-1,3.5-1s2.5.3,3.4.9,1.6,1.4,2.1,2.6c0,0,0,.2-.1.3l-2.5,1.1h-.3c-.2-.5-.5-.9-.9-1.3-.4-.3-.9-.5-1.6-.5s-1.1,0-1.5.5c-.4.3-.7.7-.8,1.3,0,0,0,.3-.1.5v5.8s0,.3.1.4c.2.5.4,1,.8,1.3.4.3.9.5,1.5.5s1.2-.2,1.6-.5c.4-.3.7-.8.9-1.3,0-.2.2-.2.3,0l2.5,1.1q.2,0,.1.3c-.4,1.1-1.1,2-2.1,2.6-.9.6-2,.9-3.4.9s-2.6-.3-3.5-.9c-.9-.7-1.6-1.6-2.1-2.9v-.5ZM2472.6,1352.2c0-.1,0-.2.2-.2h2.9c.1,0,.2,0,.2.2v6.8l5.2-6.8s.2-.2.4-.2h3.4v.2l-4.7,5.9,5.2,9.1c.1.2,0,.3-.1.3h-3.4c-.1,0-.3,0-.3-.2l-3.5-6.6-2.1,2.6v4c0,.1,0,.2-.2.2h-2.9c-.1,0-.2,0-.2-.2v-15.2h0Z" />
                            <path className="st18" d="M2458.4,1331.6c19.4,0,35.2-15.8,35.2-35.2s-15.8-35.2-35.2-35.2-35.2,15.8-35.2,35.2,15.8,35.2,35.2,35.2ZM2458.4,1266c16.7,0,30.4,13.6,30.4,30.4s-13.6,30.4-30.4,30.4-30.4-13.6-30.4-30.4,13.6-30.4,30.4-30.4Z" />
                            <path className="st18" d="M2453.7,1311.5c.9.9,2.5.9,3.4,0s.9-2.5,0-3.4l-9.2-9.2h26.8c1.3,0,2.4-1.1,2.4-2.4s-1.1-2.4-2.4-2.4h-26.8l9.3-9.2c.9-.9.9-2.5,0-3.4-.5-.5-1.1-.7-1.7-.7s-1.2.2-1.7.7l-13.4,13.4c-.5.5-.7,1.1-.7,1.7s.3,1.2.7,1.7l13.4,13.4v-.2h-.1Z" />
                        </g>
                        <g ref={setRef("homeIcon", "homeIcon")}>
                            <path className="st18" d="M2399.4,1172.9s0-.2.2-.2h2.9c.1,0,.2,0,.2.2v5.9h5.3v-5.9s0-.2.2-.2h2.9c.1,0,.2,0,.2.2v15.2c0,.1,0,.2-.2.2h-2.9c-.1,0-.2,0-.2-.2v-6h-5.3v6c0,.1,0,.2-.2.2h-2.9c-.1,0-.2,0-.2-.2v-15.2ZM2420.3,1188.6c-1.4,0-2.6-.3-3.6-.9s-1.7-1.6-2.1-2.8c0-.3-.2-.5-.2-.8s0-.6-.1-.9,0-.7,0-1.1v-4.1c0-.3,0-.6.1-.9,0-.3.1-.5.2-.8.4-1.2,1.1-2.2,2.1-2.8,1-.6,2.2-1,3.6-1s2.6.3,3.6,1c1,.6,1.7,1.6,2.1,2.8,0,.3.2.6.2.8,0,.3.1.5.1.9v5.2c0,.3,0,.6-.1.9,0,.3-.1.5-.2.8-.4,1.3-1.1,2.2-2.1,2.8-1,.6-2.2.9-3.6.9ZM2420.3,1185.6c.6,0,1.2-.2,1.6-.5.4-.3.7-.7.9-1.3,0,0,0-.3.1-.5v-5.7c0-.2,0-.3-.1-.5-.2-.5-.5-1-.9-1.3s-.9-.5-1.6-.5-1.2.2-1.6.5c-.4.3-.7.7-.9,1.3,0,0,0,.3-.1.5v5.7c0,.2,0,.3.1.5.2.5.5,1,.9,1.3s.9.5,1.6.5h0ZM2429,1172.9s0-.2.2-.2h2.7c.2,0,.3,0,.4.2l3.9,8.9h0l3.9-8.9s.2-.2.4-.2h2.7c.1,0,.2,0,.2.2v15.2c0,.1,0,.2-.2.2h-2.6c-.1,0-.2,0-.2-.2v-8.8h0l-2.9,6.6c0,.2-.2.3-.4.3h-1.6c-.2,0-.4,0-.4-.3l-2.9-6.6h0v8.8c0,.1,0,.2-.2.2h-2.6c-.1,0-.2,0-.2-.2v-15.2h-.2,0ZM2446.5,1172.9s0-.2.2-.2h10c.1,0,.2,0,.2.2v2.5c0,.1,0,.2-.2.2h-6.8v3.1h5.7c.1,0,.2,0,.2.2v2.4s0,.2-.2.2h-5.7v3.2h6.8c.1,0,.2,0,.2.2v2.5c0,.1,0,.2-.2.2h-10c-.1,0-.2,0-.2-.2v-15.2.7ZM2465.2,1188.3c-.1,0-.2,0-.2-.2v-15.2s0-.2.2-.2h6.1c.8,0,1.6,0,2.3.4.7.2,1.2.6,1.7,1,.5.5.8,1,1.1,1.6.2.6.4,1.3.4,2.1s-.1,1.4-.4,2c-.2.6-.6,1.1-1.1,1.6-.5.4-1,.8-1.7,1s-1.4.4-2.3.4h-2.9v5.2c0,.1,0,.2-.2.2h-3ZM2471.1,1179.8c.7,0,1.3-.2,1.7-.5.4-.4.6-.9.6-1.5s-.2-1.2-.6-1.5c-.4-.4-1-.6-1.7-.6h-2.7v3.9h2.7v.2ZM2481.5,1172.9s.1-.2.3-.2h2.9c.2,0,.3,0,.3.2l5.3,15.2c0,.1,0,.2-.2.2h-3c-.1,0-.2,0-.3-.2l-.9-2.7h-5.5l-.9,2.7c0,.2-.1.2-.3.2h-3c-.1,0-.2,0-.2-.2l5.4-15.2h0ZM2485.1,1182.5l-1.8-5.5h0l-1.8,5.5h3.6ZM2492.1,1184.8c0-.3-.2-.5-.2-.8s0-.6-.1-.9,0-.7,0-1.1v-4.1c0-.3,0-.6.1-.9,0-.3.1-.5.2-.8.4-1.3,1.1-2.2,2.1-2.8,1-.6,2.2-.9,3.6-.9s1.4,0,2,.2,1.1.4,1.6.7c.5.3.9.6,1.2,1.1.3.4.6.8.8,1.3v.3l-2.5,1h-.3c-.3-.5-.7-.9-1.1-1.2-.4-.3-.9-.4-1.6-.4s-1.2.2-1.6.5c-.4.3-.7.7-.9,1.3,0,0,0,.3-.1.5v5.7c0,.2,0,.3.1.5.2.5.5,1,.9,1.3s1,.5,1.7.5,1.1,0,1.6-.4.8-.7.9-1.2c0-.2.1-.4.1-.7v-.9c0-.4,0,0-.1,0h-2.1c-.1,0-.2,0-.2-.2v-2.2c0-.1,0-.2.2-.2h5.4c.1,0,.2,0,.2.2v3.2c0,.6-.2,1.1-.3,1.6-.4,1.3-1.1,2.2-2.1,2.9-1,.7-2.2,1-3.6,1s-2.6-.3-3.6-.9-1.7-1.6-2.1-2.8l-.2-.2v-.2ZM2506.6,1172.9s0-.2.2-.2h10c.1,0,.2,0,.2.2v2.5c0,.1,0,.2-.2.2h-6.8v3.1h5.7c.1,0,.2,0,.2.2v2.4s0,.2-.2.2h-5.7v3.2h6.8c.1,0,.2,0,.2.2v2.5c0,.1,0,.2-.2.2h-10c-.1,0-.2,0-.2-.2v-15.2.7Z" />
                            <path className="st18" d="M2458.4,1152.3c19.4,0,35.2-15.8,35.2-35.2s-15.8-35.2-35.2-35.2-35.2,15.8-35.2,35.2,15.8,35.2,35.2,35.2ZM2458.4,1086.8c16.7,0,30.4,13.6,30.4,30.4s-13.6,30.4-30.4,30.4-30.4-13.6-30.4-30.4,13.6-30.4,30.4-30.4Z" />
                            <path className="st18" d="M2471,1113.8h0l-10.9-10.9c-.5-.5-1.1-.7-1.7-.7s-1.3.2-1.7.7l-10.9,10.9h0c-1,1-1,2.5,0,3.5.4.4,1,.7,1.6.7h.4v8c0,1.6,1.3,2.9,2.9,2.9h4.2c.4,0,.8-.3.8-.8v-6.3c0-.7.6-1.3,1.3-1.3h2.5c.7,0,1.3.6,1.3,1.3v6.3c0,.4.4.8.8.8h4.3c1.6,0,2.9-1.3,2.9-2.9v-8h.4c.7,0,1.3-.3,1.7-.7,1-1,1-2.5,0-3.5h0Z" />
                        </g>
                        <g ref={setRef("aboutAryamIcadIcon", "aboutAryamIcadIcon")}>
                            <path className="st18" d="M2425.7,541.8c0-.2.1-.2.3-.2h2.9c.2,0,.3,0,.3.2l5.3,15.2c0,.1,0,.2-.2.2h-3c-.1,0-.2,0-.3-.2l-.9-2.7h-5.5l-.9,2.7c0,.2-.1.2-.3.2h-3c-.1,0-.2,0-.2-.2l5.4-15.2h0ZM2429.2,551.4l-1.8-5.5h0l-1.8,5.5h3.6ZM2436.2,541.8c0-.1,0-.2.2-.2h6.1c1.7,0,3,.4,3.8,1.1.8.8,1.2,1.8,1.2,3s-.2,1.6-.5,2.1-.8,1-1.3,1.2h0c.3,0,.5.3.8.5s.5.5.7.8.4.7.5,1.1c.1.4.2.8.2,1.3,0,1.5-.5,2.7-1.5,3.5-.9.7-2.3,1.1-4,1.1h-5.9c-.1,0-.2,0-.2-.2v-15.2h-.1ZM2442.2,548c.6,0,1.1-.2,1.5-.5s.6-.8.6-1.4-.2-1-.6-1.3c-.3-.3-.8-.5-1.5-.5h-2.5v3.4h2.5v.3ZM2439.6,554.4h2.7c.7,0,1.2-.2,1.6-.5.4-.4.6-.8.6-1.4s-.2-1.1-.6-1.4c-.4-.4-.9-.5-1.6-.5h-2.7v3.6h0v.2ZM2456,557.5c-1.4,0-2.6-.3-3.6-.9-1-.6-1.7-1.6-2.1-2.9,0-.3-.2-.5-.2-.8s0-.6-.1-.9v-5.2c0-.3,0-.6.1-.9,0-.3.1-.5.2-.8.4-1.3,1.1-2.2,2.1-2.8s2.2-1,3.6-1,2.6.3,3.6,1c1,.6,1.7,1.6,2.1,2.8,0,.3.2.5.2.8s.1.6.1.9v5.2c0,.3,0,.6-.1.9,0,.3-.1.5-.2.8-.4,1.3-1.1,2.2-2.1,2.9-1,.6-2.2.9-3.6.9ZM2456,554.5c.6,0,1.2-.2,1.6-.5.4-.3.7-.7.9-1.3,0,0,0-.3.1-.5v-5.6c0-.2,0-.3-.1-.5-.2-.5-.5-1-.9-1.3s-.9-.5-1.6-.5-1.2.2-1.6.5c-.4.3-.7.7-.9,1.3,0,0,0,.3-.1.5v5.6c0,.2,0,.3.1.5.2.5.5,1,.9,1.3s.9.5,1.6.5ZM2470.7,557.5c-.9,0-1.7,0-2.4-.4-.7-.3-1.4-.6-1.9-1.1s-.9-1.1-1.2-1.9c-.3-.8-.4-1.6-.4-2.6v-9.7c0-.1,0-.2.2-.2h2.9c.1,0,.2,0,.2.2v9.8c0,.9.2,1.7.7,2.2s1.1.8,1.9.8,1.4-.3,1.9-.8.7-1.2.7-2.2v-9.8c0-.1,0-.2.2-.2h2.9c.1,0,.2,0,.2.2v9.7c0,1-.1,1.8-.5,2.6-.3.8-.7,1.4-1.2,1.9s-1.1.9-1.9,1.1c-.7.3-1.5.4-2.4.4h.1ZM2483,557.2c-.1,0-.2,0-.2-.2v-12.3h-4c-.1,0-.2,0-.2-.2v-2.6c0-.1,0-.2.2-.2h11.6c.1,0,.2,0,.2.2v2.6c0,.1,0,.2-.2.2h-4.1v12.3c0,.1,0,.2-.2.2h-3.1ZM2400.2,564.8c0-.2.1-.2.3-.2h2.9c.2,0,.3,0,.3.2l5.3,15.2c0,.1,0,.2-.2.2h-3c-.1,0-.2,0-.3-.2l-.9-2.7h-5.5l-.9,2.7c0,.2-.2.2-.3.2h-3c-.1,0-.2,0-.2-.2l5.4-15.2h0ZM2403.7,574.4l-1.8-5.5h0l-1.8,5.5h3.6ZM2419.4,580.2c-.2,0-.3,0-.3-.2l-2.7-5.7h-2.2v5.6c0,.1,0,.2-.2.2h-2.9c-.1,0-.2,0-.2-.2v-15.2c0-.1,0-.2.2-.2h6.2c.8,0,1.5,0,2.2.4.7.2,1.2.6,1.7,1s.8.9,1.1,1.5.4,1.2.4,2-.2,1.9-.7,2.6-1.2,1.3-2.1,1.7l3.1,6.2v.2h-3.6,0ZM2417.1,571.4c.6,0,1.2-.2,1.5-.5.4-.4.6-.8.6-1.4s-.2-1-.6-1.4c-.4-.4-.9-.5-1.5-.5h-2.9v3.6h2.9v.2ZM2428.1,580.2c-.1,0-.2,0-.2-.2v-6l-4.6-9.2c0-.1,0-.2.2-.2h3c.2,0,.3,0,.3.2l2.8,5.7h0l2.8-5.7c0-.2.2-.2.4-.2h3.1v.2l-4.6,9.2v6c0,.1,0,.2-.2.2h-3ZM2440.5,564.8c0-.2.1-.2.3-.2h2.9c.1,0,.2,0,.3.2l5.3,15.2c0,.1,0,.2-.2.2h-3c-.1,0-.2,0-.3-.2l-.9-2.7h-5.5l-.9,2.7c0,.2-.2.2-.3.2h-3c-.1,0-.2,0-.2-.2l5.4-15.2h0ZM2444,574.4l-1.8-5.5h0l-1.8,5.5h3.6ZM2451.1,564.8c0-.1,0-.2.2-.2h2.7c.2,0,.3,0,.4.2l4,8.9h0l3.9-8.9c0-.2.2-.2.4-.2h2.7c.1,0,.2,0,.2.2v15.2c0,.1,0,.2-.2.2h-2.6c-.1,0-.2,0-.2-.2v-8.8h-.1l-2.9,6.6c0,.2-.2.3-.4.3h-1.6c-.2,0-.3,0-.4-.3l-2.9-6.6h0v8.8c0,.1,0,.2-.2.2h-2.6c-.1,0-.2,0-.2-.2v-15.2h-.2,0ZM2474.1,564.8c0-.1,0-.2.2-.2h2.9c.1,0,.2,0,.2.2v15.2c0,.1,0,.2-.2.2h-2.9c-.1,0-.2,0-.2-.2v-15.2ZM2480.5,576.7c-.1-.2-.2-.5-.2-.7,0-.3,0-.5-.1-.9v-5.2c0-.3,0-.6.1-.9,0-.2.1-.5.2-.8.4-1.3,1.1-2.2,2-2.9,1-.6,2.1-1,3.5-1s2.5.3,3.4.9c.9.6,1.6,1.4,2.1,2.6,0,0,0,.2-.1.3l-2.5,1.1h-.3c-.2-.5-.5-.9-.9-1.3-.4-.3-.9-.5-1.6-.5s-1.1.2-1.5.5-.7.7-.8,1.3c0,0,0,.3-.1.5v5.8c0,.2,0,.3.1.4.2.5.4,1,.8,1.3.4.3.9.5,1.5.5s1.2-.2,1.6-.5c.4-.3.7-.8.9-1.3,0-.2.2-.2.3,0l2.5,1.1q.2,0,.1.3c-.4,1.1-1.1,2-2.1,2.6-.9.6-2,.9-3.4.9s-2.6-.3-3.5-.9c-.9-.6-1.6-1.6-2-2.9h0v-.3ZM2497.9,564.8c0-.2.2-.2.3-.2h2.9c.1,0,.2,0,.3.2l5.3,15.2c0,.1,0,.2-.2.2h-3c-.2,0-.3,0-.3-.2l-.9-2.7h-5.5l-.9,2.7c0,.2-.1.2-.3.2h-3c-.1,0-.2,0-.2-.2l5.4-15.2h0ZM2501.4,574.4l-1.8-5.5h0l-1.8,5.5h3.6ZM2508.5,564.8c0-.1,0-.2.2-.2h5.8c1.4,0,2.5.3,3.4.9s1.6,1.5,2,2.6c0,.2.1.4.2.7,0,.2.1.5.1.8v5.5c0,.3,0,.6-.1.9,0,.2-.1.5-.2.7-.4,1.2-1,2.1-2,2.6s-2.1.9-3.4.9h-5.8c-.1,0-.2,0-.2-.2v-15.2h0ZM2511.9,577.1h1.9c.8,0,1.4,0,1.9-.4.5-.3.8-.7,1-1.4,0,0,0-.2.1-.4v-5.6c0-.2,0-.3-.1-.4-.2-.6-.5-1.1-1-1.3-.5-.3-1.1-.4-1.9-.4h-1.9v9.9Z" />
                            <g>
                                <path className="st18" d="M2458.4,518.4c19.4,0,35.2-15.8,35.2-35.2s-15.8-35.2-35.2-35.2-35.2,15.8-35.2,35.2,15.8,35.2,35.2,35.2ZM2458.4,452.8c16.7,0,30.4,13.6,30.4,30.4s-13.6,30.4-30.4,30.4-30.4-13.6-30.4-30.4,13.6-30.4,30.4-30.4Z" />
                                <path className="st18" d="M2452.5,470.4c-2.3-1.4-4.2-.2-4.2,2.5v20.5c0,2.8,1.9,3.9,4.2,2.5l17.4-10.3c2.3-1.4,2.3-3.6,0-5l-17.4-10.3h0Z" />
                            </g>
                        </g>
                        <g ref={setRef("aryamLogo", "aryamLogo")} className="st77">
                            <g>
                                <path className="st18" d="M267.8,147.3h-9.7v9.7h9.7v-9.7Z" />
                                <path className="st18" d="M278,137.1h-9.7v9.7h9.7v-9.7Z" />
                                <path className="st18" d="M243,146.9c-.9.9-1.4,2.1-1.4,3.4v18.6l14.7-14.7v-8.6h8.6l1.6-1.6v-8.6h8.6l10.2-10.2c4.8-4.8,7.6-11.4,7.6-18.2v-9.9l-49.9,49.9h0Z" />
                                <path className="st18" d="M271.3,72.3v-6.7c-.6.7-1.2,1.4-1.8,2.1l-27,26.9c-.6.6-.9,1.4-.9,2.2v12.1l24.8-24.8c3.1-3.1,4.9-7.4,4.9-11.8h0Z" />
                                <path className="st18" d="M241.6,120.3v18.6l43.8-43.8c4.8-4.8,7.6-11.4,7.6-18.2v-23c0,3.4-1.3,7.4-3,11-2.8,6.2-6.8,11.8-11.7,16.6l-35.3,35.3c-.9.9-1.4,2.1-1.4,3.4h0Z" />
                                <path className="st18" d="M279.8,148.6h-8.3l-1.9,1.9v8.3h-8.3l-12.1,12c-4.8,4.8-7.6,11.4-7.6,18.2v23c0-3.4,1.3-7.4,3-11,2.8-6.2,6.8-11.8,11.7-16.6l35.3-35.3c.9-.9,1.4-2.1,1.4-3.4v-18.6l-13.2,13.2v8.3h0Z" />
                                <path className="st18" d="M263.4,193.5v6.7c.6-.7,1.2-1.4,1.8-2.1l14.9-14.9v10.4l6.7-6.7c3.9-3.9,6-9.1,6-14.6v-15.2l-24.7,24.7c-3.1,3.1-4.9,7.4-4.9,11.8h.2Z" />
                                <path className="st18" d="M64.4,169.7h4.1c.2,0,.3.1.3.3v21.7c0,.2,0,.3-.3.3h-4.1c-.2,0-.3-.1-.3-.3v-21.7c0-.2,0-.3.3-.3Z" />
                                <path className="st18" d="M77.4,177.6v-.9c0-.2,0-.4.2-.6.2-.8.6-1.4,1.2-1.8.5-.4,1.3-.7,2.1-.7s1.7.2,2.2.7,1,1.1,1.3,1.8c0,.2.3.3.5.2l3.5-1.6c.2,0,.3-.2.2-.4-.6-1.6-1.6-2.8-2.9-3.7s-2.9-1.3-4.8-1.3-3.6.5-4.9,1.4-2.3,2.3-2.9,4.1c0,.4-.2.7-.3,1.1,0,.4,0,.7-.2,1.2v7.6c0,.4,0,.9.2,1.2,0,.4.2.7.3,1.1.6,1.8,1.5,3.2,2.9,4.1,1.3.9,3,1.4,4.9,1.4s3.5-.4,4.8-1.3c1.3-.9,2.3-2.1,2.9-3.7,0-.2,0-.3-.2-.4l-3.5-1.6c-.2-.1-.3,0-.5.2-.3.7-.7,1.3-1.3,1.8-.5.5-1.3.7-2.2.7s-1.6-.2-2.1-.7c-.5-.4-.9-1-1.2-1.8,0-.2,0-.4-.2-.6v-7.5h0Z" />
                                <path className="st18" d="M102.4,170.1c0-.2-.2-.3-.4-.3h-4.1c-.2,0-.4.1-.4.3l-7.6,21.7c0,.2,0,.3.2.3h4.2c.2,0,.4-.1.4-.3l1.2-3.9h7.7l1.3,3.9c0,.2.2.3.4.3h4.2c.2,0,.3-.1.2-.3l-7.4-21.7h.1ZM97.4,183.7l2.5-7.8h0l2.5,7.8h-5.1,0Z" />
                                <path className="st18" d="M129,178.6c0-.6,0-1.2-.1-1.6,0-.5-.1-.9-.2-1.2,0-.3-.2-.7-.2-1-.5-1.7-1.4-2.9-2.7-3.8-1.3-.8-2.9-1.2-4.8-1.2h-8.2c-.2,0-.3.1-.3.3v21.7c0,.2,0,.3.3.3h8.2c1.9,0,3.5-.4,4.8-1.2s2.2-2.1,2.7-3.8c0-.3.2-.6.2-1s.1-.7.2-1.2c0-.5,0-1,.1-1.6v-4.6h0ZM124.2,182.8v2c0,.2,0,.4-.2.5-.3.9-.8,1.6-1.4,1.9-.7.4-1.6.5-2.6.5h-2.5s-.2,0-.2-.2v-13.4c0-.1,0-.2.2-.2h2.5c1.1,0,2,.2,2.6.5.7.4,1.1,1,1.4,1.9,0,.2,0,.4.2.6v5.6h0v.3h0Z" />
                                <path className="st18" d="M407.5,178h-5.6c-.2,0-.3.1-.3.3v3.3c0,.2.1.3.3.3h3.7c1,0,1.7.2,2.2.6.5.4.7,1,.7,1.8v2.7c0,.3-.2.5-.3.7-.2.2-.4.3-.7.4-.3,0-.8.1-1.3.1h-5.5c-.2,0-.3.1-.3.3v3.3c0,.2.1.3.3.3h7.8c.8,0,1.5,0,2.1-.3.6-.2,1.1-.5,1.5-.9s.7-1,.9-1.7c.2-.7.3-1.6.3-2.6v-2.8c0-2-.5-3.5-1.5-4.4s-2.4-1.4-4.2-1.4h-.1Z" />
                                <path className="st18" d="M458.1,192.1c1.3,0,2.3-.3,2.9-1s.9-1.7.9-3.1v-9.2c0-.2-.1-.3-.3-.3h-3.9c-.2,0-.3.1-.3.3v7.6c0,.6-.1,1.1-.4,1.3-.2.2-.6.4-1.2.4h-2.7c-.8,0-1.3-.1-1.8-.4-.4-.3-.7-.7-.7-1.2v-2.3c0-1.2-.2-2.1-.5-2.9-.3-.7-.8-1.3-1.4-1.8-.6-.4-1.3-.7-2.1-.9s-1.8-.3-2.8-.3l4.8-5.6c0-.2,0-.3-.1-.5l-2.7-2.3h-.4l-6.9,8.2c-.1.1-.2.3-.4.4-.2.2-.2.3-.2.5v2.6c0,.2.1.3.3.3h4.8c1,0,1.7.2,2.2.6.5.4.7,1,.7,1.9v2.6c0,.3-.2.5-.3.7-.2.2-.4.3-.7.3h-21.9c-.5,0-.9-.1-1.2-.4-.2-.2-.4-.7-.4-1.3v-16c0-.2-.1-.3-.3-.3h-3.9c-.2,0-.3.1-.3.3v17.5c0,1.4.3,2.4.9,3.1.6.7,1.5,1,2.9,1h25.2c1,0,1.8-.1,2.5-.4.7-.3,1.2-.7,1.6-1.4.4.8.9,1.2,1.6,1.5.6.2,1.4.4,2.3.4h4.3-.1Z" />
                                <path className="st18" d="M454.9,195h3.2c.2,0,.3.1.3.3v3.2c0,.2-.1.3-.3.3h-3.2c-.2,0-.3-.1-.3-.3v-3.2c0-.2.1-.3.3-.3Z" />
                                <path className="st18" d="M459.9,195h3.3c.2,0,.3.1.3.3v3.2c0,.2-.1.3-.3.3h-3.3c-.2,0-.3-.1-.3-.3v-3.2c0-.2.1-.3.3-.3Z" />
                                <path className="st18" d="M473.7,165.1h-1.7c-.2,0-.3.1-.3.3,0,.4,0,.7-.2.9-.1.2-.3.2-.7.2s-.9,0-1.4-.3c-.5-.2-1-.4-1.5-.6-.5-.2-1-.4-1.6-.6-.5-.2-1-.3-1.5-.3s-1.3.2-1.8.6c-.5.4-.8,1.1-1,1.9,0,.2,0,.4.2.4l1.7.5c.2,0,.4,0,.4-.2.1-.4.3-.6.5-.7.2-.1.4-.2.6-.2.3,0,.7,0,1.2.3.4.2.9.4,1.4.5.5.2,1,.4,1.6.5.6.2,1.1.3,1.7.3,1,0,1.7-.3,2.1-.9.4-.6.6-1.4.6-2.5s-.1-.3-.3-.3h0v.2h0Z" />
                                <path className="st18" d="M470.2,170.2h-3.9c-.2,0-.3.1-.3.3v21.3c0,.2.1.3.3.3h3.9c.2,0,.3-.1.3-.3v-21.3c0-.2-.1-.3-.3-.3Z" />
                                <path className="st18" d="M76.2,110l-12.2,36.2h7.7l2.6-7.7h13.4l2.6,7.7h7.6l-12.2-36.1h-9.5ZM76.3,132.1l4.6-14,4.6,14h-9.3.1Z" />
                                <path className="st18" d="M107.9,118.8h-7.3v27.4h7.7v-15.1c0-3.6,2.8-5.8,7.4-5.8v-7.2c-3.2,0-6,1.4-7.9,3.3v-2.7h.1Z" />
                                <path className="st18" d="M139.2,118.8l-7,21.3-6.2-21.3h-8l9.2,27.4h2.5l-3.7,9.3h7.6l3.4-9.3,10.1-27.4h-8,0Z" />
                                <path className="st18" d="M168.3,122.1c-2-2.2-4.8-3.5-8.4-3.5-7.9,0-13.6,5.7-13.6,13.9s5.7,14.4,13.6,14.4,6.5-1.4,8.4-3.7v3h7.1v-27.4h-7.1v3.3ZM161,140c-4.1,0-7.1-3.2-7.1-7.5s3-7.6,7.1-7.6,7.1,3.1,7.1,7.6-2.9,7.5-7.1,7.5Z" />
                                <path className="st18" d="M213.5,118.1c-4.4,0-7.4,1.7-9,4-1.5-2.6-4.2-4-8.3-4s-6.2,1.4-7.9,3.3v-2.6h-7.3v27.4h7.7v-16.3c0-2.3,1.7-4.9,5-4.9s4.9,2.6,4.9,5.6v15.6h7.7v-16.3c0-2.3,1.7-4.9,5.1-4.9s4.8,2.6,4.8,5.6v15.6h7.7v-17c0-6.1-3.6-11-10.5-11h.1Z" />
                                <path className="st18" d="M343.5,121.5c-3-2.6-6.6-3.9-10.8-3.9s-7.8,1.3-10.8,3.9-4.5,6-4.5,10.5v11.8c0,3.5-.7,6-2.1,7.6-1.4,1.7-3,2.5-4.8,2.6l3.7,3.7c3.3-.7,6-2.2,8.1-4.5,2.2-2.3,3.3-5.2,3.5-8.8,1.6,1.3,3.9,1.9,6.8,1.9h4.4l3-3.1c1,2.1,2.7,3.1,5.1,3.1h2.7v-14.3c0-4.4-1.5-7.9-4.4-10.5h0ZM332.7,142.2c-2,0-3.6-.6-4.9-1.7-1.3-1-1.9-3.3-1.9-6.6v-1.9c0-3.4.7-6,2.2-7.6,1.4-1.7,3-2.5,4.7-2.6,1.8,0,3.4.9,4.8,2.6s2.1,4.2,2.1,7.6v8.7c0,.6,0,1,.2,1.5h-7.2Z" />
                                <path className="st18" d="M417.6,154.8l4.9,4.9,5-4.9-5-4.9-4.9,4.9Z" />
                                <path className="st18" d="M433,146.3h2.8v-26.6l-8.5,4.5v16.4c0,.6,0,1,.2,1.5h-64.4v-32.1l-8.4,4.4v31.8h70.2l3-3.2c1,2.2,2.7,3.2,5.1,3.2h0Z" />
                                <path className="st18" d="M432.9,149.9l-4.9,4.9,4.9,4.9,4.9-4.9-4.9-4.9Z" />
                                <path className="st18" d="M445.4,144c0,3.5-.7,6-2.1,7.7s-3,2.6-4.8,2.6l3.6,3.7c3.4-.7,6.2-2.3,8.4-4.7,2.2-2.4,3.3-5.5,3.3-9.3v-24.2l-8.5,4.5v19.7h.1Z" />
                                <path className="st18" d="M462.2,114.5v31.8h8.4v-36.3l-8.4,4.4h0Z" />
                            </g>
                        </g>
                        <g className="st38">
                            <rect className="st61" x={2270} y={188} width={16} height={1365} />
                        </g>
                        <g className="st38">
                            <rect className="st60" x={2270} y={187} width={16} height={1365} />
                        </g>
                        <g ref={setRef('sdeiraLogo', 'sdeiraLogo')}>
                            <path className="st18" d="M1992.2,108.5v-11.7l-34.7,34.4c-.8.8-1.2,1.8-1.2,2.9v10l35.9-35.6h0Z" />
                            <path className="st18" d="M1974.2,132.2c-.8.8-1.2,1.8-1.2,2.9v12.9l50.2-49.7v-14.6l-48.9,48.5h0Z" />
                            <path className="st18" d="M1956.3,172.1v15.9l62.7-62.1v-17.6l-61.5,60.9c-.8.8-1.2,1.8-1.2,2.9Z" />
                            <path className="st18" d="M1996.4,86.8v-8.8l-26.3,26.1c-.8.8-1.2,1.8-1.2,2.9v7.1l27.6-27.3h0Z" />
                            <path className="st18" d="M2052.4,100l-5.9,5.9,5.9,5.9,5.9-5.9-5.9-5.9Z" />
                            <path className="st18" d="M2094.3,149.7c4.6,0,8.4-3.7,8.4-8.3v-24.9l-8.4,8.3v16.6h-16.7v-16.6l-8.4,8.3v24.9h-8.4v8.3h8.4c4.6,0,8.4-3.7,8.4-8.3v-8.3h16.7Z" />
                            <path className="st18" d="M2040,100l-5.9,5.9,5.9,5.9,5.9-5.9-5.9-5.9Z" />
                            <path className="st18" d="M2098.3,154.5l-5.9,5.9,5.9,5.9,5.9-5.9-5.9-5.9Z" />
                            <path className="st18" d="M2085.9,154.5l-5.9,5.9,5.9,5.9,5.9-5.9-5.9-5.9Z" />
                            <path className="st18" d="M2198.9,124.8v16.6h-8.4v-24.9l-8.4,8.3v16.6h-8.4v-24.9l-8.4,8.3v16.6h-31.4v-16.6c0-4.6-3.8-8.3-8.4-8.3h-8.4v8.3h8.4v16.6h-16.7v8.3h90c4.6,0,8.4-3.7,8.4-8.3v-24.9l-8.4,8.3h0Z" />
                            <path className="st18" d="M2058,121.4c-3-3-7.2-4.9-11.8-4.9-9.2,0-16.7,7.4-16.7,16.6s1.9,8.7,4.9,11.7,7.2,4.9,11.8,4.9,8.8-1.9,11.8-4.9,4.9-7.1,4.9-11.7-1.9-8.7-4.9-11.7h0ZM2052.1,139c-1.5,1.5-3.6,2.4-5.9,2.4s-4.4-.9-5.9-2.4-2.5-3.6-2.5-5.9c0-4.6,3.8-8.3,8.4-8.3s4.4.9,5.9,2.4c1.5,1.5,2.4,3.6,2.4,5.9s-.9,4.4-2.4,5.9h0Z" />
                            <path className="st18" d="M1885.2,100l-5.9,5.9,5.9,5.9,5.9-5.9-5.9-5.9Z" />
                            <path className="st18" d="M1937.4,118.8c-2.5-1.4-5.3-2.2-8.4-2.2-9.2,0-16.7,7.4-16.7,16.6s1.9,8.7,4.9,11.7,7.2,4.9,11.8,4.9,5.9-.8,8.4-2.2v2.2h8.4v-33.1h-8.4v2.2h0ZM1929.1,141.4c-2.3,0-4.4-.9-5.9-2.4s-2.5-3.6-2.5-5.9c0-4.6,3.8-8.3,8.4-8.3s4.4.9,5.9,2.4c1.5,1.5,2.4,3.6,2.4,5.9s-.9,4.4-2.4,5.9-3.6,2.4-5.9,2.4h0Z" />
                            <path className="st18" d="M1830.8,118.8c-2.5-1.4-5.3-2.2-8.4-2.2-9.2,0-16.7,7.4-16.7,16.6s1.9,8.7,4.9,11.7,7.2,4.9,11.8,4.9,5.9-.8,8.4-2.2v2.2h8.4v-49.7l-8.4,8.3v10.5h0ZM1822.4,141.4c-2.3,0-4.4-.9-5.9-2.4s-2.4-3.6-2.4-5.9c0-4.6,3.8-8.3,8.4-8.3s4.4.9,5.9,2.4c1.5,1.5,2.5,3.6,2.5,5.9s-1,4.4-2.5,5.9-3.6,2.4-5.9,2.4h0Z" />
                            <path className="st18" d="M1901.9,116.5c-4.6,0-8.4,3.7-8.4,8.3v24.9h8.4v-24.9h8.4v-8.3s-8.4,0-8.4,0Z" />
                            <path className="st18" d="M1889.3,116.5h-8.4v33.1h8.4v-33.1Z" />
                            <path className="st18" d="M1798,126.6c-3.8-3.8-9.2-5.1-14-6.8-1.9-.6-3.5-1.3-4.7-2.2-1.3-1-2.2-2.2-2.2-3.8,0-3.1,3-5.6,8-5.6s5.6.5,8.4,1.9h.2l6.1-6.1c-3.5-2.3-8-3.8-13.1-4.1h-1.8c-10,0-16.9,5.9-16.9,13.8s.3,3.5.8,4.9c.7,1.9,1.8,3.4,3.1,4.7,3,2.7,7.2,4.1,11.1,5.4,3.3,1,5.7,1.9,7.5,3.4,1.2.9,1.9,2.1,1.9,3.6,0,3.5-2.2,5.7-7.9,5.7s-6.4-.8-9.4-2.7c-.3-.2-.7-.4-1-.6l-.5.5h0l-5.4,5.4h0c3.8,3,8.8,5.6,16.5,5.6h.8c.8,0,1.7,0,2.5-.2,8.9-1,13.7-6.3,13.7-13.8s0-.9,0-1.3c-.3-3.4-1.6-5.9-3.4-7.8h-.3,0Z" />
                            <path className="st18" d="M1876.8,133.1c0-9.2-7.5-16.6-16.7-16.6s-16.7,7.4-16.7,16.6,7.5,16.6,16.7,16.6,13.2-4.4,15.6-10.6h-9.9c-1.5,1.4-3.5,2.3-5.8,2.3-3.5,0-6.5-2.1-7.7-5.2h24.2c.2-1,.3-2,.3-3.1h0ZM1860.1,124.8c3.5,0,6.5,2.1,7.7,5.2h-15.5c1.2-3,4.2-5.2,7.7-5.2h.1Z" />
                            <path className="st18" d="M2140.4,165.1v-1c0-.1,0-.2.2-.2h1.5c.1,0,.2,0,.2.2v7.9c0,.5,0,.8.3,1,.2.2.5.3.9.3h1c.6,0,.9.3.9.9s0,.6-.2.7c-.2.1-.4.2-.7.2h-1.4c-.8,0-1.4-.1-1.8-.4-.4-.3-.7-.8-.9-1.4-.3.3-.7.5-1.1.6-.5.1-.9.2-1.4.2s-1.2,0-1.7-.3c-.5-.2-1-.4-1.4-.8-.4-.4-.7-.8-.9-1.3s-.3-1.2-.3-1.9.1-1.6.4-2.2c.2-.6.6-1.1,1-1.4.4-.4.9-.6,1.4-.8s1.1-.2,1.7-.2h2.3ZM2137.9,172.3c.9,0,1.5-.3,1.9-.8s.6-1.2.6-2.2v-2.3h-2.3c-.7,0-1.3.2-1.8.6-.5.4-.7,1.2-.7,2.2s.2,1.4.6,1.8c.4.4,1,.6,1.8.6h-.1ZM2135.9,162.3c-.1,0-.2,0-.2-.2v-1.7c0-.1,0-.2.2-.2h1.6c.1,0,.2,0,.2.2v1.7c0,.1,0,.2-.2.2h-1.6ZM2138.8,162.3c-.1,0-.2,0-.2-.2v-1.7c0-.1,0-.2.2-.2h1.6c.1,0,.2,0,.2.2v1.7c0,.1,0,.2-.2.2h-1.6Z" />
                            <path className="st18" d="M2155.4,173.3c.1,0,.2,0,.2.2v1.4c0,.1,0,.2-.2.2h-10.9c-.6,0-.9-.3-.9-.9s0-.6.2-.7c.1-.1.4-.2.7-.2h2.7c-.4-.4-.7-.8-.9-1.4-.2-.5-.4-1.2-.4-2s0-1,.2-1.6c.1-.6.4-1.1.8-1.6.4-.5.9-.9,1.6-1.2.6-.3,1.5-.5,2.5-.5s1.7.2,2.4.5,1.2.8,1.6,1.4v.3l-1,.8h-.3c-.7-.8-1.6-1.2-2.7-1.2s-1.7.3-2.2.9c-.5.6-.7,1.3-.7,2.1s0,1.1.3,1.5c.2.4.4.7.6,1,.2.3.5.5.7.6.3.1.4.2.6.3h5.2-.1Z" />
                            <path className="st18" d="M2160.1,179.8c-.1,0-.2,0-.2-.2v-1.4c0-.1,0-.2.2-.2h2.8c.3,0,.6,0,.9-.1.3,0,.5-.2.7-.4s.4-.4.5-.7.2-.7.2-1.1v-.6h-2.5c-.7,0-1.3,0-1.9-.2-.6-.2-1-.4-1.4-.8-.4-.4-.7-.9-.9-1.5s-.3-1.4-.3-2.2.1-1.7.4-2.3c.2-.7.6-1.2,1-1.6.4-.4.9-.7,1.4-1,.6-.2,1.1-.3,1.8-.3,1.4,0,2.5.4,3.3,1.2s1.2,2.1,1.2,3.9v3.1h1.6c.3,0,.6,0,.7.2.2.1.2.4.2.7s0,.7-.2.8c-.1.1-.4.2-.7.2h-1.6v.6c0,.7-.1,1.4-.3,1.9s-.5.9-.8,1.3c-.4.3-.8.6-1.3.7-.5.2-1.1.2-1.7.2h-3v-.2h0ZM2162.6,167c-.8,0-1.4.3-1.9.9-.5.6-.7,1.5-.7,2.5s.2,1.9.7,2.3c.4.4,1.1.6,2,.6h2.4v-3.1c0-1-.2-1.8-.6-2.4-.4-.6-1-.9-1.9-.9h0Z" />
                            <path className="st18" d="M2175.9,175.3c-.7,0-1.4-.1-2-.3s-1-.5-1.4-1c-.3.5-.8.8-1.3.9-.5.1-1,.2-1.4.2h-1c-.6,0-.9-.3-.9-.9s0-.6.2-.7c.1-.1.4-.2.7-.2h1.2c.2,0,.3,0,.5-.1.2,0,.3-.2.5-.4.1-.2.3-.4.4-.7,0-.3.1-.6.1-1v-1c0-1.8.4-3.1,1.2-3.9.8-.8,1.9-1.2,3.3-1.2s2.5.4,3.3,1.2,1.2,2.1,1.2,3.9v1c0,.8.2,1.3.5,1.6s.6.4,1,.4h.7c.3,0,.6,0,.7.2.1.1.2.4.2.7s0,.7-.2.8c-.1.1-.4.2-.7.2h-1.2c-.3,0-.5,0-.7-.2-.2,0-.5-.2-.7-.3-.2-.2-.4-.3-.6-.6-.4.5-.9.8-1.4,1-.6.2-1.2.3-1.9.3h-.3ZM2175.9,167c-.9,0-1.5.3-1.9.9-.4.6-.6,1.4-.6,2.4s.2,1.9.6,2.5c.4.5,1.1.8,1.9.8s1.5-.3,1.9-.8.6-1.3.6-2.5-.2-1.8-.6-2.4c-.4-.6-1-.9-1.9-.9Z" />
                            <path className="st18" d="M2188,167c-.5,0-1,.1-1.5.3-.4.2-.8.5-1.2.9,0,.1-.2.1-.3,0l-1-.8c-.1-.1-.2-.2,0-.3.4-.5,1-1,1.6-1.4s1.5-.5,2.4-.5,2,.2,2.7.5,1.2.8,1.6,1.3c.4.5.7,1.2.9,1.9s.2,1.5.2,2.2v.8c0,.5.2.8.6,1.1.4.2.9.4,1.5.4h.2c.3,0,.6,0,.7.2.2.1.2.4.2.7s0,.7-.2.8c-.1.1-.4.2-.7.2h-.5c-.5,0-1-.1-1.4-.3s-.7-.6-.9-1c-.3.5-.7.8-1.1,1-.5.2-1.1.3-1.8.3h-7.4c-.6,0-.9-.3-.9-.9s0-.6.2-.7.4-.2.7-.2h6.7c.4,0,.8,0,1.1-.1.3,0,.5-.2.6-.4s.2-.4.3-.7v-1.1c0-.6,0-1.2-.2-1.7-.1-.5-.3-.9-.5-1.3s-.6-.6-1-.8-.9-.3-1.6-.3h0ZM2187.5,179.4c-.1,0-.2,0-.2-.2v-1.7c0-.1,0-.2.2-.2h1.6c.1,0,.2,0,.2.2v1.7c0,.1,0,.2-.2.2h-1.6Z" />
                            <path className="st18" d="M2202.8,175.3c-.7,0-1.4-.1-2-.3s-1.1-.5-1.4-1c-.3.5-.8.8-1.3.9-.5.1-1,.2-1.4.2h-1c-.6,0-.9-.3-.9-.9s0-.6.2-.7c.2-.1.4-.2.7-.2h1.2c.2,0,.3,0,.5-.1.2,0,.3-.2.5-.4.1-.2.3-.4.3-.7s.1-.6.1-1v-1c0-1.8.4-3.1,1.2-3.9.8-.8,1.9-1.2,3.3-1.2s2.5.4,3.3,1.2,1.2,2.1,1.2,3.9-.1,1.7-.3,2.3-.5,1.2-.9,1.6c-.4.4-.9.7-1.4.9-.6.2-1.2.3-1.9.3h0ZM2202.8,167c-.9,0-1.5.3-1.9.9-.4.6-.6,1.4-.6,2.4s.2,1.9.6,2.5c.4.5,1,.8,1.9.8s1.5-.3,1.9-.8.6-1.3.6-2.5-.2-1.8-.6-2.4c-.4-.6-1-.9-1.9-.9Z" />
                            <path className="st18" d="M1768.4,171.7c0-.2,0-.5-.2-.7v-7.6c0-.3,0-.5.2-.7.4-1.2,1.1-2.2,2-2.8s2.1-.9,3.5-.9,1.4,0,1.9.2c.6.2,1.1.4,1.5.7s.8.6,1.1,1c.3.4.6.8.8,1.2v.3l-1.4.7s-.3,0-.3-.1c-.4-.7-.9-1.2-1.4-1.6-.6-.3-1.2-.5-2.1-.5s-1.7.2-2.2.6c-.6.4-1,1-1.2,1.8v7.8c.3.8.7,1.4,1.2,1.8.6.4,1.3.6,2.2.6s1.5-.2,2.2-.6,1.1-1,1.3-1.7c0-.3.2-.6.2-1v-1.5c0-.6,0-.1,0-.1h-3.1c-.1,0-.2,0-.2-.2v-1.4c0-.1,0-.2.2-.2h5.1c.1,0,.2,0,.2.2v3.2c0,.6-.2,1.1-.3,1.5-.4,1.2-1.1,2.1-2,2.8-1,.6-2.1,1-3.5,1s-2.5-.3-3.5-.9c-.9-.6-1.6-1.6-2-2.8h-.2Z" />
                            <path className="st18" d="M1783.4,175.1c-.1,0-.2,0-.2-.2v-10.7c0-.1,0-.2.2-.2h1.5c.1,0,.2,0,.2.2v1.1h0c.2-.5.6-.9,1.1-1.2s1.1-.5,1.9-.5.9,0,1.3.2.7.4,1,.6v.3l-.9,1.1c0,.1-.2.1-.3,0-.3-.2-.5-.3-.8-.4-.3,0-.6-.1-.9-.1-.9,0-1.5.3-1.9.9-.4.6-.6,1.4-.6,2.4v6.1c0,.1,0,.2-.2.2h-1.5v.2h.1Z" />
                            <path className="st18" d="M1797,175.4c-1.1,0-2-.3-2.8-.8s-1.3-1.3-1.7-2.2c0-.4-.2-.8-.3-1.2v-3.2c0-.4.2-.8.3-1.2.3-1,.9-1.7,1.7-2.2.8-.5,1.7-.8,2.8-.8s2,.3,2.8.8,1.3,1.3,1.6,2.2c0,.4.2.8.3,1.2v3.2c0,.4-.2.8-.3,1.2-.3.9-.9,1.7-1.6,2.2-.8.5-1.7.8-2.8.8ZM1797,173.6c.6,0,1.2-.2,1.6-.5.5-.3.8-.7,1-1.3,0-.3.2-.6.2-1v-2.6c0-.3,0-.6-.2-1-.2-.6-.5-1-1-1.3-.4-.3-1-.5-1.6-.5s-1.2.2-1.6.5-.8.7-.9,1.3c0,.3-.2.6-.2,1v2.6c0,.3,0,.7.2,1,.2.6.5,1,.9,1.3s1,.5,1.6.5Z" />
                            <path className="st18" d="M1812.2,175.1c-.1,0-.2,0-.2-.2v-1h0c-.3.5-.7.8-1.2,1.1s-1.1.4-1.9.4c-1.2,0-2.2-.4-2.9-1.2-.7-.8-1-1.8-1-3.1v-7c0-.1,0-.2.2-.2h1.5c.1,0,.2,0,.2.2v6.5c0,.9.2,1.6.6,2.1s1.1.7,1.9.7,1.4-.3,1.9-.7c.5-.5.7-1.2.7-2v-6.7c0-.1,0-.2.2-.2h1.5c.1,0,.2,0,.2.2v10.7c0,.1,0,.2-.2.2h-1.5v.2h0Z" />
                            <path className="st18" d="M1818,179.3c-.1,0-.2,0-.2-.2v-15c0-.1,0-.2.2-.2h1.5c.1,0,.2,0,.2.2v1h0c.3-.5.7-.8,1.2-1.1s1.2-.4,2-.4,1.8.2,2.5.7,1.1,1.1,1.4,2c.2.5.3.9.3,1.4v3.6c0,.5-.2.9-.3,1.4-.3.9-.8,1.6-1.4,2-.7.4-1.5.7-2.5.7s-1.5-.2-2-.4c-.5-.3-.9-.7-1.2-1.1h0v5.3c0,.1,0,.2-.2.2h-1.5ZM1822.5,173.6c1.3,0,2.1-.6,2.5-1.7,0-.3.2-.6.2-1v-2.6c0-.4,0-.7-.2-1-.4-1.1-1.2-1.7-2.5-1.7s-2.1.6-2.5,1.7c0,.3-.2.6-.2,1v2.8c0,.4,0,.7.2.9.4,1.1,1.2,1.7,2.5,1.7h0Z" />
                        </g>
                        <g ref={setRef("alReem", "square")}>
                            <rect className="st53" x={1920} y={388} width={251} height={73} />
                            <g className="st38">
                                <rect className="st66" x={1910} y="455.6" width="335.7" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st73" x={1910} y="455.6" width="335.7" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st72" x={1885} y={383} width="176.6" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st31" x={1885} y={383} width="176.6" height="8.4" />
                            </g>
                            <path className="st7" d="M1986.1,388h184.3v71.9l47.6,45.6v20.5" />
                            <circle className="st18" cx={2218} cy={529} r={8} />
                        </g>
                        <g ref={setRef("alReem", "icon")} className="st32">
                            <g>
                                <path className="st18" d="M2146.9,440v-26.1h-7.9v-9.9h-26v9.9h-7.9v26.1h-5.1v3h52v-3h-5.1ZM2113,440h-4.9v-23.1h4.9v23.1ZM2129.9,440h-7.7v-7.6h7.7v7.6ZM2135.9,413.9v26.1h-3v-10.6h-13.8v10.6h-3v-33h19.9v6.9h0ZM2143.9,440h-4.9v-23.1h4.9v23.1Z" />
                                <path className="st18" d="M2124,423.1h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M2124,410h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M2132.9,410h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M2124,416.5h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M2132.9,423.1h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M2132.9,416.5h-4.9v3h4.9v-3Z" />
                            </g>
                        </g>
                        <path ref={setRef("alReem", "text")} className="st18" d="M1962.4,414.9c0-.2.2-.3.4-.3h3.8c.2,0,.3.1.4.3l6.9,19.8c0,.2,0,.3-.2.3h-3.9c-.2,0-.3-.1-.4-.3l-1.2-3.6h-7.1l-1.1,3.6c0,.2-.2.3-.4.3h-3.9c-.2,0-.3-.1-.2-.3l7-19.8h-.1ZM1967,427.4l-2.3-7.1h0l-2.3,7.1h4.7,0ZM1976.3,414.9c0-.2,0-.3.3-.3h3.8c.2,0,.3.1.3.3v16c0,.1,0,.2.2.2h9c.2,0,.3.1.3.3v3.3c0,.2,0,.3-.3.3h-13.3c-.2,0-.3-.1-.3-.3v-19.8ZM2011.1,435c-.2,0-.4-.1-.4-.3l-3.5-7.5h-2.7s-.2,0-.2.2v7.3c0,.2,0,.3-.3.3h-3.8c-.2,0-.3-.1-.3-.3v-19.8c0-.2,0-.3.3-.3h8.1c1,0,2,.2,2.8.5.9.3,1.6.7,2.2,1.3.6.6,1.1,1.2,1.4,2s.5,1.6.5,2.5c0,1.3-.3,2.5-1,3.5-.6,1-1.5,1.7-2.7,2.2l4,8v.3h-4.5,0ZM2008,423.5c.8,0,1.5-.2,2-.7s.8-1.1.8-1.9-.2-1.4-.8-1.8-1.2-.7-2-.7h-3.6s-.2,0-.2.2v4.7c0,.1,0,.2.2.2h3.6ZM2018.6,414.9c0-.2,0-.3.3-.3h13.1c.2,0,.3.1.3.3v3.2c0,.2,0,.3-.3.3h-8.8s-.2,0-.2.2v4.1c0,.1,0,.2.2.2h7.3c.2,0,.3.1.3.3v3.2c0,.2,0,.3-.3.3h-7.3s-.2,0-.2.2v4.2c0,.1,0,.2.2.2h8.8c.2,0,.3.1.3.3v3.2c0,.2,0,.3-.3.3h-13.1c-.2,0-.3-.1-.3-.3v-19.8h0ZM2035.5,414.9c0-.2,0-.3.3-.3h13.1c.2,0,.3.1.3.3v3.2c0,.2,0,.3-.3.3h-8.8s-.2,0-.2.2v4.1c0,.1,0,.2.2.2h7.3c.2,0,.3.1.3.3v3.2c0,.2,0,.3-.3.3h-7.3s-.2,0-.2.2v4.2c0,.1,0,.2.2.2h8.8c.2,0,.3.1.3.3v3.2c0,.2,0,.3-.3.3h-13.1c-.2,0-.3-.1-.3-.3v-19.8h0ZM2052.5,414.9c0-.2.1-.3.3-.3h3.6c.2,0,.4.1.5.3l5.2,11.6h.1l5.1-11.6c0-.2.2-.3.5-.3h3.5c.2,0,.3.1.3.3v19.8c0,.2-.1.3-.3.3h-3.4c-.2,0-.3-.1-.3-.3v-11.5h-.1l-3.8,8.6c-.1.3-.3.4-.6.4h-2.1c-.3,0-.4-.1-.6-.4l-3.8-8.6h-.1v11.5c0,.2-.1.3-.3.3h-3.4c-.2,0-.3-.1-.3-.3v-19.8h0Z" />
                        <g ref={setRef("alMesk", "square")}>
                            <rect className="st53" x={969} y={232} width={251} height={73} />
                            <g className="st38">
                                <rect className="st65" x={959} y="299.6" width="335.7" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st46" x={959} y="299.6" width="335.7" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st57" x={934} y={227} width="176.6" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st75" x={934} y={227} width="176.6" height="8.4" />
                            </g>
                            <path className="st7" d="M1035.1,232h184.3v71.9l47.6,45.6v20.5" />
                            <circle className="st18" cx={1267} cy={373} r={8} />
                        </g>
                        <path ref={setRef("alMesk", "text")} className="st18" d="M1011.4,258.9c0-.2.2-.3.4-.3h3.8c.2,0,.3.1.4.3l6.9,19.8c0,.2,0,.3-.2.3h-3.9c-.2,0-.3-.1-.4-.3l-1.2-3.6h-7.1l-1.1,3.6c0,.2-.2.3-.4.3h-3.9c-.2,0-.3-.1-.2-.3l7-19.8h0ZM1016,271.4l-2.3-7.1h0l-2.3,7.1h4.7-.1ZM1025.3,258.9c0-.2,0-.3.3-.3h3.8c.2,0,.3.1.3.3v16c0,.1,0,.2.2.2h9c.2,0,.3.1.3.3v3.3c0,.2,0,.3-.3.3h-13.3c-.2,0-.3-.1-.3-.3v-19.8ZM1048.8,258.9c0-.2,0-.3.3-.3h3.6c.2,0,.4.1.5.3l5.2,11.6h0l5.1-11.6c0-.2.2-.3.5-.3h3.5c.2,0,.3.1.3.3v19.8c0,.2,0,.3-.3.3h-3.4c-.2,0-.3-.1-.3-.3v-11.5h0l-3.8,8.6c0,.3-.3.4-.6.4h-2.1c-.3,0-.5-.1-.6-.4l-3.8-8.6h0v11.5c0,.2,0,.3-.3.3h-3.4c-.2,0-.3-.1-.3-.3v-19.8h0ZM1071.7,258.9c0-.2,0-.3.3-.3h13.1c.2,0,.3.1.3.3v3.2c0,.2,0,.3-.3.3h-8.8s-.2,0-.2.2v4.1c0,.1,0,.2.2.2h7.3c.2,0,.3.1.3.3v3.2c0,.2,0,.3-.3.3h-7.3s-.2,0-.2.2v4.2c0,.1,0,.2.2.2h8.8c.2,0,.3.1.3.3v3.2c0,.2,0,.3-.3.3h-13.1c-.2,0-.3-.1-.3-.3v-19.8h0ZM1095.6,279.3c-.8,0-1.6,0-2.4-.2-.8-.1-1.5-.3-2.2-.6-.7-.3-1.3-.6-1.9-.9s-1-.7-1.4-1.1c-.2-.2-.2-.3,0-.5l2.3-2.6c0-.2.3-.2.5,0,.7.5,1.5,1,2.4,1.5.9.4,1.9.6,3,.6s1.9-.2,2.5-.7.9-1,.9-1.8-.2-1.1-.7-1.5c-.4-.4-1.3-.6-2.5-.8h-1.1c-2.1-.4-3.7-1.1-4.8-2-1.1-1-1.7-2.4-1.7-4.2s.2-1.8.5-2.6c.3-.8.8-1.4,1.4-2,.6-.5,1.4-1,2.3-1.3s1.9-.5,3-.5,2.6.2,3.8.6c1.2.4,2.2.9,3.1,1.6.2.1.2.3,0,.5l-1.8,2.7c0,.2-.3.2-.4,0-.8-.5-1.6-.9-2.3-1.2-.8-.3-1.6-.4-2.4-.4s-1.6.2-2,.6c-.5.4-.7,1-.7,1.6s.2,1.1.7,1.4c.5.4,1.3.7,2.5.8l1.1.2c2.1.3,3.7.9,4.8,1.9,1.1,1,1.6,2.4,1.6,4.3s-.2,1.8-.5,2.6c-.3.8-.9,1.5-1.5,2-.7.6-1.5,1-2.5,1.3s-2.2.5-3.5.5v.2h-.1ZM1106.5,258.9c0-.2,0-.3.3-.3h3.8c.2,0,.3.1.3.3v8.8l6.8-8.9c0-.2.3-.3.5-.3h4.3s.2,0,.2.1v.3l-6.2,7.7,6.8,11.9c0,.2,0,.4-.2.4h-4.4c-.2,0-.4,0-.5-.3l-4.6-8.6-2.7,3.4v5.2c0,.2,0,.3-.3.3h-3.8c-.2,0-.3-.1-.3-.3v-19.8h0Z" />
                        <g ref={setRef("alMesk", "icon")} className="st71">
                            <g>
                                <path className="st18" d="M1195.9,284v-26.1h-7.9v-9.9h-26v9.9h-7.9v26.1h-5.1v3h52v-3h-5.1ZM1162,284h-4.9v-23.1h4.9v23.1ZM1178.9,284h-7.7v-7.6h7.7v7.6ZM1184.9,257.9v26.1h-3v-10.6h-13.8v10.6h-3v-33h19.9v6.9h0ZM1192.9,284h-4.9v-23.1h4.9v23.1Z" />
                                <path className="st18" d="M1173,267.1h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M1173,254h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M1181.9,254h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M1173,260.5h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M1181.9,267.1h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M1181.9,260.5h-4.9v3h4.9v-3Z" />
                            </g>
                        </g>
                        <g ref={setRef("icadMall", "square")}>
                            <rect className="st53" x="927.9" y="346.8" width="193.2" height="56.2" />
                            <g className="st38">
                                <rect className="st17" x="920.3" y="398.9" width="258.5" height="6.5" />
                            </g>
                            <g className="st38">
                                <rect className="st22" x="920.3" y="398.9" width="258.5" height="6.5" />
                            </g>
                            <g className="st38">
                                <rect className="st58" x={901} y={343} width={136} height="6.5" />
                            </g>
                            <g className="st38">
                                <rect className="st51" x={901} y={343} width={136} height="6.5" />
                            </g>
                            <path className="st7" d="M978.8,346.8h141.9v55.3l36.6,35.1v15.8" />
                            <circle className="st18" cx="1157.4" cy="455.4" r="6.2" />
                        </g>
                        <path ref={setRef("icadMall", "text")} className="st18" d="M947.9,367.3c0-.1,0-.2.2-.2h2.8s.2,0,.2.2v14.5c0,.1,0,.2-.2.2h-2.8s-.2,0-.2-.2v-14.5ZM954,378.7c0-.2-.2-.5-.2-.7v-6.8c0-.2,0-.5.2-.7.4-1.2,1-2.1,2-2.8.9-.6,2-.9,3.4-.9s2.4.3,3.2.9c.9.6,1.6,1.4,2,2.4v.3l-2.4,1.1s-.2,0-.3-.1c-.2-.5-.5-.9-.9-1.2-.4-.3-.9-.5-1.5-.5s-1.1.1-1.5.4-.6.7-.8,1.2v6.4c.2.5.4.9.8,1.2.4.3.9.4,1.5.4s1.1-.2,1.5-.5.7-.7.9-1.2c0-.1.2-.2.3-.1l2.4,1.1s.2.1,0,.3c-.4,1.1-1.1,1.9-2,2.5s-2,.9-3.2.9-2.4-.3-3.4-.9c-.9-.6-1.6-1.5-2-2.8h0ZM970.6,367.3c0-.1,0-.2.3-.2h2.8s.2,0,.3.2l5.1,14.5c0,.1,0,.2-.2.2h-2.9s-.2,0-.3-.2l-.9-2.6h-5.2l-.8,2.6c0,.1,0,.2-.3.2h-2.9s-.2,0-.2-.2l5.1-14.5h.1ZM974,376.5l-1.7-5.2h0l-1.7,5.2h3.5,0ZM980.8,367.3c0-.1,0-.2.2-.2h5.6c1.3,0,2.4.3,3.3.8s1.5,1.4,1.9,2.5c0,.2,0,.4.2.7v7c0,.2,0,.4-.2.6-.4,1.1-1,2-1.9,2.5-.9.6-2,.8-3.3.8h-5.6s-.2,0-.2-.2v-14.5h0ZM984,379.1h0c0,.1,1.7.1,1.7.1.7,0,1.3-.1,1.8-.4.5-.2.8-.7,1-1.3v-5.8c-.2-.6-.5-1-1-1.3-.5-.2-1.1-.4-1.8-.4h-1.7v9h0ZM999.8,367.3c0-.1,0-.2.2-.2h2.6c.2,0,.3,0,.4.2l3.8,8.5h0l3.7-8.5c0-.1.2-.2.4-.2h2.6s.2,0,.2.2v14.5c0,.1,0,.2-.2.2h-2.5s-.2,0-.2-.2v-8.4h0l-2.8,6.3c0,.2-.2.3-.4.3h-1.5c-.2,0-.3,0-.4-.3l-2.8-6.3h0v8.4c0,.1,0,.2-.2.2h-2.5s-.2,0-.2-.2v-14.5h-.2,0ZM1020.6,367.3c0-.1,0-.2.3-.2h2.8s.2,0,.3.2l5.1,14.5c0,.1,0,.2-.2.2h-2.9c-.1,0-.2,0-.3-.2l-.8-2.6h-5.2l-.8,2.6c0,.1,0,.2-.3.2h-2.9c-.1,0-.2,0-.2-.2l5.2-14.5h0ZM1024,376.5l-1.7-5.2h0l-1.7,5.2h3.5,0ZM1030.8,367.3c0-.1,0-.2.2-.2h2.8s.2,0,.2.2v11.7h0c0,.1,6.6.1,6.6.1,0,0,.2,0,.2.2v2.4c0,.1,0,.2-.2.2h-9.8s-.2,0-.2-.2v-14.5h.2ZM1042.9,367.3c0-.1,0-.2.2-.2h2.8c.1,0,.2,0,.2.2v11.7h0c0,.1,6.6.1,6.6.1.1,0,.2,0,.2.2v2.4c0,.1,0,.2-.2.2h-9.7s-.2,0-.2-.2v-14.5h0Z" />
                        <path ref={setRef("icadMall", "icon")} className="st18" d="M1077.9,383.2c-1.5,0-1.4-2.1,0-2.2h19.2c1.2,0,2.2-.8,2.4-1.9l2.4-10.1c0-.6,0-1.2-.4-1.6-.4-.5-.9-.7-1.6-.7h-23.6l-1.2-4.2c-.3-1-1.2-1.7-2.3-1.7h-3.8c-.6,0-1,.4-1,1s.4,1,1,1h3.8c.2,0,.4.1.4.3l4.5,16.2c-.8,0-1.5.3-2.1.9s-.9,1.3-.9,2.2c0,1.6,1.4,2.9,3.1,2.9h1.5c-.2.4-.3.9-.3,1.4,0,1.9,1.6,3.4,3.5,3.4s3.5-1.5,3.5-3.4,0-1-.3-1.4h6.3c-.2.4-.3.9-.3,1.4,0,1.9,1.6,3.4,3.5,3.4s3.5-1.5,3.5-3.4,0-1-.4-1.5c.4-.1.7-.5.7-.9s-.5-1-1-1h-20.1,0ZM1083.9,386.6c0,.8-.7,1.4-1.5,1.4s-1.5-.6-1.5-1.4.7-1.4,1.5-1.4h0c.8,0,1.5.6,1.5,1.4ZM1095,388c-.8,0-1.5-.6-1.5-1.4s.7-1.4,1.5-1.4h0c.8,0,1.5.7,1.5,1.4s-.7,1.4-1.5,1.4ZM1099.9,368.7h0l-1,4.3h-3.4l.6-4.3h3.8ZM1089.7,379.2v-4.3h3.5l-.6,4.3h-2.9ZM1084.8,379.2l-.6-4.3h3.5v4.3h-2.9ZM1080.2,379.2h0c-.2,0-.5-.2-.5-.4l-1.1-3.9h3.6l.6,4.3h-2.6ZM1083.9,372.9l-.6-4.3h4.4v4.3h-3.8ZM1089.7,372.9v-4.3h4.4l-.6,4.3h-3.8ZM1081.3,368.6l.6,4.4h-3.9l-1.2-4.4h4.5ZM1097.1,379.2h-2.4l.6-4.3h3.2l-.9,3.9c0,.2-.2.4-.5.4h0Z" />
                        <g ref={setRef("mosque", "square")}>
                            <rect className="st53" x="856.9" y="428.8" width="193.2" height="56.2" />
                            <g className="st38">
                                <rect className="st50" x="849.3" y="480.9" width="258.5" height="6.5" />
                            </g>
                            <g className="st38">
                                <rect className="st69" x="849.3" y="480.9" width="258.5" height="6.5" />
                            </g>
                            <g className="st38">
                                <rect className="st79" x={830} y={425} width={136} height="6.5" />
                            </g>
                            <g className="st38">
                                <rect className="st64" x={830} y={425} width={136} height="6.5" />
                            </g>
                            <path className="st7" d="M907.8,428.8h141.9v55.3l36.6,35.1v15.8" />
                            <circle className="st18" cx="1086.4" cy="537.4" r="6.2" />
                        </g>
                        <path ref={setRef("mosque", "text")} className="st18" d="M876.9,449.3c0-.1,0-.2.2-.2h2.6c.2,0,.3,0,.4.2l3.8,8.5h0l3.7-8.5c0-.1.2-.2.4-.2h2.6s.2,0,.2.2v14.5c0,.1,0,.2-.2.2h-2.5s-.2,0-.2-.2v-8.4h0l-2.8,6.3c0,.2-.2.3-.4.3h-1.5c-.2,0-.3,0-.4-.3l-2.8-6.3h0v8.4c0,.1,0,.2-.2.2h-2.5s-.2,0-.2-.2v-14.5h-.2,0ZM899.1,464.3c-1.3,0-2.4-.3-3.4-.9s-1.6-1.5-2-2.7c0-.3-.2-.5-.2-.8v-6.6c0-.2,0-.5.2-.8.4-1.2,1.1-2.1,2-2.7,1-.6,2.1-.9,3.4-.9s2.4.3,3.4.9,1.7,1.5,2,2.7c0,.3.2.5.2.8v6.6c0,.2,0,.5-.2.8-.4,1.2-1.1,2.1-2,2.7-1,.6-2.1.9-3.4.9ZM899.1,461.5c.6,0,1.1-.1,1.5-.4s.7-.7.8-1.2v-6.5c-.2-.5-.4-.9-.8-1.2-.4-.3-.9-.4-1.5-.4s-1.1.1-1.5.4-.7.7-.8,1.2v6.4c.2.5.4.9.8,1.2s.9.4,1.5.4h0ZM912.5,464.3c-.6,0-1.2,0-1.7-.2-.6-.1-1.1-.2-1.6-.4-.5-.2-1-.4-1.4-.7-.4-.2-.8-.5-1.1-.8v-.4l1.7-1.9c0-.1.2-.1.3,0,.5.4,1.1.8,1.7,1.1.7.3,1.4.5,2.2.5s1.4-.2,1.8-.5c.4-.3.6-.8.6-1.3s-.2-.8-.5-1.1c-.3-.3-.9-.5-1.8-.6h-.8c-1.5-.3-2.7-.8-3.5-1.5s-1.2-1.8-1.2-3.1,0-1.3.4-1.9c.2-.6.6-1.1,1.1-1.5s1-.7,1.7-.9c.7-.2,1.4-.3,2.2-.3s1.9.1,2.8.4c.9.3,1.6.7,2.3,1.1v.3l-1.3,2c0,.1-.2.1-.3,0-.6-.4-1.1-.7-1.7-.9-.6-.2-1.1-.3-1.8-.3s-1.2.2-1.5.5-.5.7-.5,1.2.2.8.5,1.1c.4.3,1,.5,1.8.6h.8c1.6.3,2.7.8,3.5,1.5s1.2,1.8,1.2,3.1,0,1.3-.4,1.9c-.2.6-.6,1.1-1.1,1.5s-1.1.7-1.8,1c-.7.2-1.6.4-2.6.4h0ZM930.9,465.2h-.4l-1.5-1.5c-.9.5-1.9.7-3,.7s-2.5-.3-3.4-.9c-1-.6-1.6-1.5-2-2.7,0-.3-.2-.5-.2-.8v-6.6c0-.2,0-.5.2-.8.4-1.2,1.1-2.1,2-2.7,1-.6,2.1-.9,3.4-.9s2.5.3,3.4.9c1,.6,1.7,1.5,2,2.7,0,.3.2.5.2.8v6.6c0,.2,0,.5-.2.8,0,.2,0,.3-.2.5,0,.1,0,.3-.2.4l1.6,1.5v.3l-1.8,1.7h.1ZM926,461.5h.8l-.9-.9v-.3l1.8-1.7c0-.1.2-.1.3,0l.6.6v-5.7c-.2-.5-.4-.9-.9-1.2-.4-.3-.9-.4-1.5-.4s-1.1.1-1.5.4-.7.7-.8,1.2v6.4c.2.5.4.9.8,1.2.4.3.9.4,1.5.4h-.2ZM940,464.3c-.8,0-1.6-.1-2.3-.4-.7-.2-1.3-.6-1.8-1.1s-.9-1.1-1.2-1.8c-.3-.7-.4-1.5-.4-2.5v-9.2c0-.1,0-.2.2-.2h2.8s.2,0,.2.2v9.3c0,.9.2,1.6.7,2.1s1.1.7,1.8.7,1.3-.2,1.8-.7.7-1.2.7-2.1v-9.3c0-.1,0-.2.2-.2h2.8s.2,0,.2.2v9.2c0,.9,0,1.7-.4,2.5-.3.7-.7,1.3-1.2,1.8s-1.1.9-1.8,1.1-1.5.4-2.3.4ZM948.5,449.3c0-.1,0-.2.2-.2h9.6s.2,0,.2.2v2.4c0,.1,0,.2-.2.2h-6.4v3.1h0c0,.1,5.4.1,5.4.1,0,0,.2,0,.2.2v2.3c0,.1,0,.2-.2.2h-5.4v3.2h0c0,.1,6.4.1,6.4.1,0,0,.2,0,.2.2v2.4c0,.1,0,.2-.2.2h-9.6s-.2,0-.2-.2v-14.5h0Z" />
                        <g ref={setRef("mosque", "icon")}>
                            <path className="st8" d="M1015.5,473.2h-21.1c-.2,0-.4,0-.5-.2,0-.1-.2-.3-.2-.5v-14.7c0-.2,0-.4.2-.5,0-.1.3-.2.5-.2h21.1c.2,0,.4,0,.5.2,0,.1.2.3.2.5v14.7c0,.2,0,.4-.2.5,0,.1-.3.2-.5.2ZM995.1,471.7h19.6v-13.2h-19.6v13.2Z" />
                            <path className="st8" d="M1023.6,473h-9.4c-.2,0-.4,0-.5-.2,0-.1-.2-.3-.2-.5s0-.4.2-.5c0-.1.3-.2.5-.2h8.6v-25h-7.9v1.6c0,.2,0,.4-.2.5,0,.1-.3.2-.5.2s-.4,0-.5-.2c0-.1-.2-.3-.2-.5v-2.3c0-.2,0-.4.2-.5,0-.1.3-.2.5-.2h9.4c.2,0,.4,0,.5.2,0,.1.2.3.2.5v26.5c0,.2,0,.4-.2.5,0,.1-.3.2-.5.2h0Z" />
                            <path className="st8" d="M1024.5,473.2h-32.8c-.2,0-.4,0-.5-.3,0-.2-.2-.4-.2-.6s0-.5.2-.6c0-.2.3-.3.5-.3h32.8c.2,0,.4,0,.5.3,0,.2.2.4.2.6s0,.5-.2.6c0,.2-.3.3-.5.3Z" />
                            <path className="st8" d="M1013.7,458.4h-19.2c-.7,0-1.4-.3-1.8-.8-.5-.5-.8-1.2-.8-1.9s.3-1.4.8-1.9,1.2-.8,1.8-.8h19.2c.2,0,.4,0,.5.2,0,.1.2.3.2.5s0,.4-.2.5c0,.1-.3.2-.5.2h-19.2c-.3,0-.6.1-.8.4-.2.2-.3.5-.3.9s0,.6.3.9.5.4.8.4h19.2c.2,0,.4,0,.5.2,0,.1.2.3.2.5s0,.4-.2.5c0,.1-.3.2-.5.2h0Z" />
                            <path className="st8" d="M1015.4,458.4h-19.2c-.2,0-.4,0-.5-.2,0-.1-.2-.3-.2-.5s0-.4.2-.5c0-.1.3-.2.5-.2h19.7s.3-.2.4-.3c0-.1.2-.3.3-.4s0-.3,0-.5v-.5c0-.1,0-.3-.3-.4,0-.1-.2-.2-.4-.3h-19.7c-.2,0-.4,0-.5-.2,0-.1-.2-.3-.2-.5s0-.4.2-.5c0-.1.3-.2.5-.2h19.2c.7,0,1.3.3,1.8.8s.8,1.2.8,1.9-.3,1.4-.8,1.9-1.1.8-1.8.8v-.2h0Z" />
                            <path className="st8" d="M993.5,454.1c-.2,0-.4,0-.5-.2,0-.1-.2-.3-.2-.5,0-3.5,1.9-6.2,5.5-7.9,2.5-1.2,3.9-2.8,4.7-3.9.8-1.2,1-2.1,1-2.2,0-.2.2-.4.3-.5.2-.1.3-.1.5-.1s.3.2.4.3v.5c0,.2-1,4.4-6.5,7.1-3.1,1.5-4.7,3.7-4.7,6.6s0,.4-.2.5c0,.1-.3.2-.5.2h.2Z" />
                            <path className="st8" d="M1016.4,454.1c-.2,0-.4,0-.5-.2,0-.1-.2-.3-.2-.5,0-2.9-1.6-5.1-4.7-6.6-5.5-2.7-6.5-6.9-6.5-7.1v-.5c0-.2.3-.3.4-.3s.4,0,.5.1c.2.1.3.3.3.5,0,0,.8,3.7,5.7,6.1,3.7,1.8,5.5,4.4,5.5,7.9s0,.4-.2.5c0,.1-.3.2-.5.2h.2Z" />
                            <path className="st8" d="M1023.1,446h-.3s-.2-.1-.2-.2v-.7c.3-.6.5-1.3.5-2s-.7-1-1.7-1.6c-.3-.2-.7-.4-1-.6-.7-.5-1.3-1.2-1.7-1.7-.4.6-1,1.2-1.6,1.6-.3.2-.7.4-1,.6-1.1.6-1.8.9-1.8,1.6s0,1.3.4,2v.8s0,.1-.2.2h-.6s-.2,0-.2-.1c0,0,0-.1-.2-.2-.4-.8-.6-1.7-.6-2.6,0-1.6,1.4-2.4,2.6-2.9.3-.2.6-.3.9-.5.8-.5,1.5-1.7,1.7-2.1,0-.1.2-.2.3-.3,0,0,.2-.1.4-.1h0s.3,0,.4.1l.3.3s.8,1.5,1.8,2.2c.2.2.5.3.9.5,1.1.6,2.5,1.3,2.5,2.8s-.2,1.8-.6,2.6c0,.1-.2.2-.3.3,0,0-.2.1-.4.1h-.3Z" />
                            <path className="st8" d="M1008.2,473c-.2,0-.4,0-.5-.2,0-.1-.2-.3-.2-.5v-6.2c0-.6-.3-1.3-.7-1.7s-1.1-.7-1.8-.7-1.3.3-1.8.7c-.5.5-.7,1.1-.7,1.7v6.2c0,.2,0,.4-.2.5s-.3.2-.5.2-.4,0-.5-.2-.2-.3-.2-.5v-6.2c0-1,.4-2,1.2-2.7s1.8-1.1,2.9-1.1,2.1.4,2.9,1.1c.8.7,1.2,1.7,1.2,2.7v6.2c0,.2,0,.4-.2.5,0,.1-.3.2-.5.2h-.4Z" />
                        </g>
                        <g ref={setRef("sportsHall", "square")}>
                            <rect className="st53" x={1289} y={412} width={220} height={56} />
                            <g className="st38">
                                <rect className="st48" x={1231} y="463.9" width="258.5" height="6.5" />
                            </g>
                            <g className="st38">
                                <rect className="st29" x={1396} y={408} width={136} height="6.5" />
                            </g>
                            <g>
                                <g className="st38">
                                    <rect className="st3" x={1231} y="463.9" width="258.5" height="6.5" />
                                </g>
                                <g className="st38">
                                    <rect className="st27" x={1396} y={408} width={136} height="6.5" />
                                </g>
                                <path className="st7" d="M1430.9,411.8h-141.9v55.3l-36.6,35.1v15.8" />
                                <circle className="st18" cx="1252.3" cy="520.4" r="6.2" />
                            </g>
                        </g>
                        <path ref={setRef("sportsHall", "text")} className="st18" d="M1364.5,447.2c-.6,0-1.2,0-1.7-.2-.6-.1-1.1-.2-1.6-.4-.5-.2-1-.4-1.4-.7-.4-.2-.8-.5-1.1-.8v-.4l1.7-1.9c0-.1.2-.1.3,0,.5.4,1.1.8,1.7,1.1.7.3,1.4.5,2.2.5s1.4-.2,1.8-.5.6-.8.6-1.3-.2-.8-.5-1.1c-.3-.3-.9-.5-1.8-.6h-.8c-1.5-.3-2.7-.8-3.5-1.5s-1.2-1.8-1.2-3.1,0-1.3.4-1.9c.2-.6.6-1.1,1.1-1.5s1-.7,1.7-.9c.7-.2,1.4-.3,2.2-.3s1.9.1,2.8.4,1.6.7,2.3,1.1c0,0,.2.2,0,.3l-1.3,2c0,.1-.2.1-.3,0-.6-.4-1.2-.7-1.7-.9-.6-.2-1.1-.3-1.8-.3s-1.2.2-1.5.5-.5.7-.5,1.2.2.8.5,1.1c.3.3,1,.5,1.8.6h.8c1.6.3,2.7.8,3.5,1.5s1.2,1.8,1.2,3.1,0,1.3-.4,1.9c-.2.6-.6,1.1-1.1,1.5s-1.1.7-1.8,1c-.7.2-1.6.4-2.6.4h0ZM1372.7,447s-.2,0-.2-.2v-14.5c0-.1,0-.2.2-.2h5.8c.8,0,1.5.1,2.2.4.7.2,1.2.6,1.7,1,.4.4.8.9,1,1.5s.4,1.2.4,2,0,1.3-.4,1.9c-.2.6-.6,1.1-1,1.5s-1,.8-1.6,1c-.7.2-1.4.4-2.2.4h-2.7v5.1c0,.1,0,.2-.2.2h-3ZM1378.3,438.9c.7,0,1.2-.2,1.6-.5.4-.4.6-.9.6-1.5s-.2-1.1-.6-1.5-.9-.5-1.6-.5h-2.5v3.9h0c0,.1,2.5.1,2.5.1ZM1391.3,447.2c-1.3,0-2.5-.3-3.4-.9-1-.6-1.6-1.5-2-2.7,0-.3-.2-.5-.2-.8v-6.6c0-.2,0-.5.2-.8.4-1.2,1.1-2.1,2-2.7,1-.6,2.1-.9,3.4-.9s2.4.3,3.4.9,1.7,1.5,2.1,2.7c0,.3.2.5.2.8v6.6c0,.2,0,.5-.2.8-.4,1.2-1.1,2.1-2.1,2.7s-2.1.9-3.4.9ZM1391.3,444.4c.6,0,1.1-.1,1.5-.4s.7-.7.8-1.2v-6.5c-.2-.5-.4-.9-.8-1.2-.4-.3-.9-.4-1.5-.4s-1.1.1-1.5.4-.7.7-.8,1.2v6.4c.2.5.4.9.8,1.2.4.3.9.4,1.5.4h0ZM1407.9,447c-.2,0-.3,0-.3-.2l-2.6-5.5h-2v5.4c0,.1,0,.2-.2.2h-2.8c-.1,0-.2,0-.2-.2v-14.5c0-.1,0-.2.2-.2h6c.8,0,1.5.1,2.1.4.6.2,1.2.5,1.6.9.5.4.8.9,1,1.5s.4,1.2.4,1.9c0,1-.2,1.8-.7,2.5s-1.1,1.3-2,1.6l2.9,5.9v.2h-3.4ZM1405.7,438.6c.6,0,1.1-.2,1.5-.5s.6-.8.6-1.4-.2-1-.6-1.3-.9-.5-1.5-.5h-2.6v3.6h0c0,.1,2.6.1,2.6.1h0ZM1416.6,447s-.2,0-.2-.2v-11.7h0c0-.1-3.8-.1-3.8-.1-.1,0-.2,0-.2-.2v-2.4c0-.1,0-.2.2-.2h11.1s.2,0,.2.2v2.4c0,.1,0,.2-.2.2h-3.8v11.8c0,.1,0,.2-.2.2h-3.1ZM1430.6,447.2c-.6,0-1.2,0-1.7-.2-.6-.1-1.1-.2-1.6-.4-.5-.2-1-.4-1.4-.7-.4-.2-.8-.5-1.1-.8v-.4l1.7-1.9c0-.1.2-.1.3,0,.5.4,1.1.8,1.7,1.1.7.3,1.4.5,2.2.5s1.4-.2,1.8-.5.6-.8.6-1.3-.2-.8-.5-1.1c-.3-.3-.9-.5-1.8-.6h-.8c-1.5-.3-2.7-.8-3.5-1.5s-1.2-1.8-1.2-3.1,0-1.3.4-1.9c.2-.6.6-1.1,1.1-1.5s1-.7,1.7-.9c.7-.2,1.4-.3,2.2-.3s1.9.1,2.8.4,1.6.7,2.3,1.1c0,0,.2.2,0,.3l-1.3,2c0,.1-.2.1-.3,0-.6-.4-1.2-.7-1.7-.9-.6-.2-1.1-.3-1.8-.3s-1.2.2-1.5.5-.5.7-.5,1.2.2.8.5,1.1c.3.3,1,.5,1.8.6h.8c1.6.3,2.7.8,3.5,1.5s1.2,1.8,1.2,3.1,0,1.3-.4,1.9c-.2.6-.6,1.1-1.1,1.5s-1.1.7-1.8,1c-.7.2-1.6.4-2.6.4h0ZM1443.9,432.3c0-.1,0-.2.2-.2h2.8s.2,0,.2.2v5.6h0c0,.1,4.9.1,4.9.1h0v-5.7c0-.1,0-.2.2-.2h2.8c.1,0,.2,0,.2.2v14.5c0,.1,0,.2-.2.2h-2.8c-.1,0-.2,0-.2-.2v-5.8h0c0-.1-4.9-.1-4.9-.1h0v5.9c0,.1,0,.2-.2.2h-2.8s-.2,0-.2-.2v-14.5ZM1462.4,432.3c0-.1,0-.2.3-.2h2.8s.2,0,.3.2l5.1,14.5c0,.1,0,.2-.2.2h-2.9c-.1,0-.2,0-.3-.2l-.8-2.6h-5.2l-.8,2.6c0,.1,0,.2-.3.2h-2.9c-.1,0-.2,0-.2-.2l5.2-14.5h0ZM1465.7,441.4l-1.7-5.2h0l-1.7,5.2h3.5-.1ZM1472.5,432.3c0-.1,0-.2.2-.2h2.8s.2,0,.2.2v11.7h0c0,.1,6.6.1,6.6.1,0,0,.2,0,.2.2v2.4c0,.1,0,.2-.2.2h-9.8s-.2,0-.2-.2v-14.5h.2ZM1484.6,432.3c0-.1,0-.2.2-.2h2.8c.1,0,.2,0,.2.2v11.7h0c0,.1,6.6.1,6.6.1,0,0,.2,0,.2.2v2.4c0,.1,0,.2-.2.2h-9.7s-.2,0-.2-.2v-14.5h0Z" />
                        <path ref={setRef("sportsHall", "icon")} className="st18" d="M1331.9,430.1c-2.6-2.6-6.2-4.1-9.9-4.1s-7.3,1.5-9.9,4.1-4.1,6.2-4.1,9.9,1.5,7.3,4.1,9.9,6.2,4.1,9.9,4.1,7.3-1.5,9.9-4.1,4.1-6.2,4.1-9.9-1.5-7.3-4.1-9.9ZM1334.3,440.6c-.2-.1-.3-.2-.5-.3-3.6-2.1-7.8-2.6-11.7-1.2-1.5-1.3-2.7-3-3.4-4.8,1.6-.5,3.3-.9,5.1-1.1,3.1-.3,6.2,0,9,.8,1,1.8,1.5,3.9,1.5,6s0,.4,0,.6ZM1321.6,452.4c-2.2,0-4.3-.7-6.1-1.8,2.3-1.2,4.2-3,5.5-5.2.9-1.5,1.5-3.1,1.8-4.7,1.9-.6,3.9-.8,5.9-.5-.4,1.7-.9,3.3-1.7,4.9-1.3,2.9-3.2,5.4-5.4,7.4h0ZM1330.7,431.3c.2.2.4.4.6.7-2.5-.5-5.1-.7-7.7-.4-1.9.2-3.7.6-5.4,1.1-.2-1-.4-2-.4-3v-1.4c1.3-.5,2.7-.7,4.1-.7,3.3,0,6.4,1.3,8.7,3.6h.1ZM1313.3,431.3c.9-.9,1.9-1.6,3-2.2v.6c0,4.1,1.8,8,4.9,10.7-.3,1.5-.8,2.8-1.6,4.1-.2.4-.5.8-.8,1.2-1.2-1.2-2.3-2.5-3.3-3.9-1.8-2.7-3.1-5.7-3.6-8.6v-.2c.4-.6.9-1.2,1.4-1.7ZM1309.6,440c0-1.7.3-3.4,1-4.9.7,2.6,1.9,5.2,3.5,7.6,1,1.5,2.2,2.9,3.5,4.2-1.1,1.1-2.3,1.9-3.7,2.5-.2-.2-.5-.4-.7-.7-2.3-2.3-3.6-5.4-3.6-8.7h0ZM1330.7,448.7c-1.8,1.8-4.1,3-6.7,3.4,1.7-1.9,3.2-4.1,4.4-6.5.8-1.7,1.4-3.5,1.8-5.2,1,.3,1.9.7,2.8,1.2.4.2.8.5,1.1.7-.5,2.4-1.6,4.6-3.4,6.3h0Z" />
                        <g ref={setRef("alNaseem", "square")}>
                            <rect className="st53" x={1488} y={308} width={305} height={73} />
                            <g className="st38">
                                <rect className="st30" x={1532} y="375.6" width="335.7" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st63" x={1532} y="375.6" width="335.7" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st21" x={1473} y={303} width="176.6" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st62" x={1473} y={303} width="176.6" height="8.4" />
                            </g>
                            <path className="st7" d="M1608.1,308h184.3v71.9l47.6,45.6v20.5" />
                            <circle className="st18" cx={1840} cy={449} r={8} />
                        </g>
                        <path ref={setRef("alNaseem", "text")} className="st18" d="M1539.4,334.9c0-.2.2-.3.4-.3h3.8c.2,0,.3.1.4.3l6.9,19.8c0,.2,0,.3-.2.3h-3.9c-.2,0-.3-.1-.4-.3l-1.2-3.6h-7.1l-1.1,3.6c0,.2-.2.3-.4.3h-3.9c-.2,0-.3-.1-.2-.3l7-19.8h-.1ZM1544,347.4l-2.3-7.1h0l-2.3,7.1h4.7,0ZM1553.3,334.9c0-.2,0-.3.3-.3h3.8c.2,0,.3.1.3.3v16c0,.1,0,.2.2.2h9c.2,0,.3.1.3.3v3.3c0,.2,0,.3-.3.3h-13.3c-.2,0-.3-.1-.3-.3v-19.8ZM1576.8,334.9c0-.2,0-.3.3-.3h3.6c.2,0,.4.1.5.3l7.2,12.8h.2v-12.8c0-.2,0-.3.3-.3h3.4c.2,0,.3.1.3.3v19.8c0,.2,0,.3-.3.3h-3.6c-.2,0-.4-.1-.5-.3l-7.2-12.8h-.2v12.8c0,.2,0,.3-.3.3h-3.4c-.2,0-.3-.1-.3-.3v-19.8ZM1602,334.9c0-.2.2-.3.4-.3h3.8c.2,0,.3.1.4.3l6.9,19.8c0,.2,0,.3-.2.3h-3.9c-.2,0-.3-.1-.4-.3l-1.2-3.6h-7.1l-1.1,3.6c0,.2-.2.3-.4.3h-3.9c-.2,0-.3-.1-.2-.3l7-19.8h-.1ZM1606.6,347.4l-2.3-7.1h0l-2.3,7.1h4.7,0ZM1622.7,355.3c-.8,0-1.6,0-2.4-.2-.8-.1-1.5-.3-2.2-.6-.7-.3-1.3-.6-1.9-.9s-1-.7-1.4-1.1c-.2-.2-.2-.3,0-.5l2.3-2.6c0-.2.3-.2.5,0,.7.5,1.5,1,2.4,1.5.9.4,1.9.6,3,.6s1.9-.2,2.5-.7.9-1,.9-1.8-.2-1.1-.7-1.5c-.4-.4-1.3-.6-2.5-.8h-1.1c-2.1-.4-3.7-1.1-4.8-2-1.1-1-1.7-2.4-1.7-4.2s.2-1.8.5-2.6c.3-.8.8-1.4,1.4-2,.6-.5,1.4-1,2.3-1.3s1.9-.5,3-.5,2.6.2,3.8.6c1.2.4,2.2.9,3.1,1.6.2.1.2.3,0,.5l-1.8,2.7c0,.2-.3.2-.4,0-.8-.5-1.6-.9-2.3-1.2-.8-.3-1.6-.4-2.4-.4s-1.6.2-2,.6c-.5.4-.7,1-.7,1.6s.2,1.1.7,1.4c.5.4,1.3.7,2.5.8l1.1.2c2.1.3,3.7.9,4.8,1.9,1.1,1,1.6,2.4,1.6,4.3s-.2,1.8-.5,2.6c-.3.8-.9,1.5-1.5,2-.7.6-1.5,1-2.5,1.3s-2.2.5-3.5.5v.2h-.1ZM1633.7,334.9c0-.2,0-.3.3-.3h13.1c.2,0,.3.1.3.3v3.2c0,.2,0,.3-.3.3h-8.8s-.2,0-.2.2v4.1c0,.1,0,.2.2.2h7.3c.2,0,.3.1.3.3v3.2c0,.2,0,.3-.3.3h-7.3s-.2,0-.2.2v4.2c0,.1,0,.2.2.2h8.8c.2,0,.3.1.3.3v3.2c0,.2,0,.3-.3.3h-13.1c-.2,0-.3-.1-.3-.3v-19.8h0ZM1650.6,334.9c0-.2,0-.3.3-.3h13.1c.2,0,.3.1.3.3v3.2c0,.2,0,.3-.3.3h-8.8s-.2,0-.2.2v4.1c0,.1,0,.2.2.2h7.3c.2,0,.3.1.3.3v3.2c0,.2,0,.3-.3.3h-7.3s-.2,0-.2.2v4.2c0,.1,0,.2.2.2h8.8c.2,0,.3.1.3.3v3.2c0,.2,0,.3-.3.3h-13.1c-.2,0-.3-.1-.3-.3v-19.8h0ZM1667.6,334.9c0-.2,0-.3.3-.3h3.6c.2,0,.4.1.5.3l5.2,11.6h0l5.1-11.6c0-.2.2-.3.5-.3h3.5c.2,0,.3.1.3.3v19.8c0,.2,0,.3-.3.3h-3.4c-.2,0-.3-.1-.3-.3v-11.5h0l-3.8,8.6c0,.3-.3.4-.6.4h-2.1c-.3,0-.5-.1-.6-.4l-3.8-8.6h0v11.5c0,.2,0,.3-.3.3h-3.4c-.2,0-.3-.1-.3-.3v-19.8h0Z" />
                        <g ref={setRef("alNaseem", "icon")} className="st49">
                            <g>
                                <path className="st18" d="M1768.9,360v-26.1h-7.9v-9.9h-26v9.9h-7.9v26.1h-5.1v3h52v-3h-5.1ZM1735,360h-4.9v-23.1h4.9v23.1ZM1751.9,360h-7.7v-7.6h7.7v7.6ZM1757.9,333.9v26.1h-3v-10.6h-13.8v10.6h-3v-33h19.9v6.9h0ZM1765.9,360h-4.9v-23.1h4.9v23.1Z" />
                                <path className="st18" d="M1746,343.1h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M1746,330h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M1754.9,330h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M1746,336.5h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M1754.9,343.1h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M1754.9,336.5h-4.9v3h4.9v-3Z" />
                            </g>
                        </g>
                        <g ref={setRef("alSahab1", "square")}>
                            <rect className="st53" x={764} y={1021} width={305} height={73} />
                            <g className="st38">
                                <rect className="st45" x={808} y="1088.7" width="335.7" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st56" x={808} y="1088.7" width="335.7" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st5" x={749} y={1016} width="176.6" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st74" x={749} y={1016} width="176.6" height="8.4" />
                            </g>
                            <path className="st7" d="M884.1,1021h184.3v71.9l47.6,45.7v20.5" />
                            <circle className="st18" cx={1116} cy={1162} r={8} />
                        </g>
                        <path ref={setRef("alSahab1", "text")} className="st18" d="M802.4,1047.9c0-.2.2-.3.4-.3h3.8c.2,0,.3,0,.4.3l6.9,19.8c0,.2,0,.3-.2.3h-3.9c-.2,0-.3,0-.4-.3l-1.2-3.6h-7.1l-1.1,3.6c0,.2-.2.3-.4.3h-3.9c-.2,0-.3,0-.2-.3l7-19.8h0ZM807,1060.4l-2.3-7.1h0l-2.3,7.1h4.7-.1ZM816.3,1047.9c0-.2,0-.3.3-.3h3.8c.2,0,.3,0,.3.3v16s0,.2.2.2h9c.2,0,.3,0,.3.3v3.3c0,.2,0,.3-.3.3h-13.3c-.2,0-.3,0-.3-.3v-19.8ZM846.7,1068.3c-.8,0-1.6,0-2.4-.2-.8,0-1.5-.3-2.2-.6-.7-.3-1.3-.6-1.9-.9-.6-.3-1-.7-1.4-1.1-.2-.2-.2-.3,0-.5l2.3-2.6c0-.2.3-.2.5,0,.7.5,1.5,1,2.4,1.5.9.4,1.9.6,3,.6s1.9-.2,2.5-.7.9-1,.9-1.8-.2-1.1-.7-1.5-1.3-.7-2.5-.8l-1.1-.2c-2.1-.3-3.7-.9-4.8-1.9s-1.6-2.4-1.6-4.2.2-1.8.5-2.6c.3-.8.8-1.4,1.4-2,.6-.5,1.4-1,2.3-1.3.9-.3,1.9-.4,3-.4s2.6.2,3.8.6,2.2.9,3.1,1.6c.2,0,.2.3,0,.4l-1.8,2.7c0,.2-.3.2-.4,0-.8-.5-1.6-.9-2.3-1.2-.8-.3-1.6-.4-2.4-.4s-1.6.2-2,.6c-.5.4-.7.9-.7,1.6s.2,1.1.7,1.4c.5.4,1.3.7,2.5.8l1.1.2c2.1.3,3.7.9,4.8,1.9s1.6,2.4,1.6,4.3-.2,1.8-.5,2.6c-.3.8-.8,1.5-1.5,2-.7.6-1.5,1-2.5,1.3s-2.2.5-3.5.5l-.2.3h0ZM863,1047.9c0-.2.2-.3.4-.3h3.8c.2,0,.3,0,.4.3l6.9,19.8c0,.2,0,.3-.2.3h-3.9c-.2,0-.3,0-.4-.3l-1.2-3.6h-7.1l-1.1,3.6c0,.2-.2.3-.4.3h-3.9c-.2,0-.3,0-.2-.3l7-19.8h0ZM867.6,1060.4l-2.3-7.1h0l-2.3,7.1h4.7-.1ZM876.8,1047.9c0-.2,0-.3.3-.3h3.8c.2,0,.3,0,.3.3v7.7s0,.2.2.2h6.7s.2,0,.2-.2v-7.7c0-.2,0-.3.3-.3h3.8c.2,0,.3,0,.3.3v19.8c0,.2,0,.3-.3.3h-3.8c-.2,0-.3,0-.3-.3v-7.9s0-.2-.2-.2h-6.7s-.2,0-.2.2v7.9c0,.2,0,.3-.3.3h-3.8c-.2,0-.3,0-.3-.3v-19.8ZM902,1047.9c0-.2.2-.3.4-.3h3.8c.2,0,.3,0,.4.3l6.9,19.8c0,.2,0,.3-.2.3h-3.9c-.2,0-.3,0-.4-.3l-1.2-3.6h-7.1l-1.1,3.6c0,.2-.2.3-.4.3h-3.9c-.2,0-.3,0-.2-.3l7-19.8h0ZM906.6,1060.4l-2.3-7.1h0l-2.3,7.1h4.7-.1ZM915.8,1047.9c0-.2,0-.3.3-.3h7.9c2.2,0,3.9.5,4.9,1.5s1.6,2.3,1.6,3.9-.2,2-.7,2.7c-.4.7-1,1.2-1.7,1.6h0c.3.2.7.4,1,.7.3.3.6.6.9,1,.3.4.5.9.6,1.4.2.5.2,1,.2,1.7,0,2-.6,3.5-1.9,4.5-1.2,1-3,1.4-5.2,1.4h-7.7c-.2,0-.3,0-.3-.3v-19.8h.1ZM923.5,1055.9c.8,0,1.5-.2,2-.6s.7-1,.7-1.8-.2-1.3-.7-1.7c-.5-.4-1.1-.6-2-.6h-3.1s-.2,0-.2.2v4.4s0,.2.2.2h3.1ZM920.2,1064.2s0,.2.2.2h3.4c.9,0,1.6-.2,2-.7.5-.5.7-1.1.7-1.9s-.2-1.4-.7-1.9-1.1-.7-2-.7h-3.4s-.2,0-.2.2v4.7h0ZM946.5,1052.3h0l-3.2,2.2c-.2,0-.3,0-.3-.2v-3.7c0-.2,0-.3.2-.4l3.4-2.5s.3-.2.5-.2h3.4c.2,0,.3,0,.3.3v19.8c0,.2,0,.3-.3.3h-3.6c-.2,0-.3,0-.3-.3v-15.4h-.1Z" />
                        <g ref={setRef("alSahab1", "icon")} className="st6">
                            <g>
                                <path className="st18" d="M1044.9,1073v-26.1h-7.9v-9.9h-26v9.9h-7.9v26.1h-5.1v3h52v-3h-5.1ZM1011,1073h-4.9v-23.1h4.9v23.1ZM1027.9,1073h-7.7v-7.6h7.7v7.6ZM1033.9,1046.9v26.1h-3v-10.6h-13.8v10.6h-3v-33h19.9v6.9h0ZM1041.9,1073h-4.9v-23.1h4.9v23.1Z" />
                                <path className="st18" d="M1022,1056.1h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M1022,1043h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M1030.9,1043h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M1022,1049.5h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M1030.9,1056.1h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M1030.9,1049.5h-4.9v3h4.9v-3Z" />
                            </g>
                        </g>
                        <g ref={setRef("alSahab2", "square")}>
                            <rect className="st53" x={1706} y={712} width={305} height={73} />
                            <g className="st38">
                                <rect className="st4" x={1750} y="779.6" width="335.7" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st42" x={1750} y="779.6" width="335.7" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st55" x={1691} y={707} width="176.6" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st36" x={1691} y={707} width="176.6" height="8.4" />
                            </g>
                            <path className="st7" d="M1826.1,712h184.3v71.9l47.6,45.6v20.5" />
                            <circle className="st18" cx={2058} cy={853} r={8} />
                        </g>
                        <path ref={setRef("alSahab2", "text")} className="st18" d="M1744.4,738.9c0-.2.2-.3.4-.3h3.8c.2,0,.3,0,.4.3l6.9,19.8c0,.2,0,.3-.2.3h-3.9c-.2,0-.3,0-.4-.3l-1.2-3.6h-7.1l-1.1,3.6c0,.2-.2.3-.4.3h-3.9c-.2,0-.3,0-.2-.3l7-19.8h-.1ZM1749,751.4l-2.3-7.1h0l-2.3,7.1h4.7,0ZM1758.3,738.9c0-.2,0-.3.3-.3h3.8c.2,0,.3,0,.3.3v16s0,.2.2.2h9c.2,0,.3,0,.3.3v3.3c0,.2,0,.3-.3.3h-13.3c-.2,0-.3,0-.3-.3v-19.8ZM1788.7,759.3c-.8,0-1.6,0-2.4-.2-.8,0-1.5-.3-2.2-.6s-1.3-.6-1.9-.9c-.6-.3-1-.7-1.4-1.1-.2-.2-.2-.3,0-.5l2.3-2.6c0-.2.3-.2.5,0,.7.5,1.5,1,2.4,1.5.9.4,1.9.6,3,.6s1.9-.2,2.5-.7.9-1,.9-1.8-.2-1.1-.7-1.5c-.4-.4-1.3-.7-2.5-.8l-1.1-.2c-2.1-.3-3.7-.9-4.8-1.9-1.1-1-1.6-2.4-1.6-4.2s.2-1.8.5-2.5c.3-.8.8-1.4,1.4-2,.6-.5,1.4-1,2.3-1.3s1.9-.4,3-.4,2.6.2,3.8.6c1.2.4,2.2.9,3.1,1.6.2,0,.2.3,0,.4l-1.8,2.7c0,.2-.3.2-.4,0-.8-.5-1.6-.9-2.3-1.2-.8-.3-1.6-.4-2.4-.4s-1.6.2-2,.6-.7,1-.7,1.6.2,1.1.7,1.4c.5.4,1.3.6,2.5.8h1.1c2.1.4,3.7,1.1,4.8,2.1,1.1,1,1.6,2.4,1.6,4.3s-.2,1.8-.5,2.6-.8,1.5-1.5,2c-.7.6-1.5,1-2.5,1.3s-2.2.5-3.5.5l-.2.2h0ZM1805,738.9c0-.2.2-.3.4-.3h3.8c.2,0,.3,0,.4.3l6.9,19.8c0,.2,0,.3-.2.3h-3.9c-.2,0-.3,0-.4-.3l-1.2-3.6h-7.1l-1.1,3.6c0,.2-.2.3-.4.3h-3.9c-.2,0-.3,0-.2-.3l7-19.8h-.1ZM1809.6,751.4l-2.3-7.1h0l-2.3,7.1h4.7,0ZM1818.8,738.9c0-.2,0-.3.3-.3h3.8c.2,0,.3,0,.3.3v7.6s0,.2.2.2h6.7s.2,0,.2-.2v-7.6c0-.2,0-.3.3-.3h3.8c.2,0,.3,0,.3.3v19.8c0,.2,0,.3-.3.3h-3.8c-.2,0-.3,0-.3-.3v-7.9s0-.2-.2-.2h-6.7s-.2,0-.2.2v7.9c0,.2,0,.3-.3.3h-3.8c-.2,0-.3,0-.3-.3v-19.8ZM1844,738.9c0-.2.2-.3.4-.3h3.8c.2,0,.3,0,.4.3l6.9,19.8c0,.2,0,.3-.2.3h-3.9c-.2,0-.3,0-.4-.3l-1.2-3.6h-7.1l-1.1,3.6c0,.2-.2.3-.4.3h-3.9c-.2,0-.3,0-.2-.3l7-19.8h-.1ZM1848.6,751.4l-2.3-7.1h0l-2.3,7.1h4.7,0ZM1857.8,738.9c0-.2,0-.3.3-.3h7.9c2.2,0,3.9.5,4.9,1.5,1.1,1,1.6,2.3,1.6,3.9s-.2,2-.7,2.7c-.4.7-1,1.2-1.7,1.6h0c.3.2.7.4,1,.7s.6.6.9,1,.5.9.6,1.4c.2.5.2,1.1.2,1.7,0,2-.6,3.5-1.9,4.5-1.2,1-3,1.4-5.2,1.4h-7.7c-.2,0-.3,0-.3-.3v-19.8h0ZM1865.6,746.9c.8,0,1.5-.2,1.9-.6.5-.4.7-1,.7-1.8s-.2-1.3-.7-1.7-1.1-.6-1.9-.6h-3.1s-.2,0-.2.2v4.4s0,.2.2.2h3.1ZM1862.2,755.2s0,.2.2.2h3.4c.9,0,1.6-.2,2-.7.5-.5.7-1.1.7-1.9s-.2-1.4-.7-1.9-1.1-.7-2-.7h-3.4s-.2,0-.2.2v4.7h0ZM1883.2,755.9c0-.2,0-.3.2-.4l7.2-8.5c.4-.5.7-.9.9-1.3.2-.5.3-1,.3-1.5s-.2-1.2-.6-1.7c-.4-.4-.9-.7-1.6-.7-1.4,0-2.2.8-2.4,2.4,0,.2,0,.3-.3.2l-3.3-.5c-.2,0-.3-.2-.2-.4,0-.7.2-1.4.5-2s.7-1.2,1.3-1.7c.6-.5,1.2-.9,2-1.1.8-.3,1.7-.4,2.6-.4s1.9,0,2.6.4c.8.3,1.4.7,2,1.2.5.5.9,1.1,1.2,1.9.3.7.4,1.5.4,2.3s-.2,1.9-.6,2.7-.9,1.5-1.5,2.3l-5.4,6.3h7.1c.2,0,.3,0,.3.3v3c0,.2,0,.3-.3.3h-12.1c-.2,0-.3,0-.3-.3v-2.8h0Z" />
                        <g ref={setRef("alSahab2", "icon")} className="st39">
                            <g>
                                <path className="st18" d="M1986.9,764v-26.1h-7.9v-9.9h-26v9.9h-7.9v26.1h-5.1v3h52v-3h-5.1ZM1953,764h-4.9v-23.1h4.9v23.1ZM1969.9,764h-7.7v-7.6h7.7v7.6ZM1975.9,737.9v26.1h-3v-10.6h-13.8v10.6h-3v-33h19.9v6.9h0ZM1983.9,764h-4.9v-23.1h4.9v23.1Z" />
                                <path className="st18" d="M1964,747.1h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M1964,734h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M1972.9,734h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M1964,740.5h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M1972.9,747.1h-4.9v3h4.9v-3Z" />
                                <path className="st18" d="M1972.9,740.5h-4.9v3h4.9v-3Z" />
                            </g>
                        </g>
                        <g ref={setRef("alDhabi3", "square")}>
                            <rect className="st53" x="285.7" y={628} width={305} height={73} />
                            <g className="st38">
                                <rect className="st26" x={211} y="695.6" width="335.7" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st44" x={211} y="695.6" width="335.7" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st78" x="429.1" y={623} width="176.6" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st47" x="429.1" y={623} width="176.6" height="8.4" />
                            </g>
                            <path className="st7" d="M470.6,628h-184.3v71.9l-47.6,45.6v20.5" />
                            <circle className="st18" cx="238.7" cy={769} r={8} />
                        </g>
                        <path ref={setRef("alDhabi3", "text")} className="st18" d="M397.4,654.9c0-.2.2-.3.4-.3h3.8c.2,0,.3,0,.4.3l6.9,19.8c0,.2,0,.3-.2.3h-3.9c-.2,0-.3,0-.4-.3l-1.2-3.6h-7.1l-1.1,3.6c0,.2-.2.3-.4.3h-3.9c-.2,0-.3,0-.2-.3l7-19.8h0ZM402,667.4l-2.3-7.1h0l-2.3,7.1h4.7-.1ZM411.3,654.9c0-.2.1-.3.3-.3h3.8c.2,0,.3,0,.3.3v16s0,.2.2.2h9c.2,0,.3,0,.3.3v3.3c0,.2-.1.3-.3.3h-13.3c-.2,0-.3,0-.3-.3v-19.8ZM434.8,654.9c0-.2.1-.3.3-.3h7.6c1.8,0,3.3.4,4.5,1.1,1.2.8,2.1,1.9,2.6,3.5,0,.3.1.6.2.9,0,.3.1.7.2,1.1,0,.4.1.9.1,1.5v4.2c0,.6,0,1.1-.1,1.5,0,.4,0,.8-.2,1.1,0,.3-.1.6-.2.9-.5,1.5-1.4,2.7-2.6,3.5s-2.7,1.1-4.5,1.1h-7.6c-.2,0-.3,0-.3-.3v-19.8h0ZM439.3,670.9s0,.2.2.2h2.3c1,0,1.8-.2,2.5-.5.6-.3,1.1-.9,1.3-1.8,0,0,.1-.3.1-.5v-7c0-.2,0-.4-.1-.5-.3-.8-.7-1.4-1.3-1.7-.6-.3-1.4-.5-2.5-.5h-2.3c-.1,0-.2,0-.2.2v12.2h0ZM453.7,654.9c0-.2.1-.3.3-.3h3.8c.2,0,.3,0,.3.3v7.6s0,.2.2.2h6.7c.1,0,.2,0,.2-.2v-7.6c0-.2.1-.3.3-.3h3.8c.2,0,.3,0,.3.3v19.8c0,.2-.1.3-.3.3h-3.8c-.2,0-.3,0-.3-.3v-7.9s0-.2-.2-.2h-6.7c-.1,0-.2,0-.2.2v7.9c0,.2-.1.3-.3.3h-3.8c-.2,0-.3,0-.3-.3v-19.8ZM479,654.9c0-.2.2-.3.4-.3h3.8c.2,0,.3,0,.4.3l6.9,19.8c0,.2,0,.3-.2.3h-3.9c-.2,0-.3,0-.4-.3l-1.2-3.6h-7.1l-1.1,3.6c0,.2-.2.3-.4.3h-3.9c-.2,0-.3,0-.2-.3l7-19.8h0ZM483.6,667.4l-2.3-7.1h0l-2.3,7.1h4.7-.1ZM492.8,654.9c0-.2.1-.3.3-.3h8c2.2,0,3.9.5,4.9,1.5s1.6,2.3,1.6,3.9-.2,2-.7,2.7c-.4.7-1,1.2-1.7,1.6h0c.3.2.7.4,1,.7s.6.6.9,1,.5.9.6,1.4c.2.5.2,1.1.2,1.7,0,2-.6,3.5-1.9,4.5-1.2,1-3,1.4-5.2,1.4h-7.7c-.2,0-.3,0-.3-.3v-19.8h0ZM500.5,662.9c.8,0,1.5-.2,2-.6.5-.4.7-1,.7-1.8s-.2-1.3-.7-1.7-1.1-.6-2-.6h-3.1c-.1,0-.2,0-.2.2v4.4s0,.2.2.2h3.1ZM497.2,671.2s0,.2.2.2h3.4c.9,0,1.6-.2,2-.7.5-.5.7-1.1.7-1.9s-.2-1.4-.7-1.9-1.1-.7-2-.7h-3.4c-.1,0-.2,0-.2.2v4.7h0ZM511.1,654.9c0-.2.1-.3.3-.3h3.8c.2,0,.3,0,.3.3v19.8c0,.2,0,.3-.3.3h-3.8c-.2,0-.3,0-.3-.3v-19.8h0ZM526.2,670.7c0-.2,0-.3.2-.4l3.3-.6c.2,0,.3,0,.4.2.2.5.5,1,.9,1.4s1,.5,1.7.5,1.4-.2,1.8-.8c.5-.5.7-1.1.7-1.9s-.3-1.6-.8-2.1-1.2-.8-2.1-.8h-.9c-.2,0-.3,0-.3-.3v-2.9c0-.2,0-.3.3-.3h.8c.8,0,1.4-.2,1.8-.7.5-.5.7-1.1.7-1.9s-.2-1.3-.6-1.7c-.4-.4-1-.7-1.7-.7s-1.1.2-1.5.5-.6.8-.8,1.4c0,.2-.2.2-.4.2l-3.3-.6c-.2,0-.3-.2-.2-.3,0-.7.4-1.3.7-1.9.3-.6.8-1.1,1.3-1.5.6-.4,1.2-.7,1.9-1,.7-.2,1.6-.4,2.5-.4s1.9,0,2.7.4c.8.3,1.4.7,2,1.2.5.5.9,1.1,1.2,1.8s.4,1.4.4,2.2-.2,1.7-.6,2.4c-.4.7-.9,1.3-1.7,1.8h0c.3.2.6.4.9.7.3.3.6.6.9,1,.3.4.5.9.6,1.4.2.5.2,1.2.2,1.8s-.2,1.8-.5,2.5c-.3.8-.8,1.4-1.4,2-.6.5-1.3,1-2.1,1.3s-1.7.5-2.6.5c-1.7,0-3.2-.4-4.4-1.2s-1.9-2-2.2-3.4l.2.2h0Z" />
                        <g ref={setRef("alDhabi3", "icon")} className="st1">
                            <g>
                                <path className="st18" d="M309.8,680v-26.1h7.9v-9.9h26v9.9h7.9v26.1h5.1v3h-52v-3h5.1ZM343.7,680h4.9v-23.1h-4.9v23.1ZM326.8,680h7.7v-7.6h-7.7v7.6ZM320.8,653.9v26.1h3v-10.6h13.8v10.6h3v-33h-19.9v6.9h.1ZM312.8,680h4.9v-23.1h-4.9v23.1Z" />
                                <path className="st18" d="M332.7,663.1h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M332.7,650h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M323.8,650h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M332.7,656.5h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M323.8,663.1h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M323.8,656.5h4.9v3h-4.9v-3Z" />
                            </g>
                        </g>
                        <g ref={setRef("alDhabi2", "square")}>
                            <rect className="st53" x="74.7" y={437} width={305} height={73} />
                            <g className="st38">
                                <rect className="st41" y="504.6" width="335.7" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st12" y="504.6" width="335.7" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st67" x="218.1" y={432} width="176.6" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st19" x="218.1" y={432} width="176.6" height="8.4" />
                            </g>
                            <path className="st7" d="M259.6,437H75.3v71.9l-47.6,45.6v20.5" />
                            <circle className="st18" cx="27.7" cy={578} r={8} />
                        </g>
                        <path ref={setRef("alDhabi2", "text")} className="st18" d="M186.4,463.9c0-.2.2-.3.4-.3h3.8c.2,0,.3.1.4.3l6.9,19.8c0,.2,0,.3-.2.3h-3.9c-.2,0-.3-.1-.4-.3l-1.2-3.6h-7.1l-1.1,3.6c0,.2-.2.3-.4.3h-3.9c-.2,0-.3-.1-.2-.3l7-19.8h-.1ZM191,476.4l-2.3-7.1h0l-2.3,7.1h4.7,0ZM200.3,463.9c0-.2,0-.3.3-.3h3.8c.2,0,.3.1.3.3v16c0,.1,0,.2.2.2h9c.2,0,.3.1.3.3v3.3c0,.2-.1.3-.3.3h-13.3c-.2,0-.3-.1-.3-.3v-19.8ZM223.8,463.9c0-.2,0-.3.3-.3h7.6c1.8,0,3.3.4,4.5,1.1,1.2.8,2.1,1.9,2.6,3.5,0,.3.1.6.2.9,0,.3.1.7.2,1.1,0,.4,0,.9.1,1.5v4.2c0,.6,0,1.1-.1,1.5,0,.4-.1.8-.2,1.1,0,.3-.1.6-.2.9-.5,1.5-1.4,2.7-2.6,3.4-1.2.8-2.7,1.1-4.5,1.1h-7.6c-.2,0-.3-.1-.3-.3v-19.8h0ZM228.3,479.9c0,.1,0,.2.2.2h2.3c1,0,1.8-.2,2.5-.5.6-.3,1.1-.9,1.3-1.8,0-.1.1-.3.2-.5v-7c0-.2,0-.4-.2-.5-.3-.8-.7-1.4-1.3-1.7-.6-.3-1.4-.5-2.5-.5h-2.3c-.1,0-.2,0-.2.2v12.2h0ZM242.7,463.9c0-.2.1-.3.3-.3h3.8c.2,0,.3.1.3.3v7.6c0,.1,0,.2.2.2h6.7c.1,0,.2,0,.2-.2v-7.6c0-.2,0-.3.3-.3h3.8c.2,0,.3.1.3.3v19.8c0,.2-.1.3-.3.3h-3.8c-.2,0-.3-.1-.3-.3v-7.9c0-.1,0-.2-.2-.2h-6.7c-.1,0-.2,0-.2.2v7.9c0,.2-.1.3-.3.3h-3.8c-.2,0-.3-.1-.3-.3v-19.8h0ZM268,463.9c0-.2.2-.3.4-.3h3.8c.2,0,.3.1.4.3l6.9,19.8c0,.2,0,.3-.2.3h-3.9c-.2,0-.3-.1-.4-.3l-1.2-3.6h-7.1l-1.1,3.6c0,.2-.2.3-.4.3h-3.9c-.2,0-.3-.1-.2-.3l7-19.8h0ZM272.6,476.4l-2.3-7.1h0l-2.3,7.1h4.7-.1ZM281.8,463.9c0-.2.1-.3.3-.3h8c2.2,0,3.9.5,4.9,1.5s1.6,2.3,1.6,3.9-.2,2-.7,2.7c-.4.7-1,1.2-1.7,1.6h0c.3.2.7.4,1,.7.3.3.6.6.9,1s.5.9.6,1.4c.2.5.2,1,.2,1.6,0,2-.6,3.5-1.9,4.5-1.2,1-3,1.4-5.2,1.4h-7.7c-.2,0-.3-.1-.3-.3v-19.8h0ZM289.5,471.9c.8,0,1.5-.2,2-.6s.7-1,.7-1.8-.2-1.3-.7-1.7c-.5-.4-1.1-.6-2-.6h-3.1c-.1,0-.2,0-.2.2v4.4c0,.1,0,.2.2.2h3.1ZM286.2,480.2c0,.1,0,.2.2.2h3.4c.9,0,1.6-.2,2-.7.5-.5.7-1.1.7-1.9s-.2-1.4-.7-1.9-1.1-.7-2-.7h-3.4c-.1,0-.2,0-.2.2v4.7h0ZM300.1,463.9c0-.2.1-.3.3-.3h3.8c.2,0,.3.1.3.3v19.8c0,.2-.1.3-.3.3h-3.8c-.2,0-.3-.1-.3-.3v-19.8ZM315.5,480.9c0-.2,0-.3.2-.4l7.2-8.5c.4-.5.7-.9.9-1.4.2-.5.3-.9.3-1.5s-.2-1.2-.6-1.7c-.4-.4-.9-.7-1.6-.7-1.4,0-2.2.8-2.4,2.4,0,.2-.1.3-.3.2l-3.3-.5c-.2,0-.3-.2-.2-.4,0-.7.2-1.4.5-2s.7-1.2,1.3-1.7c.6-.5,1.2-.9,2-1.1.8-.3,1.7-.5,2.6-.5s1.9.2,2.6.5c.8.3,1.4.7,2,1.2.5.5,1,1.1,1.2,1.9.3.7.4,1.5.4,2.3s-.2,1.9-.6,2.7c-.4.8-.9,1.5-1.5,2.3l-5.4,6.3h7.1c.2,0,.3.1.3.3v3c0,.2,0,.3-.3.3h-12.1c-.2,0-.3-.1-.3-.3v-2.8h0Z" />
                        <g ref={setRef("alDhabi2", "icon")} className="st2">
                            <g>
                                <path className="st18" d="M98.8,489v-26.1h7.9v-9.9h26v9.9h7.9v26.1h5.1v3h-52v-3s5.1,0,5.1,0ZM132.7,489h4.9v-23.1h-4.9v23.1ZM115.8,489h7.7v-7.6h-7.7v7.6ZM109.8,462.9v26.1h3v-10.6h13.8v10.6h3v-33h-19.9v6.9h0ZM101.8,489h4.9v-23.1h-4.9v23.1Z" />
                                <path className="st18" d="M121.7,472.1h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M121.7,459h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M112.8,459h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M121.7,465.5h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M112.8,472.1h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M112.8,465.5h4.9v3h-4.9v-3Z" />
                            </g>
                        </g>
                        <g ref={setRef("alDhabi1", "square")}>
                            <rect className="st53" x="510.7" y={332} width={305} height={73} />
                            <g className="st38">
                                <rect className="st34" x={436} y="399.6" width="335.7" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st59" x={436} y="399.6" width="335.7" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st70" x="654.1" y={327} width="176.6" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st10" x="654.1" y={327} width="176.6" height="8.4" />
                            </g>
                            <path className="st7" d="M695.6,332h-184.3v71.9l-47.6,45.6v20.5" />
                            <circle className="st18" cx="463.7" cy={473} r={8} />
                        </g>
                        <path ref={setRef("alDhabi1", "text")} className="st18" d="M622.4,358.9c0-.2.2-.3.4-.3h3.8c.2,0,.3.1.4.3l6.9,19.8c0,.2,0,.3-.2.3h-3.9c-.2,0-.3-.1-.4-.3l-1.2-3.6h-7.1l-1.1,3.6c0,.2-.2.3-.4.3h-3.9c-.2,0-.3-.1-.2-.3l7-19.8h0ZM627,371.4l-2.3-7.1h0l-2.3,7.1h4.7-.1ZM636.3,358.9c0-.2,0-.3.3-.3h3.8c.2,0,.3.1.3.3v16c0,.1,0,.2.2.2h9c.2,0,.3.1.3.3v3.3c0,.2,0,.3-.3.3h-13.3c-.2,0-.3-.1-.3-.3v-19.8ZM659.8,358.9c0-.2,0-.3.3-.3h7.6c1.8,0,3.3.4,4.5,1.1,1.2.8,2,1.9,2.5,3.5,0,.3.2.6.2.9s0,.7.2,1.1v7.2c0,.4,0,.8-.2,1.1,0,.3,0,.6-.2.9-.5,1.5-1.3,2.7-2.5,3.4-1.2.8-2.7,1.1-4.5,1.1h-7.6c-.2,0-.3-.1-.3-.3v-19.8h0ZM664.3,374.9c0,.1,0,.2.2.2h2.3c1,0,1.8-.2,2.5-.5.6-.3,1.1-.9,1.3-1.8,0-.1,0-.3.2-.5v-7c0-.2,0-.4-.2-.5-.3-.8-.7-1.4-1.3-1.7-.6-.3-1.4-.5-2.5-.5h-2.3s-.2,0-.2.2v12.2h0ZM678.7,358.9c0-.2,0-.3.3-.3h3.8c.2,0,.3.1.3.3v7.6c0,.1,0,.2.2.2h6.7s.2,0,.2-.2v-7.6c0-.2,0-.3.3-.3h3.8c.2,0,.3.1.3.3v19.8c0,.2,0,.3-.3.3h-3.8c-.2,0-.3-.1-.3-.3v-7.9c0-.1,0-.2-.2-.2h-6.7s-.2,0-.2.2v7.9c0,.2,0,.3-.3.3h-3.8c-.2,0-.3-.1-.3-.3v-19.8ZM704,358.9c0-.2.2-.3.4-.3h3.8c.2,0,.3.1.4.3l6.9,19.8c0,.2,0,.3-.2.3h-3.9c-.2,0-.3-.1-.4-.3l-1.2-3.6h-7.1l-1.1,3.6c0,.2-.2.3-.4.3h-3.9c-.2,0-.3-.1-.2-.3l7-19.8h0ZM708.6,371.4l-2.3-7.1h0l-2.3,7.1h4.7-.1ZM717.8,358.9c0-.2,0-.3.3-.3h7.9c2.2,0,3.9.5,4.9,1.5s1.6,2.3,1.6,3.9-.2,2-.7,2.7c-.4.7-1,1.2-1.7,1.6h0c.3.2.7.4,1,.7.3.3.6.6.9,1,.3.4.5.9.6,1.4.2.5.2,1,.2,1.6,0,2-.6,3.5-1.9,4.5-1.2,1-3,1.4-5.2,1.4h-7.7c-.2,0-.3-.1-.3-.3v-19.8h.1ZM725.5,366.9c.8,0,1.5-.2,2-.6s.7-1,.7-1.8-.2-1.3-.7-1.7c-.5-.4-1.1-.6-2-.6h-3.1s-.2,0-.2.2v4.4c0,.1,0,.2.2.2h3.1ZM722.2,375.2c0,.1,0,.2.2.2h3.4c.9,0,1.6-.2,2-.7.5-.5.7-1.1.7-1.9s-.2-1.4-.7-1.9-1.1-.7-2-.7h-3.4s-.2,0-.2.2v4.7h0ZM736.1,358.9c0-.2,0-.3.3-.3h3.8c.2,0,.3.1.3.3v19.8c0,.2,0,.3-.3.3h-3.8c-.2,0-.3-.1-.3-.3v-19.8ZM756.8,363.3h0l-3.2,2.2c-.2.1-.3,0-.3-.2v-3.7c0-.2,0-.3.2-.4l3.4-2.5c0-.1.3-.2.5-.2h3.4c.2,0,.3.1.3.3v19.8c0,.2,0,.3-.3.3h-3.6c-.2,0-.3-.1-.3-.3v-15.4h-.1Z" />
                        <g ref={setRef("alDhabi1", "icon")} className="st43">
                            <g>
                                <path className="st18" d="M534.8,384v-26.1h7.9v-9.9h26v9.9h7.9v26.1h5.1v3h-52v-3h5.1ZM568.7,384h4.9v-23.1h-4.9v23.1ZM551.8,384h7.7v-7.6h-7.7v7.6ZM545.8,357.9v26.1h3v-10.6h13.8v10.6h3v-33h-19.9v6.9h.1ZM537.8,384h4.9v-23.1h-4.9v23.1Z" />
                                <path className="st18" d="M557.7,367.1h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M557.7,354h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M548.8,354h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M557.7,360.5h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M548.8,367.1h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M548.8,360.5h4.9v3h-4.9v-3Z" />
                            </g>
                        </g>
                        <g ref={setRef("alYass2", "square")}>
                            <rect className="st53" x="1064.7" y={587} width={305} height={73} />
                            <g className="st38">
                                <rect className="st25" x={990} y="654.6" width="335.7" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st40" x={990} y="654.6" width="335.7" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st13" x="1208.1" y={582} width="176.6" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st23" x="1208.1" y={582} width="176.6" height="8.4" />
                            </g>
                            <path className="st7" d="M1249.6,587h-184.3v71.9l-47.6,45.6v20.5" />
                            <circle className="st18" cx="1017.2" cy="727.5" r={8} />
                        </g>
                        <path ref={setRef("alYass2", "text")} className="st18" d="M1176.4,613.9c0-.2.2-.3.4-.3h3.8c.2,0,.3,0,.4.3l6.9,19.8c0,.2,0,.3-.2.3h-3.9c-.2,0-.3,0-.4-.3l-1.2-3.6h-7.1l-1.1,3.6c0,.2-.2.3-.4.3h-3.9c-.2,0-.3,0-.2-.3l7-19.8h-.1ZM1181,626.4l-2.3-7.1h0l-2.3,7.1h4.7,0ZM1190.3,613.9c0-.2,0-.3.3-.3h3.8c.2,0,.3,0,.3.3v16s0,.2.2.2h9c.2,0,.3,0,.3.3v3.3c0,.2,0,.3-.3.3h-13.3c-.2,0-.3,0-.3-.3v-19.8ZM1217.7,634c-.2,0-.3,0-.3-.3v-7.8l-6-12c0-.2,0-.3.2-.3h3.9c.2,0,.4,0,.5.3l3.7,7.4h0l3.7-7.4c0-.2.2-.3.4-.3h4v.2l-6,12v7.8c0,.2,0,.3-.3.3h-3.8,0ZM1233.9,613.9c0-.2.2-.3.4-.3h3.8c.2,0,.3,0,.4.3l6.9,19.8c0,.2,0,.3-.2.3h-3.9c-.2,0-.3,0-.4-.3l-1.2-3.6h-7.1l-1.1,3.6c0,.2-.2.3-.4.3h-3.9c-.2,0-.3,0-.2-.3l7-19.8h-.1ZM1238.5,626.4l-2.3-7.1h0l-2.3,7.1h4.7,0ZM1254.6,634.3c-.8,0-1.6,0-2.4-.2-.8,0-1.5-.3-2.2-.6s-1.3-.6-1.9-.9c-.6-.3-1-.7-1.4-1.1-.2-.2-.2-.3,0-.5l2.3-2.6c0-.2.3-.2.5,0,.7.5,1.5,1,2.4,1.5.9.4,1.9.6,3,.6s1.9-.2,2.5-.7.9-1,.9-1.8-.2-1.1-.7-1.5c-.4-.4-1.3-.7-2.5-.8l-1.1-.2c-2.1-.3-3.7-.9-4.8-1.9-1.1-1-1.7-2.4-1.7-4.2s.2-1.8.5-2.5c.3-.8.8-1.4,1.4-2,.6-.5,1.4-1,2.3-1.3s1.9-.4,3-.4,2.6.2,3.8.6c1.2.4,2.2.9,3.1,1.6.2,0,.2.3,0,.4l-1.8,2.7c0,.2-.3.2-.4,0-.8-.5-1.6-.9-2.3-1.2-.8-.3-1.6-.4-2.4-.4s-1.6.2-2,.6c-.5.4-.7,1-.7,1.6s.2,1.1.7,1.4c.5.4,1.3.6,2.5.8h1.1c2.1.4,3.7,1.1,4.8,2.1,1.1,1,1.6,2.4,1.6,4.3s-.2,1.8-.5,2.6-.8,1.5-1.5,2c-.7.6-1.5,1-2.5,1.3s-2.2.5-3.5.5v.2h-.1ZM1272.4,634.3c-.8,0-1.6,0-2.4-.2-.8,0-1.5-.3-2.2-.6s-1.3-.6-1.9-.9c-.6-.3-1-.7-1.4-1.1-.2-.2-.2-.3,0-.5l2.3-2.6c0-.2.3-.2.4,0,.7.5,1.5,1,2.4,1.5.9.4,1.9.6,3,.6s1.9-.2,2.5-.7.9-1,.9-1.8-.2-1.1-.7-1.5c-.4-.4-1.3-.7-2.5-.8l-1.1-.2c-2.1-.3-3.7-.9-4.8-1.9-1.1-1-1.7-2.4-1.7-4.2s.2-1.8.5-2.5c.3-.8.8-1.4,1.4-2,.6-.5,1.4-1,2.3-1.3s1.9-.4,3-.4,2.6.2,3.8.6c1.2.4,2.2.9,3.1,1.6.2,0,.2.3,0,.4l-1.8,2.7c0,.2-.3.2-.4,0-.8-.5-1.6-.9-2.3-1.2-.8-.3-1.6-.4-2.4-.4s-1.6.2-2,.6c-.5.4-.7,1-.7,1.6s.2,1.1.7,1.4c.5.4,1.3.6,2.5.8h1.1c2.1.4,3.7,1.1,4.8,2.1,1.1,1,1.6,2.4,1.6,4.3s-.2,1.8-.5,2.6-.9,1.5-1.5,2c-.7.6-1.5,1-2.5,1.3s-2.2.5-3.5.5v.2h0ZM1290.5,630.9c0-.2,0-.3.2-.4l7.2-8.5c.4-.5.7-.9.9-1.3.2-.5.3-1,.3-1.5s-.2-1.2-.6-1.7c-.4-.4-.9-.7-1.6-.7-1.4,0-2.2.8-2.4,2.4,0,.2,0,.3-.3.2l-3.3-.5c-.2,0-.3-.2-.2-.4,0-.7.2-1.4.5-2s.7-1.2,1.3-1.7c.6-.5,1.2-.9,2-1.1.8-.3,1.7-.4,2.6-.4s1.8,0,2.6.4c.8.3,1.4.7,2,1.2.5.5.9,1.1,1.2,1.9.3.7.4,1.5.4,2.3s-.2,1.9-.6,2.7-.9,1.5-1.5,2.3l-5.4,6.3h7.1c.2,0,.3,0,.3.3v3c0,.2,0,.3-.3.3h-12.1c-.2,0-.3,0-.3-.3v-2.8h0Z" />
                        <g ref={setRef("alYass2", "icon")} className="st14">
                            <g>
                                <path className="st18" d="M1088.8,639v-26.1h7.9v-9.9h26v9.9h7.9v26.1h5.1v3h-52v-3h5.1ZM1122.7,639h4.9v-23.1h-4.9v23.1ZM1105.8,639h7.7v-7.6h-7.7v7.6ZM1099.8,612.9v26.1h3.1v-10.6h13.8v10.6h3.1v-33h-19.9v6.9h0ZM1091.8,639h4.9v-23.1h-4.9v23.1Z" />
                                <path className="st18" d="M1111.7,622.1h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M1111.7,609h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M1102.8,609h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M1111.7,615.5h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M1102.8,622.1h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M1102.8,615.5h4.9v3h-4.9v-3Z" />
                            </g>
                        </g>
                        <g ref={setRef("alYass1", "square")}>
                            <rect className="st53" x={557} y={425} width={274} height={73} />
                            <g className="st38">
                                <rect className="st68" x={482} y="492.6" width="335.7" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st76" x={482} y="492.6" width="335.7" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st28" x="700.1" y={420} width="176.6" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st0" x="700.1" y={420} width="176.6" height="8.4" />
                            </g>
                            <path className="st7" d="M741.6,425h-184.3v71.9l-47.6,45.6v20.5" />
                            <circle className="st18" cx="509.7" cy={566} r={8} />
                        </g>
                        <path ref={setRef("alYass1", "text")} className="st18" d="M668.4,451.9c0-.2.2-.3.4-.3h3.8c.2,0,.3.1.4.3l6.9,19.8c0,.2,0,.3-.2.3h-3.9c-.2,0-.3-.1-.4-.3l-1.2-3.6h-7.1l-1.1,3.6c0,.2-.2.3-.4.3h-3.9c-.2,0-.3-.1-.2-.3l7-19.8h0ZM673,464.4l-2.3-7.1h0l-2.3,7.1h4.7-.1ZM682.3,451.9c0-.2,0-.3.3-.3h3.8c.2,0,.3.1.3.3v16c0,.1,0,.2.2.2h9c.2,0,.3.1.3.3v3.3c0,.2,0,.3-.3.3h-13.3c-.2,0-.3-.1-.3-.3v-19.8ZM709.7,472c-.2,0-.3-.1-.3-.3v-7.8l-6-12c0-.2,0-.3.2-.3h3.9c.2,0,.4.1.5.3l3.7,7.4h0l3.7-7.4c0-.2.2-.3.4-.3h4v.2l-6,12v7.8c0,.2,0,.3-.3.3h-3.8ZM725.9,451.9c0-.2.2-.3.4-.3h3.8c.2,0,.3.1.4.3l6.9,19.8c0,.2,0,.3-.2.3h-3.9c-.2,0-.3-.1-.4-.3l-1.2-3.6h-7.1l-1.1,3.6c0,.2-.2.3-.4.3h-3.9c-.2,0-.3-.1-.2-.3l7-19.8h0ZM730.5,464.4l-2.3-7.1h0l-2.3,7.1h4.7-.1ZM746.6,472.3c-.8,0-1.6,0-2.4-.2-.8-.1-1.5-.3-2.2-.6-.7-.3-1.3-.6-1.9-.9-.6-.3-1-.7-1.4-1.1-.2-.2-.2-.3,0-.5l2.3-2.6c0-.2.3-.2.5,0,.7.5,1.5,1,2.4,1.5.9.4,1.9.6,3,.6s1.9-.2,2.5-.7.9-1,.9-1.8-.2-1.1-.7-1.5-1.3-.6-2.5-.8h-1.1c-2.1-.4-3.7-1.1-4.8-2-1.1-1-1.6-2.4-1.6-4.2s.2-1.8.5-2.6c.3-.8.8-1.4,1.4-2,.6-.5,1.4-1,2.3-1.3.9-.3,1.9-.5,3-.5s2.6.2,3.8.6,2.2.9,3.1,1.6c.2.1.2.3,0,.5l-1.8,2.7c0,.2-.3.2-.4,0-.8-.5-1.6-.9-2.3-1.2-.8-.3-1.6-.4-2.4-.4s-1.6.2-2,.6c-.5.4-.7,1-.7,1.6s.2,1.1.7,1.4c.5.4,1.3.7,2.5.8l1.1.2c2.1.3,3.7.9,4.8,1.9s1.6,2.4,1.6,4.3-.2,1.8-.5,2.6c-.3.8-.8,1.5-1.5,2-.7.6-1.5,1-2.5,1.3s-2.2.5-3.5.5l-.2.2h0ZM764.4,472.3c-.8,0-1.6,0-2.4-.2-.8-.1-1.5-.3-2.2-.6-.7-.3-1.3-.6-1.9-.9-.6-.3-1-.7-1.4-1.1-.2-.2-.2-.3,0-.5l2.3-2.6c0-.2.3-.2.5,0,.7.5,1.5,1,2.4,1.5.9.4,1.9.6,3,.6s1.9-.2,2.5-.7.9-1,.9-1.8-.2-1.1-.7-1.5-1.3-.6-2.5-.8h-1.1c-2.1-.4-3.7-1.1-4.8-2-1.1-1-1.7-2.4-1.7-4.2s.2-1.8.5-2.6c.3-.8.8-1.4,1.4-2,.6-.5,1.4-1,2.3-1.3.9-.3,1.9-.5,3-.5s2.6.2,3.8.6,2.2.9,3.1,1.6c.2.1.2.3,0,.5l-1.8,2.7c0,.2-.3.2-.4,0-.8-.5-1.6-.9-2.3-1.2-.8-.3-1.6-.4-2.4-.4s-1.6.2-2,.6c-.5.4-.7,1-.7,1.6s.2,1.1.7,1.4c.5.4,1.3.7,2.5.8l1.1.2c2.1.3,3.7.9,4.8,1.9s1.6,2.4,1.6,4.3-.2,1.8-.5,2.6c-.3.8-.8,1.5-1.5,2-.7.6-1.5,1-2.5,1.3s-2.2.5-3.5.5v.2h0ZM787.8,456.3h0l-3.2,2.2c-.2.1-.3,0-.3-.2v-3.7c0-.2,0-.3.2-.4l3.4-2.5c0-.1.3-.2.5-.2h3.4c.2,0,.3.1.3.3v19.8c0,.2,0,.3-.3.3h-3.6c-.2,0-.3-.1-.3-.3v-15.4h-.1Z" />
                        <g ref={setRef("alYass1", "icon")} className="st15">
                            <g>
                                <path className="st18" d="M580.8,477v-26.1h7.9v-9.9h26v9.9h7.9v26.1h5.1v3h-52v-3h5.1ZM614.7,477h4.9v-23.1h-4.9v23.1ZM597.8,477h7.7v-7.6h-7.7v7.6ZM591.8,450.9v26.1h3v-10.6h13.8v10.6h3v-33h-19.9v6.9h.1ZM583.8,477h4.9v-23.1h-4.9v23.1Z" />
                                <path className="st18" d="M603.7,460.1h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M603.7,447h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M594.8,447h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M603.7,453.5h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M594.8,460.1h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M594.8,453.5h4.9v3h-4.9v-3Z" />
                            </g>
                        </g>
                        <g>
                            <g className="st38">
                                <rect className="st20" x={1480} y="585.6" width="335.7" height="8.4" />
                            </g>
                            <g className="st38">
                                <rect className="st16" x="1698.1" y={513} width="176.6" height="8.4" />
                            </g>
                            <g ref={setRef("alMurjan", "square")}>
                                <rect className="st53" x="1554.7" y={518} width={305} height={73} />
                                <g className="st38">
                                    <rect className="st52" x={1480} y="585.6" width="335.7" height="8.4" />
                                </g>
                                <g className="st38">
                                    <rect className="st11" x="1698.1" y={513} width="176.6" height="8.4" />
                                </g>
                                <path className="st7" d="M1739.6,518h-184.3v71.9l-47.6,45.6v20.5" />
                                <circle className="st18" cx="1507.7" cy={659} r={8} />
                            </g>
                        </g>
                        <path ref={setRef("alMurjan", "text")} className="st18" d="M1666.4,544.9c0-.2.2-.3.4-.3h3.8c.2,0,.3,0,.4.3l6.9,19.8c0,.2,0,.3-.2.3h-3.9c-.2,0-.3,0-.4-.3l-1.2-3.6h-7.1l-1.1,3.6c0,.2-.2.3-.4.3h-3.9c-.2,0-.3,0-.2-.3l7-19.8h-.1ZM1671,557.4l-2.3-7.1h0l-2.3,7.1h4.7,0ZM1680.3,544.9c0-.2,0-.3.3-.3h3.8c.2,0,.3,0,.3.3v16s0,.2.2.2h9c.2,0,.3,0,.3.3v3.3c0,.2,0,.3-.3.3h-13.3c-.2,0-.3,0-.3-.3v-19.8ZM1703.8,544.9c0-.2,0-.3.3-.3h3.6c.2,0,.4,0,.5.3l5.2,11.6h0l5.1-11.6c0-.2.2-.3.5-.3h3.5c.2,0,.3,0,.3.3v19.8c0,.2,0,.3-.3.3h-3.4c-.2,0-.3,0-.3-.3v-11.5h0l-3.8,8.6c0,.3-.3.4-.6.4h-2.1c-.3,0-.5,0-.6-.4l-3.8-8.6h0v11.5c0,.2,0,.3-.3.3h-3.4c-.2,0-.3,0-.3-.3v-19.8h0ZM1734.5,565.3c-1.1,0-2.2-.2-3.1-.5-1-.3-1.8-.8-2.5-1.5s-1.2-1.5-1.6-2.5-.6-2.1-.6-3.4v-12.6c0-.2,0-.3.3-.3h3.8c.2,0,.3,0,.3.3v12.7c0,1.2.3,2.2.9,2.8s1.5,1,2.5,1,1.8-.3,2.5-1,.9-1.6.9-2.8v-12.7c0-.2,0-.3.3-.3h3.8c.2,0,.3,0,.3.3v12.6c0,1.3-.2,2.4-.6,3.4s-.9,1.8-1.6,2.5-1.5,1.2-2.5,1.5c-.9.3-2,.5-3.1.5h0ZM1757.3,565c-.2,0-.4,0-.4-.3l-3.5-7.5h-2.7s-.2,0-.2.2v7.3c0,.2,0,.3-.3.3h-3.8c-.2,0-.3,0-.3-.3v-19.8c0-.2,0-.3.3-.3h8.1c1,0,2,.2,2.8.5.9.3,1.6.7,2.2,1.3s1.1,1.2,1.4,2,.5,1.6.5,2.5c0,1.3-.3,2.5-1,3.5s-1.5,1.7-2.7,2.2l4,8v.3h-4.5,0ZM1754.2,553.5c.8,0,1.5-.2,2-.7s.8-1.1.8-1.9-.2-1.4-.8-1.8c-.5-.5-1.2-.7-2-.7h-3.6s-.2,0-.2.2v4.7s0,.2.2.2h3.6ZM1763.2,562.7v-.4l2.8-2.1h.4c.3.3.6.6,1,.8s.9.4,1.5.4c1,0,1.7-.3,2.2-.9.5-.6.8-1.5.8-2.6v-13c0-.2,0-.3.3-.3h3.8c.2,0,.3,0,.3.3v12.8c0,2.5-.7,4.4-2,5.7s-3.1,1.9-5.5,1.9-2.4-.2-3.5-.7c-1-.5-1.8-1.1-2.2-1.9h0ZM1784.9,544.9c0-.2.2-.3.4-.3h3.8c.2,0,.3,0,.4.3l6.9,19.8c0,.2,0,.3-.2.3h-3.9c-.2,0-.3,0-.4-.3l-1.2-3.6h-7.1l-1.1,3.6c0,.2-.2.3-.4.3h-3.9c-.2,0-.3,0-.2-.3l7-19.8h-.1ZM1789.5,557.4l-2.3-7.1h0l-2.3,7.1h4.7,0ZM1798.8,544.9c0-.2,0-.3.3-.3h3.6c.2,0,.4,0,.5.3l7.2,12.8h.2v-12.8c0-.2,0-.3.3-.3h3.4c.2,0,.3,0,.3.3v19.8c0,.2,0,.3-.3.3h-3.6c-.2,0-.4,0-.5-.3l-7.2-12.8h-.2v12.8c0,.2,0,.3-.3.3h-3.4c-.2,0-.3,0-.3-.3v-19.8Z" />
                        <g ref={setRef("alMurjan", "icon")} className="st24">
                            <g>
                                <path className="st18" d="M1578.8,570v-26.1h7.9v-9.9h26v9.9h7.9v26.1h5.1v3h-52v-3h5.1ZM1612.7,570h4.9v-23.1h-4.9v23.1ZM1595.8,570h7.7v-7.6h-7.7v7.6ZM1589.8,543.9v26.1h3.1v-10.6h13.8v10.6h3.1v-33h-19.9v6.9h0ZM1581.8,570h4.9v-23.1h-4.9v23.1Z" />
                                <path className="st18" d="M1601.7,553.1h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M1601.7,540h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M1592.8,540h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M1601.7,546.5h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M1592.8,553.1h4.9v3h-4.9v-3Z" />
                                <path className="st18" d="M1592.8,546.5h4.9v3h-4.9v-3Z" />
                            </g>
                        </g>
                        <g>
                            <rect className="st18" x={2401} y={211} width={113} height={113} />
                            <g>
                                <path className="st33" d="M2431.5,245.6h4.1v-12.2h-12.2v12.2h8.1,0Z" />
                                <path className="st33" d="M2423.4,253.7h20.2v-28.4h-28.3v28.4h8.1ZM2419.4,245.6v-16.2h20.2v20.3h-20.2v-4.1Z" />
                                <path className="st33" d="M2484.2,233.4h-4v12.2h12.1v-12.2h-8.1Z" />
                                <path className="st33" d="M2459.9,233.4v4.1h8.1v-8.1h-4.1v4.1h-4Z" />
                                <path className="st33" d="M2459.9,237.5h-4.1v-4.1h4.1v-4.1h4v-4h-8.1v4h-8.1v4.1h4.1v4.1h-4.1v8.1h4.1v-4.1h4.1v4.1h4.1v-8.1h-.1Z" />
                                <path className="st33" d="M2492.3,273.9h-4.1v-16.2h-4.1v4h-4.1v4.1h4.1v4.1h-4.1v-4.1h-8.1v8.1h4.1v8.1h4.1v-8.1h4.1v4h8.1v4.1h4.1v-4.1h4.1v-4h-8.2Z" />
                                <path className="st33" d="M2451.8,261.8h4.1v-8.1h12.1v-12.2h-4.1v4.1h-4v4.1h-8.1v4.1h-4.1v4.1h4.1v4h0Z" />
                                <path className="st33" d="M2451.8,265.8v8.1h-4.1v4h4.1v4.1h4.1v-4.1h4.1v-4h-4.1v-4.1h4.1v-4.1h-8.2Z" />
                                <path className="st33" d="M2455.8,290.1h4.1v-4.1h-12.2v4.1h4.1v4.1h-4.1v4.1h8.1v-8.1h0Z" />
                                <path className="st33" d="M2451.8,302.3h-4.1v4h4.1v-4Z" />
                                <path className="st33" d="M2455.8,306.3h-4.1v4.1h4.1v-4.1Z" />
                                <path className="st33" d="M2459.9,302.3v-4h-4.1v8.1h8.1v-4.1h-4Z" />
                                <path className="st33" d="M2468,306.3h-4.1v4.1h4.1v-4.1Z" />
                                <path className="st33" d="M2496.3,306.3h-4.1v4.1h8.1v-8.1h-4.1v4h.1Z" />
                                <path className="st33" d="M2500.4,282h-4.1v4h4.1v-4Z" />
                                <path className="st33" d="M2492.3,290.1v4.1h4.1v4.1h4.1v-8.1h-8.2Z" />
                                <path className="st33" d="M2492.3,286.1h-4.1v4.1h4.1v-4.1Z" />
                                <path className="st33" d="M2476.1,286.1v4.1h4.1v4.1h4.1v-12.2h-4.1v4h-4.1Z" />
                                <path className="st33" d="M2476.1,294.2h-4.1v4h4.1v-4Z" />
                                <path className="st33" d="M2480.1,298.2h-4.1v4.1h-8.1v4.1h8.1v4.1h12.2v-16.2h-4.1v4.1h-4.1v-.2h.1ZM2484.2,306.3h-4v-4h4v4Z" />
                                <path className="st33" d="M2468,265.8h4.1v-4.1h4.1v-4h-12.2v4h-4v4.1h4v8.1h4.1v-8.1h-.1Z" />
                                <path className="st33" d="M2463.9,282v8.1h8.1v-4.1h-4.1v-8.1h-4.1v4.1h.1Z" />
                                <path className="st33" d="M2472,273.9h-4.1v4.1h4.1v-4.1Z" />
                                <path className="st33" d="M2492.3,257.7v12.2h8.1v-4.1h-4.1v-4.1h4.1v-4h-8.1Z" />
                                <path className="st33" d="M2496.3,225.3h-24.3v28.4h28.4v-28.4h-4.1,0ZM2496.3,233.4v16.2h-20.3v-20.3h20.3v4.1Z" />
                                <path className="st33" d="M2419.4,257.7h-4.1v8.1h4.1v-8.1Z" />
                                <path className="st33" d="M2431.5,257.7h-4.1v4h-4.1v4.1h4.1v4.1h4.1v-8.1h4.1v-4h-4.1Z" />
                                <path className="st33" d="M2443.7,257.7h-4v4h8.1v-4h-4.1Z" />
                                <path className="st33" d="M2435.6,265.8v4.1h4.1v4h-4.1v4.1h8.1v-12.2h-4v-4.1h-4.1v4.1Z" />
                                <path className="st33" d="M2451.8,261.8h-4.1v4.1h4.1v-4.1Z" />
                                <path className="st33" d="M2415.3,273.9v4.1h16.2v-4.1h-12.1v-4.1h-4.1v4.1h0Z" />
                                <path className="st33" d="M2423.4,265.8h-4v4.1h4v-4.1Z" />
                                <path className="st33" d="M2468,298.2v-4h-8.1v4h8.1Z" />
                                <path className="st33" d="M2427.5,290.1h-4.1v12.2h12.2v-12.2h-8.1,0Z" />
                                <path className="st33" d="M2435.6,282h-20.2v28.4h28.3v-28.4h-8.1ZM2439.6,290.1v16.2h-20.2v-20.3h20.2v4.1h0Z" />
                            </g>
                            <path className="st18" d="M2379.5,352.6c0-.1,0-.2.2-.2h10c.1,0,.2,0,.2.2v2.5c0,.1,0,.2-.2.2h-6.7c0,0-.1,0-.1.1v3.1s0,.1.1.1h5.6c.1,0,.2,0,.2.2v2.4c0,.1,0,.2-.2.2h-5.6c0,0-.1,0-.1.1v3.2s0,.1.1.1h6.7c.1,0,.2,0,.2.2v2.5c0,.1,0,.2-.2.2h-10c-.1,0-.2,0-.2-.2v-15.2.3h0ZM2401,368c-.2,0-.3,0-.4-.2l-2.8-4.8h0l-2.8,4.8c0,.2-.2.2-.4.2h-3.4v-.2l4.7-7.8-4.3-7.3v-.2h3.4c.2,0,.3,0,.4.2l2.5,4.2h0l2.5-4.2c0-.2.2-.2.4-.2h3.3v.2l-4.4,7.3,4.7,7.8v.2h-3.4ZM2406.4,368c-.1,0-.2,0-.2-.2v-15.2c0-.1,0-.2.2-.2h6.1c.9,0,1.6.1,2.3.4.7.2,1.2.6,1.7,1s.8,1,1.1,1.6c.2.6.4,1.3.4,2s-.1,1.4-.4,2c-.2.6-.6,1.1-1.1,1.6-.5.4-1,.8-1.7,1s-1.4.4-2.3.4h-2.8s-.1,0-.1.1v5.2c0,.1,0,.2-.2.2h-3ZM2412.2,359.5c.7,0,1.3-.2,1.7-.6s.6-.9.6-1.5-.2-1.2-.6-1.5c-.4-.4-.9-.6-1.7-.6h-2.6s-.1,0-.1.1v3.9s0,.1.1.1h2.6ZM2420.1,352.6c0-.1,0-.2.2-.2h2.9c.1,0,.2,0,.2.2v12.3s0,.1.1.1h6.9c.1,0,.2,0,.2.2v2.6c0,.1,0,.2-.2.2h-10.2c-.1,0-.2,0-.2-.2v-15.2h.1ZM2438.4,368.3c-1.4,0-2.6-.3-3.6-.9s-1.7-1.6-2.1-2.9c0-.3-.2-.5-.2-.8s0-.6-.1-.9v-5.2c0-.3,0-.6.1-.9,0-.3.1-.5.2-.8.4-1.3,1.1-2.2,2.1-2.8,1-.6,2.2-1,3.6-1s2.6.3,3.6,1c1,.6,1.7,1.6,2.1,2.8,0,.3.2.5.2.8s.1.6.1.9v5.2c0,.3,0,.6-.1.9,0,.3-.1.5-.2.8-.4,1.3-1.1,2.2-2.1,2.9-1,.6-2.2.9-3.6.9ZM2438.4,365.3c.6,0,1.2-.2,1.6-.5.4-.3.7-.7.9-1.3,0-.1,0-.3.1-.5v-5.6c0-.2,0-.3-.1-.5-.2-.5-.5-1-.9-1.3s-.9-.5-1.6-.5-1.2.2-1.6.5c-.4.3-.7.7-.9,1.3,0,.1,0,.3-.1.5v5.6c0,.2,0,.3.1.5.2.5.5,1,.9,1.3s.9.5,1.6.5h0ZM2455.8,368c-.2,0-.3,0-.3-.2l-2.7-5.7h-2.1s-.1,0-.1.1v5.6c0,.1,0,.2-.2.2h-2.9c-.1,0-.2,0-.2-.2v-15.2c0-.1,0-.2.2-.2h6.2c.8,0,1.5.1,2.2.4.7.2,1.2.6,1.7,1s.8.9,1.1,1.5.4,1.2.4,2-.2,1.9-.7,2.6-1.2,1.3-2,1.7l3.1,6.2v.2h-3.7ZM2453.4,359.2c.7,0,1.2-.2,1.5-.5.4-.4.6-.8.6-1.4s-.2-1.1-.6-1.4c-.4-.4-.9-.5-1.5-.5h-2.8s-.1,0-.1.1v3.6s0,.1.1.1h2.8ZM2461.5,352.6c0-.1,0-.2.2-.2h10c.1,0,.2,0,.2.2v2.5c0,.1,0,.2-.2.2h-6.7c0,0-.1,0-.1.1v3.1s0,.1.1.1h5.6c.1,0,.2,0,.2.2v2.4c0,.1,0,.2-.2.2h-5.6c0,0-.1,0-.1.1v3.2s0,.1.1.1h6.7c.1,0,.2,0,.2.2v2.5c0,.1,0,.2-.2.2h-10c-.1,0-.2,0-.2-.2v-15.2.3h0ZM2480,352.6c0-.1,0-.2.2-.2h2.7c.2,0,.3,0,.4.2l4,8.9h0l3.9-8.9c0-.2.2-.2.4-.2h2.7c.1,0,.2,0,.2.2v15.2c0,.1,0,.2-.2.2h-2.6c-.1,0-.2,0-.2-.2v-8.8h0l-2.9,6.6c0,.2-.2.3-.4.3h-1.6c-.2,0-.3-.1-.4-.3l-2.9-6.6h0v8.8c0,.1,0,.2-.2.2h-2.6c-.1,0-.2,0-.2-.2v-15.2h-.3,0ZM2503.2,368.3c-1.4,0-2.6-.3-3.6-.9s-1.7-1.6-2.1-2.9c0-.3-.2-.5-.2-.8s0-.6-.1-.9v-5.2c0-.3,0-.6.1-.9,0-.3.1-.5.2-.8.4-1.3,1.1-2.2,2.1-2.8,1-.6,2.2-1,3.6-1s2.6.3,3.6,1c1,.6,1.7,1.6,2.1,2.8,0,.3.2.5.2.8s.1.6.1.9v5.2c0,.3,0,.6-.1.9,0,.3-.1.5-.2.8-.4,1.3-1.1,2.2-2.1,2.9-1,.6-2.2.9-3.6.9ZM2503.2,365.3c.6,0,1.2-.2,1.6-.5.4-.3.7-.7.9-1.3,0-.1,0-.3.1-.5v-5.6c0-.2,0-.3-.1-.5-.2-.5-.5-1-.9-1.3s-.9-.5-1.6-.5-1.2.2-1.6.5c-.4.3-.7.7-.9,1.3,0,.1,0,.3-.1.5v5.6c0,.2,0,.3.1.5.2.5.5,1,.9,1.3s.9.5,1.6.5h0ZM2520.6,368c-.2,0-.3,0-.4-.2l-2.7-5.7h-2.1s-.1,0-.1.1v5.6c0,.1,0,.2-.2.2h-2.9c-.1,0-.2,0-.2-.2v-15.2c0-.1,0-.2.2-.2h6.2c.8,0,1.5.1,2.2.4.7.2,1.2.6,1.7,1s.8.9,1.1,1.5.4,1.2.4,2-.2,1.9-.7,2.6-1.2,1.3-2.1,1.7l3.1,6.2v.2h-3.5ZM2518.2,359.2c.6,0,1.2-.2,1.5-.5.4-.4.6-.8.6-1.4s-.2-1.1-.6-1.4c-.4-.4-.9-.5-1.5-.5h-2.8s-.1,0-.1.1v3.6s0,.1.1.1h2.8ZM2526.3,352.6c0-.1,0-.2.2-.2h10c.1,0,.2,0,.2.2v2.5c0,.1,0,.2-.2.2h-6.7s-.1,0-.1.1v3.1s0,.1.1.1h5.6c.1,0,.2,0,.2.2v2.4c0,.1,0,.2-.2.2h-5.6s-.1,0-.1.1v3.2s0,.1.1.1h6.7c.1,0,.2,0,.2.2v2.5c0,.1,0,.2-.2.2h-10c-.1,0-.2,0-.2-.2v-15.2.3h0Z" />
                        </g>
                    </g>
                </g>
            </svg>

        </div>
    )
}
