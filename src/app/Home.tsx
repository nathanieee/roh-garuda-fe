
"use client";

import Image from "next/image";

import BorderSide from "@/components/side/side";
import ImageCarousel from "@/components/slider/slider";

export default function Home() {

  return (
    <div className="flex justify-center items-center relative">
      <div>
        <ImageCarousel />
      </div>
      <BorderSide />
      <Image
        src="/img/Character-3.svg"
        layout="intrinsic"
        width={250}
        height={580}
        alt="Char 3"
        className="absolute -right-1 -z-20 size-char-3 -top-5 translate-x-44 -rotate-12"
      />
      <Image
        src="/img/Character-2.svg"
        layout="intrinsic"
        width={390}
        height={800}
        alt="Char 2"
        className="absolute -bottom-28 z-20 right-0 translate-x-40"
      />
    </div>

  );
}
