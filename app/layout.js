import { AuthContextProvider } from "@/app/components/contexts/AppContext";
import "./globals.css";
import "dotenv/config";

export const metadata = {
  title: "Travel Buddies",
  description: "Travel Companion App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
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
      <AuthContextProvider>{children}</AuthContextProvider>
    </html>
  );
}
