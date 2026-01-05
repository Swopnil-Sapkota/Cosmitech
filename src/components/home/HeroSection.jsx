import React from "react";
import heroImg from "../../assets/home/hero.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-[#FFF5F7] relative overflow-hidden h-[446px]">
      <div className="max-w-7xl mx-auto px-20 h-full grid grid-cols-1 md:grid-cols-2 items-center">
        {/* LEFT CONTENT */}
        <div className="z-10">
          <h1 className="text-[40px] leading-[64px] font-normal text-black max-w-xl text-justify">
            Dermatologist-Approved Solutions <br />
            for Every Skin Type
          </h1>

          <p className="mt-6 text-[16px] leading-[28px] text-[#6B7280] max-w-lg text-justify">
            Explore clinically tested skincare products from Fixderma and FCL,
            explained simply for your skin needs
          </p>

          {/* Buttons */}
          <div className="mt-10 flex items-center gap-4">
            <button className="px-6 py-3 bg-[#FD4A4B] text-white rounded-lg text-[14px] font-medium flex items-center gap-2 hover:opacity-90 transition">
              Explore Products →
            </button>

            <button className="px-6 py-3 border border-[#FD4A4B] text-[#FD4A4B] rounded-lg text-[14px] font-medium flex items-center gap-2 hover:bg-red-50 transition">
              Find Your Solution →
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE — bottom right like Figma */}
      <div className="hidden md:block absolute bottom-0 right-0">
        <img
          src={heroImg}
          alt="Dermatology models"
          className="w-[461px] h-[392px] object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
