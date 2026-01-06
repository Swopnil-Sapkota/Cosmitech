import { Link } from "react-router";

const CategoryCard = ({ icon, title, description, url }) => {
  return (
    <Link to={url} className="flex flex-col items-center text-center bg-white rounded-xl border border-[#E5E7EB] px-6 py-8 w-full hover:shadow-md transition">
      
      <div className="w-14 h-14 flex items-center justify-center mb-4">
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </div>

      <h3 className="text-[18px] font-medium text-[#333333]">
        {title}
      </h3>

      <p className="mt-2 text-[14px] text-[#6B7280] max-w-55">
        {description}
      </p>
    </Link>
  );
};

export default CategoryCard;
