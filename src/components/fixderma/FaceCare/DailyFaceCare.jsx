import React from "react";

const steps = [
  {
    step: "1",
    title: "Cleanse",
    description: "Use a gentle face wash to remove dirt, oil, and impurities.",
  },
  {
    step: "2",
    title: "Treat",
    description: "Apply targeted serums to address specific skin concerns.",
  },
  {
    step: "3",
    title: "Moisturize",
    description: "Hydrate and lock in moisture with a suitable moisturizer.",
  },
  {
    step: "4",
    title: "Sunscreen",
    description:
      "Shield your skin from UV damage with broad-spectrum sunscreen.",
  },
];

const DailyCareRoutine = () => {
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto rounded-xl p-6 md:p-10 border border-[#E5E7EB] shadow-sm">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[16px] md:text-[20px] lg-[24px] text-[#1A1A1A]">
            A Simple Daily Face Care Routine
          </h2>
          <p className="text-[#333333] mt-2 text-[10px] md:text-[12px] lg:text-[14px]">
            Follow these four essential steps for healthy, radiant skin
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4"
            >
              {/* Step Circle */}
              <div className="w-28 h-28 rounded-full bg-[#FFEBEB] flex items-center justify-center mb-4">
                <span
                  style={{ fontFamily: '"Nuosu SIL", sans-serif' }}
                  className="w-12 h-12 rounded-lg bg-[#FE9A9B] text-white flex items-center justify-center text-[30px]"
                >
                  {item.step}
                </span>
              </div>

              <h3 className="text-[16px]  md:text-[18px]  lg:text-[20px] text-[#1A1A1A] mb-2">
                {item.title}
              </h3>
              <p className="text-[#333333] text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyCareRoutine;
