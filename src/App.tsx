import { useEffect, useRef, useState } from "react";
import { homeVideo } from "./exports/videos";
import type { Community } from "./types/communities";
import Preloader from "./components/Preloader";
import Home from "./svgs/Home";
import RenderPage from "./components/RenderPage";
import { home_image } from "./exports/images";

export default function App() {
  const [selectedCommunity, setselectedCommunity] = useState<Community>("home");
  const [showIntroVideo, setShowIntroVideo] = useState(true);
  const [showScreensaver, setShowScreensaver] = useState(false);

  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearIdleTimer = () => {
    if (idleTimer.current) {
      clearTimeout(idleTimer.current);
      idleTimer.current = null;
    }
  };

  const startIdleTimer = () => {
    clearIdleTimer();
    idleTimer.current = setTimeout(() => {
      setShowScreensaver(true);
    }, 20000);
  };

  useEffect(() => {
    const handleUserActivity = () => {
      if (showIntroVideo) return;

      if (showScreensaver) {
        setShowScreensaver(false);
      }

      startIdleTimer();
    };

    const events = ["mousemove", "mousedown", "keydown", "touchstart"];
    events.forEach((event) =>
      window.addEventListener(event, handleUserActivity)
    );

    if (!showIntroVideo && !showScreensaver) {
      startIdleTimer();
    } else {
      clearIdleTimer();
    }

    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, handleUserActivity)
      );
      clearIdleTimer();
    };
  }, [showIntroVideo, showScreensaver]);

  const handleIntroVideoEnded = () => {
    setShowIntroVideo(false);
  };

  return (
    <Preloader>
      {showIntroVideo && (
        <div className="absolute inset-0 z-50 bg-black">
          <video
            className="w-full h-full object-cover"
            src={homeVideo}
            preload="metadata"
            autoPlay
            poster={home_image}
            muted
            playsInline
            onEnded={handleIntroVideoEnded}
          />
        </div>
      )}

      {showScreensaver && !showIntroVideo && (
        <div className="absolute inset-0 z-40 bg-black">
          <video
            className="w-full h-full object-cover"
            src={homeVideo}
            preload="metadata"
            loop
            autoPlay
            poster={home_image}
            muted
            playsInline
          />
        </div>
      )}

      {!showIntroVideo && (
        <div className="relative w-full h-screen">
          {selectedCommunity === "home" ? (
            <Home setSelectedCommunity={setselectedCommunity} />
          ) : (
            <RenderPage
              selectedCommunity={selectedCommunity}
              setSelectedCommunity={setselectedCommunity}
              setIsHomeVideoPlaying={(value) => setShowIntroVideo(value)}
            />
          )}
        </div>
      )}
    </Preloader>
  );
}