import React from "react";
import HeroSection from "../components/home/HeroSection";
import TrustedBrands from "../components/home/TrustedBrand";
import BestSellerSection from "../components/home/BestSellerSection";
import RightSolution from "../components/home/RightSolution";
import WhyCosmitech from "../components/home/WhyCosmitech";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <TrustedBrands/>
      <BestSellerSection/>
      <RightSolution />
      <WhyCosmitech />
    </div>
  );
};

export default HomePage;
