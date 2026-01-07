import ProductGrid from "../../reusable/ProductGrid";
import FD1 from "../../../assets/skin-concern/FD-1.jpg"
import FD2 from "../../../assets/skin-concern/FD-2.jpg"
import FD3 from "../../../assets/skin-concern/FD-3.jpg"
import FD4 from "../../../assets/skin-concern/FD-4.png"
import FCL1 from "../../../assets/skin-concern/FCL-1.jpg"
import FCL2 from "../../../assets/skin-concern/FCL-2.jpg"

const AcneProducts = () => {
  const acneProducts = [
    {
      brand: "Fixderma",
      name: "Acne Defence Face Serum",
      size: "30 g",
      description: "Reduce acne & pigmentation",
      image: FD1
    },
    {
      brand: "Fixderma", 
      name: "Acne Control & Oil Free Face Moisturizer",
      size: "10 g",
      description: "Controls oil production and core feedbacks",
      image: FD2
    },
    {
      brand: "Fixderma",
      name: "Sallyzap Daily Face Cleaner",
      size: "90 g", 
      description: "Reduce acne and unclog pores",
      image: FD3
    },
    {
      brand: "Fixderma",
      name: "Acne Face Toner",
      size: "100 ml",
      description: "Soothes the skin & reduce breakouts",
      image: FD4
    },
    {
      brand: "FCL",
      name: "Alpha Beta Acne Gel",
      size: "30 ml",
      description: "Regulates the oil secretion",
      image: FCL1
    },
    {
      brand: "FCL",
      name: "Penta Pearl Pasta",
      size: "30 g",
      description: "Promotes healthy cellular turnover",
      image: FCL2
    }
  ];

  return (
    <ProductGrid
      subtitle="Products from Fixderma and FCL specifically formulated for acne"
      products={acneProducts}
      columns={3}
      imageSize="h-full w-full"
    />
  );
};

export default AcneProducts;