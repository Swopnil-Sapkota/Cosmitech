import face from "../../assets/fixderma/FC.png";
import body from "../../assets/fixderma/BC.png";
import lip from "../../assets/fixderma/LC.png";
import hair from "../../assets/fixderma/HC.png";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    id: 1,
    title: "Face Care",
    description: "Targeted care for healthy, radiant skin",
    icon: face,
    url: "/fix-derma/face-care",
  },
  {
    id: 2,
    title: "Body Care",
    description: "Daily body care, dermatologist trusted",
    icon: body,
    url: "/fix-derma/body-care",
  },
  {
    id: 3,
    title: "Lip Care",
    description: "Hydration and protection for your lips",
    icon: lip,
    url: "/fix-derma/lip-care",
  },
  {
    id: 4,
    title: "Hair Care",
    description: "Solutions for scalp and hair health",
    icon: hair,
    url: "/fix-derma/hair-care",
  },
];


const ExploreCategories = () => {
  return (
    <section className="w-full bg-white flex justify-center px-4 py-12">
      <div className="w-full lg:w-7xl flex flex-col gap-8">
        
        <h2 className="text-center text-[20px] sm:text-[24px] lg:text-[28px] text-[#1A1A1A]">
          Explore Fixderma Products by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item) => (
            <CategoryCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;
