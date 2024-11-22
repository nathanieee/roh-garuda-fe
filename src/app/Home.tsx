"use client";

import { useState, useEffect, useRef } from "react";
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

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      {isLoading && <Loader preset="centered" />}
      <div
        className={`wrapper flex justify-center items-center relative ${isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500 my-auto"
          }`}
      >
        <Image
          src="/img/Logo.png"
          width={370}
          height={100}
          alt="Logo Roh Garuda"
          className="absolute top-0 z-20 -translate-y-32 xl:-translate-x-10 shadow-logo"
        />
        <button ref={prevRef} className="bg-gray-200 p-2 absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded z-50 left-16">Prev</button>
        <button ref={nextRef} className="bg-gray-200 p-2 absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded xl:right-56 md:right-4 right-4 lg:right-9">Next</button>
        <div>
          <ImageCarousel prevRef={prevRef} nextRef={nextRef} />
        </div>
        <BorderSide />
        <div className='absolute xl:right-10 xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 z-50 bottom-0 translate-y-14 '>
          <HoverImageWithTooltip />
        </div>
        <div className='absolute bottom-0 z-50 xl:translate-y-16 xl:-translate-x-8 md:translate-y-44 translate-y-44'>
          <Marketing />
        </div>
        <Image
          src="/img/Character-1.png"
          width={600}
          height={100}
          alt="Char 1"
          className="absolute -left-14 z-20 -bottom-36 -translate-x-2/4 translate-y-1/4"
        />
        <Image
          src="/img/Character-4.png"
          width={410}
          height={100}
          alt="Char 4"
          className="absolute -left-16 -z-20 bottom-28 -translate-x-2/4 translate-y-1/4"
        />
        <Image
          src="/img/Character-5.png"
          width={580}
          height={580}
          alt="Char 5"
          className="absolute -left-12 z-20 -top-44 -translate-x-2/4 translate-y-1/"
        />
        <Image
          src="/img/Character-3.svg"
          layout="intrinsic"
          width={250}
          height={580}
          alt="Char 3"
          className="absolute -right-1 -z-20 size-char-3 -top-5 xl:translate-x-44 md:translate-x-52 -rotate-12 translate-x-52 lg:translate-x-48"
          onLoadingComplete={handleImageLoad}
        />
        <Image
          src="/img/Character-2.svg"
          layout="intrinsic"
          width={390}
          height={800}
          alt="Char 2"
          className="absolute -bottom-28 z-20 right-0 xl:translate-x-40 md:translate-x-48 translate-x-48 lg:translate-x-44  "
          onLoadingComplete={handleImageLoad}
        />
      </div>
    </>
  );
}
