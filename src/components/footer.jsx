import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import CIPL from "../../public/CIPL.png"

const Footer = () => {
  // Get current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800 py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 sm:mb-8 md:mb-10 gap-6 sm:gap-8 md:gap-12">
          {/* Left Section */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900 leading-tight">
              Ready To Transform Your Skin?
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-gray-600 mb-4 md:mb-6 max-w-2xl">
              Explore Our Complete Range Of Dermatologist-recommended Products
            </p>
            <button className="w-auto bg-[#FD4A4B] text-white font-semibold py-2 xs:py-3 px-4 xs:px-6 md:px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 text-center text-sm xs:text-base">
              Browse all Products →
            </button>
          </div>

          {/* Right Section - Brand Info */}
          <div className="lg:w-1/3 w-full bg-gray-50 rounded-xl p-4 xs:p-5 md:p-6 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              {/* CIPL Logo */}
              <div className="flex items-center gap-3">
                <img src={CIPL} alt="CIPL Logo" className="w-12 xs:w-14 h-10 xs:h-12" />
                <div>
                  <div className="text-xs xs:text-sm md:text-base text-gray-500 font-medium">Cosmitech</div>
                </div>
              </div>
            </div>
            <p className="text-xs xs:text-sm md:text-base text-gray-600 leading-relaxed">
              Your trusted source for dermatologist-backed skincare information featuring Fixderma & FCL.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-4 xs:my-6 md:my-8"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 md:gap-12 lg:gap-52">
          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="font-bold text-base xs:text-lg mb-3 xs:mb-4 md:mb-6 text-gray-900">Quick Links</h3>
            <div className="grid grid-cols-2 gap-1 xs:gap-2">
              {['Home', 'Brands', 'Skin Concerns', 'Products', 'About Us', 'Contact'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-600 hover:text-[#FD4A4B] transition-colors duration-200 text-xs xs:text-sm md:text-base py-1 xs:py-2"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="font-bold text-base xs:text-lg mb-3 xs:mb-4 md:mb-6 text-gray-900">Contact</h3>
            <address className="text-gray-600 not-italic text-xs xs:text-sm md:text-base space-y-1 xs:space-y-2 md:space-y-3">
              <p>Gophal Marg, Teku</p>
              <p>Kathmandu 44600, Nepal</p>
              <p>015342352</p>
            </address>
          </div>

          {/* Social Media */}
          <div className="flex flex-col">
            <h3 className="font-bold text-base xs:text-lg mb-3 xs:mb-4 md:mb-6 text-gray-900">Follow us on</h3>
            <div className="flex flex-wrap gap-2 xs:gap-3 md:gap-4">
              {[
                { icon: FaFacebook, color: 'hover:bg-blue-50 hover:text-blue-600' },
                { icon: FaTwitter, color: 'hover:bg-sky-50 hover:text-sky-500' },
                { icon: FaInstagram, color: 'hover:bg-pink-50 hover:text-pink-600' },
                { icon: FaLinkedin, color: 'hover:bg-blue-50 hover:text-blue-700' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href="#"
                    className={`bg-gray-100 p-2 xs:p-3 md:p-4 rounded-full transition-all duration-200 ${social.color}`}
                    aria-label={`Follow on ${social.icon.name.replace('Fa', '')}`}
                  >
                    <Icon className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-4 xs:my-6 md:my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs md:text-sm space-y-2 md:space-y-0 text-center md:text-left">
          <p>© {currentYear} Cosmitech. All rights reserved.</p>
          <p>Powered by EOS Web Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;