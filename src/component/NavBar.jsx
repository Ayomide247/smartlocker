import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/image/smartparcel.jpg";
import { Link } from "react-router-dom";

// import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] top-0 left-0 flex justify-between items-center bg-[#ffffffff] text-slate-700 text-md font-medium z-10 shadow px-5 md:px-28 ">
      <div>
        <Link to={"/"}>
          <img src={Logo} alt="Logo Image" style={{ width: "200px" }} />
        </Link>
      </div>

      <div className="">
        <ul className="hidden gap-8 lg:flex ">
          <Link
            to="/"
            className="border-b-2 border-b-[#fff] nav-link hover:text-[#FF6000;] nav-link transition transform duration-700 ease-in-out hover:scale-105 hover:border-b-2 hover:border-[#FF6000]"
          >
            Home
          </Link>
          <Link
            to="/HowItWorks"
            className="border-b-2 border-b-[#fff] nav-link hover:text-[#FF6000;] nav-link transition transform duration-700 ease-in-out hover:scale-105 hover:border-b-2 hover:border-[#FF6000]">
            How it works
          </Link>
          <Link
            to="/Stage"
            className="border-b-2 border-b-[#fff] nav-link hover:text-[#FF6000;] nav-link transition transform duration-700 ease-in-out hover:scale-105 hover:border-b-2 hover:border-[#FF6000]">
            Book Now
          </Link>
          <Link
            to="/AboutUs"
            className="border-b-2 border-b-[#fff] nav-link hover:text-[#FF6000;] nav-link transition transform duration-700 ease-in-out hover:scale-105 hover:border-b-2 hover:border-[#FF6000]"
          >
            About Us
          </Link>
        </ul>
      </div>

      <div className="justify-between hidden gap-5 lg:flex">
        <Link
          to="/Login"
          className="border border-[#FF6000] py-2 px-7 rounded-md hover:bg-[#FF6000]  hover:text-[#ffffffff] transition-all duration-300 ease-in"
        >
          Login
        </Link>
        <Link
          to="/register"
          className=" py-2 px-6 rounded-md bg-[#FF6000]   text-[#ffffffff] hover:bg-[#ffffffff] border border-[#FF6000] hover:text-slate-700 transition-all duration-300 ease-in"
        >
          Create an account
        </Link>
      </div>

      {/*Hamburger*/}
      <div onClick={handleClick} className="z-10 lg:hidden">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*Mobile Menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-[100%] h-screen bg-slate-50 flex flex-col justify-center items-center text-lg"
        }
      >


        <Link
          to="/"
          className="py-6 ">
          Home
        </Link>

        <Link
          to="/HowItWorks"
          className="py-6 ">
          How it works
        </Link>

        <Link to="/Stage" className="py-6 ">
          Book Now
        </Link>

        <Link
          to="/AboutUs"
          className="py-6 ">
          About Us
        </Link>

        <Link to="/Login" className="py-6 ">
          Log In
        </Link>
        <Link to="/Register" className="py-6 ">
          Register
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;
