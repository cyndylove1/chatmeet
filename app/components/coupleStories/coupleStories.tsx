"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { couples } from "../coupleStories/data";
import { AnimatedItem } from "../animatedItem";



export default function CoupleStories() {
  const [coupleIndex, setCoupleIndex] = useState<number>(0);
  const [mainImage, setMainImage] = useState<string>(couples[0].mainImage);

  const activeCouple = couples[coupleIndex];

  // ============ Arrow Handlers ============
  const prevCouple = () => {
    const prevIndex = coupleIndex === 0 ? couples.length - 1 : coupleIndex - 1;
    setCoupleIndex(prevIndex);
    setMainImage(couples[prevIndex].mainImage);
  };

  const nextCouple = () => {
    const nextIndex = coupleIndex === couples.length - 1 ? 0 : coupleIndex + 1;
    setCoupleIndex(nextIndex);
    setMainImage(couples[nextIndex].mainImage);
  };

  return (
    <section className="py-20 px-4 lg:px-20 merriWeather">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <AnimatedItem index={0} delay={0.05}>
            <span className="text-[16px] text-[var(--primary)] uppercase font-[500]">
              ChatMeet Couple success stories
            </span>
          </AnimatedItem>
          <AnimatedItem index={1} delay={0.1}>
            <h2 className="text-4xl font-bold mt-4 mb-6">
              {activeCouple.name}
            </h2>
          </AnimatedItem>
          <AnimatedItem index={2} delay={0.15}>
            <p className="text-black leading-relaxed mb-8 leading-[30px] font-[300] max-w-lg">
              {activeCouple.story}
            </p>
          </AnimatedItem>

          {/* THUMBNAILS */}
          <div className="flex gap-4">
            {activeCouple.thumbnails.map((img, idx) => (
              <AnimatedItem key={idx} index={idx} delay={0.05 * idx}>
                <button
                  key={idx}
                  onClick={() => setMainImage(img)}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                    mainImage === img
                      ? "opacity-100 ring-2 ring-[#c55877]"
                      : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              </AnimatedItem>
            ))}
          </div>
        </div>
        <AnimatedItem index={3} delay={0.25}>
          {/* RIGHT IMAGE */}
          <div className="relative group w-full h-[460px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={mainImage}
              alt={activeCouple.name}
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* HOVER OVERLAY */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-semibold">
                {activeCouple.name}
              </h3>
              <p className="text-white/80 text-sm">{activeCouple.location}</p>
            </div>

            {/* LEFT ARROW */}
            <button
              onClick={prevCouple}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow hover:bg-white transition"
              aria-label="Previous couple"
            >
              <ChevronLeft size={20} />
            </button>

            {/* RIGHT ARROW */}
            <button
              onClick={nextCouple}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow hover:bg-white transition"
              aria-label="Next couple"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </AnimatedItem>
      </div>
    </section>
  );
}
