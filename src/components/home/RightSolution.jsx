import acne from "../../assets/home/Acne.png";
import pigmentation from "../../assets/home/Pigmentation.png";
import dry from "../../assets/home/DrySkin.png";
import sensi from "../../assets/home/Sensi.png";
import aging from "../../assets/home/age.png";
import sun from "../../assets/fixderma/facecare/sunscreen.png";

const items = [
    {
        title: "Acne",
        description: "Break outs, Pimples and acne-prone skin solutions.",
        image: acne,
        scale: 0.8,
    },
    {
        title: "Pigmentation",
        description: "Melasma and dark spots solutions.",
        image: pigmentation,
        scale: 0.8,
    },
    {
        title: "Dry Skin",
        description: "Dehydration, Flakiness and moisture retention.",
        image: dry,
        scale: 1.5,
    },
    {
        title: "Sensitive Skin",
        description: "Redness, irritation and reactive skincare.",
        image: sensi,
        scale:3,
    },
    {
        title: "Sun Protection",
        description: "UV protection and sun damage prevention.",
        image: sun,
        scale: 0.8,
    },
    {
        title: "Aging",
        description: "Anti aging, wrinkles and skin firmness.",
        image: aging,
        scale: 3,
    },
];

export default function RightSolution({
    showHeader = true,
    showDescription = false,
    customTitle = "",
    customSubtitle = ""
}) {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

            {/* Header */}
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
                {items.map(({ title, description, image,scale  }) => (
                    <div
                        key={title}
                        className="group h-64 bg-white border border-gray-200 rounded-2xl p-8
                       flex flex-col items-center text-center
                       transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                        {/* Icon */}
                        <div className="h-20 w-20 flex items-center justify-center mb-4">
                            <img
                                src={image}
                                alt={title}
                                className="max-h-12 max-w-12 object-contain"
                                style={{ transform: `scale(${scale})` }}
                            />
                        </div>

                        {/* Title */}
                        <h3 className="text-sm font-medium text-gray-800">
                            {title}
                        </h3>

                        {/* Description */}
                        {showDescription && description && (
                            <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                                {description}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
