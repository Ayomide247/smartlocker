import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Home } from "./pages";
import { Suspense, useEffect } from "react";
import { Loader1, ReceiverInformation } from "./component";
import AOS from "aos";
import "aos/dist/aos.css";
import Stage from "./pages/Booking";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className=" md:w-[100%] lg:w-full ">
      <Suspense fallback={<Loader1 />}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Stage" element={<Stage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Receiver" element={<ReceiverInformation />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </div>
  );
}

export default App;
