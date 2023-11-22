import NavMobile from "./NavMobile";
import NavbarLg from "./NavbarLg";
export default function Navbar() {
  return (
    <>
      <div className="hidden md:block">
        <NavbarLg />
      </div>
      <div className="md:hidden">
        <NavMobile />
      </div>
    </>
  );
}
