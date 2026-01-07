import React from "react";
import faceImg from "../../../assets/fixderma/bodycare/hero.png";

const BodyCareHero = () => {
  return (
    <section className="w-full bg-white flex justify-center px-4 py-10">
      <div
        className="
    w-full
    max-w-7xl
    bg-linear-to-r from-[#FDFDFD] to-[#E4D2DC]
    rounded-xl
    px-6
    py-8
    md:px-12
    md:py-5
    grid
    grid-cols-1
    lg:grid-cols-[70%_30%]
    items-center
    gap-8
  "
      >
        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left ml-10">
          
          {/* HEADING */}
          <h1 className="text-[24px] sm:text-[26px] md:text-[28px] lg:text-[32px] leading-tight text-[#000000] max-w-xl mx-auto lg:mx-0">
            Body Care
          </h1>

          {/* DESCRIPTION */}
          <p className="text-[##333333] sm:text-[13px] md:text-[16px] lg:text-[20px] mt-4 max-w-5xl mx-auto lg:mx-0">
            Nourish and protect your body with our comprehensive range of body care products, formulated to keep your skin healthy, hydrated, and beautiful from head to toe.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden justify-center lg:justify-end relative lg:flex">
          {/* Image 1 */}
          <img
            src={faceImg}
            alt="FCL Product 1"
            className="
      w-45
      sm:w-55
      md:w-65
      lg:w-98
      h-98
      object-contain
      relative
      right-0
      top-5
      left-15
      bottom-10
      rounded-3xl
    "
          />
        </div>
      </div>
    </section>
  );
};

export default BodyCareHero;
