import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import images from './images';
// import required modules
import { EffectCards } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="swiper-card"
      >
        <SwiperSlide  className='swiper-slide-card position-relative'><img src={images.card01}/>
        
        <div className="overlay">
        <h1 className=' text-dark beige03 position-absolute z-3  start-50  translate-middle-x'> SWIPE <i className="fa-regular fa-hand-point-right fa-lg"></i></h1>

        </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-card'><img src={images.card02}/></SwiperSlide>
        <SwiperSlide className='swiper-slide-card'><img src={images.card03}/></SwiperSlide>
        <SwiperSlide className='swiper-slide-card'><img src={images.card04}/></SwiperSlide>
        <SwiperSlide className='swiper-slide-card'><img src={images.card05}/></SwiperSlide>
        <SwiperSlide className='swiper-slide-card'><img src={images.card06}/></SwiperSlide>
        <SwiperSlide className='swiper-slide-card'><img src={images.card07}/></SwiperSlide>
        <SwiperSlide className='swiper-slide-card   position-relative'  >
        <div className="overlay">
        <h1 className=' text-dark beige03 position-absolute z-3  start-50  translate-middle-x'><i className="fa-regular fa-hand-point-left fa-lg"></i>SWIPE </h1>

        </div>
            
            <img src={images.card08}/></SwiperSlide>
      </Swiper>
    </>
  );
}
