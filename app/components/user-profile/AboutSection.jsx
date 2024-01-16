import BtnMain from "@/app/components/general/BtnMain";
import BtnSec from "@/app/components/general/BtnSec";
export default function AboutSection() {
  return (
    <div className="flex justify-between md:items-center lg:items-start ">
      <div className="lg:w-4/6 xl:w-3/6 p-2 lg:px-8 ">
        <h2 className="text-xl lg:text-xl xl:text-2xl font-semibold mb-2">
          David Jagger
        </h2>

        <p className="text-sm">
          My love for exploring new cultures and I thrive on adventure and am
          always on the lookout for fellow travelers to share unforgettable
          experiences with.
        </p>
        <div className="font-semibold text-sm space-x-2">
          <span>23 years</span>
          <span className="text-xl">.</span>
          <span>Male</span>
          <span className="text-xl">.</span>
          <span>85% Match</span>
          <span>.</span>
          <span>PH, Nigeria</span>
        </div>
        <div className="lg:hidden flex space-x-3 mt-3">
          <BtnSec>Message</BtnSec>
          <BtnMain>Connect</BtnMain>
        </div>
      </div>
      <div className="hidden w-2/5 lg:flex flex-row items-center lg:justify-end">
        <div className="mb-5 lg:mb-0 lg:mr-5">
          <BtnSec>Message</BtnSec>
        </div>
        <div>
          <BtnMain>Connect</BtnMain>
        </div>
      </div>
    </div>
  );
}
