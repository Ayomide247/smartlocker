import React from "react";
import Select from "react-select";

const SelectOption = () => {
  const options = [
    { value: "Agege", label: "Agege" },
    { value: "Ajeromi-Ifelodun", label: "Ajeromi-Ifelodun" },
    { value: "Alimosho", label: "Alimosho" },
    { value: "Amuwo-Odofin", label: "Amuwo-Odofin" },
    { value: "Apapa", label: "Apapa" },
    { value: "Badagry", label: "Badagry" },
    { value: "Epe", label: "Epe" },
    { value: "Eti-Osa", label: "Eti-Osa" },
    { value: "Ibeju-Lekki", label: "Ibeju-Lekki" },
    { value: "Ifako-Ijaiye", label: "Ifako-Ijaiye" },
    { value: "Ikeja", label: "Ikeja" },
    { value: "Ikorodu", label: "Ikorodu" },
    { value: "Kosofe", label: "Kosofe" },
    { value: "Lagos Island", label: "Lagos Island" },
    { value: "Lagos Mainland", label: "Lagos Mainland" },
    { value: "Mushin", label: "Mushin" },
    { value: "Ojo", label: "Ojo" },
    { value: "Oshodi-Isolo", label: "Oshodi-Isolo" },
    { value: "Shomolu", label: "Shomolu" },
    { value: "Surulere", label: "Surulere" },
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
        placeholder="Select an option"
      />
      {selectedOption && <p>Area: {selectedOption.label}</p>}
    </div>
  );
};

export default SelectOption;
