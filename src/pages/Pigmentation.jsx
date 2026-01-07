import PigmentationAdvice from "../components/skinconcern/pigmentation/PigmentationAdvice";
import PigmentationHeroSection from "../components/skinconcern/pigmentation/PigmentationHero";

const PigmentationPage = () => {
    return (
        <div className="w-full bg-white">
            <PigmentationHeroSection />
            <PigmentationAdvice />
        </div>
    );
};

export default PigmentationPage;