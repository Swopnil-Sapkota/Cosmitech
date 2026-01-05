import FD from "../../assets/home/FD.png"
import FD2 from "../../assets/home/FixDerma2.png"
import FCL from "../../assets/home/FCL.png"
import FCL2 from "../../assets/home/FCL2.png"

const BRANDS_DATA = [
    {
        id: "fixderma",
        logo: FD,
        productImage: FD2,
        bgColor: "bg-gradient-to-r from-[#FAFCF2] to-[#EEF5D1]",
        borderColor: "border-[#DDE8B8]",
        titleColor: "text-gray-900",
        dotColor: "bg-[#C8DD6E]",
        linkColor: "text-[#4091D4] hover:text-blue-800",
        title: "Complete Dermatological Solutions",
        brandName: "Fixderma",
        description:
            "Fixderma offers comprehensive skincare solutions for various skin concerns.",
        features: [
            "Sunscreen & UV Protection",
            "Moisturizers & Hydration",
            "Cleansers & Treatment Creams",
        ],
        ctaText: "View Fix Derma Products",
        ctaLink: "#fixderma",
    },

    {
        id: "fcl",
        logo: FCL,
        productImage: FCL2,
        bgColor: "bg-gradient-to-r from-[#E0F1FF] to-[#B8E4FF]",
        borderColor: "border-[#66C5FF]",
        titleColor: "text-gray-900",
        dotColor: "bg-[#00609A]",
        linkColor: "text-[#4091D4] hover:text-blue-800",
        title: "Professional-Grade Dermatology",
        brandName: "FCL",
        description:
            "FCL delivers dermatology-grade formulations for advanced skincare needs, including acne treatments.",
        features: [
            "Acne Care & Treatments",
            "Anti-Aging Solutions",
            "Pigmentation & Professional Care",
        ],
        ctaText: "View FCL Products",
        ctaLink: "#fcl",
    }
]

export default function TrustedBrand() {
    return (
        <section className="w-full py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-900 mb-2 md:mb-4">Our Trusted Brands</h2>
                    <p className="text-base md:text-lg text-[#7D7D7D]">Dermatology-focused skincare backed by science</p>
                </div>

                {/* Brand Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
                    {BRANDS_DATA.map((brand) => (
                        <article
                            key={brand.id}
                            className={`${brand.bgColor} relative overflow-hidden rounded-2xl p-6 md:p-8 lg:p-10 transition-transform duration-300 hover:shadow-lg`}
                        >
                            {/* Brand Logo */}
                            <div className="mb-6 md:mb-8">
                                <img
                                    src={brand.logo}
                                    alt={`${brand.brandName} logo`}
                                    className="h-12 md:h-14 w-auto object-contain"
                                />

                            </div>

                            {/* Product Image - Right aligned on larger screens */}
                            <div className="flex justify-end -mr-4 md:-mr-6 bottom-9">
                                <img
                                    src={brand.productImage}
                                    alt={`${brand.brandName} products`}
                                    className="absolute right-0 bottom-0 h-35 md:h-56 opacity-90 object-contain pointer-events-none select-none"
                                />
                            </div>
                            {/* Title */}
                            <h3 className={`${brand.titleColor} text-xl md:text-2xl font-normal mb-3 md:mb-4`}>{brand.title}</h3>

                            {/* Description */}
                            <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">{brand.description}</p>

                            {/* Features List */}
                            <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                                {brand.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className={`${brand.dotColor} w-3 h-3 rounded-full shrink-0 mt-2 md:mt-2.5`} />
                                        <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Link */}
                            <a
                                href={brand.ctaLink}
                                className={`${brand.linkColor} inline-flex items-center gap-2 font-medium text-sm md:text-base transition-all duration-200 group`}
                            >
                                {brand.ctaText}
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
