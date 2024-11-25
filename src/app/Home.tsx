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
        className={`wrapper flex justify-center items-center relative ${
          isLoading
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500 my-auto"
        }`}
      >
        <Image
          src="/img/Logo.png"
          width={370}
          height={100}
          alt="Logo Roh Garuda"
          className="absolute -top-44 lg:top-0 z-20 -translate-y-32 xl:-translate-x-10 shadow-logo scale-125 lg:scale-100"
        />
        <button
          ref={prevRef}
          className="absolute top-1/2 -translate-x-5 -translate-y-1/2 z-50 left-16"
        >
          <Image
            src="/img/prev.svg"
            width={60}
            height={60}
            alt="Char 1"
            className=" duration-300 ease-in-out  hover:opacity-90 shadow-sosmed"
          />
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 xl:right-56 md:right-4 right-4 lg:right-9"
        >
          <Image
            src="/img/next.svg"
            width={60}
            height={60}
            alt="Char 1"
            className=" duration-300 ease-in-out hover:opacity-90 shadow-sosmed"
          />
        </button>
        <div>
          <ImageCarousel prevRef={prevRef} nextRef={nextRef} />
        </div>
        <BorderSide />
        <div className="absolute xl:right-10 xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2 z-50 bottom-0 translate-y-14 ">
          <HoverImageWithTooltip />
        </div>
        <div className="absolute -top-56 lg:top-auto lg:bottom-0 z-50 xl:translate-y-16 xl:-translate-x-8 translate-y-44">
          <Marketing />
        </div>
        <Image
          src="/img/Character-1.png"
          width={600}
          height={100}
          alt="Char 1"
          className="absolute lg:-left-14 z-20 lg:-bottom-36 lg:-translate-x-2/4 lg:translate-y-1/4 -bottom-96 translate-y-custom-2 -translate-x-10"
        />
        <Image
          src="/img/Character-4.png"
          width={410}
          height={100}
          alt="Char 4"
          className="absolute lg:-left-16 lg:-z-20 lg:bottom-28 lg:-translate-x-2/4 lg:translate-y-1/4 -bottom-96 scale-90 lg:scale-100 translate-y-56 left-0 translate-x-28"
        />
        <Image
          src="/img/Character-5.png"
          width={580}
          height={580}
          alt="Char 5"
          className="absolute -left-12 z-20 lg:-top-44 lg:-translate-x-2/4 lg:translate-y-1 -bottom-96 translate-y-custom-1 -translate-x-28 "
        />
        <Image
          src="/img/Character-3.svg"
          layout="intrinsic"
          width={250}
          height={580}
          alt="Char 3"
          className="absolute lg:-right-1 lg:-z-20 z-30 size-char-3 lg:-top-5 xl:translate-x-44  -rotate-12 lg:translate-x-48 scale-75 lg:scale-100 -bottom-80 lg:bottom-auto translate-x-80"
          onLoadingComplete={handleImageLoad}
        />
        <Image
          src="/img/Character-2.svg"
          layout="intrinsic"
          width={390}
          height={800}
          alt="Char 2"
          className="absolute lg:-bottom-28 lg:z-20 lg:right-0 lg:translate-x-40 scale-75 lg:scale-100 -bottom-96 lg:translate-y-0 translate-x-40 translate-y-28 z-30"
          onLoadingComplete={handleImageLoad}
        />
      </div>
    </>
  );
}
