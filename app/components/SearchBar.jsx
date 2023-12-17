"use client";
import { useState } from "react";
import BtnMain from "./BtnMain";
export default function SearchBar({ dummyQuery = "Where are you going to?" }) {
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div
      style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)" }}
      className="px-2 py-1 md:py-2 rounded-[50px] w-full flex items-center justify-center h-12 md:h-14 relative"
    >
      <div className="lg:-ml-4 pr-4">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
            stroke="#FA8443"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z"
            stroke="#FA8443"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <input
        value={query}
        onInput={(e) => {
          setQuery(e.target.value)
          if(e.target.value){
            setShowSearch(true)
          }
        }}
        onBlur={(e)=>{
          if(!e.target.value){
            setShowSearch(false)
          }
        }}
        placeholder={dummyQuery}
        className="w-5/6 focus:outline-none bg-transparent"
      />
      {showSearch && <div className="absolute right-2"><BtnMain url="/dashboard">Search</BtnMain></div>}
    </div>
  );
}
