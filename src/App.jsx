import "./App.css";
import Selected from "./component/Selected";
import { PiBinocularsFill } from "react-icons/pi";
import youtube from "./assets/image/youtube.png";
import whatsapp from "./assets/image/whatsapp.png";
import parcel from "./assets/image/parcel.png";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="m-auto w-[100%] md:w-1/2">
      <section className="px-4 py-10 shadow-lg bg-slate-100 ">
        <Navbar />
        <div className=" mt-[70px] pb-5">
          <div className="flex justify-center my-10 text-center">
            <p className="self-end font-mono font-extrabold text-[#4f4f4f] text-[20px] ">
              Send Your Parcel!
            </p>
            <img
              src={parcel}
              alt="parcel Image"
              style={{ width: "140px" }}
              className=""
            />
          </div>
          <div className="relative flex w-full gap-3 py-3 pl-10 pr-4 my-10 border border-gray-300 rounded-full md:py-5 -z-1 ">
            <PiBinocularsFill size={24} color="#4f4f4f" className="md:hidden" />
            <input
              type="text"
              placeholder="Enter your tracking number"
              className=" bg-inherit focus:outline-none focus:border-blue-500  md:w-[75%] w-full"
            />

            <div className="absolute inset-y-0 right-0 items-center hidden pointer-events-none md:flex">
              <button className="flex gap-3 px-5 py-2 mx-4 bg-green-700 hover:bg-green-400 rounded-md cursor-pointer text-[#e3e3e3]">
                <PiBinocularsFill size={24} color="#e3e3e3" />
                Track your Package
              </button>
            </div>
          </div>

          <div>
            <div className="">
              <Selected className="-z-50 focus:border-gray-500" />
              <label className="flex items-center">
                <input type="checkbox" className="mt-1 form-checkbox" />
                <span className="ml-2 mt-2 text-[#808080]">Locker Dropoff</span>
              </label>
            </div>

            <form className="my-5 ">
              <label className="grid my-auto justify-start font-bold text-[20px] text-[#808080] w-[10%]">
                From
              </label>
              <div className="flex justify-between gap-1">
                <input
                  className="w-full px-3 py-2 border border-green-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-gray-500 text-[#808080]"
                  placeholder="Enter full address..."
                ></input>

                <input
                  className="w-full px-3 py-2 border border-green-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-gray-500 text-[#808080]"
                  placeholder="Enter phone number"
                ></input>
              </div>
              <div className="flex text-[#808080] justify-between mt-2 mx-1 gap-2">
                <button className="flex gap-2 px-5 py-2 border border-gray-300 shadow hover:border-orange-400 hover:bg-orange-400 rounded-md md:cursor-pointer text-[#808080] hover:text-[#ffffff]  font-semibold">
                  Find <p className="hidden md:flex">Locker</p>
                </button>

                <div className="flex gap-1">
                  <p className="text-lg font-semibold">Locker:</p>
                  <span className="mt-1 font-normal ">
                    7 Adeola street Ikoyi{" "}
                  </span>
                </div>
              </div>
            </form>
          </div>

          <div className="my-24">
            <div className="">
              <Selected className="z-1 " />
              <label className="flex items-center">
                <input type="checkbox" className="mt-1 form-checkbox" />
                <span className="ml-2 mt-2 text-[#808080]">Locker Pickup</span>
              </label>
            </div>

            <form className="my-5 ">
              <label className="my-auto grid justify-start font-bold text-[20px] text-center text-[#808080] w-[10%]">
                To
              </label>
              <div className="flex justify-between gap-1">
                <input
                  className="w-full px-3 py-2 border border-green-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-gray-500 text-[#808080]"
                  placeholder="Enter full address..."
                ></input>

                <input
                  className="w-full px-3 py-2 border border-green-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-gray-500 text-[#808080]"
                  placeholder="Enter phone number"
                ></input>
              </div>
              <div className="flex text-[#808080] justify-between mt-2 mx-1 gap-2">
                <button
                  className="flex gap-2 px-5 py-2 
                 border border-gray-300 shadow hover:border-orange-400 hover:bg-orange-400 rounded-md md:cursor-pointer text-[#808080] hover:text-[#ffffff]  font-semibold"
                >
                  Find <p className="hidden md:flex">Locker</p>
                </button>

                <div className="flex gap-1">
                  <p className="text-lg font-semibold">Locker:</p>
                  <span className="mt-1 font-normal ">
                    3 Samuel street Ikeja{" "}
                  </span>
                </div>
              </div>
            </form>
          </div>

          <div className="flex gap-5 md:justify-end">
            <button className="flex gap-3 px-5 py-2  bg-orange-500 hover:bg-orange-400 rounded-md md:cursor-pointer text-[#ffffff] font-semibold shadow-lg">
              Pay - FluterWave
            </button>
            <p className="font-semibold text-[#808080] shadow-inner py-1  px-3 text-[20px]  ">
              #3,400
            </p>
          </div>
        </div>
      </section>

      <div className="border-b-2"></div>

      <section className="justify-center p-5 cursor-pointer h-cover bg-slate-100 md:w-[50%]md:mt-10px shadow-lg">
        <div className="flex justify-center my-10 ">
          <a href="https://www.youtube.com/watch?v=iAnkayRHknw">
            <img src={youtube} alt="youtube Image" style={{ width: "140px" }} />
            <p className="font-serif">Access SmartParcel Youtube Channel</p>
          </a>
        </div>

        <div className="text-center text-[#555454] my-20">
          <h1 className="font-extrabold text-[35px] texct">
            Do You Know you can rent a locker?
          </h1>

          <form className="my-20 ">
            <div className="grid gap-1">
              <label className="my-auto font-bold text-[16px] text-[#808080] text-start">
                Rent a locker now......
              </label>
              <input
                className="w-full px-3 py-2 border border-green-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-gray-500 text-[#808080] mb-5"
                placeholder="Enter full address..."
              ></input>

              <input
                className="w-full px-3 py-2 border border-green-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-gray-500 text-[#808080]"
                placeholder="Enter phone number"
              ></input>
            </div>

            <button className="flex gap-3 px-5 py-2 mt-2 bg-orange-500 hover:bg-orange-400 rounded-md md:cursor-pointer text-[#ffffff] font-semibold shadow-lg">
              Rent a locker
            </button>
          </form>
        </div>

        <div>
          <div className="flex justify-end gap-2 mt-10">
            <p className="my-auto">Send Parcel through our chat BOT</p>
            <img
              src={whatsapp}
              alt="whatsapp Image"
              style={{ width: "50px" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
