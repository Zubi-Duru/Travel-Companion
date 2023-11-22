"use client";
import { useState } from "react";
export default function AuthCard() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="flex flex-col gap-6 w-full bg-white rounded-3xl p-5 text-sm">
      <div className="hidden md:block w-full rounded-xl overflow-clip">
        <button
          className="bg-[#A95629] w-1/2 py-3 text-white font-semibold"
          onClick={(e) => {
            setOpenTab(1);
          }}
        >
          Signup
        </button>
        <button
          className="bg-[#C3C3C3] w-1/2 py-3 text-white font-semibold"
          onClick={(e) => {
            setOpenTab(2);
          }}
        >
          Login
        </button>
      </div>
      <div className="md:px-20 flex flex-col gap-6">
        <h1
          className={` ${
            openTab == 1 ? "block" : "hidden"
          } text-center font-semibold text-lg md:text-xl`}
        >
          Sign Up
        </h1>
        <h1
          className={` ${
            openTab == 2 ? "block" : "hidden"
          } text-center font-semibold text-lg md:text-xl`}
        >
          Sign In
        </h1>
        <div className="flex flex-col gap-3">
          <button className="w-full py-3 border-[1px] rounded-3xl border-prim ">
            Sign up with facebook
          </button>
          <button className="w-full py-3 border-[1px] rounded-3xl border-prim ">
            Sign up with Google
          </button>
        </div>
        <div className="flex items-center justify-between">
          <hr className="w-2/5 inline-block border-t-[1.5px]" />
          <span>OR</span>
          <hr className="w-2/5 inline-block border-t-[1.5px]" />
        </div>
        <form className="space-y-3">
          <div>
            <div
              className={` ${
                openTab == 1 ? "block" : "hidden"
              } flex gap-3 mb-3`}
            >
              <div className="w-1/2">
                <label for="firstName" className="block text-sec mb-[0.8px]">
                  First Name
                </label>
                <input
                  id="firstName"
                  className=" inline-block border-[1px] w-full border-sec h-10 rounded-lg focus:outline-2 focus:outline-tert pl-2"
                />
              </div>
              <div className="w-1/2">
                <label for="lastName" className="block text-sec mb-[0.8px]">
                  Last Name
                </label>
                <input
                  id="lastName"
                  className=" inline-block border-[1px] w-full border-sec h-10 rounded-lg focus:outline-2 focus:outline-tert pl-2"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="mb-3">
                <label for="email" className="block text-sec mb-[0.8px]">
                  Email Address
                </label>
                <input
                  id="email"
                  className="w-full border-[1px] border-sec h-10 rounded-lg focus:outline-2 focus:outline-tert pl-2"
                />
              </div>
              <div className={` ${openTab == 2 ? "block" : "hidden"} mb-3`}>
                <label for="email" className="block text-sec mb-[0.8px]">
                  Password
                </label>
                <input
                  id="password"
                  className="w-full border-[1px] border-sec h-10 rounded-lg focus:outline-2 focus:outline-tert pl-2"
                />
              </div>
            </div>
          </div>

          <button
            className="bg-tert w-full py-3 rounded-3xl text-white opacity-60"
            disabled
          >
            Continue
          </button>
        </form>
      </div>
      <div
        className={` ${
          openTab == 1 ? "inline" : "hidden"
        } md:hidden text-center`}
      >
        Already have an account on Travel Buddy?
        <button
          className={` ${
            openTab == 1 ? "inline" : "hidden"
          } text-tert font-semibold cursor-pointer`}
          onClick={(e) => {
            setOpenTab(2);
          }}
        >
          {" "}
          Login
        </button>
      </div>
      <div
        className={` ${
          openTab == 2 ? "inline" : "hidden"
        } md:hidden text-center`}
      >
        Don't have an account with Travel Buddy?
        <button
          className="text-tert font-semibold cursor-pointer"
          onClick={(e) => {
            setOpenTab(1);
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
