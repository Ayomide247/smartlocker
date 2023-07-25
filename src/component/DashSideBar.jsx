import React from "react";
import { Link } from "react-router-dom";
import smartlogo from "../assets/image/smartparcel_green_2.png";
import whatsapp from "../assets/image/whatsapp.png";
import {
  BsFillHouseDoorFill,
  BsPersonFillGear,
  BsBoxArrowRight,
} from "react-icons/bs";
import { FaTruck, FaRegCreditCard, FaBell } from "react-icons/fa";

const DashSideBar = () => {
  return (
    <div>
      <div className="flex flex-col justify-between sidebar">
        <Link to={"/"} className="mt-3 ml-7">
          <img className="w-[80%]" src={smartlogo}></img>
        </Link>

        <div className="mt-12">
          <div className="flex items-start justify-center gap-2 bg-[#FF6000] text-white px-2 py-2 rounded-full cursor-pointer hover:bg-white hover:text-[#FF6000] border-[#FF6000] border transition ease-in-out my-5 ">
            <span>
              <BsFillHouseDoorFill />
            </span>
            <p className="font-medium">Dashboard</p>
          </div>

          <div className="flex items-center justify-center gap-2 text-slate-700 px-2 py-2 rounded-full cursor-pointer hover:bg-white hover:text-[#FF6000] hover:border-[#FF6000] border border-slate-400 transition ease-in-out my-5 text-start">
            <span>
              <FaTruck />
            </span>
            <p className="font-medium">Parcel</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-700 px-2 py-2 rounded-full cursor-pointer hover:bg-white hover:text-[#FF6000] hover:border-[#FF6000] border border-slate-400 transition ease-in-out my-5 text-start">
            <span>
              <FaRegCreditCard />
            </span>
            <p className="font-medium">Billings</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-700 px-2 py-2 rounded-full cursor-pointer hover:bg-white hover:text-[#FF6000] hover:border-[#FF6000] border border-slate-400 transition ease-in-out my-5 w-full text-start">
            <span>
              <FaBell />
            </span>
            <p className="font-medium text-start">Notification</p>
          </div>

          <div className="flex items-center justify-center gap-2 text-slate-700 px-2 py-2 rounded-full cursor-pointer hover:bg-white hover:text-[#FF6000] hover:border-[#FF6000] border border-slate-400 transition ease-in-out my-5 w-full text-start">
            <span>
              <BsPersonFillGear />
            </span>
            <p className="font-medium text-start">Settings</p>
          </div>
        </div>

        <div class="bg-[#fffbf7] p-5 font-medium text-slate-500 rounded-lg shadow-md mt-16">
          <div className="flex gap-2 text-start">
            <img src={whatsapp} className="w-[50px] rounded-full"></img>
            <div>
              <p>Bayomide</p>
              <p className="text-green-500">Verified</p>
            </div>
          </div>

          <div className="mt-10">Customer</div>

          <div className="flex items-center justify-center gap-4 m-auto bg-[#FF6000] text-white py-2 rounded-full mt-5 cursor-pointer hover:bg-[#FF9000]">
            <span>
              <BsBoxArrowRight />
            </span>
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashSideBar;
