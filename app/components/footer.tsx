import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import { AnimatedItem } from "./animatedItem";
import Logo from "./logo";


export default function Footer() {
  return (
    <footer className="bg-gray-100 merriWeather">
      <div className="px-4 py-16 lg:p-20 grid grid-cols-1 md:grid-cols-3 gap-20">
        <AnimatedItem index={0} delay={0.05}>
          {/* Logo */}
          <div className="flex flex-col justify-start">
            <Logo />
            <p className="mt-2 text-gray-600 text-sm">
              Connect, chat, and meet new friends on a safe and secure platform.
            </p>
          </div>
        </AnimatedItem>
        <AnimatedItem index={1} delay={0.1}>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--primary)] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-[var(--primary)] hover:underline transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#chat"
                  className="hover:text-[var(--primary)] hover:underline transition-colors duration-200"
                >
                  Chat with People
                </a>
              </li>
              <li>
                <a
                  href="#connect"
                  className="hover:text-[var(--primary)] hover:underline transition-colors duration-200"
                >
                  Connect with People
                </a>
              </li>
              <li>
                <a
                  href="/sign-up"
                  className="hover:text-[var(--primary)] hover:underline transition-colors duration-200"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </AnimatedItem>
        <AnimatedItem index={2} delay={0.15}>
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--primary)] mb-4">
              Follow Us
            </h3>
            <div className="flex items-center gap-3">
              {[
                { icon: <Facebook size={20} />, label: "Facebook" },
                { icon: <Linkedin size={20} />, label: "LinkedIn" },
                { icon: <Instagram size={20} />, label: "Instagram" },
                { icon: <Twitter size={20} />, label: "Twitter" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={social.label}
                  className="h-9 w-9 rounded-full bg-black text-white flex items-center justify-center 
                  hover:bg-white hover:text-black border border-transparent hover:border-black transition-all duration-300 ease-in-out"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </AnimatedItem>
      </div>
      <AnimatedItem index={3} delay={0.25}>
        {/* Footer Bottom */}
        <div className="border-t border-gray-200 mt-8 py-4">
          <p className="text-center text-gray-500 text-xs font-light">
            &copy; 2026 ChatMeet. All Rights Reserved.
          </p>
        </div>
      </AnimatedItem>
    </footer>
  );
}
