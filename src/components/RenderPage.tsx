import { useState } from 'react';
import type { Community, CommunityKey } from '../types/communities'
import AboutModal from './AboutModal';
import BuildingModal from './BuildingModal';
import Icad from '../svgs/Icad';
import { getSelectedBuildingData } from '../utils/getSelectedBuildingData';
import MaamorahA from '../svgs/MaamorahA';
import MaamorahB from '../svgs/MaamorahB';
import Mogharraq from '../svgs/Mogharraq';
import Razeen from '../svgs/Razeen';
import Sadeem from '../svgs/Sadeem';
import { getSelectedCommunityData } from '../utils/getSelectedCommunityData';

export default function RenderPage({
    selectedCommunity,
    setIsHomeVideoPlaying,
    setSelectedCommunity
}: {
    selectedCommunity: Community;
    setIsHomeVideoPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    setSelectedCommunity: React.Dispatch<React.SetStateAction<Community>>;
}) {
    const [selectedBuilding, setSelectedBuilding] = useState<CommunityKey | null>(null);
    const [showAboutModal, setShowAboutModal] = useState(false);
    const selectedBuildingData = getSelectedBuildingData(selectedCommunity, selectedBuilding);
    const selectedCommunityData = getSelectedCommunityData(selectedCommunity);
    console.log({
        selectedCommunity,
        selectedBuilding,
        selectedBuildingData,
    });

    const handleSelectBuilding = (key: string) => {
        if (key === "aboutCommunity") {
            setShowAboutModal(true);
            setSelectedBuilding(null);
            return;
        }

        if (selectedCommunityData && key in selectedCommunityData.data) {
            setSelectedBuilding(key as CommunityKey);
            setShowAboutModal(false);
        }
    };

    const handleBackToHome = () => {
        setSelectedBuilding(null);
        setSelectedCommunity("home");
        setIsHomeVideoPlaying(false);
    };

    const renderSelectedCommunity = () => {
        switch (selectedCommunity) {
            case "icad":
                return <Icad
                    onSelectBuilding={handleSelectBuilding}
                    onBackToHome={handleBackToHome}
                />
            case "maamourah_a":
                return <MaamorahA
                    onSelectBuilding={handleSelectBuilding}
                    onBackToHome={handleBackToHome}
                />
            case "maamourah_b":
                return <MaamorahB
                    onSelectBuilding={handleSelectBuilding}
                    onBackToHome={handleBackToHome}
                />
            case "mogharraq":
                return <Mogharraq
                    onSelectBuilding={handleSelectBuilding}
                    onBackToHome={handleBackToHome}
                />
            case "razeen":
                return <Razeen
                    onSelectBuilding={handleSelectBuilding}
                    onBackToHome={handleBackToHome}
                />
            case "sadeem":
                return <Sadeem
                    onSelectBuilding={handleSelectBuilding}
                    onBackToHome={handleBackToHome}
                />
        }
    }
    return (
        <div>
            {renderSelectedCommunity()}
            <BuildingModal
                selectedBuildingData={selectedBuildingData}
                onClose={() => setSelectedBuilding(null)}
            />
            <AboutModal
                open={showAboutModal}
                title={selectedCommunityData?.title || ""}
                video={selectedCommunityData?.video || ""}
                onClose={() => setShowAboutModal(false)}
            />
        </div>
    )
}
