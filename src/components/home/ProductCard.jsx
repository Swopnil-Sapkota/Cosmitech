import React from "react";
import { HiArrowRight } from "react-icons/hi";

const ProductCard = ({ image, brand, title, subtitle }) => {
  return (
    <div
      className="
        w-full
        sm:w-[320px]
        lg:w-[370px]
        h-auto
        lg:h-[500px]
        bg-[#FAFCF2]
        rounded-[10px]
        flex
        flex-col
        overflow-hidden
        hover:scale-105
        transition
        cursor-pointer
      "
      style={{ boxShadow: "0 0 4px rgba(1, 1, 1, 0.14)" }}
    >
      {/* IMAGE */}
      <div
        className="
          bg-[#FAFCF2]
          rounded-t-[10px]
          w-full
          h-[260px]
          sm:h-[300px]
          lg:h-[354px]
          p-[24px]
          lg:p-[31px]
          flex
          items-center
          justify-center
        "
      >
        <img
          src={image}
          alt={title}
          className="
            w-[220px]
            sm:w-[250px]
            lg:w-[292px]
            h-auto
            object-contain
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          w-full
          bg-white
          rounded-b-[10px]
          flex
          flex-col
          justify-between
          px-[12px]
          py-[10px]
          flex-1
        "
      >
        <div className="space-y-2">
          <p className="text-sm text-[#2E2E2E]">{brand}</p>

          <h3 className="text-[14px] font-medium text-[#1B605C] leading-snug">
            {title}
          </h3>

          <p className="text-xs text-[#7D7D7D]">{subtitle}</p>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-sm text-[#FF4D4F] font-medium">
            View Details
          </span>

          <span className="w-6 h-6 rounded-full border border-[#FF4D4F] flex items-center justify-center text-[#FF4D4F]">
            <HiArrowRight size={14} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
