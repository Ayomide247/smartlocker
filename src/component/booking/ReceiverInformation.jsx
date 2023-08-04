import { useEffect, useState } from "react";
import { AREA, Lockers } from "../../utils/data";
import Select from "react-select";
import { useFormik } from "formik";
import { bookingInformationSchema } from "../../utils/validation";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const ReceiverInformation = ({ setShowRiders }) => {




  const handleReceiverSubmit = (values, { resetForm }) => {

    if (!values.area) {
      toast.dismiss()
      toast.error('Please choose area')
      return
    }
    if (!values.locker) {
      toast.dismiss()
      toast.error("Sorry! There's no available locker in this area")
      return
    }

    localStorage.setItem('receiver_information', JSON.stringify(values));

    // console.log(values)
    // resetForm();
    setShowRiders(true)
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phoneNumber: "",
      email: "",
      area: "",
      locker: "",

    },
    validationSchema: bookingInformationSchema,
    onSubmit: handleReceiverSubmit
  })



  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedLocker, setSelectedLocker] = useState(null);
  const [availableLockers, setAvailableLockers] = useState([
    {
      value: "",
      label: "",
    },
  ]);

  const handleSelectArea = (item) => {
    setSelectedArea(item);
    values.area = item;
    const selectedItem = item.label;
    localStorage.setItem('to', JSON.stringify(selectedItem))
    // const findIndex = Lockers.find((f) => f.area === selectedItem);
    const filterLockers = Lockers.filter((f) => f.area === selectedItem);
    let lockers = [];
    if (filterLockers.length > 0) {
      filterLockers[0].lockers.map((item) => {
        let newObj = {
          value: `${item.title} (${item.address})`,
          label: `${item.title} (${item.address})`,
        };
        lockers.push(newObj);
      });
    }
    setAvailableLockers(lockers);
  };

  const handleSelectLocker = (item) => {
    setSelectedLocker(item);
    values.locker = item;
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <form onSubmit={handleSubmit}>
      <p className="text-[#FF6000] py-2 font-medium">RECIEVER INFORMATION</p>
      <div className="flex flex-col gap-5 lg:flex-row">
        <label className="font-medium ">
          <p>First Name</p>
          <input
            value={values.firstname}
            type="text"
            name="firstname"
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-2 border shadow-sm outline-none first-letter  ${errors.firstname && touched.firstname ? 'border-red-500' : 'border-slate-300'}`}></input>
          {
            errors.firstname && touched.firstname &&
            <span className="text-red-500 text-sm ">{errors.firstname}</span>
          }
        </label>


        <label className="font-medium ">
          <p>Last Name</p>
          <input
            value={values.lastname}
            type="text"
            name="lastname"
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-2 border shadow-sm outline-none first-letter  ${errors.lastname && touched.lastname ? 'border-red-500' : 'border-slate-300'}`}></input>
          {
            errors.lastname && touched.lastname &&
            <span className="text-red-500 text-sm ">{errors.lastname}</span>
          }
        </label>
        <label className="font-medium ">
          <p>Phone Number</p>
          <input
            value={values.phoneNumber}
            type="text"
            name="phoneNumber"
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-2 border shadow-sm outline-none first-letter  ${errors.phoneNumber && touched.phoneNumber ? 'border-red-500' : 'border-slate-300'}`}></input>
          {
            errors.phoneNumber && touched.phoneNumber &&
            <span className="text-red-500 text-sm ">{errors.phoneNumber}</span>
          }
        </label>
      </div>
      <div className="my-5">
        <label className="font-medium ">
          <p>Email Address</p>
          <input
            value={values.email}
            type="text"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full p-2 border shadow-sm outline-none first-letter  ${errors.email && touched.email ? 'border-red-500' : 'border-slate-300'}`}></input>
          {
            errors.email && touched.email &&
            <span className="text-red-500 text-sm ">{errors.email}</span>
          }
        </label>
      </div>

      <div className="flex flex-col gap-5 md:flex-row">
        <label className="w-full font-medium">
          <p>Choose Your Area</p>
          <Select
            // defaultInputValue="Area..."
            options={AREA}
            value={selectedArea}
            onChange={handleSelectArea}
          // placeholder="Select an option"
          />
        </label>

        <label className="w-full font-medium">
          <p>Choose Locker</p>
          <Select
            options={availableLockers}
            value={selectedLocker}
            onChange={handleSelectLocker}
            placeholder="Select an option"
            isDisabled={selectedArea === null ? true : false}
          />
        </label>
      </div>
      <div className="w-full my-5 font-medium">
        <p>
          Address <span className="font-normal">(optional)</span>
        </p>
        <textarea
          className="w-full outline-none border shadow-inner h-[150px] font-thin font-serif p-3"
          placeholder="Enter address here"
        ></textarea>
      </div>

      <div className="flex justify-end">

        <button
          type="submit"
          className=" py-2 px-6 rounded-md bg-[#FF6000]   text-[#ffffffff] hover:bg-[#ffffffff] border border-[#FF6000] hover:text-slate-700 transition-all duration-300 ease-in mt-10 "
        // disabled
        // onClick={handleProceed}
        >
          Proceed
        </button>
      </div>
    </form>
  );
};
export default ReceiverInformation;
