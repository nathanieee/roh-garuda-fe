
"use client";

import Image from "next/image";

import BorderSide from "@/components/side/side";
import ImageCarousel from "@/components/slider/slider";

export default function Home() {

  return (
    <div className="flex justify-center items-center w-full h-dvh">
      <div>
        <ImageCarousel />
      </div>
      <div className="relative ">
      <Image
        src="/img/Character-3.png"
        width={1000}
        height={580}
        alt="Char 3"
        className="absolute scale-125 -right-10 -z-20 -top-28 size-char-3"
      />
      <Image
        src="/img/Character-2.png"
        width={1100}
        height={760}
        alt="Char 2"
        className="absolute scale-150 -bottom-20 -right-24 z-20"
      />
        <BorderSide/>
      </div>
    </div>
  );
}
