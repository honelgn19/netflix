import React from "react";
import hero from ".././assets/hero.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
function Header() {
  return (
    <>
      <div className="flex items-center justify-between bg-black text-white py-4 px-4 md:px-10 w-full fixed top-0">

  {/* LEFT SIDE */}
  <ul className="flex items-center gap-6 whitespace-nowrap">
    <li>
      <img src={hero} width={50} alt="logo" />
    </li>
    <li className="hidden md:block">Home</li>
    <li className="hidden md:block">Tv Shows</li>
    <li className="hidden md:block">Movies</li>
    <li className="hidden lg:block">Latest</li>
    <li className="hidden lg:block">My List</li>
    <li className="hidden xl:block">Browse by Language</li>
  </ul>

  {/* RIGHT SIDE */}
  <ul className="flex items-center gap-4">
    <li><SearchIcon /></li>
    <li className="hidden md:block"><NotificationsActiveRoundedIcon /></li>
    <li><AccountBoxRoundedIcon /></li>
    <li><ArrowDropDownRoundedIcon /></li>
  </ul>

</div>
    </>
  );
}

export default Header;
