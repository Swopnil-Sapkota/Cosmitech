import React from "react";
import { HiArrowTrendingUp } from "react-icons/hi2";
import BS_1 from "../../assets/fcl/BS_1.jpg";
import BS_2 from "../../assets/fcl/BS_2.jpg";
import BS_3 from "../../assets/fcl/BS_3.jpg";
import FCLProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Eye Refining Matrix",
    subtitle: "Eye Refining Matrix diminishes visible signs of ageing around the eye area.",
    image: BS_1,
  },
  {
    id: 2,
    title: "AHA lightening Gel HQ",
    subtitle: "AHA lightening Gel HQ helps to promote a lighter skin and minimizing the appearance of dark spots.(109)",
    image: BS_2,
  },
  {
    id: 3,
    title: "Skin Brightening Complex",
    subtitle: "Skin Brightening Complex  improves skin color and texture of the skin promoting a clear radiant complexion",
    image: BS_3,
  },
];

const FCLBestSeller = () => {
  return (
    <section className="bg-white flex justify-center py-10 px-4">
      <div
        className="
          w-full
          lg:w-7xl
          border
          border-[#FEC2C3]
          rounded-lg
          pt-4
          pr-4
          pb-3
          pl-3
          flex
          flex-col
          gap-4
        "
      >
        {/* Badge */}
        <div className="flex justify-center">
          <span className="flex items-center gap-2 px-4 py-1 text-sm rounded-full bg-[#FE9A9B] text-white">
            <HiArrowTrendingUp size={16} />
            Most Popular
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-[20px] sm:text-[22px] lg:text-[24px] text-[#1B605C]">
          Fix Derma Best Sellers
        </h2>

        <p className="text-center text-sm text-[#7D7D7D] max-w-2xl mx-auto px-2">
          Our top-rated products trusted by dermatologists and loved by customers worldwide
        </p>

        {/* PRODUCTS GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-3
            justify-items-center
            mt-4
          "
        >
          {products.map((product) => (
            <FCLProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FCLBestSeller;
