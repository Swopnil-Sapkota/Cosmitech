import React from 'react';
import C1 from '../../assets/home/C1.png';
import C2 from '../../assets/home/C2.png';
import C3 from '../../assets/home/C3.png';

const WhyCosmitech = () => {
    const features = [
        {
            id: 1,
            title: "Trusted Brands",
            description: "We feature only dermatologist-recommended brands with proven track records in skincare excellence.",
            image: C1,
            imageAlt: "Trusted skincare brands display"
        },
        {
            id: 2,
            title: "Science-Backed",
            description: "All products are formulated with clinically proven ingredients backed by dermatological research.",
            image: C2,
            imageAlt: "Scientific research and clinical testing"
        },
        {
            id: 3,
            title: "Educational Focus",
            description: "We provide detailed product information to help you make informed skincare decisions.",
            image: C3,
            imageAlt: "Educational skincare resources"
        }
    ];

    return (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header Section - Simplified like image */}
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-800 mb-4 sm:mb-6">
                        Why Cosmitech?
                    </h1>

                    <p className="text-lg sm:text-xl lg:text-2xl text-[#7D7D7D] max-w-3xl mx-auto">
                        Your Trusted Source for Dermatology Information
                    </p>
                </div>

                {/* Features Grid - Simplified layout like image */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="group relative bg-white rounded-xl border border-gray-200 p-6 sm:p-8 transition-all duration-300 hover:shadow-lg"
                        >
                            {/* Image/Icon Container - Top aligned like image */}
                            <div className="mb-6 sm:mb-8">
                                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4">
                                    {/* Circular Background */}
                                    <div className="absolute inset-0 bg-[#FFEBEB] rounded-full"></div>

                                    {/* Image Container */}
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <img
                                            src={feature.image}
                                            alt={feature.imageAlt}
                                            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Title with horizontal line above it */}
                            <div className="mb-6">
                                <div className="w-full h-px bg-gray-200 mb-4"></div>
                                <h3 className="text-xl sm:text-2xl font-normal text-gray-900 text-center">
                                    {feature.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center">
                                {feature.description}
                            </p>

                            {/* Decorative line at bottom */}
                            <div className="mt-6 sm:mt-8">
                                <div className="w-16 h-0.5 bg-gray-300 mx-auto"></div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyCosmitech;