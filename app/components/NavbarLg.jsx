import NavLinks from "./NavLinks";
import Logo from "./Logo";
export default function NavbarLg() {
  return (
    <nav className="hidden md:flex items-center justify-between md:px-5 lg:px-20 xl:px-36 py-12 bg-white h-16">
      <Logo />
      <NavLinks />
    </nav>
  );
}
