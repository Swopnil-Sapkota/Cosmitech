import { FiInfo } from "react-icons/fi";

const ImportantNote = () => {
  return (
    <section className="w-full flex justify-center px-4 py-12">
      <div className="w-full max-w-7xl">
        <div className="flex gap-4 rounded-xl border border-[#E6E6D8] bg-[#FBFBEA] px-6 py-6 md:px-8 md:py-7 shadow-sm">
          
          {/* Icon */}
          <div className="shrink-0 mt-1">
            <div className="w-10 h-10 rounded-full bg-[#E8E8C8] flex items-center justify-center text-[#6B6B2E]">
              <FiInfo size={20} />
            </div>
          </div>

          {/* Content */}
          <div>
            <h4 className="text-[16px] md:text-[18px] font-medium text-[#2B2B2B]">
              Important Note
            </h4>

            <p className="mt-2 text-sm md:text-[15px] text-[#4F4F4F] leading-relaxed">
              Cosmitech is an informational website designed to help you make
              informed skincare decisions. We do not sell products directly,
              nor do we replace professional medical advice.
            </p>

            <p className="mt-2 text-sm md:text-[15px] text-[#4F4F4F] leading-relaxed">
              Always consult a dermatologist for personalized skincare
              recommendations, especially if you have persistent skin concerns,
              medical conditions, or are considering starting new treatments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantNote;
