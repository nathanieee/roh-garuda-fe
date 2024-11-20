"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import BorderSide from "@/components/side/side";
import ImageCarousel from "@/components/slider/slider";
import Loader from "@/components/loader/loader";
import HoverImageWithTooltip from "@/components/social-media/social-media";
import Marketing from "@/components/marketing/marketing";

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
        className={`flex justify-center items-center relative ${isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"
          }`}
      >
        <Image
          src="/img/Logo.png"
          width={370}
          height={100}
          alt="Logo Roh Garuda"
          className="absolute top-0 z-20 -translate-y-32 -translate-x-10"
        />
        <div>
          <ImageCarousel />
        </div>
        <BorderSide />
        <div className='absolute right-10 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
          <HoverImageWithTooltip />
        </div>
        <div className='absolute bottom-0 z-50 translate-y-16 -translate-x-10'>
          <Marketing />
        </div>
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
          className="absolute -bottom-28 z-20 right-0 translate-x-40 "
          onLoadingComplete={handleImageLoad}
        />
      </div>
    </>
  );
}
