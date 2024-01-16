import BtnMain from "@/app/components/general/BtnMain";
import BtnSec from "@/app/components/general/BtnSec";
import Image from "next/image";

export default function Notification() {
  return (
    <main className="px-4 lg:px-6 py-4 pt-0 md:pt-4">
      <h2 className="font-extrabold text-xl my-3">Friend Notifications</h2>
      <div className="space-y-4">
        <div className="flex justify-between shadow-sm drop-shadow-md p-2 md:p-4 rounded-lg items-center">
          <div className="flex items-center gap-2">
            <Image
              className="w-10 md:w-14 h-10 md:h-14 rounded-full "
              src={`/assets/friend1.png`}
              width="150"
              height="150"
            />
            <span className="font-medium text-base text-sec inline-block">
              David Jagger
            </span>
          </div>

          <div className="space-x-2 lg:space-x-4">
            <span className="font-medium text-tert border-[1px] border-tert py-1 px-2 md:py-1.5 md:px-4 rounded-3xl hover:bg-tert hover:text-white">
              Accept
            </span>
            <span className="font-medium text-red-500 border-[1px] border-red-500 py-1 px-2 md:py-1.5 md:px-4 rounded-3xl hover:bg-red-500 hover:text-white">
              Reject
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
