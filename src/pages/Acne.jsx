import AcneAdvice from "../components/skinconcern/acne/AcneAdvice.jsx";
import AcneHeroSection from "../components/skinconcern/acne/AcneHero.jsx";
import AcneInfoSection from "../components/skinconcern/acne/AcneInfoSection.jsx";

const AcnePage = () => {
    return (
        <div className="w-full bg-white">
            <AcneHeroSection />
            <AcneInfoSection />
            <AcneAdvice />
        </div>
    );
};

export default AcnePage;