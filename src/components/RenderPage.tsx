import { useState } from 'react';
import type { Community, CommunityKey } from '../types/communities'
import AboutModal from './AboutModal';
import BuildingModal from './BuildingModal';
import { ICAD } from '../constants/Icad';
import Icad from '../svgs/Icad';
import { getSelectedBuildingData } from '../utils/getSelectedBuildingData';
import MaamorahA from '../svgs/MaamorahA';
import MaamorahB from '../svgs/MaamorahB';
import Mogharraq from '../svgs/Mogharraq';
import Razeen from '../svgs/Razeen';
import Sadeem from '../svgs/Sadeem';

export default function RenderPage({
    selectedCommunity,
    setIsHomeVideoPlaying
}: {
    selectedCommunity: Community;
    setIsHomeVideoPlaying: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const [selectedBuilding, setSelectedBuilding] = useState<CommunityKey | null>(null);
    const [showAboutModal, setShowAboutModal] = useState(false);
    const selectedBuildingData = getSelectedBuildingData(selectedCommunity, selectedBuilding);

    const handleSelectBuilding = (key: string) => {
        if (key === "aboutCommunity") {
            setShowAboutModal(true);
            setSelectedBuilding(null);
            return;
        }

        if (key in ICAD.data) {
            setSelectedBuilding(key as CommunityKey);
            setShowAboutModal(false);
        }
    };

    const handleBackToHome = () => {
        setSelectedBuilding(null);
        setIsHomeVideoPlaying(true);
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
                title={ICAD.title}
                video={ICAD.video}
                onClose={() => setShowAboutModal(false)}
            />
        </div>
    )
}
