import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/image/smartparcel.jpg";

// import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] top-0 left-0 flex justify-between items-center px-4 bg-[#ffffffff] text-green-700 text-md font-extrabold z-10 shadow">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "200px" }} />
      </div>

      {/*Menu*/}

      <ul className="hidden gap-5 md:flex ">
        <li>Track Parcel</li>
        <li>Parcel History</li>
        <li>Locker locations</li>
        <li>Sign In</li>
        <li>Contact</li>
      </ul>

      {/*Hamburger*/}
      <div onClick={handleClick} className="z-10 md:hidden">
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
        <li className="py-6 ">Track Parcel</li>
        <li className="py-6 ">Parcel History</li>
        <li className="py-6 ">Locker locations</li>
        <li className="py-6 ">Sign In</li>
        <li className="py-6 ">Contact</li>
      </ul>

      {/*Social Icons*/}
    </div>
  );
};
export default Navbar;
