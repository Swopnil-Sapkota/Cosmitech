import React from "react";
import P1 from "../../assets/fcl/P1.png"; 
import P2 from "../../assets/fcl/P2.png"; 
import fclLogo from "../../assets/fcl/logo.png";

const FclHeroSection = () => {
  return (
    <section className="w-full bg-white flex justify-center px-4 py-10">
      <div
        className="
    w-full
    max-w-[1280px]
    bg-gradient-to-r
    from-[#F3F8FC]
    to-[#DCECF8]
    rounded-xl
    px-6
    py-8
    md:px-12
    md:py-10
    grid
    grid-cols-1
    lg:grid-cols-[60%_40%]
    items-center
    gap-8
  "
      >
        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left ml-10">
          {/* BRAND */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
            <img
              src={fclLogo}
              alt="FCL Logo"
              className="w-[255px] h-[45px] object-contain"
            />
          </div>

          {/* HEADING */}
          <h1 className="text-[24px] sm:text-[28px] lg:text-[32px] leading-tight text-[#000000] max-w-xl mx-auto lg:mx-0">
            Professional Grade-Dermatology
          </h1>

          {/* DESCRIPTION */}
          <p className="text-[#333333] text-sm sm:text-base mt-4 max-w-5xl mx-auto lg:mx-0">
            FCL (Fixderma Cosmetic Laboratories) represents the pinnacle of
            dermatological innovation, offering professional-grade formulations
            for advanced skincare needs.
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
            <span className="px-2 py-2 rounded-md bg-[#FD7273] text-white text-[17px] hover:scale-105 cursor-pointer">
              Professional Grade
            </span>
            <span className="px-2 py-2 rounded-md bg-[#FD7273] text-white  text-[17px]   hover:scale-105 cursor-pointer">
              Advanced Formulations
            </span>
            <span className="px-2 py-2 rounded-md bg-[#FD7273] text-white  text-[17px]  hover:scale-105 cursor-pointer">
              Dermatologist Preferred
            </span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden justify-center lg:justify-end relative lg:flex" >
          {/* Image 1 */}
          <img
            src={P1}
            alt="FCL Product 1"
            className="
      w-[180px]
      sm:w-[220px]
      md:w-[260px]
      lg:w-[300px]
      object-contain
      relative
      absolute
      right-28
      top-0
      bottom-10
    "
          />

          {/* Image 2 */}
          <img
            src={P2}
            alt="FCL Product 2"
            className="
      w-[160px]
      sm:w-[200px]
      md:w-[240px]
      lg:w-[280px]
      object-contain
      absolute
      right-0
      top-41
      -translate-y-1/2
    "
          />
        </div>
      </div>
    </section>
  );
};

export default FclHeroSection;
