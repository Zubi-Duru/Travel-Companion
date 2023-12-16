import { Manrope } from "next/font/google";
import "../globals.css";
import 'dotenv/config'
import Sidebar from "../components/SidebarLg";
const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Travel Buddies",
  description: "Travel Companion App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin = "true"/>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Volkhov:ital,wght@0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />  
      </head>
      <body
        className={`${manrope.className} text-prim bg-[#F4F5F7] text-sm md:text-base max-w-[1920px] mx-auto`}
      >
        <Sidebar/>
        {children}
      </body>
    </html>
  );
}
