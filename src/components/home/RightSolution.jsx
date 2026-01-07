// import acne from "../../assets/home/Acne.png";
// import pigmentation from "../../assets/home/Pigmentation.png";
// import dry from "../../assets/home/DrySkin.png";
// import sensi from "../../assets/home/Sensi.png";
// import aging from "../../assets/home/age.png";
// import sun from "../../assets/fixderma/facecare/sunscreen.png";
// import { FiArrowRight } from "react-icons/fi";

// const items = [
//     {
//         title: "Acne",
//         description: "Break outs, Pimples and acne-prone skin solutions.",
//         image: acne,
//         scale: 0.8,
//     },
//     {
//         title: "Pigmentation",
//         description: "Melasma and dark spots solutions.",
//         image: pigmentation,
//         scale: 0.8,
//     },
//     {
//         title: "Dry Skin",
//         description: "Dehydration, Flakiness and moisture retention.",
//         image: dry,
//         scale: 1.5,
//     },
//     {
//         title: "Sensitive Skin",
//         description: "Redness, irritation and reactive skincare.",
//         image: sensi,
//         scale: 3,
//     },
//     {
//         title: "Sun Protection",
//         description: "UV protection and sun damage prevention.",
//         image: sun,
//         scale: 0.8,
//     },
//     {
//         title: "Aging",
//         description: "Anti aging, wrinkles and skin firmness.",
//         image: aging,
//         scale: 3,
//     },
// ];

// export default function RightSolution({
//     showHeader = true,
//     showDescription = false,
//     showLearnMore = true,
//     customTitle = "",
//     customSubtitle = ""
// }) {
//     return (
//         <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
//             {/* Header */}
//             {showHeader && (
//                 <div className="text-center mb-12">
//                     <h2 className="text-2xl md:text-3xl font-normal text-gray-900">
//                         {customTitle || "Find the Right Solution for Your Skin"}
//                     </h2>
//                     <p className="mt-2 text-sm md:text-base text-gray-500">
//                         {customSubtitle || "Targeted treatments for common skin concerns"}
//                     </p>
//                 </div>
//             )}

//             {/* Grid */}
//             <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {items.map(({ title, description, image, scale }) => (
//                     <div
//                         key={title}
//                         className={`group bg-white border border-gray-200 rounded-2xl p-6
//                                     flex flex-col items-center text-center
//                                     transition-all duration-300 hover:shadow-lg hover:-translate-y-1
//                                     ${showDescription ? "min-h-72 justify-start" : "h-64 justify-center"}`}
//                     >
//                         {/* Content container */}
//                         <div className="flex flex-col items-center w-full">
//                             {/* Icon */}
//                             <div className={`${showDescription ? "mb-4" : "mb-3"} h-20 w-20 flex items-center justify-center`}>
//                                 <img
//                                     src={image}
//                                     alt={title}
//                                     className="max-h-12 max-w-12 object-contain"
//                                     style={{ transform: `scale(${scale})` }}
//                                 />
//                             </div>

//                             {/* Title */}
//                             <h3 className="text-sm font-medium text-gray-800 mb-2">
//                                 {title}
//                             </h3>

//                             {/* Description */}
//                             {/* Description */}
//                             {showDescription && description && (
//                                 <p className="text-xs text-gray-500 leading-relaxed
//                                     min-h-14 md:min-h-18
//                                     line-clamp-3">
//                                     {description}
//                                 </p>
//                             )}

//                         </div>

//                         {/* Learn More Button - Centered at bottom */}
//                         {showLearnMore && showDescription && (
//                             <div className="w-full flex justify-center mt-4 md:mt-0">
//                                 <button className="text-[#FE9A9B] hover:text-[#FD7A7B]
//                                     font-medium text-xs md:text-sm
//                                     flex items-center gap-1
//                                     transition-colors duration-200
//                                     group/btn">
//                                     Learn more
//                                     <FiArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }

