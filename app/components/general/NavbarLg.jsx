import NavLinks from "./NavLinks";
import Logo from "./Logo";
export default function NavbarLg() {
  return (
    <nav className="hidden md:flex items-center justify-between md:px-12 lg:px-20 xl:px-36 md:py-12 bg-white h-16">
      <Logo />
      <NavLinks />
    </nav>
  );
}
