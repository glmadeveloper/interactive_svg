import {
    icad_al_reem_5_beds_image,
    icad_al_mesk_s3_studio_5_beds_image,
    icad_al_mesk_s4_studio_4_beds_image,
    icad_almesk_s5_2_br_type_4x_8_image,
    icad_almesk_s6_2_br_type_4x_8_image,
    icad_almesk_s7_2_br_type_4x_8_image,
    icad_square_mall_image,
    icad_icad_mosuqe_image,
    icad_sports_hall_image,
    icad_al_naseem_2_beds_image,
    icad_al_naseem_4_beds_image,
    icad_al_sahab_1_4_pax_bed_room_image,
    icad_al_dhabi_1_image,
    icad_al_dhabi_2_image,
    icad_al_dhabi_studio_apartment_5_beds_each_side_image,
    icad_alyas_6_beds_image,
    icad_al_murjan_bed_room_studio_3_pax_image,
    icad_al_murjan_bed_room_studio_4_pax_image
} from "../exports/images";

import { communityVideo } from "../exports/videos";
import type { IcadCommunityObject } from "../types/communities";

export const ICAD: IcadCommunityObject = {
    title: "Icad Community",
    video: communityVideo,
    communityLogoUrl: "https://icad.glmaagencyprojects.com/en/",
    data: {
        alReem: {
            title: "AL REEM – STAFF ACCOMMODATION",
            description: "Residential buildings designed for controlled occupancy with efficient unit distribution and access to central services.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                {
                    title: "Capacity",
                    value: "1,638 Staff"
                },
                {
                    title: "Buildings",
                    value: "8 Buildings"
                },
                {
                    title: "Unit Type",
                    value: "Standard Flats"
                },
                {
                    title: "Floors",
                    value: "Multi-Floor Residential Buildings"
                }
            ],
            images: [icad_al_reem_5_beds_image]
        },
        alMesk: {
            title: "Al Mesk Community",
            description: "Residential buildings designed for structured staff accommodation with standardized flat layouts. Optimized for efficient occupancy and daily living.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                {
                    title: "Capacity",
                    value: "1,152 Staff"
                },
                {
                    title: "Buildings",
                    value: "8 Buildings"
                },
                {
                    title: "Unit Type",
                    value: "Standard Flats"
                },
                {
                    title: "Floors",
                    value: "Multi-Floor Residential Buildings"
                }
            ],
            images: [
                icad_al_mesk_s3_studio_5_beds_image,
                icad_al_mesk_s4_studio_4_beds_image,
                icad_almesk_s5_2_br_type_4x_8_image,
                icad_almesk_s6_2_br_type_4x_8_image,
                icad_almesk_s7_2_br_type_4x_8_image
            ]
        },
        icadMall: {
            title: "ICAD MALL",
            description: "Central commercial hub providing retail, dining, and daily services for residents and visitors. Designed to support high footfall and community activity.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                {
                    title: "Type",
                    value: "Commercial Facility"
                },
                {
                    title: "Quantity",
                    value: "1 Building"
                },
                {
                    title: "Function",
                    value: "Retail and Community Services"
                },
                {
                    title: "Access",
                    value: "Central Location"
                }
            ],
            images: [icad_square_mall_image]
        },
        mosque: {
            title: "GRAND MOSQUE",
            description: "Main prayer facility serving the entire community. Designed for large gatherings and daily worship.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                {
                    title: "Type",
                    value: "Religious Facility"
                },
                {
                    title: "Quantity",
                    value: "1 Building"
                },
                {
                    title: "Function",
                    value: "Prayer and Worship"
                },
                {
                    title: "Access",
                    value: "Central Location"
                }
            ],
            images: [icad_icad_mosuqe_image]
        },
        sportsHall: {
            title: "SPORT HALL",
            description: "Indoor sports and activity facility designed to support fitness, recreation, and group activities for residents. Provides a controlled environment for daily use and community engagement.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                {
                    title: "Type",
                    value: "Recreational Facility"
                },
                {
                    title: "Quantity",
                    value: "1 Building"
                },
                {
                    title: "Function",
                    value: "Sports and Physical Activities"
                },
                {
                    title: "Access",
                    value: "Central Location"
                }
            ],
            images: [icad_sports_hall_image]
        },
        alNaseem: {
            title: "AL NASEEM – STAFF ACCOMMODATION",
            description: "Large-scale residential development with multiple unit types, supporting diverse accommodation needs and optimized space utilization.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                {
                    title: "Capacity",
                    value: "11,502 Staff"
                },
                {
                    title: "Buildings",
                    value: "9 Buildings"
                },
                {
                    title: "Unit Type",
                    value: "Mixed Flat Types (N1–N7)"
                },
                {
                    title: "Floors",
                    value: "Multi-Floor Residential Buildings"
                }
            ],
            images: [icad_al_naseem_2_beds_image, icad_al_naseem_4_beds_image]
        },
        alSahab1: {
            title: "AL SAHAB 1 – STAFF ACCOMMODATION",
            description: "Residential buildings designed for structured staff accommodation with standardized flat layouts. Optimized for efficient occupancy and daily living.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                {
                    title: "Capacity",
                    value: "1,152 Staff"
                },
                {
                    title: "Buildings",
                    value: "8 Buildings"
                },
                {
                    title: "Unit Type",
                    value: "Standard Flats"
                },
                {
                    title: "Floors",
                    value: "Multi-Floor Residential Buildings"
                }
            ],
            images: [icad_al_sahab_1_4_pax_bed_room_image]
        },
        alSahab2: {
            title: "AL SAHAB 2 – STAFF ACCOMMODATION",
            description: "Medium-density residential buildings offering efficient flat-based accommodation with consistent layout planning.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                {
                    title: "Capacity",
                    value: "1,152 Staff"
                },
                {
                    title: "Buildings",
                    value: "9 Buildings"
                },
                {
                    title: "Unit Type",
                    value: "Standard Flats"
                },
                {
                    title: "Floors",
                    value: "Multi-Floor Residential Buildings"
                }
            ],
            images: [icad_al_sahab_1_4_pax_bed_room_image]
        },
        alDhabi1: {
            title: "AL DHABI – STAFF ACCOMMODATION",
            description: "High-capacity residential zone designed for large workforce accommodation with dense flat distribution and efficient circulation.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                {
                    title: "Capacity",
                    value: "13,320 Staff"
                },
                {
                    title: "Buildings",
                    value: "18 Buildings"
                },
                {
                    title: "Room Types",
                    value: "5x1 - 66 m2"
                },
                {
                    title: "Floors",
                    value: "Multi-Floor Residential Buildings"
                }
            ],
            images: [icad_al_dhabi_1_image]
        },
        alDhabi2: {
            title: "AL DHABI – STAFF ACCOMMODATION",
            description: "High-capacity residential zone designed for large workforce accommodation with dense flat distribution and efficient circulation.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                {
                    title: "Capacity",
                    value: "13,320 Staff"
                },
                {
                    title: "Buildings",
                    value: "18 Buildings"
                },
                {
                    title: "Room Types",
                    value: "5x1 - 66 m2"
                },
                {
                    title: "Floors",
                    value: "Multi-Floor Residential Buildings"
                }
            ],
            images: [icad_al_dhabi_2_image]
        },
        alDhabi3: {
            title: "AL DHABI – STAFF ACCOMMODATION",
            description: "High-capacity residential zone designed for large workforce accommodation with dense flat distribution and efficient circulation.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                {
                    title: "Capacity",
                    value: "13,320 Staff"
                },
                {
                    title: "Buildings",
                    value: "18 Buildings"
                },
                {
                    title: "Room Types",
                    value: "5x1 - 66 m2"
                },
                {
                    title: "Floors",
                    value: "Multi-Floor Residential Buildings"
                }
            ],
            images: [icad_al_dhabi_studio_apartment_5_beds_each_side_image]
        },
        alYass1: {
            title: "AL YASS – STAFF ACCOMMODATION",
            description: "High-density residential zone with multiple flat configurations designed for maximum occupancy and efficient space planning.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                {
                    title: "Capacity",
                    value: "15,416 Staff"
                },
                {
                    title: "Buildings",
                    value: "9 Buildings"
                },
                {
                    title: "Unit Type",
                    value: "Mixed Flat Types (S1–S6)"
                },
                {
                    title: "Floors",
                    value: "Multi-Floor Residential Buildings"
                }
            ],
            images: [icad_alyas_6_beds_image]
        },
        alYass2: {
            title: "AL YASS – STAFF ACCOMMODATION",
            description: "High-density residential zone with multiple flat configurations designed for maximum occupancy and efficient space planning.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                {
                    title: "Capacity",
                    value: "15,416 Staff"
                },
                {
                    title: "Buildings",
                    value: "9 Buildings"
                },
                {
                    title: "Unit Type",
                    value: "Mixed Flat Types (S1–S6)"
                },
                {
                    title: "Floors",
                    value: "Multi-Floor Residential Buildings"
                }
            ],
            images: [icad_alyas_6_beds_image]
        },
        alMurjan: {
            title: "AL MURJAN – STAFF ACCOMMODATION",
            description: "Residential cluster designed for balanced occupancy with organized flat distribution and access to shared services.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                {
                    title: "Capacity",
                    value: "1,440 Staff"
                },
                {
                    title: "Buildings",
                    value: "12 Buildings"
                },
                {
                    title: "Unit Type",
                    value: "Standard Flats"
                },
                {
                    title: "Floors",
                    value: "Multi-Floor Residential Buildings"
                }
            ],
            images: [
                icad_al_murjan_bed_room_studio_3_pax_image,
                icad_al_murjan_bed_room_studio_4_pax_image
            ]
        },
    }
}