import { AnimatedItem } from "./animatedItem";
import Image from "next/image";
import aboutImage from "@/public/images/couple6.png";
import Button from "./button";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-4 lg:px-20 merriWeather">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}

        <div>
          <AnimatedItem index={0} delay={0.05}>
            <h2 className="text-3xl lg:text-4xl font-[600] text-[var(--primary)]">
              About ChatMeet
            </h2>
          </AnimatedItem>
          <AnimatedItem index={1} delay={0.1}>
            <p className="mt-4 text-black text-[16px] leading-[30px] font-[300]">
              We believe meaningful connections start with trust. Our platform
              is designed to bring real people together through verified
              profiles, thoughtful matching, and conversations that matter.
            </p>

            <p className="mt-4 text-black leading-[30px] font-[300]">
              Whether you’re looking for friendship, love, or something serious,
              we provide a safe and inclusive space to connect with confidence.
            </p>
          </AnimatedItem>
          <AnimatedItem index={2} delay={0.15}>
            <div className="mt-8">
              <a href="#connect">
                <Button
                  text="Connect"
                  className="mt-4 text-black font-[500] hover:text-white"
                />
              </a>
            </div>
          </AnimatedItem>
          {/* sign up button */}
        </div>

        <AnimatedItem index={3} delay={0.25}>
          {/* about Image */}
          <div className="relative w-full h-[420px] rounded-[10px] overflow-hidden">
            <Image
              src={aboutImage}
              alt="about-image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </AnimatedItem>
      </div>
    </section>
  );
}
