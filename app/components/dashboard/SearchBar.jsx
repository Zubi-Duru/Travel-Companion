"use client";
import { useState, useEffect } from "react";
import AsyncSelect from "react-select/async";
import BtnMain from "../general/BtnMain";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    display: "flex",
  }),
  control: (provided) => ({
    // none of react-select's styles are passed to <Control />
    width: "83.333333%", // Equivalent to w-5/6
    height: "100%", // Equivalent to h-full
    backgroundColor: "transparent", // Equivalent to bg-transparent
    outline: "none",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
  indicatorsContainer: () => ({
    display: "none",
  }),
};
let destinationCountry = { value: "ng", label: "Nigeria" };
let destination = {
  country: destinationCountry,
  place: "",
  geoCode: { lng: "", lat: "" },
};

export default function SearchBar({
  dummyQuery = "Where are you going to?",
  country = { value: "ng", label: "Nigeria" },
  searchCtrl = {
    location: defaultSelectedOption,
    setLocation: setDefaultSelectedOption,
  },
}) {
  const [defaultSelectedOption, setDefaultSelectedOption] =
    useState(destination);
  const [showSearch, setShowSearch] = useState(false);
  const [selectedDestinationOption, setSelectedDestinationOption] = useState(
    []
  );
  const { location, setLocation } = searchCtrl;

  const loadOptions = async (inputValue, callback) => {
    if (selectedDestinationOption && inputValue) {
      try {
        const response = await fetch(
          `api/places?input=${inputValue}&country=${location.country.value}`
        );
        const data = await response.json();
        console.log(data);

        let places = [];
        data?.data?.predictions?.map((place, i) => {
          console.log(place);
          places = [
            ...places,
            { value: place.description, label: place.description },
          ];
        });

        callback(places);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const getGeoLocation = async (address) => {
    try {
      const response = await fetch(`api/geoLocate?address=${address}`);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)" }}
      className="px-2 py-1 md:py-2 rounded-[50px] w-full flex items-center justify-center h-12 md:h-14 relative"
    >
      <div className="lg:-ml-4 pr-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
            stroke="#FA8443"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z"
            stroke="#FA8443"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="w-5/6">
        <AsyncSelect
          className="w-5/6 focus:outline-none h-full bg-transparent"
          defaultValue={selectedDestinationOption}
          onChange={setSelectedDestinationOption}
          onInputChange={(e) => {
            setShowSearch(true);
          }}
          loadOptions={loadOptions}
          placeholder={dummyQuery}
          styles={customStyles}
        />
      </div>
      {showSearch && (
        <div
          className="absolute right-2 z-100"
          onClick={async (e) => {
            setShowSearch(false);
            const geoCode = await getGeoLocation(
              selectedDestinationOption.value + location.country.value
            );
            setLocation((prevLocation) => {
              return {
                ...prevLocation,
                geoCode: geoCode.geoLocation,
                place: selectedDestinationOption,
              };
            });
            console.log(location, geoCode);
          }}
        >
          <BtnMain url="/dashboard">Search</BtnMain>
        </div>
      )}
    </div>
  );
}
