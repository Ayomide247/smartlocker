import Select from "react-select";
import { AREA, Lockers } from "../../utils/data";
import { useState } from "react";

const SenderInformation = () => {
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedLocker, setSelectedLocker] = useState(null);
  const [availableLockers, setAvailableLockers] = useState([]);

  const handleSelectLocker = (item) => {
    setSelectedLocker(item);
  };

  const handleSelectArea = (item) => {
    setSelectedArea(item);
    const selectedItem = item.label;
    localStorage.setItem('from', JSON.stringify(selectedItem))
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

  return (
    <section>
      <p className="text-[#FF6000] py-2 font-medium">SENDER INFORMATION</p>
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
            defaultInputValue="Select..."
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
    </section>
  );
};
export default SenderInformation;
