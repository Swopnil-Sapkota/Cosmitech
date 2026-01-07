import InfoCards from "../../reusable/InfoCards";
import cause from "../../../assets/skin-concern/cause.png"
import prevent from "../../../assets/skin-concern/prevent.png"
import tips from "../../../assets/skin-concern/tips.png"

const AcneInfoSection = () => {
    const acneCards = [
        {
            title: "Common Causes",
            image: cause,
            items: [
                "Excess oil production",
                "Clogged hair follicles",
                "Hormonal changes",
                "Bacteria buildup",
                "Certain medications"
            ],
        },
        {
            title: "Skincare Tips",
            image: tips,
            items: [
                "Cleanse face twice daily with a gentle cleanser",
                "Avoid picking or squeezing pimples",
                "Use oil-free, non-comedogenic skincare products",
                "Apply sunscreen daily",
                "Stay hydrated and maintain a balanced diet"
            ],
        },
        {
            title: "Prevention",
            image: prevent,
            items: [
                "Keep hair and hands away from face",
                "Consult a dermatologist for persistent or severe acne",
                "Use oil-free, non-comedogenic skincare products",
                "Change pillowcases regularly",
                "Manage stress levels"
            ],
        }
    ];

    return <InfoCards cards={acneCards} columns={3} />;
};

export default AcneInfoSection;