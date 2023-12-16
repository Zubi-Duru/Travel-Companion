import Link from "next/link";
import BtnSec from "./BtnSec";
export default function NavLinks() {
  return (
    <>
      <ul className="text-base md:text-sm  lg:text-base flex flex-col pl-4 md:pl-0 space-y-2 md:space-y-0 md:flex-row md:space-x-3 lg:space-x-6">
        <li>
          <Link href="/dashboard" className="md:font-normal">
            Find Buddies
          </Link>
        </li>
        <li>
          <Link href="/" className="md:font-normal">
            Destinations
          </Link>
        </li>
        <li>
          <Link href="/" className="md:font-normal">
            Blog
          </Link>
        </li>
        <li>
          <Link href={`/auth?type=login`} className="md:hidden text-tert md:font-normal">
            Login
          </Link>
        </li>
      </ul>
      <ul className="flex md:space-x-3 lg:space-x-6 items-center">
        <li>
          <Link href={`/auth?type=login`} className="hidden md:block text-tert">
            Login
          </Link>
        </li>
        <li className="hidden md:block">
         <BtnSec url={"/auth?type=signup"}>Sign Up</BtnSec>
        </li>
      </ul>
    </>
  );
}
