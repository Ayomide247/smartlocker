import Navbar from "../component/Navbar";
import { LOGO } from "../assets/image";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="m-auto w-screen h-screen">
      <div className="flex flex-col relative">
        <div className="h-[20rem]"></div>
        <div className="h-[calc(100vh_-_20rem)] bg-slate-900">
          <div className="hidden"><Navbar /></div>
          <section className="px-5 py-3 mx-6 max-w-[25rem] bg-white shadow-lg absolute top-0 left-0 right-0 mt-24 md:m-auto md:mt-24 rounded-sm md:px-8">
            <div className="w-40 mx-auto py-6"> <Link to='/'><img className="" src={LOGO} alt="" /></Link> </div>
            <form id="container" action="" method="">
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

              <button
                className="w-full p-3 text-sm text-center bg-orange-500 rounded-md cursor-pointer my-7 text-slate-100 hover:bg-orange-500"
                disabled
              >
                Login
              </button>

              <p
                className="text-[14px] text-center p-2 text-[#bebebe] leading-4"
              >
                Don't have an account? <Link className="text-[#FF8600]" to="/register">
                  Register
                </Link>
              </p>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Login;
