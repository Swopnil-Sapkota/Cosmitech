import React from "react";
import heroImg from "../../assets/home/hero.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-[linear-gradient(180deg,_#FDF2F8_61.06%,_#FFF1F2_88.46%,_#FEF2F2_99.52%)] relative overflow-hidden h-[446px]">

      
      <div className="max-w-8xl px-6 md:px-12 mx-auto h-full grid grid-cols-1 md:grid-cols-[60%_40%] items-center">
        
        {/* LEFT CONTENT */}
        <div className="z-10 pl-0 md:pl-10 md:pl-20">
          <h1 className="text-[32px] md:text-[40px] font-normal text-[#1A1A1A] max-w-4xl text-center">
            Dermatologist-Approved Solutions <br />
            for Every Skin Type
          </h1>

          <p className="mt-6 text-[14px] md:text-[16px] leading-[26px] md:leading-[28px] text-[#6B7280] px-2 md:px-0 max-w-4xl text-left md:ml-12 mx-auto md:mx-0">
            Explore clinically tested skincare products from Fixderma and FCL,
            explained simply for your skin needs
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button className="px-6 py-3 bg-[#FD4A4B] text-white rounded-lg text-[14px] font-medium hover:opacity-90 transition cursor-pointer">
              Explore Products →
            </button>

            <button className="px-6 py-3 border bg-[#FD4A4B] text-white rounded-lg text-[14px] font-medium hover:opacity-90 transition cursor-pointer">
              Find Your Solution →
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE (hidden on mobile, unchanged on md+) */}
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
