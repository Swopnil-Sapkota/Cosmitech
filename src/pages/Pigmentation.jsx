import PigmentationAdvice from "../components/skinconcern/pigmentation/PigmentationAdvice";
import PigmentationHeroSection from "../components/skinconcern/pigmentation/PigmentationHero";
import PigmentationInfoSection from "../components/skinconcern/pigmentation/PigmentationInfoSection";
import PigmentationProducts from "../components/skinconcern/pigmentation/PigmentationProducts";

const PigmentationPage = () => {
    return (
        <div className="w-full bg-white">
            <PigmentationHeroSection />
            <PigmentationInfoSection />
            <PigmentationAdvice />
            <PigmentationProducts />
        </div>
    );
};

export default PigmentationPage;