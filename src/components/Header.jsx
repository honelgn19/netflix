import React, { useState } from "react";
import hero from "../assets/hero.png";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white w-full fixed top-0 z-50">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 md:px-10 py-4">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-6">
          {/* Hamburger Menu */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon />
          </div>

          <img
            src={hero}
            alt="logo"
            className="w-10 sm:w-12 md:w-14 lg:w-16 object-contain hover:opacity-80 transition"
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">TV Shows</li>
            <li className="cursor-pointer">Movies</li>
            <li className="cursor-pointer">Latest</li>
            <li className="cursor-pointer">My List</li>
            <li className="cursor-pointer md:hidden lg:block">
              Browse by Language
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <ul className="flex items-center gap-4">
          <li className="cursor-pointer">
            <SearchIcon />
          </li>
          <li className="hidden md:block cursor-pointer">
            <NotificationsActiveRoundedIcon />
          </li>
          <li className="cursor-pointer">
            <AccountBoxRoundedIcon />
          </li>
          <li className="cursor-pointer">
            <ArrowDropDownRoundedIcon />
          </li>
        </ul>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <span className="text-lg font-bold">Menu</span>
          <CloseIcon
            className="cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <ul className="flex flex-col gap-6 p-6">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">TV Shows</li>
          <li className="cursor-pointer">Movies</li>
          <li className="cursor-pointer">Latest</li>
          <li className="cursor-pointer">My List</li>
          <li className="cursor-pointer">Browse by Language</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
