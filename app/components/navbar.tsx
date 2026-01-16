"use client";
import { useState, useEffect } from "react";
import Logo from "./logo";
import Button from "./button";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

 
  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-8"
      }`}
    >
      {/*Navbar */}
      <div className="flex items-center justify-between lg:px-20 px-4">
        <Logo />
        <Link href="/sign-up">
          <Button
            text="Sign Up"
            className={scrolled ? "text-black hover:text-white" : "text-white"}
          />
        </Link>
      </div>
    </nav>
  );
}
