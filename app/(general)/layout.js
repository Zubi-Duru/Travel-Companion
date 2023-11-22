import Navbar from "../components/Navbar";
import { Manrope } from "next/font/google";
import NavMobile from "../components/NavMobile";
import "../globals.css";


const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Travel Buddies",
  description: "Travel Companion App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body className={`${manrope.className} text-prim text-sm md:text-base max-w-[1920px] mx-auto`}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Volkhov:ital,wght@0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <div className="hidden md:block">
        <Navbar />
        </div>
        <div className="md:hidden">
        <NavMobile />
        </div>
        
        {children}
      </body>
    </html>
  );
}
