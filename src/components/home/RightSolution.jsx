import acne from "../../assets/home/Acne.png";
import pigmentation from "../../assets/home/Pigmentation.png";
import dry from "../../assets/home/DrySkin.png";
import sensi from "../../assets/home/Sensi.png";
import aging from "../../assets/home/age.png";
import sun from "../../assets/fixderma/facecare/sunscreen.png";

const items = [
    {
        title: "Acne",
        image: acne,
        imgClass: "w-8 h-8",
    },
    {
        title: "Pigmentation",
        image: pigmentation,
        imgClass: "w-8 h-8",
    },
    {
        title: "Dry Skin",
        image: dry,
        imgClass: "w-18 h-18",
    },
    {
        title: "Sensitive Skin",
        image: sensi,
        imgClass: "w-32 h-32",
    },
    {
        title: "Sun Protection",
        image: sun,
        imgClass: "w-10 h-10",
    },
    {
        title: "Aging",
        image: aging,
        imgClass: "w-32 h-32",
    },
];

export default function RightSolution({
    showHeader = true,
    showButton = false,
    customTitle = "",
    customSubtitle = "",
    buttonText = "View All Concerns"
}) {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 ">
            {/* Conditionally render header */}
            {showHeader && (
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-normal text-gray-900">
                        {customTitle || "Find the Right Solution for Your Skin"}
                    </h2>
                    <p className="mt-2 text-sm md:text-base text-gray-500">
                        {customSubtitle || "Targeted treatments for common skin concerns"}
                    </p>
                </div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map(({ title, image, imgClass }) => (
                    <div
                        key={title}
                        className="group h-56 bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                        <div className="w-full h-full flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ">
                            <img
                                src={image}
                                alt={title}
                                className={`${imgClass} object-contain`}
                            />
                        </div>
                        <h3 className="mt-4 text-sm font-medium text-gray-800">
                            {title}
                        </h3>
                    </div>
                ))}
            </div>

            {/* Conditionally render button */}
            {showButton && (
                <div className="text-center mt-12">
                    <button className="bg-[#FE9A9B] hover:bg-[#FD7A7B] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                        {buttonText}
                    </button>
                </div>
            )}
        </section>
    );
}
