import BodyCareCategories from "../components/fixderma/BodyCare/BodyCareCategories";
import BodyCareHero from "../components/fixderma/BodyCare/Hero";
import DailyCareRoutine from "../components/fixderma/FaceCare/DailyFaceCare";

const BodyCare = () => {
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
            Body care
          </span>
        </div>
      </div>

      <BodyCareHero />
      <BodyCareCategories />
      <DailyCareRoutine />
    </div>
  );
};

export default BodyCare;
