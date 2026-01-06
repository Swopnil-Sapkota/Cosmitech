import { HiLocationMarker } from "react-icons/hi";
import { FiClock } from "react-icons/fi";

const FindUs = () => {
  return (
    <section className="w-full bg-[#F8FAFB] flex justify-center px-4 py-16">
      <div className="w-full max-w-7xl flex flex-col gap-12">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[24px] md:text-[40px] font-normal text-[#1A1A1A]">
            Find Us
          </h2>
          <p className="mt-3 text-sm md:text-[20px] text-[#7D7D7D]">
            Visit our office or reach us out
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Left Card */}
          <div className="bg-white border border-[#EAEAEA] rounded-xl p-8 pt-18 shadow-sm flex flex-col gap-8">

            {/* Office */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#FFECEC] text-[#E53E3E]">
                <HiLocationMarker size={22} />
              </div>
              <div>
                <h4 className="text-[15px] font-medium text-[#1A1A1A]">
                  Our Office
                </h4>
                <p className="mt-2 text-sm text-[#6B6B6B] leading-relaxed">
                  Gophal Marg, Teku <br />
                  Kathmandu 44600, Nepal
                </p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[#EEF4FF] text-[#3B82F6]">
                <FiClock size={20} />
              </div>
              <div>
                <h4 className="text-[15px] font-medium text-[#1A1A1A]">
                  Office Hours
                </h4>
                <p className="mt-2 text-sm text-[#6B6B6B] leading-relaxed">
                  Sunday - Friday: 10:00 AM – 5:00 PM <br />
                  Saturday: Closed
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#EAEAEA]" />

            {/* Note */}
            <p className="text-sm text-[#6B6B6B] leading-relaxed">
              <span className="font-medium text-[#1A1A1A]">Note:</span>{" "}
              Cosmitech is an informational platform. For product purchases,
              please visit authorized retailers or consult with dermatologists.
            </p>
          </div>

          {/* Map */}
          <div className="w-full h-105 rounded-xl overflow-hidden border border-[#EAEAEA] shadow-sm">
            <iframe
              title="Cosmitech International Pvt Ltd - Teku"
              src="https://www.google.com/maps?q=Cosmitech+International+Pvt+Ltd+Teku+Kathmandu&z=17&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>


        </div>
      </div>
    </section>
  );
};

export default FindUs;
