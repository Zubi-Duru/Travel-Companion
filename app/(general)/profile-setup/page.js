"use client";

import React, { useEffect, useState } from "react";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import countryDb from "@/public/countryDb";
import { useRouter } from "next/navigation";
import { useGetData } from "@/app/components/hooks/useFetchData";
import { useAuthContext } from "@/app/components/hooks/useAuthContext";
import { patchData } from "@/utils/fetchData";

const genderOptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Null", label: "Prefer not to say" },
];

const relationshipOptions = [
  { value: "Single", label: "Single" },
  { value: "Married", label: "Married" },
];

function generateAgeOptionsArray(start, end) {
  const optionsArray = [];

  for (let x = start; x <= end; x++) {
    optionsArray.push({ value: x, label: String(x) });
  }

  return optionsArray;
}
const ageOptions = generateAgeOptionsArray(13, 100);

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
  "Nature",
  "Science",
];

export default function ProfileSetup({ params, searchParams }) {
  const { user, dispatch } = useAuthContext();
  const router = useRouter();
  const [formFilled, setFormFilled] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedGenderOption, setSelectedGenderOption] = useState(null);
  const [selectedRelationshipOption, setSelectedRelationshipOption] =
    useState(null);
  const [selectedAgeOption, setSelectedAgeOption] = useState(20);
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
        let places = [];
        data?.data?.predictions?.map((place, i) => {
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
        let places = [];
        data?.data?.predictions?.map((place, i) => {
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
      selectedTags.length &&
      selectedRelationshipOption &&
      selectedAgeOption &&
      selectedHomeCityOption &&
      selectedDestinationCityOption &&
      destinationGeoLocation &&
      homeGeoLocation
    ) {
      setFormFilled(true);
    }

    const fetchData = async () => {
      try {
        if (selectedDestinationCityOption && selectedHomeCityOption) {
          const destinationData = await getGeoLocation("Westbury, UK");
          const homeData = await getGeoLocation(selectedHomeCityOption.value);
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
    selectedRelationshipOption,
    selectedAgeOption,
  ]);

  const {
    data: userData,
    error,
    isLoading,
  } = useGetData(`/user/${searchParams.userId}`);

  useEffect(() => {
    if (isLoading) {
      console.log("loading setupp");
    }
    if (!isLoading && userData) {
      dispatch({ type: "LOGIN", payload: { ...userData } });
      if (userData?.travelDate) {
        router.push("/dashboard");
      }
    }
    if (error) {
      console.error("Error fetching user data:", error);
    }
  }, [userData, error, isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      selectedGenderOption &&
      travelDate &&
      selectedHomeCountryOption &&
      selectedDestinationCountryOption &&
      selectedDestinationCityOption &&
      selectedHomeCityOption &&
      selectedTags.length &&
      selectedRelationshipOption &&
      selectedAgeOption &&
      homeGeoLocation &&
      destinationGeoLocation
    ) {
      const filledUserData = {
        age: selectedAgeOption.value,
        sex: selectedGenderOption.value,
        travelDate,
        interests: [...selectedTags],
        homeLocation: {
          type: "Point",
          coordinates: [
            homeGeoLocation.geoLocation.lng,
            homeGeoLocation.geoLocation.lat,
          ],
          address: selectedHomeCityOption.value,
          country: selectedHomeCountryOption.value,
        },
        destinationLocation: {
          type: "Point",
          coordinates: [
            destinationGeoLocation.geoLocation.lat,
            destinationGeoLocation.geoLocation.lng,
          ], // Replace with actual coordinates if available
          address: selectedDestinationCityOption.value, // Replace with actual address if available
          country: selectedDestinationCountryOption.value,
        },
        relationship: selectedRelationshipOption.value,
      };

      const { data, error } = await patchData(
        `/users/${userData._id}`,
        filledUserData
      );

      if (error) {
        console.error("Error:", error);
      } else {
        router.push("/dashboard");
      }
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
    <>
      {!isLoading && userData && !userData?.travelDate && (
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
                    options={countryDb}
                    id="homeCountry"
                    placeholder={"Select a Country"}
                  />
                </div>
                <div className="w-full md:w-2/5">
                  <label htmlFor="destinationCountry">
                    Destination Country
                  </label>
                  <Select
                    className="text-prim placeholder-black placeholder-opacity-25"
                    defaultValue={selectedDestinationCountryOption}
                    onChange={setDestinationCountryOption}
                    options={countryDb}
                    id="destinationCountry"
                    placeholder={"Select a Country"}
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
                    placeholder={"Search for a City"}
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
                    placeholder={"Search for a City"}
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
                    placeholder="dd/mm/yy"
                    value={travelDate}
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
                  <label htmlFor="relationship">Relationship status</label>
                  <Select
                    className="text-prim placeholder-black placeholder-opacity-25"
                    defaultValue={selectedRelationshipOption}
                    onChange={setSelectedRelationshipOption}
                    options={relationshipOptions}
                    placeholder={"Single"}
                    id="relationship"
                  />
                </div>

                <div className="w-full md:w-2/5">
                  <label htmlFor="age">Age status</label>
                  <Select
                    className="text-prim placeholder-black placeholder-opacity-25"
                    defaultValue={selectedAgeOption}
                    onChange={setSelectedAgeOption}
                    options={ageOptions}
                    placeholder={13}
                    id="age"
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
      )}
    </>
  );
}
