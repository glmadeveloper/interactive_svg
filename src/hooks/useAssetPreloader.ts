import { useEffect, useMemo, useState } from "react";
import * as images from "../exports/images";

type AssetItem = {
    src: string;
    priority: "critical" | "secondary";
};

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

        const criticalImageNames = new Set([
            images.icad_icad_image,
        ]);

        return uniqueImages.map((src) => ({
            src,
            priority: criticalImageNames.has(src) ? "critical" : "secondary",
        }));
    }, []);

    useEffect(() => {
        let isCancelled = false;
        let loadedCount = 0;

        const totalAssets = assets.length;

        const updateProgress = () => {
            if (isCancelled) return;

            loadedCount += 1;
            setProgress(Math.round((loadedCount / totalAssets) * 100));

            if (loadedCount >= totalAssets) {
                setTimeout(() => {
                    if (!isCancelled) setIsLoaded(true);
                }, UI_RELEASE_DELAY);
            }
        };

        const preloadImage = (src: string) => {
            const img = new Image();
            img.onload = updateProgress;
            img.onerror = () => {
                setError((prev) => prev ?? `Failed: ${src}`);
                updateProgress();
            };
            img.src = src;
        };

        assets.forEach((asset) => preloadImage(asset.src));

        const timeout = setTimeout(() => {
            if (!isCancelled) setIsLoaded(true);
        }, PRELOADER_TIMEOUT);

        return () => {
            isCancelled = true;
            clearTimeout(timeout);
        };
    }, [assets]);

    return { progress, isLoaded, error };
};