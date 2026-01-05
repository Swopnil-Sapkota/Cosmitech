import React from "react";
import HeroSection from "../components/home/HeroSection";
import TrustedBrands from "../components/home/TrustedBrand";
import RightSolution from "../components/home/RightSolution";
import WhyCosmitech from "../components/home/WhyCosmitech";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <TrustedBrands/>
      <RightSolution />
      <WhyCosmitech />
    </div>
  );
};

export default HomePage;
