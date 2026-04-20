import { useEffect, useState } from "react";
import type { CommunityData } from "../types/communities";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

interface CommunityModalProps {
    selectedCommunityData: CommunityData | null;
    showCommunityVideo: boolean;
    onShowVideo: () => void;
    onClose: () => void;
}

export default function CommunityModal({
    selectedCommunityData,
    showCommunityVideo,
    onShowVideo,
    onClose
}: CommunityModalProps) {

    const [openStage, setOpenStage] = useState<"idle" | "width" | "height">("idle");
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const slides = selectedCommunityData
        ? selectedCommunityData.images.map((img, index) => ({
            src: img,
            alt: `${selectedCommunityData.title} ${index + 1}`
        }))
        : [];

    useEffect(() => {
        if (selectedCommunityData) {
            setOpenStage("width");

            const timer = setTimeout(() => {
                setOpenStage("height");
            }, 180);

            return () => clearTimeout(timer);
        } else {
            setOpenStage("idle");
        }
    }, [selectedCommunityData]);

    useEffect(() => {
        if (lightboxOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [lightboxOpen]);

    if (!selectedCommunityData) return null;

    return (
        <div
            className={`
            fixed inset-0 z-30 flex items-center justify-center p-4 backdrop-blur-md
            transition-opacity duration-300
            ${openStage === "idle" ? "opacity-0 pointer-events-none" : "opacity-100 bg-black/80"}
            `}
        >
            <div
                className={`
                relative w-full max-w-6xl max-h-[92vh] flex flex-col rounded-[2.5rem] border border-white/10 
                bg-(--primary-color)/50 shadow-[0_0_50px_rgba(0,0,0,0.5)] text-white
                origin-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]

                ${openStage === "idle" && "scale-x-0 scale-y-0 opacity-0"}
                ${openStage === "width" && "scale-x-100 scale-y-0 opacity-100"}
                ${openStage === "height" && "scale-x-100 scale-y-100 opacity-100"}
                `}
            >
                {/* HEADER - Sticky or fixed at top of modal */}
                <div className="sticky top-0 z-20 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between p-8 backdrop-blur-xl border-b border-white/5 rounded-t-[2.5rem]">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                            {selectedCommunityData.title}
                        </h1>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <button
                            type="button"
                            className="
                            rounded-full 
                            bg-(--third-color) 
                            px-8 py-3.5 
                            text-sm font-bold text-white 
                            transition-all duration-300
                            hover:bg-(--third-color)/80 hover:scale-105 active:scale-95
                            cursor-pointer shadow-[0_0_20px_rgba(255,233,108,0.2)]
                            "
                            onClick={onShowVideo}
                        >
                            {showCommunityVideo ? "View Gallery" : "Watch Cinematic"}
                        </button>

                        <button
                            type="button"
                            className="
                            rounded-full 
                            border border-white/20 
                            bg-white/5
                            px-8 py-3.5 
                            text-sm font-bold text-white 
                            transition-all duration-300
                            hover:bg-white/10 hover:border-white/40
                            cursor-pointer
                            "
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>

                {/* SCROLLABLE CONTENT AREA */}
                <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                    {showCommunityVideo ? (
                        <div className="aspect-video w-full rounded-3xl border border-white/10 bg-black/80 overflow-hidden shadow-2xl">
                            <video
                                className="w-full h-full object-cover"
                                src={selectedCommunityData.video}
                                controls
                            />
                        </div>
                    ) : (
                        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
                            {selectedCommunityData.images.map((image, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-3xl border border-white/10 aspect-[16/10]"
                                >
                                    <img
                                        src={image}
                                        alt={`${selectedCommunityData.title} image ${index + 1}`}
                                        onClick={() => {
                                            setLightboxIndex(index);
                                            setLightboxOpen(true);
                                        }}
                                        className="
                                        h-full w-full object-cover 
                                        cursor-pointer
                                        transition-all duration-700 ease-out
                                        group-hover:scale-110
                                        "
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                                        <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium">
                                            View Fullscreen
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* LIGHTBOX */}
            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={lightboxIndex}
                slides={slides}
                plugins={[Thumbnails, Zoom, Fullscreen]}
                thumbnails={{
                    position: "bottom",
                    width: 120,
                    height: 80,
                    border: 1,
                    borderRadius: 12,
                    gap: 12,
                }}
                zoom={{
                    maxZoomPixelRatio: 3,
                    scrollToZoom: true,
                }}
                styles={{
                    container: { backgroundColor: "rgba(0,0,0,0.98)" },
                }}
            />
        </div>
    );
}