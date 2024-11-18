"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import BorderSide from "@/components/side/side";
import ImageCarousel from "@/components/slider/slider";
import { Loader } from "@/components/loader/loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalImages = 2; 


  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  useEffect(() => {

    if (imagesLoaded === totalImages) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [imagesLoaded, totalImages]);

  return (
    <>
      {isLoading && <Loader preset="centered" />}
      <div
        className={`flex justify-center items-center relative ${
          isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"
        }`}
      >
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
          onLoadingComplete={handleImageLoad}
        />
        <Image
          src="/img/Character-2.svg"
          layout="intrinsic"
          width={390}
          height={800}
          alt="Char 2"
          className="absolute -bottom-28 z-20 right-0 translate-x-40"
          onLoadingComplete={handleImageLoad}
        />
      </div>
    </>
  );
}
