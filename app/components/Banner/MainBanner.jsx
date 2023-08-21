"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Banner from "./Banner";
import { Autoplay } from "swiper/modules";

export default function MainBanner() {
  return (
    <>
      <Swiper
      slidesPerView={1}
        autoplay={{
          delay: 3000,
        }}
        modules={[Autoplay]}
         className="mySwiper swiper-slide-banner ">
        <SwiperSlide><Banner/></SwiperSlide>
        <SwiperSlide><Banner/></SwiperSlide>
      </Swiper>
    </>
  );
}
