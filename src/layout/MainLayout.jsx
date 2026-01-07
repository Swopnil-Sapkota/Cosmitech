
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ScrollToTop from "../components/ScrollToTop";
import GotoTop from "../components/ScrollUp";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop /> 
      <GotoTop />
      <main className="pt-16 md:pt-20 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
