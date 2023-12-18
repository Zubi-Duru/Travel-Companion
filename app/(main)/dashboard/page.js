"use client";
import Flagdropdown from "@/app/components/Flagdropdown";
import HotSpotsCard from "@/app/components/HotSpotsCard";
import SearchBar from "@/app/components/SearchBar";
import UserList from "@/app/components/UserList";
import Image from "next/image";
import { useState } from "react";

//API getUsers
// 1. get destination country for the flag
// 2. get dp
let destinationCountry =    { value: "ng", label: "Nigeria" };
let dp = "/assets/dp.png";
let name = "Patrick";

export default function Dashboard() {
  const [ selectedOption, setSelectedOption] =
    useState(destinationCountry);

  const [geoCode, setGeoCode] = useState();

  return (
    <main className="w-full ">
      <div className="hidden md:flex justify-between items-center my-4 py-4 md:px-10 md:mb-12">
        <div className="pr-3 w-1/3 xl:w-2/5">
          <h1 className="text-xl lg:text-2xl xl:text-4xl font-bold mb-1"> Hello {name}!</h1>
          <p className="text-sm hidden lg:inline-block">
            Welcome back and explore new trips
          </p>
        </div>

        <div className="pr-8 w-full lg:w-4/6">
          <SearchBar country={selectedOption}/>
        </div>

        <div className="flex items-center">
          <div className="">
            <Flagdropdown size={12} getSelectedOption={{selectedOption, setSelectedOption}} />
          </div>
          <div className="w-14 h-14 rounded-full overflow-hidden ">
            <Image
              className="w-full h-full rounded-full"
              src={`${dp}`}
              width="2500"
              height="2500"
            />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div>
          <hr className="" />
          <div className="font-extrabold text-xl my-3 pl-5">Home</div>
          <hr />
        </div>
        <div className="px-4 my-8">
          <SearchBar country={selectedOption} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-start px-4 md:gap-6 md:px-10">
        <div className="space-y-10 basis-1/2">
          <div>
            <UserList />
          </div>
          <div className="mb-10">
            <HotSpotsCard />
          </div>
        </div>
        <div className="basis-1/2">hi</div>
      </div>
    </main>
  );
}
