import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"] });
import Sidebar from "../components/general/Sidebar";
export default function RootLayout({ children }) {
  return (
    <body
        className={`${manrope.className} text-prim bg-[#F4F5F7] text-sm md:text-base max-w-[1920px] mx-auto md:flex overflow-x-hidden`}
      >
      <Sidebar />
      <div className="w-full md:ml-[220px]">{children}</div>
    </body>
  );
}
