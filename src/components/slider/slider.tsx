import React, { RefObject } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";

import { DATA } from "@/constant/data";

interface ImageCarouselProps {
  prevRef: RefObject<HTMLButtonElement>;
  nextRef: RefObject<HTMLButtonElement>;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ prevRef, nextRef }) => {
  return (
    <div className="relative">
      <Image
        src="/img/Border.svg"
        width={1250}
        height={800}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-color shadow-image rounded-3xl z-10 drop-shadow-2xl lg:drop-shadow-none"
        alt="border-size"
      />
      <Swiper
        modules={[Navigation]}
        centeredSlides={true}
        loop={true}
        navigation={{
          prevEl: prevRef?.current || undefined,
          nextEl: nextRef?.current || undefined,
        }}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation === "object") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        className="mySwiper"
      >
        {DATA.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.imageUrl}
              width={600}
              height={490}
              alt={image.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
