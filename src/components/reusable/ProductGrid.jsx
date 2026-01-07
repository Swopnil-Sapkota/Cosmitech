import { FiArrowRight } from "react-icons/fi";

const ProductGrid = ({
    title = "Recommended Products",
    subtitle = "Products from Fixderma and FCL specifically formulated for",
    products = [],
    columns = 3,
    showBrand = true,
    showDescription = true,
    showImage = true,
    imagePosition = "top", // "top", "left", or "right"
    imageSize = "h-24 w-24", // Default image size
    containerClassName = "",
}) => {
    const gridCols = {
        1: "grid-cols-1",
        2: "grid-cols-2 sm:grid-cols-2",
        3: "grid-cols-2 sm:grid-cols-2 lg:grid-cols-3"
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-normal text-gray-900 mb-3">
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-[#7D7D7D] text-sm md:text-base max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                )}
            </div>

            {/* Products Grid */}
            <div className={`grid ${gridCols[columns]} gap-6 ${containerClassName}`}>
                {products.map((product, index) => (
                    <div
                        key={index}
                        className={`bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full ${
                            imagePosition === "left" ? "md:flex-row" : ""
                        } ${
                            imagePosition === "right" ? "md:flex-row-reverse" : ""
                        }`}
                    >
                        {/* Image */}
                        {showImage && product.image && (
                            <div className={`
                                ${imagePosition === "top" ? "mb-4 flex justify-center" : ""}
                                ${imagePosition === "left" ? "md:mr-4 md:mb-0 mb-4 flex justify-center md:justify-start" : ""}
                                ${imagePosition === "right" ? "md:ml-4 md:mb-0 mb-4 flex justify-center md:justify-start" : ""}
                            `}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className={`${imageSize} object-contain rounded-lg`}
                                />
                            </div>
                        )}

                        {/* Content */}
                        <div className="flex flex-col flex-1">
                            {/* Brand */}
                            {showBrand && product.brand && (
                                <div className="mb-3">
                                    <span className="inline-block text-gray-700 text-[12px] md:text-[24px] font-normal">
                                        {product.brand}
                                    </span>
                                </div>
                            )}

                            {/* Product Name */}
                            <h3 className="text-sm md:text-base font-normal text-[#1B605C] mb-1 line-clamp-2 min-h-10">
                                {product.name}
                            </h3>

                            {/* Description */}
                            {showDescription && product.description && (
                                <p className="text-[#7D7D7D] text-xs md:text-sm mb-2 line-clamp-3 grow">
                                    {product.description}
                                </p>
                            )}

                            {/* Additional Info */}
                            {product.size && (
                                <p className="text-gray-500 text-xs mb-1 md:mb-2">
                                    Size: <span className="font-normal">{product.size}</span>
                                </p>
                            )}

                            {/* View Details Button - Always at bottom */}
                            <div className="mt-auto pt-2 md:pt-4 border-t border-gray-100">
                                <button className="text-[#FC2021] hover:text-[#00609A] font-normal text-xs md:text-sm flex items-center justify-between w-full transition-colors duration-200 group">
                                    View Details
                                    <FiArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;