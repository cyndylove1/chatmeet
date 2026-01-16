'use client';
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import AboutMe from "./components/aboutUs";
import Chat from "./components/chat";
import Connect from "./components/connect";
import CoupleStories from "./components/coupleStories/coupleStories";
import Footer from "./components/footer";




export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <AboutMe />
      <Chat/>
      <CoupleStories />
      <Connect />
      <Footer/>
    </>
  );
}
