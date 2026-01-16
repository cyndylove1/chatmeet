import { AnimatedItem } from "./animatedItem";
import Link from "next/link";
import Button from "./button";
import ChatBubble from "./chatBubble";


export default function Chat() {
  return (
    <section id="chat">
      <div className="bg-gray-100 merriWeather">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[20px]">
          {/* Left Column */}
          <div className="px-4 md:px-0 flex flex-col justify-center items-center pt-10 lg:pt-0">
            <AnimatedItem index={0} delay={0.05}>
              <h2 className="text-3xl text-black font-[600]">
                Ready to chat now?
              </h2>
              <p className="text-[14px] text-center py-2 leading-[30px] font-[300] text-black">
                There’s no need to wait for a match.
              </p>
            </AnimatedItem>

            <AnimatedItem index={1} delay={0.1}>
              <p className="text-center text-[16px] leading-[30px] font-[300] md:px-2 text-black">
                Dive into the chats that go a little deeper, and get straight to
                the good stuff. You know, the bit where you really get to know
                each other.
              </p>
            </AnimatedItem>

            <AnimatedItem index={2} delay={0.15}>
              {/* CTA Button */}
              <div className="mt-8">
                <Link href="/sign-up">
                  <Button
                    text="Sign Up"
                    className="font-[500] hover:text-white text-black"
                  />
                </Link>
              </div>
            </AnimatedItem>
          </div>

          {/* Chat Bubble */}
          <ChatBubble />
        </div>
      </div>
    </section>
  );
}
