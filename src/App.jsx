import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { Home } from "./pages";
import { Suspense, useEffect } from "react";
import { Loader1 } from "./component";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className=" md:w-[100%] lg:w-full ">
      <Suspense fallback={<Loader1 />}>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
