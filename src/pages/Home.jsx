import Navbar from "../component/Navbar";
import appstore from "../assets/image/appStore.jpg";
import google from "../assets/image/google.jpg";
import whiteAppStore from "../assets/image/whiteAppStore.png";
import whiteGooglePlay from "../assets/image/whiteGooglePlay.png";
import banner1 from "../assets/image/banner1.jpg";
import phone from "../assets/image/phone.png";
import phone2 from "../assets/image/phone2.png";
import smartlogo from "../assets/image/smartparcel_green_2.png";
import bgbanner from "../assets/image/h2.png";
import parcel from "../assets/image/autoparcel.jpg";

import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsArrowDownCircle,
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";
import { FaRegMoneyBillAlt } from "react-icons/fa";

const Home = () => {
  const containerStyle = {
    backgroundImage: `url(${bgbanner})`,
  };

  const bgImgStyle = {
    backgroundImage: `url(${parcel})`,
  };
  return (
    <section className="p-0 m-0 text-slate-700">
      <Navbar />
      <section className="mt-[8rem] w-full text-center ">
        <div className="justify-between px-5 text-center md:grid md:grid-cols-2 md:px-24 md:text-start">
          <div>
            <div className="font-extrabold md:text-[4rem] text-[2rem] w-full">
              <h1>Secured</h1>
              <h1>Simplified Logistics</h1>
              <h1>
                For <span className="text-[#FF6000]">Africa</span>
              </h1>
            </div>
            <p className="md:w-[70%] font-medium my-16 text-[19px]">
              SmartParcel provides individuals, businesses and government
              organizations with better logistics services prioritizing speed,
              security and convenience
            </p>
            <div className="flex gap-10 ">
              <img
                className="md:w-[170px] h-[50px] w-[150px]"
                src={appstore}
              ></img>
              <img
                className="md:w-[170px] h-[50px] w-[150px]"
                src={google}
              ></img>
            </div>
          </div>
          <div className="my-10">
            <img className="md:w-[75%] md:float-right" src={banner1}></img>
          </div>
        </div>
      </section>

      <section
        style={bgImgStyle}
        className="w-full h-full md:px-24 py-10 mt-10 text-center bg-fixed md:bg-left bg-no-repeat bg-cover opacity-80 text-[#FF6000]"
      >
        <div className="justify-between gap-24 px-5 py-16 md:flex md:px-24 md:flex-cols-3">
          <div className="py-16 bg-inherit">
            <img className="w-[60%] m-auto" src={phone}></img>
          </div>

          <div className="md:w-[40%] m-auto text-center">
            <h1 className="font-extrabold md:text-[3rem] text-[2rem] md:text-start">
              Easy & convenient Logistics Service
            </h1>
            <p className="my-10 font-semibold text-[20px] md:text-start leading-8 md:w-[80%]">
              The Premier Smartlocker Solution for Logistics in Nigeria. Our
              SmartParcel Lockers are express self-servicing machines designed
              to automate pick-up and delivery of packages.
            </p>

            <button className="py-3 px-9 rounded-md bg-[#FF6000]   text-[#ffffffff] hover:bg-[#FF7000] border-2 border-[#FF6000]">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#F1620C] text-[#ffffffff] py-10 md:px-24 px-5">
        <div className="justify-between md:flex md:flex-cols-2">
          <div className="text-center md:w-1/2">
            <h1 className="font-extrabold md:text-[3rem] text-[2rem] md:text-start my-7">
              Who we are.
            </h1>
            <p className="my-10 font-medium text-[18px] text-start leading-8 md:w-[80%]">
              We Executed Partnership with Nigerian Postal Services (NIPOST) for
              deployment of Smart Lockers across 774 local governments and 955
              post offices with over 3000 postal agencies across Nigeria.
            </p>
          </div>
          <div className="hidden md:flex md:justify-between gap-14 md:text-[3rem] text-[2rem] m-auto my-9 ">
            <BsArrowLeftCircle />
            <BsArrowRightCircle />
          </div>
        </div>
        <div className="flex justify-center gap-5 px-5 my-10 md:px-28">
          <div class=" md:w-[25%] rounded-xl overflow-hidden shadow-lg bg-[#ffffffff] py-10 pl-9 items-center">
            <div className="bg-[#F6D7C4] p-5 w-fit rounded-md ">
              <FaRegMoneyBillAlt className="text-[#F1620C] text-3xl" />
            </div>
            <div class=" py-4 text-start ">
              <div class="font-bold text-2xl my-5 text-slate-700">
                Cost Effective
              </div>
              <p class="text-gray-700 font-semibold text-[16px] text-start leading-8 w-[80%]">
                Spend less to send and receive your packages with our affordable
                pricing.
              </p>
            </div>
          </div>

          <div class="hidden md:grid md:w-[25%] rounded-xl overflow-hidden shadow-lg bg-[#ffffffff] py-10 px-5 items-center">
            <div className="bg-[#F6D7C4] p-5 w-fit rounded-md ">
              <FaRegMoneyBillAlt className="text-[#F1620C] text-3xl" />
            </div>
            <div class=" py-4 text-start ">
              <div class="font-bold text-2xl my-5 text-slate-700">
                Track your Delivery
              </div>
              <p class="text-gray-700 font-semibold text-[16px] text-start leading-8 w-[80%]">
                Spend less to send and receive your packages with our affordable
                pricing.
              </p>
            </div>
          </div>

          <div class=" hidden md:grid md:w-[25%] rounded-xl overflow-hidden shadow-lg bg-[#ffffffff] py-10 pl-9 items-center">
            <div className="bg-[#F6D7C4] p-5 w-fit rounded-md ">
              <FaRegMoneyBillAlt className="text-[#F1620C] text-3xl" />
            </div>
            <div class=" py-4 text-start ">
              <div class="font-bold text-2xl my-5 text-slate-700">
                Cost Effective
              </div>
              <p class="text-gray-700 font-semibold text-[16px] text-start leading-8 w-[80%]">
                Spend less to send and receive your packages with our affordable
                pricing.
              </p>
            </div>
          </div>
        </div>

        <div className="md:hidden flex  gap-14  text-[2rem] text-center my-9 justify-center">
          <BsArrowLeftCircle />
          <BsArrowRightCircle />
        </div>
      </section>

      <section className=" bg-[#FF60001A] md:px-24 px-5 py-5 ">
        <h1 className="font-extrabold md:text-[3rem] text-[2rem] text-center justify-center py-16">
          Frequently asked questions
        </h1>
        <div className="jdustify-between md:flex ">
          <div className="md:w-[50%]">
            <div className="border-b-2 border-[#F1620C] w-[100%] "></div>
            <div className="flex justify-between my-10 text-lg font-bold md:text-2xl text-slate-700">
              <p className="">01</p>
              <p className="w-[70%]">Whats is a Smart Locker?</p>
              <span>
                <BsArrowDownCircle className="text-[#F1620C]" />
              </span>
            </div>

            <div className="border-b-2 border-[#F1620C] w-[100%] "></div>
            <div className="flex justify-between my-10 text-lg font-bold md:text-2xl text-slate-700">
              <p className="">02</p>
              <p className="w-[70%]">How do I track my parcel?</p>
              <span>
                <BsArrowDownCircle className="text-[#F1620C]" />
              </span>
            </div>

            <div className="border-b-2 border-[#F1620C] w-[100%] "></div>
            <div className="flex justify-between my-10 text-lg font-bold md:text-2xl text-slate-700">
              <p className="">03</p>
              <p className="w-[70%]">Do you have a weight limit?</p>
              <span>
                <BsArrowDownCircle className="text-[#F1620C]" />
              </span>
            </div>

            <div className="border-b-2 border-[#F1620C] w-[100%] "></div>
            <div className="flex justify-between my-10 text-lg font-bold md:text-2xl text-slate-700">
              <p className="">04</p>
              <p className="w-[70%]">What sort of item can’t I send?</p>
              <span>
                <BsArrowDownCircle className="text-[#F1620C]" />
              </span>
            </div>

            <div className="border-b-2 border-[#F1620C] w-[100%] "></div>
            <div className="flex justify-between my-10 text-lg font-bold md:text-2xl text-slate-700">
              <p className="">05</p>
              <p className="w-[70%]">
                Can I put two or more parcel in the same locker compartment?
              </p>
              <span>
                <BsArrowDownCircle className="text-[#F1620C]" />
              </span>
            </div>
          </div>

          <div className=" w-[50%] mx-auto ">
            <img className=" w-[300px] m-auto " src={phone2}></img>
          </div>
        </div>
      </section>

      <section
        style={containerStyle}
        className="w-full h-full px-5 py-10 text-center bg-fixed bg-no-repeat bg-cover md:px-24 md:bg:-left opacity-80"
      >
        <h1 className="font-extrabold text-[2rem] md:text-[3rem] text-center justify-center py-10 md:w-1/2 m-auto text-[#F1620C]">
          BE THE FIRST TO KNOW ABOUT UPDATE AND OFFERS
        </h1>
        <h4 className="font-medium text-[1.5rem] md:text-[2rem] text-center justify-center py-5 md:w-1/2 m-auto text-[#F1620C] ">
          Join our mailing list
        </h4>
        <form className="justify-between md:mx-16 md:flex my-7">
          <input
            className="p-4 md:p-5 md:w-[70%] w-full rounded-full text-[16px] md:text-[20px] outline-none"
            placeholder="smartparcel@gmail.com"
          ></input>
          <button className="font-bold px-16 py-2 mt-5 md:mt-0 cursor-pointer rounded-md bg-[#FF6000] text-[#ffffffff] hover:bg-[#FF7000] border-2 border-[#FF6000]">
            Join
          </button>
        </form>
      </section>

      <footer className="bg-[#FF6000] md:px-24 px-5 py-16 text-white md:text-[20px] text-[16px]">
        <div className="justify-between text-center md:flex flex-cols-3 ">
          <div className="md:w-[35%]">
            <div>
              <img className="w-[50%]" src={smartlogo}></img>
            </div>
            <div>
              <p className="my-5 leading-10 text-center md:my-0 md:text-start ">
                The Premier Smartlocker Solution for Logistics in Nigeria. Our
                SmartParcel Lockers are express self-servicing machines designed
                to automate pick-up and delivery of packages.
              </p>
            </div>
          </div>

          <div className="md:w-[35%] leading-10 ">
            <p>Quick Links</p>
            <p>About Us</p>
            <p>FAQs</p>
            <p>Ecosystem</p>
            <p>Support</p>
          </div>

          <div className="md:w-[15%] text-start mt-10 ">
            <p className="font-medium underline">Our Address</p>
            <p className="mt-5">No 9, MacDonald Ikoyi, Lagos State, Nigeria.</p>
            <p className="mt-10">+234 913 111 1160 hello@smartparcel.ng</p>
          </div>
        </div>

        <div className="border border-b-2-[#F6D7C4] my-10"></div>

        <div className="justify-between md:flex ">
          <div>
            <p>@2023 SmartParcel || All Rights Reserved.</p>
            <div className="flex my-5 mt-5 gap-7">
              <BsFacebook />
              <BsTwitter />
              <BsInstagram />
              <BsLinkedin />
            </div>
          </div>

          <div className="flex gap-5">
            <img
              className="md:w-[170px] h-[50px] w-[150px]"
              src={whiteAppStore}
            ></img>
            <img
              className="md:w-[170px] h-[50px] w-[150px]"
              src={whiteGooglePlay}
            ></img>
          </div>
        </div>
      </footer>
    </section>
  );
};
export default Home;
