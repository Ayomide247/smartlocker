import Navbar from "../component/NavBar";
import bgbanner from "../assets/image/h2.png";
// import { Link } from "react-router-dom";
import Selected from "../component/Selected";
// import Select from "../component/select/Select";
import { useEffect, useState } from "react";
import {
  ReceiverInformation,
  SelectRider,
  SenderInformation,
} from "../component";
import { toast } from "react-toastify";
import Footer from "../component/Footer";

const Stage = () => {
  const [activeTab, setActiveTab] = useState("sender_info");
  const [showRiders, setShowRiders] = useState(false);
  const sectionStyle = {
    backgroundImage: `url(${bgbanner})`,
  };



  const handleProceed = (e) => {
    e.preventDefault();
    let from = JSON.parse(localStorage.getItem('from'))
    let to = JSON.parse(localStorage.getItem('to'))
    if (from === null) {
      toast.dismiss()
      toast.error('Please choose area')
      return
    }
    if (activeTab === "receiver_info") {
      if (to === null) {
        toast.dismiss()
        toast.error('Please choose area')
        return
      }
      setShowRiders(true);
    }
    setActiveTab("receiver_info");
  }
  console.log(activeTab)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="w-screen h-screen p-0 m-auto overflow-x-hidden text-slate-700 bg-[#FF600008]">
      <Navbar />
      <div className="px-5 py-10 mt-24 md:w-[70%] lg:w-[50%] text-slate-500 items-center m-auto">
        <h3 className="font-bold text-[20px] my-5">Book A Locker</h3>
        <section className="px-12 py-10 bg-white shadow-lg">
          <div className="my-5">
            {activeTab === "sender_info" && <SenderInformation setActiveTab={setActiveTab} />}
            {activeTab === "receiver_info" && <ReceiverInformation setShowRiders={setShowRiders} />}

            <div className="flex justify-end">
              {/* <button
                className=" py-2 px-6 rounded-md bg-[#FF6000]   text-[#ffffffff] hover:bg-[#ffffffff] border border-[#FF6000] hover:text-slate-700 transition-all duration-300 ease-in"
                disabled
                onClick={handleProceed}
              >
                Proceed
              </button> */}
            </div>
          </div>
        </section>
      </div>

      <Footer />

      <SelectRider
        isModalVisible={showRiders}
        handleClose={() => setShowRiders(false)}
      />
    </section>
  );
};
export default Stage;
