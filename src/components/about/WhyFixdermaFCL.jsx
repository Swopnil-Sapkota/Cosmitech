
import W1 from "../../assets/about/W1.png"; 
import W2 from "../../assets/about/W2.png";
import W3 from "../../assets/about/W3.png";

const WhyFixdermaFCL = () => {
  return (
    <section className="w-full bg-white flex justify-center px-4 py-12">
      <div className="w-full max-w-7xl flex flex-col gap-10">
        
        {/* Heading */}
        <h2 className="text-center text-[22px] sm:text-[26px] font-medium text-[#1A1A1A]">
          Why <span className="text-[#DBC57E]">Fixderma</span> and{" "}
          <span className="text-[#1A1A1A]">FCL</span>?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white border border-[#EAEAEA] rounded-xl p-6 shadow-sm">
            <img
              src={W1}
              alt="Dermatologist Trusted"
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-[16px] font-normal text-[#1B605C]">
              Dermatologist Trusted
            </h3>
            <p className="mt-2 text-sm text-[#6B6B6B] leading-relaxed">
              Both Fixderma and FCL are recommended by dermatologists worldwide
              for their proven efficacy and safety profiles.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#EAEAEA] rounded-xl p-6 shadow-sm">
            <img
              src={W2}
              alt="Science-Backed Formulation"
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-[16px] font-medium text-[#1B605C]">
              Science-Backed Formulation
            </h3>
            <p className="mt-2 text-sm text-[#6B6B6B] leading-relaxed">
              Both Fixderma and FCL are recommended by dermatologists worldwide
              for their proven efficacy and safety profiles.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#EAEAEA] rounded-xl p-6 shadow-sm">
            <img
              src={W3}
              alt="Safe and Effective"
              className="w-full h-64 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-[16px] font-medium text-[#1B605C]">
              Safe and Effective
            </h3>
            <p className="mt-2 text-sm text-[#6B6B6B] leading-relaxed">
              Both brands prioritise safety without compromising effectiveness
              & products are suitable for sensitive skin also.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyFixdermaFCL;
