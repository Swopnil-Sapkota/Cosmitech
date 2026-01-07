import React from "react";
import ProductCard from "./ProductCard";
import { HiArrowTrendingUp } from "react-icons/hi2";
import BS_1 from "../../assets/home/BS_1.jpg";
import BS_2 from "../../assets/home/BS_2.jpg";
import BS_3 from "../../assets/home/BS_3.jpg";

const products = [
  {
    id: 1,
    brand: "Fixderma",
    title: "75 ml Cloevera Face Wash With Cucumber Aloe Vera & Vitamin E",
    subtitle: "Hydrating & soothing vegan cleanser",
    image: BS_1,
  },
  {
    id: 2,
    brand: "FCL",
    title: "75 ml Cloevera Face Wash With Cucumber Aloe Vera & Vitamin E",
    subtitle: "Hydrating & soothing vegan cleanser",
    image: BS_2,
  },
  {
    id: 3,
    brand: "Fixderma",
    title: "75 ml Cloevera Face Wash With Cucumber Aloe Vera & Vitamin E",
    subtitle: "Hydrating & soothing vegan cleanser",
    image: BS_3,
  },
];

const BestSellerSection = () => {
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
          Best Seller Products
        </h2>

        <p className="text-center text-sm text-[#7D7D7D] max-w-2xl mx-auto px-2">
          Our top-rated products trusted by dermatologists and loved by
          customers worldwide
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
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellerSection;
