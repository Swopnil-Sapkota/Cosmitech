import DailyCareRoutine from "../components/fixderma/FaceCare/DailyFaceCare.jsx";
import FaceCareCategories from "../components/fixderma/FaceCare/FaceCareCategories.jsx";
import FaceCareHeroSection from "../components/fixderma/FaceCare/Hero.jsx";


const FaceCare = () => {
  return (
     <div className="w-full bg-white">

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 pt-3">
        <div className="text-base text-[#333333]">
          <span className="hover:text-[#1D6B46] cursor-pointer">
            Fixderma
          </span>
          <span className="mx-2">{">"}</span>
          <span className="text-[#333333]">
            Face care
          </span>
        </div>
      </div>
        <FaceCareHeroSection  />
        <FaceCareCategories />
        <DailyCareRoutine />
    </div>
  );
};

export default FaceCare;