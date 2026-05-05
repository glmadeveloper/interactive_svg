import {
    aryam_al_mamourah_a_clinic_mamouraa_a_image,
    aryam_al_mamourah_a_dining_hall_mamouraa_a_image,
    aryam_al_mamourah_a_playground_image,
    aryam_al_mamourah_a_commercial_shop_retail_image,
    aryam_al_mamourah_a_tech_supervisor_block_image,
    aryam_al_mamourah_a_workers_blocks_b1_a_b1_b_b1_c_b2_a_b2_b_b2_c_image,
    aryam_al_mamourah_a_aryam_al_mamourah_a_staff_accommodation4_image,
} from "../exports/images";

import { communityVideo } from "../exports/videos";
import type { Maamorah_A_CommunityObject } from "../types/communities";

export const MAAMOURAH_A: Maamorah_A_CommunityObject = {
    title: "Maamorah A Community",
    video: communityVideo,
    communityLogoUrl: "https://sdeiragroup.ae/en",

    data: {
        clinicOffice: {
            title: "CLINIC / OFFICE",
            description: "Combined medical and administrative facility providing healthcare support and operational management services.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                { title: "Type", value: "Healthcare / Admin Facility" },
                { title: "Quantity", value: "1 Building" },
                { title: "Function", value: "Medical and Administrative Services" },
                { title: "Access", value: "Central Location" }
            ],
            images: [aryam_al_mamourah_a_clinic_mamouraa_a_image]
        },

        kitchenDining: {
            title: "KITCHEN & DINING",
            description: "Central facility for meal preparation and dining, designed to serve daily needs of all residents efficiently.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                { title: "Type", value: "Food Service Facility" },
                { title: "Quantity", value: "1 Main Facility" },
                { title: "Function", value: "Cooking and Dining" },
                { title: "Access", value: "Central Location" }
            ],
            images: [aryam_al_mamourah_a_dining_hall_mamouraa_a_image]
        },

        playGround: {
            title: "PLAYGROUND",
            description: "Outdoor recreational space designed for sports and physical activities, supporting resident well-being and community interaction.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                { title: "Type", value: "Recreational Facility" },
                { title: "Quantity", value: "1 Area" },
                { title: "Function", value: "Sports and Leisure" },
                { title: "Access", value: "Central Outdoor Space" }
            ],
            images: [
                aryam_al_mamourah_a_playground_image,
            ]
        },

        retail: {
            title: "RETAIL",
            description: "Small-scale retail facility providing daily essentials and convenience services for residents.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                { title: "Type", value: "Retail Facility" },
                { title: "Quantity", value: "1 Building" },
                { title: "Function", value: "Daily Goods and Services" },
                { title: "Access", value: "Central Location" }
            ],
            images: [aryam_al_mamourah_a_commercial_shop_retail_image]
        },

        techSupervisorBlock_A1: {
            title: "TECH / SUPERVISOR BLOCK",
            description: "Dedicated accommodation for supervisors and technical staff, designed with controlled occupancy and improved living standards.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                { title: "Type", value: "Residential Building" },
                { title: "Room Types", value: "Private / Shared Rooms" },
                { title: "Function", value: "Staff and Supervisor Housing" },
                { title: "Access", value: "Controlled Access" }
            ],
            images: [aryam_al_mamourah_a_tech_supervisor_block_image]
        },

        workersBlock_B1_B: {
            title: "WORKERS BLOCK",
            description: "Residential blocks designed for staff accommodation with efficient room layouts and shared living facilities. Supports structured occupancy with optimized space planning.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                { title: "Type", value: "Residential Building" },
                { title: "Room Types", value: "4x1 / 10x1" },
                { title: "Function", value: "Staff Accommodation" },
                { title: "Access", value: "Internal Roads and Walkways" }
            ],
            images: [
                aryam_al_mamourah_a_workers_blocks_b1_a_b1_b_b1_c_b2_a_b2_b_b2_c_image,
                aryam_al_mamourah_a_aryam_al_mamourah_a_staff_accommodation4_image,
            ]
        },

        workersBlock_B1_C: {
            title: "WORKERS BLOCK",
            description: "Residential blocks designed for staff accommodation with efficient room layouts and shared living facilities. Supports structured occupancy with optimized space planning.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                { title: "Type", value: "Residential Building" },
                { title: "Room Types", value: "4x1 / 10x1" },
                { title: "Function", value: "Staff Accommodation" },
                { title: "Access", value: "Internal Roads and Walkways" }
            ],
            images: [
                aryam_al_mamourah_a_workers_blocks_b1_a_b1_b_b1_c_b2_a_b2_b_b2_c_image,
                aryam_al_mamourah_a_aryam_al_mamourah_a_staff_accommodation4_image,
            ]
        },

        workersBlock_B2_B: {
            title: "WORKERS BLOCK",
            description: "Residential blocks designed for staff accommodation with efficient room layouts and shared living facilities. Supports structured occupancy with optimized space planning.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                { title: "Type", value: "Residential Building" },
                { title: "Room Types", value: "4x1 / 10x1" },
                { title: "Function", value: "Staff Accommodation" },
                { title: "Access", value: "Internal Roads and Walkways" }
            ],
            images: [
                aryam_al_mamourah_a_workers_blocks_b1_a_b1_b_b1_c_b2_a_b2_b_b2_c_image,
                aryam_al_mamourah_a_aryam_al_mamourah_a_staff_accommodation4_image,
            ]
        },

        workersBlock_B2_C: {
            title: "WORKERS BLOCK",
            description: "Residential blocks designed for staff accommodation with efficient room layouts and shared living facilities. Supports structured occupancy with optimized space planning.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                { title: "Type", value: "Residential Building" },
                { title: "Room Types", value: "4x1 / 10x1" },
                { title: "Function", value: "Staff Accommodation" },
                { title: "Access", value: "Internal Roads and Walkways" }
            ],
            images: [
                aryam_al_mamourah_a_workers_blocks_b1_a_b1_b_b1_c_b2_a_b2_b_b2_c_image,
                aryam_al_mamourah_a_aryam_al_mamourah_a_staff_accommodation4_image,
            ]
        }
    }
};