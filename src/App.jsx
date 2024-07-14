import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion'
import 'swiper/css/effect-cards';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';







import 'swiper/css/effect-cards';
import { EffectFade,EffectCards} from 'swiper/modules';
// import required modules
import { Pagination ,  Autoplay } from 'swiper/modules';
import images from '../src/images'
import Slider from './Slider';

export default function App() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        effect={'fade'}
         autoplay={{delay:10000}}
        modules={[Pagination,EffectFade,Autoplay]}
        className="mySwiper mb-5"
      >
        <SwiperSlide className='position-relative'>
          
          <img src={images.one} className=' w-100'/>
       <h1 className=' beige text-dark position-absolute z-3  start-50  translate-middle-x'> SWIPE <i className="fa-regular fa-hand-point-right fa-lg"></i></h1>
        <div className='overlay'>
          <motion.h1 
           initial={{ x: -1000 }}
           animate={{ x: 0 }}
           transition={{ duration: 3 }} className='great  '>HEND & OMAR</motion.h1>
          <motion.h1
          initial={{ x: 2500}}
          animate={{ x: 0 }}
          transition={{ duration: 3 }}
          className='great '>8/7/2024</motion.h1>
        </div>

        <a href='#cards' className=' beige01 position-absolute z-3   start-50  translate-middle-x'> <i className="fa-solid fa-angle-down fa-bounce fa-lg"></i></a>
        </SwiperSlide>
        <SwiperSlide ><img src={images.two} className=' w-100'/></SwiperSlide>
        <SwiperSlide ><img src={images.three} className=' w-100'/></SwiperSlide>
        <SwiperSlide ><img src={images.four} className=' w-100'/>
       <h1 className=' text-dark beige position-absolute z-3  start-50  translate-middle-x'><i className="fa-regular fa-hand-point-left fa-lg"></i>SWIPE </h1>
        
        </SwiperSlide>
       
      </Swiper>


<div id='cards' className='my-5'>
<Slider />
<div className="m-auto d-flex justify-content-center">

<a href='#gallery' className='   text-dark '> <i className="fa-solid fa-angle-down fa-bounce fa-3x mt-3"></i></a>
</div>

</div>



<section id='gallery ' >

<motion.h1 
           initial={{ x: -1000 }}
           animate={{ x: 0 }}
           transition={{ duration: 3 }} className='great01  text-center '>GALLERY</motion.h1>



           <div className="container mt-3">
            <div className="row">
              <div  data-aos='fade-right' data-aos-duration='1000' className="col-12">
                <img src={images.z1} className='w-100 rounded-4 mt-3' alt="" />
              </div>
              <div  data-aos='fade-left' data-aos-duration='1000' className="col-12">
                <img src={images.z2} className='w-100 rounded-4 mt-3' alt="" />
              </div>
              <div  data-aos='fade-right' data-aos-duration='1000' className="col-12">
                <img src={images.z3} className='w-100 rounded-4 mt-3' alt="" />
              </div>
              <div  data-aos='fade-left' data-aos-duration='1000' className="col-12">
                <img src={images.z10} className='w-100 rounded-4 mt-3' alt="" />
              </div>
              <div  data-aos='fade-right' data-aos-duration='1000' className="col-12">
                <img src={images.z18} className='w-100 rounded-4 mt-3' alt="" />
              </div>




              <div  data-aos='fade-left' data-aos-duration='1000' className="col-6">
                <img src={images.z4} className='w-100 rounded-4 mt-3' alt="" />
              </div>
              <div  data-aos='fade-right' data-aos-duration='1000' className="col-6">
                <img src={images.z5} className='w-100 rounded-4 mt-3' alt="" />
              </div>


              <div  data-aos='fade-left' data-aos-duration='1000' className="col-6">
                <img src={images.z6} className='w-100 rounded-4 mt-3' alt="" />
              </div>
              <div  data-aos='fade-right' data-aos-duration='1000' className="col-6">
                <img src={images.z7} className='w-100 rounded-4 mt-3' alt="" />
              </div>
              <div  data-aos='fade-left' data-aos-duration='1000' className="col-6">
                <img src={images.z8} className='w-100 rounded-4 mt-3' alt="" />
              </div>
              <div  data-aos='fade-right' data-aos-duration='1000' className="col-6">
                <img src={images.z9} className='w-100 rounded-4 mt-3' alt="" />
              </div>
              <div  data-aos='fade-left' data-aos-duration='1000' className="col-6">
                <img src={images.z11} className='w-100 rounded-4 mt-3' alt="" />
              </div>
              <div  data-aos='fade-right' data-aos-duration='1000' className="col-6">
                <img src={images.z12} className='w-100 rounded-4 mt-3' alt="" />
              </div>


              <div  data-aos='fade-left' data-aos-duration='1000' className="col-6">
                <img src={images.z13} className='w-100 rounded-4 mt-3' alt="" />
              </div>
              <div  data-aos='fade-right' data-aos-duration='1000' className="col-6">
                <img src={images.z14} className='w-100 rounded-4 mt-3' alt="" />
              </div>


              <div  data-aos='fade-left' data-aos-duration='1000' className="col-6">
                <img src={images.z15} className='w-100 rounded-4 mt-3' alt="" />
              </div>
              <div  data-aos='fade-right' data-aos-duration='1000' className="col-6">
                <img src={images.z16} className='w-100 rounded-4 mt-3' alt="" />
              </div>




        



              <div  data-aos='fade-left' data-aos-duration='1000' className="col-6">
                <img src={images.z17} className='w-100 rounded-4 mt-3' alt="" />
              </div>
              <div  data-aos='fade-right' data-aos-duration='1000' className="col-6">
                <img src={images.z19} className='w-100 rounded-4 mt-3' alt="" />
              </div>


              <div  data-aos='fade-left' data-aos-duration='1000' className="col-6">
                <img src={images.z20} className='w-100 rounded-4 mt-3' alt="" />
              </div>
              <div  data-aos='fade-right' data-aos-duration='1000' className="col-6">
                <img src={images.z21} className='w-100 rounded-4 mt-3' alt="" />
              </div>



              <div  data-aos='fade-left' data-aos-duration='1000' className="col-6">
                <img src={images.z22} className='w-100 rounded-4 mt-3' alt="" />
              </div>
              <div  data-aos='fade-right' data-aos-duration='1000' className="col-6">
                <img src={images.z23} className='w-100 rounded-4 mt-3' alt="" />
              </div>

              <div  data-aos='fade-left' data-aos-duration='1000' className="col-6">
                <img src={images.z24} className='w-100 rounded-4 mt-3' alt="" />
              </div>

              <div  data-aos='fade-up' data-aos-duration='1000' className="col-6">
                <img src={images.z26} className='w-100 rounded-4 mt-3' alt="" />
              </div>
              <div  data-aos='fade-right' data-aos-duration='1000' className="col-6">
                <img src={images.z25} className='w-100 rounded-4 mt-3' alt="" />
              </div>

             





            </div>
           </div>

</section>


      
    </>
  );
}
