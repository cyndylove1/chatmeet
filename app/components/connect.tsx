import { AnimatedItem } from "./animatedItem";
import Link from "next/link";
import Button from "./button";

export default function Connect() {
  return (
    <section
      id="connect"
      className="bg-[var(--primary)] py-20 px-6 lg:px-20 merriWeather"
    >
      <div className="max-w-3xl mx-auto text-center text-white">
        <AnimatedItem index={0} delay={0.05}>
          {/* Headline */}
          <h2 className="text-4xl lg:text-4xl font-bold leading-tight">
            Ready to start connecting?
          </h2>
        </AnimatedItem>
        <AnimatedItem index={1} delay={0.1}>
          {/* Subtext */}
          <p className="mt-4 text-lg lg:text-lg font-[300] text-white/90">
            Join thousands of verified users and start meaningful <br />{" "}
            conversations today.
          </p>
        </AnimatedItem>
        <AnimatedItem index={2} delay={0.15}>
          {/* CTA Button */}
          <div className="mt-8">
            <Link href="/sign-up">
              <Button
                text="Sign Up"
                className="bg-white text-[var(--primary)] mx-auto hover:text-white border-white border-[1px]"
              />
            </Link>
          </div>
        </AnimatedItem>
      </div>
    </section>
  );
}
