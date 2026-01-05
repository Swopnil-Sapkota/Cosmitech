import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#FDFDFD]">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-16 md:px-20 h-[80px]">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logoImg}
            alt="Cosmitech Logo"
            className="block w-[63px] h-[54px] object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-lg font-normal text-black">
          <Link
            to="/"
            className="px-4 py-2 rounded-lg border border-red-300 text-[#FD4A4B] bg-red-50"
          >
            Home
          </Link>

          <Link to="/fix-derma" className="hover:text-[#FD4A4B]">
            Fix Derma
          </Link>
          <Link to="/fcl" className="hover:text-[#FD4A4B]">
            FCL
          </Link>
          <Link to="/products" className="hover:text-[#FD4A4B]">
            Products
          </Link>
          <Link to="/skin-concerns" className="hover:text-[#FD4A4B]">
            Skin Concerns
          </Link>
          <Link to="/about" className="hover:text-[#FD4A4B]">
            About us
          </Link>
          <Link to="/contact" className="hover:text-[#FD4A4B]">
            Contact
          </Link>
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
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg bg-red-50 text-[#FD4A4B] font-medium"
            >
              Home
            </Link>

            <Link
              to="/fix-derma"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-gray-100"
            >
              Fix Derma
            </Link>

            <Link
              to="/fcl"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-gray-100"
            >
              FCL
            </Link>

            <Link
              to="/products"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-gray-100"
            >
              Products
            </Link>

            <Link
              to="/skin-concerns"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-gray-100"
            >
              Skin Concerns
            </Link>

            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-gray-100"
            >
              About us
            </Link>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-gray-100"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
