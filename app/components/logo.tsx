"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link
        href="/"
        className="inline-block lg:text-4xl text-2xl font-bold text-[var(--primary)] calligraffitti cursor-pointer"
      >
        ChatMeet
      </Link>
    </>
  );
}
