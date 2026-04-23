import {
    razeen_k_market_image,
    razeen_building_the_admin_image,
    razeen_razeen_stadiums_image
} from "../exports/images";
import { communityVideo } from "../exports/videos";
import type { Maamorah_B_CommunityObject } from "../types/communities";

export const MAAMORAH_B: Maamorah_B_CommunityObject = {
    title: "Maamorah B Community",
    video: communityVideo,
    communityLogoUrl: "https://icad.glmaagencyprojects.com/en/",
    data: {
        commercialShops: {
            title: "COMMERCIAL SHOPS",
            description: "Retail area providing essential goods and services to support daily needs of residents within the community.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                {
                    title: "Type",
                    value: "Retail Facility"
                },
                {
                    title: "Quantity",
                    value: "Multiple Units"
                },
                {
                    title: "Function",
                    value: "Shops and Services"
                },
                {
                    title: "Access",
                    value: "Central Location"
                }
            ],
            images: [razeen_k_market_image]
        },
        D_3_Buildings: {
            title: "D#3 BUILDING",
            description: "Residential building designed for staff accommodation with efficient layouts and shared living facilities. Supports structured occupancy and daily operations.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                {
                    title: "Type",
                    value: "Residential Building"
                },
                {
                    title: "Room Types",
                    value: "6x1"
                },
                {
                    title: "Function",
                    value: "Staff Accommodation"
                },
                {
                    title: "Access",
                    value: "Internal Roads"
                }
            ],
            images: [razeen_building_the_admin_image]
        },
        D_4_Buildings: {
            title: "D#4 BUILDING",
            description: "Residential block designed for organized staff housing with optimized room distribution and access to shared services.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                {
                    title: "Type",
                    value: "Residential Building"
                },
                {
                    title: "Room Types",
                    value: "6x1"
                },
                {
                    title: "Function",
                    value: "Staff Accommodation"
                },
                {
                    title: "Access",
                    value: "Internal Roads"
                }
            ],
            images: [razeen_building_the_admin_image]
        },
        D_5_Buildings: {
            title: "D#5 BUILDING",
            description: "Residential building dedicated for technicians and supervisors, offering controlled occupancy and enhanced accommodation standards.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                {
                    title: "Type",
                    value: "Residential Building"
                },
                {
                    title: "Room Types",
                    value: "6x1"
                },
                {
                    title: "Function",
                    value: "Staff and Supervisor Housing"
                },
                {
                    title: "Access",
                    value: "Controlled Access"
                }
            ],
            images: [razeen_building_the_admin_image]
        },
        playGround: {
            title: "PLAYGROUND",
            description: "Outdoor recreational area designed for sports and physical activities, supporting resident well-being and social interaction.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                {
                    title: "Type",
                    value: "Recreational Facility"
                },
                {
                    title: "Quantity",
                    value: "1 Area"
                },
                {
                    title: "Function",
                    value: "Sports and Leisure"
                },
                {
                    title: "Access",
                    value: "Central Outdoor Space"
                }
            ],
            images: [razeen_razeen_stadiums_image]
        },
    }
}