import React from "react";

import faceWash from "../../../assets/fixderma/facecare/facewash.png";
import moisturizer from "../../../assets/fixderma/facecare/moisturizer.png";
import sunscreen from "../../../assets/fixderma/facecare/sunscreen.png";
import serum from "../../../assets/fixderma/facecare/serum.png";

const FaceCareCategories = () => {
  const categories = [
    {
      title: "Face Wash",
      desc: "Gentle daily cleansing for healthy skin.",
      img: faceWash,
    },
    {
      title: "Moisturizer",
      desc: "Essential hydration for soft, balanced skin.",
      img: moisturizer,
    },
    {
      title: "Sunscreen",
      desc: "Daily protection against UV damage.",
      img: sunscreen,
    },
    {
      title: "Face Serum & Treatments",
      desc: "Targeted treatment with active ingredients.",
      img: serum,
    },
  ];

  return (
    <section className="w-full flex justify-center px-4 mt-10 mb-10">
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="
              bg-white
              border
              border-[#F5D6D6]
              rounded-xl
              p-6
              text-center
              hover:shadow-lg
              transition
            "
          >
            {/* IMAGE */}
            <div className="flex justify-center mb-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-[18px] text-[#222]">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-[14px] text-[#333333] mt-2">
              {item.desc}
            </p>

            {/* LINK */}
            <button className="mt-4 text-[#FD7273] text-[14px] font-medium hover:underline flex items-center justify-center gap-1 mx-auto">
              View Products
              <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaceCareCategories;
