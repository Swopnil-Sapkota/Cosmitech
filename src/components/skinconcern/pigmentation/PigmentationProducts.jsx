import ProductGrid from "../../reusable/ProductGrid";
import pig1 from "../../../assets/skin-concern/pigmentation/pig1.jpg"
import pig2 from "../../../assets/skin-concern/pigmentation/pig2.png"
import pig3 from "../../../assets/skin-concern/pigmentation/pig3.jpg"
import pig4 from "../../../assets/skin-concern/pigmentation/pig4.jpg"
import pig5 from "../../../assets/skin-concern/pigmentation/pig5.jpg"
import pig6 from "../../../assets/skin-concern/pigmentation/pig6.jpg"

const PigmentationProducts = () => {
  const pigProducts = [
    {
      brand: "Fixderma",
      name: "Pigment Correcting serum",
      size: "30 g",
      description: "Achieve brighter skin",
      image: pig1
    },
    {
      brand: "FCL", 
      name: "AHA Lightening Gel HQ",
      size: "30 ml",
      description: "Exfoliates to renew brighter, smoother skin",
      image: pig2
    },
    {
      brand: "FCL",
      name: "Active Radiance Complex(For Men)",
      size: "50 g", 
      description: "Targets dullness, tanning & uneven tone",
      image: pig3
    },
    {
      brand: "Fixderma",
      name: "Nigrifix Cream",
      size: "50 g",
      description: "Exfoliates the darkened skin gently",
      image: pig4
    },
    {
      brand: "Fixderma",
      name: "Peelonate AHA & BHA ",
      size: "15 ml",
      description: "Lightens freckles",
      image: pig5
    },
    {
      brand: "Fixderma",
      name: "Penta Pearl Pasta",
      size: "75 g",
      description: "Promotes healthy cellular turnover",
      image: pig6
    }
  ];

  return (
    <ProductGrid
      subtitle="Products from Fixderma and FCL specifically formulated for pigmentation"
      products={pigProducts}
      columns={3}
      imageSize="h-full w-full"
    />
  );
};

export default PigmentationProducts;