import InfoCards from "../../reusable/InfoCards";
import cause from "../../../assets/skin-concern/pigmentation/cause.png"
import prevent from "../../../assets/skin-concern/pigmentation/prevents.png"
import tips from "../../../assets/skin-concern/pigmentation/tips.png"

const PigmentationInfoSection = () => {
    const pigCards = [
        {
            title: "Common Causes",
            image: cause,
            items: [
                "Sun exposure and UV damage",
                "Post-inflammatory response",
                "Hormonal changes",
            ],
        },
        {
            title: "Skincare Tips",
            image: tips,
            items: [
                "Use sunscreen daily to prevent further darkening",
                "Apply brightening serum like vitamin C and niacinamide",
                "Avoid sun exposure during peak hours",
            ],
        },
        {
            title: "Prevention",
            image: prevent,
            items: [
                "Consult a dermatologist for stubborn pigmentation",
                "Be patient - results typically take 8-12 weeks",
                "Avoid sun exposure during peak hours",
            ],
        }
    ];

    return <InfoCards cards={pigCards} columns={3} />;
};

export default PigmentationInfoSection;