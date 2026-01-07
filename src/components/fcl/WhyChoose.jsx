const cardItems = [
  {
    title: "Clinical Strength",
    desc: "Our products feature professional-grade concentrations of active ingredients for maximum efficacy in treating challenging skin conditions.",
  },
  {
    title: "Dermatologist Developed",
    desc: "Trusted by dermatologists worldwide, our products are recommended for various skin concerns and conditions.",
  },
  {
    title: "Evidence Based",
    desc: "All formulations are supported by extensive clinical research and real-world testing to guarantee effectiveness.",
  },
  {
    title: "Proven Results",
    desc: "We utilize cutting-edge delivery systems and ingredient technologies for superior penetration and results.",
  },
];

const WhyChooseCard = ({ title, desc }) => (
  <div className="bg-[#F5FBFF] border border-lime-100 rounded-xl p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:border-[F5FBFF]">
    <h3 className="text-[#4091D4] font-medium sm:text-lg md:text-lg lg:text-[20px] mb-2 sm:mb-3">
      {title}
    </h3>
    <p className="text-[#333333] leading-relaxed font-regular text-[16px] sm:text-[18px] md:text-[20px]">
      {desc}
    </p>
  </div>
);

const WhyChoose = () => {
  return (
    <section className="w-full flex justify-center py-12 sm:py-14 md:py-16">
      <div
        className="w-full max-w-[1280px] md:h-[590px] sm:h-[830px] px-4 sm:px-6 md:px-[80px] rounded-[8px] bg-[#FDFDFD]"
        style={{
          boxShadow: "0 -4px 8px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        {/* Heading */}
        <h2 className="text-[22px] sm:text-[24px] md:text-[28px] font-normal text-center text-[#1A1A1A] mb-8 md:mb-12 mt-[18px]">
          Why To Choose FCL ?
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

export default WhyChoose;
