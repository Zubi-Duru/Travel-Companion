"use client";
import Image from "next/image";
import Select from "react-select";
import countryDb from "@/public/countryDb";
import { useState } from "react";

let destinationCountry =    { value: "ng", label: "Nigeria" };
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    width: "100%",
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    display: "none",
  }),
  menu: (provided, state) => ({
    ...provided,
    left: "-10px",
    width: "min-content",
    borderRadius: "10px",
  }),
  menuList: (provided, state) => ({
    ...provided,
    width: "fit-content",
  }),
  control: () => ({
    width: "3rem",
    height: "3rem",
    display: "flex",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";
    return { ...provided, opacity, transition };
  },
  indicatorsContainer: (provided, state) => ({
    ...provided,
    margin: "auto",
  }),
};
export default function Flagdropdown({
  size = 5,
  getSelectedOption= {
      selectedOption: defaultSelectedOption,
      setSelectedOption: setDefaultSelectedOption,
    },
}) {
    const [
      defaultSelectedOption,
      setDefaultSelectedOption,
    ] = useState(destinationCountry);

  const { selectedOption, setSelectedOption } = getSelectedOption;

  return (
    <div className="flex w-full items-center">
      <div
        className={`w-${size} h-${size} rounded-full overflow-clip flex items-center `}
      >
        <Image
          className="w-16 h-16 rounded-full scale-[1.2]"
          src={`https://flagsapi.com/${selectedOption.value.toUpperCase()}/flat/64.png`}
          width="150"
          height="150"
        />
      </div>
      <div className="">
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={countryDb}
          onBlur={(e)=>{
            console.log(selectedOption);
          }}
          id="homeCountry"
          styles={customStyles}
          placeholder={""}
        />
      </div>
    </div>
  );
}
