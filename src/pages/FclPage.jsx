import FCLBestSeller from "../components/fcl/BestSeller";
import FCLExploreCategories from "../components/fcl/ExploreCategory";
import FclHeroSection from "../components/fcl/HeroSection";
import WhyChoose from "../components/fcl/WhyChoose";

const FclPage = () => {
  return (
    <div>
        <FclHeroSection/>
        <FCLExploreCategories />
        <FCLBestSeller />
        <WhyChoose/>
    </div>
  );
};

export default FclPage;