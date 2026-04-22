import { X } from "lucide-react";

interface AboutModalProps {
    open: boolean;
    title: string;
    video: string;
    onClose: () => void;
}

export default function AboutModal({ open, title, video, onClose }: AboutModalProps) {
    if (!open) return null;

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-[900px] rounded-[2rem] bg-(--modal-primary-color) p-8"
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6"
                >
                    <X />
                </button>

                <h1 className="font-din font-bold text-[54px] uppercase mb-6 text-(--primary-color)">
                    {title}
                </h1>

                <div className="w-full aspect-video rounded-xl overflow-hidden bg-black">
                    <video
                        src={video}
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}