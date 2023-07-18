import React from "react";
import Navbar from "../component/Navbar";

const SignUp = () => {
  return (
    <div className="m-auto w-[100%] md:w-1/2 h-[100%] bg-[#e6e6e6]">
      <Navbar />
      <section className="px-5 py-3 md:px-4 md:py-10 mt-[6rem]  md:mt-[10rem] bg-slate-600 rounded-3xl shadow-2xl mx-5 md:mx-0 ">
        <form id="container" action="" method="">
          <div className="grid grid-cols-2 gap-3">
            <input
              type="name"
              placeholder="First Name"
              name="firstName"
              className="outline-none bg-inherit flex gap-2 border-solid border-green-500 border-[1px] py-3 md:py-3 px-3 mt-3 rounded-md text-sm text-[#bebebe] w-full font-bold"
            ></input>

            <input
              type="name"
              placeholder="Last Name"
              name="firstName"
              className="outline-none bg-inherit flex gap-2 border-solid border-green-500 border-[1px] py-3 md:py-3 px-3 mt-3 rounded-md text-sm text-[#bebebe] w-full font-bold"
            ></input>
          </div>

          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full bg-inherit outline-none flex gap-2 border-solid border-green-500 border-[1px] py-3 md:py-3 px-3 mt-3 rounded-md text-sm text-[#bebebe] font-bold"
          ></input>

          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full bg-inherit outline-none flex gap-2 border-solid border-green-500 border-[1px] py-3 md:py-3 px-3 mt-3 rounded-md text-sm text-[#bebebe] font-bold"
          ></input>

          <input
            type="password"
            placeholder="Confirm password"
            name="password"
            className="w-full bg-inherit outline-none flex gap-2 border-solid border-green-500 border-[1px] py-3 md:py-3 px-3 mt-3 rounded-md text-sm text-[#bebebe] font-bold"
          ></input>

          <button
            className="w-full p-3 text-sm font-medium text-center bg-orange-500 rounded-md cursor-pointer my-7 text-slate-100 hover:bg-orange-500"
            disabled
          >
            Create Account
          </button>

          <p className="text-[14px] p-2 text-[#bebebe] leading-4 mb-10 font-bold">
            By clicking the above, you agree to our{" "}
            <span className="text-[#FF8600]">Terms of service</span> and{" "}
            <span className="text-[#FF8600]">Privacy policy</span>
          </p>

          <p
            className="text-[14px] p-2 text-[#bebebe] leading-4 font-bold"
            get=""
          >
            Already have an account?{" "}
            <a className="text-[#FF8600]" href="/SignIn">
              Login
            </a>
          </p>

          <div className="md:hidden text-[11px] flex gap-3 justify-end  text-white mx-7 my-5">
            <p className="bg-[#FF8600] drop-shadow-xl w-fit py-3 px-3 rounded-full">
              Get Help{" "}
              <span>
                <i className="bi bi-chat"></i>
              </span>
            </p>
          </div>
        </form>
      </section>
    </div>

    //    
  );
};
export default SignUp;
