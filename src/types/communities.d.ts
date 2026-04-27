export type Property =
    | "Capacity"
    | "Buildings"
    | "Unit Type"
    | "Floors"
    | "Type"
    | "Quantity"
    | "Function"
    | "Room Types"
    | "Access";

export type Community = "icad" | "home" | "maamourah_a" | "maamourah_b" | "mogharraq" | "razeen" | "sadeem";

export interface PropertyObject {
    title: Property;
    value: string;
}

export interface CommunityData {
    title: string;
    description: string;
    category_name: string;
    properties: PropertyObject[];
    images: string[];
}

type Buildings<T extends string> = Record<T, CommunityData>;

type IcadKeys =
    | "alReem"
    | "alMesk"
    | "icadMall"
    | "mosque"
    | "sportsHall"
    | "alNaseem"
    | "alSahab1"
    | "alSahab2"
    | "alDhabi1"
    | "alDhabi2"
    | "alDhabi3"
    | "alYass1"
    | "alYass2"
    | "alMurjan";

type MugharraqKeys =
    | "engineersManagersAccommodation"
    | "mosque"
    | "supermarket"
    | "clinic"
    | "staffAmenities"
    | "staffAccommodation"
    | "diningHall"
    | "indoorRecreationsArea"
    | "supervisorsAccommodation"
    | "swimmingPool"
    | "centralKitchen"
    | "techniciansAccommodation"
    | "runningTrack";

type MaamorahAKeys =
    | "workersBlock_B1_B"
    | "workersBlock_B1_C"
    | "workersBlock_B2_B"
    | "workersBlock_B2_C"
    | "retail"
    | "clinicOffice"
    | "kitchenDining"
    | "playGround"
    | "techSupervisorBlock_A1";

type MaamorahBKeys =
    | "playGround"
    | "commercialShops"
    | "D_3_Buildings"
    | "D_4_Buildings"
    | "D_5_Buildings";

type RazeenKeys =
    | "type_B_2_buildings"
    | "type_D_8_buildings"
    | "type_A_10_buildings"
    | "mosque"
    | "commercialShops"
    | "clinic"
    | "administration"
    | "kitchen_and_dining"
    | "playGround";

type SadeemKeys =
    | "type_B_2_buildings"
    | "type_D_8_buildings"
    | "mosque"
    | "commercialShops"
    | "clinic"
    | "administration"
    | "type_A_10_buildings"
    | "kitchen_and_dining"
    | "playGround";

export type IcadBuildingsObject = Buildings<IcadKeys>;
export type MugharraqBuildingsObject = Buildings<MugharraqKeys>;
export type Maamorah_A_BuildingsObject = Buildings<MaamorahAKeys>;
export type Maamorah_B_BuildingsObject = Buildings<MaamorahBKeys>;
export type RazeenBuildingsObject = Buildings<RazeenKeys>;
export type SadeemBuildingsObject = Buildings<SadeemKeys>;

export interface SpecialSvgKeys {
    sdeiraLogo: "sdeiraLogo";
    homeIcon: "homeIcon";
    communityLogo: "communityLogo";
    backIcon: "backIcon";
    aboutCommunity: "aboutCommunity";
}

export type RefGroup = {
    square?: SVGElement | null;
    icon?: SVGElement | null;
    text?: SVGElement | null;
    sdeiraLogo?: SVGElement | null;
    homeIcon?: SVGAElement | null;
    communityLogo?: SVGElement | null;
    backIcon?: SVGElement | null;
    aboutCommunity?: SVGElement | null;
};

type CommunityObject<T> = {
    title: string;
    video: string;
    communityLogoUrl: string;
    data: T;
};

export type IcadCommunityObject = CommunityObject<IcadBuildingsObject>;
export type MugharraqCommunityObject = CommunityObject<MugharraqBuildingsObject>;
export type Maamorah_A_CommunityObject = CommunityObject<Maamorah_A_BuildingsObject>;
export type Maamorah_B_CommunityObject = CommunityObject<Maamorah_B_BuildingsObject>;
export type RazeenCommunityObject = CommunityObject<RazeenBuildingsObject>;
export type SadeemCommunityObject = CommunityObject<SadeemBuildingsObject>;

export type CommunityKey =
    | keyof IcadBuildingsObject
    | keyof SpecialSvgKeys
    | keyof MugharraqBuildingsObject
    | keyof Maamorah_A_BuildingsObject
    | keyof Maamorah_B_BuildingsObject
    | keyof RazeenBuildingsObject
    | keyof SadeemBuildingsObject;