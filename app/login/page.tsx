"use client";
import { useState } from "react";
import Link from "next/link";
import Button from "../components/button";
import Logo from "../components/logo";
import Label from "../components/label";
import Input from "../components/input";
import InputPassword from "../components/inputPassword";

export default function Login() {
  const [show, setShow] = useState(false);
  return (
    <section>
      <div className="grid lg:grid-cols-2 merriWeather bg-white h-full">
        <div className="signUp-bg hidden lg:flex"></div>
        <div className="md:p-10 px-4 leading-[100%]">
          {/* logo */}
          <div className="pt-10">
            <Logo />
          </div>
          {/* sign in title */}
          <h2 className="font-[500] pt-10 text-[32px] text-black">Sign in with us</h2>
          <p className="font-[300] py-3 text-[16px] text-black">
            Don't have an account?{" "}
            <Link href="/sign-up">
              <span className="leading-[25px] cursor-pointer font-[300] hover:text-[var(--primary)] text-black">
                SignUp
              </span>
            </Link>
          </p>
          {/* sign in form */}
          <form>
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
                text="Login"
                className="w-full flex justify-center h-[40px] text-black hover:text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
