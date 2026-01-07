import PigmentationAdvice from "../components/skinconcern/pigmentation/PigmentationAdvice";
import PigmentationHeroSection from "../components/skinconcern/pigmentation/PigmentationHero";
import PigmentationInfoSection from "../components/skinconcern/pigmentation/PigmentationInfoSection";

const PigmentationPage = () => {
    return (
        <div className="w-full bg-white">
            <PigmentationHeroSection />
            <PigmentationInfoSection />
            <PigmentationAdvice />
            
        </div>
    );
};

export default PigmentationPage;