import React from "react";
import { Link } from "react-router-dom";

const ReusableHero = ({
  breadcrumbs = [], 
  title = "",
  description = "",
  tags = [], // Array of tag strings
  bgColor = "from-[#F3F8FC] to-[#DCECF8]",
  textColor = "text-[#000000]",
  descriptionColor = "text-[#333333]",
  tagColor = "bg-[#FD7273]",
  logo = null, // Logo image source
  logoSize = "w-63.75 h-11.25", // Logo dimensions
  images = [], // Array of image objects: { src, alt, className, position }
  layout = "split", // "split" (left text, right images) or "centered"
  containerClassName = "",
  contentClassName = "",
}) => {
  return (
    <section className="w-full bg-white flex justify-center px-4 py-8 md:py-10">
      <div
        className={`
          w-full max-w-7xl bg-linear-to-r ${bgColor} rounded-xl 
          px-6 py-8 md:px-12 md:py-10 
          ${layout === "split" ? "grid grid-cols-1 lg:grid-cols-[60%_40%] items-center gap-8" : "flex flex-col items-center text-center"}
          ${containerClassName}
        `}
      >
        {/* LEFT/CENTER CONTENT */}
        <div className={`${layout === "split" ? "text-center lg:text-left" : "text-center"} ${contentClassName}`}>
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <div className="mb-4">
              <nav className="flex items-center justify-center lg:justify-start text-xs text-gray-600">
                {breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={index}>
                    <Link 
                      to={crumb.path} 
                      className="hover:text-[#FD4A4B] transition-colors"
                    >
                      {crumb.label}
                    </Link>
                    {index < breadcrumbs.length - 1 && (
                      <span className="mx-2">›</span>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            </div>
          )}

          {/* Logo */}
          {logo && (
            <div className={`flex items-center ${layout === "split" ? "justify-center lg:justify-start" : "justify-center"} gap-3 mb-4`}>
              <img
                src={logo}
                alt="Logo"
                className={`${logoSize} object-contain`}
              />
            </div>
          )}

          {/* Title */}
          <h1 className={`text-2xl sm:text-2xl lg:text-3xl font-normal leading-tight ${textColor} ${
            layout === "split" ? "max-w-xl mx-auto lg:mx-0" : "max-w-3xl mx-auto"
          }`}>
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className={`${descriptionColor} text-[12px] md:text-base mt-4 ${
              layout === "split" ? "max-w-5xl mx-auto lg:mx-0" : "max-w-4xl mx-auto"
            }`}>
              {description}
            </p>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div className={`flex flex-wrap ${layout === "split" ? "justify-center lg:justify-start" : "justify-center"} gap-3 mt-6`}>
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className={`${tagColor} text-white px-4 py-2 rounded-md text-sm md:text-base hover:scale-105 transition-transform duration-200 cursor-pointer`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT IMAGES - Only for split layout */}
        {layout === "split" && images.length > 0 && (
          <div className="hidden lg:flex justify-center lg:justify-end relative">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`object-contain ${image.className || ""}`}
                style={image.position || {}}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ReusableHero;