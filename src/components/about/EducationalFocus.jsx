import React from "react";
import educational from "../../assets/about/educational.png";

const EducationalFocus = () => {
    return (
        <section className="w-full bg-white flex justify-center px-4 py-10">
            <div
                className="
          w-full
          max-w-7xl
          bg-[#F3F8FC]
          rounded-xl
          px-6
          py-8
          md:px-12
          md:py-10
          grid
          grid-cols-1
          lg:grid-cols-[60%_40%]
          gap-8
          items-center
        "
            >
                {/* LEFT CONTENT */}
                <div className="flex flex-col gap-5">
                    <h2 className="text-[20px] sm:text-[24px] font-normal text-[#1A1A1A] text-center">
                        Our Educational Focus
                    </h2>

                    <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
                        Cosmitech is more than just a product catalog it's an educational
                        resource designed to help you understand:
                    </p>

                    <ul className="flex flex-col gap-3 text-sm sm:text-base text-[#333333]">
                        <li className="flex items-start gap-3">
                            <span className="w-2.5 h-2.5 mt-2 rounded-full bg-[#00609A]" />
                            What ingredients are in your skincare products and why they matter
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="w-2.5 h-2.5 mt-2 rounded-full bg-[#00609A]" />
                            How to identify your skin type and specific concerns
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="w-2.5 h-2.5 mt-2 rounded-full bg-[#00609A]" />
                            Which products are best suited for your individual skin
                        </li>

                        <li className="flex items-start gap-3">
                            <span className="w-2.5 h-2.5 mt-2 rounded-full bg-[#00609A]" />
                            How to build an effective, science-backed skincare routine
                        </li>
                    </ul>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full h-full flex justify-center lg:justify-end">
                    <img
                        src={educational}
                        alt="Educational Focus"
                        className="
              w-full
              max-w-md
              rounded-lg
              object-cover
              shadow-sm
            "
                    />
                </div>
            </div>
        </section>
    );
};

export default EducationalFocus;
