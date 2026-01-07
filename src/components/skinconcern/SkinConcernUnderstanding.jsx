
import Research from "../../assets/skin-concern/Research.png";
import Identify from "../../assets/skin-concern/Identify.png";
import Consult from "../../assets/skin-concern/Consult.png";

const Understanding = () => {
    const steps = [
        {
            id: 1,
            title: "Identify",
            description: "Understand your skin type and primary concerns through careful observation",
            icon: Identify,
            iconBgColor: "bg-[#FFEBEB]",
        },
        {
            id: 2,
            title: "Research",
            description: "Learn about ingredients and products suited for your specific needs",
            icon: Research,
            iconBgColor: "bg-[#FFEBEB]",
        },
        {
            id: 3,
            title: "Consult",
            description: "Always consult a dermatologist for personalized advice and treatment",
            icon: Consult,
            iconBgColor: "bg-[#FFEBEB]",
        },
    ];

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-[28px] lg:text-[38px] font-normal text-gray-900 mb-4">
                        Understanding Your Skin
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
                        A comprehensive guide to help you make informed decisions about your skincare journey
                    </p>
                </div>

                {/* Steps Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="relative bg-white rounded-2xl p-8 flex flex-col items-center text-center border border-gray-100 hover:border-[#FE9A9B] hover:shadow-lg transition-all duration-300"

                        >
                            {/* Icon with Background */}
                            <div className={`${step.iconBgColor} rounded-full p-6 mb-6 w-24 h-24 flex items-center justify-center`}>
                                <img
                                    src={step.icon}
                                    alt={step.title}
                                    className="w-10 h-10 object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-normal text-gray-900 mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Understanding;