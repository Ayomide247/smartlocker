import Select from "react-select";

const Selected = () => {
  const options = [
    { value: "Ikoyi", label: "Ikoyi" },
    { value: "Ikeja ", label: "Ikeja" },
    { value: "Lekki", label: "Lekki" },
  ];
  return (
    <Select
      options={options}
      placeholder="Select Your Area :"
      // className="bg-green-700"
    />
  );
};
export default Selected;
