import { useEffect, useMemo, useState } from "react";
import * as images from "../exports/images";
import * as videos from "../exports/videos";

type AssetType = "image" | "video";

interface AssetItem {
    src: string;
    type: AssetType;
    priority: "critical" | "secondary";
}

interface UseAssetPreloaderReturn {
    progress: number;
    isLoaded: boolean;
    error: string | null;
}

const PRELOADER_TIMEOUT = 12000;
const UI_RELEASE_DELAY = 500;

export const useAssetPreloader = (): UseAssetPreloaderReturn => {
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const assets = useMemo<AssetItem[]>(() => {
        const uniqueImages = Array.from(new Set(Object.values(images) as string[]));
        const uniqueVideos = Array.from(new Set(Object.values(videos) as string[]));

        const criticalImageNames = new Set([
            images.icad_icad_image,
        ]);

        const criticalVideoNames = new Set([
            videos.homeVideo,
        ]);

        const imageAssets: AssetItem[] = uniqueImages.map((src) => ({
            src,
            type: "image",
            priority: criticalImageNames.has(src) ? "critical" : "secondary",
        }));

        const videoAssets: AssetItem[] = uniqueVideos.map((src) => ({
            src,
            type: "video",
            priority: criticalVideoNames.has(src) ? "critical" : "secondary",
        }));

        return [...imageAssets, ...videoAssets];
    }, []);

    useEffect(() => {
        let isCancelled = false;
        let loadedCount = 0;
        let timeoutId: ReturnType<typeof setTimeout> | null = null;

        const totalAssets = assets.length;

        if (totalAssets === 0) {
            setProgress(100);
            setIsLoaded(true);
            return;
        }

        const finalizeLoading = () => {
            if (isCancelled) return;

            setProgress(100);

            window.setTimeout(() => {
                if (!isCancelled) {
                    setIsLoaded(true);
                }
            }, UI_RELEASE_DELAY);
        };

        const updateProgress = () => {
            if (isCancelled) return;

            loadedCount += 1;
            const nextProgress = Math.min(
                100,
                Math.round((loadedCount / totalAssets) * 100)
            );

            setProgress(nextProgress);

            if (loadedCount >= totalAssets) {
                if (timeoutId) clearTimeout(timeoutId);
                finalizeLoading();
            }
        };

        const safeFail = (message: string) => {
            console.warn(message);
            setError((prev) => prev ?? message);
            updateProgress();
        };

        const preloadImage = (src: string): Promise<void> => {
            return new Promise((resolve) => {
                const img = new Image();

                const cleanup = () => {
                    img.onload = null;
                    img.onerror = null;
                };

                img.onload = async () => {
                    try {
                        if (typeof img.decode === "function") {
                            await img.decode();
                        }
                    } catch (decodeError) {
                        console.warn(`Image decode warning: ${src}`, decodeError);
                    } finally {
                        cleanup();
                        resolve();
                    }
                };

                img.onerror = () => {
                    cleanup();
                    safeFail(`Failed to load image: ${src}`);
                    resolve();
                };

                img.src = src;
            });
        };

        const preloadVideo = (src: string): Promise<void> => {
            return new Promise((resolve) => {
                const video = document.createElement("video");

                const cleanup = () => {
                    video.onloadeddata = null;
                    video.onerror = null;
                    video.oncanplay = null;
                    video.removeAttribute("src");
                    video.load();
                };

                const handleReady = async () => {
                    try {
                        // tiny warmup for faster first paint/playback
                        const playPromise = video.play();
                        if (playPromise && typeof playPromise.then === "function") {
                            await playPromise.then(() => {
                                video.pause();
                                video.currentTime = 0;
                            }).catch(() => {
                                // autoplay may be blocked, ignore
                            });
                        }
                    } finally {
                        cleanup();
                        resolve();
                    }
                };

                video.preload = "metadata";
                video.muted = true;
                video.playsInline = true;
                video.src = src;

                video.onloadeddata = handleReady;
                video.oncanplay = handleReady;
                video.onerror = () => {
                    cleanup();
                    safeFail(`Failed to load video: ${src}`);
                    resolve();
                };

                video.load();
            });
        };

        const loadAsset = async (asset: AssetItem) => {
            if (asset.type === "image") {
                await preloadImage(asset.src);
            } else {
                await preloadVideo(asset.src);
            }

            updateProgress();
        };

        const loadAssets = async () => {
            try {
                const criticalAssets = assets.filter((asset) => asset.priority === "critical");
                const secondaryAssets = assets.filter((asset) => asset.priority === "secondary");

                // 1) Load critical assets first
                for (const asset of criticalAssets) {
                    if (isCancelled) return;
                    await loadAsset(asset);
                }

                // 2) Load secondary assets after critical, in parallel
                await Promise.all(
                    secondaryAssets.map(async (asset) => {
                        if (isCancelled) return;
                        await loadAsset(asset);
                    })
                );

                if (!isCancelled) {
                    if (timeoutId) clearTimeout(timeoutId);
                    finalizeLoading();
                }
            } catch (err) {
                console.error("Preloader unexpected error:", err);
                if (!isCancelled) {
                    setError("Unexpected preloader error");
                    finalizeLoading();
                }
            }
        };

        timeoutId = window.setTimeout(() => {
            console.warn("Preloader timeout reached. Releasing UI.");
            finalizeLoading();
        }, PRELOADER_TIMEOUT);

        void loadAssets();

        return () => {
            isCancelled = true;
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [assets]);

    return { progress, isLoaded, error };
};