"use client";
import { useState } from "react";
import Image from "next/image";
let hotspots = [
  {
    img: "hotel",
  },
  {
    img: "hotel",
  },
  {
    img: "hotel",
  },
  {
    img: "hotel",
  },
];
export default function HotSpotsCard() {
  const [list, setList] = useState(2);
  return (
    <div className="rounded-2xl md:px-5 bg-white w-full">
      <h2 className="text-2xl md:text-3xl font-medium p-1.5 md:p-4 bg-white">
        Popular Destinations
      </h2>
      <div className="flex w-fit justify-between flex-wrap md:gap-4">
        {hotspots.map((spot, i) => {
          if (i < list) {
            return (
              <div
                className="w-[48%] space-y-3 md:space-y-4 shadow-md p-2.5 rounded-xl mb-4"
                key={spot.name}
              >
                <div>
                  <Image
                    className="w-full"
                    src={`/assets/${spot.img}.png`}
                    width="150"
                    height="150"
                  />
                </div>
                <div className="w-full">
                  <h4 className="text-sm md:text-base font-semibold mb-3">
                    Paris (Central Pack)
                  </h4>
                  <p className="text-xs">
                    Nha Trang has many famous tourist attractions and is a big
                    tourist center of the country...
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <svg
                      width="27"
                      height="25"
                      viewBox="0 0 27 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.2498 5.80985L16.7838 8.59564C16.9905 8.98091 17.5454 9.34642 18.0132 9.42545L20.7875 9.84035C22.5609 10.1071 22.9743 11.2728 21.7014 12.4384L19.5363 14.4043C19.1773 14.7303 18.9706 15.3724 19.0903 15.8367L19.7104 18.2669C20.2 20.1833 19.0685 20.9341 17.2081 19.9265L14.6078 18.5237C14.14 18.2669 13.3567 18.2669 12.8889 18.5237L10.2886 19.9265C8.42822 20.9242 7.29675 20.1833 7.78633 18.2669L8.40648 15.8367C8.52615 15.3823 8.31944 14.7402 7.96041 14.4043L5.79537 12.4384C4.52246 11.2826 4.93588 10.117 6.70926 9.84035L9.48355 9.42545C9.95138 9.3563 10.5062 8.98091 10.713 8.59564L12.247 5.80985C13.063 4.29841 14.412 4.29841 15.2498 5.80985Z"
                        fill="#FFD910"
                      />
                    </svg>
                    <span className="ml-1 text-sm">4.9</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      width="19"
                      height="17"
                      viewBox="0 0 19 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.54646 8.57895C11.5493 8.57895 13.173 7.10467 13.173 5.28606C13.173 3.46744 11.5493 1.99316 9.54646 1.99316C7.54358 1.99316 5.91992 3.46744 5.91992 5.28606C5.91992 7.10467 7.54358 8.57895 9.54646 8.57895Z"
                        stroke="#292D32"
                        strokeWidth="0.987868"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.31592 15.1647C3.31592 12.616 6.10835 10.5547 9.54632 10.5547C10.2426 10.5547 10.9172 10.6403 11.5482 10.7984"
                        stroke="#292D32"
                        strokeMidth="0.987868"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.7995 12.5303C16.7995 13.0242 16.6472 13.4918 16.3789 13.887C16.2266 14.1241 16.0307 14.3348 15.8059 14.506C15.2982 14.921 14.6309 15.1646 13.8983 15.1646C12.8394 15.1646 11.9182 14.6509 11.4177 13.887C11.1494 13.4918 10.9971 13.0242 10.9971 12.5303C10.9971 11.7005 11.4177 10.9563 12.085 10.4755C12.5855 10.1133 13.2165 9.896 13.8983 9.896C15.5012 9.896 16.7995 11.0749 16.7995 12.5303Z"
                        stroke="#292D32"
                        strokeWidth="0.987868"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.7671 12.5302L13.4851 13.1821L15.03 11.8848"
                        stroke="#292D32"
                        strokeMidth="0.987868"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-1 text-sm">(1,200)</span>
                  </div>
                </div>
              </div>
            );
          }
        })}
        {hotspots.length > list && (
          <div className="bg-white flex justify-center w-full">
            <button
              onClick={(e) => {
                setList((prevList) => {
                  return prevList + 4;
                });
              }}
              className="mb-4 w-full rounded-2xl text-lg  bg-white drop-shadow-md py-5 text-tert font-bold"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
