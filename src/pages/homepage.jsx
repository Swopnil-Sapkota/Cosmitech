import React from "react";
import HeroSection from "../components/home/HeroSection";
import TrustedBrands from "../components/home/TrustedBrand";
import BestSellerSection from "../components/home/BestSellerSection";
import RightSolution from "../components/home/RightSolution";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <TrustedBrands/>
      <BestSellerSection/>
      <RightSolution />
    </div>
  );
};

export default HomePage;
