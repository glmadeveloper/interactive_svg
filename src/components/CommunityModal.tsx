import type { CommunityData } from "../types/imagesByCommunity";

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
    if (!selectedCommunityData) return null;

    return (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
            <div className="w-full max-w-5xl space-y-6 rounded-4xl border border-white/10 bg-slate-950/95 p-6 shadow-2xl text-white">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-3xl font-semibold">{selectedCommunityData.title}</h1>
                        <p className="mt-2 text-sm text-slate-300">
                            Images and video for this community come from the shared constant data.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <button
                            type="button"
                            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                            onClick={onShowVideo}
                        >
                            Show Video
                        </button>
                        <button
                            type="button"
                            className="rounded-full border border-white/30 bg-transparent px-5 py-3 text-sm font-semibold text-white transition hover:border-white"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>

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
                                className="h-52 w-full rounded-3xl object-cover border border-white/10"
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}