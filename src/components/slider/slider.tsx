import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,EffectFade } from 'swiper/modules';

import 'swiper/css/effect-fade';
import 'swiper/css';
import 'swiper/css/navigation';


import Image from 'next/image';

import { DATA } from '@/constant/data';

const ImageCarousel = () => {
  return (
    <div className="relative">
      <Image
        src={'/img/Border.svg'}
        width={1250}
        height={800}
        className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-shadow drop-shadow-2x border-color rounded-3xl'
        alt='border-size'
      />
      <Swiper
        cssMode={true}
        effect='fade'
        modules={[Autoplay,EffectFade]}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
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
