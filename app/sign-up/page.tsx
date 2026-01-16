"use client";
import Link from "next/link";
import Button from "../components/button";
import Cover from "../components/cover";
import Logo from "../components/logo";
import Label from "../components/label";
import Input from "../components/input";
import InputPassword from "../components/inputPassword";
import { useState } from "react";

export default function SignUp() {
  const [show, setShow] = useState(false);
  return (
    <section>
      <div className="grid md:grid-cols-2 merriWeather">
        <div className="signUp-bg hidden md:flex"></div>
        <div className="md:p-10 px-4 leading-[100%]">
          {/* logo */}
          <Logo />
          <h2 className="font-[500] pt-10 text-[32px]">Sign up with us</h2>
          <p className="font-[300] py-3 text-[16px] text-black">
            Already have an account?{" "}
            <Link href="/login">
              <span className="leading-[25px] cursor-pointer font-[300] hover:text-[var(--primary)] text-black">
                Login
              </span>
            </Link>
          </p>
          {/* sign up form */}
          <form>
            <div className="w-full mt-[10px]">
              <Label text="Full Name" />
              <Input type="text" placeholder="Enter Full Name" required />
            </div>
            <div className="mt-[10px]">
              <Label text="Email" />
              <Input
                type="text"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="mt-[10px]">
              <Label text="Password" />
              <InputPassword
                placeholder="Enter your Password"
                showVisibility={show}
                togglePasswordVisibility={() => setShow(!show)}
              />
            </div>
            <div className="mt-[20px]">
              <Button
                text="Submit"
                className="w-full flex justify-center h-[40px] hover:text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
