"use client";

import BtnMain from "@/app/components/general/BtnMain";
import BtnSec from "@/app/components/general/BtnSec";
import { useAuthContext } from "../hooks/useAuthContext";
export default function AboutSection({ userData,isProfileOwner}) {

  return (
    <div className="flex justify-between md:items-center lg:items-start w-full">
      <div className="lg:min-w-4/6 xl:min-w-3/6 p-2 lg:px-8 ">
        <h2 className="text-xl lg:text-xl xl:text-2xl font-semibold mb-2">
          {userData.username}
        </h2>

        <p className="text-sm md:text-base font-medium min-w-[100%]">
          {userData.about
            ? userData.about
            : "Hi, I am on the lookout for a travel buddy 👋"}
        </p>
        <div className="font-semibold text-sm space-x-2">
          <span>{userData.age}yrs</span>
          <span className="text-xl">.</span>
          <span>{userData.sex ? userData.sex : ""}</span>
          <span className="text-xl">.</span>
          <span>{userData.homeLocation.address}</span>
          <span>🔜</span>
          <span>{userData.destinationLocation.address}</span>
        </div>
        {!isProfileOwner && <div className="lg:hidden flex space-x-3 mt-3">
          <BtnSec>Message</BtnSec>
          <BtnMain>Connect</BtnMain>
        </div>}
      </div>
      {!isProfileOwner && <div className="hidden w-2/5 lg:flex flex-row items-center lg:justify-end">
        <div className="mb-5 lg:mb-0 lg:mr-5">
          <BtnSec>Message</BtnSec>
        </div>
        <div>
          <BtnMain>Connect</BtnMain>
        </div>
      </div>}
    </div>
  );
}
