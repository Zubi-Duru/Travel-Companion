import Image from "next/image";
import BtnMain from "../components/BtnMain";
export default function Home() {
  return (
    <main>
      <section className="grid grid-cols-12 grid-rows-[10] gap-x-3 mb-20">
        <div className="row-start-[8] xl:row-start-[7] row-end-[11] col-start-[1] col-end-[3] w-4/5">
          <Image
            className="w-full"
            src={"/assets/plane.png"}
            width="100"
            height="100"
          />
        </div>
        <div className="md:l-5 lg:pl-20 xl:pl-28 row-start-[2] row-end-[10] col-start-[1] col-end-[7] flex flex-col gap-6">
          <h1 className="text-5xl leading-[3.5rem] font-extrabold">
            Find Your <span className="text-tert">Travel Buddy</span> And Make
            Lifelong <span className="text-tert">Memories</span> 🏝️
          </h1>
          <p className="text-lg">
            Discover and connect with fellow travelers and create timeless
            journeys together
          </p>
          <div className="flex items-center gap-x-5">
            <BtnMain url={"/"}>
              Get Started
              <svg
                className="rotate-180 stroke-white inline ml-2"
                width="24"
                height="24"
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
            <div className="rounded-full w-10 h-10 p-2 flex justify-center items-center border-2 border-[#FBB040]">
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
        <div className="row-start-[2] row-end-[10] col-start-[7] col-end-[10]">
          <div>
            <Image
              className="h-full w-full"
              src={"/assets/heroA.png"}
              width="500"
              height="500"
            />
          </div>
        </div>
        <div className="row-start-[1] row-end-[3] col-start-[10] col-end-[13] mx-auto">
          <Image
            className=""
            src={"/assets/kite.png"}
            width="100"
            height="100"
          />
        </div>
        <div  className="row-start-[3] row-end-[11] col-start-[10] col-end-[13]">
          <Image
            className="w-full h-full"
            src={"/assets/heroBi.png"}
            width="1000"
            height="1000"
          />
        </div>
      </section>
      <div className="flex justify-center mb-20">
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
