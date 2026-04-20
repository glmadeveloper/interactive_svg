import { useEffect, useState } from "react";
import type { CommunityData } from "../types/imagesByCommunity";

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
            fixed inset-0 z-30 flex items-center justify-center p-4 backdrop-blur-sm
            transition-opacity duration-300
            ${openStage === "idle" ? "opacity-0" : "opacity-100 bg-black/75"}
            `}
        >
            <div
                className={`
                w-full max-w-5xl space-y-6 rounded-4xl border border-white/10 
                bg-(--primary-color)/50 p-6 shadow-2xl text-white
                origin-center
                transition-all duration-300 ease-out

                ${openStage === "idle" && "scale-x-0 scale-y-0 opacity-0"}
                ${openStage === "width" && "scale-x-100 scale-y-0 opacity-100"}
                ${openStage === "height" && "scale-x-100 scale-y-100 opacity-100"}
                `}
            >
                {/* HEADER */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold">
                            {selectedCommunityData.title}
                        </h1>
                        <p className="mt-2 text-sm text-slate-300">
                            Images and video for this community come from the shared constant data.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <button
                            type="button"
                            className="
                            rounded-full 
                            bg-(--third-color) 
                            px-5 py-3 
                            text-sm font-semibold text-slate-100 
                            transition 
                            hover:bg-(--third-color)/70 
                            cursor-pointer
                            "
                            onClick={onShowVideo}
                        >
                            Show {showCommunityVideo ? "Images" : "Video"}
                        </button>

                        <button
                            type="button"
                            className="
                            rounded-full 
                            border border-white/30 
                            bg-transparent 
                            px-5 py-3 
                            text-sm font-semibold text-white 
                            transition 
                            hover:border-white 
                            cursor-pointer
                            "
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>

                {/* CONTENT */}
                {showCommunityVideo ? (
                    <div className="rounded-3xl border border-white/10 bg-black/80 p-4">
                        <video
                            className="w-full rounded-3xl bg-black object-cover"
                            src={selectedCommunityData.video}
                            controls
                        />
                    </div>
                ) : (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {selectedCommunityData.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${selectedCommunityData.title} image ${index + 1}`}
                                onClick={() => {
                                    setLightboxIndex(index);
                                    setLightboxOpen(true);
                                }}
                                className="
                                h-52 w-full rounded-3xl object-cover 
                                border border-white/10
                                cursor-pointer
                                transition-all duration-300
                                hover:scale-105 hover:shadow-xl
                                "
                            />
                        ))}
                    </div>
                )}
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
                    width: 80,
                    height: 60,
                    border: 1,
                    borderRadius: 6,
                    gap: 8,
                }}
                zoom={{
                    maxZoomPixelRatio: 3,
                    scrollToZoom: true,
                }}
                styles={{
                    container: { backgroundColor: "rgba(0,0,0,0.95)" },
                }}
            />
        </div>
    );
}