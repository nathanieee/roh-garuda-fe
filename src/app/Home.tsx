
"use client";

import BorderSide from "@/components/side/side";
import ImageCarousel from "@/components/slider/slider";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-dvh">
      <div>
        <ImageCarousel />
      </div>
        <BorderSide/>
    </div>
  );
}
