import Image from "next/image";
import BtnMain from "../components/BtnMain";
import SearchBarDummy from "../components/SearchBarDummy";
import Card1 from "../components/Card1";
import Hero2Card from "../components/Hero2Card";
import ReviewCard from "../components/ReviewCard";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <div className="md:hidden my-5 mx-6">
        <SearchBarDummy />
      </div>
      <section className="flex flex-col gap-10 md:flex-row md:gap-0 items-center mb-14 md:mb-20">
        <div className="text-center md:text-start basis-1/2 relative lg:-mt-14">
          <div className="md:ml-12 lg:ml-20 xl:ml-36 space-y-5 relative z-10">
            <h1 className="text-3xl xl:text-[2.6rem]  xl:leading-[3.6rem] font-bold xl:font-extrabold">
              Find Your <span className="text-tert">Travel Buddy</span> And Make
              Lifelong <span className="text-tert">Memories</span> 🏝️
            </h1>
            <h2 className="text-sm w-4/5 mx-auto lg:text-lg md:mx-0 md:full ">
              Discover and connect with fellow travelers and create timeless
              journeys together
            </h2>
            <div className="flex items-center gap-x-8 md:gap-x-8 justify-center md:justify-start">
              <BtnMain url={"/auth"}>
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
          <div className="hidden md:block md:w-28 lg:w-36 xl:w-48 absolute md:-bottom-12 lg:-bottom-20 z-0">
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
        <div className="md:hidden w-full">
          <Image
            className="w-full h-full"
            src={"/assets/heroMob.png"}
            width="500"
            height="500"
          />
        </div>
      </section>
      <div className="hidden md:flex justify-center mb-14 md:mb-20 mx-auto md:w-3/5 lg:w-1/2">
        <SearchBarDummy />
      </div>
      <section className="text-sm mx-4 md:ml-12 lg:ml-20 xl:ml-36 md:flex overflow-hidden items-center mb-14 md:mb-20 gap-5">
        <div className="basis-1/2 w-full">
          <div className="mb-8 md:mb-10">
            <h2 className="text-tert text-lg font-semibold mb-2">
              QUICK GUIDE
            </h2>
            <h3 className="text-2xl md:text-3xl xl:text-5xl xl:leading-[3.5rem] font-extrabold text-[#14183E]">
              How to get Started🤙🏻
            </h3>
          </div>
          <div className="space-y-6">
            <Card1
              svgIcon={<p className="text-xl">🔎</p>}
              title="Search for Destination"
              content="Search for your destination at the top bar and you will be
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
        <div className="basis-1/2 w-full hidden md:flex justify-center">
          <div className="scale-75 lg:scale-[0.8] origin-left">
            <Hero2Card />
          </div>
        </div>
      </section>
      <section className="text-sm mx-4 md:mx-12 lg:mx-20 xl:mx-36 items-center mb-14 md:mb-20">
        <div className="mb-8 md:mb-10 md:text-center w-full">
          <h2 className="text-tert text-lg font-semibold mb-2">TESTIMONIAL</h2>
          <h3 className="text-2xl md:text-3xl xl:text-5xl xl:leading-[3.5rem] font-extrabold text-[#14183E]">
            💬 What Others Are Saying
          </h3>
          <p className="md:w-4/6 md:mx-auto mt-2.5 md:mt-5 ">
            Real adventures, genuine connections, and authentic testimonials
            from the heart of the journey.
            <span className="hidden md:inline">
              Join the community and let the world hear your travel tales!
            </span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:mt-20">
          <div className=" px-4 md:px-0">
            <ReviewCard
              dp={
                <Image
                  className="w-24 h-24 object-cover"
                  src="/assets/cover.png"
                  width="100"
                  height="200"
                />
              }
              content="With the help of this travel buddy website, I met someone who shared my passion for adventure."
              name="Henry Agu"
              rating={4}
            />
          </div>
          <div className="md:scale-x-[1.1] md:scale-y-[1.2] px-4 md:px-0">
            <ReviewCard
              dp={
                <Image
                  className="w-24 h-24 object-cover"
                  src="/assets/cover1.png"
                  width="100"
                  height="200"
                />
              }
              content="I connected with an amazing travel buddy who had similar interests, and together we experienced the rich culture of Europe"
              name="Siemeo Smith"
              rating={5}
            />
          </div>
          <div className="px-4 md:px-0 hidden md:block">
            <ReviewCard
              dp={
                <Image
                  className="w-24 h-24 object-cover"
                  src="/assets/cover2.png"
                  width="100"
                  height="200"
                />
              }
              content="I was a bit hesitant about traveling alone, but I made a lifelong friend traveling. Highly recommended"
              name="Patrick Duru"
              rating={5}
            />
          </div>
        </div>
      </section>
      <>
        <Navbar />
      </>
    </main>
  );
}
