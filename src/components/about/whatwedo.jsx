import educate from "../../assets/about/educate.png";
import connect from "../../assets/about/connect.png";
import support from "../../assets/about/support.png";

const categories = [
  {
    id: 1,
    title: "Educate",
    description: "Provide comprehensive product information and skincare education",
    icon: educate,
    iconBgColor: "bg-blue-100",
  },
  {
    id: 2,
    title: "Verify",
    description: "Feature only dermatologist-trusted and clinically proven brands",
    icon: support,
    iconBgColor: "bg-[#E6F0F9]",
  },
  {
    id: 3,
    title: "Support",
    description: "Help you make informed decisions about your skincare routine",
    icon: support,
    iconBgColor: "bg-[#FAFCF2]",
  },
  {
    id: 4,
    title: "Connect",
    description: "Bridge the gap between dermatology and everyday skincare",
    icon: connect,
    iconBgColor: "bg-[#FBEAFD]",
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-normal">
          What we do
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl p-6 flex flex-col items-center text-center gap-4 border border-gray-200 hover:border-[#FE9A9B] hover:shadow-sm transition-all duration-300"
            >
              {/* Circle background with icon */}
              <div className={`${item.iconBgColor} rounded-full p-4`}>
                <div className="w-8 h-8 flex items-center justify-center">
                  <img 
                    src={item.icon} 
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-sm lg:text-xl font-normal text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;