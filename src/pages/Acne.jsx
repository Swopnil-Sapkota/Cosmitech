import AcneAdvice from "../components/skinconcern/acne/AcneAdvice.jsx";
import AcneHeroSection from "../components/skinconcern/acne/AcneHero.jsx";
import AcneInfoSection from "../components/skinconcern/acne/AcneInfoSection.jsx";
import AcneProducts from "../components/skinconcern/acne/AcneProducts.jsx";

const AcnePage = () => {
    return (
        <div className="w-full bg-white">
            <AcneHeroSection />
            <AcneInfoSection />
            <AcneAdvice />
            <AcneProducts />
        </div>
    );
};

export default AcnePage;