import { Link } from "react-router-dom";
import acne from "../../assets/home/Acne.png";
import pigmentation from "../../assets/home/Pigmentation.png";
import dry from "../../assets/home/DrySkin.png";
import sensi from "../../assets/home/Sensi.png";
import aging from "../../assets/home/age.png";
import sun from "../../assets/fixderma/facecare/sunscreen.png";
import { FiArrowRight } from "react-icons/fi";

const items = [
    {
        id: "acne",
        title: "Acne",
        description: "Break outs, Pimples and acne-prone skin solutions.",
        image: acne,
        scale: 0.8,
        path: "/skin-concerns/acne"
    },
    {
        id: "pigmentation",
        title: "Pigmentation",
        description: "Melasma and dark spots solutions.",
        image: pigmentation,
        scale: 0.8,
        path: "/skin-concerns/pigmentation"
    },
    {
        id: "dry-skin",
        title: "Dry Skin",
        description: "Dehydration, Flakiness and moisture retention.",
        image: dry,
        scale: 1.5,
        path: "/skin-concerns/dry-skin"
    },
    {
        id: "sensitive-skin",
        title: "Sensitive Skin",
        description: "Redness, irritation and reactive skincare.",
        image: sensi,
        scale: 3,
        path: "/skin-concerns/sensitive-skin"
    },
    {
        id: "sun-protection",
        title: "Sun Protection",
        description: "UV protection and sun damage prevention.",
        image: sun,
        scale: 0.8,
        path: "/skin-concerns/sun-protection"
    },
    {
        id: "aging",
        title: "Aging",
        description: "Anti aging, wrinkles and skin firmness.",
        image: aging,
        scale: 3,
        path: "/skin-concerns/aging"
    },
];

export default function RightSolution({
    showHeader = true,
    showDescription = false,
    showLearnMore = true,
    customTitle = "",
    customSubtitle = ""
}) {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            {/* Header */}
            {showHeader && (
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-normal text-gray-900">
                        {customTitle || "Find the Right Solution for Your Skin"}
                    </h2>
                    <p className="mt-2 text-sm md:text-base text-gray-500">
                        {customSubtitle || "Targeted treatments for common skin concerns"}
                    </p>
                </div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map(({ id, title, description, image, scale, path }) => (
                    <Link
                        key={id}
                        to={path}
                        className={`group bg-white border border-gray-200 rounded-2xl p-6
                                    flex flex-col items-center text-center
                                    transition-all duration-300 hover:shadow-lg hover:-translate-y-1
                                    ${showDescription ? "min-h-72 justify-start" : "h-64 justify-center"}
                                    no-underline`}
                    >
                        {/* Content container */}
                        <div className="flex flex-col items-center w-full">
                            {/* Icon */}
                            <div className={`${showDescription ? "mb-4" : "mb-3"} h-20 w-20 flex items-center justify-center`}>
                                <img
                                    src={image}
                                    alt={title}
                                    className="max-h-12 max-w-12 object-contain"
                                    style={{ transform: `scale(${scale})` }}
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-sm font-medium text-gray-800 mb-2">
                                {title}
                            </h3>

                            {/* Description */}
                            {showDescription && description && (
                                <p className="text-xs text-gray-500 leading-relaxed
                                    min-h-14 md:min-h-18
                                    line-clamp-3">
                                    {description}
                                </p>
                            )}
                        </div>

                        {/* Learn More Button - Centered at bottom */}
                        {showLearnMore && showDescription && (
                            <div className="w-full flex justify-center mt-4 md:mt-0">
                                <div className="text-[#FE9A9B] group-hover:text-[#FD7A7B]
                                    font-medium text-xs md:text-sm
                                    flex items-center gap-1
                                    transition-colors duration-200">
                                    Learn more
                                    <FiArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                                </div>
                            </div>
                        )}
                    </Link>
                ))}
            </div>
        </section>
    );
}