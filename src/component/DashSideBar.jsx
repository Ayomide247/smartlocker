import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import smartlogo from "../assets/image/smartparcel_green_2.png";
import whatsapp from "../assets/image/whatsapp.png";
import userPic6 from "../assets/image/naija6.jpeg";

import {
  BsFillHouseDoorFill,
  BsPersonFillGear,
  BsBoxArrowRight,
} from "react-icons/bs";
import { FaTruck, FaRegCreditCard, FaBell } from "react-icons/fa";
import { Links } from "../utils/data";

const DashSideBar = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="">
        <Link to={"/dashboard"} className="mt-3 ml-">
          <img className="w-[80%]" src={smartlogo}></img>
        </Link>

        <section className="flex flex-col h-[88vh] justify-between items-stretch">
          <div className="mt-12">
            <ul className="">
              {
                Links.map(({ id, title, url, icon }) => (
                  <NavLink to={url} className={`flex items-center pl-8 mb-2 gap-x-4 p-2  text-gray-500 rounded-full cursor-pointer hover:bg-[#ff6000] hover:text-white transition-all duration-500 ease-in-out ${id === 1 ? 'bg-[#ff6000] text-white' : ''}`}>
                    <span>{icon}</span>
                    <span className="font-medium">{title}</span>
                  </NavLink>
                ))
              }
            </ul>
          </div>

          <div class="bg-[#fffbf7] p-5 font-medium text-slate-500 rounded-lg shadow-md mt-16">
            <div className="flex gap-2 text-start">
              <img src={userPic6} className="w-[50px] rounded-full"></img>
              <div>
                <p>Bayomide</p>
                <p className="text-green-500">Verified</p>
              </div>
            </div>

            <div className="mt-10">Customer</div>

            <div className="flex items-center justify-center gap-4 m-auto bg-[#FF6000] text-white py-2 rounded-full mt-5 cursor-pointer hover:bg-[#FF9000]"
              onClick={() => navigate(-1)}
            >
              <span>
                <BsBoxArrowRight />
              </span>
              <p>Logout</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default DashSideBar;
