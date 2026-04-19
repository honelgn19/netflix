import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12 px-8 md:px-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Questions line */}
        <div className="mb-8">
          Questions? Call{" "}
          <a
            href="tel:1-844-505-2993"
            className="underline hover:text-gray-300"
          >
            1-844-505-2993
          </a>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-4 text-sm">
          <div className="flex flex-col gap-3">
            <a href="#" className="hover:underline">
              FAQ
            </a>
            <a href="#" className="hover:underline">
              Investor Relations
            </a>
            <a href="#" className="hover:underline">
              Ways to Watch
            </a>
            <a href="#" className="hover:underline">
              Corporate Information
            </a>
            <a href="#" className="hover:underline">
              Netflix Originals
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#" className="hover:underline">
              Help Center
            </a>
            <a href="#" className="hover:underline">
              Jobs
            </a>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Cookie Preferences
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#" className="hover:underline">
              Account
            </a>
            <a href="#" className="hover:underline">
              Redeem Gift Cards
            </a>
            <a href="#" className="hover:underline">
              Buy Gift Cards
            </a>
            <a href="#" className="hover:underline">
              Media Center
            </a>
            <a href="#" className="hover:underline">
              Speed Test
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <a href="#" className="hover:underline">
              Audio Description
            </a>
            <a href="#" className="hover:underline">
              Legal Notices
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>

        {/* Language Selector */}
        <div className="mt-10 mb-6">
          <select className="bg-black border border-gray-500 text-gray-400 px-4 py-2 rounded focus:outline-none focus:border-gray-300">
            <option value="en">🌐 English</option>
            <option value="es">🌐 Español</option>
            <option value="fr">🌐 Français</option>
            {/* Add more languages as needed */}
          </select>
        </div>

        {/* Copyright / Country */}
        <div className="text-sm text-gray-500">
          Netflix Clone • Ethiopia / Oromiya
        </div>
      </div>
    </footer>
  );
};

export default Footer;
