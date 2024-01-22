"use client";
import BtnMain from "@/app/components/general/BtnMain";
import Flagdropdown from "@/app/components/dashboard/Flagdropdown";
import HotSpotsCard from "@/app/components/dashboard/HotSpotsCard";
import Map from "@/app/components/dashboard/Map";
import SearchBar from "@/app/components/dashboard/SearchBar";
import UserList from "@/app/components/dashboard/UserList";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useGetData } from "@/app/components/hooks/useFetchData";
import { useAuthContext } from "@/app/components/hooks/useAuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

//API getUsers
// 1. get destination country for the flag
// 2. get dp
let destinationCountry = { value: "ng", label: "Nigeria" };
let destination = {
  country: destinationCountry,
  place: {
    value: "Port-Harcourt, Nigeria",
    label: "Port-Harcourt, Nigeria",
  },
  geoCode: { lat: 4.847222599999999, lng: 6.974603999999999 },
};
let dp = "/assets/dp.png";
let name = "Patrick";

export default function Dashboard() {
  const router = useRouter();
  const [location, setLocation] = useState(null);

  const { user, dispatch } = useAuthContext();
  console.log(user);
  const {
    data: userData,
    error,
    isLoading,
  } = useGetData(`/user/${user && user._id}`);

  useEffect(() => {
    let isMounted = true; // Flag to track whether the component is mounted

    if (isLoading) {
      console.log("loading");
    }

    if (!isLoading && !user?.travelDate && isMounted) {
      dispatch({ type: "LOGIN", payload: { ...userData } });
    }

    if (error) {
      console.error("Error fetching user data:", error);
    }

    // Cleanup function to update the mounted flag when the component unmounts
    return () => {
      isMounted = false;
    };
  }, [userData, error, isLoading]);

  useEffect(() => {
    if (user?.travelDate) {
      console.log(user);
      setLocation({
        country: user.destinationLocation.country,
        place: {
          value: user.destinationLocation.address,
          label: user.destinationLocation.address,
        },
        geoCode: {
          lat: user.destinationLocation.coordinates[0],
          lng: user.destinationLocation.coordinates[1],
        },
      });
    }
  }, [user]);

  console.log(location);

  const {
    data: relatedUserData,
    error: relatedUserDataError,
    isLoading: relatedUserDataIsLoading,
  } = useGetData(
    user &&
      `/related-users/${user._id}?lat=${
        location
          ? location.geoCode.lng
          : user.travelDate && user.destinationLocation.coordinates[0]
      }&lng=${
        location
          ? location.geoCode.lat
          : user.travelDate && user.destinationLocation.coordinates[1]
      }`
  );

  //user chat login
  let userChatData = {
    username: user?.username,
    secret: user?._id,
    email: user?.email,
    first_name: user?.username,
    last_name: "",
  };

  const header = {
    "PRIVATE-KEY": `${process.env.NEXT_PUBLIC_CHAT_PROJECT_PASSWORD}`,
  };

  const fetchChatEngineUsers = async () => {
    try {
      const response = await axios.get("https://api.chatengine.io/users/", {
        headers: header,
      });

      const usersList = response.data.map(({ username }) => username);

      return usersList;
    } catch (error) {
      console.error("Error fetching ChatEngine users:", error);
      return [];
    }
  };

  const createChat = async () => {
    try {
      const response = await axios.post(
        "https://api.chatengine.io/users/",
        userChatData,
        {
          headers: header,
        }
      );

      console.log(response.data); // Data from the response
      return { error: null, data: response.data };
    } catch (error) {
      console.error(error.response?.data || error.message);
      return { error, data: null };
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res1 = await fetchChatEngineUsers();

      // Check if user.username exists in the list
      const userExistsInChatEngine = res1.includes(user.username);

      if (!userExistsInChatEngine) {
        // Run your POST request logic here
        const res2 = await createChat();
        console.log(res2);
      } else {
        console.log(
          "User already exists in ChatEngine. No need to run the POST request."
        );
      }
    };

    fetchData();
  }, [user]);

  return (
    <>
      {user && location && (
        <main className="w-full ">
          <div className="hidden md:flex justify-between items-center my-4 py-4 md:px-10 md:mb-12">
            <div className="pr-3 w-1/3 xl:w-2/5">
              <h1 className="text-xl lg:text-2xl xl:text-4xl font-bold mb-1 inline-block">
                Hello!
              </h1>
              <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-1 inline-block">
                {user.username}
              </h1>
              <p className="text-sm hidden lg:inline-block">
                Welcome back and explore new trips
              </p>
            </div>

            <div className="pr-8 w-full lg:w-4/6">
              <SearchBar
                country={location.country}
                searchCtrl={{ location, setLocation }}
              />
            </div>

            <div className="flex items-center">
              <div className="">
                <Flagdropdown
                  size={12}
                  getSelectedFlag={{ location, setLocation }}
                />
              </div>
              <Link
                href={`/user-profile/${user._id}`}
                className="w-14 h-14 rounded-full overflow-hidden"
              >
                <Image
                  className="w-full h-full rounded-full"
                  src={`/assets/friend.png`}
                  width="2500"
                  height="2500"
                />
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <div>
              <hr className="" />
              <div className="flex justify-between">
                <div className="font-extrabold text-xl my-3 pl-5">Home</div>
                <div className="inline-block">
                  <Flagdropdown getSelectedFlag={{ location, setLocation }} />
                </div>
              </div>
              <hr />
            </div>
            <div className="px-4 my-8">
              <SearchBar
                country={location.country}
                searchCtrl={{ location, setLocation }}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center md:justify-start md:gap-6 lg:gap-5 xl:gap-6 md:px-10 lg:px-5 xl:px-10">
            <div className="space-y-10 basis-1/2">
              <div className="px-4 md:px-0">
                <UserList
                  title={`People Going to ${
                    location.place.value.split(",")[0]
                  }`}
                  users={relatedUserData ? relatedUserData : []}
                />
              </div>
              <div className="pb-10 pl-4 md:pl-0 ">
                <HotSpotsCard location={location} setLocation={setLocation} />
              </div>
            </div>
            <div className="basis-1/2 relative px-4 md:px-0">
              <div className="sticky -top-[250px] h-fit overflow-scroll pb-10">
                <h2 className="flex text-xl md:text-3xl font-medium p-2.5 md:p-4 bg-white rounded-t-xl">
                  <img className="mr-2" src="/assets/mappin.svg" />
                  {`Places in ${location.place.value.split(",")[0]}`}
                </h2>
                <div className="lg:h-[90vh] rounded-2xl md:rounded-none">
                  <Map geoCode={location.geoCode} />
                </div>

                <div className="mt-10 relative">
                  <Image
                    className="w-full h-full"
                    src="/assets/dashimage.png"
                    width="1000"
                    height="1000"
                  />
                  <div className="absolute top-1/4 text-center w-full">
                    <h3 className="flex xl:text-xl font-bold mx-auto p-1.5 md:p-4 w-fit text-white ">
                      Guideline to Travelling with Others
                    </h3>
                    <BtnMain>Read Article</BtnMain>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
