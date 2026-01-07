import DailyFaceCareRoutine from "../components/fixderma/FaceCare/DailyFaceCare.jsx";
import FaceCareCategories from "../components/fixderma/FaceCare/FaceCareCategories.jsx";
import FaceCareHeroSection from "../components/fixderma/FaceCare/Hero.jsx";


const FaceCare = () => {
  return (
    <div>
        <FaceCareHeroSection  />
        <FaceCareCategories />
        <DailyFaceCareRoutine />
    </div>
  );
};

export default FaceCare;