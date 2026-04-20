import { useState } from "react";
import IcadSVG from "./components/icons/IcadSVG";
import CommunityModal from "./components/CommunityModal";
import { icad_image } from "./exports/images";
import { homeVideo } from "./exports/videos";
import { imagesByCommunity } from "./constants/imagesByCommunity";
import type { CommunityKey } from "./types/imagesByCommunity";

export default function App() {
  const [isHomeVideoPlaying, setIsHomeVideoPlaying] = useState(true);
  const [selectedCommunity, setSelectedCommunity] = useState<CommunityKey | null>(null);
  const [showCommunityVideo, setShowCommunityVideo] = useState(false);

  const selectedCommunityData = selectedCommunity ? imagesByCommunity[selectedCommunity] : null;

  const handleSelectCommunity = (key: string) => {
    if (key in imagesByCommunity) {
      setSelectedCommunity(key as CommunityKey);
      setShowCommunityVideo(false);
      setIsHomeVideoPlaying(false);
    }
  };

  const handleBackToHome = () => {
    setSelectedCommunity(null);
    setShowCommunityVideo(false);
    setIsHomeVideoPlaying(true);
  };

  const handleHomeVideoEnded = () => {
    setIsHomeVideoPlaying(false);
  };

  return (
    <>
      {isHomeVideoPlaying && (
        <div className="relative w-full h-screen overflow-hidden bg-black">
          <div className="absolute inset-0 z-20 bg-black">
            <video
              className="w-full h-full object-cover"
              src={homeVideo}
              autoPlay
              muted
              playsInline
              onEnded={handleHomeVideoEnded}
            />
          </div>
        </div>
      )}

      {
        !isHomeVideoPlaying && (
          <div
            className="relative w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${icad_image})` }}
          >
            <IcadSVG
              onSelectCommunity={handleSelectCommunity}
              onBackToHome={handleBackToHome}
            />
          </div>
        )
      }

      <CommunityModal
        selectedCommunityData={selectedCommunityData}
        showCommunityVideo={showCommunityVideo}
        onShowVideo={() => setShowCommunityVideo(true)}
        onClose={() => setSelectedCommunity(null)}
      />
    </>
  );
}