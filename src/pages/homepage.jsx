import React from "react";
import HeroSection from "../components/home/HeroSection";
import TrustedBrands from "../components/home/TrustedBrand";
import BestSellerSection from "../components/home/BestSellerSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <TrustedBrands/>
      <BestSellerSection/>
    </div>
  );
};

export default HomePage;
