import { useEffect, useState, useCallback } from "react";
import mouseArrow from "../assets/scroll/up.png"; 

const GotoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={goToTop}
      aria-label="Go to top"
      className="fixed bottom-10 right-4 md:right-8 z-50
                 flex flex-col items-center
                 cursor-pointer
                 transition-all duration-300 ease-in-out
                 hover:scale-110"
    >
      <img
        src={mouseArrow}
        alt="Scroll to top"
        className="w-full h-22 object-contain"
      />
    </button>
  );
};

export default GotoTop;
