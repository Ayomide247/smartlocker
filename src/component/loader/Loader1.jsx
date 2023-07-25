import React from "react";
import { LOGO, LOGO_1 } from "../../assets/image";

const Loader1 = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen text-center bg-orange-300">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-[3px] border-white border-t-orange-500 animate-spin"></div>
        <span className="block w-40 mt-5 mr-auto animate-pulse">
          {/* SmartParcel */}
          <img
            className="w-[100%]"
            src={LOGO}
            alt="smartparcel_logo"
            srcset=""
          />
        </span>
      </div>
    </div>
  );
};

export default Loader1;
