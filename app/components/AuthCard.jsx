"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthCard() {
  const router = useRouter();
  const [openTab, setOpenTab] = useState(1);
  const [formFilled, setFormFilled] = useState(false);
  const [username, setUsername] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (
      (openTab == 1 && username && passwordNew && email) ||
      (openTab == 2 && email && password)
    ) {
      setFormFilled(true);
    } else {
      setFormFilled(false);
    }
  }, [openTab, username, email, passwordNew, password]);
  //control forms
  //required state to enable button
  const handleInputChange = (e, set) => {
    set(e.target.value);
  };

  const handleSignUp = (e) => {
    if (formFilled) {
      e.preventDefaul();
      console.log(username, passwordNew, email);
    }
  };
  const handleLogin = (e) => {
    e.preventDefaul();
    if (formFilled) {
      console.log(email, password);
    }
  };

  const handleAuth = (e) => {
    e.preventDefault();
    if (openTab == 1) {
      console.log("signup");
      handleSignUp;
    }
    if (openTab == 2) {
      console.log("login");
      handleLogin;
    }
    router.push("/profile-setup");
  };

  return (
    <div className="flex flex-col gap-6 w-full bg-white rounded-3xl p-5 text-sm">
      <div className="hidden md:block w-full rounded-xl overflow-clip">
        <button
          className={`${
            openTab == 1 ? "bg-[#A95629]" : "bg-[#C3C3C3]"
          } w-1/2 py-3 text-white font-semibold`}
          onClick={(e) => {
            setOpenTab(1);
          }}
        >
          Signup
        </button>
        <button
          className={`${
            openTab == 2 ? "bg-[#A95629]" : "bg-[#C3C3C3]"
          } w-1/2 py-3 text-white font-semibold`}
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
        <div className="flex flex-col gap-3 justify-center">
          <button className="w-full py-1.5 md:py-2 border-[1px] rounded-3xl border-prim  flex items-center mx-auto justify-center gap-1">
            <svg
              width="28"
              height="28"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16.5" cy="16.5" r="14" fill="#0C82EE" />
              <path
                d="M21.7137 20.7816L22.3356 16.8301H18.4452V14.267C18.4452 13.1857 18.9877 12.1311 20.7302 12.1311H22.5V8.76699C22.5 8.76699 20.8945 8.5 19.3603 8.5C16.1548 8.5 14.0617 10.3929 14.0617 13.8184V16.8301H10.5V20.7816H14.0617V30.3345C14.7767 30.444 15.5082 30.5 16.2534 30.5C16.9986 30.5 17.7302 30.444 18.4452 30.3345V20.7816H21.7137Z"
                fill="white"
              />
            </svg>
            <p className={`${openTab == 1 ? "block" : "hidden"}`}>
              {" "}
              Sign up with facebook
            </p>
            <p className={`${openTab == 2 ? "block" : "hidden"}`}>
              {" "}
              Continue with facebook
            </p>
          </button>
          <button className="w-full py-1.5 md:py-2 border-[1px] rounded-3xl border-prim flex items-center mx-auto justify-center gap-1">
            <svg
              width="28"
              height="28"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.501 12.7331C22.501 11.8698 22.4296 11.2398 22.2748 10.5864H12.2153V14.483H18.12C18.001 15.4514 17.3582 16.9097 15.9296 17.8897L15.9096 18.0202L19.0902 20.4349L19.3106 20.4564C21.3343 18.6247 22.501 15.9297 22.501 12.7331Z"
                fill="#4285F4"
              />
              <path
                d="M12.214 23.0001C15.1068 23.0001 17.5353 22.0667 19.3092 20.4567L15.9282 17.89C15.0235 18.5083 13.8092 18.94 12.214 18.94C9.38069 18.94 6.97596 17.1083 6.11874 14.5767L5.99309 14.5871L2.68583 17.0955L2.64258 17.2133C4.40446 20.6433 8.0235 23.0001 12.214 23.0001Z"
                fill="#34A853"
              />
              <path
                d="M6.12046 14.5765C5.89428 13.9232 5.76337 13.2231 5.76337 12.4998C5.76337 11.7764 5.89428 11.0765 6.10856 10.4231L6.10257 10.284L2.75386 7.73535L2.64429 7.78642C1.91814 9.20977 1.50146 10.8081 1.50146 12.4998C1.50146 14.1915 1.91814 15.7897 2.64429 17.2131L6.12046 14.5765Z"
                fill="#FBBC05"
              />
              <path
                d="M12.2141 6.05997C14.2259 6.05997 15.583 6.91163 16.3569 7.62335L19.3807 4.73C17.5236 3.03834 15.1069 2 12.2141 2C8.02353 2 4.40447 4.35665 2.64258 7.78662L6.10686 10.4233C6.97598 7.89166 9.38073 6.05997 12.2141 6.05997Z"
                fill="#EB4335"
              />
            </svg>
            <p className={`${openTab == 1 ? "block" : "hidden"}`}>
              {" "}
              Sign up with Google
            </p>
            <p className={`${openTab == 2 ? "block" : "hidden"}`}>
              {" "}
              Continue with Google
            </p>
          </button>
        </div>
        <div className="flex items-center justify-between">
          <hr className="w-2/5 inline-block border-t-[1.5px]" />
          <span>OR</span>
          <hr className="w-2/5 inline-block border-t-[1.5px]" />
        </div>
        <form className="space-y-3 text-black">
          <div>
            <div
              className={` ${
                openTab == 1 ? "block" : "hidden"
              } flex gap-3 mb-3`}
            >
              <div className="w-1/2">
                <label htmlFor="username" className="block text-sec mb-[0.8px]">
                  Username
                </label>
                <input
                  required
                  type="text"
                  value={username}
                  onInput={(e) => {
                    handleInputChange(e, setUsername);
                  }}
                  onFocus={(e) => {
                    handleInputChange(e, setUsername);
                  }}
                  onBlur={(e) => {
                    handleInputChange(e, setUsername);
                  }}
                  id="username"
                  className=" inline-block border-[1px] w-full border-sec h-10 rounded-lg focus:outline-2 focus:outline-tert pl-2"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="passwordNew"
                  className="block text-sec mb-[0.8px]"
                >
                  Password
                </label>
                <input
                  required
                  type="password"
                  value={passwordNew}
                  onInput={(e) => {
                    handleInputChange(e, setPasswordNew);
                  }}
                  onFocus={(e) => {
                    handleInputChange(e, setPasswordNew);
                  }}
                  onBlur={(e) => {
                    handleInputChange(e, setPasswordNew);
                  }}
                  id="passwordNew"
                  className=" inline-block border-[1px] w-full border-sec h-10 rounded-lg focus:outline-2 focus:outline-tert pl-2"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="mb-3">
                <label htmlFor="email" className="block text-sec mb-[0.8px]">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onInput={(e) => {
                    handleInputChange(e, setEmail);
                  }}
                  onFocus={(e) => {
                    handleInputChange(e, setEmail);
                  }}
                  onBlur={(e) => {
                    handleInputChange(e, setEmail);
                  }}
                  id="email"
                  className="w-full border-[1px] border-sec h-10 rounded-lg focus:outline-2 focus:outline-tert pl-2"
                />
              </div>
              <div className={` ${openTab == 2 ? "block" : "hidden"} mb-3`}>
                <label htmlFor="password" className="block text-sec mb-[0.8px]">
                  Password
                </label>
                <input
                  required
                  type="password"
                  value={password}
                  onInput={(e) => {
                    handleInputChange(e, setPassword);
                  }}
                  onFocus={(e) => {
                    handleInputChange(e, setPassword);
                  }}
                  onBlur={(e) => {
                    handleInputChange(e, setPassword);
                  }}
                  id="password"
                  className="w-full border-[1px] border-sec h-10 rounded-lg focus:outline-2 focus:outline-tert pl-2"
                />
              </div>
            </div>
          </div>
          {/* ${formFilled? "opacity-60" : "opacity-100"}`} */}
          {formFilled ? (
            <button
              className="bg-tert w-full py-3 rounded-3xl text-white opacity-100"
              onClick={(e) => {
                handleAuth(e);
              }}
            >
              Continue
            </button>
          ) : (
            <button
              className="bg-tert w-full py-3 rounded-3xl text-white opacity-60"
              disabled
            >
              Continue
            </button>
          )}
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
        Don&#39;t have an account with Travel Buddy?
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
