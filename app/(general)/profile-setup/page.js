"use client";

import React, { useEffect, useState } from "react";
import Select from "react-select";
import AsyncSelect from "react-select/async";

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "none", label: "Prefer not to say" },
];

const countryOptions = [
  { value: "af", label: "Afghanistan" },
  { value: "al", label: "Albania" },
  { value: "dz", label: "Algeria" },
  { value: "ad", label: "Andorra" },
  { value: "ao", label: "Angola" },
  { value: "ag", label: "Antigua and Barbuda" },
  { value: "ar", label: "Argentina" },
  { value: "am", label: "Armenia" },
  { value: "au", label: "Australia" },
  { value: "at", label: "Austria" },
  { value: "az", label: "Azerbaijan" },
  { value: "bs", label: "Bahamas" },
  { value: "bh", label: "Bahrain" },
  { value: "bd", label: "Bangladesh" },
  { value: "bb", label: "Barbados" },
  { value: "by", label: "Belarus" },
  { value: "be", label: "Belgium" },
  { value: "bz", label: "Belize" },
  { value: "bj", label: "Benin" },
  { value: "bt", label: "Bhutan" },
  { value: "bo", label: "Bolivia" },
  { value: "ba", label: "Bosnia and Herzegovina" },
  { value: "bw", label: "Botswana" },
  { value: "br", label: "Brazil" },
  { value: "bn", label: "Brunei" },
  { value: "bg", label: "Bulgaria" },
  { value: "bf", label: "Burkina Faso" },
  { value: "bi", label: "Burundi" },
  { value: "kh", label: "Cambodia" },
  { value: "cm", label: "Cameroon" },
  { value: "ca", label: "Canada" },
  { value: "cv", label: "Cape Verde" },
  { value: "cf", label: "Central African Republic" },
  { value: "td", label: "Chad" },
  { value: "cl", label: "Chile" },
  { value: "cn", label: "China" },
  { value: "co", label: "Colombia" },
  { value: "km", label: "Comoros" },
  { value: "cg", label: "Congo" },
  { value: "cr", label: "Costa Rica" },
  { value: "hr", label: "Croatia" },
  { value: "cu", label: "Cuba" },
  { value: "cy", label: "Cyprus" },
  { value: "cz", label: "Czechia" },
  { value: "cd", label: "Democratic Republic of the Congo" },
  { value: "dk", label: "Denmark" },
  { value: "dj", label: "Djibouti" },
  { value: "dm", label: "Dominica" },
  { value: "do", label: "Dominican Republic" },
  { value: "tl", label: "East Timor" },
  { value: "ec", label: "Ecuador" },
  { value: "eg", label: "Egypt" },
  { value: "sv", label: "El Salvador" },
  { value: "gq", label: "Equatorial Guinea" },
  { value: "er", label: "Eritrea" },
  { value: "ee", label: "Estonia" },
  { value: "et", label: "Ethiopia" },
  { value: "fj", label: "Fiji" },
  { value: "fi", label: "Finland" },
  { value: "fr", label: "France" },
  { value: "ga", label: "Gabon" },
  { value: "gm", label: "Gambia" },
  { value: "ge", label: "Georgia" },
  { value: "de", label: "Germany" },
  { value: "gh", label: "Ghana" },
  { value: "gr", label: "Greece" },
  { value: "gd", label: "Grenada" },
  { value: "gt", label: "Guatemala" },
  { value: "gn", label: "Guinea" },
  { value: "gw", label: "Guinea-Bissau" },
  { value: "gy", label: "Guyana" },
  { value: "ht", label: "Haiti" },
  { value: "hn", label: "Honduras" },
  { value: "hu", label: "Hungary" },
  { value: "is", label: "Iceland" },
  { value: "in", label: "India" },
  { value: "id", label: "Indonesia" },
  { value: "ir", label: "Iran" },
  { value: "iq", label: "Iraq" },
  { value: "ie", label: "Ireland" },
  { value: "il", label: "Israel" },
  { value: "it", label: "Italy" },
  { value: "ci", label: "Ivory Coast" },
  { value: "jm", label: "Jamaica" },
  { value: "jp", label: "Japan" },
  { value: "jo", label: "Jordan" },
  { value: "kz", label: "Kazakhstan" },
  { value: "ke", label: "Kenya" },
  { value: "ki", label: "Kiribati" },
  { value: "kp", label: "North Korea" },
  { value: "kr", label: "South Korea" },
  { value: "kw", label: "Kuwait" },
  { value: "kg", label: "Kyrgyzstan" },
  { value: "la", label: "Laos" },
  { value: "lv", label: "Latvia" },
  { value: "lb", label: "Lebanon" },
  { value: "ls", label: "Lesotho" },
  { value: "lr", label: "Liberia" },
  { value: "ly", label: "Libya" },
  { value: "li", label: "Liechtenstein" },
  { value: "lt", label: "Lithuania" },
  { value: "lu", label: "Luxembourg" },
  { value: "mk", label: "North Macedonia" },
  { value: "mg", label: "Madagascar" },
  { value: "mw", label: "Malawi" },
  { value: "my", label: "Malaysia" },
  { value: "mv", label: "Maldives" },
  { value: "ml", label: "Mali" },
  { value: "mt", label: "Malta" },
  { value: "mh", label: "Marshall Islands" },
  { value: "mr", label: "Mauritania" },
  { value: "mu", label: "Mauritius" },
  { value: "mx", label: "Mexico" },
  { value: "fm", label: "Micronesia" },
  { value: "md", label: "Moldova" },
  { value: "mc", label: "Monaco" },
  { value: "mn", label: "Mongolia" },
  { value: "me", label: "Montenegro" },
  { value: "ma", label: "Morocco" },
  { value: "mz", label: "Mozambique" },
  { value: "mm", label: "Myanmar" },
  { value: "na", label: "Namibia" },
  { value: "nr", label: "Nauru" },
  { value: "np", label: "Nepal" },
  { value: "nl", label: "Netherlands" },
  { value: "nz", label: "New Zealand" },
  { value: "ni", label: "Nicaragua" },
  { value: "ne", label: "Niger" },
  { value: "ng", label: "Nigeria" },
  { value: "no", label: "Norway" },
  { value: "om", label: "Oman" },
  { value: "pk", label: "Pakistan" },
  { value: "pw", label: "Palau" },
  { value: "pa", label: "Panama" },
  { value: "pg", label: "Papua New Guinea" },
  { value: "py", label: "Paraguay" },
  { value: "pe", label: "Peru" },
  { value: "ph", label: "Philippines" },
  { value: "pl", label: "Poland" },
  { value: "pt", label: "Portugal" },
  { value: "qa", label: "Qatar" },
  { value: "ro", label: "Romania" },
  { value: "ru", label: "Russia" },
  { value: "rw", label: "Rwanda" },
  { value: "kn", label: "Saint Kitts and Nevis" },
  { value: "lc", label: "Saint Lucia" },
  { value: "vc", label: "Saint Vincent and the Grenadines" },
  { value: "ws", label: "Samoa" },
  { value: "sm", label: "San Marino" },
  { value: "st", label: "Sao Tome and Principe" },
  { value: "sa", label: "Saudi Arabia" },
  { value: "sn", label: "Senegal" },
  { value: "rs", label: "Serbia" },
  { value: "sc", label: "Seychelles" },
  { value: "sl", label: "Sierra Leone" },
  { value: "sg", label: "Singapore" },
  { value: "sk", label: "Slovakia" },
  { value: "si", label: "Slovenia" },
  { value: "sb", label: "Solomon Islands" },
  { value: "so", label: "Somalia" },
  { value: "za", label: "South Africa" },
  { value: "es", label: "Spain" },
  { value: "lk", label: "Sri Lanka" },
  { value: "sd", label: "Sudan" },
  { value: "sr", label: "Suriname" },
  { value: "sz", label: "Eswatini" },
  { value: "se", label: "Sweden" },
  { value: "ch", label: "Switzerland" },
  { value: "sy", label: "Syria" },
  { value: "tw", label: "Taiwan" },
  { value: "tj", label: "Tajikistan" },
  { value: "tz", label: "Tanzania" },
  { value: "th", label: "Thailand" },
  { value: "tg", label: "Togo" },
  { value: "to", label: "Tonga" },
  { value: "tt", label: "Trinidad and Tobago" },
  { value: "tn", label: "Tunisia" },
  { value: "tr", label: "Turkey" },
  { value: "tm", label: "Turkmenistan" },
  { value: "tv", label: "Tuvalu" },
  { value: "ug", label: "Uganda" },
  { value: "ua", label: "Ukraine" },
  { value: "ae", label: "United Arab Emirates" },
  { value: "gb", label: "United Kingdom" },
  { value: "us", label: "United States" },
  { value: "uy", label: "Uruguay" },
  { value: "uz", label: "Uzbekistan" },
  { value: "vu", label: "Vanuatu" },
  { value: "va", label: "Vatican City" },
  { value: "ve", label: "Venezuela" },
  { value: "vn", label: "Vietnam" },
  { value: "ye", label: "Yemen" },
  { value: "zm", label: "Zambia" },
  { value: "zw", label: "Zimbabwe" },
];

