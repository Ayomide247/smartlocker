import { useRef, useState } from "react";
import { FaBicycle } from "react-icons/fa";
import { PaystackButton } from "react-paystack";
import SingleRider from "../booking/SingleRider";
import { RIDERS } from "../../utils/data";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SelectRider = ({ isModalVisible, handleClose }) => {
  const [selectedIDX, setSelectedIDX] = useState(null);
  const [showPaymentBtn, setShowPaymentBtn] = useState(false);
  const publicKey = "pk_test_30935254e277d16e13b3b46de0616a73647b8f34";
  const amount = 1000000;
  const [email, setEmail] = useState("bayomide247@gmail.com");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate()

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      localStorage.removeItem('sender_information')
      localStorage.removeItem('receiver_information')
      handleClose(),
        toast.success('Booking successfull! ')
      navigate('/')
    },
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="false"
      style={{ display: isModalVisible === true ? "" : "none" }}
    >
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex justify-center p-4 text-center md:mt-16">
          <div className="relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl w-[85vw] sm:my-8 sm:w-full sm:max-w-5xl">
            <h2 className="text-orange-400 font-bold text-xl px-5 pt-4 uppercase">Select your Rider</h2>
            <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4 h-[400px] overflow-y-scroll">
              <div className="grid md:grid-cols-2 md:gap-5">
                {
                  RIDERS.map(({ first_name, last_name, username, duration, type, avatar, price, id }, idx) => (
                    <SingleRider
                      username={username}
                      key={id}
                      first_name={first_name}
                      last_name={last_name}
                      duration={duration}
                      type={type}
                      avatar={avatar}
                      price={price}
                      id={id}
                      selectedIndex={selectedIDX}
                      showPaymentBtn={showPaymentBtn}
                      handleClick={() => {
                        setSelectedIDX(idx)
                        setShowPaymentBtn(true)
                      }}
                    />
                  ))
                }
              </div>

            </div>
            <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse sm:px-6">
              {showPaymentBtn ? (
                <PaystackButton
                  {...componentProps}
                  type="button"
                  className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-green-600 shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                  text="Make Payment"
                />
              ) : ''}
              {!showPaymentBtn ? (
                <button
                  type="button"
                  className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-green-400 shadow-sm pointer-events-none sm:ml-3 sm:w-auto"
                >
                  Make Payment
                </button>
              ) : ''}
              <button
                type="button"
                className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectRider;
