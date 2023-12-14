import Image from "next/image";
import BtnMain from "../components/BtnMain";
import SearchBar from "../components/SearchBar";
import Card1 from "../components/Card1";

export default function Home() {
  return (
    <main>
      <div className="md:hidden my-5 mx-6">
        <SearchBar />
      </div>
      <section className="flex flex-col gap-10 md:flex-row md:gap-0 items-center mb-12 md:mb-20">
        <div className="text-center md:text-start basis-1/2 relative lg:-mt-14">
          <div className="md:ml-12 lg:ml-20 xl:ml-36 space-y-5 relative z-10">
            <h1 className="text-3xl xl:text-[2.6rem]  xl:leading-[3.6rem] font-bold xl:font-extrabold">
              Find Your <span className="text-tert">Travel Buddy</span> And Make
              Lifelong <span className="text-tert">Memories</span> 🏝️
            </h1>
            <h2 className="text-sm lg:text-lg">
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
          <div className="hidden md:block md:w-24 lg:w-36 xl:w-48 absolute md:-bottom-12 lg:-bottom-20 z-0">
            <Image
              className="w-full h-full"
              src={"/assets/plane.png"}
              width="150"
              height="100"
            />
          </div>
        </div>
        <div className="hidden md:flex basis-1/2 items-center">
          <div className="basis-1/2">
            <Image
              className="h-full w-full"
              src={"/assets/heroA.png"}
              width="500"
              height="500"
            />
          </div>
          <div className="basis-1/2">
            <div className="">
              <Image
                className="w-2/5 h-full mx-auto"
                src={"/assets/kite.png"}
                width="100"
                height="50"
              />
            </div>
            <div className="">
              <Image
                className="w-full h-full"
                src={"/assets/heroBi.png"}
                width="500"
                height="500"
              />
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <Image
            className="w-full h-full"
            src={"/assets/heroMob.png"}
            width="500"
            height="500"
          />
        </div>
      </section>
      <div className="hidden md:flex justify-center mb-20">
        <SearchBar />
      </div>
      <section className="text-sm mx-4 md:mx-12 lg:mx-20 xl:mx-36 lg:flex items-center">
        <div className="basis-1/2 w-full">
          <div className="mb-10">
            <h2 className="text-tert text-lg font-semibold mb-2">
              QUICK GUIDE
            </h2>
            <h3 className="text-3xl xl:text-5xl xl:leading-[3.5rem] font-extrabold text-[#14183E]">
              How to get Started🤙🏻
            </h3>
          </div>
          <div className="space-y-6">
            <Card1
              svgIcon={<p className="text-xl">🔎</p>}
              title="Search for Destination"
              content=" for your destination at the top bar and you will be
              prompted to signup if you don&#39;t have an account"
            />
            <Card1
              svgIcon={<p className="text-xl">✏️</p>}
              title="Login/Sign up "
              content="Login/SIgn up to be able to explore our beautiful destinations and meet amazing travelers"
            />
            <Card1
              svgIcon={<p className="text-xl">😍</p>}
              title="Explore & Connect With Like-Minded"
              content="You can join communities and connect with like minded travelers going towards your destination"
            />
          </div>
        </div>
        <div className="basis-1/2 w-full hidden lg:block"></div>
      </section>
      <section></section>
    </main>
  );
}
