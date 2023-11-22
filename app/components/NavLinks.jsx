import Link from "next/link";
import BtnSec from "./BtnSec";
export default function NavLinks() {
  return (
    <>
      <div className="flex flex-col pl-4 md:pl-0 space-y-1 md:space-y-0 md:flex-row md:space-x-3 lg:space-x-6">
        <Link href="/" className="font-semibold md:font-normal">Find Buddies </Link>
        <Link href="/" className="font-semibold md:font-normal">Destinations </Link>
        <Link href="/" className="font-semibold md:font-normal">Blog </Link>
        <Link href={`/`} className="md:hidden text-sec font-semibold">Login </Link>
      </div>
      <div className="flex md:space-x-3 lg:space-x-6 items-center">
        <Link href={`/`} className="hidden md:block text-sec">Login </Link>
        <Link href={`/`} className="hidden md:block text-sec border-[1px] border-sec py-2 px-4 rounded-3xl">Sign Up</Link>
      </div>
    </>
  );
}
