import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';

import { DATA } from '@/constant/data';

const ImageCarousel = () => {
  return (
    <div className="relative">
      <Image
        src="/img/Border.svg"
        width={1250}
        height={800}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-color shadow-image rounded-3xl z-10"
        alt="border-size"
      />
      <Image
        src="/img/Logo.png"
        width={370}
        height={100}
        alt="Logo Roh Garuda"
        className="absolute left-96 -top-32 z-20"
      />
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
      <Swiper
        modules={[Autoplay, Navigation]}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {DATA.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image.imageUrl} width={600} height={490} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
