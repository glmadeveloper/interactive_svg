import { ICAD } from "../constants/Icad";
import { icad_icad_image, razeen_bar_image } from "../exports/images";
import { useBuildingActions } from "../hooks/useBuildingActions"
import type { CommunityKey } from "../types/communities";

export default function Icad({ onSelectBuilding, onBackToHome }: SVGPageProps) {
    const { setRef } = useBuildingActions({
        onSelectBuilding: (key: CommunityKey) => {
            onSelectBuilding(key);
        },
        onBackToHome: () => {
            onBackToHome();
        },
        data: ICAD.data,
        communityUrl: ICAD.communityLogoUrl
    })
    return (
        <div>
            <>
                {/*?xml version="1.0" encoding="UTF-8"?*/}
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 4096 2457">
                    {/* Generator: Adobe Illustrator 30.3.0, SVG Export Plug-In . SVG Version: 2.1.3 Build 182)  */}
                    <defs>
                        <style dangerouslySetInnerHTML={{ __html: "\n      .st0 {\n        fill: url(#radial-gradient53);\n      }\n\n      .st1 {\n        clip-path: url(#clippath-6);\n      }\n\n      .st2 {\n        clip-path: url(#clippath-7);\n      }\n\n      .st3 {\n        fill: url(#radial-gradient20);\n      }\n\n      .st4 {\n        fill: url(#radial-gradient30);\n      }\n\n      .st5 {\n        fill: url(#radial-gradient28);\n      }\n\n      .st6 {\n        clip-path: url(#clippath-4);\n      }\n\n      .st7 {\n        stroke-width: 3px;\n      }\n\n      .st7, .st8 {\n        stroke: #fff;\n      }\n\n      .st7, .st9 {\n        fill: none;\n      }\n\n      .st10 {\n        fill: url(#radial-gradient45);\n      }\n\n      .st11 {\n        fill: url(#radial-gradient39);\n      }\n\n      .st12 {\n        fill: url(#radial-gradient48);\n      }\n\n      .st13 {\n        clip-path: url(#clippath-9);\n      }\n\n      .st14 {\n        clip-path: url(#clippath-10);\n      }\n\n      .st15 {\n        fill: url(#radial-gradient55);\n      }\n\n      .st16 {\n        fill: url(#radial-gradient10);\n      }\n\n      .st17, .st8 {\n        fill: #fff;\n      }\n\n      .st18 {\n        fill: url(#radial-gradient41);\n      }\n\n      .st19 {\n        fill: url(#radial-gradient54);\n      }\n\n      .st20 {\n        fill: url(#radial-gradient24);\n      }\n\n      .st21 {\n        fill: url(#radial-gradient11);\n      }\n\n      .st8 {\n        stroke-width: .1px;\n      }\n\n      .st22 {\n        fill: url(#radial-gradient49);\n      }\n\n      .st23 {\n        clip-path: url(#clippath-11);\n      }\n\n      .st24 {\n        fill: url(#radial-gradient46);\n      }\n\n      .st25 {\n        fill: url(#radial-gradient34);\n      }\n\n      .st26 {\n        fill: url(#radial-gradient);\n      }\n\n      .st27 {\n        fill: url(#radial-gradient21);\n      }\n\n      .st28 {\n        fill: url(#radial-gradient52);\n      }\n\n      .st29 {\n        fill: url(#radial-gradient19);\n      }\n\n      .st30 {\n        fill: url(#radial-gradient22);\n      }\n\n      .st31 {\n        fill: url(#radial-gradient5);\n      }\n\n      .st32 {\n        fill: url(#radial-gradient1);\n      }\n\n      .st33 {\n        clip-path: url(#clippath-1);\n      }\n\n      .st34 {\n        fill: #231f20;\n      }\n\n      .st35 {\n        fill: url(#radial-gradient42);\n      }\n\n      .st36 {\n        isolation: isolate;\n      }\n\n      .st37 {\n        fill: url(#radial-gradient33);\n      }\n\n      .st38 {\n        clip-path: url(#clippath-5);\n      }\n\n      .st39 {\n        fill: url(#radial-gradient47);\n      }\n\n      .st40 {\n        fill: url(#radial-gradient38);\n      }\n\n      .st41 {\n        fill: url(#radial-gradient31);\n      }\n\n      .st42 {\n        clip-path: url(#clippath-8);\n      }\n\n      .st43 {\n        fill: url(#radial-gradient35);\n      }\n\n      .st44 {\n        fill: url(#radial-gradient26);\n      }\n\n      .st45 {\n        fill: url(#radial-gradient7);\n      }\n\n      .st46 {\n        fill: url(#radial-gradient37);\n      }\n\n      .st47 {\n        fill: url(#radial-gradient18);\n      }\n\n      .st48 {\n        clip-path: url(#clippath-3);\n      }\n\n      .st49 {\n        fill: url(#radial-gradient14);\n      }\n\n      .st50 {\n        fill: url(#radial-gradient13);\n      }\n\n      .st51 {\n        fill: url(#radial-gradient56);\n      }\n\n      .st51, .st52 {\n        fill-opacity: .5;\n      }\n\n      .st53, .st54 {\n        mix-blend-mode: screen;\n      }\n\n      .st55 {\n        fill: url(#radial-gradient32);\n      }\n\n      .st56 {\n        fill: url(#radial-gradient27);\n      }\n\n      .st57 {\n        fill: url(#radial-gradient8);\n      }\n\n      .st58 {\n        fill: url(#radial-gradient12);\n      }\n\n      .st59 {\n        fill: url(#radial-gradient43);\n      }\n\n      .st60 {\n        fill: url(#radial-gradient25);\n      }\n\n      .st61 {\n        fill: url(#radial-gradient23);\n      }\n\n      .st62 {\n        fill: url(#radial-gradient17);\n      }\n\n      .st63 {\n        fill: url(#radial-gradient6);\n      }\n\n      .st64 {\n        fill: url(#radial-gradient2);\n      }\n\n      .st65 {\n        fill: url(#radial-gradient40);\n      }\n\n      .st66 {\n        fill: url(#radial-gradient50);\n      }\n\n      .st67 {\n        fill-opacity: .78;\n      }\n\n      .st67, .st68 {\n        fill: #910811;\n      }\n\n      .st54 {\n        opacity: .05;\n      }\n\n      .st69 {\n        fill: url(#radial-gradient15);\n      }\n\n      .st70 {\n        fill: url(#radial-gradient44);\n      }\n\n      .st71 {\n        clip-path: url(#clippath-2);\n      }\n\n      .st72 {\n        fill: url(#radial-gradient4);\n      }\n\n      .st73 {\n        fill: url(#radial-gradient3);\n      }\n\n      .st74 {\n        fill: url(#radial-gradient29);\n      }\n\n      .st52 {\n        fill: url(#radial-gradient57);\n      }\n\n      .st75 {\n        fill: url(#radial-gradient9);\n      }\n\n      .st76 {\n        fill: url(#radial-gradient51);\n      }\n\n      .st77 {\n        clip-path: url(#clippath);\n      }\n\n      .st78 {\n        fill: url(#radial-gradient36);\n      }\n\n      .st79 {\n        fill: url(#radial-gradient16);\n      }\n    " }} />
                        <clipPath id="clippath">
                            <rect className="st9" x={99} y={82} width={635} height={246} />
                        </clipPath>
                        <radialGradient id="radial-gradient" cx="1103.49" cy="986.66" fx="1103.49" fy="986.66" r={1} gradientTransform="translate(163457.42 -3821.59) rotate(179.8) scale(146.55 -3.67)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient1" cx="1103.49" cy="986.66" fx="1103.49" fy="986.66" r={1} gradientTransform="translate(163457.42 -3821.59) rotate(179.8) scale(146.55 -3.67)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient2" cx="1110.24" cy="985.78" fx="1110.24" fy="985.78" r={1} gradientTransform="translate(87178.69 -3920.79) rotate(179.63) scale(77.11 -3.67) skewX(.01)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient3" cx="1110.24" cy="985.78" fx="1110.24" fy="985.78" r={1} gradientTransform="translate(87178.69 -3920.79) rotate(179.63) scale(77.11 -3.67) skewX(.01)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <clipPath id="clippath-1">
                            <rect className="st9" x="1778.27" y="271.45" width="80.36" height="60.27" />
                        </clipPath>
                        <radialGradient id="radial-gradient4" cx="1103.47" cy="691.26" fx="1103.47" fy="691.26" r={1} gradientTransform="translate(164675.41 4682.31) rotate(-179.8) scale(146.55 3.67)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient5" cx="1103.47" cy="691.26" fx="1103.47" fy="691.26" r={1} gradientTransform="translate(164675.41 4682.31) rotate(-179.8) scale(146.55 3.67)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient6" cx="1110.19" cy="690.37" fx="1110.19" fy="690.37" r={1} gradientTransform="translate(88335.69 4781.52) rotate(-179.63) scale(77.11 3.67) skewX(.01)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient7" cx="1110.19" cy="690.37" fx="1110.19" fy="690.37" r={1} gradientTransform="translate(88335.69 4781.52) rotate(-179.63) scale(77.11 3.67) skewX(.01)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <clipPath id="clippath-2">
                            <rect className="st9" x="2996.27" y={1613} width="80.36" height="60.27" />
                        </clipPath>
                        <radialGradient id="radial-gradient8" cx="1105.76" cy="1030.84" fx="1105.76" fy="1030.84" r={1} gradientTransform="translate(126027.67 -2701.86) rotate(179.8) scale(112.51 -2.82)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient9" cx="1105.76" cy="1030.84" fx="1105.76" fy="1030.84" r={1} gradientTransform="translate(126027.67 -2701.86) rotate(179.8) scale(112.51 -2.82)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient10" cx="1114.54" cy="1029.67" fx="1114.54" fy="1029.67" r={1} gradientTransform="translate(67476.57 -2778.09) rotate(179.63) scale(59.21 -2.82)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient11" cx="1114.54" cy="1029.67" fx="1114.54" fy="1029.67" r={1} gradientTransform="translate(67476.57 -2778.09) rotate(179.63) scale(59.21 -2.82)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient12" cx="1103.47" cy="986.27" fx="1103.47" fy="986.27" r={1} gradientTransform="translate(162688.54 -3539.11) rotate(179.8) scale(146.97 -3.68)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient13" cx="1103.47" cy="986.27" fx="1103.47" fy="986.27" r={1} gradientTransform="translate(162688.54 -3539.11) rotate(179.8) scale(146.97 -3.68)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient14" cx="1110.19" cy="985.38" fx="1110.19" fy="985.38" r={1} gradientTransform="translate(86147.15 -3638.65) rotate(179.63) scale(77.34 -3.68)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient15" cx="1110.19" cy="985.38" fx="1110.19" fy="985.38" r={1} gradientTransform="translate(86147.15 -3638.65) rotate(179.63) scale(77.34 -3.68)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <clipPath id="clippath-3">
                            <rect className="st9" x="548.93" y="562.35" width="80.59" height="60.45" />
                        </clipPath>
                        <radialGradient id="radial-gradient16" cx="1105.05" cy="1017.02" fx="1105.05" fy="1017.02" r={1} gradientTransform="translate(135268.69 -2758.47) rotate(179.8) scale(121.3 -3.04)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient17" cx="1105.05" cy="1017.02" fx="1105.05" fy="1017.02" r={1} gradientTransform="translate(135268.69 -2758.47) rotate(179.8) scale(121.3 -3.04)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient18" cx="1113.2" cy="1015.94" fx="1113.2" fy="1015.94" r={1} gradientTransform="translate(72137.88 -2840.62) rotate(179.63) scale(63.83 -3.04) skewX(.01)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient19" cx="1113.2" cy="1015.94" fx="1113.2" fy="1015.94" r={1} gradientTransform="translate(72137.88 -2840.62) rotate(179.63) scale(63.83 -3.04) skewX(.01)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient20" cx="1086.39" cy="1031.59" fx="1086.39" fy="1031.59" r={1} gradientTransform="translate(-121643.25 -2637.43) rotate(.2) scale(113.91 2.85)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient21" cx="1086.39" cy="1031.59" fx="1086.39" fy="1031.59" r={1} gradientTransform="translate(-121643.25 -2637.43) rotate(.2) scale(113.91 2.85)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient22" cx="1077.74" cy="1032.73" fx="1077.74" fy="1032.73" r={1} gradientTransform="translate(-62320.92 -2714.57) rotate(.37) scale(59.94 2.85)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient23" cx="1077.74" cy="1032.73" fx="1077.74" fy="1032.73" r={1} gradientTransform="translate(-62320.92 -2714.57) rotate(.37) scale(59.94 2.85)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient24" cx="1103.43" cy="692.08" fx="1103.43" fy="692.08" r={1} gradientTransform="translate(165223.9 3924.73) rotate(-179.8) scale(147.27 3.69)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient25" cx="1103.43" cy="692.08" fx="1103.43" fy="692.08" r={1} gradientTransform="translate(165223.9 3924.73) rotate(-179.8) scale(147.27 3.69)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient26" cx="1110.13" cy="691.2" fx="1110.13" fy="691.2" r={1} gradientTransform="translate(88518.67 4024.44) rotate(-179.63) scale(77.49 3.69) skewX(.01)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient27" cx="1110.13" cy="691.2" fx="1110.13" fy="691.2" r={1} gradientTransform="translate(88518.67 4024.44) rotate(-179.63) scale(77.49 3.69) skewX(.01)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <clipPath id="clippath-4">
                            <rect className="st9" x={2753} y={830} width="80.76" height="60.57" />
                        </clipPath>
                        <radialGradient id="radial-gradient28" cx="1088.55" cy="694.15" fx="1088.55" fy="694.15" r={1} gradientTransform="translate(-157738.9 4281.19) rotate(-.2) scale(147.27 -3.69)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient29" cx="1088.55" cy="694.15" fx="1088.55" fy="694.15" r={1} gradientTransform="translate(-157738.9 4281.19) rotate(-.2) scale(147.27 -3.69)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient30" cx="1081.83" cy="695.04" fx="1081.83" fy="695.04" r={1} gradientTransform="translate(-81033.67 4380.88) rotate(-.37) scale(77.49 -3.69)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient31" cx="1081.83" cy="695.04" fx="1081.83" fy="695.04" r={1} gradientTransform="translate(-81033.67 4380.88) rotate(-.37) scale(77.49 -3.69)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <clipPath id="clippath-5">
                            <rect className="st9" x="2459.24" y="1186.44" width="80.76" height="60.57" />
                        </clipPath>
                        <radialGradient id="radial-gradient32" cx="1103.45" cy="985.85" fx="1103.45" fy="985.85" r={1} gradientTransform="translate(164012.9 -2512) rotate(179.8) scale(147.27 -3.69)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient33" cx="1103.45" cy="985.85" fx="1103.45" fy="985.85" r={1} gradientTransform="translate(164012.9 -2512) rotate(179.8) scale(147.27 -3.69)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient34" cx="1110.17" cy="984.96" fx="1110.17" fy="984.96" r={1} gradientTransform="translate(87307.67 -2611.71) rotate(179.63) scale(77.49 -3.69) skewX(.01)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient35" cx="1110.17" cy="984.96" fx="1110.17" fy="984.96" r={1} gradientTransform="translate(87307.67 -2611.71) rotate(179.63) scale(77.49 -3.69) skewX(.01)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <clipPath id="clippath-6">
                            <rect className="st9" x={1545} y="1606.16" width="80.76" height="60.57" />
                        </clipPath>
                        <radialGradient id="radial-gradient36" cx="1088.55" cy="694.15" fx="1088.55" fy="694.15" r={1} gradientTransform="translate(-159858.9 4419.19) rotate(-.2) scale(147.27 -3.69)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient37" cx="1088.55" cy="694.15" fx="1088.55" fy="694.15" r={1} gradientTransform="translate(-159858.9 4419.19) rotate(-.2) scale(147.27 -3.69)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient38" cx="1081.83" cy="695.04" fx="1081.83" fy="695.04" r={1} gradientTransform="translate(-83153.67 4518.88) rotate(-.37) scale(77.49 -3.69)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient39" cx="1081.83" cy="695.04" fx="1081.83" fy="695.04" r={1} gradientTransform="translate(-83153.67 4518.88) rotate(-.37) scale(77.49 -3.69)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <clipPath id="clippath-7">
                            <rect className="st9" x="339.24" y="1324.44" width="80.76" height="60.57" />
                        </clipPath>
                        <radialGradient id="radial-gradient40" cx="1088.55" cy="694.15" fx="1088.55" fy="694.15" r={1} gradientTransform="translate(-159987.9 4109.19) rotate(-.2) scale(147.27 -3.69)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient41" cx="1088.55" cy="694.15" fx="1088.55" fy="694.15" r={1} gradientTransform="translate(-159987.9 4109.19) rotate(-.2) scale(147.27 -3.69)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient42" cx="1081.83" cy="695.04" fx="1081.83" fy="695.04" r={1} gradientTransform="translate(-83282.67 4208.88) rotate(-.37) scale(77.49 -3.69)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient43" cx="1081.83" cy="695.04" fx="1081.83" fy="695.04" r={1} gradientTransform="translate(-83282.67 4208.88) rotate(-.37) scale(77.49 -3.69)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <clipPath id="clippath-8">
                            <rect className="st9" x="210.24" y="1014.44" width="80.76" height="60.57" />
                        </clipPath>
                        <radialGradient id="radial-gradient44" cx="1088.55" cy="694.15" fx="1088.55" fy="694.15" r={1} gradientTransform="translate(-158521.9 4377.19) rotate(-.2) scale(147.27 -3.69)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient45" cx="1088.55" cy="694.15" fx="1088.55" fy="694.15" r={1} gradientTransform="translate(-158521.9 4377.19) rotate(-.2) scale(147.27 -3.69)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient46" cx="1081.83" cy="695.04" fx="1081.83" fy="695.04" r={1} gradientTransform="translate(-81816.67 4476.88) rotate(-.37) scale(77.49 -3.69)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient47" cx="1078.02" cy="694.75" fx="1078.02" fy="694.75" r={1} gradientTransform="translate(-63783.23 4455.32) rotate(-.47) scale(61.01 -3.67) skewX(.02)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <clipPath id="clippath-9">
                            <rect className="st9" x="1676.24" y="1282.44" width="80.76" height="60.57" />
                        </clipPath>
                        <radialGradient id="radial-gradient48" cx="1088.55" cy="694.15" fx="1088.55" fy="694.15" r={1} gradientTransform="translate(-159288.9 4103.19) rotate(-.2) scale(147.27 -3.69)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient49" cx="1088.55" cy="694.15" fx="1088.55" fy="694.15" r={1} gradientTransform="translate(-159288.9 4103.19) rotate(-.2) scale(147.27 -3.69)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient50" cx="1081.83" cy="695.04" fx="1081.83" fy="695.04" r={1} gradientTransform="translate(-82583.67 4202.88) rotate(-.37) scale(77.49 -3.69)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient51" cx="1078.89" cy="694.64" fx="1078.89" fy="694.64" r={1} gradientTransform="translate(-67961.29 4184.38) rotate(-.45) scale(64.12 -3.67) skewX(.02)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <clipPath id="clippath-10">
                            <rect className="st9" x="909.24" y="1008.44" width="80.76" height="60.57" />
                        </clipPath>
                        <radialGradient id="radial-gradient52" cx="1103.43" cy="692.08" fx="1103.43" fy="692.08" r={1} gradientTransform="translate(165694.89 4069.18) rotate(-179.8) scale(147.27 3.69)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient53" cx="1103.43" cy="692.08" fx="1103.43" fy="692.08" r={1} gradientTransform="translate(165694.89 4069.18) rotate(-179.8) scale(147.27 3.69)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient54" cx="1110.13" cy="691.2" fx="1110.13" fy="691.2" r={1} gradientTransform="translate(88989.67 4168.88) rotate(-179.63) scale(77.49 3.69) skewX(.01)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient55" cx="1110.13" cy="691.2" fx="1110.13" fy="691.2" r={1} gradientTransform="translate(88989.67 4168.88) rotate(-179.63) scale(77.49 3.69) skewX(.01)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ffa90a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <clipPath id="clippath-11">
                            <rect className="st9" x={3224} y="974.44" width="80.76" height="60.57" />
                        </clipPath>
                        <radialGradient id="radial-gradient56" cx="1094.58" cy="597.71" fx="1094.58" fy="597.71" r={1} gradientTransform="translate(157.77 423344.48) rotate(-89.91) scale(385.56 4.52)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ff120a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                        <radialGradient id="radial-gradient57" cx="1094.58" cy="597.71" fx="1094.58" fy="597.71" r={1} gradientTransform="translate(157.77 423343.48) rotate(-89.91) scale(385.56 4.52)" gradientUnits="userSpaceOnUse">
                            <stop offset={0} stopColor="#ff120a" />
                            <stop offset={1} stopColor="#ffe96c" stopOpacity={0} />
                        </radialGradient>
                    </defs>
                    <g className="st36">
                        <g id="Layer_11" data-name="Layer_1">
                            <rect className="st17" width={4096} height={2457} />
                            <rect className="st9" width={3525} height={2457} />
                            <image width={3525} height={2457} xlinkHref={icad_icad_image} />
                            <g>
                                <rect className="st68" x={3525} width={571} height={2457} />
                                <rect className="st9" x={3064} width={1382} height={2457} />
                                <g className="st54">
                                    <rect className="st9" x={3230} y={-53} width={1274} height={2510} />
                                </g>
                            </g>
                            <image width={571} height={2457} transform="translate(3525)" xlinkHref={razeen_bar_image} />
                            <g>
                                <path className="st17" d="M3754.67,968.55c.07-.23.22-.35.45-.35h4.41c.24,0,.39.12.46.35l8.05,23.1c.07.23-.01.35-.25.35h-4.55c-.23,0-.38-.12-.45-.35l-1.37-4.17h-8.33l-1.33,4.17c-.07.23-.22.35-.45.35h-4.59c-.23,0-.31-.12-.24-.35l8.19-23.1h0ZM3760.02,983.11l-2.69-8.33h-.11l-2.69,8.33h5.49ZM3770.79,968.55c0-.23.11-.35.35-.35h9.27c2.59,0,4.5.58,5.74,1.75s1.86,2.7,1.86,4.58c0,1.31-.27,2.37-.81,3.18-.51.82-1.17,1.45-1.96,1.89v.07c.4.14.78.37,1.16.7.39.3.73.69,1.01,1.15.3.47.55,1,.74,1.61.18.58.28,1.22.28,1.92,0,2.36-.74,4.11-2.21,5.25-1.45,1.12-3.46,1.68-6.05,1.68h-9.03c-.24,0-.35-.12-.35-.35v-23.1.02ZM3779.78,977.93c.98,0,1.74-.24,2.28-.73.56-.49.84-1.18.84-2.07s-.28-1.56-.84-2.03c-.54-.49-1.3-.73-2.28-.73h-3.64c-.14,0-.21.07-.21.21v5.14c0,.14.07.21.21.21h3.64ZM3775.93,987.62c0,.14.07.21.21.21h3.92c1.05,0,1.84-.26,2.38-.77.56-.54.84-1.27.84-2.21s-.28-1.63-.84-2.17c-.54-.54-1.33-.8-2.38-.8h-3.92c-.14,0-.21.07-.21.21v5.53h0ZM3800.86,992.39c-2.07,0-3.89-.48-5.46-1.43-1.54-.96-2.61-2.4-3.22-4.34-.14-.42-.25-.83-.35-1.22-.07-.4-.12-.84-.17-1.33-.05-.49-.08-1.05-.11-1.68-.02-.63-.03-1.39-.03-2.28s.01-1.64.03-2.27c.03-.63.06-1.19.11-1.68s.1-.93.17-1.33c.1-.4.21-.8.35-1.22.61-1.91,1.68-3.35,3.22-4.31,1.57-.98,3.39-1.47,5.46-1.47s3.89.49,5.43,1.47c1.56.96,2.65,2.39,3.25,4.31.14.42.25.83.32,1.22.09.4.16.84.21,1.33s.08,1.05.1,1.68c.03.63.04,1.39.04,2.27s-.01,1.65-.04,2.28c-.02.63-.05,1.19-.1,1.68s-.12.93-.21,1.33c-.07.4-.18.8-.32,1.22-.6,1.94-1.69,3.38-3.25,4.34-1.54.96-3.35,1.43-5.43,1.43ZM3800.86,987.84c.98,0,1.79-.23,2.42-.7.63-.47,1.07-1.11,1.33-1.92.07-.21.13-.44.17-.7.05-.28.09-.61.11-.98.05-.4.07-.88.07-1.44.02-.56.03-1.22.03-1.99s-.01-1.43-.03-1.99c0-.56-.02-1.03-.07-1.4-.02-.4-.06-.72-.11-.98-.04-.28-.1-.52-.17-.73-.26-.82-.7-1.46-1.33-1.92-.63-.47-1.44-.7-2.42-.7s-1.78.23-2.41.7c-.63.47-1.07,1.11-1.33,1.92-.07.21-.13.46-.18.73-.04.26-.09.58-.14.98-.02.37-.04.84-.07,1.4v3.99c.03.56.05,1.04.07,1.44.05.37.1.7.14.98.05.26.11.49.18.7.26.82.7,1.46,1.33,1.92.63.47,1.43.7,2.41.7h0ZM3823.16,992.39c-1.33,0-2.56-.2-3.68-.6-1.12-.4-2.09-.98-2.9-1.75-.8-.77-1.43-1.73-1.89-2.87-.45-1.14-.67-2.45-.67-3.92v-14.7c0-.23.12-.35.35-.35h4.45c.23,0,.35.12.35.35v14.84c0,1.42.36,2.52,1.08,3.29s1.69,1.16,2.91,1.16,2.14-.39,2.87-1.16c.72-.77,1.08-1.87,1.08-3.29v-14.84c0-.23.12-.35.35-.35h4.45c.23,0,.35.12.35.35v14.7c0,1.47-.24,2.78-.7,3.92-.45,1.14-1.08,2.1-1.89,2.87-.8.77-1.75,1.35-2.87,1.75-1.1.4-2.31.6-3.64.6h0ZM3841.94,992c-.24,0-.35-.12-.35-.35v-18.66c0-.14-.07-.21-.21-.21h-6.02c-.24,0-.35-.12-.35-.35v-3.89c0-.23.11-.35.35-.35h17.6c.23,0,.35.12.35.35v3.89c0,.23-.12.35-.35.35h-6.02c-.14,0-.21.07-.21.21v18.66c0,.23-.12.35-.35.35h-4.44ZM3715.94,1003.55c.07-.23.22-.35.46-.35h4.41c.23,0,.38.12.45.35l8.05,23.1c.07.23-.01.35-.24.35h-4.55c-.24,0-.39-.12-.46-.35l-1.36-4.17h-8.33l-1.33,4.17c-.07.23-.23.35-.46.35h-4.58c-.24,0-.32-.12-.25-.35l8.19-23.1h0ZM3721.3,1018.11l-2.7-8.33h-.1l-2.7,8.33h5.5ZM3745.22,1027c-.26,0-.43-.12-.52-.35l-4.1-8.72h-3.18c-.14,0-.21.07-.21.21v8.51c0,.23-.12.35-.35.35h-4.45c-.23,0-.35-.12-.35-.35v-23.1c0-.23.12-.35.35-.35h9.49c1.21,0,2.31.19,3.29.56,1,.35,1.85.85,2.55,1.5.72.66,1.27,1.44,1.65,2.35.39.91.59,1.9.59,2.97,0,1.54-.37,2.89-1.12,4.03s-1.78,2.01-3.11,2.59l4.69,9.38c.04.12.04.22,0,.31-.05.07-.13.11-.25.11h-4.97,0ZM3741.62,1013.56c.98,0,1.76-.27,2.34-.81.58-.53.88-1.26.88-2.17s-.3-1.59-.88-2.13c-.58-.54-1.36-.81-2.34-.81h-4.2c-.14,0-.21.07-.21.21v5.5c0,.14.07.21.21.21h4.2ZM3758.4,1027c-.23,0-.35-.12-.35-.35v-9.14l-7.03-13.96c-.09-.23-.01-.35.24-.35h4.55c.26,0,.44.12.53.35l4.3,8.68h.11l4.3-8.68c.1-.23.27-.35.53-.35h4.41c.12,0,.2.03.24.1.05.07.05.16,0,.25l-7.03,13.96v9.14c0,.23-.12.35-.35.35h-4.45ZM3777.29,1003.55c.07-.23.23-.35.46-.35h4.41c.23,0,.38.12.45.35l8.05,23.1c.07.23-.01.35-.24.35h-4.55c-.23,0-.39-.12-.46-.35l-1.36-4.17h-8.33l-1.33,4.17c-.07.23-.22.35-.46.35h-4.58c-.23,0-.32-.12-.25-.35l8.19-23.1h0ZM3782.65,1018.11l-2.7-8.33h-.1l-2.7,8.33h5.5ZM3793.41,1003.55c0-.23.12-.35.35-.35h4.17c.28,0,.47.12.56.35l6.02,13.58h.14l5.91-13.58c.1-.23.28-.35.56-.35h4.1c.23,0,.35.12.35.35v23.1c0,.23-.12.35-.35.35h-3.96c-.23,0-.35-.12-.35-.35v-13.41h-.14l-4.41,10.05c-.14.3-.36.45-.66.45h-2.42c-.3,0-.52-.15-.66-.45l-4.41-10.05h-.14v13.41c0,.23-.12.35-.35.35h-3.96c-.23,0-.35-.12-.35-.35v-23.1h0ZM3828.38,1003.55c0-.23.12-.35.35-.35h4.44c.24,0,.35.12.35.35v23.1c0,.23-.11.35-.35.35h-4.44c-.23,0-.35-.12-.35-.35v-23.1h0ZM3838.12,1021.54c-.14-.37-.26-.75-.35-1.12-.07-.4-.13-.83-.17-1.3-.05-.49-.09-1.05-.11-1.68-.02-.65-.03-1.43-.03-2.34s.01-1.68.03-2.31c.02-.65.06-1.21.11-1.68.04-.49.1-.92.17-1.3.09-.37.21-.75.35-1.15.63-1.96,1.67-3.42,3.12-4.38,1.47-.98,3.25-1.47,5.35-1.47s3.75.47,5.15,1.4c1.42.91,2.47,2.21,3.15,3.89.11.21.05.35-.18.42l-3.81,1.71c-.21.12-.38.06-.49-.17-.33-.77-.8-1.41-1.4-1.93-.59-.51-1.38-.77-2.38-.77-.94,0-1.71.24-2.31.7-.59.47-1.01,1.11-1.26,1.93-.07.21-.13.44-.18.7-.05.23-.09.54-.14.91-.02.37-.05.84-.07,1.4v4.2c.02.56.05,1.03.07,1.4.05.37.09.69.14.94.05.24.11.46.18.67.25.82.67,1.46,1.26,1.92.6.47,1.37.7,2.31.7,1,0,1.79-.25,2.38-.77.6-.51,1.07-1.15,1.4-1.92.11-.23.28-.29.49-.18l3.81,1.72c.23.07.29.21.18.42-.68,1.68-1.73,2.99-3.15,3.92-1.4.91-3.12,1.37-5.15,1.37s-3.88-.48-5.35-1.44c-1.45-.98-2.49-2.45-3.12-4.41h0ZM3864.62,1003.55c.07-.23.22-.35.46-.35h4.41c.23,0,.38.12.45.35l8.05,23.1c.07.23-.01.35-.24.35h-4.55c-.24,0-.39-.12-.46-.35l-1.36-4.17h-8.33l-1.33,4.17c-.07.23-.22.35-.46.35h-4.58c-.24,0-.32-.12-.25-.35l8.19-23.1h0ZM3869.98,1018.11l-2.7-8.33h-.1l-2.7,8.33h5.5ZM3880.74,1003.55c0-.23.12-.35.35-.35h8.86c2.1,0,3.85.44,5.25,1.33s2.39,2.23,2.97,4.02c.1.33.18.68.25,1.05.09.35.16.77.21,1.26.07.49.11,1.08.14,1.75.02.68.03,1.51.03,2.49s-.01,1.81-.03,2.48c-.03.68-.07,1.26-.14,1.75-.05.49-.12.93-.21,1.3-.07.35-.15.69-.25,1.01-.58,1.8-1.57,3.14-2.97,4.03s-3.15,1.33-5.25,1.33h-8.86c-.23,0-.35-.12-.35-.35v-23.1h0ZM3885.89,1022.2c0,.14.07.21.21.21h2.69c1.19,0,2.15-.18,2.87-.55.73-.4,1.24-1.09,1.54-2.07.07-.16.13-.35.18-.56.04-.23.08-.53.1-.88.05-.35.07-.78.07-1.29.03-.54.04-1.19.04-1.96s-.01-1.41-.04-1.93c0-.51-.02-.94-.07-1.29-.02-.35-.06-.63-.1-.84-.05-.23-.11-.44-.18-.63-.3-.98-.81-1.66-1.54-2.03-.72-.4-1.68-.6-2.87-.6h-2.69c-.14,0-.21.07-.21.21v14.21h0Z" />
                                <g ref={setRef("aboutCommunity", "aboutCommunity")}>
                                    <path className="st17" d="M3804,909c59.55,0,108-48.45,108-108s-48.45-108-108-108-108,48.45-108,108,48.45,108,108,108ZM3804,707.78c51.4,0,93.22,41.82,93.22,93.22s-41.82,93.22-93.22,93.22-93.21-41.82-93.21-93.22,41.81-93.22,93.21-93.22Z" />
                                    <path className="st17" d="M3786.01,761.84c-7.2-4.24-13.04-.77-13.04,7.75v62.82c0,8.52,5.84,11.99,13.04,7.76l53.55-31.49c7.21-4.24,7.21-11.11,0-15.34l-53.55-31.49h0Z" />
                                </g>
                            </g>
                            <g>
                                <g>
                                    <rect className="st17" x={3717} y={327} width="174.03" height="174.03" />
                                    <path className="st34" d="M3763.99,380.23h6.24v-18.71h-18.72v18.71h12.48Z" />
                                    <path className="st34" d="M3751.51,392.7h31.19v-43.67h-43.66v43.67h12.47ZM3745.28,380.23v-24.95h31.19v31.19h-31.19v-6.24Z" />
                                    <path className="st34" d="M3845.09,361.51h-6.24v18.71h18.71v-18.71h-12.47Z" />
                                    <path className="st34" d="M3807.66,361.51v6.24h12.47v-12.48h-6.24v6.24h-6.23Z" />
                                    <path className="st34" d="M3807.66,367.75h-6.24v-6.24h6.24v-6.24h6.23v-6.24h-12.47v6.24h-12.48v6.24h6.24v6.24h-6.24v12.48h6.24v-6.24h6.24v6.24h6.24v-12.48Z" />
                                    <path className="st34" d="M3857.56,423.89h-6.24v-24.95h-6.23v6.24h-6.24v6.24h6.24v6.24h-6.24v-6.24h-12.48v12.48h6.24v12.48h6.24v-12.48h6.24v6.24h12.47v6.24h6.24v-6.24h6.24v-6.24h-12.48Z" />
                                    <path className="st34" d="M3795.18,405.18h6.24v-12.48h18.71v-18.71h-6.24v6.24h-6.23v6.24h-12.48v6.24h-6.24v6.24h6.24v6.24h0Z" />
                                    <path className="st34" d="M3795.18,411.42v12.48h-6.24v6.24h6.24v6.24h6.24v-6.24h6.24v-6.24h-6.24v-6.24h6.24v-6.24h-12.48Z" />
                                    <path className="st34" d="M3801.42,448.85h6.24v-6.24h-18.72v6.24h6.24v6.24h-6.24v6.24h12.48v-12.48h0Z" />
                                    <path className="st34" d="M3795.18,467.56h-6.24v6.24h6.24v-6.24Z" />
                                    <path className="st34" d="M3801.42,473.8h-6.24v6.24h6.24v-6.24Z" />
                                    <path className="st34" d="M3807.66,467.56v-6.24h-6.24v12.48h12.47v-6.24h-6.23Z" />
                                    <path className="st34" d="M3820.13,473.8h-6.23v6.24h6.23v-6.24Z" />
                                    <path className="st34" d="M3863.8,473.8h-6.24v6.24h12.48v-12.48h-6.24v6.24h0Z" />
                                    <path className="st34" d="M3870.04,436.37h-6.24v6.24h6.24v-6.24Z" />
                                    <path className="st34" d="M3857.56,448.85v6.24h6.24v6.24h6.24v-12.48h-12.48Z" />
                                    <path className="st34" d="M3857.56,442.61h-6.24v6.24h6.24v-6.24Z" />
                                    <path className="st34" d="M3832.61,442.61v6.24h6.24v6.24h6.24v-18.72h-6.24v6.24h-6.24Z" />
                                    <path className="st34" d="M3832.61,455.09h-6.24v6.24h6.24v-6.24Z" />
                                    <path className="st34" d="M3838.85,461.32h-6.24v6.24h-12.48v6.24h12.48v6.24h18.71v-24.95h-6.23v6.24h-6.24ZM3845.09,473.8h-6.24v-6.24h6.24v6.24Z" />
                                    <path className="st34" d="M3820.13,411.42h6.24v-6.24h6.24v-6.24h-18.72v6.24h-6.23v6.24h6.23v12.48h6.24v-12.48Z" />
                                    <path className="st34" d="M3813.9,436.37v12.48h12.47v-6.24h-6.24v-12.48h-6.23v6.24Z" />
                                    <path className="st34" d="M3826.37,423.89h-6.24v6.24h6.24v-6.24Z" />
                                    <path className="st34" d="M3857.56,398.94v18.71h12.48v-6.24h-6.24v-6.24h6.24v-6.24h-12.48Z" />
                                    <path className="st34" d="M3863.8,349.04h-37.43v43.67h43.67v-43.67h-6.24ZM3863.8,361.51v24.95h-31.19v-31.19h31.19v6.24Z" />
                                    <path className="st34" d="M3745.28,398.94h-6.24v12.48h6.24v-12.48Z" />
                                    <path className="st34" d="M3763.99,398.94h-6.24v6.24h-6.24v6.24h6.24v6.24h6.24v-12.48h6.24v-6.24h-6.24Z" />
                                    <path className="st34" d="M3782.7,398.94h-6.23v6.24h12.47v-6.24h-6.24Z" />
                                    <path className="st34" d="M3770.23,411.42v6.24h6.24v6.24h-6.24v6.24h12.47v-18.71h-6.23v-6.24h-6.24v6.24h0Z" />
                                    <path className="st34" d="M3795.18,405.18h-6.24v6.24h6.24v-6.24Z" />
                                    <path className="st34" d="M3739.04,423.89v6.24h24.95v-6.24h-18.71v-6.24h-6.24v6.24Z" />
                                    <path className="st34" d="M3751.51,411.42h-6.24v6.24h6.24v-6.24Z" />
                                    <path className="st34" d="M3820.13,461.32v-6.24h-12.47v6.24h12.47Z" />
                                    <path className="st34" d="M3757.75,448.85h-6.24v18.71h18.72v-18.71h-12.48Z" />
                                    <path className="st34" d="M3770.23,436.37h-31.19v43.67h43.66v-43.67h-12.47ZM3776.47,448.85v24.95h-31.19v-31.19h31.19v6.24Z" />
                                </g>
                                <path className="st17" d="M3684.66,545.55c0-.23.12-.35.35-.35h15.26c.24,0,.35.12.35.35v3.74c0,.23-.11.35-.35.35h-10.25c-.14,0-.21.07-.21.21v4.73c0,.14.07.21.21.21h8.54c.23,0,.35.12.35.35v3.71c0,.23-.12.35-.35.35h-8.54c-.14,0-.21.07-.21.21v4.93c0,.14.07.21.21.21h10.25c.24,0,.35.12.35.35v3.74c0,.23-.11.35-.35.35h-15.26c-.23,0-.35-.12-.35-.35v-23.1h0ZM3717.47,569c-.25,0-.45-.12-.59-.35l-4.24-7.24h-.1l-4.27,7.24c-.14.23-.34.35-.6.35h-4.83c-.11,0-.19-.03-.24-.1-.05-.09-.04-.2.03-.32l7.11-11.86-6.62-11.1c-.04-.12-.05-.21-.03-.28.05-.09.13-.14.24-.14h4.87c.23,0,.42.12.56.35l3.78,6.44h.1l3.78-6.44c.14-.23.33-.35.56-.35h4.87c.12,0,.19.05.21.14.05.07.05.16,0,.28l-6.65,11.1,7.14,11.86c.05.12.05.22,0,.32-.02.07-.09.1-.21.1h-4.87ZM3725.62,569c-.23,0-.35-.12-.35-.35v-23.1c0-.23.12-.35.35-.35h9.24c1.28,0,2.44.19,3.46.56,1.03.37,1.91.9,2.63,1.58s1.27,1.48,1.64,2.41c.38.93.56,1.97.56,3.11s-.19,2.15-.59,3.08c-.37.93-.92,1.74-1.65,2.41-.7.68-1.56,1.2-2.59,1.58-1.02.37-2.18.56-3.46.56h-4.24c-.14,0-.21.07-.21.21v7.95c0,.23-.11.35-.35.35h-4.44,0ZM3734.54,556.05c1.1,0,1.95-.28,2.56-.84.61-.58.91-1.37.91-2.35s-.3-1.76-.91-2.34c-.61-.58-1.46-.88-2.56-.88h-3.92c-.14,0-.21.07-.21.21v5.99c0,.14.07.21.21.21h3.92ZM3746.46,545.55c0-.23.12-.35.35-.35h4.45c.23,0,.35.12.35.35v18.66c0,.14.07.21.21.21h10.5c.23,0,.35.12.35.35v3.89c0,.23-.12.35-.35.35h-15.51c-.23,0-.35-.12-.35-.35v-23.1h0ZM3774.42,569.39c-2.08,0-3.9-.48-5.46-1.43-1.54-.96-2.61-2.4-3.22-4.34-.14-.42-.26-.83-.35-1.22-.07-.4-.13-.84-.18-1.33-.04-.49-.08-1.05-.1-1.68s-.04-1.39-.04-2.28.02-1.64.04-2.27.06-1.19.1-1.68c.05-.49.11-.93.18-1.33.09-.4.21-.8.35-1.22.61-1.91,1.68-3.35,3.22-4.31,1.56-.98,3.38-1.47,5.46-1.47s3.88.49,5.42,1.47c1.57.96,2.65,2.39,3.26,4.31.14.42.24.83.31,1.22.1.4.17.84.21,1.33.05.49.09,1.05.11,1.68s.03,1.39.03,2.27-.01,1.65-.03,2.28-.06,1.19-.11,1.68c-.04.49-.11.93-.21,1.33-.07.4-.17.8-.31,1.22-.61,1.94-1.69,3.38-3.26,4.34-1.54.96-3.34,1.43-5.42,1.43ZM3774.42,564.84c.98,0,1.78-.23,2.41-.7.63-.47,1.08-1.11,1.33-1.92.07-.21.13-.44.18-.7.05-.28.08-.61.1-.98.05-.4.07-.88.07-1.44.03-.56.04-1.22.04-1.99s-.01-1.43-.04-1.99c0-.56-.02-1.03-.07-1.4-.02-.4-.05-.72-.1-.98-.05-.28-.11-.52-.18-.73-.25-.82-.7-1.46-1.33-1.92-.63-.47-1.43-.7-2.41-.7s-1.79.23-2.42.7-1.07,1.11-1.33,1.92c-.07.21-.12.46-.17.73-.05.26-.09.58-.14.98-.02.37-.05.84-.07,1.4v3.99c.02.56.05,1.04.07,1.44.05.37.09.7.14.98.05.26.1.49.17.7.26.82.7,1.46,1.33,1.92s1.44.7,2.42.7h0ZM3800.84,569c-.26,0-.43-.12-.52-.35l-4.1-8.72h-3.18c-.14,0-.21.07-.21.21v8.51c0,.23-.12.35-.35.35h-4.45c-.23,0-.35-.12-.35-.35v-23.1c0-.23.12-.35.35-.35h9.49c1.21,0,2.31.19,3.29.56,1,.35,1.85.85,2.55,1.51.72.65,1.27,1.43,1.65,2.34.39.91.59,1.9.59,2.98,0,1.54-.37,2.88-1.12,4.02s-1.78,2.01-3.11,2.59l4.69,9.38c.04.12.04.22,0,.32-.05.07-.13.1-.25.1h-4.97,0ZM3797.24,555.56c.98,0,1.76-.27,2.34-.8.58-.54.88-1.26.88-2.17s-.3-1.6-.88-2.14c-.58-.54-1.36-.8-2.34-.8h-4.2c-.14,0-.21.07-.21.21v5.49c0,.14.07.21.21.21h4.2ZM3809.52,545.55c0-.23.12-.35.35-.35h15.26c.24,0,.35.12.35.35v3.74c0,.23-.11.35-.35.35h-10.25c-.14,0-.21.07-.21.21v4.73c0,.14.07.21.21.21h8.54c.23,0,.35.12.35.35v3.71c0,.23-.12.35-.35.35h-8.54c-.14,0-.21.07-.21.21v4.93c0,.14.07.21.21.21h10.25c.24,0,.35.12.35.35v3.74c0,.23-.11.35-.35.35h-15.26c-.23,0-.35-.12-.35-.35v-23.1h0ZM3837.58,545.55c0-.23.12-.35.35-.35h4.17c.28,0,.47.12.56.35l6.02,13.58h.14l5.91-13.58c.1-.23.28-.35.56-.35h4.1c.23,0,.35.12.35.35v23.1c0,.23-.12.35-.35.35h-3.96c-.23,0-.35-.12-.35-.35v-13.41h-.14l-4.41,10.04c-.14.3-.36.46-.66.46h-2.42c-.3,0-.52-.15-.66-.46l-4.41-10.04h-.14v13.41c0,.23-.12.35-.35.35h-3.96c-.23,0-.35-.12-.35-.35v-23.1h0ZM3872.99,569.39c-2.07,0-3.89-.48-5.46-1.43-1.54-.96-2.61-2.4-3.22-4.34-.14-.42-.25-.83-.35-1.22-.07-.4-.13-.84-.17-1.33-.05-.49-.08-1.05-.11-1.68-.02-.63-.03-1.39-.03-2.28s.01-1.64.03-2.27c.03-.63.06-1.19.11-1.68.04-.49.1-.93.17-1.33.1-.4.21-.8.35-1.22.61-1.91,1.68-3.35,3.22-4.31,1.57-.98,3.39-1.47,5.46-1.47s3.89.49,5.43,1.47c1.56.96,2.65,2.39,3.25,4.31.14.42.25.83.32,1.22.09.4.16.84.21,1.33.04.49.08,1.05.1,1.68.03.63.04,1.39.04,2.27s-.01,1.65-.04,2.28c-.02.63-.06,1.19-.1,1.68-.05.49-.12.93-.21,1.33-.07.4-.18.8-.32,1.22-.6,1.94-1.69,3.38-3.25,4.34-1.54.96-3.35,1.43-5.43,1.43ZM3872.99,564.84c.98,0,1.79-.23,2.42-.7.63-.47,1.07-1.11,1.33-1.92.07-.21.13-.44.17-.7.05-.28.08-.61.11-.98.04-.4.07-.88.07-1.44.02-.56.03-1.22.03-1.99s-.01-1.43-.03-1.99c0-.56-.03-1.03-.07-1.4-.03-.4-.06-.72-.11-.98-.04-.28-.1-.52-.17-.73-.26-.82-.7-1.46-1.33-1.92-.63-.47-1.44-.7-2.42-.7s-1.78.23-2.41.7c-.63.47-1.08,1.11-1.33,1.92-.07.21-.13.46-.18.73-.04.26-.09.58-.14.98-.02.37-.04.84-.07,1.4v3.99c.03.56.05,1.04.07,1.44.05.37.1.7.14.98.05.26.11.49.18.7.25.82.7,1.46,1.33,1.92.63.47,1.43.7,2.41.7h0ZM3899.42,569c-.26,0-.44-.12-.53-.35l-4.09-8.72h-3.19c-.14,0-.21.07-.21.21v8.51c0,.23-.12.35-.35.35h-4.44c-.24,0-.35-.12-.35-.35v-23.1c0-.23.11-.35.35-.35h9.48c1.21,0,2.31.19,3.29.56,1,.35,1.86.85,2.56,1.51.72.65,1.27,1.43,1.64,2.34.4.91.6,1.9.6,2.98,0,1.54-.38,2.88-1.12,4.02-.75,1.14-1.79,2.01-3.12,2.59l4.69,9.38c.05.12.05.22,0,.32-.05.07-.13.1-.24.1h-4.97,0ZM3895.81,555.56c.98,0,1.76-.27,2.35-.8.58-.54.87-1.26.87-2.17s-.29-1.6-.87-2.14c-.59-.54-1.37-.8-2.35-.8h-4.2c-.14,0-.21.07-.21.21v5.49c0,.14.07.21.21.21h4.2ZM3908.1,545.55c0-.23.11-.35.35-.35h15.26c.23,0,.35.12.35.35v3.74c0,.23-.12.35-.35.35h-10.26c-.14,0-.21.07-.21.21v4.73c0,.14.07.21.21.21h8.54c.23,0,.35.12.35.35v3.71c0,.23-.12.35-.35.35h-8.54c-.14,0-.21.07-.21.21v4.93c0,.14.07.21.21.21h10.26c.23,0,.35.12.35.35v3.74c0,.23-.12.35-.35.35h-15.26c-.24,0-.35-.12-.35-.35v-23.1h0Z" />
                            </g>
                            <g>
                                <path className="st17" d="M3714.73,1545.55c0-.23.12-.35.35-.35h4.45c.23,0,.35.12.35.35v8.92c0,.14.07.21.21.21h7.77c.14,0,.21-.07.21-.21v-8.92c0-.23.11-.35.35-.35h4.44c.24,0,.35.12.35.35v23.1c0,.23-.11.35-.35.35h-4.44c-.24,0-.35-.12-.35-.35v-9.17c0-.14-.07-.21-.21-.21h-7.77c-.14,0-.21.07-.21.21v9.17c0,.23-.12.35-.35.35h-4.45c-.23,0-.35-.12-.35-.35v-23.1ZM3746.48,1569.39c-2.07,0-3.89-.48-5.46-1.44-1.54-.96-2.61-2.4-3.22-4.34-.14-.42-.25-.83-.35-1.23-.07-.39-.12-.84-.17-1.33s-.08-1.05-.11-1.68c-.02-.63-.03-1.38-.03-2.27s.01-1.65.03-2.28c.03-.63.06-1.19.11-1.68s.1-.93.17-1.33c.1-.39.21-.8.35-1.22.61-1.91,1.68-3.35,3.22-4.31,1.57-.98,3.39-1.47,5.46-1.47s3.89.49,5.43,1.47c1.56.96,2.65,2.4,3.25,4.31.14.42.25.83.32,1.22.09.4.16.84.21,1.33s.08,1.05.1,1.68c.03.63.04,1.39.04,2.28s-.01,1.64-.04,2.27c-.02.63-.05,1.19-.1,1.68s-.12.94-.21,1.33c-.07.4-.18.81-.32,1.23-.6,1.94-1.69,3.38-3.25,4.34-1.54.96-3.35,1.44-5.43,1.44ZM3746.48,1564.83c.98,0,1.79-.23,2.42-.7.63-.46,1.07-1.1,1.33-1.92.07-.21.13-.44.17-.7.05-.28.09-.61.11-.98.05-.4.07-.88.07-1.44.02-.56.03-1.22.03-1.99s-.01-1.44-.03-2c0-.56-.02-1.02-.07-1.4-.02-.39-.06-.72-.11-.98-.04-.28-.1-.52-.17-.73-.26-.82-.7-1.46-1.33-1.93-.63-.46-1.44-.7-2.42-.7s-1.78.24-2.41.7c-.63.47-1.07,1.11-1.33,1.93-.07.21-.13.45-.18.73-.04.26-.09.59-.14.98-.02.38-.04.84-.07,1.4v3.99c.03.56.05,1.04.07,1.44.05.37.1.7.14.98.05.26.11.49.18.7.26.82.7,1.46,1.33,1.92.63.47,1.43.7,2.41.7ZM3759.75,1545.55c0-.23.11-.35.35-.35h4.16c.28,0,.47.12.56.35l6.02,13.58h.14l5.92-13.58c.09-.23.28-.35.56-.35h4.09c.23,0,.35.12.35.35v23.1c0,.23-.12.35-.35.35h-3.95c-.24,0-.35-.12-.35-.35v-13.41h-.14l-4.41,10.05c-.14.3-.37.45-.67.45h-2.41c-.31,0-.53-.15-.67-.45l-4.41-10.05h-.14v13.41c0,.23-.12.35-.35.35h-3.95c-.24,0-.35-.12-.35-.35v-23.1h0ZM3786.44,1545.55c0-.23.12-.35.35-.35h15.26c.23,0,.35.12.35.35v3.74c0,.24-.12.35-.35.35h-10.25c-.14,0-.21.07-.21.21v4.73c0,.14.07.21.21.21h8.54c.23,0,.35.12.35.35v3.71c0,.23-.12.35-.35.35h-8.54c-.14,0-.21.07-.21.21v4.93c0,.14.07.21.21.21h10.25c.23,0,.35.12.35.35v3.75c0,.23-.12.35-.35.35h-15.26c-.23,0-.35-.12-.35-.35v-23.1h0ZM3814.85,1569c-.23,0-.35-.12-.35-.35v-23.1c0-.23.12-.35.35-.35h9.24c1.29,0,2.44.19,3.47.56,1.02.37,1.9.9,2.62,1.57.73.68,1.27,1.49,1.65,2.42.37.93.56,1.97.56,3.11s-.2,2.15-.6,3.08c-.37.94-.92,1.74-1.64,2.42-.7.68-1.57,1.2-2.59,1.57-1.03.38-2.18.56-3.47.56h-4.23c-.14,0-.21.07-.21.21v7.95c0,.23-.12.35-.35.35h-4.45ZM3823.78,1556.05c1.09,0,1.95-.28,2.55-.84.61-.58.91-1.37.91-2.35s-.3-1.76-.91-2.34c-.6-.58-1.46-.88-2.55-.88h-3.92c-.14,0-.21.07-.21.21v5.99c0,.14.07.21.21.21h3.92ZM3839.71,1545.55c.07-.23.22-.35.45-.35h4.41c.23,0,.39.12.46.35l8.05,23.1c.07.23-.02.35-.25.35h-4.55c-.23,0-.38-.12-.45-.35l-1.37-4.17h-8.33l-1.33,4.17c-.07.23-.22.35-.45.35h-4.59c-.23,0-.31-.12-.24-.35l8.19-23.1h0ZM3845.06,1560.11l-2.69-8.33h-.11l-2.69,8.33h5.49ZM3855.86,1563.61c-.14-.42-.26-.83-.35-1.23-.07-.39-.13-.84-.17-1.33-.05-.49-.09-1.05-.11-1.68s-.03-1.38-.03-2.27.01-1.65.03-2.28.06-1.19.11-1.68c.04-.49.1-.93.17-1.33.09-.39.21-.8.35-1.22.61-1.94,1.68-3.38,3.22-4.34,1.56-.96,3.41-1.44,5.53-1.44,1.12,0,2.14.13,3.05.39.91.26,1.71.62,2.41,1.08.72.45,1.33.98,1.82,1.61.51.61.91,1.28,1.19,2,.12.23.07.41-.14.52l-3.74,1.58c-.26.07-.42.01-.49-.18-.47-.81-1.03-1.42-1.68-1.82-.63-.42-1.44-.63-2.42-.63-1.03,0-1.85.25-2.48.74-.63.47-1.08,1.11-1.33,1.92-.07.21-.13.46-.18.74-.05.26-.09.58-.14.98-.02.37-.05.84-.07,1.4v3.95c.02.56.05,1.04.07,1.44.05.37.09.7.14.98.05.26.11.49.18.7.25.82.7,1.46,1.33,1.92.65.47,1.5.7,2.55.7.89,0,1.68-.21,2.38-.63s1.18-1.02,1.44-1.82c.09-.3.16-.64.21-1.01.04-.37.07-.82.07-1.33,0-.14-.07-.21-.21-.21h-3.22c-.24,0-.35-.12-.35-.35v-3.36c0-.23.11-.35.35-.35h8.19c.23,0,.35.12.35.35v1.96c0,1.05-.05,2.04-.14,2.97-.1.94-.25,1.73-.46,2.38-.61,1.92-1.68,3.39-3.22,4.42-1.52,1.02-3.34,1.54-5.46,1.54s-3.97-.48-5.53-1.44c-1.54-.96-2.61-2.4-3.22-4.34h0ZM3877.8,1545.55c0-.23.12-.35.35-.35h15.26c.24,0,.35.12.35.35v3.74c0,.24-.11.35-.35.35h-10.25c-.14,0-.21.07-.21.21v4.73c0,.14.07.21.21.21h8.54c.23,0,.35.12.35.35v3.71c0,.23-.12.35-.35.35h-8.54c-.14,0-.21.07-.21.21v4.93c0,.14.07.21.21.21h10.25c.24,0,.35.12.35.35v3.75c0,.23-.11.35-.35.35h-15.26c-.23,0-.35-.12-.35-.35v-23.1h0Z" />
                                <g ref={setRef("homeIcon", "homeIcon")}>
                                    <path className="st17" d="M3804,1499c59.55,0,108-48.45,108-108s-48.45-108-108-108-108,48.45-108,108,48.45,108,108,108ZM3804,1297.78c51.4,0,93.22,41.82,93.22,93.22s-41.82,93.22-93.22,93.22-93.21-41.82-93.21-93.22,41.81-93.22,93.21-93.22Z" />
                                    <path className="st17" d="M3842.76,1380.7h0l-33.43-33.42c-1.42-1.43-3.31-2.21-5.33-2.21s-3.91.78-5.33,2.21l-33.41,33.4s-.02.02-.04.03c-2.92,2.95-2.92,7.72.02,10.65,1.34,1.35,3.11,2.12,5,2.2.08,0,.16.02.24.02h1.33v24.59c0,4.87,3.96,8.83,8.83,8.83h13.08c1.32,0,2.4-1.08,2.4-2.4v-19.29c0-2.22,1.8-4.02,4.02-4.02h7.72c2.22,0,4.02,1.8,4.02,4.02v19.29c0,1.32,1.08,2.4,2.41,2.4h13.07c4.87,0,8.83-3.96,8.83-8.83v-24.59h1.24c2.01,0,3.9-.79,5.33-2.21,2.94-2.94,2.94-7.73,0-10.67h0Z" />
                                </g>
                            </g>
                            <g ref={setRef("backIcon", "backIcon")}>
                                <path className="st17" d="M3763.54,2125.55c0-.23.12-.35.35-.35h9.28c2.59,0,4.5.58,5.74,1.75,1.23,1.17,1.85,2.69,1.85,4.58,0,1.31-.27,2.37-.8,3.19-.52.82-1.17,1.45-1.96,1.89v.07c.39.14.78.37,1.15.7.4.3.74.69,1.02,1.15.3.47.54,1.01.73,1.61.19.59.28,1.23.28,1.93,0,2.36-.73,4.11-2.2,5.25-1.45,1.12-3.47,1.68-6.06,1.68h-9.03c-.23,0-.35-.12-.35-.35v-23.1h0ZM3772.54,2134.93c.98,0,1.73-.25,2.27-.74.56-.49.84-1.17.84-2.06s-.28-1.56-.84-2.03c-.54-.49-1.29-.74-2.27-.74h-3.64c-.14,0-.21.07-.21.21v5.15c0,.14.07.21.21.21h3.64ZM3768.69,2144.62c0,.14.07.21.21.21h3.92c1.05,0,1.84-.25,2.38-.77.56-.53.84-1.27.84-2.2s-.28-1.63-.84-2.17c-.54-.54-1.33-.81-2.38-.81h-3.92c-.14,0-.21.07-.21.21v5.53ZM3791,2125.55c.07-.23.22-.35.46-.35h4.41c.23,0,.38.12.45.35l8.05,23.1c.07.23-.01.35-.24.35h-4.55c-.24,0-.39-.12-.46-.35l-1.36-4.17h-8.33l-1.33,4.17c-.07.23-.23.35-.46.35h-4.58c-.24,0-.32-.12-.25-.35l8.19-23.1h0ZM3796.36,2140.11l-2.7-8.33h-.1l-2.7,8.33h5.5ZM3806.13,2143.54c-.14-.37-.26-.75-.35-1.12-.07-.4-.13-.83-.18-1.3-.04-.49-.08-1.05-.1-1.68-.02-.65-.04-1.43-.04-2.34s.02-1.68.04-2.31c.02-.65.06-1.21.1-1.68.05-.49.11-.92.18-1.3.09-.37.21-.75.35-1.15.63-1.96,1.67-3.42,3.11-4.38s3.26-1.47,5.36-1.47,3.74.47,5.14,1.4c1.43.91,2.48,2.21,3.15,3.89.12.21.06.35-.17.42l-3.82,1.71c-.21.12-.37.06-.49-.17-.32-.77-.79-1.41-1.4-1.93-.58-.51-1.37-.77-2.38-.77-.93,0-1.7.24-2.31.7-.58.47-1,1.11-1.26,1.93-.07.21-.12.44-.17.7-.05.23-.09.54-.14.91-.02.37-.05.84-.07,1.4v4.2c.02.56.05,1.03.07,1.4.05.37.09.69.14.94.05.24.1.46.17.67.26.82.68,1.46,1.26,1.92.61.47,1.38.7,2.31.7,1.01,0,1.8-.25,2.38-.77.61-.51,1.08-1.15,1.4-1.92.12-.23.28-.29.49-.18l3.82,1.72c.23.07.29.21.17.42-.67,1.68-1.72,2.99-3.15,3.92-1.4.91-3.11,1.37-5.14,1.37s-3.89-.48-5.36-1.44c-1.44-.98-2.48-2.45-3.11-4.41h0ZM3826.23,2125.55c0-.23.11-.35.35-.35h4.44c.23,0,.35.12.35.35v10.29l7.91-10.33c.14-.21.34-.31.6-.31h5.07c.12,0,.19.05.21.14.05.09.02.2-.07.31l-7.21,9.03,7.88,13.9c.16.28.09.42-.21.42h-5.15c-.23,0-.41-.11-.52-.32l-5.39-10.01-3.12,3.92v6.06c0,.23-.12.35-.35.35h-4.44c-.24,0-.35-.12-.35-.35v-23.1h0Z" />
                                <g>
                                    <path className="st17" d="M3804,2087c59.55,0,108-48.45,108-108s-48.45-108-108-108-108,48.45-108,108,48.45,108,108,108ZM3804,1885.78c51.4,0,93.21,41.82,93.21,93.22s-41.81,93.21-93.21,93.22c-51.4-.01-93.21-41.82-93.21-93.22s41.81-93.22,93.21-93.22Z" />
                                    <path className="st17" d="M3789.5,2025.26c2.88,2.88,7.56,2.88,10.45,0,2.89-2.89,2.89-7.57,0-10.46l-28.41-28.4h82.26c4.08-.01,7.39-3.32,7.39-7.41s-3.31-7.39-7.39-7.39h-82.26l28.41-28.4c2.89-2.88,2.89-7.57,0-10.45-1.44-1.45-3.33-2.17-5.23-2.17s-3.78.72-5.22,2.17l-41.03,41.03c-1.39,1.38-2.17,3.26-2.17,5.22s.78,3.84,2.17,5.23l41.03,41.03Z" />
                                </g>
                            </g>
                            <g className="st77">
                                <g ref={setRef("communityLogo", "communityLogo")}>
                                    <path className="st17" d="M414.68,227.29h-15.04v15.11h15.04v-15.11Z" />
                                    <path className="st17" d="M430.48,211.43h-15.04v15.12h15.04v-15.12Z" />
                                    <path className="st17" d="M376.3,226.7c-1.4,1.41-2.18,3.32-2.18,5.31v28.96l22.84-22.95v-13.42h13.37l2.43-2.44v-13.43h13.37l15.81-15.89c7.5-7.54,11.7-17.75,11.7-28.39v-15.46l-77.32,77.7h-.02Z" />
                                    <path className="st17" d="M420.11,110.56v-10.41c-.87,1.15-1.83,2.24-2.86,3.28l-41.76,41.96c-.9.91-1.42,2.15-1.42,3.44v18.77l38.44-38.63c4.86-4.88,7.59-11.49,7.59-18.39v-.02h.01Z" />
                                    <path className="st17" d="M374.11,185.29v28.96l67.8-68.13c7.49-7.52,11.7-17.74,11.7-28.38v-35.74c0,5.32-2.03,11.48-4.63,17.19-4.39,9.66-10.58,18.39-18.05,25.9l-54.64,54.9c-1.4,1.4-2.19,3.31-2.19,5.3h.01Z" />
                                    <path className="st17" d="M433.16,229.24h-12.91l-2.89,2.89v12.97h-12.91l-18.67,18.76c-7.49,7.53-11.7,17.74-11.7,28.39v35.75c0-5.32,2.04-11.49,4.63-17.2,4.38-9.66,10.58-18.38,18.06-25.9l54.64-54.9c1.4-1.4,2.18-3.31,2.18-5.29v-28.96l-20.44,20.54v12.97-.02h.01Z" />
                                    <path className="st17" d="M407.82,299.21v10.41c.87-1.15,1.83-2.24,2.86-3.28l23.13-23.25v16.14l10.43-10.48c6-6.03,9.37-14.19,9.37-22.71v-23.61l-38.2,38.39c-4.86,4.88-7.58,11.49-7.58,18.39h0Z" />
                                    <path className="st17" d="M99.68,262.19h6.34c.27,0,.5.23.5.51v33.83c0,.27-.23.51-.5.51h-6.34c-.27,0-.5-.22-.5-.51v-33.83c0-.28.22-.51.5-.51Z" />
                                    <path className="st17" d="M119.69,274.48c.06-.55.11-1,.17-1.36s.15-.69.25-1c.36-1.19.98-2.14,1.83-2.82.85-.69,1.94-1.03,3.28-1.03,1.43,0,2.57.38,3.42,1.13.85.75,1.51,1.69,1.97,2.82.16.34.4.43.7.26l5.45-2.51c.33-.1.42-.3.25-.61-.97-2.46-2.46-4.37-4.47-5.71-2.02-1.35-4.47-2.03-7.37-2.03s-5.54.71-7.62,2.13-3.57,3.56-4.47,6.43c-.2.58-.36,1.15-.47,1.69-.12.55-.21,1.17-.27,1.87-.06.7-.12,1.52-.15,2.46-.04.93-.05,2.07-.05,3.4s.02,2.47.05,3.4c.04.94.08,1.76.15,2.46.06.7.15,1.33.27,1.9.12.57.27,1.12.47,1.67.89,2.87,2.39,5.01,4.47,6.43,2.08,1.42,4.62,2.13,7.62,2.13s5.35-.67,7.37-2.03c2.02-1.35,3.5-3.26,4.47-5.71.16-.31.08-.51-.25-.61l-5.45-2.51c-.3-.17-.54-.08-.7.26-.47,1.13-1.12,2.06-1.97,2.82-.85.75-1.99,1.13-3.42,1.13-1.33,0-2.43-.34-3.28-1.03-.85-.68-1.46-1.62-1.83-2.82-.1-.3-.18-.64-.25-1-.06-.36-.13-.81-.17-1.36-.04-.54-.08-1.23-.1-2.05-.02-.82-.03-1.84-.03-3.07s0-2.26.03-3.07c.02-.82.06-1.5.1-2.05h0Z" />
                                    <path className="st17" d="M158.48,262.7c-.1-.34-.32-.51-.65-.51h-6.3c-.33,0-.55.17-.65.51l-11.69,33.81c-.1.34.02.51.35.51h6.54c.33,0,.55-.18.65-.51l1.9-6.1h11.9l1.95,6.1c.1.34.32.51.65.51h6.5c.33,0,.45-.18.35-.51l-11.49-33.81h0ZM150.69,284.01l3.84-12.19h.15l3.84,12.19h-7.84.01Z" />
                                    <path className="st17" d="M199.65,276c-.04-.99-.09-1.84-.17-2.56s-.18-1.34-.3-1.87c-.12-.53-.24-1.03-.37-1.51-.83-2.62-2.25-4.59-4.24-5.88-2-1.29-4.5-1.95-7.49-1.95h-12.64c-.33,0-.5.18-.5.51v33.77c0,.34.16.51.5.51h12.64c2.99,0,5.5-.65,7.49-1.95,2-1.29,3.41-3.26,4.24-5.88.14-.48.26-.98.37-1.51.12-.53.22-1.15.3-1.87.08-.71.15-1.57.17-2.56.03-.99.06-2.2.06-3.63s-.02-2.64-.06-3.63h0ZM192.23,282.48c-.02.77-.05,1.41-.1,1.93-.05.51-.11.94-.17,1.26s-.15.6-.25.84c-.43,1.44-1.17,2.44-2.2,3.01s-2.4.84-4.1.84h-3.84c-.2,0-.3-.1-.3-.31v-20.85c0-.2.1-.31.3-.31h3.84c1.7,0,3.07.28,4.1.84,1.03.57,1.76,1.57,2.2,3,.1.28.18.58.25.9.06.32.13.74.17,1.26.05.51.08,1.15.1,1.9s.03,1.7.03,2.83,0,2.08-.03,2.85v.02h0Z" />
                                    <path className="st17" d="M631.02,275.11h-8.69c-.33,0-.5.17-.5.5v5.07c0,.33.16.5.5.5h5.74c1.5,0,2.62.29,3.37.88s1.12,1.53,1.12,2.84v2.71c0,.63-.05,1.17-.13,1.6s-.25.79-.5,1.06-.62.46-1.12.58-1.17.17-2,.17h-8.59c-.34,0-.5.17-.5.51v5.07c0,.34.16.5.5.5h12.09c1.27,0,2.37-.15,3.32-.42.95-.28,1.74-.75,2.35-1.4s1.08-1.53,1.4-2.63.47-2.48.47-4.12v-4.37c0-3.11-.77-5.39-2.3-6.85-1.53-1.46-3.72-2.18-6.55-2.18l.02-.03h0Z" />
                                    <path className="st17" d="M709.32,297.1c2.08,0,3.57-.51,4.46-1.53s1.34-2.61,1.34-4.8v-14.31c0-.33-.16-.5-.49-.5h-6.01c-.33,0-.49.17-.49.5v11.9c0,1-.19,1.7-.58,2.08-.38.39-.99.58-1.83.58h-4.19c-1.17,0-2.09-.23-2.78-.68-.68-.45-1.02-1.07-1.02-1.88v-3.65c0-1.84-.25-3.34-.75-4.5-.5-1.17-1.21-2.09-2.13-2.78-.91-.69-2.03-1.15-3.32-1.43-1.3-.28-2.77-.43-4.4-.5l7.49-8.73c.14-.27.06-.51-.2-.71l-4.14-3.51c-.24-.14-.45-.08-.65.15l-10.69,12.7c-.16.2-.37.43-.62.7-.25.27-.38.51-.38.74v4.08c0,.33.16.5.5.5h7.49c1.56,0,2.7.3,3.42.9.71.61,1.08,1.58,1.08,2.91v2.31c0,.67-.05,1.22-.13,1.66s-.26.78-.52,1.03c-.27.25-.65.42-1.15.52-.5.1-1.15.15-1.95.15h-31.93c-.83,0-1.44-.19-1.83-.58-.38-.39-.58-1.08-.58-2.08v-24.9c0-.33-.17-.51-.49-.51h-6.01c-.33,0-.49.17-.49.51v27.31c0,2.17.45,3.77,1.34,4.8.89,1.02,2.38,1.53,4.46,1.53h39.02c1.53,0,2.83-.21,3.9-.62,1.07-.42,1.9-1.17,2.5-2.24.63,1.17,1.45,1.94,2.45,2.31s2.2.55,3.6.55h6.68l-.02.05.04-.03Z" />
                                    <path className="st17" d="M704.48,301.46h4.99c.27,0,.5.22.5.5v4.92c0,.28-.23.51-.5.51h-4.99c-.27,0-.5-.23-.5-.51v-4.92c0-.27.22-.5.5-.5Z" />
                                    <path className="st17" d="M712.16,301.46h5.05c.27,0,.5.22.5.5v4.92c0,.28-.23.51-.5.51h-5.05c-.27,0-.5-.22-.5-.51v-4.92c0-.27.22-.5.5-.5Z" />
                                    <path className="st17" d="M733.5,255.03h-2.65c-.33,0-.5.17-.5.5,0,.63-.09,1.08-.27,1.33s-.52.38-1.02.38c-.7,0-1.42-.14-2.17-.42s-1.53-.6-2.32-.93c-.8-.33-1.6-.64-2.4-.93-.8-.28-1.58-.43-2.35-.43-1.07,0-1.97.34-2.72,1.01s-1.29,1.67-1.62,3.01c-.1.33.02.55.35.65l2.6.85c.33.1.55-.02.65-.35.2-.57.44-.94.72-1.13.28-.18.59-.28.92-.28.53,0,1.13.14,1.8.4.67.27,1.37.55,2.13.85.76.3,1.56.59,2.43.85.87.27,1.76.4,2.7.4,1.5,0,2.58-.48,3.25-1.43.67-.95,1-2.24,1-3.84,0-.33-.16-.5-.5-.5h-.03Z" />
                                    <path className="st17" d="M728.06,262.95h-6.01c-.33,0-.49.17-.49.51v33.13c0,.34.16.5.49.5h6.01c.33,0,.49-.17.49-.5v-33.13c0-.33-.16-.51-.49-.51Z" />
                                    <path className="st17" d="M117.86,169.24l-18.86,56.29h11.85l3.95-12.06h20.8l3.95,12.06h11.77l-18.86-56.28h-14.6,0ZM118.03,203.66l7.17-21.79,7.18,21.79s-14.35,0-14.35,0Z" />
                                    <path className="st17" d="M167.02,182.84h-11.28v42.68h11.93v-23.48c0-5.67,4.27-8.99,11.52-8.99v-11.26c-4.99,0-9.27,2.11-12.17,5.18v-4.13h0Z" />
                                    <path className="st17" d="M215.54,182.84l-10.8,33.12-9.59-33.12h-12.33l14.19,42.68h3.94l-5.72,14.49h11.77l5.24-14.49,15.64-42.68h-12.34Z" />
                                    <path className="st17" d="M260.58,188.02c-3.06-3.49-7.49-5.43-13.05-5.43-12.25,0-21.12,8.82-21.12,21.62s8.86,22.36,21.12,22.36c5.56,0,10-2.11,13.05-5.75v4.7h11.04v-42.68h-11.04v5.18h0ZM249.23,215.97c-6.36,0-10.96-4.94-10.96-11.74s4.59-11.82,10.96-11.82,10.96,4.86,10.96,11.82-4.44,11.74-10.96,11.74h0Z" />
                                    <path className="st17" d="M330.54,181.79c-6.77,0-11.45,2.6-13.94,6.24-2.34-3.97-6.45-6.24-12.9-6.24-5.32,0-9.58,2.11-12.25,5.1v-4.04h-11.28v42.6h11.93v-25.35c.08-3.56,2.66-7.61,7.82-7.61s7.58,3.97,7.58,8.74v24.22h11.93v-25.35c.08-3.56,2.57-7.61,7.9-7.61,4.99,0,7.49,3.97,7.49,8.74v24.22h11.93v-26.48c0-9.48-5.56-17.17-16.2-17.17h0Z" />
                                    <path className="st17" d="M531.95,187.08c-4.62-4.01-10.22-6.02-16.71-6.02s-12.1,2.01-16.72,6.02c-4.61,4.01-6.98,9.4-6.98,16.29v18.3c0,5.38-1.12,9.27-3.24,11.91-2.12,2.63-4.62,3.89-7.36,4.01l5.74,5.76c5.11-1.13,9.23-3.38,12.6-7.02,3.37-3.63,5.11-8.15,5.37-13.66,2.49,2.01,5.99,3.01,10.6,3.01h6.86l4.62-4.89c1.62,3.26,4.24,4.89,7.86,4.89h4.24v-22.31c0-6.9-2.25-12.28-6.86-16.29h-.02ZM515.23,219.29c-3.12-.13-5.61-1-7.6-2.63-2-1.63-3-5.14-3-10.27v-3.01c0-5.27,1.12-9.27,3.37-11.91,2.12-2.63,4.62-3.89,7.23-4.01,2.75.13,5.24,1.38,7.36,4.01,2.12,2.63,3.24,6.51,3.24,11.91v13.54c0,.88.13,1.63.37,2.38h-10.97Z" />
                                    <path className="st17" d="M646.7,238.97l7.6,7.65,7.73-7.65-7.73-7.64-7.6,7.64Z" />
                                    <path className="st17" d="M670.52,225.68h4.36v-41.36l-13.1,7.02v25.57c0,.88.13,1.63.37,2.38h-99.82v-50.05l-12.97,6.89v49.56h108.68l4.62-5.01c1.62,3.38,4.24,5.01,7.86,5.01h0Z" />
                                    <path className="st17" d="M670.41,231.36l-7.61,7.65,7.61,7.65,7.61-7.65-7.61-7.65Z" />
                                    <path className="st17" d="M689.69,222.05c0,5.39-1.12,9.4-3.24,12.04-2.12,2.63-4.62,4.01-7.36,4.01l5.61,5.77c5.24-1.13,9.6-3.51,12.97-7.39,3.37-3.76,5.11-8.52,5.11-14.41v-37.73l-13.1,7.02v30.7h.01Z" />
                                    <path className="st17" d="M715.71,176.14v49.55h12.96v-56.44l-12.96,6.9h0Z" />
                                </g>
                            </g>
                            <g ref={setRef("sdeiraLogo", "sdeiraLogo")}>
                                <path className="st17" d="M3083.93,167.24v-18.15l-53.73,53.2c-1.2,1.19-1.87,2.81-1.87,4.49v15.49l55.6-55.06v.02h0Z" />
                                <path className="st17" d="M3056.11,203.84c-1.2,1.19-1.87,2.81-1.87,4.49v20.05l77.63-76.9v-22.65l-75.76,75.03v-.02h0Z" />
                                <path className="st17" d="M3028.33,265.74v24.58l97.07-96.13v-27.22l-95.2,94.27c-1.2,1.19-1.87,2.81-1.87,4.49h0Z" />
                                <path className="st17" d="M3090.42,133.6v-13.6l-40.76,40.37c-1.21,1.19-1.88,2.81-1.88,4.49v10.98l42.66-42.24h-.02Z" />
                                <path className="st17" d="M3177.13,153.98l-9.17,9.08,9.17,9.08,9.16-9.08-9.16-9.08Z" />
                                <path className="st17" d="M3241.98,230.96c7.16,0,12.96-5.74,12.96-12.84v-38.49l-12.96,12.84v25.65h-25.9v-25.65l-12.97,12.84v38.49h-12.96v12.84h12.96c7.17,0,12.97-5.74,12.97-12.84v-12.84h25.9Z" />
                                <path className="st17" d="M3157.9,153.99l-9.16,9.08,9.16,9.08,9.17-9.08-9.17-9.08Z" />
                                <path className="st17" d="M3248.14,238.47l-9.16,9.08,9.16,9.08,9.17-9.08-9.17-9.08Z" />
                                <path className="st17" d="M3228.93,238.47l-9.17,9.08,9.17,9.08,9.17-9.08-9.17-9.08Z" />
                                <path className="st17" d="M3403.9,192.49v25.63h-12.96v-38.49l-12.96,12.84v25.65h-12.97v-38.49l-12.96,12.84v25.65h-48.57v-25.65c0-7.09-5.8-12.84-12.97-12.84h-12.96v12.84h12.96v25.65h-25.9v12.84h139.25c7.16,0,12.94-5.74,12.96-12.82v-38.47l-12.96,12.84.04-.02h0Z" />
                                <path className="st17" d="M3185.81,187.16c-4.69-4.65-11.17-7.52-18.31-7.52-14.3,0-25.9,11.49-25.9,25.65,0,7.09,2.9,13.5,7.59,18.15,4.7,4.65,11.17,7.52,18.33,7.52s13.64-2.87,18.31-7.52c4.7-4.65,7.6-11.06,7.6-18.15s-2.9-13.5-7.6-18.15l-.02.02h0ZM3176.66,214.37c-2.35,2.33-5.59,3.75-9.16,3.75s-6.82-1.45-9.15-3.75c-2.35-2.32-3.79-5.53-3.79-9.07,0-7.07,5.8-12.84,12.96-12.84,3.57,0,6.81,1.45,9.16,3.75,2.34,2.32,3.78,5.53,3.78,9.07s-1.46,6.76-3.78,9.07l-.02.02h0Z" />
                                <path className="st17" d="M2918.24,154l-9.16,9.08,9.16,9.08,9.17-9.08-9.17-9.08Z" />
                                <path className="st17" d="M2999.19,183.1c-3.81-2.19-8.23-3.44-12.96-3.44-14.31,0-25.91,11.49-25.91,25.65,0,7.09,2.9,13.5,7.6,18.15,4.7,4.65,11.17,7.52,18.33,7.52,4.71,0,9.13-1.25,12.96-3.44v3.44h12.96v-51.31h-12.96v3.44l-.02-.02h0ZM2986.23,218.13c-3.59,0-6.83-1.45-9.16-3.75-2.34-2.33-3.78-5.53-3.78-9.07,0-7.07,5.8-12.84,12.96-12.84,3.57,0,6.8,1.45,9.15,3.75,2.35,2.32,3.79,5.53,3.79,9.07s-1.46,6.76-3.79,9.07c-2.35,2.32-5.58,3.75-9.15,3.75l-.02.02h0Z" />
                                <path className="st17" d="M2834.04,183.1c-3.81-2.19-8.23-3.44-12.97-3.44-14.3,0-25.9,11.49-25.9,25.65,0,7.09,2.9,13.5,7.6,18.15,4.69,4.65,11.16,7.52,18.32,7.52,4.72,0,9.14-1.25,12.97-3.44v3.44h12.96v-76.98l-12.96,12.84v16.27l-.02-.02h0ZM2821.07,218.13c-3.59,0-6.82-1.45-9.15-3.75-2.35-2.33-3.79-5.53-3.79-9.07,0-7.07,5.8-12.84,12.96-12.84,3.57,0,6.81,1.45,9.16,3.75,2.35,2.33,3.79,5.53,3.79,9.07s-1.46,6.76-3.79,9.07c-2.35,2.32-5.59,3.75-9.16,3.75l-.02.02h0Z" />
                                <path className="st17" d="M2944.15,179.66c-7.17,0-12.97,5.74-12.97,12.84v38.49h12.97v-38.49h12.96v-12.84h-12.96Z" />
                                <path className="st17" d="M2924.71,179.66h-12.96v51.31h12.96v-51.31Z" />
                                <path className="st17" d="M2783.31,195.29c-5.84-5.88-14.32-7.97-21.7-10.47-2.88-.98-5.43-2.01-7.32-3.36-2.09-1.49-3.35-3.36-3.35-5.94,0-4.75,4.67-8.68,12.35-8.68,4.32,0,8.7.76,13.04,3.01.08.04.18.1.25.14l.14-.14,9.45-9.36c-5.42-3.56-12.39-5.94-20.34-6.39-.77-.04-1.54-.08-2.33-.08h-.45c-15.55,0-26.18,9.07-26.18,21.3,0,2.91.43,5.41,1.22,7.6,1.07,2.95,2.75,5.29,4.84,7.21,4.61,4.24,11.16,6.41,17.2,8.3,5.05,1.58,8.76,3.01,11.62,5.29,1.8,1.45,2.88,3.24,2.88,5.65,0,5.37-3.47,8.77-12.19,8.77-5.53,0-9.89-1.29-14.58-4.1-.51-.31-1.03-.64-1.54-.98l-.85.84-.14.14-8.38,8.29-.06.08c5.96,4.63,13.61,8.54,25.55,8.54h1.28c1.32-.04,2.59-.12,3.83-.27,13.81-1.58,21.15-9.73,21.15-21.32,0-.7-.02-1.39-.08-2.05-.41-5.28-2.41-9.1-5.29-12.02h-.02,0Z" />
                                <path className="st17" d="M2905.28,205.29c0-14.17-11.6-25.65-25.91-25.65s-25.9,11.49-25.9,25.65,11.6,25.65,25.9,25.65c11.01,0,20.42-6.8,24.17-16.39h-15.25c-2.31,2.21-5.46,3.56-8.92,3.56-5.42,0-10.06-3.3-11.97-7.99h37.41v.06c.31-1.58.47-3.2.47-4.87v-.02h0ZM2879.37,192.49c5.43,0,10.07,3.3,11.98,7.99h-23.95c1.91-4.69,6.55-7.99,11.97-7.99Z" />
                                <path className="st17" d="M3313.36,254.89v-1.56c0-.23.12-.37.38-.37h2.34c.24,0,.38.12.38.37v12.27c0,.72.14,1.23.41,1.5.28.27.73.41,1.34.41h1.62c.97,0,1.46.49,1.46,1.45,0,.61-.12.98-.35,1.13-.24.16-.61.24-1.13.24h-2.15c-1.2,0-2.13-.21-2.8-.66-.67-.45-1.12-1.19-1.34-2.23-.49.43-1.07.76-1.76.98s-1.42.33-2.23.33c-.94,0-1.83-.14-2.64-.39-.81-.27-1.52-.66-2.13-1.21-.59-.55-1.07-1.23-1.4-2.07-.34-.84-.51-1.82-.51-2.95,0-1.35.19-2.48.59-3.4.39-.92.9-1.66,1.54-2.23.63-.57,1.38-.98,2.21-1.23.82-.25,1.71-.37,2.62-.37h3.59-.04ZM3309.55,265.93c1.38,0,2.37-.41,2.94-1.21.58-.8.87-1.93.87-3.38v-3.61h-3.59c-1.14,0-2.07.31-2.8.96-.71.65-1.09,1.8-1.09,3.46,0,1.25.32,2.21.95,2.85.63.65,1.54.96,2.7.96l.02-.02h0ZM3306.38,250.52c-.24,0-.38-.12-.38-.37v-2.64c0-.24.12-.37.38-.37h2.48c.24,0,.38.12.38.37v2.64c0,.23-.12.37-.38.37h-2.48ZM3310.84,250.52c-.24,0-.38-.12-.38-.37v-2.64c0-.24.12-.37.38-.37h2.48c.24,0,.38.12.38.37v2.64c0,.23-.12.37-.38.37h-2.48Z" />
                                <path className="st17" d="M3336.66,267.54c.24,0,.38.12.38.37v2.11c0,.24-.12.37-.38.37h-16.87c-.96,0-1.46-.49-1.46-1.45,0-.61.12-.98.36-1.13.23-.16.61-.23,1.12-.23h4.17c-.58-.55-1.05-1.25-1.46-2.11-.4-.84-.6-1.86-.6-3.05,0-.74.12-1.56.34-2.44s.63-1.7,1.22-2.44,1.4-1.37,2.41-1.86,2.31-.74,3.91-.74c1.44,0,2.68.25,3.72.78,1.05.53,1.9,1.23,2.53,2.15.12.2.08.37-.12.51l-1.62,1.31c-.19.14-.37.14-.51-.04-1.1-1.25-2.47-1.88-4.14-1.88-1.52,0-2.63.45-3.38,1.33-.73.88-1.1,1.99-1.1,3.32,0,.9.14,1.66.43,2.29.3.62.63,1.15,1.01,1.56.37.41.77.72,1.14.92.4.21.69.35.91.41h7.93l.06-.06h0Z" />
                                <path className="st17" d="M3343.78,277.58c-.23,0-.37-.12-.37-.37v-2.11c0-.23.12-.37.37-.37h4.38c.5,0,.95-.06,1.37-.16.41-.12.76-.29,1.08-.55.32-.25.53-.61.71-1.06s.26-1.02.26-1.68v-.94h-3.91c-1.06,0-2.05-.12-2.9-.37-.87-.25-1.6-.66-2.21-1.23-.61-.57-1.06-1.33-1.38-2.27-.32-.94-.47-2.11-.47-3.48s.19-2.58.57-3.6c.37-1.04.89-1.88,1.54-2.54.65-.66,1.4-1.15,2.25-1.49.84-.33,1.75-.49,2.7-.49,2.17,0,3.87.62,5.09,1.86,1.22,1.25,1.83,3.26,1.83,6.04v4.75h2.53c.49,0,.85.1,1.1.31.24.21.38.55.38,1.04,0,.62-.12,1.04-.36,1.21-.23.18-.61.27-1.12.27h-2.53v.86c0,1.13-.15,2.11-.45,2.89-.3.78-.73,1.45-1.28,1.95s-1.21.88-1.99,1.11c-.79.23-1.64.37-2.61.37h-4.54l-.04.02v.03ZM3347.75,257.73c-1.22,0-2.19.49-2.9,1.45-.71.96-1.09,2.25-1.09,3.85,0,1.72.36,2.89,1.05,3.55.69.64,1.72.98,3.1.98h3.69v-4.75c0-1.6-.3-2.83-.89-3.73-.59-.9-1.58-1.35-2.94-1.35h-.02Z" />
                                <path className="st17" d="M3368.27,270.62c-1.15,0-2.15-.16-3.04-.49-.89-.33-1.62-.84-2.23-1.54-.51.78-1.16,1.27-1.97,1.47-.81.21-1.56.31-2.23.31h-1.58c-.97,0-1.46-.49-1.46-1.45,0-.61.12-.98.35-1.13.24-.16.62-.23,1.13-.23h1.83c.28,0,.54-.06.81-.16.28-.1.52-.29.73-.55.22-.25.4-.59.54-1.02.13-.43.19-.94.19-1.58-.02-.23-.04-.47-.04-.7v-.74c0-2.77.61-4.79,1.88-6.04,1.24-1.25,2.96-1.86,5.13-1.86s3.88.62,5.13,1.86c1.24,1.25,1.87,3.26,1.87,6.04v.8c0,.27-.04.53-.06.76.02,1.23.28,2.07.75,2.52.48.45.99.66,1.52.66h1.07c.49,0,.84.1,1.1.31.24.21.38.55.38,1.04,0,.62-.12,1.04-.36,1.21s-.61.27-1.12.27h-.81c-.34,0-.71,0-1.11-.06-.39-.04-.77-.12-1.14-.24-.38-.12-.73-.29-1.09-.53-.33-.24-.63-.53-.88-.92-.62.7-1.37,1.21-2.23,1.52-.89.31-1.88.47-3,.47l-.06-.02v.02ZM3368.27,257.73c-1.36,0-2.37.45-2.98,1.35-.63.9-.93,2.13-.93,3.73,0,1.74.32,3.01.93,3.81.61.8,1.62,1.19,2.98,1.19s2.37-.39,2.98-1.19c.63-.8.92-2.07.92-3.81,0-1.6-.31-2.83-.92-3.73-.61-.9-1.62-1.35-2.98-1.35Z" />
                                <path className="st17" d="M3387.03,257.73c-.83,0-1.6.18-2.29.51s-1.3.8-1.85,1.37c-.14.18-.32.18-.52.04l-1.61-1.31c-.22-.17-.26-.33-.12-.51.69-.84,1.54-1.54,2.54-2.11,1.01-.55,2.25-.84,3.71-.84,1.68,0,3.06.25,4.15.78,1.08.53,1.93,1.19,2.56,2.05.63.84,1.07,1.82,1.32,2.93.26,1.11.38,2.27.38,3.44v1.21c.04.74.37,1.31.96,1.68.6.37,1.38.57,2.33.57h.4c.49,0,.84.1,1.1.31.24.21.38.55.38,1.04,0,.62-.12,1.04-.36,1.21-.24.18-.61.27-1.12.27h-.77c-.83,0-1.58-.18-2.23-.53s-1.13-.88-1.4-1.58c-.42.78-1.01,1.31-1.76,1.62s-1.7.47-2.8.47h-11.52c-.97,0-1.46-.49-1.46-1.44,0-.61.12-.98.35-1.13.24-.16.61-.23,1.13-.23h10.39c.69,0,1.23-.06,1.64-.16.42-.12.73-.29.95-.57.22-.27.37-.62.43-1.08.08-.45.12-1,.12-1.64,0-.94-.08-1.8-.26-2.6-.17-.78-.45-1.47-.82-2.03-.38-.57-.89-1-1.52-1.31-.63-.31-1.42-.45-2.39-.45l-.04.02h0ZM3386.32,277.03c-.24,0-.37-.12-.37-.37v-2.64c0-.23.11-.37.37-.37h2.49c.23,0,.37.12.37.37v2.64c0,.24-.12.37-.37.37h-2.49Z" />
                                <path className="st17" d="M3409.96,270.62c-1.15,0-2.15-.16-3.04-.49-.89-.33-1.62-.84-2.23-1.54-.51.78-1.17,1.27-1.97,1.47-.81.21-1.56.31-2.23.31h-1.58c-.97,0-1.46-.49-1.46-1.45,0-.61.12-.98.35-1.13.24-.16.61-.23,1.13-.23h1.83c.28,0,.53-.06.81-.16s.51-.29.73-.55.4-.59.53-1.02c.14-.43.2-.94.2-1.58-.02-.23-.04-.47-.04-.7v-.74c0-2.77.61-4.79,1.88-6.04,1.24-1.25,2.96-1.86,5.13-1.86s3.88.62,5.13,1.86c1.24,1.25,1.87,3.26,1.87,6.04,0,1.37-.16,2.56-.49,3.56-.34,1-.79,1.8-1.38,2.42-.6.63-1.33,1.09-2.19,1.39-.87.29-1.84.45-2.9.45h-.08ZM3409.96,257.73c-1.37,0-2.37.45-2.98,1.35-.63.9-.93,2.13-.93,3.73,0,1.74.32,3.01.93,3.81.61.8,1.61,1.19,2.98,1.19s2.36-.39,2.98-1.19c.63-.8.92-2.07.92-3.81,0-1.6-.31-2.83-.92-3.73-.62-.9-1.62-1.35-2.98-1.35Z" />
                                <path className="st17" d="M2737.54,264.99c-.12-.37-.22-.74-.3-1.11-.08-.39-.13-.84-.19-1.37s-.1-1.13-.12-1.86c-.02-.72-.04-1.6-.04-2.6s0-1.88.04-2.6c.02-.72.06-1.35.12-1.86.06-.53.11-.98.19-1.37s.18-.76.3-1.11c.63-1.92,1.68-3.34,3.14-4.32,1.46-.96,3.25-1.45,5.38-1.45,1.11,0,2.09.12,2.96.37.87.25,1.66.6,2.35,1.05.69.45,1.26.96,1.76,1.56.49.59.88,1.23,1.2,1.9.12.21.08.39-.12.51l-2.19,1.06c-.22.12-.39.06-.51-.18-.61-1.11-1.34-1.93-2.19-2.46-.85-.53-1.94-.8-3.26-.8-1.42,0-2.56.31-3.45.94-.89.62-1.54,1.54-1.91,2.72-.08.21-.14.49-.22.8s-.12.7-.16,1.15c-.04.45-.06,1.02-.1,1.68-.02.66-.04,1.46-.04,2.4s0,1.74.04,2.4c.02.66.06,1.23.1,1.68.04.45.1.84.16,1.15.08.31.14.59.22.8.39,1.19,1.02,2.09,1.91,2.72.89.62,2.05.94,3.45.94,1.27,0,2.39-.29,3.34-.9.94-.61,1.61-1.48,2.01-2.64.12-.41.24-.94.33-1.56.1-.62.14-1.41.14-2.33,0-.14-.08-.21-.21-.21h-4.84c-.23,0-.37-.12-.37-.37v-2.11c0-.23.12-.37.37-.37h7.97c.24,0,.38.12.38.37v1.86c0,1.11-.06,2.15-.16,3.11-.12.96-.26,1.74-.45,2.35-.62,1.88-1.66,3.32-3.14,4.34-1.48,1-3.26,1.51-5.33,1.51s-3.92-.49-5.38-1.45-2.53-2.4-3.16-4.32l-.02-.02h0Z" />
                                <path className="st17" d="M2760.7,270.37c-.24,0-.37-.12-.37-.37v-16.63c0-.23.12-.37.37-.37h2.35c.24,0,.37.12.37.37v1.78h.04c.4-.74.97-1.37,1.74-1.84s1.74-.7,2.9-.7c.71,0,1.38.12,1.99.35.63.24,1.15.55,1.6.96.18.18.2.33.08.51l-1.36,1.78c-.14.2-.32.21-.51.08-.42-.27-.85-.47-1.29-.63-.43-.14-.9-.21-1.42-.21-1.34,0-2.31.47-2.88,1.39-.59.94-.89,2.15-.89,3.67v9.5c0,.23-.11.37-.37.37h-2.35Z" />
                                <path className="st17" d="M2781.77,270.76c-1.71,0-3.15-.41-4.38-1.23-1.2-.82-2.05-1.97-2.54-3.44-.2-.61-.34-1.23-.44-1.9-.09-.66-.13-1.5-.13-2.52s.04-1.86.13-2.5c.1-.64.24-1.29.44-1.88.49-1.51,1.34-2.66,2.54-3.46,1.21-.8,2.67-1.21,4.38-1.21s3.16.41,4.38,1.21c1.21.8,2.05,1.95,2.55,3.46.2.6.33,1.23.43,1.88.1.64.14,1.48.14,2.5s-.06,1.86-.14,2.52c-.1.66-.23,1.29-.43,1.9-.5,1.46-1.34,2.62-2.55,3.44-1.2.82-2.66,1.23-4.38,1.23ZM2781.77,267.92c.97,0,1.8-.24,2.49-.7s1.16-1.13,1.46-2.01c.14-.49.26-.98.31-1.51.06-.53.1-1.19.1-2.05s-.04-1.52-.1-2.03c-.05-.51-.15-1-.31-1.48-.3-.88-.79-1.54-1.46-2.01-.69-.47-1.52-.7-2.49-.7s-1.79.23-2.48.7-1.17,1.13-1.46,2.01c-.14.49-.26.98-.32,1.48s-.1,1.19-.1,2.03.04,1.52.1,2.05.16,1.02.32,1.51c.29.88.79,1.54,1.46,2.01.69.47,1.52.7,2.48.7Z" />
                                <path className="st17" d="M2805.21,270.37c-.24,0-.37-.12-.37-.37v-1.62h-.04c-.46.72-1.09,1.31-1.88,1.74-.79.43-1.75.64-2.9.64-1.93,0-3.41-.6-4.48-1.8-1.06-1.19-1.59-2.77-1.59-4.77v-10.82c0-.23.11-.37.37-.37h2.35c.24,0,.37.12.37.37v10.1c0,1.43.32,2.52.95,3.3s1.62,1.15,2.92,1.15c1.2,0,2.15-.39,2.88-1.15.71-.78,1.09-1.82,1.09-3.11v-10.3c0-.23.11-.37.37-.37h2.35c.24,0,.37.12.37.37v16.63c0,.23-.11.37-.37.37h-2.39Z" />
                                <path className="st17" d="M2814.29,276.87c-.24,0-.38-.12-.38-.37v-23.15c0-.24.12-.37.38-.37h2.34c.24,0,.38.12.38.37v1.62h.04c.41-.7,1.03-1.27,1.81-1.72.79-.45,1.86-.66,3.16-.66,1.54,0,2.82.35,3.85,1.06,1.02.7,1.75,1.74,2.19,3.11.23.7.41,1.43.49,2.15.08.74.12,1.64.12,2.74s-.04,2.01-.12,2.76c-.08.74-.26,1.46-.49,2.17-.44,1.37-1.17,2.42-2.19,3.11-1.03.68-2.31,1.06-3.85,1.06-1.32,0-2.37-.24-3.16-.68-.78-.45-1.4-1.04-1.81-1.74h-.04v8.19c0,.23-.12.37-.38.37h-2.34v.02-.04ZM2821.27,267.93c1.95,0,3.24-.88,3.85-2.64.14-.45.25-.98.31-1.56.06-.59.1-1.27.1-2.07s-.04-1.45-.1-2.03c-.06-.59-.15-1.11-.31-1.6-.61-1.74-1.9-2.6-3.85-2.6s-3.29.86-3.89,2.6c-.13.43-.25.94-.31,1.48-.06.55-.1,1.27-.1,2.13s.04,1.58.1,2.15.16,1.06.31,1.47c.6,1.76,1.88,2.64,3.89,2.64v.04h0Z" />
                            </g>
                            <g ref={setRef("alMesk", 'square')}>
                                <rect className="st67" x="1500.09" y="246.73" width="387.91" height="112.82" />
                                <path ref={setRef("alMesk", 'text')} className="st17" d="M1565.59,288.45c.09-.31.29-.46.6-.46h5.79c.31,0,.51.15.6.46l10.58,30.36c.09.31-.01.46-.32.46h-5.98c-.31,0-.51-.15-.6-.46l-1.79-5.47h-10.95l-1.75,5.47c-.09.31-.29.46-.6.46h-6.02c-.31,0-.42-.15-.33-.46l10.77-30.36h0ZM1572.63,307.59l-3.55-10.95h-.13l-3.55,10.95h7.23ZM1586.77,288.45c0-.31.16-.46.46-.46h5.85c.3,0,.46.15.46.46v24.52c0,.18.09.28.27.28h13.8c.31,0,.46.15.46.46v5.11c0,.31-.15.46-.46.46h-20.38c-.3,0-.46-.15-.46-.46v-30.36h0ZM1622.94,288.45c0-.31.15-.46.46-.46h5.47c.37,0,.61.15.74.46l7.91,17.85h.18l7.78-17.85c.12-.31.36-.46.73-.46h5.38c.31,0,.46.15.46.46v30.36c0,.31-.15.46-.46.46h-5.19c-.31,0-.46-.15-.46-.46v-17.62h-.19l-5.79,13.2c-.19.4-.48.6-.88.6h-3.17c-.4,0-.69-.2-.88-.6l-5.79-13.2h-.19v17.62c0,.31-.15.46-.46.46h-5.19c-.31,0-.46-.15-.46-.46v-30.36h0ZM1658.02,288.45c0-.31.15-.46.46-.46h20.06c.3,0,.46.15.46.46v4.92c0,.31-.16.46-.46.46h-13.48c-.19,0-.28.09-.28.28v6.21c0,.18.09.28.28.28h11.22c.31,0,.46.15.46.46v4.88c0,.31-.15.46-.46.46h-11.22c-.19,0-.28.09-.28.28v6.49c0,.18.09.28.28.28h13.48c.3,0,.46.15.46.46v4.92c0,.31-.16.46-.46.46h-20.06c-.31,0-.46-.15-.46-.46v-30.38ZM1694.56,319.78c-1.22,0-2.43-.12-3.63-.37-1.17-.21-2.27-.51-3.31-.87-1.04-.4-2.01-.86-2.9-1.38-.86-.52-1.59-1.07-2.21-1.66-.24-.24-.26-.51-.04-.78l3.49-4c.19-.25.42-.26.69-.05,1.04.83,2.26,1.58,3.64,2.25,1.38.64,2.89.97,4.55.97s2.91-.34,3.77-1.01c.89-.7,1.34-1.61,1.34-2.71,0-.92-.34-1.67-1.02-2.25-.67-.58-1.94-1-3.81-1.24l-1.66-.23c-3.19-.43-5.64-1.39-7.36-2.9-1.69-1.53-2.53-3.69-2.53-6.49,0-1.44.26-2.74.78-3.91.52-1.2,1.26-2.21,2.21-3.04.98-.83,2.15-1.47,3.5-1.93,1.38-.46,2.91-.69,4.6-.69,2.08,0,4.04.29,5.88.87s3.42,1.38,4.74,2.39c.28.18.31.41.09.69l-2.8,4.19c-.19.25-.4.29-.65.14-1.19-.8-2.39-1.39-3.58-1.79-1.17-.4-2.4-.6-3.68-.6-1.38,0-2.43.32-3.13.97-.71.64-1.06,1.46-1.06,2.44,0,.89.35,1.63,1.06,2.21.73.58,2.01,1,3.82,1.24l1.65.23c3.25.43,5.71,1.41,7.36,2.94,1.66,1.5,2.49,3.68,2.49,6.53,0,1.41-.26,2.73-.79,3.96-.52,1.2-1.3,2.24-2.34,3.13-1.01.86-2.29,1.53-3.82,2.02-1.53.49-3.31.74-5.34.74h0ZM1711.39,288.45c0-.31.15-.46.46-.46h5.84c.31,0,.46.15.46.46v13.52l10.4-13.57c.18-.28.44-.41.78-.41h6.67c.15,0,.24.06.27.18.06.12.03.26-.09.41l-9.47,11.87,10.35,18.26c.21.37.12.55-.28.55h-6.76c-.31,0-.54-.14-.69-.41l-7.09-13.16-4.09,5.15v7.96c0,.31-.15.46-.46.46h-5.84c-.31,0-.46-.15-.46-.46v-30.36h0Z" />
                                <g className="st53">
                                    <rect className="st26" x="1484.63" y="351.27" width="518.82" height={13} />
                                </g>
                                <g className="st53">
                                    <rect className="st32" x="1484.63" y="351.27" width="518.82" height={13} />
                                </g>
                                <g className="st53">
                                    <rect className="st64" x={1446} y={239} width={273} height={13} />
                                </g>
                                <g className="st53">
                                    <rect className="st73" x={1446} y={239} width={273} height={13} />
                                </g>
                                <g className="st33">
                                    <g ref={setRef("alMesk", 'icon')}>
                                        <path className="st17" d="M1850.79,327.1v-40.33h-12.24v-15.31h-40.19v15.31h-12.25v40.33h-7.84v4.63h80.36v-4.63h-7.84ZM1798.36,327.1h-7.54v-35.7h7.54v35.7ZM1824.42,327.1h-11.93v-11.74h11.93v11.74ZM1833.84,286.76v40.33h-4.71v-16.37h-21.35v16.37h-4.71v-51.01h30.77v10.68h0ZM1846.09,327.1h-7.54v-35.7h7.54v35.7Z" />
                                        <path className="st17" d="M1815.32,300.96h-7.54v4.63h7.54v-4.63Z" />
                                        <path className="st17" d="M1815.32,280.72h-7.54v4.63h7.54v-4.63Z" />
                                        <path className="st17" d="M1829.13,280.72h-7.55v4.63h7.55v-4.63Z" />
                                        <path className="st17" d="M1815.32,290.84h-7.54v4.63h7.54v-4.63Z" />
                                        <path className="st17" d="M1829.13,300.96h-7.55v4.63h7.55v-4.63Z" />
                                        <path className="st17" d="M1829.13,290.84h-7.55v4.63h7.55v-4.63Z" />
                                    </g>
                                </g>
                                <path className="st7" d="M1602.27,246.68h284.81v111.09l73.51,70.55v146.18" />
                                <circle className="st17" cx="1960.64" cy="578.36" r="12.36" />
                            </g>
                            <g ref={setRef("alSahab2", 'square')}>
                                <rect className="st67" x={2634} y={1585} width={472} height={113} />
                                <path ref={setRef("alSahab2", 'text')} className="st17" d="M2694.41,1628.18c.09-.31.29-.46.6-.46h5.79c.31,0,.51.15.6.46l10.58,30.36c.09.31-.02.46-.32.46h-5.98c-.31,0-.51-.15-.6-.46l-1.79-5.47h-10.95l-1.75,5.47c-.09.31-.29.46-.6.46h-6.02c-.31,0-.42-.15-.33-.46l10.77-30.36ZM2701.45,1647.32l-3.55-10.95h-.13l-3.55,10.95h7.23ZM2715.59,1628.18c0-.31.16-.46.46-.46h5.85c.3,0,.46.15.46.46v24.52c0,.18.09.27.27.27h13.8c.31,0,.46.16.46.46v5.11c0,.31-.15.46-.46.46h-20.38c-.3,0-.46-.15-.46-.46v-30.36h0ZM2762.29,1659.51c-1.23,0-2.44-.13-3.63-.37-1.17-.22-2.27-.51-3.32-.88-1.04-.39-2.01-.85-2.89-1.38-.86-.52-1.6-1.07-2.21-1.65-.25-.25-.26-.51-.05-.78l3.5-4.01c.18-.24.41-.26.69-.04,1.04.83,2.25,1.58,3.63,2.25,1.38.65,2.9.97,4.56.97s2.91-.34,3.77-1.01c.89-.71,1.33-1.61,1.33-2.72,0-.92-.34-1.67-1.01-2.25-.68-.58-1.95-1-3.82-1.24l-1.65-.23c-3.19-.43-5.65-1.4-7.36-2.9-1.69-1.54-2.53-3.7-2.53-6.49,0-1.44.26-2.74.78-3.91.52-1.19,1.25-2.21,2.21-3.03.98-.83,2.14-1.48,3.49-1.94,1.38-.46,2.91-.69,4.6-.69,2.09,0,4.05.3,5.89.88,1.84.58,3.42,1.38,4.74,2.39.27.18.3.41.09.69l-2.81,4.19c-.18.24-.4.29-.64.13-1.2-.79-2.39-1.39-3.59-1.79-1.16-.4-2.39-.6-3.68-.6-1.38,0-2.42.32-3.13.97-.7.64-1.05,1.45-1.05,2.44,0,.89.35,1.62,1.05,2.2.74.59,2.01,1,3.82,1.25l1.66.23c3.25.43,5.7,1.41,7.36,2.94,1.65,1.5,2.48,3.68,2.48,6.53,0,1.41-.26,2.73-.78,3.96-.52,1.19-1.3,2.24-2.35,3.13-1.01.85-2.28,1.53-3.81,2.02-1.54.49-3.32.74-5.34.74h0ZM2787.22,1628.18c.09-.31.29-.46.59-.46h5.8c.31,0,.51.15.6.46l10.58,30.36c.09.31-.02.46-.32.46h-5.98c-.31,0-.51-.15-.6-.46l-1.8-5.47h-10.94l-1.75,5.47c-.09.31-.29.46-.6.46h-6.03c-.3,0-.41-.15-.32-.46l10.77-30.36ZM2794.25,1647.32l-3.54-10.95h-.14l-3.54,10.95h7.22ZM2808.4,1628.18c0-.31.16-.46.46-.46h5.84c.31,0,.46.15.46.46v11.73c0,.18.1.28.28.28h10.21c.19,0,.28-.1.28-.28v-11.73c0-.31.15-.46.46-.46h5.84c.31,0,.46.15.46.46v30.36c0,.31-.15.46-.46.46h-5.84c-.31,0-.46-.15-.46-.46v-12.05c0-.19-.09-.28-.28-.28h-10.21c-.18,0-.28.09-.28.28v12.05c0,.31-.15.46-.46.46h-5.84c-.3,0-.46-.15-.46-.46v-30.36ZM2847.1,1628.18c.09-.31.29-.46.6-.46h5.79c.31,0,.51.15.6.46l10.58,30.36c.09.31-.02.46-.32.46h-5.98c-.31,0-.51-.15-.6-.46l-1.79-5.47h-10.95l-1.75,5.47c-.09.31-.29.46-.6.46h-6.02c-.31,0-.42-.15-.33-.46l10.77-30.36ZM2854.14,1647.32l-3.55-10.95h-.13l-3.55,10.95h7.23ZM2868.28,1628.18c0-.31.16-.46.46-.46h12.19c3.41,0,5.92.77,7.55,2.3,1.62,1.53,2.43,3.54,2.43,6.03,0,1.71-.35,3.11-1.05,4.18-.68,1.08-1.54,1.9-2.58,2.49v.09c.52.18,1.03.49,1.52.92.52.4.96.9,1.33,1.52.4.61.72,1.31.97,2.11.24.77.37,1.61.37,2.53,0,3.1-.97,5.4-2.9,6.9-1.9,1.47-4.56,2.21-7.96,2.21h-11.87c-.3,0-.46-.15-.46-.46v-30.36h0ZM2880.1,1640.51c1.29,0,2.29-.32,2.99-.97.74-.64,1.11-1.55,1.11-2.71s-.37-2.06-1.11-2.67c-.7-.64-1.7-.97-2.99-.97h-4.78c-.18,0-.28.1-.28.28v6.76c0,.19.1.28.28.28h4.78ZM2875.04,1653.25c0,.18.1.28.28.28h5.15c1.38,0,2.43-.34,3.13-1.02.74-.7,1.1-1.67,1.1-2.89s-.36-2.15-1.1-2.86c-.7-.7-1.75-1.05-3.13-1.05h-5.15c-.18,0-.28.09-.28.27v7.27ZM2896.36,1654.26c0-.24.08-.46.23-.64l10.99-13.07c.62-.7,1.08-1.39,1.38-2.07.31-.7.46-1.45.46-2.25,0-1.04-.3-1.9-.92-2.58-.58-.67-1.41-1.01-2.48-1.01-2.18,0-3.4,1.23-3.68,3.68,0,.31-.17.43-.51.37l-5.06-.83c-.3-.06-.43-.24-.36-.55.09-1.07.36-2.1.82-3.08s1.11-1.84,1.94-2.58c.85-.73,1.87-1.32,3.03-1.75,1.2-.46,2.55-.69,4.05-.69s2.84.23,4,.69c1.2.46,2.21,1.09,3.04,1.89s1.45,1.75,1.88,2.85c.46,1.08.69,2.24.69,3.5,0,1.5-.29,2.87-.87,4.09-.55,1.2-1.32,2.36-2.3,3.5l-8.23,9.7v.1h10.94c.31,0,.46.15.46.46v4.55c0,.31-.15.46-.46.46h-18.58c-.31,0-.46-.15-.46-.46v-4.28h0Z" />
                                <g className="st53">
                                    <rect className="st72" x="2702.63" y="1580.45" width="518.82" height={13} />
                                </g>
                                <g className="st53">
                                    <rect className="st31" x="2702.63" y="1580.45" width="518.82" height={13} />
                                </g>
                                <g className="st53">
                                    <rect className="st63" x={2603} y="1692.73" width={273} height={13} />
                                </g>
                                <g className="st53">
                                    <rect className="st45" x={2603} y="1692.73" width={273} height={13} />
                                </g>
                                <g ref={setRef("alSahab2", 'icon')} className="st71">
                                    <g>
                                        <path className="st17" d="M3004.11,1668.64v-40.33h12.25v-15.31h40.19v15.31h12.24v40.33h7.84v4.63h-80.36v-4.63h7.84ZM3056.55,1668.64h7.54v-35.7h-7.54v35.7ZM3030.49,1668.64h11.93v-11.74h-11.93v11.74ZM3021.07,1628.31v40.33h4.71v-16.37h21.35v16.37h4.71v-51.01h-30.77v10.68ZM3008.82,1668.64h7.54v-35.7h-7.54v35.7Z" />
                                        <path className="st17" d="M3039.58,1642.5h7.55v4.63h-7.55v-4.63Z" />
                                        <path className="st17" d="M3039.58,1622.26h7.55v4.63h-7.55v-4.63Z" />
                                        <path className="st17" d="M3025.78,1622.26h7.54v4.63h-7.54v-4.63Z" />
                                        <path className="st17" d="M3039.58,1632.38h7.55v4.63h-7.55v-4.63Z" />
                                        <path className="st17" d="M3025.78,1642.5h7.54v4.63h-7.54v-4.63Z" />
                                        <path className="st17" d="M3025.78,1632.38h7.54v4.63h-7.54v-4.63Z" />
                                    </g>
                                </g>
                                <path className="st7" d="M2820.27,1698.04h284.82v-111.09l73.5-70.54v-146.18" />
                                <circle className="st17" cx="3178.64" cy="1366.36" r="12.36" />
                            </g>
                            <g ref={setRef("icadMall", 'square')}>
                                <rect className="st67" x="1433.53" y="554.64" width="297.83" height="86.62" />
                                <path ref={setRef("icadMall", 'text')} className="st17" d="M1464.22,587.1c0-.23.11-.34.34-.34h4.31c.23,0,.34.11.34.34v22.44c0,.23-.11.34-.34.34h-4.31c-.23,0-.34-.11-.34-.34v-22.44ZM1473.68,604.58c-.14-.36-.25-.73-.34-1.09-.07-.39-.13-.8-.17-1.26-.05-.48-.08-1.02-.1-1.63-.03-.64-.04-1.39-.04-2.28s.01-1.63.04-2.24c.02-.64.05-1.18.1-1.63.04-.48.1-.9.17-1.26.09-.36.2-.74.34-1.12.61-1.9,1.62-3.32,3.03-4.25,1.42-.95,3.16-1.43,5.2-1.43s3.64.45,5,1.36c1.38.88,2.4,2.14,3.06,3.77.11.2.05.34-.17.41l-3.71,1.67c-.2.11-.36.06-.48-.17-.31-.75-.77-1.37-1.36-1.87-.56-.5-1.33-.75-2.31-.75-.91,0-1.65.23-2.24.68-.57.45-.98,1.08-1.23,1.87-.06.2-.12.43-.17.68-.04.23-.09.52-.13.88-.03.36-.05.82-.07,1.36v4.08c.02.54.04,1,.07,1.36.04.36.09.67.13.92.05.23.11.44.17.65.25.79.66,1.42,1.23,1.87.59.45,1.33.68,2.24.68.98,0,1.75-.25,2.31-.75.59-.5,1.05-1.12,1.36-1.87.12-.23.28-.28.48-.17l3.71,1.67c.22.07.28.2.17.41-.66,1.63-1.68,2.9-3.06,3.81-1.36.88-3.03,1.33-5,1.33s-3.78-.46-5.2-1.39c-1.41-.95-2.42-2.38-3.03-4.28v-.02ZM1499.42,587.1c.07-.23.22-.34.45-.34h4.28c.23,0,.37.11.44.34l7.82,22.44c.07.23-.01.34-.24.34h-4.42c-.22,0-.37-.11-.44-.34l-1.32-4.05h-8.1l-1.29,4.05c-.07.23-.21.34-.44.34h-4.45c-.23,0-.31-.11-.24-.34l7.95-22.44ZM1504.63,601.24l-2.62-8.09h-.1l-2.62,8.09h5.34ZM1515.08,587.1c0-.23.12-.34.34-.34h8.61c2.04,0,3.74.43,5.1,1.29s2.32,2.16,2.89,3.91c.09.32.17.66.23,1.02.09.34.16.75.21,1.22.07.48.11,1.04.13,1.7.03.66.04,1.46.04,2.41s-.01,1.76-.04,2.41c-.02.66-.06,1.22-.13,1.7-.05.48-.12.9-.21,1.26-.06.34-.14.67-.23.99-.57,1.74-1.53,3.05-2.89,3.91s-3.06,1.29-5.1,1.29h-8.61c-.22,0-.34-.11-.34-.34v-22.44h0ZM1520.08,605.22c0,.14.07.2.21.2h2.61c1.16,0,2.09-.18,2.79-.54.7-.39,1.2-1.05,1.5-2.01.07-.16.12-.34.17-.54.04-.23.08-.51.1-.85.04-.34.07-.76.07-1.26.02-.52.03-1.16.03-1.9s-.01-1.37-.03-1.87c0-.5-.03-.92-.07-1.26-.02-.34-.06-.61-.1-.82-.05-.23-.1-.43-.17-.61-.3-.95-.8-1.61-1.5-1.97-.7-.39-1.63-.58-2.79-.58h-2.61c-.14,0-.21.07-.21.2v13.8h0ZM1544.53,587.1c0-.23.12-.34.34-.34h4.05c.27,0,.45.11.54.34l5.85,13.19h.14l5.74-13.19c.09-.23.28-.34.55-.34h3.98c.22,0,.34.11.34.34v22.44c0,.23-.12.34-.34.34h-3.85c-.22,0-.34-.11-.34-.34v-13.02h-.13l-4.29,9.76c-.13.29-.35.44-.64.44h-2.35c-.29,0-.51-.15-.64-.44l-4.29-9.76h-.13v13.02c0,.23-.12.34-.34.34h-3.85c-.22,0-.34-.11-.34-.34v-22.44h0ZM1576.69,587.1c.07-.23.21-.34.44-.34h4.28c.23,0,.38.11.45.34l7.82,22.44c.06.23-.02.34-.24.34h-4.42c-.23,0-.38-.11-.44-.34l-1.33-4.05h-8.09l-1.29,4.05c-.07.23-.22.34-.45.34h-4.45c-.23,0-.31-.11-.24-.34l7.96-22.44ZM1581.89,601.24l-2.62-8.09h-.1l-2.62,8.09h5.34ZM1592.35,587.1c0-.23.11-.34.34-.34h4.31c.23,0,.34.11.34.34v18.12c0,.14.07.2.21.2h10.2c.23,0,.34.11.34.34v3.77c0,.23-.11.34-.34.34h-15.06c-.23,0-.34-.11-.34-.34v-22.44h0ZM1611.04,587.1c0-.23.11-.34.34-.34h4.32c.22,0,.34.11.34.34v18.12c0,.14.07.2.2.2h10.2c.23,0,.34.11.34.34v3.77c0,.23-.11.34-.34.34h-15.06c-.23,0-.34-.11-.34-.34v-22.44h0Z" />
                                <g className="st53">
                                    <rect className="st57" x="1421.66" y="634.91" width="398.34" height="9.98" />
                                </g>
                                <g className="st53">
                                    <rect className="st75" x="1421.66" y="634.91" width="398.34" height="9.98" />
                                </g>
                                <g className="st53">
                                    <rect className="st16" x={1392} y="548.71" width="209.6" height="9.98" />
                                </g>
                                <g className="st53">
                                    <rect className="st21" x={1392} y="548.71" width="209.6" height="9.98" />
                                </g>
                                <path className="st7" d="M1511.98,554.61h218.67v85.29l56.44,54.16v24.33" />
                                <circle className="st17" cx="1787.13" cy="721.95" r="9.49" />
                                <path ref={setRef("icadMall", 'icon')} className="st17" d="M1664.58,610.71c-2.29-.11-2.24-3.22,0-3.33,6.34.02,23.06,0,29.6.01,1.79,0,3.32-1.18,3.72-2.87l3.71-15.57c.22-.89,0-1.81-.59-2.53-.58-.72-1.46-1.13-2.41-1.13-2.63,0-24.96-.1-36.4-.14l-1.82-6.51c-.43-1.56-1.9-2.64-3.57-2.64h-5.81c-.84,0-1.53.66-1.53,1.48s.69,1.48,1.53,1.48h5.81c.29,0,.54.19.62.45l6.96,25.02c-1.22.04-2.36.52-3.23,1.38-.91.89-1.39,2.07-1.37,3.33.04,2.51,2.19,4.54,4.78,4.54h2.23c-.33.67-.52,1.43-.52,2.22,0,2.86,2.4,5.18,5.36,5.18s5.35-2.33,5.35-5.18c0-.8-.18-1.55-.52-2.22h9.67c-.33.67-.52,1.43-.52,2.22,0,2.86,2.4,5.19,5.36,5.19s5.35-2.33,5.35-5.19c0-.83-.2-1.61-.55-2.3.6-.2,1.04-.75,1.04-1.4,0-.82-.69-1.48-1.53-1.48h-30.72,0ZM1673.94,615.9c0,1.22-1.03,2.22-2.29,2.22s-2.3-1-2.3-2.22,1.03-2.22,2.29-2.22h.01c1.26,0,2.29,1,2.29,2.22ZM1690.99,618.12c-1.27,0-2.3-1-2.3-2.22s1.01-2.2,2.26-2.22h.07c1.25.02,2.26,1.01,2.26,2.22s-1.03,2.22-2.29,2.22h0ZM1698.62,588.27v.02s-1.55,6.56-1.55,6.56h-5.3l.9-6.62,5.93.02s.02,0,.02.01h0ZM1682.85,604.43v-6.62h5.42l-.9,6.62h-4.52ZM1675.26,604.43l-.91-6.62h5.44v6.62h-4.53,0ZM1668.21,604.43h0c-.37,0-.7-.24-.8-.59l-1.68-6.03h5.53l.91,6.62h-3.96ZM1673.94,594.86l-.92-6.7,6.77.03v6.67h-5.85ZM1682.85,594.86v-6.66l6.73.03-.9,6.63h-5.83ZM1669.93,588.15l.92,6.71h-5.94l-1.88-6.74,6.9.03h0ZM1694.18,604.43h-3.72l.9-6.62h5l-1.44,6.05c-.08.34-.39.57-.74.57h0Z" />
                            </g>
                            <g ref={setRef("alDhabi1", 'square')}>
                                <rect className="st67" x="186.25" y="537.56" width="472.72" height="113.14" />
                                <path ref={setRef("alDhabi1", 'text')} className="st17" d="M260.41,579.33c.09-.31.29-.46.6-.46h5.8c.31,0,.51.15.6.46l10.58,30.36c.09.31-.02.46-.32.46h-5.98c-.31,0-.51-.15-.6-.46l-1.79-5.47h-10.95l-1.75,5.47c-.09.31-.29.46-.6.46h-6.03c-.31,0-.41-.15-.32-.46l10.76-30.36h0ZM267.45,598.47l-3.54-10.95h-.14l-3.54,10.95h7.22ZM281.59,579.33c0-.31.15-.46.46-.46h5.84c.31,0,.46.15.46.46v24.52c0,.18.09.28.28.28h13.8c.31,0,.46.15.46.46v5.11c0,.31-.15.46-.46.46h-20.38c-.31,0-.46-.15-.46-.46v-30.36h0ZM317.76,579.33c0-.31.15-.46.46-.46h11.64c2.76,0,5.06.58,6.9,1.75s3.14,2.93,3.91,5.29c.12.43.23.89.32,1.38.12.46.21,1.01.28,1.66.09.64.15,1.41.18,2.3s.05,1.98.05,3.27-.02,2.38-.05,3.27-.09,1.66-.18,2.3c-.06.64-.15,1.21-.28,1.7-.09.46-.2.91-.32,1.33-.77,2.36-2.07,4.12-3.91,5.29s-4.14,1.75-6.9,1.75h-11.64c-.31,0-.46-.15-.46-.46v-30.36h0ZM324.52,603.85c0,.18.09.28.28.28h3.54c1.56,0,2.82-.24,3.77-.74.95-.52,1.62-1.43,2.02-2.71.09-.21.17-.46.23-.74.06-.31.11-.69.14-1.15.06-.46.09-1.03.09-1.7.03-.71.05-1.56.05-2.58s-.02-1.85-.05-2.53c0-.67-.03-1.24-.09-1.7-.03-.46-.08-.83-.14-1.1-.06-.31-.14-.58-.23-.83-.4-1.29-1.07-2.18-2.02-2.67-.95-.52-2.21-.78-3.77-.78h-3.54c-.18,0-.28.09-.28.28v18.68h0ZM346.73,579.33c0-.31.15-.46.46-.46h5.84c.31,0,.46.15.46.46v11.73c0,.18.09.28.28.28h10.21c.18,0,.28-.09.28-.28v-11.73c0-.31.15-.46.46-.46h5.84c.31,0,.46.15.46.46v30.36c0,.31-.15.46-.46.46h-5.84c-.31,0-.46-.15-.46-.46v-12.05c0-.18-.09-.28-.28-.28h-10.21c-.18,0-.28.09-.28.28v12.05c0,.31-.15.46-.46.46h-5.84c-.31,0-.46-.15-.46-.46v-30.36ZM385.43,579.33c.09-.31.29-.46.6-.46h5.8c.31,0,.51.15.6.46l10.58,30.36c.09.31-.02.46-.32.46h-5.98c-.31,0-.51-.15-.6-.46l-1.79-5.47h-10.95l-1.75,5.47c-.09.31-.29.46-.6.46h-6.03c-.31,0-.41-.15-.32-.46l10.76-30.36h0ZM392.46,598.47l-3.54-10.95h-.14l-3.54,10.95h7.22ZM406.61,579.33c0-.31.15-.46.46-.46h12.19c3.4,0,5.92.77,7.54,2.3,1.62,1.53,2.44,3.54,2.44,6.03,0,1.72-.35,3.11-1.06,4.19-.67,1.07-1.53,1.9-2.58,2.48v.09c.52.18,1.03.49,1.52.92.52.4.97.9,1.33,1.52.4.61.72,1.32.97,2.12.24.77.37,1.61.37,2.53,0,3.1-.97,5.4-2.9,6.9-1.9,1.47-4.55,2.21-7.96,2.21h-11.87c-.31,0-.46-.15-.46-.46v-30.36h0ZM418.43,591.66c1.29,0,2.28-.32,2.99-.97.74-.64,1.1-1.55,1.1-2.71s-.37-2.05-1.1-2.67c-.71-.64-1.7-.97-2.99-.97h-4.78c-.18,0-.28.09-.28.28v6.76c0,.18.09.28.28.28h4.78ZM413.37,604.4c0,.18.09.28.28.28h5.15c1.38,0,2.42-.34,3.13-1.01.74-.71,1.1-1.67,1.1-2.9s-.37-2.15-1.1-2.85c-.7-.71-1.75-1.06-3.13-1.06h-5.15c-.18,0-.28.09-.28.28v7.27h0ZM434.69,579.33c0-.31.15-.46.46-.46h5.84c.31,0,.46.15.46.46v30.36c0,.31-.15.46-.46.46h-5.84c-.31,0-.46-.15-.46-.46v-30.36ZM466.46,586.14h-.09l-4.97,3.4c-.34.21-.51.12-.51-.28v-5.7c0-.24.11-.46.32-.64l5.24-3.77c.21-.18.49-.28.83-.28h5.15c.31,0,.46.15.46.46v30.36c0,.31-.15.46-.46.46h-5.52c-.31,0-.46-.15-.46-.46v-23.55h.01Z" />
                                <g className="st53">
                                    <rect className="st58" x="254.44" y="642.4" width="520.31" height="13.04" />
                                </g>
                                <g className="st53">
                                    <rect className="st50" x="254.44" y="642.4" width="520.31" height="13.04" />
                                </g>
                                <g className="st53">
                                    <rect className="st49" x={163} y="529.8" width="273.79" height="13.04" />
                                </g>
                                <g className="st53">
                                    <rect className="st69" x={163} y="529.8" width="273.79" height="13.04" />
                                </g>
                                <g ref={setRef("alDhabi1", 'icon')} className="st48">
                                    <g>
                                        <path className="st17" d="M621.66,618.16v-40.45h-12.28v-15.35h-40.3v15.35h-12.28v40.45h-7.86v4.64h80.59v-4.64h-7.87ZM569.07,618.16h-7.56v-35.81h7.56v35.81ZM595.21,618.16h-11.97v-11.77h11.97v11.77ZM604.65,577.71v40.45h-4.72v-16.41h-21.41v16.41h-4.72v-51.16h30.86v10.71h-.01ZM616.94,618.16h-7.56v-35.81h7.56v35.81Z" />
                                        <path className="st17" d="M586.09,591.94h-7.57v4.65h7.57v-4.65Z" />
                                        <path className="st17" d="M586.09,571.64h-7.57v4.64h7.57v-4.64Z" />
                                        <path className="st17" d="M599.93,571.64h-7.57v4.64h7.57v-4.64Z" />
                                        <path className="st17" d="M586.09,581.79h-7.57v4.64h7.57v-4.64Z" />
                                        <path className="st17" d="M599.93,591.94h-7.57v4.65h7.57v-4.65Z" />
                                        <path className="st17" d="M599.93,581.79h-7.57v4.64h7.57v-4.64Z" />
                                    </g>
                                </g>
                                <path className="st7" d="M372.42,537.51h285.63v111.41l73.72,70.75v31.77" />
                                <circle className="st17" cx="731.81" cy="756.09" r="12.4" />
                            </g>
                            <g ref={setRef("mosque", 'square')}>
                                <rect className="st67" x={1046} y={709} width={302} height={94} />
                                <path ref={setRef("mosque", 'text')} className="st17" d="M1078.21,744.97c0-.23.11-.34.34-.34h4.05c.27,0,.45.11.54.34l5.85,13.19h.13l5.75-13.19c.09-.23.27-.34.54-.34h3.98c.23,0,.34.11.34.34v22.44c0,.23-.11.34-.34.34h-3.84c-.23,0-.34-.11-.34-.34v-13.02h-.14l-4.28,9.76c-.14.29-.35.44-.65.44h-2.34c-.3,0-.51-.15-.65-.44l-4.28-9.76h-.14v13.02c0,.23-.11.34-.34.34h-3.84c-.23,0-.34-.11-.34-.34v-22.44h0ZM1112.61,768.12c-2.02,0-3.79-.46-5.31-1.39-1.49-.93-2.54-2.34-3.12-4.22-.14-.41-.25-.8-.34-1.19-.07-.39-.13-.82-.17-1.29-.05-.48-.08-1.02-.11-1.63-.02-.61-.03-1.35-.03-2.21s.01-1.6.03-2.21c.03-.61.06-1.16.11-1.63.04-.48.1-.91.17-1.29.09-.39.2-.78.34-1.19.58-1.86,1.63-3.25,3.12-4.18,1.52-.95,3.29-1.43,5.31-1.43s3.77.48,5.27,1.43c1.52.93,2.57,2.32,3.16,4.18.14.41.24.8.31,1.19.09.39.15.82.2,1.29.04.48.08,1.02.1,1.63s.04,1.35.04,2.21-.02,1.6-.04,2.21-.06,1.16-.1,1.63c-.05.48-.11.91-.2,1.29-.07.39-.17.78-.31,1.19-.59,1.88-1.64,3.29-3.16,4.22-1.5.93-3.26,1.39-5.27,1.39ZM1112.61,763.7c.95,0,1.73-.23,2.34-.68.62-.45,1.05-1.08,1.3-1.87.06-.2.12-.43.17-.68.04-.27.07-.59.1-.95.04-.39.07-.85.07-1.39.02-.54.03-1.19.03-1.94s-.01-1.39-.03-1.94c0-.54-.03-1-.07-1.36-.03-.39-.06-.7-.1-.95-.05-.27-.11-.51-.17-.71-.25-.79-.68-1.42-1.3-1.87-.61-.45-1.39-.68-2.34-.68s-1.74.23-2.35.68-1.04,1.08-1.29,1.87c-.07.2-.13.44-.17.71-.05.25-.09.57-.14.95-.02.36-.04.82-.06,1.36v3.88c.02.54.04,1.01.06,1.39.05.36.09.68.14.95.04.25.1.48.17.68.25.79.68,1.42,1.29,1.87s1.4.68,2.35.68ZM1133.28,768.12c-.91,0-1.8-.09-2.69-.27-.86-.16-1.68-.37-2.45-.65-.77-.3-1.48-.64-2.14-1.02-.63-.39-1.18-.79-1.63-1.22-.18-.18-.19-.37-.03-.58l2.58-2.96c.14-.18.31-.19.51-.03.77.61,1.67,1.17,2.69,1.67,1.02.48,2.14.71,3.36.71s2.15-.25,2.79-.75c.66-.52.99-1.19.99-2.01,0-.68-.25-1.23-.75-1.67-.5-.43-1.44-.74-2.82-.92l-1.23-.17c-2.36-.32-4.17-1.03-5.44-2.14-1.25-1.13-1.87-2.73-1.87-4.79,0-1.07.19-2.03.58-2.89.38-.88.93-1.63,1.63-2.24.73-.61,1.59-1.09,2.59-1.43,1.02-.34,2.15-.51,3.4-.51,1.54,0,2.99.21,4.35.65,1.36.43,2.52,1.02,3.5,1.77.2.14.23.31.07.51l-2.08,3.09c-.13.18-.29.21-.47.1-.89-.59-1.77-1.03-2.65-1.33-.87-.3-1.77-.44-2.72-.44-1.02,0-1.8.24-2.32.71s-.78,1.08-.78,1.8c0,.66.26,1.2.78,1.63.55.43,1.49.74,2.83.92l1.22.17c2.4.32,4.22,1.04,5.44,2.18,1.22,1.11,1.84,2.72,1.84,4.83,0,1.04-.2,2.02-.58,2.92-.39.88-.97,1.65-1.74,2.31-.74.64-1.69,1.13-2.82,1.5-1.13.36-2.45.54-3.94.54h0ZM1161.73,769.41c-.07.07-.15.1-.24.1-.09.02-.18-.01-.27-.1l-2.35-2.35c-1.41.7-2.97,1.05-4.69,1.05-2.02,0-3.79-.46-5.31-1.39-1.49-.93-2.53-2.34-3.12-4.22-.14-.41-.25-.8-.34-1.19-.07-.39-.13-.82-.17-1.29-.05-.48-.08-1.02-.11-1.63-.02-.61-.03-1.35-.03-2.21s.01-1.6.03-2.21c.03-.61.06-1.16.11-1.63.04-.48.1-.91.17-1.29.09-.39.2-.78.34-1.19.59-1.86,1.63-3.25,3.12-4.18,1.52-.95,3.29-1.43,5.31-1.43s3.79.46,5.27,1.39c1.49.93,2.55,2.34,3.16,4.22.14.41.24.8.31,1.19.09.39.15.82.2,1.29s.08,1.02.1,1.63.04,1.35.04,2.21-.02,1.6-.04,2.21-.05,1.16-.1,1.63-.11.91-.2,1.29c-.07.39-.17.78-.31,1.19-.09.25-.18.49-.27.71-.09.23-.19.45-.31.68l2.42,2.38c.15.16.15.32,0,.48l-2.72,2.65h0ZM1154.18,763.73c.47,0,.88-.04,1.22-.14l-1.46-1.46c-.16-.16-.16-.32,0-.48l2.72-2.58c.18-.16.35-.16.51,0l.92.92c.04-.39.08-.87.1-1.46.02-.61.03-1.39.03-2.35,0-.75-.01-1.39-.03-1.94,0-.54-.02-1.01-.07-1.39-.02-.39-.05-.7-.1-.95-.05-.27-.1-.51-.17-.71-.25-.79-.69-1.42-1.33-1.87-.61-.45-1.39-.68-2.34-.68s-1.75.23-2.38.68c-.61.45-1.04,1.08-1.29,1.87-.07.2-.13.44-.17.71-.05.25-.09.57-.14.95-.02.39-.05.85-.07,1.39v3.88c.02.54.05,1.01.07,1.39.05.39.09.71.14.99.04.25.1.48.17.68.25.79.68,1.42,1.29,1.87.63.45,1.43.68,2.38.68h0ZM1175.83,768.12c-1.29,0-2.48-.19-3.57-.58-1.08-.39-2.03-.95-2.82-1.7-.77-.75-1.38-1.68-1.83-2.79-.44-1.11-.65-2.38-.65-3.81v-14.28c0-.23.11-.34.34-.34h4.32c.22,0,.34.11.34.34v14.42c0,1.38.35,2.45,1.05,3.2s1.64,1.12,2.82,1.12,2.09-.37,2.79-1.12,1.06-1.81,1.06-3.2v-14.42c0-.23.11-.34.34-.34h4.31c.23,0,.34.11.34.34v14.28c0,1.43-.22,2.7-.68,3.81-.43,1.11-1.04,2.04-1.83,2.79-.77.75-1.7,1.32-2.79,1.7-1.07.39-2.24.58-3.54.58ZM1188.98,744.97c0-.23.11-.34.34-.34h14.82c.23,0,.34.11.34.34v3.64c0,.23-.11.34-.34.34h-9.96c-.14,0-.21.07-.21.2v4.59c0,.14.07.2.21.2h8.29c.23,0,.34.11.34.34v3.6c0,.23-.11.34-.34.34h-8.29c-.14,0-.21.07-.21.2v4.79c0,.14.07.2.21.2h9.96c.23,0,.34.11.34.34v3.64c0,.23-.11.34-.34.34h-14.82c-.23,0-.34-.11-.34-.34v-22.44.02Z" />
                                <g className="st53">
                                    <rect className="st79" x="1013.98" y="795.93" width="429.44" height="10.76" />
                                </g>
                                <g className="st53">
                                    <rect className="st62" x="1013.98" y="795.93" width="429.44" height="10.76" />
                                </g>
                                <g className="st53">
                                    <rect className="st47" x={982} y={703} width="225.97" height="10.76" />
                                </g>
                                <g className="st53">
                                    <rect className="st29" x={982} y={703} width="225.97" height="10.76" />
                                </g>
                                <path className="st7" d="M1111.35,709.36h235.75v91.95h324.9v28.19" />
                                <path className="st8" d="M1291.69,783.09h-35.02c-.31,0-.61-.13-.84-.36-.22-.23-.34-.55-.34-.88v-24.42c0-.33.12-.65.34-.88.23-.23.53-.36.84-.36h35.02c.31,0,.61.13.83.36.23.23.35.55.35.88v24.42c0,.33-.12.65-.35.88-.22.23-.52.36-.83.36ZM1257.86,780.59h32.64v-21.93h-32.64v21.93Z" />
                                <g ref={setRef("mosque", 'icon')}>
                                    <path className="st8" d="M1305.13,782.75h-15.55c-.31,0-.62-.13-.84-.35s-.36-.53-.36-.85.13-.63.36-.85c.22-.23.53-.35.84-.35h14.35v-41.54h-13.15v2.58c0,.32-.13.62-.35.85s-.53.35-.85.35-.62-.13-.84-.35-.36-.53-.36-.85v-3.79c0-.32.13-.62.36-.85.22-.23.53-.35.84-.35h15.55c.32,0,.62.13.85.35.22.23.35.53.35.85v43.95c0,.32-.13.62-.35.85-.23.23-.53.35-.85.35h0Z" />
                                    <path className="st8" d="M1306.63,783.09h-54.43c-.32,0-.62-.16-.85-.44-.22-.28-.35-.66-.35-1.06s.13-.78.35-1.06c.23-.28.53-.44.85-.44h54.43c.31,0,.62.16.84.44.23.28.35.66.35,1.06s-.12.78-.35,1.06c-.22.28-.53.44-.84.44Z" />
                                    <path className="st8" d="M1288.7,758.5h-31.86c-1.15,0-2.26-.47-3.07-1.31-.82-.84-1.28-1.98-1.28-3.17s.46-2.33,1.28-3.17c.81-.84,1.92-1.31,3.07-1.31h31.86c.31,0,.61.13.83.36.23.23.35.54.35.86s-.12.63-.35.86c-.22.23-.52.36-.83.36h-31.86c-.53,0-1.04.22-1.41.6s-.58.91-.58,1.45.21,1.07.58,1.45c.37.39.88.6,1.41.6h31.86c.31,0,.61.13.83.36.23.23.35.54.35.86s-.12.63-.35.86c-.22.23-.52.36-.83.36v-.02Z" />
                                    <path className="st8" d="M1291.52,758.5h-31.87c-.31,0-.61-.13-.83-.36s-.34-.54-.34-.86.12-.63.34-.86.52-.36.83-.36h31.87c.26,0,.52-.05.76-.16.24-.1.46-.26.65-.45.18-.19.33-.42.43-.67.1-.25.15-.52.15-.79s-.05-.54-.15-.79-.25-.48-.43-.67c-.19-.19-.41-.34-.65-.45-.24-.1-.5-.16-.76-.16h-31.87c-.31,0-.61-.13-.83-.36s-.34-.54-.34-.86.12-.63.34-.86.52-.36.83-.36h31.87c1.15,0,2.26.47,3.07,1.31.81.84,1.27,1.98,1.27,3.17s-.46,2.33-1.27,3.17c-.81.84-1.92,1.31-3.07,1.31v.06Z" />
                                    <path className="st8" d="M1255.16,751.35c-.31,0-.61-.13-.83-.35-.22-.23-.34-.53-.34-.85,0-5.82,3.08-10.24,9.14-13.16,4.22-2.03,6.57-4.67,7.8-6.52,1.33-2.01,1.67-3.57,1.68-3.59.06-.31.24-.58.5-.76.27-.17.58-.23.89-.17.3.07.57.25.74.52s.22.59.16.9c-.06.3-1.6,7.38-10.77,11.79-5.17,2.48-7.79,6.18-7.79,10.98,0,.32-.13.62-.35.85-.22.22-.52.35-.83.35h0Z" />
                                    <path className="st8" d="M1293.19,751.35c-.31,0-.61-.13-.83-.35-.22-.23-.34-.53-.34-.85,0-4.8-2.62-8.49-7.79-10.98-9.18-4.41-10.71-11.49-10.77-11.79-.07-.31-.01-.64.16-.9.17-.27.44-.45.74-.52.31-.07.62,0,.88.17s.45.45.51.76c.01.06,1.42,6.23,9.48,10.1,6.06,2.92,9.14,7.34,9.14,13.16,0,.32-.13.62-.35.85-.22.22-.52.35-.83.35h0Z" />
                                    <path className="st8" d="M1304.27,737.89c-.2,0-.4-.05-.57-.15-.18-.1-.33-.24-.43-.42-.11-.17-.17-.37-.18-.58-.01-.2.03-.41.12-.59.5-1.03.76-2.17.76-3.32,0-1.03-1.14-1.69-2.87-2.58-.57-.29-1.15-.59-1.65-.92-1.2-.78-2.17-1.93-2.84-2.9-.65.93-1.58,2.03-2.68,2.73-.54.34-1.14.64-1.71.93-1.85.93-2.97,1.58-2.97,2.74s.24,2.23.72,3.24c.07.14.11.3.12.46s-.02.32-.07.47c-.05.15-.13.29-.23.4-.1.12-.23.21-.37.28s-.29.11-.45.12c-.15,0-.31-.01-.45-.07-.15-.05-.29-.14-.4-.24-.12-.11-.21-.23-.28-.38-.63-1.34-.95-2.8-.95-4.28,0-2.74,2.37-3.93,4.28-4.89.55-.28,1.07-.54,1.51-.82,1.37-.86,2.54-2.84,2.87-3.53.1-.2.25-.37.44-.49.18-.12.4-.18.62-.18h0c.22,0,.44.06.62.18.19.12.34.29.44.49.01.02,1.24,2.53,3.04,3.7.41.27.92.52,1.45.8,1.86.95,4.17,2.14,4.17,4.73,0,1.52-.34,3.02-1,4.38-.1.2-.25.37-.44.49-.18.12-.4.18-.62.18v.02Z" />
                                    <path className="st8" d="M1279.66,782.75c-.34,0-.66-.13-.89-.35s-.37-.53-.37-.85v-10.31c0-1.07-.44-2.1-1.23-2.86-.8-.76-1.87-1.18-2.99-1.18s-2.2.43-2.99,1.18c-.79.76-1.24,1.79-1.24,2.86v10.31c0,.32-.13.62-.36.85-.24.23-.56.35-.89.35s-.65-.13-.88-.35c-.24-.22-.37-.53-.37-.85v-10.31c0-1.71.71-3.34,1.97-4.55,1.26-1.21,2.97-1.88,4.76-1.88s3.49.68,4.76,1.88c1.26,1.21,1.97,2.84,1.97,4.55v10.31c0,.32-.13.62-.37.85-.23.23-.55.35-.88.35Z" />
                                </g>
                                <circle className="st17" cx="1672.24" cy="827.23" r="10.23" />
                            </g>
                            <g ref={setRef("sportsHall", 'square')}>
                                <rect className="st67" x="1994.5" y="637.24" width="343.27" height="87.38" />
                                <path ref={setRef("sportsHall", 'text')} className="st17" d="M2112.16,692.66c-.91,0-1.8-.09-2.69-.27-.86-.16-1.67-.37-2.45-.65-.77-.29-1.48-.63-2.14-1.02-.63-.39-1.18-.79-1.63-1.22-.18-.18-.19-.37-.03-.58l2.58-2.96c.14-.18.31-.19.51-.03.77.61,1.67,1.17,2.69,1.67,1.02.48,2.14.71,3.36.71s2.16-.25,2.79-.75c.66-.52.99-1.19.99-2.01,0-.68-.25-1.24-.75-1.67s-1.44-.74-2.82-.92l-1.23-.17c-2.35-.32-4.17-1.03-5.44-2.14-1.24-1.13-1.87-2.73-1.87-4.79,0-1.07.2-2.03.58-2.89.39-.88.93-1.63,1.63-2.24.73-.61,1.59-1.09,2.59-1.43,1.02-.34,2.15-.51,3.4-.51,1.54,0,2.99.22,4.35.65,1.36.43,2.53,1.02,3.5,1.77.2.14.23.31.07.51l-2.08,3.09c-.13.18-.29.22-.47.1-.89-.59-1.77-1.03-2.65-1.33-.86-.29-1.77-.44-2.72-.44-1.02,0-1.79.24-2.32.71-.52.48-.78,1.08-.78,1.8,0,.66.26,1.2.78,1.63.55.43,1.49.74,2.83.92l1.22.17c2.4.32,4.22,1.04,5.44,2.18,1.22,1.11,1.84,2.72,1.84,4.83,0,1.04-.2,2.02-.58,2.92-.39.88-.96,1.66-1.74,2.31-.74.64-1.68,1.13-2.82,1.5-1.13.36-2.45.54-3.94.54h0ZM2124.93,692.28c-.22,0-.34-.11-.34-.34v-22.44c0-.23.12-.34.34-.34h8.98c1.25,0,2.37.18,3.37.54.99.36,1.84.87,2.55,1.53.7.66,1.23,1.44,1.59,2.35.37.91.55,1.92.55,3.03s-.2,2.09-.58,2.99c-.36.91-.9,1.69-1.6,2.35-.68.66-1.52,1.17-2.51,1.53-1,.36-2.12.54-3.37.54h-4.11c-.14,0-.21.07-.21.2v7.72c0,.23-.11.34-.34.34h-4.32,0ZM2133.6,679.7c1.07,0,1.9-.27,2.49-.82.58-.57.88-1.33.88-2.28s-.3-1.71-.88-2.28c-.59-.57-1.42-.85-2.49-.85h-3.8c-.14,0-.21.07-.21.2v5.81c0,.14.07.2.21.2h3.8v.02ZM2153.65,692.66c-2.02,0-3.79-.46-5.31-1.39-1.49-.93-2.54-2.33-3.13-4.22-.13-.41-.25-.8-.34-1.19-.06-.39-.12-.82-.17-1.29-.04-.48-.08-1.02-.1-1.63s-.03-1.35-.03-2.21.01-1.6.03-2.21.06-1.16.1-1.63c.05-.48.11-.91.17-1.29.09-.39.21-.78.34-1.19.59-1.86,1.64-3.25,3.13-4.18,1.52-.95,3.29-1.43,5.31-1.43s3.77.48,5.27,1.43c1.51.93,2.57,2.32,3.16,4.18.13.41.24.8.3,1.19.09.39.16.82.21,1.29.04.48.08,1.02.1,1.63s.03,1.35.03,2.21-.01,1.6-.03,2.21-.06,1.16-.1,1.63c-.05.48-.12.91-.21,1.29-.06.39-.17.78-.3,1.19-.59,1.88-1.65,3.29-3.16,4.22-1.5.93-3.26,1.39-5.27,1.39ZM2153.65,688.24c.95,0,1.73-.23,2.34-.68s1.04-1.08,1.29-1.87c.07-.2.13-.43.17-.68.05-.27.08-.59.11-.95.04-.39.06-.85.06-1.39.03-.54.04-1.19.04-1.94s-.01-1.39-.04-1.94c0-.54-.02-1-.06-1.36-.03-.39-.06-.7-.11-.95-.04-.27-.1-.51-.17-.71-.25-.79-.68-1.42-1.29-1.87s-1.39-.68-2.34-.68-1.74.23-2.35.68-1.04,1.08-1.29,1.87c-.07.2-.13.44-.17.71-.05.25-.09.57-.14.95-.02.36-.04.82-.07,1.36v3.88c.03.54.05,1.01.07,1.39.05.36.09.68.14.95.04.25.1.48.17.68.25.79.68,1.42,1.29,1.87s1.39.68,2.35.68ZM2179.31,692.28c-.25,0-.42-.11-.51-.34l-3.98-8.47h-3.09c-.14,0-.2.07-.2.2v8.26c0,.23-.12.34-.34.34h-4.32c-.23,0-.34-.11-.34-.34v-22.44c0-.23.11-.34.34-.34h9.21c1.18,0,2.25.18,3.2.54.97.34,1.8.83,2.48,1.46.7.64,1.24,1.39,1.6,2.28.38.88.58,1.85.58,2.89,0,1.5-.37,2.8-1.09,3.91-.73,1.11-1.74,1.95-3.03,2.52l4.56,9.11c.04.11.04.22,0,.31-.05.07-.13.1-.24.1h-4.83,0ZM2175.81,679.23c.95,0,1.71-.26,2.28-.78s.85-1.22.85-2.11-.28-1.55-.85-2.07-1.33-.78-2.28-.78h-4.08c-.14,0-.2.07-.2.2v5.34c0,.14.06.2.2.2h4.08ZM2192.78,692.28c-.23,0-.34-.11-.34-.34v-18.12c0-.14-.07-.2-.2-.2h-5.85c-.23,0-.34-.11-.34-.34v-3.77c0-.23.11-.34.34-.34h17.1c.23,0,.34.11.34.34v3.77c0,.23-.11.34-.34.34h-5.85c-.13,0-.2.07-.2.2v18.12c0,.23-.12.34-.34.34h-4.32,0ZM2214.39,692.66c-.91,0-1.8-.09-2.68-.27-.87-.16-1.68-.37-2.45-.65-.77-.29-1.49-.63-2.14-1.02-.64-.39-1.18-.79-1.64-1.22-.18-.18-.19-.37-.03-.58l2.58-2.96c.14-.18.31-.19.51-.03.77.61,1.67,1.17,2.69,1.67,1.02.48,2.14.71,3.37.71s2.15-.25,2.78-.75c.66-.52.99-1.19.99-2.01,0-.68-.25-1.24-.75-1.67s-1.44-.74-2.82-.92l-1.22-.17c-2.36-.32-4.18-1.03-5.44-2.14-1.25-1.13-1.87-2.73-1.87-4.79,0-1.07.19-2.03.57-2.89.39-.88.93-1.63,1.64-2.24.72-.61,1.58-1.09,2.58-1.43,1.02-.34,2.15-.51,3.4-.51,1.54,0,2.99.22,4.35.65,1.36.43,2.53,1.02,3.5,1.77.21.14.23.31.07.51l-2.07,3.09c-.14.18-.3.22-.48.1-.88-.59-1.77-1.03-2.65-1.33-.86-.29-1.77-.44-2.72-.44-1.02,0-1.79.24-2.31.71-.52.48-.78,1.08-.78,1.8,0,.66.26,1.2.78,1.63.54.43,1.48.74,2.82.92l1.22.17c2.41.32,4.22,1.04,5.44,2.18,1.23,1.11,1.84,2.72,1.84,4.83,0,1.04-.19,2.02-.58,2.92-.38.88-.96,1.66-1.73,2.31-.75.64-1.69,1.13-2.82,1.5-1.14.36-2.45.54-3.95.54h0ZM2234.86,669.5c0-.23.11-.34.34-.34h4.32c.23,0,.34.11.34.34v8.67c0,.14.07.2.2.2h7.55c.14,0,.2-.07.2-.2v-8.67c0-.23.12-.34.34-.34h4.32c.23,0,.34.11.34.34v22.44c0,.23-.11.34-.34.34h-4.32c-.22,0-.34-.11-.34-.34v-8.91c0-.14-.06-.2-.2-.2h-7.55c-.13,0-.2.07-.2.2v8.91c0,.23-.11.34-.34.34h-4.32c-.23,0-.34-.11-.34-.34v-22.44ZM2263.46,669.5c.07-.23.22-.34.44-.34h4.29c.22,0,.37.11.44.34l7.82,22.44c.07.23-.01.34-.24.34h-4.42c-.22,0-.37-.11-.44-.34l-1.33-4.05h-8.09l-1.29,4.05c-.07.23-.22.34-.44.34h-4.46c-.22,0-.3-.11-.23-.34l7.95-22.44ZM2268.66,683.65l-2.61-8.09h-.11l-2.61,8.09h5.33ZM2279.12,669.5c0-.23.11-.34.34-.34h4.32c.23,0,.34.11.34.34v18.12c0,.14.07.2.2.2h10.2c.23,0,.34.11.34.34v3.77c0,.23-.11.34-.34.34h-15.06c-.23,0-.34-.11-.34-.34v-22.44h0ZM2297.81,669.5c0-.23.12-.34.34-.34h4.32c.23,0,.34.11.34.34v18.12c0,.14.07.2.21.2h10.2c.22,0,.34.11.34.34v3.77c0,.23-.12.34-.34.34h-15.07c-.22,0-.34-.11-.34-.34v-22.44h0Z" />
                                <g className="st53">
                                    <rect className="st3" x={1904} y="718.27" width="403.28" height="10.1" />
                                </g>
                                <g className="st53">
                                    <rect className="st27" x={1904} y="718.27" width="403.28" height="10.1" />
                                </g>
                                <g className="st53">
                                    <rect className="st30" x="2161.46" y={631} width="212.21" height="10.1" />
                                </g>
                                <g className="st53">
                                    <rect className="st61" x="2161.46" y={631} width="212.21" height="10.1" />
                                </g>
                                <path className="st7" d="M2215.84,636.97h-221.39v86.35l-57.13,54.83v24.63" />
                                <circle className="st17" cx="1937.28" cy="806.39" r="9.61" />
                                <path ref={setRef("sportsHall", 'icon')} className="st17" d="M2061.44,665.48c-4.13-4.13-9.61-6.4-15.45-6.4s-11.32,2.27-15.45,6.4c-4.12,4.13-6.39,9.61-6.39,15.45s2.27,11.32,6.39,15.45c4.13,4.13,9.62,6.4,15.45,6.4s11.32-2.27,15.45-6.4c4.12-4.13,6.4-9.61,6.4-15.45s-2.28-11.32-6.4-15.45ZM2065.25,681.81c-.25-.17-.51-.33-.77-.48-5.56-3.32-12.19-4-18.29-1.9-2.38-2.06-4.19-4.62-5.32-7.47,2.52-.84,5.18-1.4,7.92-1.68,4.87-.5,9.73-.05,14.08,1.29,1.57,2.83,2.41,6.02,2.41,9.35,0,.29-.01.59-.03.88h0ZM2045.33,700.2c-3.4-.11-6.65-1.1-9.48-2.86,3.54-1.86,6.47-4.64,8.56-8.13,1.37-2.3,2.3-4.79,2.75-7.4,3.01-1.01,6.15-1.26,9.19-.76-.58,2.6-1.46,5.17-2.62,7.67-2.08,4.47-4.98,8.44-8.4,11.49h0ZM2059.63,667.29c.34.34.67.7.98,1.06-3.85-.82-7.96-1.03-12.08-.61-2.92.3-5.75.9-8.45,1.79-.38-1.52-.57-3.09-.57-4.7,0-.71.03-1.41.11-2.11,2.02-.71,4.17-1.07,6.37-1.07,5.15,0,9.99,2.01,13.64,5.65h0ZM2032.35,667.29c1.39-1.38,2.94-2.53,4.62-3.42-.02.32-.02.64-.02.96,0,6.45,2.79,12.47,7.68,16.63-.41,2.27-1.22,4.43-2.42,6.43-.39.65-.81,1.26-1.26,1.85-1.87-1.8-3.58-3.83-5.09-6.05-2.84-4.2-4.79-8.86-5.62-13.48-.02-.1-.05-.2-.09-.29.65-.93,1.39-1.81,2.2-2.63h0ZM2026.71,680.93c0-2.69.54-5.29,1.58-7.68,1.08,4.11,2.93,8.17,5.45,11.89,1.63,2.4,3.49,4.6,5.53,6.54-1.65,1.65-3.59,2.98-5.76,3.95-.4-.34-.78-.69-1.16-1.06-3.64-3.64-5.64-8.49-5.64-13.64h0ZM2059.63,694.57c-2.86,2.86-6.47,4.71-10.38,5.38,2.71-2.91,5.03-6.36,6.8-10.15,1.24-2.66,2.18-5.4,2.79-8.17,1.5.45,2.95,1.09,4.33,1.91.6.36,1.18.75,1.74,1.17-.73,3.72-2.54,7.13-5.28,9.87h0Z" />
                            </g>
                            <g ref={setRef("alNaseem", 'square')}>
                                <rect className="st67" x="2392.3" y="803.59" width="473.68" height="113.37" />
                                <path ref={setRef("alNaseem", 'text')} className="st17" d="M2472.04,846.18c.09-.31.29-.46.6-.46h5.79c.31,0,.51.15.6.46l10.58,30.36c.09.31-.01.46-.32.46h-5.98c-.31,0-.51-.15-.6-.46l-1.79-5.47h-10.95l-1.75,5.47c-.09.31-.29.46-.6.46h-6.02c-.31,0-.42-.15-.33-.46l10.77-30.36ZM2479.08,865.32l-3.55-10.95h-.13l-3.55,10.95h7.23ZM2493.22,846.18c0-.31.16-.46.46-.46h5.85c.3,0,.46.15.46.46v24.52c0,.18.09.28.27.28h13.8c.31,0,.46.15.46.46v5.11c0,.31-.15.46-.46.46h-20.38c-.3,0-.46-.15-.46-.46v-30.36h0ZM2529.39,846.18c0-.31.15-.46.46-.46h5.52c.33,0,.59.15.78.46l11.04,19.69h.23v-19.69c0-.31.15-.46.46-.46h5.2c.3,0,.46.15.46.46v30.36c0,.31-.16.46-.46.46h-5.48c-.34,0-.6-.15-.78-.46l-11.09-19.64h-.23v19.64c0,.31-.15.46-.46.46h-5.19c-.31,0-.46-.15-.46-.46v-30.36ZM2567.95,846.18c.09-.31.29-.46.59-.46h5.8c.31,0,.51.15.6.46l10.58,30.36c.09.31-.02.46-.32.46h-5.98c-.31,0-.51-.15-.6-.46l-1.8-5.47h-10.94l-1.75,5.47c-.09.31-.29.46-.6.46h-6.03c-.3,0-.41-.15-.32-.46l10.77-30.36ZM2574.98,865.32l-3.54-10.95h-.14l-3.54,10.95h7.22ZM2599.67,877.51c-1.23,0-2.44-.12-3.64-.37-1.16-.22-2.27-.51-3.31-.87-1.04-.4-2.01-.86-2.9-1.38-.86-.52-1.59-1.07-2.21-1.66-.24-.25-.26-.51-.04-.78l3.49-4c.19-.24.42-.26.69-.05,1.05.83,2.26,1.58,3.64,2.25,1.38.64,2.9.97,4.55.97s2.92-.34,3.77-1.01c.89-.71,1.34-1.61,1.34-2.71,0-.92-.34-1.67-1.01-2.25-.68-.58-1.95-1-3.82-1.24l-1.66-.23c-3.19-.43-5.64-1.4-7.36-2.9-1.68-1.53-2.53-3.7-2.53-6.49,0-1.44.26-2.74.78-3.91.53-1.2,1.26-2.21,2.21-3.04.98-.83,2.15-1.47,3.5-1.93,1.38-.46,2.91-.69,4.6-.69,2.08,0,4.05.29,5.89.87,1.84.58,3.42,1.38,4.73,2.39.28.18.31.41.1.69l-2.81,4.19c-.18.24-.4.29-.64.14-1.2-.8-2.4-1.4-3.59-1.79-1.17-.4-2.39-.6-3.68-.6-1.38,0-2.42.32-3.13.97-.71.64-1.06,1.46-1.06,2.44,0,.89.35,1.62,1.06,2.21.74.58,2.01,1,3.82,1.24l1.65.23c3.25.43,5.71,1.41,7.36,2.94,1.66,1.5,2.49,3.68,2.49,6.53,0,1.41-.26,2.73-.78,3.96-.53,1.2-1.31,2.24-2.35,3.13-1.01.86-2.28,1.53-3.82,2.02-1.53.49-3.31.74-5.33.74h0ZM2616.49,846.18c0-.31.15-.46.46-.46h20.06c.3,0,.46.15.46.46v4.92c0,.31-.16.46-.46.46h-13.48c-.19,0-.28.09-.28.28v6.21c0,.18.09.28.28.28h11.22c.31,0,.46.15.46.46v4.88c0,.31-.15.46-.46.46h-11.22c-.19,0-.28.09-.28.28v6.49c0,.18.09.28.28.28h13.48c.3,0,.46.15.46.46v4.92c0,.31-.16.46-.46.46h-20.06c-.31,0-.46-.15-.46-.46v-30.38ZM2642.5,846.18c0-.31.15-.46.46-.46h20.06c.3,0,.46.15.46.46v4.92c0,.31-.16.46-.46.46h-13.48c-.19,0-.28.09-.28.28v6.21c0,.18.09.28.28.28h11.22c.31,0,.46.15.46.46v4.88c0,.31-.15.46-.46.46h-11.22c-.19,0-.28.09-.28.28v6.49c0,.18.09.28.28.28h13.48c.3,0,.46.15.46.46v4.92c0,.31-.16.46-.46.46h-20.06c-.31,0-.46-.15-.46-.46v-30.38ZM2668.51,846.18c0-.31.15-.46.46-.46h5.47c.37,0,.62.15.74.46l7.91,17.85h.19l7.77-17.85c.12-.31.37-.46.74-.46h5.38c.3,0,.46.15.46.46v30.36c0,.31-.16.46-.46.46h-5.2c-.31,0-.46-.15-.46-.46v-17.62h-.18l-5.8,13.2c-.18.4-.48.6-.87.6h-3.18c-.4,0-.69-.2-.87-.6l-5.8-13.2h-.18v17.62c0,.31-.16.46-.46.46h-5.2c-.31,0-.46-.15-.46-.46v-30.36h0Z" />
                                <g className="st53">
                                    <rect className="st20" x="2460.63" y="798.84" width="521.37" height="13.06" />
                                </g>
                                <g className="st53">
                                    <rect className="st60" x="2460.63" y="798.84" width="521.37" height="13.06" />
                                </g>
                                <g className="st53">
                                    <rect className="st44" x={2369} y="911.67" width="274.34" height="13.06" />
                                </g>
                                <g className="st53">
                                    <rect className="st56" x={2369} y="911.67" width="274.34" height="13.06" />
                                </g>
                                <g ref={setRef("alNaseem",'icon')} className="st6">
                                    <g>
                                        <path className="st17" d="M2760.88,885.92v-40.53h12.31v-15.38h40.38v15.38h12.31v40.53h7.88v4.65h-80.76v-4.65h7.88ZM2813.57,885.92h7.58v-35.88h-7.58v35.88ZM2787.38,885.92h11.99v-11.79h-11.99v11.79ZM2777.92,845.38v40.53h4.73v-16.45h21.46v16.45h4.73v-51.26h-30.92v10.73ZM2765.61,885.92h7.58v-35.88h-7.58v35.88Z" />
                                        <path className="st17" d="M2796.52,859.65h7.59v4.65h-7.59v-4.65Z" />
                                        <path className="st17" d="M2796.52,839.31h7.59v4.65h-7.59v-4.65Z" />
                                        <path className="st17" d="M2782.65,839.31h7.59v4.65h-7.59v-4.65Z" />
                                        <path className="st17" d="M2796.52,849.48h7.59v4.65h-7.59v-4.65Z" />
                                        <path className="st17" d="M2782.65,859.65h7.59v4.65h-7.59v-4.65Z" />
                                        <path className="st17" d="M2782.65,849.48h7.59v4.65h-7.59v-4.65Z" />
                                    </g>
                                </g>
                                <path ref={setRef("alNaseem", 'icon')} className="st7" d="M2578.84,917.01h286.22v-111.64l73.87-70.89v-31.84" />
                                <circle className="st17" cx="2938.97" cy="697.98" r="12.42" />
                            </g>
                            <g ref={setRef('alMurjan', 'square')}>
                                <rect className="st67" x="2427.02" y="1160.03" width="473.68" height="113.37" />
                                <path ref={setRef("alMurjan", 'text')} className="st17" d="M2603.41,1202.62c.09-.3.29-.46.6-.46h5.79c.31,0,.51.16.6.46l10.58,30.36c.09.31-.02.46-.32.46h-5.98c-.31,0-.51-.15-.6-.46l-1.79-5.47h-10.95l-1.75,5.47c-.09.31-.29.46-.6.46h-6.02c-.31,0-.42-.15-.33-.46l10.77-30.36ZM2610.45,1221.76l-3.55-10.95h-.13l-3.55,10.95h7.23ZM2624.59,1202.62c0-.3.16-.46.46-.46h5.85c.3,0,.46.16.46.46v24.52c0,.19.09.28.27.28h13.8c.31,0,.46.15.46.46v5.1c0,.31-.15.46-.46.46h-20.38c-.3,0-.46-.15-.46-.46v-30.36h0ZM2660.76,1202.62c0-.3.15-.46.46-.46h5.47c.37,0,.61.16.74.46l7.91,17.85h.18l7.78-17.85c.12-.3.36-.46.73-.46h5.38c.31,0,.46.16.46.46v30.36c0,.31-.15.46-.46.46h-5.19c-.31,0-.46-.15-.46-.46v-17.61h-.19l-5.79,13.2c-.19.4-.48.6-.88.6h-3.17c-.4,0-.69-.2-.88-.6l-5.79-13.2h-.19v17.61c0,.31-.15.46-.46.46h-5.19c-.31,0-.46-.15-.46-.46v-30.36h0ZM2707.71,1233.95c-1.75,0-3.36-.26-4.83-.78s-2.75-1.29-3.82-2.3c-1.04-1.01-1.87-2.27-2.48-3.77-.59-1.51-.88-3.22-.88-5.16v-19.32c0-.3.15-.46.46-.46h5.84c.31,0,.46.16.46.46v19.51c0,1.87.48,3.31,1.43,4.32.95,1.01,2.22,1.52,3.82,1.52s2.82-.51,3.77-1.52,1.43-2.45,1.43-4.32v-19.51c0-.3.15-.46.46-.46h5.84c.3,0,.46.16.46.46v19.32c0,1.94-.31,3.65-.92,5.16-.59,1.5-1.41,2.76-2.49,3.77-1.04,1.01-2.3,1.78-3.77,2.3-1.44.52-3.03.78-4.78.78ZM2742.78,1233.44c-.33,0-.56-.15-.69-.46l-5.38-11.45h-4.18c-.19,0-.28.09-.28.28v11.17c0,.31-.15.46-.46.46h-5.84c-.31,0-.46-.15-.46-.46v-30.36c0-.3.15-.46.46-.46h12.46c1.6,0,3.04.25,4.33.74,1.32.46,2.44,1.12,3.36,1.98.95.86,1.67,1.88,2.16,3.08.52,1.2.78,2.5.78,3.91,0,2.02-.49,3.79-1.47,5.29s-2.35,2.64-4.1,3.4l6.17,12.33c.06.15.06.29,0,.42-.06.09-.17.13-.32.13h-6.54ZM2738.05,1215.78c1.28,0,2.31-.35,3.08-1.06.76-.7,1.15-1.65,1.15-2.85s-.39-2.1-1.15-2.81c-.77-.7-1.8-1.05-3.08-1.05h-5.52c-.19,0-.28.09-.28.27v7.22c0,.19.09.28.28.28h5.52ZM2751.81,1229.95c-.15-.25-.14-.46.05-.65l4.27-3.26c.22-.16.43-.13.65.09.4.46.92.89,1.56,1.29.68.37,1.43.55,2.26.55,1.47,0,2.6-.46,3.4-1.38.8-.92,1.2-2.27,1.2-4.05v-19.92c0-.3.15-.46.46-.46h5.84c.3,0,.46.16.46.46v19.6c0,3.86-1.01,6.79-3.04,8.79-1.99,1.96-4.78,2.94-8.37,2.94-1.93,0-3.7-.37-5.29-1.1-1.56-.77-2.71-1.74-3.45-2.9h0ZM2785.12,1202.62c.09-.3.29-.46.59-.46h5.8c.31,0,.51.16.6.46l10.58,30.36c.09.31-.02.46-.32.46h-5.98c-.31,0-.51-.15-.6-.46l-1.8-5.47h-10.94l-1.75,5.47c-.09.31-.29.46-.6.46h-6.03c-.3,0-.41-.15-.32-.46l10.77-30.36ZM2792.15,1221.76l-3.54-10.95h-.14l-3.54,10.95h7.22ZM2806.3,1202.62c0-.3.16-.46.46-.46h5.52c.34,0,.6.16.78.46l11.04,19.69h.23v-19.69c0-.3.16-.46.46-.46h5.2c.31,0,.46.16.46.46v30.36c0,.31-.15.46-.46.46h-5.47c-.34,0-.6-.15-.78-.46l-11.09-19.64h-.23v19.64c0,.31-.15.46-.46.46h-5.2c-.3,0-.46-.15-.46-.46v-30.36Z" />
                                <g className="st53">
                                    <rect className="st5" x={2311} y="1155.29" width="521.37" height="13.06" />
                                </g>
                                <g className="st53">
                                    <rect className="st74" x={2311} y="1155.29" width="521.37" height="13.06" />
                                </g>
                                <g className="st53">
                                    <rect className="st4" x="2649.66" y="1268.11" width="274.34" height="13.06" />
                                </g>
                                <g className="st53">
                                    <rect className="st41" x="2649.66" y="1268.11" width="274.34" height="13.06" />
                                </g>
                                <g ref={setRef("alMurjan", 'icon')} className="st38">
                                    <g>
                                        <path className="st17" d="M2532.12,1242.36v-40.53h-12.31v-15.39h-40.38v15.39h-12.31v40.53h-7.88v4.65h80.76v-4.65h-7.88ZM2479.43,1242.36h-7.58v-35.88h7.58v35.88ZM2505.62,1242.36h-11.99v-11.79h11.99v11.79ZM2515.08,1201.83v40.53h-4.73v-16.45h-21.46v16.45h-4.73v-51.26h30.92v10.73ZM2527.39,1242.36h-7.58v-35.88h7.58v35.88Z" />
                                        <path className="st17" d="M2496.48,1216.09h-7.59v4.66h7.59v-4.66Z" />
                                        <path className="st17" d="M2496.48,1195.75h-7.59v4.66h7.59v-4.66Z" />
                                        <path className="st17" d="M2510.35,1195.75h-7.59v4.66h7.59v-4.66Z" />
                                        <path className="st17" d="M2496.48,1205.92h-7.59v4.66h7.59v-4.66Z" />
                                        <path className="st17" d="M2510.35,1216.09h-7.59v4.66h7.59v-4.66Z" />
                                        <path className="st17" d="M2510.35,1205.92h-7.59v4.66h7.59v-4.66Z" />
                                    </g>
                                </g>
                                <path className="st7" d="M2714.16,1273.45h-286.22v-111.64l-73.87-70.89v-31.84" />
                                <circle className="st17" cx="2354.02" cy="1054.43" r="12.42" />
                            </g>
                            <g ref={setRef("alSahab1", 'square')}>
                                <rect className="st67" x="1181.3" y={1580} width="473.68" height="113.37" />
                                <path ref={setRef("alSahab1", 'text')} className="st17" d="M1244.41,1622.18c.09-.31.29-.46.6-.46h5.79c.31,0,.51.15.6.46l10.58,30.36c.09.31-.02.46-.32.46h-5.98c-.31,0-.51-.15-.6-.46l-1.79-5.47h-10.95l-1.75,5.47c-.09.31-.29.46-.6.46h-6.02c-.31,0-.42-.15-.33-.46l10.77-30.36h0ZM1251.45,1641.32l-3.55-10.95h-.13l-3.55,10.95h7.23ZM1265.59,1622.18c0-.31.16-.46.46-.46h5.85c.3,0,.46.15.46.46v24.52c0,.18.09.27.27.27h13.8c.31,0,.46.16.46.46v5.11c0,.31-.15.46-.46.46h-20.38c-.3,0-.46-.15-.46-.46v-30.36ZM1312.29,1653.51c-1.23,0-2.44-.13-3.63-.37-1.17-.22-2.27-.51-3.32-.88-1.04-.39-2.01-.85-2.89-1.38-.86-.52-1.6-1.07-2.21-1.65-.25-.25-.26-.51-.05-.78l3.5-4.01c.18-.24.41-.26.69-.04,1.04.83,2.25,1.58,3.63,2.25,1.38.65,2.9.97,4.56.97s2.91-.34,3.77-1.01c.89-.71,1.33-1.61,1.33-2.72,0-.92-.34-1.67-1.01-2.25-.68-.58-1.95-1-3.82-1.24l-1.65-.23c-3.19-.43-5.65-1.4-7.36-2.9-1.69-1.54-2.53-3.7-2.53-6.49,0-1.44.26-2.74.78-3.91.52-1.19,1.25-2.21,2.21-3.03.98-.83,2.14-1.48,3.49-1.94,1.38-.46,2.91-.69,4.6-.69,2.09,0,4.05.3,5.89.88s3.42,1.38,4.74,2.39c.27.18.3.41.09.69l-2.81,4.19c-.18.24-.4.29-.64.13-1.2-.79-2.39-1.39-3.59-1.79-1.16-.4-2.39-.6-3.68-.6-1.38,0-2.42.32-3.13.97-.7.64-1.05,1.45-1.05,2.44,0,.89.35,1.62,1.05,2.2.74.59,2.01,1,3.82,1.25l1.66.23c3.25.43,5.7,1.41,7.36,2.94,1.65,1.5,2.48,3.68,2.48,6.53,0,1.41-.26,2.73-.78,3.96-.52,1.19-1.3,2.24-2.35,3.13-1.01.85-2.28,1.53-3.81,2.02-1.54.49-3.32.74-5.34.74h0ZM1337.22,1622.18c.09-.31.29-.46.59-.46h5.8c.31,0,.51.15.6.46l10.58,30.36c.09.31-.02.46-.32.46h-5.98c-.31,0-.51-.15-.6-.46l-1.8-5.47h-10.94l-1.75,5.47c-.09.31-.29.46-.6.46h-6.03c-.3,0-.41-.15-.32-.46l10.77-30.36h0ZM1344.25,1641.32l-3.54-10.95h-.14l-3.54,10.95h7.22ZM1358.4,1622.18c0-.31.16-.46.46-.46h5.84c.31,0,.46.15.46.46v11.73c0,.18.1.28.28.28h10.21c.19,0,.28-.1.28-.28v-11.73c0-.31.15-.46.46-.46h5.84c.31,0,.46.15.46.46v30.36c0,.31-.15.46-.46.46h-5.84c-.31,0-.46-.15-.46-.46v-12.05c0-.19-.09-.28-.28-.28h-10.21c-.18,0-.28.09-.28.28v12.05c0,.31-.15.46-.46.46h-5.84c-.3,0-.46-.15-.46-.46v-30.36ZM1397.1,1622.18c.09-.31.29-.46.6-.46h5.79c.31,0,.51.15.6.46l10.58,30.36c.09.31-.02.46-.32.46h-5.98c-.31,0-.51-.15-.6-.46l-1.79-5.47h-10.95l-1.75,5.47c-.09.31-.29.46-.6.46h-6.02c-.31,0-.42-.15-.33-.46l10.77-30.36h0ZM1404.14,1641.32l-3.55-10.95h-.13l-3.55,10.95h7.23ZM1418.28,1622.18c0-.31.16-.46.46-.46h12.19c3.41,0,5.92.77,7.55,2.3,1.62,1.53,2.43,3.54,2.43,6.03,0,1.71-.35,3.11-1.05,4.18-.68,1.08-1.54,1.9-2.58,2.49v.09c.52.18,1.03.49,1.52.92.52.4.96.9,1.33,1.52.4.61.72,1.31.97,2.11.24.77.37,1.61.37,2.53,0,3.1-.97,5.4-2.9,6.9-1.9,1.47-4.56,2.21-7.96,2.21h-11.87c-.3,0-.46-.15-.46-.46v-30.36h0ZM1430.1,1634.51c1.29,0,2.29-.32,2.99-.97.74-.64,1.11-1.55,1.11-2.71s-.37-2.06-1.11-2.67c-.7-.64-1.7-.97-2.99-.97h-4.78c-.18,0-.28.1-.28.28v6.76c0,.19.1.28.28.28h4.78ZM1425.04,1647.25c0,.18.1.28.28.28h5.15c1.38,0,2.43-.34,3.13-1.02.74-.7,1.1-1.67,1.1-2.89s-.36-2.15-1.1-2.86c-.7-.7-1.75-1.05-3.13-1.05h-5.15c-.18,0-.28.09-.28.27v7.27ZM1465.37,1628.99h-.09l-4.97,3.4c-.34.22-.5.12-.5-.27v-5.71c0-.24.1-.46.32-.64l5.24-3.77c.22-.19.49-.28.83-.28h5.15c.31,0,.46.15.46.46v30.36c0,.31-.15.46-.46.46h-5.52c-.3,0-.46-.15-.46-.46v-23.55h0Z" />
                                <g className="st53">
                                    <rect className="st55" x="1249.63" y="1684.83" width="521.37" height="13.06" />
                                </g>
                                <g className="st53">
                                    <rect className="st37" x="1249.63" y="1684.83" width="521.37" height="13.06" />
                                </g>
                                <g className="st53">
                                    <rect className="st25" x={1158} y={1572} width="274.34" height="13.06" />
                                </g>
                                <g className="st53">
                                    <rect className="st43" x={1158} y={1572} width="274.34" height="13.06" />
                                </g>
                                <g ref={setRef("alSahab1", 'icon')} className="st1">
                                    <g>
                                        <path className="st17" d="M1617.88,1662.08v-40.54h-12.31v-15.38h-40.38v15.38h-12.31v40.54h-7.88v4.65h80.76v-4.65h-7.88,0ZM1565.19,1662.08h-7.58v-35.88h7.58v35.88ZM1591.37,1662.08h-11.99v-11.8h11.99v11.8ZM1600.84,1621.54v40.54h-4.73v-16.45h-21.46v16.45h-4.73v-51.27h30.92v10.73h0ZM1613.15,1662.08h-7.58v-35.88h7.58v35.88Z" />
                                        <path className="st17" d="M1582.24,1635.81h-7.59v4.65h7.59v-4.65Z" />
                                        <path className="st17" d="M1582.24,1615.47h-7.59v4.65h7.59v-4.65Z" />
                                        <path className="st17" d="M1596.11,1615.47h-7.59v4.65h7.59v-4.65Z" />
                                        <path className="st17" d="M1582.24,1625.64h-7.59v4.65h7.59v-4.65Z" />
                                        <path className="st17" d="M1596.11,1635.81h-7.59v4.65h7.59v-4.65Z" />
                                        <path className="st17" d="M1596.11,1625.64h-7.59v4.65h7.59v-4.65Z" />
                                    </g>
                                </g>
                                <path className="st7" d="M1367.84,1579.72h286.22v111.64l73.87,70.89v31.84" />
                                <circle className="st17" cx="1727.98" cy="1798.74" r="12.42" />
                            </g>
                            <g ref={setRef("alDhabi3", 'square')}>
                                <rect className="st67" x="307.02" y="1298.03" width="473.68" height="113.37" />
                                <path ref={setRef("alDhabi3", 'text')} className="st17" d="M483.41,1340.62c.09-.3.29-.46.6-.46h5.8c.31,0,.51.16.6.46l10.58,30.36c.09.31-.02.46-.32.46h-5.98c-.31,0-.51-.15-.6-.46l-1.79-5.47h-10.95l-1.75,5.47c-.09.31-.29.46-.6.46h-6.03c-.31,0-.41-.15-.32-.46l10.76-30.36h0ZM490.45,1359.76l-3.54-10.95h-.14l-3.54,10.95h7.22ZM504.59,1340.62c0-.3.15-.46.46-.46h5.84c.31,0,.46.16.46.46v24.52c0,.19.09.28.28.28h13.8c.31,0,.46.15.46.46v5.1c0,.31-.15.46-.46.46h-20.38c-.31,0-.46-.15-.46-.46v-30.36ZM540.76,1340.62c0-.3.15-.46.46-.46h11.64c2.76,0,5.06.59,6.9,1.75,1.84,1.17,3.14,2.93,3.91,5.29.12.43.23.89.32,1.38.12.46.21,1.01.28,1.66.09.64.15,1.41.18,2.3.03.89.05,1.98.05,3.26s-.02,2.38-.05,3.27c-.03.89-.09,1.66-.18,2.3-.06.64-.15,1.21-.28,1.7-.09.46-.2.91-.32,1.34-.77,2.36-2.07,4.12-3.91,5.29-1.84,1.16-4.14,1.74-6.9,1.74h-11.64c-.31,0-.46-.15-.46-.46v-30.36h0ZM547.52,1365.14c0,.19.09.28.28.28h3.54c1.56,0,2.82-.25,3.77-.74.95-.52,1.62-1.42,2.02-2.71.09-.22.17-.46.23-.74.06-.31.11-.69.14-1.15.06-.46.09-1.03.09-1.7.03-.71.05-1.56.05-2.58s-.02-1.85-.05-2.53c0-.67-.03-1.24-.09-1.7-.03-.46-.08-.83-.14-1.1-.06-.31-.14-.59-.23-.83-.4-1.29-1.07-2.18-2.02-2.67-.95-.52-2.21-.78-3.77-.78h-3.54c-.18,0-.28.09-.28.28v18.67h0ZM569.73,1340.62c0-.3.15-.46.46-.46h5.84c.31,0,.46.16.46.46v11.73c0,.19.09.28.28.28h10.21c.18,0,.28-.09.28-.28v-11.73c0-.3.15-.46.46-.46h5.84c.31,0,.46.16.46.46v30.36c0,.31-.15.46-.46.46h-5.84c-.31,0-.46-.15-.46-.46v-12.05c0-.18-.09-.27-.28-.27h-10.21c-.18,0-.28.09-.28.27v12.05c0,.31-.15.46-.46.46h-5.84c-.31,0-.46-.15-.46-.46v-30.36ZM608.43,1340.62c.09-.3.29-.46.6-.46h5.8c.31,0,.51.16.6.46l10.58,30.36c.09.31-.02.46-.32.46h-5.98c-.31,0-.51-.15-.6-.46l-1.79-5.47h-10.95l-1.75,5.47c-.09.31-.29.46-.6.46h-6.03c-.31,0-.41-.15-.32-.46l10.76-30.36ZM615.46,1359.76l-3.54-10.95h-.14l-3.54,10.95h7.22ZM629.61,1340.62c0-.3.15-.46.46-.46h12.19c3.4,0,5.92.77,7.54,2.3,1.62,1.54,2.44,3.55,2.44,6.03,0,1.72-.35,3.11-1.06,4.19-.67,1.07-1.53,1.9-2.58,2.48v.09c.52.19,1.03.49,1.52.92.52.4.97.91,1.33,1.52.4.61.72,1.32.97,2.12.24.76.37,1.61.37,2.53,0,3.09-.97,5.39-2.9,6.9-1.9,1.47-4.55,2.2-7.96,2.2h-11.87c-.31,0-.46-.15-.46-.46v-30.36h.01ZM641.43,1352.95c1.29,0,2.29-.32,2.99-.96.74-.65,1.1-1.55,1.1-2.72s-.37-2.05-1.1-2.67c-.7-.64-1.7-.96-2.99-.96h-4.78c-.18,0-.28.09-.28.27v6.77c0,.18.09.27.28.27h4.78ZM636.37,1365.69c0,.19.09.28.28.28h5.15c1.38,0,2.42-.34,3.13-1.01.74-.71,1.1-1.67,1.1-2.9s-.37-2.15-1.1-2.85c-.71-.71-1.75-1.06-3.13-1.06h-5.15c-.18,0-.28.09-.28.28v7.26ZM657.69,1340.62c0-.3.15-.46.46-.46h5.84c.31,0,.46.16.46.46v30.36c0,.31-.15.46-.46.46h-5.84c-.31,0-.46-.15-.46-.46v-30.36ZM680.9,1364.77c-.06-.3.06-.5.37-.59l5.06-.97c.28-.03.46.09.55.37.28.83.75,1.53,1.43,2.11.67.56,1.56.83,2.67.83,1.2,0,2.13-.38,2.81-1.15.71-.77,1.06-1.73,1.06-2.9,0-1.41-.4-2.5-1.2-3.26-.77-.77-1.82-1.15-3.17-1.15h-1.33c-.31,0-.46-.16-.46-.46v-4.46c0-.31.15-.46.46-.46h1.24c1.17,0,2.1-.36,2.81-1.06.71-.71,1.06-1.66,1.06-2.85,0-1.11-.32-2-.97-2.67-.61-.68-1.47-1.01-2.58-1.01-.98,0-1.76.26-2.35.78-.55.52-.95,1.22-1.2,2.11-.09.28-.28.39-.55.33l-5.01-.97c-.31-.06-.43-.23-.37-.51.18-1.04.54-1.99,1.06-2.85.52-.89,1.2-1.65,2.02-2.3.86-.64,1.84-1.13,2.94-1.47,1.14-.37,2.39-.55,3.77-.55,1.53,0,2.9.21,4.09.64,1.2.43,2.21,1.03,3.04,1.8.83.76,1.46,1.68,1.89,2.76.43,1.04.64,2.19.64,3.45,0,1.34-.31,2.57-.92,3.68-.58,1.1-1.44,2.02-2.58,2.76v.09c.46.24.94.58,1.43,1.01s.94.97,1.33,1.61c.4.61.72,1.33.97,2.16.25.83.37,1.76.37,2.81,0,1.44-.26,2.74-.78,3.91-.49,1.16-1.2,2.16-2.12,2.99s-2.01,1.47-3.27,1.93c-1.23.46-2.58.69-4.05.69-2.67,0-4.92-.63-6.76-1.89-1.84-1.25-2.97-3.02-3.4-5.29h0Z" />
                                <g className="st53">
                                    <rect className="st78" x={191} y="1293.29" width="521.37" height="13.06" />
                                </g>
                                <g className="st53">
                                    <rect className="st46" x={191} y="1293.29" width="521.37" height="13.06" />
                                </g>
                                <g className="st53">
                                    <rect className="st40" x="529.66" y="1406.11" width="274.34" height="13.06" />
                                </g>
                                <g className="st53">
                                    <rect className="st11" x="529.66" y="1406.11" width="274.34" height="13.06" />
                                </g>
                                <g ref={setRef("alDhabi3", 'icon')} className="st2">
                                    <g>
                                        <path className="st17" d="M412.12,1380.36v-40.53h-12.31v-15.39h-40.38v15.39h-12.31v40.53h-7.88v4.65h80.76v-4.65h-7.88ZM359.43,1380.36h-7.58v-35.88h7.58v35.88ZM385.62,1380.36h-11.99v-11.79h11.99v11.79ZM395.08,1339.83v40.53h-4.73v-16.45h-21.45v16.45h-4.73v-51.26h30.92v10.73h0ZM407.39,1380.36h-7.58v-35.88h7.58v35.88Z" />
                                        <path className="st17" d="M376.48,1354.09h-7.58v4.66h7.58v-4.66Z" />
                                        <path className="st17" d="M376.48,1333.75h-7.58v4.66h7.58v-4.66Z" />
                                        <path className="st17" d="M390.35,1333.75h-7.58v4.66h7.58v-4.66Z" />
                                        <path className="st17" d="M376.48,1343.92h-7.58v4.66h7.58v-4.66Z" />
                                        <path className="st17" d="M390.35,1354.09h-7.58v4.66h7.58v-4.66Z" />
                                        <path className="st17" d="M390.35,1343.92h-7.58v4.66h7.58v-4.66Z" />
                                    </g>
                                </g>
                                <path className="st7" d="M594.16,1411.45h-286.21v-111.64l-73.87-70.89v-31.84" />
                                <circle className="st17" cx="234.03" cy="1192.43" r="12.42" />
                            </g>
                            <g ref={setRef("alDhabi2", 'square')}>
                                <rect className="st67" x="178.02" y="988.03" width="473.68" height="113.37" />
                                <path ref={setRef("alDhabi2", 'text')} className="st17" d="M354.41,1030.62c.09-.3.29-.46.6-.46h5.8c.31,0,.51.16.6.46l10.58,30.36c.09.31-.02.46-.32.46h-5.98c-.31,0-.51-.15-.6-.46l-1.79-5.47h-10.95l-1.75,5.47c-.09.31-.29.46-.6.46h-6.03c-.31,0-.41-.15-.32-.46l10.76-30.36h0ZM361.45,1049.76l-3.54-10.95h-.14l-3.54,10.95h7.22ZM375.59,1030.62c0-.3.15-.46.46-.46h5.84c.31,0,.46.16.46.46v24.52c0,.19.09.28.28.28h13.8c.31,0,.46.15.46.46v5.1c0,.31-.15.46-.46.46h-20.38c-.31,0-.46-.15-.46-.46v-30.36h0ZM411.76,1030.62c0-.3.15-.46.46-.46h11.64c2.76,0,5.06.59,6.9,1.75,1.84,1.17,3.14,2.93,3.91,5.29.12.43.23.89.32,1.38.12.46.21,1.01.28,1.66.09.64.15,1.41.18,2.3s.05,1.98.05,3.26-.02,2.38-.05,3.27-.09,1.66-.18,2.3c-.06.64-.15,1.21-.28,1.7-.09.46-.2.91-.32,1.34-.77,2.36-2.07,4.12-3.91,5.29-1.84,1.16-4.14,1.74-6.9,1.74h-11.64c-.31,0-.46-.15-.46-.46v-30.36h0ZM418.52,1055.14c0,.19.09.28.28.28h3.54c1.56,0,2.82-.25,3.77-.74.95-.52,1.62-1.42,2.02-2.71.09-.22.17-.46.23-.74.06-.31.11-.69.14-1.15.06-.46.09-1.03.09-1.7.03-.71.05-1.56.05-2.58s-.02-1.85-.05-2.53c0-.67-.03-1.24-.09-1.7-.03-.46-.08-.83-.14-1.1-.06-.31-.14-.59-.23-.83-.4-1.29-1.07-2.18-2.02-2.67-.95-.52-2.21-.78-3.77-.78h-3.54c-.18,0-.28.09-.28.28v18.67h0ZM440.73,1030.62c0-.3.15-.46.46-.46h5.84c.31,0,.46.16.46.46v11.73c0,.19.09.28.28.28h10.21c.18,0,.28-.09.28-.28v-11.73c0-.3.15-.46.46-.46h5.84c.31,0,.46.16.46.46v30.36c0,.31-.15.46-.46.46h-5.84c-.31,0-.46-.15-.46-.46v-12.05c0-.18-.09-.27-.28-.27h-10.21c-.18,0-.28.09-.28.27v12.05c0,.31-.15.46-.46.46h-5.84c-.31,0-.46-.15-.46-.46v-30.36ZM479.43,1030.62c.09-.3.29-.46.6-.46h5.8c.31,0,.51.16.6.46l10.58,30.36c.09.31-.02.46-.32.46h-5.98c-.31,0-.51-.15-.6-.46l-1.79-5.47h-10.95l-1.75,5.47c-.09.31-.29.46-.6.46h-6.03c-.31,0-.41-.15-.32-.46l10.76-30.36h0ZM486.46,1049.76l-3.54-10.95h-.14l-3.54,10.95h7.22ZM500.61,1030.62c0-.3.15-.46.46-.46h12.19c3.4,0,5.92.77,7.54,2.3,1.62,1.54,2.44,3.55,2.44,6.03,0,1.72-.35,3.11-1.06,4.19-.67,1.07-1.53,1.9-2.58,2.48v.09c.52.19,1.03.49,1.52.92.52.4.97.91,1.33,1.52.4.61.72,1.32.97,2.12.24.76.37,1.61.37,2.53,0,3.09-.97,5.39-2.9,6.9-1.9,1.47-4.55,2.2-7.96,2.2h-11.87c-.31,0-.46-.15-.46-.46v-30.36h.01ZM512.43,1042.95c1.29,0,2.29-.32,2.99-.96.74-.65,1.1-1.55,1.1-2.72s-.37-2.05-1.1-2.67c-.7-.64-1.7-.96-2.99-.96h-4.78c-.18,0-.28.09-.28.27v6.77c0,.18.09.27.28.27h4.78ZM507.37,1055.69c0,.19.09.28.28.28h5.15c1.38,0,2.42-.34,3.13-1.01.74-.71,1.1-1.67,1.1-2.9s-.37-2.15-1.1-2.85c-.71-.71-1.75-1.06-3.13-1.06h-5.15c-.18,0-.28.09-.28.28v7.26ZM528.69,1030.62c0-.3.15-.46.46-.46h5.84c.31,0,.46.16.46.46v30.36c0,.31-.15.46-.46.46h-5.84c-.31,0-.46-.15-.46-.46v-30.36ZM552.32,1056.71c0-.25.08-.46.23-.65l10.99-13.06c.61-.71,1.07-1.4,1.38-2.07.31-.71.46-1.46.46-2.26,0-1.04-.31-1.9-.92-2.57-.58-.68-1.41-1.01-2.48-1.01-2.18,0-3.4,1.22-3.68,3.68,0,.3-.17.42-.51.36l-5.06-.82c-.31-.07-.43-.25-.37-.56.09-1.07.37-2.1.83-3.08s1.1-1.84,1.93-2.57c.86-.74,1.87-1.32,3.04-1.75,1.2-.46,2.55-.69,4.05-.69s2.84.23,4,.69c1.2.46,2.21,1.09,3.04,1.88.83.8,1.46,1.75,1.89,2.86.46,1.07.69,2.23.69,3.49,0,1.5-.29,2.87-.87,4.1-.55,1.19-1.32,2.36-2.3,3.49l-8.23,9.71v.09h10.95c.31,0,.46.15.46.46v4.55c0,.31-.15.46-.46.46h-18.58c-.31,0-.46-.15-.46-.46v-4.27h-.02Z" />
                                <g className="st53">
                                    <rect className="st65" x={62} y="983.28" width="521.37" height="13.06" />
                                </g>
                                <g className="st53">
                                    <rect className="st18" x={62} y="983.28" width="521.37" height="13.06" />
                                </g>
                                <g className="st53">
                                    <rect className="st35" x="400.66" y="1096.11" width="274.34" height="13.06" />
                                </g>
                                <g className="st53">
                                    <rect className="st59" x="400.66" y="1096.11" width="274.34" height="13.06" />
                                </g>
                                <g ref={setRef("alDhabi2", 'icon')} className="st42">
                                    <g>
                                        <path className="st17" d="M283.12,1070.36v-40.53h-12.31v-15.39h-40.38v15.39h-12.31v40.53h-7.88v4.65h80.76v-4.65h-7.88ZM230.43,1070.36h-7.58v-35.88h7.58v35.88ZM256.62,1070.36h-11.99v-11.79h11.99v11.79ZM266.08,1029.83v40.53h-4.73v-16.45h-21.45v16.45h-4.73v-51.26h30.92v10.73h-.01ZM278.39,1070.36h-7.58v-35.88h7.58v35.88Z" />
                                        <path className="st17" d="M247.48,1044.09h-7.58v4.66h7.58v-4.66Z" />
                                        <path className="st17" d="M247.48,1023.75h-7.58v4.66h7.58v-4.66h0Z" />
                                        <path className="st17" d="M261.35,1023.75h-7.58v4.66h7.58v-4.66h0Z" />
                                        <path className="st17" d="M247.48,1033.92h-7.58v4.66h7.58v-4.66Z" />
                                        <path className="st17" d="M261.35,1044.09h-7.58v4.66h7.58v-4.66Z" />
                                        <path className="st17" d="M261.35,1033.92h-7.58v4.66h7.58v-4.66Z" />
                                    </g>
                                </g>
                                <path className="st7" d="M465.16,1101.45H178.94v-111.64l-73.87-70.89v-31.84" />
                                <circle className="st17" cx="105.03" cy="882.43" r="12.42" />
                            </g>
                            <g ref={setRef("alYass2", 'square')}>
                                <rect className="st67" x={1644} y={1256} width={424} height={113} />
                                <path ref={setRef("alYass2", 'text')} className="st17" d="M1820.41,1298.62c.09-.3.29-.46.6-.46h5.79c.31,0,.51.16.6.46l10.58,30.36c.09.31-.02.46-.32.46h-5.98c-.31,0-.51-.15-.6-.46l-1.79-5.47h-10.95l-1.75,5.47c-.09.31-.29.46-.6.46h-6.02c-.31,0-.42-.15-.33-.46l10.77-30.36h0ZM1827.45,1317.76l-3.55-10.95h-.13l-3.55,10.95h7.23ZM1841.59,1298.62c0-.3.16-.46.46-.46h5.85c.3,0,.46.16.46.46v24.52c0,.19.09.28.27.28h13.8c.31,0,.46.15.46.46v5.1c0,.31-.15.46-.46.46h-20.38c-.3,0-.46-.15-.46-.46v-30.36ZM1883.67,1329.44c-.3,0-.46-.15-.46-.46v-12l-9.24-18.36c-.13-.3-.02-.46.32-.46h5.98c.34,0,.57.16.69.46l5.66,11.41h.13l5.66-11.41c.13-.3.36-.46.69-.46h5.8c.15,0,.26.05.32.14.06.09.06.2,0,.32l-9.25,18.36v12c0,.31-.15.46-.46.46h-5.84ZM1908.5,1298.62c.09-.3.29-.46.6-.46h5.79c.31,0,.51.16.6.46l10.58,30.36c.09.31,0,.46-.32.46h-5.98c-.31,0-.51-.15-.6-.46l-1.79-5.47h-10.95l-1.75,5.47c-.09.31-.29.46-.6.46h-6.02c-.31,0-.42-.15-.32-.46l10.76-30.36h0ZM1915.54,1317.76l-3.54-10.95h-.14l-3.54,10.95h7.22ZM1940.22,1329.95c-1.23,0-2.44-.12-3.63-.37-1.17-.21-2.27-.5-3.32-.87-1.04-.4-2.01-.86-2.89-1.38-.86-.52-1.6-1.08-2.21-1.66-.25-.24-.26-.5-.05-.78l3.5-4c.18-.25.41-.26.69-.05,1.04.83,2.25,1.58,3.63,2.26,1.38.64,2.9.96,4.56.96s2.91-.34,3.77-1.01c.89-.71,1.33-1.61,1.33-2.71,0-.92-.34-1.68-1.01-2.26-.68-.58-1.95-1-3.82-1.24l-1.65-.23c-3.19-.43-5.65-1.4-7.36-2.9-1.69-1.53-2.53-3.69-2.53-6.48,0-1.45.26-2.75.78-3.91.52-1.2,1.25-2.21,2.21-3.04.98-.83,2.14-1.47,3.49-1.93,1.38-.46,2.91-.69,4.6-.69,2.09,0,4.05.29,5.89.87s3.42,1.38,4.74,2.39c.27.19.3.42.09.69l-2.81,4.19c-.18.24-.4.29-.64.14-1.2-.8-2.39-1.4-3.59-1.8-1.16-.4-2.39-.59-3.68-.59-1.38,0-2.42.32-3.13.96-.7.65-1.05,1.46-1.05,2.44,0,.89.35,1.62,1.05,2.21.74.58,2.01.99,3.82,1.24l1.66.23c3.25.43,5.7,1.41,7.36,2.94,1.65,1.51,2.48,3.68,2.48,6.54,0,1.41-.26,2.72-.78,3.95-.52,1.2-1.3,2.24-2.35,3.13-1.01.86-2.28,1.53-3.81,2.02-1.54.49-3.32.74-5.34.74h0ZM1967.58,1329.95c-1.23,0-2.44-.12-3.64-.37-1.16-.21-2.27-.5-3.31-.87-1.04-.4-2.01-.86-2.9-1.38-.86-.52-1.59-1.08-2.21-1.66-.24-.24-.26-.5-.04-.78l3.49-4c.19-.25.42-.26.69-.05,1.05.83,2.26,1.58,3.64,2.26,1.38.64,2.9.96,4.55.96s2.92-.34,3.77-1.01c.89-.71,1.34-1.61,1.34-2.71,0-.92-.34-1.68-1.01-2.26-.68-.58-1.95-1-3.82-1.24l-1.66-.23c-3.19-.43-5.64-1.4-7.36-2.9-1.68-1.53-2.53-3.69-2.53-6.48,0-1.45.26-2.75.78-3.91.53-1.2,1.26-2.21,2.21-3.04.98-.83,2.15-1.47,3.5-1.93,1.38-.46,2.91-.69,4.6-.69,2.08,0,4.05.29,5.89.87s3.42,1.38,4.73,2.39c.28.19.31.42.1.69l-2.81,4.19c-.18.24-.4.29-.64.14-1.2-.8-2.4-1.4-3.59-1.8-1.17-.4-2.39-.59-3.68-.59-1.38,0-2.42.32-3.13.96-.7.65-1.06,1.46-1.06,2.44,0,.89.36,1.62,1.06,2.21.74.58,2.01.99,3.82,1.24l1.65.23c3.26.43,5.71,1.41,7.36,2.94,1.66,1.51,2.49,3.68,2.49,6.54,0,1.41-.26,2.72-.78,3.95-.52,1.2-1.31,2.24-2.35,3.13-1.01.86-2.28,1.53-3.82,2.02-1.53.49-3.31.74-5.33.74h0ZM1995.27,1324.71c0-.25.08-.46.23-.65l11-13.06c.61-.71,1.07-1.4,1.38-2.07.3-.71.46-1.46.46-2.26,0-1.04-.31-1.9-.92-2.57-.59-.68-1.42-1.01-2.49-1.01-2.18,0-3.4,1.22-3.68,3.68,0,.3-.17.42-.5.36l-5.06-.82c-.31-.07-.43-.25-.37-.56.09-1.07.37-2.1.83-3.08s1.1-1.84,1.93-2.57c.86-.74,1.87-1.32,3.03-1.75,1.2-.46,2.55-.69,4.05-.69s2.84.23,4,.69c1.2.46,2.21,1.09,3.04,1.88.83.8,1.46,1.75,1.89,2.86.46,1.07.69,2.23.69,3.49,0,1.5-.3,2.87-.88,4.1-.55,1.19-1.32,2.36-2.3,3.49l-8.23,9.71v.09h10.95c.3,0,.46.15.46.46v4.55c0,.31-.16.46-.46.46h-18.59c-.31,0-.46-.15-.46-.46v-4.27h0Z" />
                                <g className="st53">
                                    <rect className="st70" x={1528} y="1251.29" width="521.37" height="13.06" />
                                </g>
                                <g className="st53">
                                    <rect className="st10" x={1528} y="1251.29" width="521.37" height="13.06" />
                                </g>
                                <g className="st53">
                                    <rect className="st24" x="1866.66" y="1364.11" width="274.34" height="13.06" />
                                </g>
                                <g className="st53">
                                    <rect className="st39" x={1867} y={1364} width={216} height={13} />
                                </g>
                                <g ref={setRef("alYass2", 'icon')} className="st13">
                                    <g>
                                        <path className="st17" d="M1749.12,1338.36v-40.53h-12.31v-15.39h-40.38v15.39h-12.31v40.53h-7.88v4.65h80.76v-4.65h-7.88,0ZM1696.43,1338.36h-7.58v-35.88h7.58v35.88ZM1722.62,1338.36h-11.99v-11.79h11.99v11.79ZM1732.08,1297.83v40.53h-4.73v-16.45h-21.46v16.45h-4.73v-51.26h30.92v10.73h0ZM1744.39,1338.36h-7.58v-35.88h7.58v35.88Z" />
                                        <path className="st17" d="M1713.48,1312.09h-7.59v4.66h7.59v-4.66Z" />
                                        <path className="st17" d="M1713.48,1291.75h-7.59v4.66h7.59v-4.66Z" />
                                        <path className="st17" d="M1727.35,1291.75h-7.59v4.66h7.59v-4.66Z" />
                                        <path className="st17" d="M1713.48,1301.92h-7.59v4.66h7.59v-4.66Z" />
                                        <path className="st17" d="M1727.35,1312.09h-7.59v4.66h7.59v-4.66Z" />
                                        <path className="st17" d="M1727.35,1301.92h-7.59v4.66h7.59v-4.66Z" />
                                    </g>
                                </g>
                                <path className="st7" d="M1931.16,1369.45h-286.22v-111.64l-73.87-70.89v-31.84" />
                                <circle className="st17" cx="1571.02" cy="1150.43" r="12.42" />
                            </g>
                            <g ref={setRef("alYass1", 'square')}>
                                <rect className="st67" x={877} y={982} width={429} height={113} />
                                <path ref={setRef("alYass1", 'text')} className="st17" d="M1053.41,1024.62c.09-.3.29-.46.6-.46h5.79c.31,0,.51.16.6.46l10.58,30.36c.09.31-.02.46-.32.46h-5.98c-.31,0-.51-.15-.6-.46l-1.79-5.47h-10.95l-1.75,5.47c-.09.31-.29.46-.6.46h-6.02c-.31,0-.42-.15-.33-.46l10.77-30.36h0ZM1060.45,1043.76l-3.55-10.95h-.13l-3.55,10.95h7.23ZM1074.59,1024.62c0-.3.16-.46.46-.46h5.85c.3,0,.46.16.46.46v24.52c0,.19.09.28.27.28h13.8c.31,0,.46.15.46.46v5.1c0,.31-.15.46-.46.46h-20.38c-.3,0-.46-.15-.46-.46v-30.36ZM1116.67,1055.44c-.3,0-.46-.15-.46-.46v-12l-9.24-18.36c-.13-.3-.02-.46.32-.46h5.98c.34,0,.57.16.69.46l5.66,11.41h.13l5.66-11.41c.13-.3.36-.46.69-.46h5.8c.15,0,.26.05.32.14.06.09.06.2,0,.32l-9.25,18.36v12c0,.31-.15.46-.46.46h-5.84ZM1141.5,1024.62c.09-.3.29-.46.6-.46h5.79c.31,0,.51.16.6.46l10.58,30.36c.09.31,0,.46-.32.46h-5.98c-.31,0-.51-.15-.6-.46l-1.79-5.47h-10.95l-1.75,5.47c-.09.31-.29.46-.6.46h-6.02c-.31,0-.42-.15-.32-.46l10.76-30.36h0ZM1148.54,1043.76l-3.54-10.95h-.14l-3.54,10.95h7.22ZM1173.22,1055.95c-1.23,0-2.44-.12-3.63-.37-1.17-.21-2.27-.5-3.32-.87-1.04-.4-2.01-.86-2.89-1.38-.86-.52-1.6-1.08-2.21-1.66-.25-.24-.26-.5-.05-.78l3.5-4c.18-.25.41-.26.69-.05,1.04.83,2.25,1.58,3.63,2.26,1.38.64,2.9.96,4.56.96s2.91-.34,3.77-1.01c.89-.71,1.33-1.61,1.33-2.71,0-.92-.34-1.68-1.01-2.26-.68-.58-1.95-1-3.82-1.24l-1.65-.23c-3.19-.43-5.65-1.4-7.36-2.9-1.69-1.53-2.53-3.69-2.53-6.48,0-1.45.26-2.75.78-3.91.52-1.2,1.25-2.21,2.21-3.04.98-.83,2.14-1.47,3.49-1.93,1.38-.46,2.91-.69,4.6-.69,2.09,0,4.05.29,5.89.87,1.84.58,3.42,1.38,4.74,2.39.27.19.3.42.09.69l-2.81,4.19c-.18.24-.4.29-.64.14-1.2-.8-2.39-1.4-3.59-1.8-1.16-.4-2.39-.59-3.68-.59-1.38,0-2.42.32-3.13.96-.7.65-1.05,1.46-1.05,2.44,0,.89.35,1.62,1.05,2.21.74.58,2.01.99,3.82,1.24l1.66.23c3.25.43,5.7,1.41,7.36,2.94,1.65,1.51,2.48,3.68,2.48,6.54,0,1.41-.26,2.72-.78,3.95-.52,1.2-1.3,2.24-2.35,3.13-1.01.86-2.28,1.53-3.81,2.02-1.54.49-3.32.74-5.34.74h0ZM1200.58,1055.95c-1.23,0-2.44-.12-3.64-.37-1.16-.21-2.27-.5-3.31-.87-1.04-.4-2.01-.86-2.9-1.38-.86-.52-1.59-1.08-2.21-1.66-.24-.24-.26-.5-.04-.78l3.49-4c.19-.25.42-.26.69-.05,1.05.83,2.26,1.58,3.64,2.26,1.38.64,2.9.96,4.55.96s2.92-.34,3.77-1.01c.89-.71,1.34-1.61,1.34-2.71,0-.92-.34-1.68-1.01-2.26-.68-.58-1.95-1-3.82-1.24l-1.66-.23c-3.19-.43-5.64-1.4-7.36-2.9-1.68-1.53-2.53-3.69-2.53-6.48,0-1.45.26-2.75.78-3.91.53-1.2,1.26-2.21,2.21-3.04.98-.83,2.15-1.47,3.5-1.93,1.38-.46,2.91-.69,4.6-.69,2.08,0,4.05.29,5.89.87,1.84.58,3.42,1.38,4.73,2.39.28.19.31.42.1.69l-2.81,4.19c-.18.24-.4.29-.64.14-1.2-.8-2.4-1.4-3.59-1.8-1.17-.4-2.39-.59-3.68-.59-1.38,0-2.42.32-3.13.96-.7.65-1.06,1.46-1.06,2.44,0,.89.36,1.62,1.06,2.21.74.58,2.01.99,3.82,1.24l1.65.23c3.26.43,5.71,1.41,7.36,2.94,1.66,1.51,2.49,3.68,2.49,6.54,0,1.41-.26,2.72-.78,3.95-.52,1.2-1.31,2.24-2.35,3.13-1.01.86-2.28,1.53-3.82,2.02-1.53.49-3.31.74-5.33.74h0ZM1236.41,1031.43h-.09l-4.97,3.41c-.33.21-.5.12-.5-.28v-5.7c0-.25.1-.46.32-.65l5.24-3.77c.22-.18.49-.28.83-.28h5.15c.31,0,.46.16.46.46v30.36c0,.31-.15.46-.46.46h-5.52c-.3,0-.46-.15-.46-.46v-23.55h0Z" />
                                <g className="st53">
                                    <rect className="st12" x={761} y="977.28" width="521.37" height="13.06" />
                                </g>
                                <g className="st53">
                                    <rect className="st22" x={761} y="977.28" width="521.37" height="13.06" />
                                </g>
                                <g className="st53">
                                    <rect className="st66" x="1099.66" y="1090.11" width="274.34" height="13.06" />
                                </g>
                                <g className="st53">
                                    <rect className="st76" x={1100} y={1090} width={227} height={13} />
                                </g>
                                <g ref={setRef("alYass1", 'icon')} className="st14">
                                    <g>
                                        <path className="st17" d="M982.12,1064.36v-40.53h-12.31v-15.39h-40.38v15.39h-12.31v40.53h-7.88v4.65h80.76v-4.65h-7.88ZM929.43,1064.36h-7.58v-35.88h7.58v35.88ZM955.62,1064.36h-11.99v-11.79h11.99v11.79ZM965.08,1023.83v40.53h-4.73v-16.45h-21.46v16.45h-4.73v-51.26h30.92v10.73h0ZM977.39,1064.36h-7.58v-35.88h7.58v35.88Z" />
                                        <path className="st17" d="M946.48,1038.09h-7.58v4.66h7.58v-4.66Z" />
                                        <path className="st17" d="M946.48,1017.75h-7.58v4.66h7.58v-4.66Z" />
                                        <path className="st17" d="M960.35,1017.75h-7.58v4.66h7.58v-4.66Z" />
                                        <path className="st17" d="M946.48,1027.92h-7.58v4.66h7.58v-4.66Z" />
                                        <path className="st17" d="M960.35,1038.09h-7.58v4.66h7.58v-4.66Z" />
                                        <path className="st17" d="M960.35,1027.92h-7.58v4.66h7.58v-4.66Z" />
                                    </g>
                                </g>
                                <path className="st7" d="M1164.16,1095.45h-286.22v-111.64l-73.87-70.89v-31.84" />
                                <circle className="st17" cx="804.03" cy="876.43" r="12.42" />
                            </g>
                            <g ref={setRef("alReem", 'square')}>
                                <rect className="st67" x={2951} y={948} width={386} height={113} />
                                <path ref={setRef("alReem", 'text')} className="st17" d="M3013.41,990.62c.09-.31.29-.46.6-.46h5.79c.31,0,.51.15.6.46l10.58,30.36c.09.31-.02.46-.32.46h-5.98c-.31,0-.51-.15-.6-.46l-1.79-5.47h-10.95l-1.75,5.47c-.09.31-.29.46-.6.46h-6.02c-.31,0-.42-.15-.33-.46l10.77-30.36ZM3020.45,1009.76l-3.55-10.95h-.13l-3.55,10.95h7.23ZM3034.59,990.62c0-.31.16-.46.46-.46h5.85c.3,0,.46.15.46.46v24.52c0,.19.09.28.27.28h13.8c.31,0,.46.15.46.46v5.1c0,.31-.15.46-.46.46h-20.38c-.3,0-.46-.15-.46-.46v-30.36h0ZM3088.05,1021.44c-.34,0-.57-.15-.69-.46l-5.38-11.45h-4.19c-.18,0-.27.09-.27.28v11.17c0,.31-.16.46-.46.46h-5.84c-.31,0-.46-.15-.46-.46v-30.36c0-.31.15-.46.46-.46h12.46c1.6,0,3.04.25,4.33.74,1.31.46,2.43,1.12,3.35,1.98.95.86,1.67,1.89,2.17,3.08.52,1.2.78,2.5.78,3.91,0,2.02-.49,3.79-1.47,5.29-.99,1.5-2.35,2.64-4.1,3.4l6.17,12.33c.06.15.06.29,0,.42-.07.09-.17.13-.33.13h-6.53ZM3083.31,1003.78c1.29,0,2.32-.35,3.09-1.06.76-.7,1.15-1.65,1.15-2.85s-.39-2.1-1.15-2.81c-.77-.71-1.8-1.06-3.09-1.06h-5.52c-.18,0-.27.09-.27.28v7.22c0,.19.09.28.27.28h5.52ZM3099.46,990.62c0-.31.15-.46.46-.46h20.06c.3,0,.46.15.46.46v4.92c0,.31-.16.46-.46.46h-13.48c-.19,0-.28.09-.28.28v6.21c0,.19.09.28.28.28h11.22c.31,0,.46.15.46.46v4.87c0,.31-.15.46-.46.46h-11.22c-.19,0-.28.1-.28.28v6.49c0,.18.09.27.28.27h13.48c.3,0,.46.15.46.46v4.92c0,.31-.16.46-.46.46h-20.06c-.31,0-.46-.15-.46-.46v-30.36h0ZM3125.47,990.62c0-.31.15-.46.46-.46h20.06c.3,0,.46.15.46.46v4.92c0,.31-.16.46-.46.46h-13.48c-.19,0-.28.09-.28.28v6.21c0,.19.09.28.28.28h11.22c.31,0,.46.15.46.46v4.87c0,.31-.15.46-.46.46h-11.22c-.19,0-.28.1-.28.28v6.49c0,.18.09.27.28.27h13.48c.3,0,.46.15.46.46v4.92c0,.31-.16.46-.46.46h-20.06c-.31,0-.46-.15-.46-.46v-30.36h0ZM3151.48,990.62c0-.31.15-.46.46-.46h5.47c.37,0,.62.15.74.46l7.91,17.85h.19l7.77-17.85c.12-.31.37-.46.74-.46h5.38c.3,0,.46.15.46.46v30.36c0,.31-.16.46-.46.46h-5.2c-.31,0-.46-.15-.46-.46v-17.61h-.18l-5.8,13.2c-.18.4-.48.6-.87.6h-3.18c-.4,0-.69-.2-.87-.6l-5.8-13.2h-.18v17.61c0,.31-.16.46-.46.46h-5.2c-.31,0-.46-.15-.46-.46v-30.36h0Z" />
                                <g className="st53">
                                    <rect className="st28" x="2931.63" y="943.28" width="521.37" height="13.06" />
                                </g>
                                <g className="st53">
                                    <rect className="st0" x="2931.63" y="943.28" width="521.37" height="13.06" />
                                </g>
                                <g className="st53">
                                    <rect className="st19" x={2840} y="1056.11" width="274.34" height="13.06" />
                                </g>
                                <g className="st53">
                                    <rect className="st15" x={2840} y="1056.11" width="274.34" height="13.06" />
                                </g>
                                <g className="st23">
                                    <g ref={setRef("alReem", 'icon')}>
                                        <path className="st17" d="M3231.88,1030.36v-40.53h12.31v-15.38h40.38v15.38h12.31v40.53h7.88v4.65h-80.76v-4.65h7.88ZM3284.57,1030.36h7.58v-35.88h-7.58v35.88ZM3258.38,1030.36h12v-11.79h-12v11.79ZM3248.92,989.83v40.53h4.73v-16.45h21.46v16.45h4.73v-51.26h-30.92v10.73h0ZM3236.61,1030.36h7.58v-35.88h-7.58v35.88Z" />
                                        <path className="st17" d="M3267.52,1004.09h7.59v4.66h-7.59v-4.66Z" />
                                        <path className="st17" d="M3267.52,983.75h7.59v4.65h-7.59v-4.65Z" />
                                        <path className="st17" d="M3253.65,983.75h7.59v4.65h-7.59v-4.65Z" />
                                        <path className="st17" d="M3267.52,993.92h7.59v4.65h-7.59v-4.65Z" />
                                        <path className="st17" d="M3253.65,1004.09h7.59v4.66h-7.59v-4.66Z" />
                                        <path className="st17" d="M3253.65,993.92h7.59v4.65h-7.59v-4.65Z" />
                                    </g>
                                </g>
                                <path className="st7" d="M3049.84,1061.45h286.22v-111.64l73.87-70.89v-31.84" />
                                <circle className="st17" cx="3409.97" cy="842.42" r="12.42" />
                            </g>
                            <g>
                                <g className="st53">
                                    <rect className="st51" x={3517} y={547} width={16} height={1365} />
                                </g>
                                <g className="st53">
                                    <rect className="st52" x={3517} y={546} width={16} height={1365} />
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </>
        </div>
    )
}
