import React from 'react';
import whiteAppStore from "../assets/image/whiteAppStore.png";
import whiteGooglePlay from "../assets/image/whiteGooglePlay.png";
import smartlogo from "../assets/image/smartparcel_green_2.png";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <footer className="bg-[#FF6000] md:px-24 px-5 py-16 text-white text-[16px]">
            <div className=" justify-between text-center md:flex flex-cols-3 ">
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

                    <Link
                        to={"/AboutUs"}
                        className='hover:underline  transition duration-500 ease-in-out transform'
                    >About Us</Link>

                    <p className='hover:underline transition duration-500 ease-in-out transform' >FAQs</p>
                    <p className='hover:underline transition duration-500 ease-in-out transform'>Ecosystem</p>
                    <p className='hover:underline transition duration-500 ease-in-out transform'>Support</p>
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
    )
}

export default Footer