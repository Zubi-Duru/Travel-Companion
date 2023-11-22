"use client";

import NavLinks from "./NavLinks";
import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";
export default function NavMobile() {
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = (e) => {
    setDropdown((prevDropdown) => !prevDropdown);
  };
  return (
    <>
      <div className="flex justify-between items-center px-4 py-2">
        <Logo />
        <div className="flex space-x-2 items-center">
          <div>
            <Link
              href={`/`}
              className=" text-tert  font-semibold border-[1px] border-tert py-2 px-4 rounded-3xl"
            >
              Sign Up
            </Link>
          </div>
          <div
            onClick={(e) => {
              handleDropdown(e);
            }}
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.00049 7.62207H21.0005"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3.00049 12.6221H21.0005"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3.00049 17.6221H21.0005"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <nav className={`${dropdown ? "block" : "hidden"}`}>
        <NavLinks />
      </nav>
    </>
  );
}
