import {
    razeen_building_the_admin_image,
    razeen_clinic_image,
    razeen_k_market_image,
    razeen_dining_hall_image,
    razeen_kitchen_image,
    razeen_mosq_image,
    razeen_razeen_stadiums_image,
    razeen_aryam_razeen_10_beds_image,
    razeen_sadeem_aryam_sadeem_10_image,
    razeen_aryam_razeen_4_beds_image,
    razeen_sadeem_aryam_sadeem_4_image,
    razeen_aryam_razeen_6_beds_image,
    razeen_sadeem_aryam_sadeem_6_image
} from "../exports/images";
import { communityVideo } from "../exports/videos";
import type { RazeenCommunityObject } from "../types/communities";

export const RAZEEN: RazeenCommunityObject = {
    title: "Razeen Community",
    video: communityVideo,
    communityLogoUrl: "https://aryam.glmaagencyprojects.com/en/",
    data: {
        administration: {
            title: "ADMINISTRATION",
            description: "Central management facility handling operations, coordination, and support services for the entire accommodation.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                {
                    title: "Type",
                    value: "Administrative Facility"
                },
                {
                    title: "Quantity",
                    value: "1 Buildings"
                },
                {
                    title: "Function",
                    value: "Operations and Management"
                },
                {
                    title: "Access",
                    value: "Controlled Access within Site"
                }
            ],
            images: [razeen_building_the_admin_image]
        },
        clinic: {
            title: "CLINIC",
            description: "On-site medical facility providing basic healthcare support for residents. Designed for quick access and efficient service within the accommodation community.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                {
                    title: "Type",
                    value: "Healthcare Facility"
                },
                {
                    title: "Quantity",
                    value: "1 Buildings"
                },
                {
                    title: "Function",
                    value: "Medical Consultation and First Aid"
                },
                {
                    title: "Access",
                    value: "Central Location within Site"
                }
            ],
            images: [razeen_clinic_image]
        },
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
        kitchen_and_dining: {
            title: "DINING & KITCHEN",
            description: "Centralized dining and food preparation facilities designed to serve large numbers of residents efficiently. Supports daily meal operations across all clusters.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                {
                    title: "Type",
                    value: "Food Service Facility"
                },
                {
                    title: "Quantity",
                    value: "2 Kitchen & Dining Blocks + 2 Dining Halls"
                },
                {
                    title: "Function",
                    value: "Meal Preparation and Dining"
                },
                {
                    title: "Access",
                    value: "Distributed Across Site for Easy Reach"
                }
            ],
            images: [razeen_dining_hall_image, razeen_kitchen_image]
        },
        mosque: {
            title: "MOSQUE",
            description: "Dedicated prayer facility serving the residential community. Designed to accommodate daily use with accessible location across the site.",
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
                    value: "Centrally Positioned for All Clusters"
                }
            ],
            images: [razeen_mosq_image]
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
        type_A_10_buildings: {
            title: "TYPE A – STAFF ACCOMMODATION",
            description: "High-capacity residential buildings designed for large workforce accommodation. Type A units combine multiple room configurations with efficient layouts and access to shared services.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                {
                    title: "Capacity",
                    value: "17,880 Staff"
                },
                {
                    title: "Buildings",
                    value: "10 Buildings"
                },
                {
                    title: "Room Types",
                    value: "4x1 / 6x1 / 10x1"
                },
                {
                    title: "Floors",
                    value: "G+2 Residential Buildings"
                }
            ],
            images: [razeen_aryam_razeen_10_beds_image, razeen_sadeem_aryam_sadeem_10_image]
        },
        type_B_2_buildings: {
            title: "TYPE B – STAFF ACCOMMODATION",
            description: "Compact residential buildings designed for moderate occupancy. Type B units provide efficient layouts with standardized rooms and access to shared services across the community.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                {
                    title: "Capacity",
                    value: "2,616 Staff"
                },
                {
                    title: "Buildings",
                    value: "2 Buildings"
                },
                {
                    title: "Room Types",
                    value: "4x1 / 6x1 / 10x1"
                },
                {
                    title: "Floors",
                    value: "G+2 Residential Buildings"
                }
            ],
            images: [razeen_aryam_razeen_4_beds_image, razeen_sadeem_aryam_sadeem_4_image]
        },
        type_D_8_buildings: {
            title: "TYPE D – STAFF ACCOMMODATION",
            description: "Medium-capacity residential buildings designed for balanced occupancy. Type D units offer flexible room configurations with efficient layouts and access to shared facilities.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                {
                    title: "Capacity",
                    value: "5,232 Staff"
                },
                {
                    title: "Buildings",
                    value: "8 Buildings"
                },
                {
                    title: "Room Types",
                    value: "4x1 / 6x1 / 10x1"
                },
                {
                    title: "Floors",
                    value: "G+2 Residential Buildings"
                }
            ],
            images: [razeen_aryam_razeen_6_beds_image, razeen_sadeem_aryam_sadeem_6_image]
        }
    }
}