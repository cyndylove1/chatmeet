import { AnimatedItem } from "./animatedItem";
import Link from "next/link";
import Button from "./button";

export default function Hero() {
  return (
    <section id="hero" className="hero-bg bg-[var(--background)] merriWeather">
      {/* hero text*/}
      <div className="relative z-10 flex items-center min-h-screen px-4 lg:px-20">
        <div className="lg:max-w-[60%] w-full">
          <AnimatedItem index={0} delay={0.05}>
            <h1 className="text-white text-[40px] lg:text-[50px] md:text-[60px] font-[600] leading-[50px]">
              Dating Built on <br />
              <span className="text-[var(--primary)]">Trust.</span>
            </h1>
          </AnimatedItem>
          <AnimatedItem index={1} delay={0.1}>
            <p className="text-white mt-2 text-sm md:text-lg leading-[30px] font-[300]">
              A secure platform where real profiles, verified users <br /> and
              meaningful conversations come first.
            </p>
          </AnimatedItem>
          <AnimatedItem index={2} delay={0.15}>
            {/* sign up button */}
            <Link href="/sign-up">
              <Button text="Sign Up" className="mt-4 text-white" />
            </Link>
          </AnimatedItem>
        </div>
      </div>
    </section>
  );
}
