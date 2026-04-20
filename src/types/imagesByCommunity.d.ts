export interface CommunityData {
    title: string;
    video: string;
    images: string[];
}

export interface imagesByCommunityObject {
    alReem: CommunityData;
    alMesk: CommunityData;
    icadMall: CommunityData;
    mosque: CommunityData;
    sportsHall: CommunityData;
    alNaseem: CommunityData;
    alSahab1: CommunityData;
    alSahab2: CommunityData;
    alDhabi1: CommunityData;
    alDhabi2: CommunityData;
    alDhabi3: CommunityData;
    alYass1: CommunityData;
    alYass2: CommunityData;
    alMurjan: CommunityData;
}

export type RefGroup = {
    square?: SVGElement | null;
    icon?: SVGElement | null;
    text?: SVGElement | null;
    sdeiraLogo?: SVGElement | null;
    homeIcon?: SVGAElement | null;
    aryamLogo?: SVGElement | null;
    backIcon?: SVGElement | null;
    aboutAryamIcadIcon?: SVGElement | null;
};

export type CommunityKey = keyof imagesByCommunityObject;