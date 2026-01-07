import pig from "../../../assets/skin-concern/pigmentation/PigHero.png";
import ReusableHero from "../../reusable/ResuableHero";

const PigmentationHeroSection = () => {
  return (
    <ReusableHero
      breadcrumbs={[
        { label: "Skin Concern", path: "/skin-concerns" },
        { label: "Pigmentation", path: "/skin-concerns/pigmentation" },
      ]}
      title="Pigmentation"
      description="Hyperpigmentation refers to dark patches or spots on the skin that appear when melanin is overproduced. Common types include melasma, sun spots, and post inflammatory hyperpigmentation."
      bgColor="from-[#FDFDFDB8] to-[#C97C5D]" 
      images={[
        {
          src: pig,
          alt: "Acne treatment product",
          className: "w-80 relative right-6 top-0 scale-126 rounded-lg"
        }
      ]}
    />
  );
};

export default PigmentationHeroSection;