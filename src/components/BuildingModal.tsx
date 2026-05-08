import { useEffect, useState } from "react";
import type { CommunityData } from "../types/communities";
import { X, Maximize2 } from "lucide-react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

import {
    buildingsIcon,
    roomTypesIcon,
    unitTypeIcon,
    usersIcon,
} from "../exports/icons";

interface CommunityModalProps {
    selectedBuildingData: CommunityData | null;
    onClose: () => void;
}

const propertyIcons: Record<string, any> = {
    Capacity: usersIcon,
    Buildings: buildingsIcon,
    "Unit Type": unitTypeIcon,
    Floors: roomTypesIcon,
    Type: unitTypeIcon,
    Quantity: buildingsIcon,
    Function: roomTypesIcon,
    "Room Types": unitTypeIcon,
    Access: usersIcon,
};

export default function BuildingModal({
    selectedBuildingData,
    onClose,
}: CommunityModalProps) {
    const [openStage, setOpenStage] = useState<"idle" | "width" | "height">("idle");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const slides = selectedBuildingData
        ? selectedBuildingData.images.map((img, index) => ({
              src: img,
              thumbnail: img,
              alt: `${selectedBuildingData.title} ${index + 1}`,
          }))
        : [];

    useEffect(() => {
        if (selectedBuildingData) {
            setOpenStage("width");

            const timer = setTimeout(() => {
                setOpenStage("height");
            }, 180);

            return () => clearTimeout(timer);
        }

        setOpenStage("idle");
    }, [selectedBuildingData]);

    useEffect(() => {
        const shouldLockScroll = !!selectedBuildingData || lightboxOpen;

        if (shouldLockScroll) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [selectedBuildingData, lightboxOpen]);

    if (!selectedBuildingData) return null;

    const handleOverlayClick = () => {
        if (!lightboxOpen) {
            onClose();
        }
    };

    const ImageItem = ({
        src,
        index,
        className = "",
        imgClassName = "w-full h-full object-cover",
    }: {
        src: string;
        index: number;
        className?: string;
        imgClassName?: string;
    }) => (
        <div
            className={`group relative overflow-hidden cursor-pointer ${className}`}
            onClick={() => {
                setLightboxIndex(index);
                setLightboxOpen(true);
            }}
        >
            <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className={`transition-transform duration-500 ${imgClassName}`}
            />

            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="text-white w-6 h-6 drop-shadow-md" />
            </div>
        </div>
    );

    const FloorPlanItem = ({
        src,
        index,
        className = "",
    }: {
        src: string;
        index: number;
        className?: string;
    }) => (
        <div
            className={`group relative overflow-hidden cursor-pointer ${className}`}
            onClick={() => {
                setLightboxIndex(index);
                setLightboxOpen(true);
            }}
        >
            <img
                src={src}
                alt="Floor Plan"
                className="w-full h-full transition-transform duration-500 object-cover"
            />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="text-white w-6 h-6 drop-shadow-md" />
            </div>
        </div>
    );

    const renderImageGrid = () => {
        const images = selectedBuildingData.images;
        const count = images.length;

        if (count === 0) return null;

        switch (count) {
            case 1:
                return (
                    <div className="w-full h-[clamp(260px,24.5vh,390px)] flex items-center justify-center overflow-hidden">
                        <ImageItem
                            src={images[0]}
                            index={0}
                            className="w-full h-full flex items-center justify-center"
                            imgClassName="h-full w-auto max-w-full object-contain mx-auto"
                        />
                    </div>
                );

            case 2:
                return (
                    <div className="grid grid-cols-[1.5fr_1fr] gap-[8px] h-[clamp(260px,24.5vh,390px)]">
                        <ImageItem
                            src={images[0]}
                            index={0}
                            className="h-full"
                        />

                        <FloorPlanItem
                            src={images[1]}
                            index={1}
                            className="h-full"
                        />
                    </div>
                );

            case 3:
                return (
                    <div className="grid grid-cols-[1.5fr_1fr] gap-[8px] h-[clamp(260px,24.5vh,390px)]">
                        <div className="grid grid-cols-2 gap-[8px] h-full">
                            <ImageItem
                                src={images[0]}
                                index={0}
                                className="h-full"
                            />

                            <ImageItem
                                src={images[1]}
                                index={1}
                                className="h-full"
                            />
                        </div>

                        <FloorPlanItem
                            src={images[2]}
                            index={2}
                            className="h-full"
                        />
                    </div>
                );

            case 4:
                return (
                    <div className="grid grid-cols-[2fr_1fr] gap-[clamp(6px,0.3vw,8px)] h-[clamp(260px,24.5vh,390px)]">
                        <ImageItem
                            src={images[0]}
                            index={0}
                            className="h-full"
                        />

                        <div className="grid grid-rows-3 gap-[clamp(6px,0.3vw,8px)] h-full">
                            <ImageItem
                                src={images[1]}
                                index={1}
                                className="h-full"
                            />

                            <ImageItem
                                src={images[2]}
                                index={2}
                                className="h-full"
                            />

                            <ImageItem
                                src={images[3]}
                                index={3}
                                className="h-full"
                            />
                        </div>
                    </div>
                );

            case 5:
                return (
                    <div className="grid grid-cols-[1.5fr_0.8fr] gap-[clamp(6px,0.3vw,8px)] items-stretch h-[clamp(260px,24.5vh,390px)]">
                        <div className="grid grid-rows-[2fr_1fr] gap-[clamp(6px,0.3vw,8px)] h-full">
                            <ImageItem
                                src={images[0]}
                                index={0}
                                className="w-full h-full"
                            />

                            <div className="grid grid-cols-3 gap-x-[clamp(6px,0.45vw,12px)] h-full">
                                <ImageItem
                                    src={images[1]}
                                    index={1}
                                    className="w-full h-full"
                                />

                                <ImageItem
                                    src={images[2]}
                                    index={2}
                                    className="w-full h-full"
                                />

                                <ImageItem
                                    src={images[3]}
                                    index={3}
                                    className="w-full h-full"
                                />
                            </div>
                        </div>

                        <FloorPlanItem
                            src={images[4]}
                            index={4}
                            className="h-full"
                        />
                    </div>
                );

            default:
                return (
                    <div className="grid grid-cols-3 gap-3 max-h-[clamp(260px,24.5vh,390px)] overflow-y-auto pr-2 custom-scrollbar">
                        {images.map((img, idx) => (
                            <ImageItem
                                key={idx}
                                src={img}
                                index={idx}
                                className="aspect-square"
                            />
                        ))}
                    </div>
                );
        }
    };

    return (
        <div
            onClick={handleOverlayClick}
            className={`
                fixed inset-0 z-50 flex items-center p-4
                transition-all duration-300
                ${openStage === "idle" ? "opacity-0 pointer-events-none" : "opacity-100"}
            `}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
                    relative ml-[63px] w-[36.8vw] h-[72.5vh] min-h-0 flex flex-col rounded-[2.5rem]
                    bg-(--modal-primary-color) shadow-[0_20px_80px_rgba(0,0,0,0.2)] text-[#555]
                    origin-left transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                    overflow-hidden

                    ${openStage === "idle" && "translate-x-[-50px] opacity-0"}
                    ${openStage === "width" && "translate-x-[-20px] opacity-100"}
                    ${openStage === "height" && "translate-x-0 opacity-100"}
                `}
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-8 p-1.5 rounded-full hover:bg-black/5 transition-colors z-10 cursor-pointer"
                >
                    <X size={24} className="text-[#333]/60" />
                </button>

                <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-10 custom-scrollbar-minimal">
                    <div className="mb-[clamp(10px,0.64vw,17px)]">
                        <h1 className="font-['DIN_Next_LT_Arabic'] font-bold text-[clamp(32px,2.04vw,54px)] leading-[100%] tracking-[0%] uppercase text-(--primary-color)">
                            {selectedBuildingData.title}
                        </h1>
                    </div>

                    <div className="mb-[clamp(8px,0.45vw,12px)]">
                        <p className="font-din font-normal text-[clamp(16px,0.87vw,23px)] leading-[clamp(24px,1.32vw,35px)] tracking-[0%] text-[#666] max-w-[90%]">
                            {selectedBuildingData.description}
                        </p>
                    </div>

                    <div className="mb-8 overflow-hidden relative">
                        {renderImageGrid()}
                    </div>

                    <hr className="mt-[clamp(30px,1.85vw,49px)] mb-[clamp(24px,1.47vw,39px)] border-0 border-t-2 border-[#58595B4D]" />

                    <div>
                        {selectedBuildingData.category_name !== "" && (
                            <h3 className="font-din font-bold text-[clamp(22px,1.2vw,32px)] leading-[100%] tracking-[0%] uppercase text-[#58595B] mb-[clamp(20px,1.2vw,32px)]">
                                {selectedBuildingData.category_name || "Properties"}
                            </h3>
                        )}

                        {selectedBuildingData.properties.length > 0 && (
                            <div className="grid grid-cols-2 gap-[clamp(8px,0.45vw,12px)]">
                                {selectedBuildingData.properties.map((prop, idx) => {
                                    const icon = propertyIcons[prop.title] || unitTypeIcon;

                                    return (
                                        <div
                                            key={idx}
                                            className="flex items-center justify-between p-[clamp(10px,0.6vw,16px)] bg-white rounded-[clamp(10px,0.45vw,12px)] border border-black/5 hover:border-(--primary-color)/20 transition-all group"
                                        >
                                            <div className="flex gap-[clamp(4px,0.25vw,8px)] flex-col">
                                                <span className="font-din font-medium text-[clamp(10px,0.53vw,14px)] leading-[100%] tracking-[0%] uppercase text-[#aaa] mb-[clamp(1px,0.18vw,4px)]">
                                                    {prop.title}
                                                </span>

                                                <span className="font-din font-medium text-[clamp(18px,1.02vw,27px)] leading-[100%] tracking-[0%] uppercase text-[#333] group-hover:text-(--primary-color) transition-colors">
                                                    {prop.value}
                                                </span>
                                            </div>

                                            <div className="p-[clamp(4px,0.3vw,8px)] rounded-[clamp(6px,0.3vw,8px)]">
                                                <img
                                                    src={icon}
                                                    className="size-[clamp(28px,1.66vw,44px)]"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={lightboxIndex}
                slides={slides}
                plugins={[Thumbnails, Fullscreen, Zoom]}
                thumbnails={{
                    position: "bottom",
                    width: 80,
                    height: 60,
                    border: 1,
                    borderRadius: 6,
                    padding: 4,
                    gap: 8,
                }}
                zoom={{
                    maxZoomPixelRatio: 3,
                    scrollToZoom: true,
                }}
                styles={{
                    container: {
                        backgroundColor: "rgba(0, 0, 0, 0.95)",
                    },
                    thumbnailsContainer: {
                        backgroundColor: "black",
                    },
                }}
                controller={{
                    closeOnBackdropClick: true,
                }}
                on={{
                    view: ({ index }) => setLightboxIndex(index),
                }}
            />
        </div>
    );
}