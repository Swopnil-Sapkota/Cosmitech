import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../assets/logo.png";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const desktopActive =
    "px-4 py-2 rounded-lg border border-red-300 text-[#FD4A4B] bg-red-50 font-medium";

  const mobileActive =
    "px-4 py-3 rounded-lg bg-red-50 text-[#FD4A4B] font-medium";

  const desktopLink = "hover:text-[#FD4A4B]";
  const mobileLink = "px-4 py-3 rounded-lg hover:bg-gray-100";

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full bg-[#FDFDFD] relative z-50">
        <div className="max-w-8xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-16 lg:px-20 h-20">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src={logoImg}
              alt="Cosmitech Logo"
              className="w-15.75 h-13.5 object-contain"
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-lg font-normal text-black">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? desktopActive : desktopLink
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/fix-derma"
              className={({ isActive }) =>
                isActive ? "text-[#FD4A4B] font-medium" : desktopLink
              }
            >
              Fix Derma
            </NavLink>

            <NavLink
              to="/fcl"
              className={({ isActive }) =>
                isActive ? "text-[#FD4A4B] font-medium" : desktopLink
              }
            >
              FCL
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "text-[#FD4A4B] font-medium" : desktopLink
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/skin-concerns"
              className={({ isActive }) =>
                isActive ? "text-[#FD4A4B] font-medium" : desktopLink
              }
            >
              Skin Concerns
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#FD4A4B] font-medium" : desktopLink
              }
            >
              About us
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-[#FD4A4B] font-medium" : desktopLink
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setOpen(true)}
          >
            <IoMdMenu size={28} />
          </button>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-white z-[999] md:hidden overflow-hidden">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 h-20">
            <img
              src={logoImg}
              alt="Cosmitech Logo"
              className="w-15.75 h-13.5 object-contain"
            />
            <button onClick={() => setOpen(false)}>
              <IoMdClose size={28} />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col px-6 pt-8 space-y-4 text-lg h-[calc(100vh-80px)] overflow-hidden">
            
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? mobileActive : mobileLink
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/fix-derma"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? mobileActive : mobileLink
              }
            >
              Fix Derma
            </NavLink>

            <NavLink
              to="/fcl"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? mobileActive : mobileLink
              }
            >
              FCL
            </NavLink>

            <NavLink
              to="/products"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? mobileActive : mobileLink
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/skin-concerns"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? mobileActive : mobileLink
              }
            >
              Skin Concerns
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? mobileActive : mobileLink
              }
            >
              About us
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? mobileActive : mobileLink
              }
            >
              Contact
            </NavLink>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
