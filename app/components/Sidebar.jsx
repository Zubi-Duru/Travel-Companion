import SidebarLg from "./SidebarLg"
import SidebarMobile from "./SidebarMobile"
export default function Sidebar() {
  return (
    <>
    <div className="hidden md:block">
      <SidebarLg />
    </div>
    <div className="md:hidden">
      <SidebarMobile />
    </div>
  </>
  )
}
