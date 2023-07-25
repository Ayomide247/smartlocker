import React from "react";
import Select from "react-select";

const SelectOption = () => {
  const options = [
    { value: "24, Opebi, ikeja", label: "24, Opebi, ikeja" },
    { value: "3 Teni, ikoyi-obalende", label: "3, Teni, ikoyi-obalende" },
    { value: "123 ABC Street, surulere", label: "123 ABC Street, surulere" },
    { value: " 20 Charls Logan, yaba", label: "20 Charls Logan, yaba" },
  ];

  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div>
      <Select
        options={options}
        value={selectedOption}
        onChange={handleSelectChange}
        placeholder="Available Lockers"
      />
      {selectedOption && <p>LGA: {selectedOption.label}</p>}
    </div>
  );
};

export default SelectOption;
