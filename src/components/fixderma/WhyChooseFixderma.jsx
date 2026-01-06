const cardItems = [
    {
      title: "For All Skin Types",
      desc: "Our products are carefully formulated to be safe and effective for all skin types,including sensitive and acne-prone skin.",
    },
    {
      title: "Dermatologist Recommended",
      desc: "Trusted by dermatologists worldwide, our products are recommended for various skin concerns and conditions.",
    },
    {
      title: "Clinically Tested",
      desc: "Each formulation undergoes rigorous clinical testing to ensure safety, efficacy, and skin compatibility.",
    },
    {
      title: "Proven Results",
      desc: "Our products are backed by scientific research and deliver visible results with consistent use.",
    },
  ];
  
  const WhyChooseCard = ({ title, desc }) => (
    <div className="bg-[#FAFCF2] border border-lime-100 rounded-xl p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:border-lime-200">
      <h3 className="text-[#91B010] font-medium text-base sm:text-lg mb-2 sm:mb-3">
        {title}
      </h3>
      <p className="text-[#333333] leading-relaxed font-regular text-[16px] sm:text-[18px] md:text-[20px]">
        {desc}
      </p>
    </div>
  );
  
  const WhyChooseFixderma = () => {
    return (
      <section className="w-full flex justify-center py-12 sm:py-14 md:py-16 bg-[#FDFDFD]">
        <div className="w-full max-w-[1280px] md:h-[529px] px-4 sm:px-6 md:px-[80px] rounded-[8px]">
          {/* Heading */}
          <h2 className="text-[22px] sm:text-[24px] md:text-[28px] font-normal text-center text-[#1A1A1A] mb-8 md:mb-12">
            Why To Choose Fixderma ?
          </h2>
  
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {cardItems.map((item) => (
              <WhyChooseCard
                key={item.title}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseFixderma;