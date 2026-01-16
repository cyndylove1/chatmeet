import type { Metadata } from "next";
import { Merriweather_Sans, Calligraffitti } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollToTop from "./components/ScrollToTop";

const merriWeatherCode = Merriweather_Sans({
  variable: "--font-merriWeather",
  subsets: ["latin"],
  weight: ["300","400", "500", "600", "700"],
});
const calligraffittiCode = Calligraffitti({
  variable: "--font-calligraffitt",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "ChatMeet",
  description: "ChatMeet is a dating platform where you can meet and find real connections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriWeatherCode.variable} ${calligraffittiCode.variable}  antialiased`}
      >
        <ScrollToTop />
        {children}
        
      </body>
    </html>
  );
}
