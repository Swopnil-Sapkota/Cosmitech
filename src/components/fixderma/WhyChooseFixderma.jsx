const cardItems = [
    {
      title: "For All Skin Types",
      desc:
        "Our products are carefully formulated to be safe and effective for all skin types,including sensitive and acne-prone skin.",
    },
    {
      title: "Dermatologist Recommended",
      desc:
        "Trusted by dermatologists worldwide, our products are recommended for various skin concerns and conditions.",
    },
    {
      title: "Clinically Tested",
      desc:
        "Each formulation undergoes rigorous clinical testing to ensure safety, efficacy, and skin compatibility.",
    },
    {
      title: "Proven Results",
      desc:
        "Our products are backed by scientific research and deliver visible results with consistent use.",
    },
  ];
  
  const WhyChooseCard = ({ title, desc }) => (
    <div className="bg-[#FAFCF2] border border-lime-100 rounded-xl p-6">
      <h3 className="text-[#91B010] font-medium text-lg mb-3">{title}</h3>
      <p className="text-[#333333] leading-relaxed font-regular text-[20px]">{desc}</p>
    </div>
  );
  
  const WhyChooseFixderma = () => {
    return (
      <section className="w-full flex justify-center py-16">
        <div className="w-[1280px] h-[529px] px-[80px] rounded-[8px] bg-[#FDFDFD]">
          {/* Heading */}
          <h2 className="text-[28px] font-normal text-center text-[#1A1A1A] mb-12 mt-[18px]">
            Why To Choose Fixderma ?
          </h2>
  
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cardItems.map((item) => (
              <WhyChooseCard key={item.title} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhyChooseFixderma;