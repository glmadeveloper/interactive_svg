import {
    razeen_mugharaq_image,
    razeen_clinic_image,
    mougharaq_kitchen_1_image,
    mougharaq_mosque_1_image,
    mougharaq_supermarket_1_image,
    mougharaq_staff_ameneties_1_image,
    mougharaq_staff_accommodation_image,
    mougharaq_engineers_manager_accomodation_image,
    mougharaq_indoor_1_image,
    mougharaq_dining_hall_1_image,
    mougharaq_technicians_accommodation_image,
    mougharaq_running_track_1_image,
} from "../exports/images";

import { communityVideo } from "../exports/videos";
import type { MugharraqCommunityObject } from "../types/communities";

export const MUGHARRAQ: MugharraqCommunityObject = {
    title: "Mugharraq Community",
    video: communityVideo,
    communityLogoUrl: "https://icad.glmaagencyprojects.com/en/",
    data: {
        techniciansAccommodation: {
            title: "TECHNICIANS ACCOMMODATION",
            description: "Accommodation unit designed for technical staff, providing organized space with private facilities and efficient layout for daily living.",
            category_name: "UNIT OVERVIEW",
            properties: [
                { title: "Room Types", value: "30 Sqm" },
                { title: "Toilet", value: "Ensuite" },
                { title: "Floors", value: "G+5 Building" },
                { title: "Capacity", value: "750 Person" }
            ],
            images: [mougharaq_technicians_accommodation_image]
        },

        supervisorsAccommodation: {
            title: "SUPERVISORS ACCOMMODATION",
            description: "Accommodation unit designed for supervisors, offering organized space with private facilities and controlled occupancy for improved living standards.",
            category_name: "UNIT OVERVIEW",
            properties: [
                { title: "Room Types", value: "30 Sqm" },
                { title: "Toilet", value: "Ensuite" },
                { title: "Floors", value: "G+5 Building" },
                { title: "Capacity", value: "650 Person" }
            ],
            images: [razeen_mugharaq_image]
        },

        engineersManagersAccommodation: {
            title: "ENGINEERS / MANAGERS ACCOMMODATION",
            description: "Premium accommodation unit designed for managerial staff, offering larger space, private facilities, and enhanced comfort for long-term stay.",
            category_name: "UNIT OVERVIEW",
            properties: [
                { title: "Room Types", value: "36 Sqm" },
                { title: "Toilet", value: "Ensuite" },
                { title: "Floors", value: "G+5 Building" },
                { title: "Capacity", value: "100 Person" }
            ],
            images: [mougharaq_engineers_manager_accomodation_image]
        },

        staffAccommodation: {
            title: "STAFF ACCOMMODATION",
            description: "High-density accommodation unit designed for workforce housing with efficient space usage and shared facilities. Optimized for maximum occupancy.",
            category_name: "UNIT OVERVIEW",
            properties: [
                { title: "Room Types", value: "25.5 Sqm" },
                { title: "Toilet", value: "Shared" },
                { title: "Floors", value: "G+2 Building" },
                { title: "Capacity", value: "3600 Person" }
            ],
            images: [mougharaq_staff_accommodation_image]
        },

        swimmingPool: {
            title: "SWIMMING POOL",
            description: "Outdoor recreational facility designed for leisure and relaxation. Provides a controlled environment supporting resident well-being and daily use.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                { title: "Type", value: "Recreational Facility" },
                { title: "Quantity", value: "1 Area" },
                { title: "Function", value: "Leisure and Recreation" },
                { title: "Access", value: "Central Outdoor Area" }
            ],
            images: [razeen_mugharaq_image]
        },

        mosque: {
            title: "MOSQUE",
            description: "Dedicated prayer facility designed to serve the community with accessible location and adequate space for daily worship.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                { title: "Type", value: "Religious Facility" },
                { title: "Quantity", value: "1 Building" },
                { title: "Function", value: "Prayer and Worship" },
                { title: "Access", value: "Central Location" }
            ],
            images: [mougharaq_mosque_1_image]
        },

        indoorRecreationsArea: {
            title: "INDOOR RECREATION AREA",
            description: "Indoor leisure facility designed to provide recreational activities including games, fitness, and social interaction within a controlled environment.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                { title: "Type", value: "Recreational Facility" },
                { title: "Quantity", value: "1 Area" },
                { title: "Function", value: "Indoor Activities and Leisure" },
                { title: "Access", value: "Central Indoor Space" }
            ],
            images: [mougharaq_indoor_1_image]
        },

        supermarket: {
            title: "SUPERMARKET",
            description: "Retail facility providing groceries and daily essentials to support resident needs within the community.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                { title: "Type", value: "Retail Facility" },
                { title: "Quantity", value: "1 Building" },
                { title: "Function", value: "Grocery and Daily Needs" },
                { title: "Access", value: "Central Location" }
            ],
            images: [mougharaq_supermarket_1_image]
        },

        clinic: {
            title: "CLINIC",
            description: "Healthcare facility providing medical services and primary care support for residents.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                { title: "Type", value: "Healthcare Facility" },
                { title: "Quantity", value: "1 Building" },
                { title: "Function", value: "Medical Services" },
                { title: "Access", value: "Central Location" }
            ],
            images: [razeen_clinic_image, razeen_mugharaq_image]
        },

        staffAmenities: {
            title: "STAFF AMENITIES",
            description: "Outdoor facility designed to support staff well-being with sports courts, activity areas, and open spaces for daily use and recreation.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                { title: "Type", value: "Recreational Facility" },
                { title: "Quantity", value: "Multiple Areas" },
                { title: "Function", value: "Sports and Outdoor Activities" },
                { title: "Access", value: "Central Outdoor Area" }
            ],
            images: [mougharaq_staff_ameneties_1_image]
        },

        centralKitchen: {
            title: "CENTRAL KITCHEN",
            description: "Large-scale food preparation facility designed to support daily meal production and distribution for the entire community. Operates with high-capacity equipment and controlled processes.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                { title: "Type", value: "Food Service Facility" },
                { title: "Quantity", value: "1 Main Facility" },
                { title: "Function", value: "Meal Preparation and Distribution" },
                { title: "Access", value: "Controlled Access" }
            ],
            images: [mougharaq_kitchen_1_image]
        },

        diningHall: {
            title: "DINING HALL",
            description: "Dedicated facility for meal service and dining, designed to accommodate large numbers of residents in an organized and efficient environment.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                { title: "Type", value: "Food Service Facility" },
                { title: "Quantity", value: "1 Main Hall" },
                { title: "Function", value: "Dining and Meal Service" },
                { title: "Access", value: "Central Location" }
            ],
            images: [mougharaq_dining_hall_1_image]
        },

        runningTrack: {
            title: "RUNNING TRACK",
            description: "Dedicated outdoor track designed for running, jogging, and fitness activities, supporting daily exercise and physical well-being.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                { title: "Type", value: "Recreational Facility" },
                { title: "Quantity", value: "1 Track" },
                { title: "Function", value: "Running and Fitness" },
                { title: "Access", value: "Outdoor Area" }
            ],
            images: [mougharaq_running_track_1_image]
        }
    }
};