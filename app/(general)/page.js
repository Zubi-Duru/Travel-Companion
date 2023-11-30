import Image from "next/image";
import BtnMain from "../components/BtnMain";
import SearchBar from "../components/SearchBar";
export default function Home() {
  return (
    <main>
      <section className="mt-5 mx-4 mb-20 flex gap-y-10 text-center md:text-left flex-wrap items-center md:gap-0 md:gap-x-3 md:mx-10 md:flex-nowrap lg:grid lg:grid-cols-12 lg:grid-rows-[10] lg:gap-x-3 lg:mx-0 lg:mt-0">
        <div className="flex md:hidden justify-center w-full">
          <SearchBar />
        </div>
        <div className="hidden lg:block row-start-[8] xl:row-start-[7] row-end-[11] col-start-[1] col-end-[3] w-4/5">
          <Image
            className="w-full"
            src={"/assets/plane.png"}
            width="100"
            height="100"
          />
        </div>
        <div className=" md:l-5 lg:pl-20 xl:pl-28 row-start-[2] row-end-[10] col-start-[1] col-end-[7] flex flex-col gap-4 md:gap-6">
          <h1 className="text-3xl xl:text-5xl  xl:leading-[3.5rem] font-extrabold">
            Find Your <span className="text-tert">Travel Buddy</span> And Make
            Lifelong <span className="text-tert">Memories</span> 🏝️
          </h1>
          <p className="text-base md:text-lg">
            Discover and connect with fellow travelers and create timeless
            journeys together
          </p>
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
        <div className="hidden lg:block row-start-[2] row-end-[10] col-start-[7] col-end-[10]">
          <div>
            <Image
              className="h-full w-full"
              src={"/assets/heroA.png"}
              width="500"
              height="500"
            />
          </div>
        </div>
        <div className="hidden lg:block row-start-[1] row-end-[3] col-start-[10] col-end-[13] lg:-mb-6 xl:-mb-3 mx-auto">
          <Image
            className=""
            src={"/assets/kite.png"}
            width="100"
            height="100"
          />
        </div>
        <div className="row-start-[3] row-end-[11] col-start-[10] col-end-[13] rounded-3xl overflow-clip">
          <Image
            className="w-full h-full"
            src={"/assets/heroBi.png"}
            width="1000"
            height="1000"
          />
        </div>
      </section>
      <div className="hidden md:flex justify-center mb-20">
        <SearchBar />
      </div>
      <section>
        <div></div>
        <div></div>
      </section>
      <section>
        <div></div>
        <div></div>
      </section>
    </main>
  );
}
