import React from 'react'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';


function Slides() {

    const project = useSelector(state => state.menuBar.projectDataFirst)
    const {imgResult} = project

    const StyleSwiper = {
        transitionDuration: '0ms',
        transform: 'translate3d(-93px, 0px, 0px)',
      };
      
      return (
        <>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className='imgSwiperBlock'
          >
            {imgResult.map((o) => (
              <SwiperSlide key={o.id} className='SwiperSlideWrapper' style={StyleSwiper}>
                <img src={o.img} alt="screen" className='imgProject'/>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )      
}

export default Slides