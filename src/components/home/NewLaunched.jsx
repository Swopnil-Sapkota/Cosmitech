import React from "react";
import ProductCard from "./ProductCard";
import NL_1 from "../../assets/home/NL_1.png";
import NL_2 from "../../assets/home/NL_2.jpg";
import NL_3 from "../../assets/home/NL_3.png";

const products = [
  {
    id: 1,
    brand: "Fixderma",
    title: "40 g Sunvigil SPF 50+ Gel",
    subtitle: "Prevents sun damage & pigmentation",
    image: NL_1,
  },
  {
    id: 2,
    brand: "FCL",
    title: "30 ml Copper Peptide Serum",
    subtitle: "Improve Skin Texture",
    image: NL_2,
  },
  {
    id: 3,
    brand: "Fixderma",
    title: "740 g Sunvigil SPF 50+ Cream",
    subtitle: "Prevents Sun damage & Premature skin ageing",
    image: NL_3,
  },
];

const NewLaunched = () => {
  return (
    <section className="bg-white flex justify-center py-10">
      
      {/* MAIN FIGMA FRAME */}
      <div
        className="
          w-[1280px]
          h-[660px]
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

        {/* Heading */}
        <h2 className="text-center text-[24px] text-[#1B605C]">
          Newly Launched Products
        </h2>

        <p className="text-center text-sm text-[#7D7D7D] max-w-2xl mx-auto">
          Our top-rated products trusted by dermatologists and loved by customers worldwide
        </p>

        {/* PRODUCTS ROW */}
        <div className="flex gap-[12px] justify-between px-6 mt-2 ">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewLaunched;
