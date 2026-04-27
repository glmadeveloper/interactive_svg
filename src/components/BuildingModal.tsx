import { useEffect, useState } from "react";
import type { CommunityData } from "../types/communities";
import {
    X,
    Maximize2,
} from "lucide-react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import { buildingsIcon, roomTypesIcon, unitTypeIcon, usersIcon } from "../exports/icons";

interface CommunityModalProps {
    selectedBuildingData: CommunityData | null;
    onClose: () => void;
}

const propertyIcons: Record<string, any> = {
    "Capacity": usersIcon,
    "Buildings": buildingsIcon,
    "Unit Type": unitTypeIcon,
    "Floors": roomTypesIcon,
    "Type": unitTypeIcon,
    "Quantity": buildingsIcon,
    "Function": roomTypesIcon,
    "Room Types": unitTypeIcon,
    "Access": usersIcon
};

export default function BuildingModal({
    selectedBuildingData,
    onClose
}: CommunityModalProps) {
    const [openStage, setOpenStage] = useState<"idle" | "width" | "height">("idle");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const slides = selectedBuildingData
        ? selectedBuildingData.images.map((img, index) => ({
            src: img,
            thumbnail: img,
            alt: `${selectedBuildingData.title} ${index + 1}`
        }))
        : [];

    useEffect(() => {
        if (selectedBuildingData) {
            setOpenStage("width");
            const timer = setTimeout(() => {
                setOpenStage("height");
            }, 180);
            return () => clearTimeout(timer);
        } else {
            setOpenStage("idle");
        }
    }, [selectedBuildingData]);

    useEffect(() => {
        if (lightboxOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
        };
    }, [lightboxOpen]);

    if (!selectedBuildingData) return null;

    // ✅ handle outside click
    const handleOverlayClick = () => {
        if (!lightboxOpen) {
            onClose();
        }
    };

    const renderImageGrid = () => {
        const images = selectedBuildingData.images;
        const count = images.length;

        const ImageItem = ({ src, index, className }: { src: string; index: number; className?: string }) => (
            <div
                className={`group relative overflow-hidden cursor-pointer  ${className}`}
                onClick={() => {
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                }}
            >
                <img
                    src={src}
                    alt={`Gallery ${index}`}
                    className="w-full h-full transition-transform object-cover duration-500"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="text-white w-6 h-6 drop-shadow-md" />
                </div>
            </div>
        );

        const FloorPlanItem = ({ src, index, className }: { src: string; index: number; className?: string }) => (
            <div
                className={`group relative overflow-hidden cursor-pointer`}
                onClick={() => {
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                }}
            >
                <img
                    src={src}
                    alt="Floor Plan"
                    className={`w-full h-full transition-transform duration-500 object-cover ${className}`}
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="text-white w-6 h-6 drop-shadow-md" />
                </div>
            </div>
        );

        switch (count) {
            case 1:
                return (
                    <div className="w-full">
                        <ImageItem src={images[0]} index={0} className="w-full h-[492px]" />
                    </div>
                );
            case 2:
                return (
                    <div className="grid grid-cols-[1.5fr_1fr] gap-[8px] h-[381px]">
                        <ImageItem src={images[0]} index={0} className="h-full" />
                        <FloorPlanItem src={images[1]} index={1} className="h-full" />
                    </div>
                );
            case 3:
                return (
                    <div className="grid grid-cols-[1.5fr_1fr] h-[381px]">
                        <div className="grid grid-cols-2 gap-[8px]">
                            <ImageItem src={images[0]} index={0} className="h-full" />
                            <ImageItem src={images[1]} index={1} className="h-full" />
                        </div>
                        <FloorPlanItem src={images[2]} index={2} className="h-full" />
                    </div>
                );
            case 4:
                return (
                    <div className="grid grid-cols-[2fr_1fr] gap-[8px]">

                        {/* LEFT */}
                        <ImageItem
                            src={images[0]}
                            index={0}
                            className="h-[381px]"
                        />

                        {/* RIGHT */}
                        <div className="grid grid-rows-3 gap-[8px] h-full">
                            <ImageItem src={images[1]} index={1} className="h-[120px]" />
                            <ImageItem src={images[2]} index={2} className="h-[120px]" />
                            <ImageItem src={images[3]} index={3} className="h-[120px]" />
                        </div>

                    </div>
                );
            case 5:
                return (
                    <div className="grid grid-cols-[1.5fr_0.8fr] gap-[8px] items-stretch">
                        <div className="grid grid-rows-[2fr_1fr] gap-[8px]">
                            <ImageItem src={images[0]} index={0} className="aspect-[593/274]" />
                            <div className="grid grid-cols-3 gap-x-3">
                                <ImageItem src={images[1]} index={1} className="aspect-[191/129]" />
                                <ImageItem src={images[2]} index={2} className="aspect-[191/129]" />
                                <ImageItem src={images[3]} index={3} className="aspect-[191/129]" />
                            </div>
                        </div>
                        <FloorPlanItem src={images[4]} index={4} className="h-full" />
                    </div>
                );
            default:
                return (
                    <div className="grid grid-cols-3 gap-3 h-full overflow-y-auto pr-2 custom-scrollbar">
                        {images.map((img, idx) => (
                            <ImageItem key={idx} src={img} index={idx} className="aspect-square" />
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
                onClick={(e) => e.stopPropagation()} // ✅ prevent inside clicks from closing
                className={`
                relative ml-[63px] w-[974px] h-[1083px] flex flex-col rounded-[2.5rem] 
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

                <div className="flex-1 overflow-y-auto p-10 custom-scrollbar-minimal">
                    <div className="mb-12">
                        <h1 className="font-['DIN_Next_LT_Arabic'] font-bold text-[54px] leading-[100%] tracking-[0%] uppercase text-(--primary-color)">
                            {selectedBuildingData.title}
                        </h1>
                    </div>

                    <div className="mb-8">
                        <p className="font-din font-normal text-[23px] leading-[35px] tracking-[0%] text-[#666] max-w-[90%]">
                            {selectedBuildingData.description}
                        </p>
                    </div>

                    <div className="mb-8 overflow-hidden relative">
                        <div>
                            {renderImageGrid()}
                        </div>
                    </div>
                    <hr className="mt-[49px] mb-[39px] border-0 border-t-2 border-[#58595B4D]" />
                    <div>
                        {selectedBuildingData.category_name !== "" && (
                            <h3 className="font-din font-bold text-[32px] leading-[100%] tracking-[0%] uppercase text-[#58595B] mb-8">
                                {selectedBuildingData.category_name || "Properties"}
                            </h3>
                        )}
                        {selectedBuildingData.properties.length > 0 && (
                            <div className="grid grid-cols-2 gap-3">
                                {selectedBuildingData.properties.map((prop, idx) => {
                                    const icon = propertyIcons[prop.title];
                                    return (
                                        <div
                                            key={idx}
                                            className="flex items-center justify-between p-4 bg-white rounded-xl border border-black/5 hover:border-(--primary-color)/20 transition-all group"
                                        >
                                            <div className="flex gap-3 flex-col">
                                                <span className="font-din font-medium text-[14px] leading-[100%] tracking-[0%] uppercase text-[#aaa] mb-0.5">
                                                    {prop.title}
                                                </span>
                                                <span className="font-din font-medium text-[27px] leading-[100%] tracking-[0%] uppercase text-[#333] group-hover:text-(--primary-color) transition-colors">
                                                    {prop.value}
                                                </span>
                                            </div>
                                            <div className="p-2 rounded-lg">
                                                <img src={icon} className="size-[44px]" alt="" />
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