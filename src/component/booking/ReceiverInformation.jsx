import { useState } from "react";
import { AREA, Lockers } from "../../utils/data";
import Select from "react-select";

const ReceiverInformation = () => {
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
  };

  return (
    <section className="py-4 bg-white">
      <p className="text-[#FF6000] py-2 font-medium">RECEIVER INFORMATION</p>
      <div className="flex flex-col gap-5 lg:flex-row">
        <label className="font-medium ">
          <p>First Name</p>
          <input className="w-full p-2 border shadow-sm outline-none"></input>
        </label>
        <label className="font-medium ">
          <p>Last Name</p>
          <input className="w-full p-2 border shadow-sm outline-none"></input>
        </label>
        <label className="font-medium ">
          <p>Phone Number</p>
          <input className="w-full p-2 border shadow-sm outline-none"></input>
        </label>
      </div>
      <div className="my-5">
        <label className="font-medium ">
          <p>Email Address</p>
          <input className="w-full p-2 border shadow-sm outline-none"></input>
        </label>
      </div>

      <div className="flex flex-col gap-5 md:flex-row">
        <label className="w-full font-medium">
          <p>Choose Your Area</p>
          <Select
            options={AREA}
            value={selectedArea}
            onChange={handleSelectArea}
            placeholder="Select an option"
          />
        </label>

        <label className="w-full font-medium">
          <p>Choose Locker</p>
          <Select
            options={availableLockers}
            value={selectedLocker}
            onChange={handleSelectLocker}
            defaultValue="Select..."
          />
        </label>
      </div>
      <div className="w-full my-5 font-medium">
        <p>
          Address <span className="font-normal">(optional)</span>
        </p>
        <textarea
          className="w-full outline-none border shadow-inner h-[150px] font-thin font-serif p-3 bg-white"
          placeholder="Enter address here"
        ></textarea>
      </div>
    </section>
  );
};
export default ReceiverInformation;
