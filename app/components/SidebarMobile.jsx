"use client";
import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";
import Flagdropdown from "./Flagdropdown";

//API getUsers
// 1. get destination country for the flag
// 2. get dp
let destinationCountry = { value: "ng", label: "Nigeria" };
let dp = "/assets/dp.png";

function Bullet() {
  return <div className="w-1.5 h-12 rounded-sm bg-tert"></div>;
}

export default function SidebarMobile() {
  const segment = useSelectedLayoutSegment();
  const [SidebarIsOpen, setSidebarIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(destinationCountry);

  return (
    <div className="relative">
      <nav className="flex items-center justify-between px-4 py-10 h-16">
        <div
          onClick={(e) => {
            setSidebarIsOpen(true);
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
              d="M3 7.62207H21"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3 12.6221H21"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3 17.6221H21"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <Logo />
        <div className="flex  items-center">
          {/* <div className="">
            <Flagdropdown
              getSelectedOption={{
                selectedOption, setSelectedOption
              }}
            />
          </div> */}
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              className="!w-full !h-full rounded-full"
              src={`${dp}`}
              width="2500"
              height="2500"
            />
          </div>
        </div>
      </nav>
      <nav
        className={`${
          SidebarIsOpen
            ? "flex bg-white w-[45%] fixed z-20 h-screen flex-col text-base top-0"
            : "hidden"
        }`}
      >
        <div className="flex pl-7 pr-4 my-4 items-center justify-between">
          <div className="font-extrabold text-xl text-black ">Menu</div>
          <div
            onClick={(e) => {
              setSidebarIsOpen(false);
            }}
          >
            <svg
              className=""
              width="33"
              height="32"
              viewBox="0 0 24 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7128 15.8958L7.22748 8.16611C6.93757 7.90201 6.93757 7.464 7.22748 7.1999C7.5174 6.9358 7.99823 6.9358 8.28814 7.1999L16.7734 14.9296C17.0633 15.1937 17.0633 15.6317 16.7734 15.8958C16.4835 16.1599 16.0027 16.1599 15.7128 15.8958Z"
                fill="#979797"
              />
              <path
                d="M7.22658 15.8958C6.93666 15.6317 6.93666 15.1937 7.22658 14.9296L15.7119 7.1999C16.0018 6.9358 16.4826 6.9358 16.7725 7.1999C17.0624 7.464 17.0624 7.90201 16.7725 8.16611L8.28724 15.8958C7.99732 16.1599 7.51649 16.1599 7.22658 15.8958Z"
                fill="#979797"
              />
            </svg>
          </div>
        </div>

        <ul className="flex flex-col h-fit mb-10 items-start text-sm">
          <li
            className="w-full"
            onClick={(e) => {
              setSidebarIsOpen(false);
            }}
          >
            <Link href={"/dashboard"}>
              <div
                className={`${
                  segment == "dashboard" ? "bg-[#FFF2EB]" : "bg-transparent"
                } flex items-center gap-5`}
              >
                <div
                  className={`${
                    segment == "dashboard" ? "visible" : "invisible"
                  }`}
                >
                  <Bullet />
                </div>
                <div className="flex gap-2 py-3">
                  <svg
                    className={`stroke-[#292D32] stroke-[1.5] ${
                      segment == "dashboard" ? "fill-tert stroke-tert" : ""
                    }`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_334_3527)">
                      <path
                        d="M20.9296 6.062L14.8928 1.82785C13.2523 0.674071 10.7224 0.732298 9.14 1.96504L3.87324 6.07187C2.81831 6.89304 2 8.56498 2 9.89445V17.1399C2 18.4268 2.51021 19.6612 3.41859 20.5718C4.32696 21.4825 5.55924 21.995 6.84479 21.9968H18.1552C19.4392 21.9955 20.6703 21.4845 21.5785 20.5759C22.4867 19.6672 22.9979 18.4351 23 17.1497V10.0316C23 8.61335 22.092 6.8733 20.9296 6.062ZM17.6277 14.4316C17.6275 15.404 17.2415 16.3364 16.5547 17.024C15.8679 17.7116 14.9364 18.098 13.9651 18.0982H11.0349C10.0636 18.098 9.13214 17.7116 8.44532 17.024C7.75849 16.3364 7.37252 15.404 7.37225 14.4316V11.4983C7.37252 10.5259 7.75849 9.59345 8.44532 8.90588C9.13214 8.21831 10.0636 7.83192 11.0349 7.83165H13.9651C14.9364 7.83192 15.8679 8.21831 16.5547 8.90588C17.2415 9.59345 17.6275 10.5259 17.6277 11.4983V14.4316Z"
                        fill=""
                      />
                      <path
                        d="M13.9649 7.83203H11.0347C9.01191 7.83203 7.37207 9.47364 7.37207 11.4987V14.432C7.37207 16.457 9.01191 18.0986 11.0347 18.0986H13.9649C15.9877 18.0986 17.6276 16.457 17.6276 14.432V11.4987C17.6276 9.47364 15.9877 7.83203 13.9649 7.83203Z"
                        fill="none"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_334_3527">
                        <rect
                          width="21"
                          height="21"
                          fill="white"
                          transform="translate(2 1)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <span
                    className={`${
                      segment == "dashboard" ? "text-tert font-black" : ""
                    }`}
                  >
                    Home
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li
            className="w-full"
            onClick={(e) => {
              setSidebarIsOpen(false);
            }}
          >
            <Link href={"/chat"}>
              <div
                className={`${
                  segment == "chat" ? "bg-[#FFF2EB]" : "bg-transparent"
                } flex items-center gap-5`}
              >
                <div
                  className={`${segment == "chat" ? "visible" : "invisible"}`}
                >
                  <Bullet />
                </div>
                <div className="flex gap-2 py-3">
                  <svg
                    className={`fill-[#292D32] ${
                      segment == "chat" ? "fill-tert stroke-tert" : ""
                    }`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22.81C11.31 22.81 10.66 22.46 10.2 21.85L8.7 19.85C8.67 19.81 8.55 19.76 8.5 19.75H8C3.83 19.75 1.25 18.62 1.25 13V8C1.25 3.58 3.58 1.25 8 1.25H16C20.42 1.25 22.75 3.58 22.75 8V13C22.75 17.42 20.42 19.75 16 19.75H15.5C15.42 19.75 15.35 19.79 15.3 19.85L13.8 21.85C13.34 22.46 12.69 22.81 12 22.81ZM8 2.75C4.42 2.75 2.75 4.42 2.75 8V13C2.75 17.52 4.3 18.25 8 18.25H8.5C9.01 18.25 9.59 18.54 9.9 18.95L11.4 20.95C11.75 21.41 12.25 21.41 12.6 20.95L14.1 18.95C14.43 18.51 14.95 18.25 15.5 18.25H16C19.58 18.25 21.25 16.58 21.25 13V8C21.25 4.42 19.58 2.75 16 2.75H8Z"
                      fill=""
                    />
                    <path
                      d="M12 12C11.44 12 11 11.55 11 11C11 10.45 11.45 10 12 10C12.55 10 13 10.45 13 11C13 11.55 12.56 12 12 12Z"
                      fill=""
                    />
                    <path
                      d="M16 12C15.44 12 15 11.55 15 11C15 10.45 15.45 10 16 10C16.55 10 17 10.45 17 11C17 11.55 16.56 12 16 12Z"
                      fill=""
                    />
                    <path
                      d="M8 12C7.44 12 7 11.55 7 11C7 10.45 7.45 10 8 10C8.55 10 9 10.45 9 11C9 11.55 8.56 12 8 12Z"
                      fill=""
                    />
                  </svg>
                  <span
                    className={`${
                      segment == "chat" ? "text-tert font-black" : ""
                    }`}
                  >
                    Message
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li
            className="w-full"
            onClick={(e) => {
              setSidebarIsOpen(false);
            }}
          >
            <Link href={"/notification"}>
              <div
                className={`${
                  segment == "notification" ? "bg-[#FFF2EB]" : "bg-transparent"
                } flex items-center gap-5`}
              >
                <div
                  className={`${
                    segment == "notification" ? "visible" : "invisible"
                  }`}
                >
                  <Bullet />
                </div>
                <div className="flex gap-2 py-3">
                  <svg
                    className={`fill-[#292D32] ${
                      segment == "notification" ? "fill-tert stroke-tert" : ""
                    }`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 10.5199C11.59 10.5199 11.25 10.1799 11.25 9.76994V6.43994C11.25 6.02994 11.59 5.68994 12 5.68994C12.41 5.68994 12.75 6.02994 12.75 6.43994V9.76994C12.75 10.1899 12.41 10.5199 12 10.5199Z"
                      fill=""
                    />
                    <path
                      d="M12.0199 20.3502C9.43987 20.3502 6.86987 19.9402 4.41987 19.1202C3.50987 18.8202 2.81987 18.1702 2.51987 17.3502C2.21987 16.5302 2.31987 15.5902 2.80987 14.7702L4.07987 12.6502C4.35987 12.1802 4.60987 11.3002 4.60987 10.7502V8.65023C4.60987 4.56023 7.92987 1.24023 12.0199 1.24023C16.1099 1.24023 19.4299 4.56023 19.4299 8.65023V10.7502C19.4299 11.2902 19.6799 12.1802 19.9599 12.6502L21.2299 14.7702C21.6999 15.5502 21.7799 16.4802 21.4699 17.3302C21.1599 18.1802 20.4799 18.8302 19.6199 19.1202C17.1699 19.9502 14.5999 20.3502 12.0199 20.3502ZM12.0199 2.75023C8.75987 2.75023 6.10987 5.40023 6.10987 8.66023V10.7602C6.10987 11.5702 5.78987 12.7402 5.36987 13.4302L4.09987 15.5602C3.83987 15.9902 3.77987 16.4502 3.92987 16.8502C4.07987 17.2502 4.41987 17.5502 4.89987 17.7102C9.49987 19.2402 14.5599 19.2402 19.1599 17.7102C19.5899 17.5702 19.9199 17.2502 20.0699 16.8302C20.2299 16.4102 20.1799 15.9502 19.9499 15.5602L18.6799 13.4402C18.2599 12.7502 17.9399 11.5802 17.9399 10.7702V8.67023C17.9299 5.40023 15.2799 2.75023 12.0199 2.75023Z"
                      fill=""
                    />
                    <path
                      d="M11.9999 22.8998C10.9299 22.8998 9.87992 22.4598 9.11992 21.6998C8.35992 20.9398 7.91992 19.8898 7.91992 18.8198H9.41992C9.41992 19.4998 9.69992 20.1598 10.1799 20.6398C10.6599 21.1198 11.3199 21.3998 11.9999 21.3998C13.4199 21.3998 14.5799 20.2398 14.5799 18.8198H16.0799C16.0799 21.0698 14.2499 22.8998 11.9999 22.8998Z"
                      fill=""
                    />
                  </svg>
                  <span
                    className={`${
                      segment == "notification" ? "text-tert font-black" : ""
                    }`}
                  >
                    Notification
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li
            className="w-full"
            onClick={(e) => {
              setSidebarIsOpen(false);
            }}
          >
            <Link href={"/setting"}>
              <div
                className={`${
                  segment == "setting" ? "bg-[#FFF2EB]" : "bg-transparent"
                } flex items-center gap-5`}
              >
                <div
                  className={`${
                    segment == "setting" ? "visible" : "invisible"
                  }`}
                >
                  <Bullet />
                </div>
                <div className="flex gap-2 py-3">
                  <svg
                    className={`stroke-[#292D32] ${
                      segment == "setting" ? " stroke-tert" : ""
                    }`}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
                      stroke=""
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
                      stroke=""
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
                      stroke=""
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
                      stroke=""
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className={`${
                      segment == "setting" ? "text-tert font-black" : ""
                    }`}
                  >
                    Setting
                  </span>
                </div>
              </div>
            </Link>
          </li>
        </ul>
        <div className="mt-auto">
          <div className="mx-2 border-2 border-[#F4F5F7] shadow-md rounded-lg mb-10">
            <div className="flex  px-1 py-2">
              <svg
                className="mr-1"
                width="28"
                height="38"
                viewBox="0 0 34 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M16.6244 39.7886C16.6244 40.2346 16.9861 40.5963 17.4321 40.5963C17.8782 40.5963 18.2398 40.2346 18.2398 39.7886L16.6244 39.7886ZM16.6244 18.7886L16.6244 39.7886L18.2398 39.7886L18.2398 18.7886L16.6244 18.7886Z"
                  fill="#37374E"
                />
                <g filter="url(#filter0_d_710_1651)">
                  <circle cx="16.9321" cy="15.7114" r="9.5" fill="#FA8443" />
                </g>
                <circle cx="16.9321" cy="15.5" r="4.5" fill="white" />
                <defs>
                  <filter
                    id="filter0_d_710_1651"
                    x="0.432129"
                    y="0.211426"
                    width="33"
                    height="33"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="1"
                      operator="dilate"
                      in="SourceAlpha"
                      result="effect1_dropShadow_710_1651"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.215686 0 0 0 0 0.215686 0 0 0 0 0.305882 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_710_1651"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_710_1651"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="space-y-1.5">
                <span className="w-full block text-xs">Current Location</span>
                <span className="w-full block font-semibold text-sm">
                  Nigeria
                </span>
              </div>
            </div>
            <div className="flex bg-[#F4F5F7] px-1 py-2">
              <svg
                className="mr-1"
                width="28"
                height="38"
                viewBox="0 0 35 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_711_1665)">
                  <path
                    d="M25.8672 15.45C24.8172 10.83 20.7872 8.75 17.2472 8.75C17.2472 8.75 17.2472 8.75 17.2372 8.75C13.7072 8.75 9.66717 10.82 8.61717 15.44C7.44717 20.6 10.6072 24.97 13.4672 27.72C14.5272 28.74 15.8872 29.25 17.2472 29.25C18.6072 29.25 19.9672 28.74 21.0172 27.72C23.8772 24.97 27.0372 20.61 25.8672 15.45ZM17.2472 20.46C15.5072 20.46 14.0972 19.05 14.0972 17.31C14.0972 15.57 15.5072 14.16 17.2472 14.16C18.9872 14.16 20.3972 15.57 20.3972 17.31C20.3972 19.05 18.9872 20.46 17.2472 20.46Z"
                    fill="#FA8443"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_711_1665"
                    x="0.367188"
                    y="0.75"
                    width="33.75"
                    height="36.5"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.215686 0 0 0 0 0.215686 0 0 0 0 0.305882 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_711_1665"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_711_1665"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="space-y-1.5">
                <span className="w-full block text-xs">Destination</span>
                <span className="w-full block font-semibold text-sm">
                  South Africa
                </span>
              </div>
            </div>
          </div>
          <div className="mt-auto mb-12 w-fit pl-7">
            <Link href={"/dashboard"}>
              <div className="flex gap-2">
                <svg
                  className="fill-[#292D32]"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.24 22.27H15.11C10.67 22.27 8.53002 20.52 8.16002 16.6C8.12002 16.19 8.42002 15.82 8.84002 15.78C9.24002 15.74 9.62002 16.05 9.66002 16.46C9.95002 19.6 11.43 20.77 15.12 20.77H15.25C19.32 20.77 20.76 19.33 20.76 15.26V8.73998C20.76 4.66998 19.32 3.22998 15.25 3.22998H15.12C11.41 3.22998 9.93002 4.41998 9.66002 7.61998C9.61002 8.02998 9.26002 8.33998 8.84002 8.29998C8.42002 8.26998 8.12001 7.89998 8.15001 7.48998C8.49001 3.50998 10.64 1.72998 15.11 1.72998H15.24C20.15 1.72998 22.25 3.82998 22.25 8.73998V15.26C22.25 20.17 20.15 22.27 15.24 22.27Z"
                    fill=""
                  />
                  <path
                    d="M15.0001 12.75H3.62012C3.21012 12.75 2.87012 12.41 2.87012 12C2.87012 11.59 3.21012 11.25 3.62012 11.25H15.0001C15.4101 11.25 15.7501 11.59 15.7501 12C15.7501 12.41 15.4101 12.75 15.0001 12.75Z"
                    fill=""
                  />
                  <path
                    d="M5.84994 16.0998C5.65994 16.0998 5.46994 16.0298 5.31994 15.8798L1.96994 12.5298C1.67994 12.2398 1.67994 11.7598 1.96994 11.4698L5.31994 8.11984C5.60994 7.82984 6.08994 7.82984 6.37994 8.11984C6.66994 8.40984 6.66994 8.88984 6.37994 9.17984L3.55994 11.9998L6.37994 14.8198C6.66994 15.1098 6.66994 15.5898 6.37994 15.8798C6.23994 16.0298 6.03994 16.0998 5.84994 16.0998Z"
                    fill=""
                  />
                </svg>
                <span>Logout</span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
