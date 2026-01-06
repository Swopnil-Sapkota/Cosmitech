import heroImg from "../../assets/home/hero.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-[linear-gradient(180deg,#FDF2F8_61.06%,#FFF1F2_88.46%,#FEF2F2_99.52%)] relative overflow-hidden h-[500px] sm:h-[550px] md:h-[650px] lg:h-[446px] xl:h-[446px]">

      <div className="max-w-screen-2xl px-4 sm:px-6 md:px-8 lg:px-12 mx-auto h-full grid grid-cols-1 lg:grid-cols-[60%_40%] items-center">
        
        {/* LEFT CONTENT */}
        <div className="z-10 lg:pl-8 xl:pl-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-normal text-[#1A1A1A] max-w-4xl text-center">
            Dermatologist-Approved Solutions <br className="hidden sm:block" />
            for Every Skin Type
          </h1>

          <p className="mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base md:text-[16px] leading-relaxed md:leading-7 text-[#6B7280] px-2 sm:px-4 lg:px-0 max-w-2xl lg:max-w-4xl mx-auto lg:mx-0 lg:ml-8 xl:ml-12 text-center lg:text-left">
            Explore clinically tested skincare products from Fixderma and FCL,
            explained simply for your skin needs
          </p>

          {/* Buttons */}
          <div className="mt-6 sm:mt-7 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-[#FD4A4B] text-white rounded-lg text-sm sm:text-[14px] font-medium hover:opacity-90 transition cursor-pointer">
              Explore Products →
            </button>

            <button className="w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-[#FD4A4B] text-white rounded-lg text-sm sm:text-[14px] font-medium  hover:opacity-90 transition cursor-pointer">
              Find Your Solution →
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="absolute bottom-0 right-0 w-full lg:w-auto">
        <img
          src={heroImg}
          alt="Dermatology models"
          className="hidden lg:block w-[350px] xl:w-[461px] h-[300px] xl:h-[394px] object-contain"
        />
        {/* Optional: Add a smaller mobile image if you have one */}
        {/* <img
          src={heroImgMobile}
          alt="Dermatology models"
          className="block lg:hidden w-full max-w-md mx-auto object-contain opacity-60"
        /> */}
      </div>
    </section>
  );
};

export default HeroSection;