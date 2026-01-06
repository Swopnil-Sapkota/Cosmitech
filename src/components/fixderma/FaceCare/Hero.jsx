import React from "react";
import faceImg from "../../../assets/fixderma/facecare/hero.png";

const FclHeroSection = () => {
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
    md:py-10
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
            Face Care
          </h1>

          {/* DESCRIPTION */}
          <p className="text-[##333333] sm:text-[14px] md:text-[18px] lg:text-[22px] mt-4 max-w-5xl mx-auto lg:mx-0">
            Discover our complete range of facial skincare products designed to
            cleanse, protect, hydrate, and treat various skin concerns for
            healthy, radiant skin.
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
            <span className="px-2 py-2 rounded-md bg-[#FD7273] text-white  text-[17px]  hover:scale-105 cursor-pointer">
              Dermatologist Preferred
            </span>
          </div>
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
      lg:w-75
      object-contain
      relative
      right-0
      top-0
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

export default FclHeroSection;
