"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function DpModal({
  dp = { url: "/img/user-profile/dp2.png", visibility: true },
  isProfileOwner = true,
  username = "Azubuike Duru",
}) {
  const [selectedImage, setSelectedImage] = useState(dp.url);
  const [savedVisibility, setSavedVisibility] = useState(dp.visibility);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    // Update coverImg immediately on the client
    if (file) {
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
    // send uploaded file to server here
    }
  };

  const deleteDpImg = () => {
    setSelectedImage("");
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="absolute bottom-0 left-8 z-30 flex h-36 w-36 items-center justify-center overflow-clip rounded-full bg-gradient-to-tr from-[#E94E1B] to-[#F9B233] ">
          {/* <Image
            className="h-[136px] w-[136px] rounded-full object-cover"
            src={`${selectedImage}`}
            height={500}
            width={500}
            alt="Profile Photo"
          /> */}
          {isProfileOwner && (
            <Avatar className="h-[136px] w-[136px] rounded-full object-cover">
              <AvatarImage src={`${selectedImage}`} />
              <AvatarFallback className="text-5xl font-medium">
                {username.split(" ")[0][0]}
                {username.split(" ")[1][0]}
              </AvatarFallback>
            </Avatar>
          )}
          {!isProfileOwner && (
            <Avatar className="h-[136px] w-[136px] rounded-full object-cover">
              <AvatarImage src={savedVisibility ? `${selectedImage}` : ""} />
              <AvatarFallback className="text-5xl font-medium">
                {username.split(" ")[0][0]}
                {username.split(" ")[1][0]}
              </AvatarFallback>
            </Avatar>
          )}
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl ">
        <DialogHeader>
          <DialogTitle>
            <h3 className="mb-6">Profile Picture</h3>
            <hr className="-mx-6" />
          </DialogTitle>
          <DialogDescription>
            <div className="">
              <div className="mx-auto my-1 h-72 w-72 overflow-clip rounded-full">
                {/* <Image
                  className="w-full object-cover"
                  src={`${selectedImage}`}
                  height={2500}
                  width={2500}
                  alt="Profile Photo"
                /> */}
                {isProfileOwner && (
                  <Avatar className="h-72 w-72 object-cover">
                    <AvatarImage
                    src={`${selectedImage}`}
                    />
                    <AvatarFallback className="text-5xl font-medium">
                      {username.split(" ")[0][0]}
                      {username.split(" ")[1][0]}
                    </AvatarFallback>
                  </Avatar>
                )}
                {!isProfileOwner && (
                  <Avatar className="h-72 w-72 object-cover">
                    <AvatarImage src={savedVisibility ? `${selectedImage}` : ""}  />
                    <AvatarFallback className="text-5xl font-medium">
                      {username.split(" ")[0][0]}
                      {username.split(" ")[1][0]}
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
              {/* user only */}
              {isProfileOwner && (
                <>    
                  <hr className="-mx-6 mt-2" />
                  <div className="flex justify-between pt-3">
                    <div className="relative flex cursor-pointer flex-col items-center justify-center">
                      <svg
                        className="cursor-pointer"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.45021 27.5H21.5502C25.0002 27.5 26.3752 25.3875 26.5377 22.8125L27.1877 12.4875C27.3627 9.7875 25.2127 7.5 22.5002 7.5C21.7377 7.5 21.0377 7.0625 20.6877 6.3875L19.7877 4.575C19.2127 3.4375 17.7127 2.5 16.4377 2.5H13.5752C12.2877 2.5 10.7877 3.4375 10.2127 4.575L9.31271 6.3875C8.96271 7.0625 8.26271 7.5 7.50021 7.5C4.78771 7.5 2.63771 9.7875 2.81271 12.4875L3.46271 22.8125C3.61271 25.3875 5.00021 27.5 8.45021 27.5Z"
                          stroke="#8488AA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.125 10H16.875"
                          stroke="#8488AA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15 22.5C17.2375 22.5 19.0625 20.675 19.0625 18.4375C19.0625 16.2 17.2375 14.375 15 14.375C12.7625 14.375 10.9375 16.2 10.9375 18.4375C10.9375 20.675 12.7625 22.5 15 22.5Z"
                          stroke="#8488AA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="cursor-pointer font-medium text-bay-of-many">
                        Add Photo
                      </span>
                      <div className="cursor-pointer">
                        <input
                          type="file"
                          onChange={handleFileChange}
                          multiple={false}
                          className="absolute right-0 top-0 h-full w-full cursor-pointer opacity-0"
                        />
                      </div>
                    </div>
                    <div
                      onClick={deleteDpImg}
                      className=" flex cursor-pointer flex-col items-center justify-center"
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M26.25 7.47461C22.0875 7.06211 17.9 6.84961 13.725 6.84961C11.25 6.84961 8.775 6.97461 6.3 7.22461L3.75 7.47461"
                          stroke="#8488AA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.625 6.2125L10.9 4.575C11.1 3.3875 11.25 2.5 13.3625 2.5H16.6375C18.75 2.5 18.9125 3.4375 19.1 4.5875L19.375 6.2125"
                          stroke="#8488AA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M23.5625 11.4258L22.75 24.0133C22.6125 25.9758 22.5 27.5008 19.0125 27.5008H10.9875C7.5 27.5008 7.3875 25.9758 7.25 24.0133L6.4375 11.4258"
                          stroke="#8488AA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.9126 20.625H17.0751"
                          stroke="#8488AA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.875 15.625H18.125"
                          stroke="#8488AA"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="font-medium text-bay-of-many">Delete</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
