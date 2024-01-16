import { Manrope } from "next/font/google";
const manrope = Manrope({ subsets: ["latin"] });
import Navbar from "../components/general/Navbar";
export default function RootLayout({ children }) {
  return (
    <body
      className={`${manrope.className} text-prim text-sm md:text-base max-w-[1920px] mx-auto`}
    >
      <Navbar />
      <div className="w-full">{children}</div>
    </body>
  );
}
