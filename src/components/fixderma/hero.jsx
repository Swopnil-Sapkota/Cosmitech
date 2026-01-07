// import fixderma from "../../assets/fixderma.png";
// import hero from "../../assets/fixderma/hero.png";

// export default function Herofixderma() {
//     return (
//         <main className="bg-white overflow-x-hidden">
//             {/* Hero Section */}
//             <section>
//                 <div className="mx-auto max-w-7xl px-6 md:px-8 py-10 md:py-12">
//                     <div className="bg-linear-to-b from-yellow-50 to-yellow-100 rounded-3xl p-6 md:p-12 lg:p-16">
//                         <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-end min-h-105">
//                             {/* Left Content */}
//                             <div className="flex flex-col space-y-6 z-10 max-w-xl lg:w-xl">
//                                 {/* Logo */}
//                                 <div>
//                                     <img
//                                         src={fixderma}
//                                         alt="Fixderma Logo"
//                                         className="h-10 md:h-12 object-contain"
//                                     />
//                                 </div>

//                                 {/* Heading */}
//                                 <h1 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight">
//                                     Complete Dermatological Solution
//                                 </h1>

//                                 {/* Description */}
//                                 <p className="text-lg text-gray-700 leading-relaxed">
//                                     Fixderma is a leading dermatological brand dedicated to providing safe, effective, and scientifically
//                                     formulated skincare products.
//                                 </p>

//                                 {/* Badges */}
//                                 <div className="flex flex-wrap gap-3 pt-4">
//                                     <span className="bg-[#FE9A9B] hover:bg-[#FD7A7B] hover:scale-105 text-white px-6 py-2 rounded-md text-sm font-normal transition-all duration-300 cursor-pointer active:scale-95 shadow-md hover:shadow-lg">
//                                         Dermatologist Tested
//                                     </span>
//                                     <span className="bg-[#FE9A9B] hover:bg-[#FD7A7B] hover:scale-105 text-white px-6 py-2 rounded-md text-sm font-normal transition-all duration-300 cursor-pointer active:scale-95 shadow-md hover:shadow-lg">
//                                         Clinically Proven
//                                     </span>
//                                     <span className="bg-[#FE9A9B] hover:bg-[#FD7A7B] hover:scale-105 text-white px-6 py-2 rounded-md text-sm font-normal transition-all duration-300 cursor-pointer active:scale-95 shadow-md hover:shadow-lg">
//                                         For All Skin Types
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* Right Image Section */}
//                             <div className="relative lg:absolute right-0 bottom-0 h-64 md:h-80 lg:h-98 w-full lg:w-[55%] overflow-hidden">
//                                 <img
//                                     src={hero}
//                                     alt="Fixderma skincare products and model"
//                                     className="absolute bottom-0 right-0 w-full h-full object-contain object-bottom lg:object-bottom-right"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// }

import fixderma from "../../assets/fixderma.png";
import hero from "../../assets/fixderma/hero.png";

export default function Herofixderma() {
  return (
    <main className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full bg-white flex justify-center px-4 py-10">
        <div
          className="
            w-full
            max-w-7xl
            bg-linear-to-b
            from-yellow-50
            to-yellow-100
            rounded-3xl
            px-6
            py-8
            md:px-12
            md:py-10
            grid
            grid-cols-1
            lg:grid-cols-[60%_40%]
            items-center
            gap-8
          "
        >
          {/* LEFT CONTENT */}
          <div className="flex-1 text-center lg:text-left ml-10">
            {/* Logo */}
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <img
                src={fixderma}
                alt="Fixderma Logo"
                className="h-10 md:h-12 object-contain"
              />
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-normal text-gray-900 leading-tight max-w-xl mx-auto lg:mx-0">
              Complete Dermatological Solution
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed mt-4 max-w-5xl mx-auto lg:mx-0">
              Fixderma is a leading dermatological brand dedicated to providing
              safe, effective, and scientifically formulated skincare products.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
              <span className="bg-[#FE9A9B] hover:bg-[#FD7A7B] hover:scale-105 text-white px-6 py-2 rounded-md text-sm font-normal transition-all duration-300 cursor-pointer active:scale-95 shadow-md hover:shadow-lg">
                Dermatologist Tested
              </span>
              <span className="bg-[#FE9A9B] hover:bg-[#FD7A7B] hover:scale-105 text-white px-6 py-2 rounded-md text-sm font-normal transition-all duration-300 cursor-pointer active:scale-95 shadow-md hover:shadow-lg">
                Clinically Proven
              </span>
              <span className="bg-[#FE9A9B] hover:bg-[#FD7A7B] hover:scale-105 text-white px-6 py-2 rounded-md text-sm font-normal transition-all duration-300 cursor-pointer active:scale-95 shadow-md hover:shadow-lg">
                For All Skin Types
              </span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden lg:flex justify-center lg:justify-end relative">
            <img
              src={hero}
              alt="Fixderma skincare products and model"
              className="w-full h-auto max-h-80 object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
