import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/image/smartparcel.jpg";
import smartlogo from "../assets/image/smartparcel_green_2.png";
import { Link } from "react-router-dom";
import hamburger from "../assets/image/hamburger.png";
import { BsPersonFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";

// import { FaBars, FaTimes } from "react-icons/fa";

const DashNavbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div
      className="h-[80px] left-0 items-center bg-[#ffffffff] text-slate-700 text-md font-medium fixed top-0 md:left-72 md:w-[82%] w-full flex justify-between
      md:m-0 px-5 z-10 shadow md:shadow-none "
    >
      <Link to={"/"}>
        <img className="w-[30px]" src={hamburger} alt="Logo Image" />
      </Link>

      <img className="w-[120px] md:hidden" src={smartlogo}></img>

      <div className="flex items-center justify-center gap-2 bg-[#FF6000] text-white px-5 py-1 rounded-full">
        <span>
          <BsPersonFill />
        </span>
        <p className="flex gap-2">
          Ayomide <p className="hidden md:flex">Balogun</p>
        </p>
        <span>
          <BiChevronDown className="font-extrabold text-[30px]" />
        </span>
      </div>
    </div>
  );
};
export default DashNavbar;
