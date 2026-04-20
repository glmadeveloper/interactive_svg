import React from 'react';
import { useAssetPreloader } from '../hooks/useAssetPreloader';

const Preloader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { progress, isLoaded } = useAssetPreloader();

    if (!isLoaded) {
        return (
            <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#0a0a0a] text-white overflow-hidden">
                {/* Background Decor - Primary Glow */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-20"
                    style={{ backgroundColor: 'var(--primary-color)' }}
                />

                {/* Secondary Accent Glow */}
                <div
                    className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none opacity-10"
                    style={{ backgroundColor: 'var(--secondary-color)' }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                    {/* Animated Title Container */}
                    <div className="mb-12 flex flex-col items-center gap-1 group">
                        {/* English Title with Shimmer and Blur Reveal */}
                        <div className="relative overflow-hidden">
                            <span
                                className="text-6xl font-bold tracking-[0.4em] uppercase blur-reveal-anim block opacity-0 fill-mode-forwards"
                                style={{
                                    color: '#fff',
                                    textShadow: '0 0 30px rgba(255, 233, 108, 0.2)',
                                    animation: 'blurReveal .7s cubic-bezier(0.22, 1, 0.36, 1) forwards'
                                }}
                            >
                                Sdeira
                            </span>
                            {/* Shimmer overlay */}
                            <div className="absolute inset-0 shimmer-sweep pointer-events-none" />
                        </div>

                        {/* Arabic Title with Glow Pulse */}
                        <span
                            className="text-5xl font-medium arabic-reveal-anim opacity-0 fill-mode-forwards mt-[-0.2em]"
                            style={{
                                animation: 'arabicFadeIn 1s cubic-bezier(0.22, 1, 0.36, 1) 0.5s forwards, glowPulse 3s infinite ease-in-out 1.5s',
                                color: 'var(--secondary-color)'
                            }}
                        >
                            ســديرة
                        </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="relative w-80 h-[2px] bg-white/5 rounded-full overflow-hidden backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                        <div
                            className="absolute top-0 left-0 h-full transition-all duration-500 ease-out fill-mode-forwards"
                            style={{
                                width: `${progress}%`,
                                background: 'linear-gradient(90deg, var(--primary-color) 0%, var(--third-color) 100%)',
                                boxShadow: '0 0 20px var(--primary-color)'
                            }}
                        />
                    </div>

                    {/* Percentage and Loading text */}
                    <div className="mt-8 flex flex-col items-center gap-3">
                        <div className="flex items-center gap-4 text-[9px] font-light tracking-[0.5em] opacity-40 uppercase">
                            <span className="w-12 h-px bg-white/20" />
                            Loading Interactive Space
                            <span className="w-12 h-px bg-white/20" />
                        </div>
                        <div
                            className="text-2xl font-medium tabular-nums tracking-[0.2em] progress-shimmer"
                            style={{ color: 'var(--secondary-color)' }}
                        >
                            {progress}%
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return <>{children}</>;
};

export default Preloader;
