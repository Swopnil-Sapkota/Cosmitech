import { useState } from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../assets/logo.png";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Active link styles
  const activeStyle = "px-4 py-2 rounded-lg border border-red-300 text-[#FD4A4B] bg-red-50";
  const inactiveStyle = "hover:text-[#FD4A4B]";

  // Mobile active link styles
  const mobileActiveStyle = "block px-4 py-3 rounded-lg bg-red-50 text-[#FD4A4B] font-medium";
  const mobileInactiveStyle = "block px-4 py-3 rounded-lg hover:bg-gray-100";

  return (
    <nav className="w-full bg-[#FDFDFD]">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-16 md:px-20 h-20">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={logoImg}
            alt="Cosmitech Logo"
            className="block w-15.75 h-13.5 object-contain"
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-lg font-normal text-black">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/fix-derma"
            className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }
          >
            Fix Derma
          </NavLink>

          <NavLink
            to="/fcl"
            className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }
          >
            FCL
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/skin-concerns"
            className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }
          >
            Skin Concerns
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }
          >
            About us
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-sm">
          <div className="px-6 py-4 space-y-2 text-base font-normal text-black">
            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? mobileActiveStyle : mobileInactiveStyle
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/fix-derma"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? mobileActiveStyle : mobileInactiveStyle
              }
            >
              Fix Derma
            </NavLink>

            <NavLink
              to="/fcl"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? mobileActiveStyle : mobileInactiveStyle
              }
            >
              FCL
            </NavLink>

            <NavLink
              to="/products"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? mobileActiveStyle : mobileInactiveStyle
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/skin-concerns"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? mobileActiveStyle : mobileInactiveStyle
              }
            >
              Skin Concerns
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? mobileActiveStyle : mobileInactiveStyle
              }
            >
              About us
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? mobileActiveStyle : mobileInactiveStyle
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;