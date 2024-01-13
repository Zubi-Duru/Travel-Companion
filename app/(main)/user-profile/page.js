import CoverSection from "@/app/components/CoverSection";
import BtnMain from "@/app/components/general/BtnMain";
import BtnSec from "@/app/components/general/BtnSec";

export default function page() {
  return (
    <main className="lg:px-4 xl:8 py-4">
      <nav className="text-tert pb-4 font-medium flex items-center gap-1">
        <svg
          className="inline"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.57 5.92969L3.5 11.9997L9.57 18.0697"
            stroke="#FA8443"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.4999 12H3.66992"
            stroke="#FA8443"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Back
      </nav>
      <div>
        <CoverSection />
      </div>
      {/* <div className="flex justify-between">
        <div className="w-3/6">
          <h2 className="text-xl lg:text-xl xl:text-2xl font-semibold p-1.5 md:p-4 rounded-2x">
            David Jagger
          </h2>
          <p>
            My love for exploring new cultures and I thrive on adventure and am
            always on the lookout for fellow travelers to share unforgettable
            experiences with.
          </p>
          <div>
            <span>23 years</span>
            <span>.</span>
            <span>Male</span>
            <span>.</span>
            <span>85% Match</span>
            <span>.</span>
            <span>PH, Nigeria</span>
          </div>
        </div>
        <div className="w-2/5">
          <div className="space-x-4 float-right px-8">
            <BtnSec>Message</BtnSec>
            <BtnMain>Connect</BtnMain>
          </div>
        </div>
      </div> */}
    </main>
  );
}
