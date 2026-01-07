import { FiAlertCircle } from "react-icons/fi";

const Advice = ({
  title = "Professional Advice Recommended",
  description = "",
  icon: Icon = FiAlertCircle,
  iconColor = "#4091D4",
  bgColor = "#FEF4F4",
  borderColor = "border-[#4091D4]",
  textColor = "text-[#4091D4]",
  titleColor = "text-[#00609A]",
  className = "",
}) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${className}`}>
      <div 
        className={`rounded-xl border ${borderColor} p-4 md:p-6 flex items-start`}
        style={{ backgroundColor: bgColor }}
      >
        {/* Icon */}
        <div className="shrink-0 mr-4 mt-1">
          <Icon 
            className="w-5 h-5 md:w-6 md:h-6" 
            style={{ color: iconColor }} 
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 
            className={`text-md md:text-lg font-normal mb-1 ${titleColor}`}
          >
            {title}
          </h3>
          <p className={`text-xs md:text-sm leading-relaxed ${textColor}`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advice;