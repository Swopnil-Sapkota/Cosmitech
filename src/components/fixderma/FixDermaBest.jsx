import React from "react";
import ProductCard from "./ProductCard";
import { HiArrowTrendingUp } from "react-icons/hi2";
import BS_1 from "../../assets/home/BS_1.jpg";
import BS_2 from "../../assets/home/BS_3.jpg";
import FD_3 from "../../assets/fixderma/FD_3.jpg";

const products = [
  {
    id: 1,
    title: "Nigrifix Cream",
    subtitle: "Nigrifix cream is a customized formulation to treat hyperpigmentation associated with acanthosis nigricans.",
    image: BS_1,
  },
  {
    id: 2,
    title: "Skarfix-TX Cream",
    subtitle: "Nigrifix cream is a customized formulation to treat hyperpigmentation associated with acanthosis nigricans.",
    image: BS_2,
  },
  {
    id: 3,
    title: "Salyzap Body Wash",
    subtitle: "Nigrifix cream is a customized formulation to treat hyperpigmentation associated with acanthosis nigricans.",
    image: FD_3,
  },
];

const FixDermaBest = () => {
  return (
    <section className="bg-white flex justify-center py-10 px-4">
      <div
        className="
          w-full
          lg:w-[1280px]
          border
          border-[#FEC2C3]
          rounded-[8px]
          pt-[16px]
          pr-[16px]
          pb-[12px]
          pl-[12px]
          flex
          flex-col
          gap-[16px]
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
        <h2 className="text-center text-[20px] sm:text-[24px] lg:text-[28px] text-[#1A1A1A]">
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
            gap-[12px]
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

export default FixDermaBest;
