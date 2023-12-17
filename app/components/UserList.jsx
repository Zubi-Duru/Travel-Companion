"use client"
import { useState } from "react";
import BtnMain from "./BtnMain";
import Image from "next/image";

//API fetch related users
let users = [
  {
    name: "Miracle Onyema",
    age: 23,
    city: "Lagos",
    country: "Nigeria",
    dp: "friend1",
    sex: "male",
  },
  {
    name: "David Jagger",
    age: 25,
    city: "PH",
    country: "Nigeria",
    dp: "friend1",
    sex: "male",
  },
  {
    name: "Raymond Onyinye",
    age: 28,
    city: "Calabar",
    country: "Nigeria",
    dp: "friend",
    sex: "female",
  },
  {
    name: "Convenant Chi",
    age: 19,
    city: "Lagos",
    country: "Nigeria",
    dp: "friend",
    sex: "female",
  },
  {
    name: "Miracle Great",
    age: 23,
    city: "PH",
    country: "Nigeria",
    dp: "friend1",
    sex: "male",
  },
  {
    name: "Dee Harley",
    age: 33,
    city: "Uyo",
    country: "Nigeria",
    dp: "friend",
    sex: "female",
  },
  {
    name: "Miracle Onyema",
    age: 23,
    city: "Lagos",
    country: "Nigeria",
    dp: "friend",
    sex: "female",
  },
];
export default function UserList() {
    const [list,setList]=useState(4)
  return (
    <div className="rounded-2xl md:px-5 bg-white">
      <h2 className="text-2xl md:text-3xl font-medium p-1.5 md:p-4 bg-white">
        People Going to Stanford
      </h2>
      <div className="space-y-4 ">
        {users.map((user, i) => {
          if (i < list) {
            return (
              <div
                className={`flex items-center ${i==list-1? "opacity-80 shadow-inner": "bg-white drop-shadow-md"}  rounded-xl space-x-1.5 md:space-x-3 px-2 py-4 md:p-4`}
                key={user.name}
              >
                <div className="w-12 md:w-14">
                  <Image
                    className="w-10 md:w-14 h-10 md:h-14 rounded-full "
                    src={`/assets/${user.dp}.png`}
                    width="150"
                    height="150"
                  />
                </div>
                <div className="w-40 md:w-64">
                  <p className="text-sm md:text-base font-semibold">
                    {user.name.slice(0, 25)}
                  </p>
                  <div className="space-x-0.5 md:space-x-1">
                    <span className="text-xs md:text-sm">{user.age}</span>
                    <span className="font-black">.</span>
                    <span className="text-xs md:text-sm">{user.sex}</span>
                    <span className="font-black">.</span>
                    <span className="text-xs md:text-sm">
                      {user.city + "," + user.country}
                    </span>
                  </div>
                </div>
                <BtnMain>Connect</BtnMain>
              </div>
            );
          }
        })}
       {users.length>list && <div className="bg-white flex justify-center">
            <button onClick={(e)=>{
                setList((prevList)=>{return prevList + 4})
            }} className="md:-mx-5 w-full rounded-b-2xl text-lg -mt-[60px] bg-white drop-shadow-sm py-5 text-tert font-bold">See More</button>
        </div>}
      </div>
    </div>
  );
}
