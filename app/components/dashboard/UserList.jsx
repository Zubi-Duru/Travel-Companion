"use client";
import { useState } from "react";
import BtnMain from "../general/BtnMain";
import Image from "next/image";
import { postData } from "@/utils/fetchData";
import Link from "next/link";

//API fetch related users

export default function UserList({
  title = "People Going to ...",
  users = [],
}) {
  const [list, setList] = useState(4);

  const handleConnect = async (e,i) => {
    const { data, error } = await postData(`/connect-send/${users[i]._id}`,null,token);
    console.log(data,"ok");
  };

  const renderMockContent = () => {
    if (users.length < 5) {
      let mockNo = 5 - users.length;
      let mockContent = [];
      for (let index = 0; index < mockNo; index++) {
        mockContent.push(
          <div className="flex items-center bg-white drop-shadow-md rounded-xl justify-between px-2 py-4 md:p-4">
            <div className="flex gap-2 items-center">
              <div className="w-12 md:w-14">
                <Image
                  className="w-10 md:w-14 h-10 md:h-14 rounded-full"
                  src={`/assets/friend1.png`}
                  width="150"
                  height="150"
                />
              </div>
              <div className="w-40 md:w-64 lg:w-32 xl:w-64">
                <p className="text-sm md:text-base lg:text-xs xl:text-base font-semibold">
                  <span className="h-3 md:h-4 w-12 md:w-24 bg-slate-100 rounded-lg inline-block animate-pulse"></span>
                </p>
                <div className="space-x-0.5 md:space-x-1 flex">
                  <span className="text-xs md:text-sm lg:text-xs xl:text-base">
                    <span className="h-3 md:h-4 w-4 bg-slate-100 rounded-lg inline-block animate-pulse"></span>
                  </span>
                  <span className="h-3 md:h-4 w-10 bg-slate-100 rounded-lg inline-block animate-pulse"></span>
                  <span className="text-xs md:text-sm lg:text-xs xl:text-base">
                    <span className="h-4 w-24 bg-slate-100 rounded-lg inline-block animate-pulse"></span>
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:scale-[0.6] scale-100 xl:scale-100 origin-right">
              <span className="h-6 md:h-12 w-16 md:w-28 bg-slate-100 rounded-3xl inline-block animate-pulse"></span>
            </div>
          </div>
        );
      }
      return mockContent;
    }
    return null; // Return null if no mock content is needed
  };

  return (
    <div className="px-1.5 rounded-2xl md:px-5 bg-white ">
      <h2 className="text-xl lg:text-xl xl:text-3xl font-medium p-1.5 md:p-4 rounded-2xl bg-white">
        {title}
      </h2>
      <div className="space-y-4">
        {users.map((user, i) => {
          if (i < list) {
            return (
              <div
                className={`flex items-center ${
                  i == list - 1
                    ? "opacity-80 shadow-inner"
                    : "bg-white drop-shadow-md"
                } rounded-xl justify-between px-2 py-4 md:p-4`}
                key={user.username}
              >
                <div className="flex gap-2 items-center">
                  <div className="w-12 md:w-14">
                    <Image
                      className="w-10 md:w-14 h-10 md:h-14 rounded-full "
                      src={`/assets/friend.png`}
                      width="150"
                      height="150"
                    />
                  </div>
                  <div className="w-40 md:w-64 lg:w-32 xl:w-64">
                    <Link href={`/user-profile/${user._id}`} className="text-sm md:text-base lg:text-xs xl:text-base font-semibold">
                      {user.username.slice(0, 25)}
                    </Link>
                    <div className="space-x-0.5 md:space-x-1">
                      <span className="text-xs md:text-sm lg:text-xs xl:text-base">
                        {user.age}
                      </span>
                      <span className="font-black">.</span>
                      <span className="text-xs md:text-sm lg:text-xs xl:text-base">
                        {user.sex}
                      </span>
                      <span className="font-black">.</span>
                      <span className="text-xs md:text-sm lg:text-xs xl:text-base">
                        {user.destinationLocation.address}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  onClick={(e) => {
                    handleConnect(e,i);
                  }}
                  className="lg:scale-[0.6] scale-100 xl:scale-100 origin-right"
                >
                  <BtnMain>Connect</BtnMain>
                </div>
              </div>
            );
          }
        })}
        {renderMockContent()}
        {users.length > list && (
          <div className="bg-white flex justify-center">
            <button
              onClick={(e) => {
                setList((prevList) => {
                  return prevList + 4;
                });
              }}
              className="md:-mx-5 w-full rounded-b-2xl text-lg -mt-[60px] bg-white drop-shadow-sm py-5 text-tert font-bold"
            >
              See More
            </button>
          </div>
        )}
        {users.length <= list && (
          <div className="bg-white flex justify-center">
            <button
              onClick={(e) => {
                setList(4);
              }}
              className="md:-mx-5 w-full rounded-b-2xl text-lg -mt-[60px] bg-white drop-shadow-sm py-5 text-tert font-bold"
            >
              See Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
