import DashNavbar from "../component/DashNavBar";
import DashSideBar from "../component/DashSideBar";
import { FaBoxOpen } from "react-icons/fa";
import chart from "../assets/image/Chart.png";

const Dashboard = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <DashNavbar />
      <section className="sidemenu grid fixed z-10 -translate-x-96 transition-all duration-300 text-center p-5 bg-white w-[70%] md:w-[18%] md:flex md:flex-col gap-10 items-center h-[100%] md:h-[100vh] md:fixed md:translate-x-0">
        <div className="sidebar-overlay fixed top-0 w-[40%] right-0 h-screen bg-gray-800 opacity-5 -z-10 lg:hidden"></div>

        <DashSideBar className="" />
      </section>
      <div className="md:flex md:flex-col md:w-[81%] md:ml-auto md:overflow-hidden bg-slate">
        <div className="p-6 mt-20">
          <section>
            <h3 className="font-bold text-[20px] text-[#3A3A3A]">Dashboard</h3>

            <section className="grid md:flex my-10 w-[100%] gap-7 items-center justify-center">
              <div className="bg-white rounded-lg p-7 m-0 text-[#525252] font-medium w-[300px]">
                <div className="flex justify-between my-5">
                  <div className="">
                    <p>COMPLETED ORDERS</p>
                    <p className="text-green-700 text-[25px] my-3">108</p>
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
                    <p>DECLINED ORDERS</p>
                    <p className="text-red-500 text-[25px] my-3">12</p>
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
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
