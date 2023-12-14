import React from "react";

export default function formerHero() {
  return (
    <>
      <section className="">
        <div className="flex md:hidden justify-center w-full">
          <SearchBar />
        </div>
        <div className="hidden lg:block row-start-[8] xl:row-start-[7] row-end-[11] col-start-[1] col-end-[3] ">
          <Image
            className="w-full"
            src={"/assets/plane.png"}
            width="150"
            height="100"
          />
        </div>
        <div className="md:basis-1/2 w-full md:l-5 lg:pl-20 xl:pl-36 row-start-[1] row-end-[10] col-start-[1] col-end-[5] flex flex-col gap-6">
          <h1 className="text-3xl xl:text-[2.6rem]  xl:leading-[3.6rem] font-bold xl:font-extrabold">
            Find Your <span className="text-tert">Travel Buddy</span> And Make
            Lifelong <span className="text-tert">Memories</span> 🏝️
          </h1>
          <h2 className="text-sm md:text-lg">
            Discover and connect with fellow travelers and create timeless
            journeys together
          </h2>
          <div className="flex items-center gap-x-8 md:gap-x-8 justify-center md:justify-start">
            <BtnMain url={"/"}>
              Get Started
              <svg
                className="rotate-180 stroke-white inline ml-2"
                width="15"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.57 5.92969L3.5 11.9997L9.57 18.0697"
                  stroke=""
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.4999 12H3.66992"
                  stroke=""
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </BtnMain>
            <div className="flex items-center space-x-3">
              <div className="shadow-xl rounded-full w-10 h-10 p-2 flex justify-center items-center border-[1px] border-[#FBB040]">
                <svg
                  className="ml-1"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.1729 7.14401L0.841121 14.2637L0.841122 0.0242767L13.1729 7.14401Z"
                    fill="#FBB040"
                  />
                </svg>
              </div>
              <span>Play Demo</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:block row-start-[2] row-end-[10] col-start-[5] col-end-[8]">
          <div>
            <Image
              className="h-full w-full"
              src={"/assets/heroA.png"}
              width="500"
              height="500"
            />
          </div>
        </div>

        <div className="hidden lg:block row-start-[1] row-end-[3] col-start-[8] col-end-[11]  mx-auto">
          <Image
            className=""
            src={"/assets/kite.png"}
            width="135"
            height="100"
          />
        </div>
        <div className="md:basis-1/2 w-full row-start-[3] row-end-[11] col-start-[8] col-end-[11] ">
          <div className="inline-block md:hidden mx-auto ">
            <Image
              className=""
              src={"/assets/kite.png"}
              width="100"
              height="100"
            />
          </div>
          <div className="rounded-3xl overflow-clip -mt-10 md:mt-0 h-full">
            <Image
              className="hidden lg:block w-full h-full lg:-mt-8 xl:-mt-5"
              src={"/assets/heroBi.png"}
              width="1000"
              height="2000"
            />
          </div>
          <div className="lg:hidden rounded-3xl overflow-clip -mt-10 md:mt-0 h-full">
            <Image
              className="w-full h-full"
              src={"/assets/heroMob.png"}
              width="1000"
              height="2000"
            />
          </div>
        </div>
      </section>
      <div className="hidden md:flex justify-center mb-20">
        <SearchBar />
      </div>
    </>
  );
}
