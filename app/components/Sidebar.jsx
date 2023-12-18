import SidebarLg from "./SidebarLg";
import SidebarMobile from "./SidebarMobile";
export default function Sidebar() {
  return (
    <>
      <div className="hidden md:block relative">
        <div className="fixed h-[112vh]">
          <SidebarLg />
        </div>
      </div>
      <div className="md:hidden">
        <SidebarMobile />
      </div>
    </>
  );
}
