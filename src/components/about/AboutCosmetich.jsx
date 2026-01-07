import React from "react";

const AboutCosmetich = () => {
    return (
        <section className="w-full bg-white flex justify-center px-4 py-10">
            <div className="w-full max-w-7xl flex flex-col gap-8">

                {/* Heading */}
                <div className="text-center">
                    <h1 className="text-[28px] sm:text-[32px] lg:text-[36px] font-normal text-[#1A1A1A]">
                        About Cosmitech
                    </h1>
                    <p className="text-sm sm:text-base text-[#7D7D7D] mt-2">
                        Your Trusted Guide to Skincare and Dermatology-Approved Products
                    </p>
                </div>

                {/* Mission Card */}
                <div
                    className="
            w-full
            bg-linear-to-r
        from-[#E0F3FF]
        via-[#FEC2C3]
        to-[#EAD4A9]
            rounded-xl
            px-6
            py-8
            md:px-12
            md:py-10
            text-center
          "
                >
                    <h2 className="text-[20px] lg:text-[30px] font-normal text-[#1A1A1A] mb-4">
                        Our Mission
                    </h2>

                    <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed max-w-4xl mx-auto">
                        Cosmitech is dedicated to providing accurate, accessible, and trustworthy
                        information about dermatological skincare. We believe that informed
                        decisions lead to healthier skin, and we're here to guide you through
                        your skincare journey with science-backed insights.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default AboutCosmetich;
