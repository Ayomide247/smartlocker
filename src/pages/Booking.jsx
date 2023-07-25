import Navbar from "../component/Navbar";
import bgbanner from "../assets/image/h2.png";
// import { Link } from "react-router-dom";
import Selected from "../component/Selected";
// import Select from "../component/select/Select";
import { FaSearch } from "react-icons/fa";
import smartlogo from "../assets/image/smartparcel_green_2.png";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { PiBinocularsBold } from "react-icons/pi";
import whiteAppStore from "../assets/image/whiteAppStore.png";
import whiteGooglePlay from "../assets/image/whiteGooglePlay.png";
import Select from "react-select";
import { AREA, Lockers } from "../utils/data";
import { useEffect, useState } from "react";
import {
  ReceiverInformation,
  SelectRider,
  SenderInformation,
} from "../component";
import { toast } from "react-toastify";

const Stage = () => {
  const [activeTab, setActiveTab] = useState("sender_info");
  const [showRiders, setShowRiders] = useState(false);
  const sectionStyle = {
    backgroundImage: `url(${bgbanner})`,
  };

  const handleProceed = (e) => {
    e.preventDefault();
    let from = JSON.parse(localStorage.getItem('from'))
    let to = JSON.parse(localStorage.getItem('to'))
    if (from === null) {
      toast.dismiss()
      toast.error('Please choose area')
      return
    }
    if (activeTab === "receiver_info") {
      if (to === null) {
        toast.dismiss()
        toast.error('Please choose area')
        return
      }
      setShowRiders(true);
    }
    setActiveTab("receiver_info");
  }

  return (
    <section className="w-screen h-screen p-0 m-auto overflow-x-hidden text-slate-700 bg-[#FF600008]">
      <Navbar />
      <div className="px-5 py-10 mt-24 md:w-[70%] lg:w-[50%] text-slate-500 items-center m-auto">
        <h3 className="font-bold text-[20px] my-5">Book A Locker</h3>
        <section className="px-12 py-10 bg-white shadow-lg">
          <form className="my-5">
            {activeTab === "sender_info" && <SenderInformation />}
            {activeTab === "receiver_info" && <ReceiverInformation />}

            <div className="flex justify-end">
              <button
                className=" py-2 px-6 rounded-md bg-[#FF6000]   text-[#ffffffff] hover:bg-[#ffffffff] border border-[#FF6000] hover:text-slate-700 transition-all duration-300 ease-in"
                onClick={handleProceed}
              >
                Proceed
              </button>
            </div>
          </form>
        </section>
      </div>

      <footer className="bg-[#FF6000] md:px-24 px-5 py-16 text-white text-[16px]">
        <div className="items-center justify-between text-center md:flex flex-cols-3 ">
          <div className="md:w-3/6">
            <div className="pb-4">
              <img className="w-[50%]" src={smartlogo}></img>
            </div>
            <div className="md:w-4/6">
              <p className="my-5 leading-7 text-center md:my-0 md:text-start ">
                The Premier Smartlocker Solution for Logistics in Nigeria. Our
                SmartParcel Lockers are express self-servicing machines designed
                to automate pick-up and delivery of packages.
              </p>
            </div>
          </div>

          <div className="md:w-[35%] leading-10 text-left">
            <p className="underline">Quick Links</p>
            <p>About Us</p>
            <p>FAQs</p>
            <p>Ecosystem</p>
            <p>Support</p>
          </div>

          <div className="md:w-[15%] text-start">
            <p className="font-medium underline">Our Address</p>
            <p className="mt-5">No 9, MacDonald Ikoyi, Lagos State, Nigeria.</p>
            <p className="mt-10">+234 913 111 1160 hello@smartparcel.ng</p>
          </div>
        </div>

        <div className="border-b border-b-[#F6D7C4] my-10"></div>

        <div className="justify-between md:flex ">
          <div>
            <p>
              {" "}
              &copy; {new Date().getFullYear()} SmartParcel || All Rights
              Reserved.
            </p>
            <div className="flex my-5 mt-5 gap-7">
              <BsFacebook />
              <BsTwitter />
              <BsInstagram />
              <BsLinkedin />
            </div>
          </div>

          <div className="flex gap-5">
            <img
              className="md:w-[170px] h-[50px] w-[150px] cursor-pointer"
              src={whiteAppStore}
            ></img>
            <img
              className="md:w-[170px] h-[50px] w-[150px] cursor-pointer"
              src={whiteGooglePlay}
            ></img>
          </div>
        </div>
      </footer>

      <SelectRider
        isModalVisible={showRiders}
        handleClose={() => setShowRiders(false)}
      />
    </section>
  );
};
export default Stage;
