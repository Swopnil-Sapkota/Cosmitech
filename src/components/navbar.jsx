// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import logoImg from "../assets/logo.png";
// import { IoMdClose, IoMdMenu } from "react-icons/io";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   // Active link styles
//   const activeStyle = "px-4 py-2 rounded-lg border border-red-300 text-[#FD4A4B] bg-red-50";
//   const inactiveStyle = "hover:text-[#FD4A4B]";

//   // Mobile active link styles
//   const mobileActiveStyle = "block px-4 py-3 rounded-lg bg-red-50 text-[#FD4A4B] font-medium";
//   const mobileInactiveStyle = "block px-4 py-3 rounded-lg hover:bg-gray-100";

//   return (
//     <nav className="w-full bg-[#FDFDFD]">
//       <div className="max-w-8xl mx-auto flex items-center justify-between px-16 md:px-20 h-20">
//         {/* Logo */}
//         <NavLink to="/" className="flex items-center">
//           <img
//             src={logoImg}
//             alt="Cosmitech Logo"
//             className="block w-15.75 h-13.5 object-contain"
//           />
//         </NavLink>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8 text-lg font-normal text-black">
//           <NavLink
//             to="/"
//             end
//             className={({ isActive }) =>
//               isActive ? activeStyle : inactiveStyle
//             }
//           >
//             Home
//           </NavLink>

//           <NavLink
//             to="/fix-derma"
//             className={({ isActive }) =>
//               isActive ? activeStyle : inactiveStyle
//             }
//           >
//             Fix Derma
//           </NavLink>

//           <NavLink
//             to="/fcl"
//             className={({ isActive }) =>
//               isActive ? activeStyle : inactiveStyle
//             }
//           >
//             FCL
//           </NavLink>

//           <NavLink
//             to="/products"
//             className={({ isActive }) =>
//               isActive ? activeStyle : inactiveStyle
//             }
//           >
//             Products
//           </NavLink>

//           <NavLink
//             to="/skin-concerns"
//             className={({ isActive }) =>
//               isActive ? activeStyle : inactiveStyle
//             }
//           >
//             Skin Concerns
//           </NavLink>

//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive ? activeStyle : inactiveStyle
//             }
//           >
//             About us
//           </NavLink>

//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive ? activeStyle : inactiveStyle
//             }
//           >
//             Contact
//           </NavLink>
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={() => setOpen(!open)}>
//           {open ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-white shadow-sm">
//           <div className="px-6 py-4 space-y-2 text-base font-normal text-black">
//             <NavLink
//               to="/"
//               end
//               onClick={() => setOpen(false)}
//               className={({ isActive }) =>
//                 isActive ? mobileActiveStyle : mobileInactiveStyle
//               }
//             >
//               Home
//             </NavLink>

//             <NavLink
//               to="/fix-derma"
//               onClick={() => setOpen(false)}
//               className={({ isActive }) =>
//                 isActive ? mobileActiveStyle : mobileInactiveStyle
//               }
//             >
//               Fix Derma
//             </NavLink>

//             <NavLink
//               to="/fcl"
//               onClick={() => setOpen(false)}
//               className={({ isActive }) =>
//                 isActive ? mobileActiveStyle : mobileInactiveStyle
//               }
//             >
//               FCL
//             </NavLink>

//             <NavLink
//               to="/products"
//               onClick={() => setOpen(false)}
//               className={({ isActive }) =>
//                 isActive ? mobileActiveStyle : mobileInactiveStyle
//               }
//             >
//               Products
//             </NavLink>

//             <NavLink
//               to="/skin-concerns"
//               onClick={() => setOpen(false)}
//               className={({ isActive }) =>
//                 isActive ? mobileActiveStyle : mobileInactiveStyle
//               }
//             >
//               Skin Concerns
//             </NavLink>

//             <NavLink
//               to="/about"
//               onClick={() => setOpen(false)}
//               className={({ isActive }) =>
//                 isActive ? mobileActiveStyle : mobileInactiveStyle
//               }
//             >
//               About us
//             </NavLink>

//             <NavLink
//               to="/contact"
//               onClick={() => setOpen(false)}
//               className={({ isActive }) =>
//                 isActive ? mobileActiveStyle : mobileInactiveStyle
//               }
//             >
//               Contact
//             </NavLink>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect, useRef, useCallback } from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../assets/logo.png";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navbarRef = useRef(null);

  // Active link styles
  const activeStyle = "px-4 py-2 rounded-lg border border-red-300 text-[#FD4A4B] bg-red-50";
  const inactiveStyle = "hover:text-[#FD4A4B]";

  // Mobile active link styles
  const mobileActiveStyle = "block px-4 py-3 rounded-lg bg-red-50 text-[#FD4A4B] font-medium";
  const mobileInactiveStyle = "block px-4 py-3 rounded-lg hover:bg-gray-100";

  // Navigation links data
  const navLinks = [
    { to: "/", label: "Home", end: true },
    { to: "/fix-derma", label: "Fix Derma" },
    { to: "/fcl", label: "FCL" },
    { to: "/products", label: "Products" },
    { to: "/skin-concerns", label: "Skin Concerns" },
    { to: "/about", label: "About us" },
    { to: "/contact", label: "Contact" },
  ];

  // Scroll handler
  const controlNavbar = useCallback(() => {
    const currentScrollY = window.scrollY;

    // Close mobile menu on scroll
    if (open && Math.abs(currentScrollY - lastScrollY) > 10) {
      setOpen(false);
    }

    if (currentScrollY < 50) {
      // Always show navbar at top of page
      setIsVisible(true);
    } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down and not at top - hide navbar
      if (isVisible) {
        setIsVisible(false);
      }
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up - show navbar
      if (!isVisible) {
        setIsVisible(true);
      }
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY, isVisible, open]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 w-full bg-[#FDFDFD] z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${lastScrollY > 50 ? "shadow-md" : ""}`}
    >
      <div className="max-w-8xl mx-auto flex items-center justify-between px-4 sm:px-8 md:px-20 h-16 md:h-20">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={logoImg}
            alt="Cosmitech Logo"
            className="block w-12 h-10 md:w-15.75 md:h-13.5 object-contain"
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-base lg:text-lg font-normal text-black">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end || false}
              className={({ isActive }) =>
                isActive ? activeStyle : inactiveStyle
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-[#FD4A4B] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 animate-fadeIn">
          <div className="px-4 py-3 space-y-1 text-base font-normal text-black">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end || false}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? `${mobileActiveStyle} animate-pulse`
                    : mobileInactiveStyle
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;