const tags = [
  "Hiking",
  "Education",
  "Sport",
  "Travelling",
  "Art",
  "Beach",
  "Music",
  "Party",
  "Technology",
  "History & Culture",
  "Adventure Seeker",
  "Photography",
];

export default function ProfileSetup() {
  const [formFilled, setFormFilled] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedGenderOption, setSelectedGenderOption] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [selectedHomeCountryOption, setSelectedHomeCountryOption] =
    useState(null);
  const [selectedDestinationCountryOption, setDestinationCountryOption] =
    useState(null);
  const [selectedHomeCityOption, setSelectedHomeCityOption] = useState(null);
  const [selectedDestinationCityOption, setDestinationCityOption] =
    useState(null);
  const [homeGeoLocation, setHomeGeoLocation] = useState(null);
  const [destinationGeoLocation, setDestinationGeoLocation] = useState(null);

  const loadDestinationCityOptions = async (inputValue, callback) => {
    if (selectedDestinationCountryOption && inputValue) {
      try {
        const response = await fetch(
          `api/places?input=${inputValue}&country=${selectedDestinationCountryOption.value}`
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

  const loadHomeCityOptions = async (inputValue, callback) => {
    if (selectedHomeCountryOption && inputValue) {
      try {
        const response = await fetch(
          `api/places?input=${inputValue}&country=${selectedHomeCountryOption.value}`
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

  useEffect(() => {
    let isMounted = true;
    if (
      selectedGenderOption &&
      travelDate &&
      selectedHomeCountryOption &&
      selectedDestinationCountryOption &&
      selectedTags.length
    ) {
      setFormFilled(true);

      const fetchData = async () => {
        try {
          if (
            formFilled &&
            selectedDestinationCityOption &&
            selectedHomeCityOption
          ) {
            const destinationData = await getGeoLocation("Westbury, UK");
            const homeData = await getGeoLocation(selectedHomeCityOption.value);
            console.log(homeData);
            if (isMounted) {
              setDestinationGeoLocation(destinationData);
              setHomeGeoLocation(homeData);
            }
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [
    selectedGenderOption,
    travelDate,
    selectedHomeCountryOption,
    selectedDestinationCountryOption,
    selectedTags,
    formFilled,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      selectedGenderOption &&
      travelDate &&
      selectedHomeCountryOption &&
      selectedDestinationCountryOption &&
      selectedDestinationCityOption &&
      selectedHomeCityOption &&
      selectedTags.length
    ) {
      console.log(
        selectedGenderOption,
        travelDate,
        selectedHomeCountryOption,
        selectedDestinationCountryOption,
        selectedTags,
        selectedDestinationCityOption,
        selectedHomeCityOption,
        homeGeoLocation,
        destinationGeoLocation
      );
    }
  };

  const handleInputChange = (e, set) => {
    set(e.target.value);
  };

  const handleTagClick = (e, tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags((prevTags) => [...prevTags, tag]);
      if (selectedTags.length > 2) {
        selectedTags.pop();
      }
    }
    if (selectedTags.includes(tag)) {
      setSelectedTags((prevTags) => {
        return prevTags.filter((prevTag) => prevTag != tag);
      });
    }
  };

  return (
    <main className="pb-20 w-full text-sm">
      <section className="h-full px-4 md:px-5 lg:px-20 xl:px-28 w-full flex flex-col gap-10 pt-5 md:pt-10">
        <div>
          <h1 className="font-semibold text-lg md:text-2xl text-prim">
            Connect Better!
          </h1>
          <p className="text-sm text-sec">
            Help us link your profile with other like-minded people
          </p>
        </div>
        <div>
          <h2 className=" text-base md:text-xl text-prim font-medium">
            Interest
          </h2>
          <div className="mt-2 md:mt-4 flex gap-y-3 lg:gap-y-5 flex-wrap">
            {tags.map((tag, i) => {
              return (
                <span
                  key={i}
                  onClick={(e) => {
                    handleTagClick(e, tag);
                  }}
                  className={
                    selectedTags?.includes(tag)
                      ? "rounded-3xl text-white px-3 md:px-5 py-1 md:py-2.5 box-border bg-gradient-to-br border-[1px] border-transparent from-[#FD6E6A] to-[#FFC600]  inline-block mr-2 md:mr-5"
                      : "rounded-3xl px-3 md:px-5 py-1 md:py-2.5 box-border border-[1px] inline-block mr-2 md:mr-5"
                  }
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className=" text-base md:text-xl text-prim font-medium">
            Travel Information
          </h2>
          <form className=" flex flex-wrap gap-x-12 gap-y-6 w-full mt-2 md:mt-4">
            <div className="w-full md:w-2/5">
              <label htmlFor="homeCountry">Current Country</label>
              <Select
                className="text-prim placeholder-black placeholder-opacity-25"
                defaultValue={selectedHomeCountryOption}
                onChange={setSelectedHomeCountryOption}
                options={countryOptions}
                id="homeCountry"
                placeholder={"Nigeria"}
              />
            </div>
            <div className="w-full md:w-2/5">
              <label htmlFor="destinationCountry">Destination Country</label>
              <Select
                className="text-prim placeholder-black placeholder-opacity-25"
                defaultValue={selectedDestinationCountryOption}
                onChange={setDestinationCountryOption}
                options={countryOptions}
                id="destinationCountry"
                placeholder={"United Kingdom"}
              />
            </div>
            <div className="w-full md:w-2/5">
              <label htmlFor="homeCity">Home City</label>
              <AsyncSelect
                className="text-prim placeholder-black placeholder-opacity-25"
                defaultValue={selectedHomeCityOption}
                onChange={setSelectedHomeCityOption}
                loadOptions={loadHomeCityOptions}
                id="homeCity"
                placeholder={"United Kingdom"}
              />
            </div>

            <div className="w-full md:w-2/5">
              <label htmlFor="destinationCity">Destination City</label>
              <AsyncSelect
                className="text-prim placeholder-black placeholder-opacity-25"
                defaultValue={selectedDestinationCityOption}
                onChange={setDestinationCityOption}
                loadOptions={loadDestinationCityOptions}
                id="destinationCity"
                placeholder={"United Kingdom"}
              />
            </div>

            <div className="w-full md:w-2/5">
              <label htmlFor="gender">Gender</label>
              <Select
                className="text-prim placeholder-black placeholder-opacity-25"
                defaultValue={selectedGenderOption}
                onChange={setSelectedGenderOption}
                options={genderOptions}
                placeholder={"Male"}
                id="gender"
              />
            </div>

            <div className="w-full md:w-2/5">
              <label htmlFor="travelDate">Travel Date</label>
              <input
                onChange={(e) => {
                  handleInputChange(e, setTravelDate);
                }}
                className="text-prim bg-transparent placeholder-black placeholder-opacity-25 w-full h-[36px] border-[#CCC] border-[1px] rounded-[4px] px-2 focus:outline-[#2684FF]"
                type="date"
                id="travelDate"
                value={travelDate}
              />
            </div>

            {formFilled ? (
              <button
                className="bg-tert w-full md:w-2/5 py-3  md:mt-4 rounded-3xl text-white opacity-100"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Proceed
              </button>
            ) : (
              <button
                className="bg-tert w-full md:w-2/5 py-3  md:mt-4 rounded-3xl text-white opacity-60"
                disabled
              >
                Proceed
              </button>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
