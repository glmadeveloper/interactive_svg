import {
    razeen_mugharaq_image,
    razeen_clinic_image,
    mougharaq_kitchen_1,
    mougharaq_kitchen_2,
    mougharaq_mosque_1,
    mougharaq_mosque_2,
    mougharaq_supermarket_1,
    mougharaq_supermarket_2,
    mougharaq_staff_amenities_1,
    mougharaq_staff_amenities_2,
    mougharaq_staff_accommodation,
    mougharaq_engineers_manager_accomodation,
    mougharaq_indoor_1,
    mougharaq_indoor_2,
    mougharaq_dining_hall_1,
    mougharaq_dining_hall_2,
    mougharaq_technicians_accommodation,
    mougharaq_running_track_1,
    mougharaq_running_track_2
} from "../exports/images";
import { communityVideo } from "../exports/videos";
import type { MugharraqCommunityObject } from "../types/communities";

export const MUGHARRAQ: MugharraqCommunityObject = {
    title: "Mugharraq Community",
    video: communityVideo,
    communityLogoUrl: "https://icad.glmaagencyprojects.com/en/",
    data: {
        centralKitchen: {
            title: "CENTRAL KITCHEN",
            description: "Large-scale kitchen facility designed for high-volume meal preparation to support the community's dining needs.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                {
                    title: "Type",
                    value: "Food Service Facility"
                },
                {
                    title: "Quantity",
                    value: "1 Building"
                },
                {
                    title: "Function",
                    value: "Meal Preparation"
                },
                {
                    title: "Access",
                    value: "Central Location"
                }
            ],
            images: [
                mougharaq_kitchen_1,
                mougharaq_kitchen_2,
            ]
        },
        clinic: {
            title: "CLINIC",
            description: "On-site medical facility providing basic healthcare support for residents.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                {
                    title: "Type",
                    value: "Healthcare Facility"
                },
                {
                    title: "Quantity",
                    value: "1 Building"
                },
                {
                    title: "Function",
                    value: "Medical Consultation"
                },
                {
                    title: "Access",
                    value: "Central Location"
                }
            ],
            images: [razeen_clinic_image, razeen_mugharaq_image]
        },
        diningHall: {
            title: "DINING HALL",
            description: "Spacious dining area providing a comfortable environment for residents to consume meals.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                {
                    title: "Type",
                    value: "Food Service Facility"
                },
                {
                    title: "Quantity",
                    value: "1 Building"
                },
                {
                    title: "Function",
                    value: "Dining"
                },
                {
                    title: "Access",
                    value: "Central Location"
                }
            ],
            images: [
                mougharaq_dining_hall_1,
                mougharaq_dining_hall_2,
            ]
        },
        engineersManagersAccommodation: {
            title: "Engineers & Managers Accommodation",
            category_name: "BUILDING OVERVIEW",
            description: "Premium residential units designed for engineers and management staff, offering enhanced privacy and comfort.",
            properties: [
                {
                    title: "Type",
                    value: "Residential"
                },
                {
                    title: "Quantity",
                    value: "Multiple Blocks"
                },
                {
                    title: "Function",
                    value: "Staff Housing"
                },
                {
                    title: "Access",
                    value: "Controlled"
                }
            ],
            images: [mougharaq_engineers_manager_accomodation]
        },
        indoorRecreationsArea: {
            title: "INDOOR RECREATION",
            description: "Facility for indoor sports and recreational activities, supporting resident well-being and social engagement.",
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
                    value: "Sports and Leisure"
                },
                {
                    title: "Access",
                    value: "Central Location"
                }
            ],
            images: [
                mougharaq_indoor_1,
                mougharaq_indoor_2,
            ]
        },
        mosque: {
            title: "MOSQUE",
            description: "Dedicated prayer facility serving the community's spiritual needs.",
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
            images: [mougharaq_mosque_1, mougharaq_mosque_2]
        },
        runningTrack: {
            title: "RUNNING TRACK",
            description: "Outdoor infrastructure designed for jogging and walking, promoting a healthy lifestyle within the community.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                {
                    title: "Type",
                    value: "Recreational infrastructure"
                },
                {
                    title: "Quantity",
                    value: "1 Track"
                },
                {
                    title: "Function",
                    value: "Exercise and Fitness"
                },
                {
                    title: "Access",
                    value: "Common Areas"
                }
            ],
            images: [
                mougharaq_running_track_1,
                mougharaq_running_track_2,
            ]
        },
        staffAccommodation: {
            title: "STAFF ACCOMMODATION",
            description: "High-density residential buildings offering efficient layouts and access to shared services.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                {
                    title: "Capacity",
                    value: "Standardized"
                },
                {
                    title: "Buildings",
                    value: "Multiple Blocks"
                },
                {
                    title: "Unit Type",
                    value: "Staff Housing"
                },
                {
                    title: "Floors",
                    value: "Multi-Floor"
                }
            ],
            images: [mougharaq_staff_accommodation]
        },
        staffAmenities: {
            title: "Staff Amenities",
            description: "Various service and support facilities for the community residents.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                {
                    title: "Type",
                    value: "Support"
                },
                {
                    title: "Quantity",
                    value: "Various"
                },
                {
                    title: "Function",
                    value: "Daily Services"
                },
                {
                    title: "Access",
                    value: "Distributed"
                }
            ],
            images: [
                mougharaq_staff_amenities_1,
                mougharaq_staff_amenities_2,
            ]
        },
        supermarket: {
            title: "SUPERMARKET",
            description: "Retail facility providing daily essentials and groceries for residents.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                {
                    title: "Type",
                    value: "Retail"
                },
                {
                    title: "Quantity",
                    value: "1 Building"
                },
                {
                    title: "Function",
                    value: "Shopping"
                },
                {
                    title: "Access",
                    value: "Central Location"
                }
            ],
            images: [mougharaq_supermarket_1, mougharaq_supermarket_2]
        },
        supervisorsAccommodation: {
            title: "Supervisors Accommodation",
            description: "Residential units tailored for supervisors, providing a higher standard of accommodation and privacy.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                {
                    title: "Type",
                    value: "Residential"
                },
                {
                    title: "Quantity",
                    value: "Multiple Blocks"
                },
                {
                    title: "Function",
                    value: "Supervisor Housing"
                },
                {
                    title: "Access",
                    value: "Controlled"
                }
            ],
            images: [razeen_mugharaq_image]
        },
        swimmingPool: {
            title: "SWIMMING POOL",
            description: "Facility for swimming and leisure activities, providing a high-end recreational experience.",
            category_name: "FACILITY OVERVIEW",
            properties: [
                {
                    title: "Type",
                    value: "Recreational Facility"
                },
                {
                    title: "Quantity",
                    value: "1 Pool"
                },
                {
                    title: "Function",
                    value: "Leisure and Exercise"
                },
                {
                    title: "Access",
                    value: "Common Outdoor Area"
                }
            ],
            images: [razeen_mugharaq_image]
        },
        techniciansAccommodation: {
            title: "Technicians Accommodation",
            description: "Residential units designed specifically for technical staff, combining functionality with optimized living space.",
            category_name: "BUILDING OVERVIEW",
            properties: [
                {
                    title: "Type",
                    value: "Residential"
                },
                {
                    title: "Quantity",
                    value: "Multiple Blocks"
                },
                {
                    title: "Function",
                    value: "Technician Housing"
                },
                {
                    title: "Access",
                    value: "Controlled"
                }
            ],
            images: [mougharaq_technicians_accommodation]
        }
    }
}