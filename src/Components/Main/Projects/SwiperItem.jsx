import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperItem = ({ swipers }) => {
  return (
    <Swiper
      spaceBetween={60}
      slidesPerView={2}
      className='imgSwiperBlock'
      onSwiper={(swiper) => console.log(swiper)}
      centeredSlides
      draggable
      snapOnRelease
    >
      {swipers.map((o) => (
        <SwiperSlide key={o.id}>
          <img src={o.img} alt="screen"  />
          
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
