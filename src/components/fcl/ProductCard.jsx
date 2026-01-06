import React from "react";
import { HiArrowRight } from "react-icons/hi";

const FCLProductCard = ({ image, title, subtitle }) => {
  return (
    <div
      className="
    w-full
    sm:w-[320px]
    lg:w-[370px]
    h-auto
    lg:h-[500px]
    bg-[#FDF2F8]
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
          bg-[#FDF2F8]
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
          <h3 className="text-[18px] font-medium text-[#1B605C] leading-snug">
            {typeof title === "string" && title.includes("HQ") ? (
              <>
                {title.split("HQ")[0]}
                <span className="text-[#FD4A4B] font-medium">HQ</span>
                {title.split("HQ")[1]}
              </>
            ) : (
              title
            )}
          </h3>

          <p className="text-sm text-[#7D7D7D]">{subtitle}</p>
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

export default FCLProductCard;
