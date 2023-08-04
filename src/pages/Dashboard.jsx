import DashNavbar from "../component/DashNavBar";
import DashSideBar from "../component/DashSideBar";
import { FaBoxOpen } from "react-icons/fa";
import chart from "../assets/image/Chart.png";
import { FiUserX } from "react-icons/fi";
import { BsMinecartLoaded } from "react-icons/bs";
import { useState } from "react";


const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="bg-[#F9F9F9]">
      {showSidebar && <div className="sidebar-overlay fixed top-0 w-full right-0 h-screen bg-gray-800 opacity-5 z-10 lg:hidden" onClick={() => setShowSidebar(!showSidebar)}></div>}

      <section className={`grid fixed z-10 transition-all duration-300 text-center p-5 bg-white w-[14rem] md:w-[16rem] md:flex md:flex-col gap-10 items-center h-[100%] md:h-[100vh] md:fixed md:translate-x-0 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>

        <DashSideBar className="" />
      </section>
      <div className="md:flex md:flex-col md:w-[calc(100vw_-_16rem)] md:ml-auto md:overflow-hidden bg-slate">
        <DashNavbar setShowSidebar={setShowSidebar} />
        <div className="p-6">
          <section>
            <h3 className="font-bold text-[20px] text-[#3A3A3A]">Dashboard</h3>

            <section className="h-[calc(100vh_-_20vh)] overflow-y-scroll">
              <section className="grid md:flex my-10 w-[100%] gap-7 items-center justify-center">
                <div className="bg-white rounded-lg p-7 m-0 text-[#525252] font-medium w-[300px]">
                  <div className="flex justify-between my-5">
                    <div className="">
                      <p>COMPLETED ORDERS</p>
                      <p className="text-green-300 text-[25px] my-3">108</p>
                    </div>
                    <span className="bg-[#FF60001A] text-[#FF6000] p-3 text-center items-center w-[70px] h-[70px] rounded-full text-[30px] ">
                      <FaBoxOpen className="my-auto mt-2 ml-2 text-center" />
                    </span>
                  </div>
                  <p>Total Records</p>
                </div>

                <div className="bg-white rounded-lg p-7 m-0 text-[#525252] font-medium w-[300px]">
                  <div className="flex justify-between my-5">
                    <div className="">
                      <p>PENDING ORDERS</p>
                      <p className="text-green-300 text-[25px] my-3">45</p>
                    </div>
                    <span className="bg-[#FF60001A] text-[#FF6000] p-3 text-center items-center w-[70px] h-[70px] rounded-full text-[30px] ">
                      <BsMinecartLoaded className="my-auto mt-2 ml-2 text-center" />
                    </span>
                  </div>
                  <p>Total Records</p>
                </div>
                <div className="bg-white rounded-lg p-7 m-0 text-[#525252] font-medium w-[300px]">
                  <div className="flex justify-between my-5">
                    <div className="">
                      <p>DECLINED ORDERS</p>
                      <p className="text-red-500 text-[25px] my-3">12</p>
                    </div>
                    <span className="bg-[#FF60001A] text-[#FF6000] p-3 text-center items-center w-[70px] h-[70px] rounded-full text-[30px] ">
                      <FiUserX className="my-auto mt-2 ml-2 text-center" />
                    </span>
                  </div>
                  <p>Total Records</p>
                </div>

                <div className="bg-white rounded-lg p-7 m-0 text-[#525252] font-medium w-[300px]">
                  <div className="flex justify-between my-5">
                    <div className="">
                      <p>TOTAL ORDERS</p>
                      <p className="text-green-700 text-[25px] my-3">120</p>
                    </div>
                    <span className="bg-[#FF60001A] text-[#FF6000] p-3 text-center items-center w-[70px] h-[70px] rounded-full text-[30px] ">
                      <FaBoxOpen className="my-auto mt-2 ml-2 text-center" />
                    </span>
                  </div>
                  <p>Total Records</p>
                </div>
              </section>

              <section className="flex flex-col gap-10 text-center">
                <p className="font-bold text-[#3A3A3A] text-[25px]">
                  Monthly Orders
                </p>
                <img className="w-[100%]" src={chart}></img>
              </section>

              <section className="my-10">
                <div className="flex gap-10 font-bold text-[#3A3A3A] ">
                  <p className="text-[#FF6000]">Pending</p>
                  <p>Completed</p>
                </div>
                <div className="my-2 border-b"></div>

                <div className="overflow-x-auto ">
                  <table class="table-auto w-full border-separate border-spacing-y-3">
                    <thead>
                      <tr className="my-5 bg-white">
                        <th class=" p-2 text-center items-center">
                          <label class="flex items-center space-x-2 my-1">
                            <input
                              type="checkbox"
                              class="form-checkbox text-green-700 h-3 w-3 outline-none"
                            />
                          </label>
                        </th>
                        <th class="p-2 whitespace-nowrap">Order Id</th>
                        <th class="p-2 whitespace-nowrap">Customer</th>
                        <th class="p-2 whitespace-nowrap">Customer</th>
                        <th class="p-2 whitespace-nowrap">Customer</th>
                        <th class="p-2 whitespace-nowrap">Customer</th>
                        <th class="p-2 whitespace-nowrap">Customer</th>
                        <th class="p-2 whitespace-nowrap">Customer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white ">
                        <td class=" p-2">
                          <label class="flex items-center space-x-2 my-1">
                            <input
                              type="checkbox"
                              class="form-checkbox text-green-700 h-3 w-3 outline-none"
                            />
                          </label>
                        </td>
                        <td class=" p-2 whitespace-nowrap">John Doe</td>
                        <td class=" p-2 whitespace-nowrap">30</td>
                        <td class=" p-2 whitespace-nowrap">New York</td>
                        <td class=" p-2 whitespace-nowrap">New York</td>
                        <td class=" p-2 whitespace-nowrap">New York</td>
                        <td class=" p-2 whitespace-nowrap">New York</td>
                        <td class=" p-2 whitespace-nowrap">New York</td>
                      </tr>
                      <tr className="bg-white">
                        <td class=" p-2">
                          <label class="flex items-center space-x-2 my-1">
                            <input
                              type="checkbox"
                              class="form-checkbox text-green-700 h-3 w-3 outline-none"
                            />
                          </label>
                        </td>
                        <td class=" p-2 whitespace-nowrap">Jane Smith</td>
                        <td class=" p-2 whitespace-nowrap">25</td>
                        <td class=" p-2 whitespace-nowrap">San Francisco</td>
                        <td class=" p-2 whitespace-nowrap">San Francisco</td>
                        <td class=" p-2 whitespace-nowrap">San Francisco</td>
                        <td class=" p-2 whitespace-nowrap">San Francisco</td>
                        <td class=" p-2 whitespace-nowrap">San Francisco</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
