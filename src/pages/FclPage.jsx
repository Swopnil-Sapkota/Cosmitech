import FCLBestSeller from "../components/fcl/BestSeller";
import FCLExploreCategories from "../components/fcl/ExploreCategory";
import FclHeroSection from "../components/fcl/HeroSection";

const FclPage = () => {
  return (
    <div>
        <FclHeroSection/>
        <FCLExploreCategories />
        <FCLBestSeller />
    </div>
  );
};

export default FclPage;