import Link from "next/link";
import BtnSec from "./BtnSec";
export default function NavLinks() {
  return (
    <>
      <ul className="flex flex-col pl-4 md:pl-0 space-y-1 md:space-y-0 md:flex-row md:space-x-3 lg:space-x-6">
        <li>
          <Link href="/" className="font-semibold md:font-normal">
            Find Buddies
          </Link>
        </li>
        <li>
          <Link href="/" className="font-semibold md:font-normal">
            Destinations
          </Link>
        </li>
        <li>
          <Link href="/" className="font-semibold md:font-normal">
            Blog
          </Link>
        </li>
        <li>
          <Link href={`/`} className="md:hidden text-tert font-semibold">
            Login
          </Link>
        </li>
      </ul>
      <ul className="flex md:space-x-3 lg:space-x-6 items-center">
        <li>
          <Link href={`/`} className="hidden md:block text-tert">
            Login
          </Link>
        </li>
        <li>
          <Link
            href={`/`}
            className="hidden md:block text-tert border-[1px] border-tert py-2 px-4 rounded-3xl"
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </>
  );
}
