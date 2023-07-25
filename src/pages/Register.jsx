import React from "react";
import Navbar from "../component/Navbar";
import { LOGO } from "../assets/image";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-screen h-screen m-auto">
      <div className="relative flex flex-col">
        <div className="h-[20rem]"></div>
        <div className="h-[calc(100vh_-_20rem)] bg-slate-900">
      <div className="hidden"><Navbar /></div>
      <section className="px-5 py-3 mx-6 max-w-[25rem] bg-white shadow-lg absolute top-0 left-0 right-0 mt-24 md:m-auto md:mt-24 rounded-sm md:px-8">
        <div className="w-40 py-6 mx-auto"> <Link to='/'><img className="" src={LOGO} alt="" /></Link> </div>
        <form id="container" action="" method="">
          <div className="">
            <input
              type="name"
              placeholder="First Name"
              name="firstName"
              className="outline-none bg-inherit flex gap-2 border-slat-300 border-[1px] py-3 md:py-3 px-3 mt-3 rounded-sm text-sm text-[#bebebe] w-full"
            ></input>
          </div>
          <div className="">
            <input
              type="name"
              placeholder="Last Name"
              name="firstName"
              className="outline-none bg-inherit flex gap-2 border-slat-300 border-[1px] py-3 md:py-3 px-3 mt-3 rounded-sm text-sm text-[#bebebe] w-full"
            ></input>
          </div>

          <input
            type="email"
            placeholder="Email"
            name="email"
            className="outline-none bg-inherit flex gap-2 border-slat-300 border-[1px] py-3 md:py-3 px-3 mt-3 rounded-sm text-sm text-[#bebebe] w-full"
          ></input>

          <input
            type="password"
            placeholder="Password"
            name="password"
            className="outline-none bg-inherit flex gap-2 border-slat-300 border-[1px] py-3 md:py-3 px-3 mt-3 rounded-sm text-sm text-[#bebebe] w-full"
          ></input>

          <input
            type="password"
            placeholder="Confirm password"
            name="password"
            className="outline-none bg-inherit flex gap-2 border-slat-300 border-[1px] py-3 md:py-3 px-3 mt-3 rounded-sm text-sm text-[#bebebe] w-full"
          ></input>

          <button
            className="w-full p-3 text-sm text-center bg-orange-500 rounded-md cursor-pointer my-7 text-slate-100 hover:bg-orange-500"
            disabled
          >
            Create Account
          </button>

          <p className="text-[14px] p-2 text-[#bebebe] leading-4 mb-2">
            By clicking the above, you agree to our{" "}
            <span className="text-[#FF8600]">Terms of service</span> and{" "}
            <span className="text-[#FF8600]">Privacy policy</span>
          </p>

          <p
            className="text-[14px] text-center p-2 text-[#bebebe] leading-4"
          >
            Already have an account?{" "}
            <Link className="text-[#FF8600]" to="/login">
              Login
            </Link>
          </p>
        </form>
      </section>
        </div>
      </div>
    </div>  
  );
};
export default Register;
