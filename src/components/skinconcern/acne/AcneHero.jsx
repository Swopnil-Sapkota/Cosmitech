import acne from "../../../assets/skin-concern/acne.png";
import ReusableHero from "../../reusable/ResuableHero";

const AcneHeroSection = () => {
  return (
    <ReusableHero
      breadcrumbs={[
        { label: "Skin Concern", path: "/skin-concerns" },
        { label: "Acne", path: "/skin-concerns/acne" },
      ]}
      title="Acne"
      description="Acne is a common skin condition that occurs when hair follicles become clogged with oil and dead skin cells. It can range from mild blackheads and whiteheads to severe cystic acne."
      bgColor="from-[#FEF2F2] to-[#FEE2E2]" 
      images={[
        {
          src: acne,
          alt: "Acne treatment product",
          className: "w-80 relative right-4 top-2 scale-120"
        }
      ]}
    />
  );
};

export default AcneHeroSection;