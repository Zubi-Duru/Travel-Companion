"use client";

import { useState} from "react";
import CoverImg from "./CoverSection/CoverImage";
import DpModal from "./CoverSection/DpModal";

export default function CoverSection({
  dp = { url: "/assets/friend1.png", visibility: true },
  coverImgUrl = "/assets/coverImg.png",
  isProfileOwner = true,
  username = "Azubuike Duru",
}) {
  const [selectedImage, setSelectedImage] = useState(coverImgUrl);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    // Update coverImg immediately on the client
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      // send uploaded file to server here
    }
  };

  const deleteCoverImg = () => {
    setSelectedImage("/img/user-profile/defaultGallery.png");
  };

  return (
    <div className="relative  mb-1 h-2/5 w-full rounded-2xl">
      <CoverImg coverImgUrl={selectedImage} />

      {/* user only */}
      {isProfileOwner && (
        <div className="absolute bottom-8 right-2 rounded-full bg-white p-1 gap-0">
          <svg
            className="ml-auto cursor-pointer w-10 h-10 rounded-full"
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="17.5" cy="17.5" r="17.5" fill="" />
            <path
              d="M14.5066 24.6673H21.4933C23.3333 24.6673 24.0666 23.5407 24.1533 22.1673L24.4999 16.6607C24.5933 15.2207 23.4466 14.0007 21.9999 14.0007C21.5933 14.0007 21.2199 13.7673 21.0333 13.4073L20.5533 12.4407C20.2466 11.834 19.4466 11.334 18.7666 11.334H17.2399C16.5533 11.334 15.7533 11.834 15.4466 12.4407L14.9666 13.4073C14.7799 13.7673 14.4066 14.0007 13.9999 14.0007C12.5533 14.0007 11.4066 15.2207 11.4999 16.6607L11.8466 22.1673C11.9266 23.5407 12.6666 24.6673 14.5066 24.6673Z"
              stroke="#8488AA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 15.334H19"
              stroke="#8488AA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 21.9993C19.1934 21.9993 20.1667 21.026 20.1667 19.8327C20.1667 18.6393 19.1934 17.666 18 17.666C16.8067 17.666 15.8334 18.6393 15.8334 19.8327C15.8334 21.026 16.8067 21.9993 18 21.9993Z"
              stroke="#8488AA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="cursor-pointer">
            <input
              type="file"
              onChange={handleFileChange}
              multiple={false}
              className="absolute right-1/3 w-6 cursor-pointer top-1/3 h-full opacity-0"
            />
          </div>
        </div>
      )}

      <DpModal dp={dp} isProfileOwner={isProfileOwner} username={username} />
    </div>
  );
}
