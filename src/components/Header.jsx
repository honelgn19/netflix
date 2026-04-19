import React from "react";
import hero from ".././assets/hero.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
function Header() {
  return (
    <>
      <div className="flex list-none fixed-top  bg-black text-white py-4  justify-between  w-full px-10">
        <div>
          <ul className="flex gap-10">
            <li>
              <img src={hero} width={50} alt="bado" />
            </li>
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>
        <div>
          <ul className="flex  gap-5">
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsActiveRoundedIcon />
            </li>
            <li>
              <AccountBoxRoundedIcon />
            </li>
            <li>
              <ArrowDropDownRoundedIcon />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
