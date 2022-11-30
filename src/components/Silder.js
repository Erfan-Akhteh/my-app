import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";
//image
import image1 from '../image/1.jpg';
import image2 from '../image/2.jpg';
import image3 from '../image/3.jpg';

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
  
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={image1} alt='image1'/></SwiperSlide>
        <SwiperSlide><img src={image2} alt='image2'/></SwiperSlide>
        <SwiperSlide><img src={image3} alt='image3'/></SwiperSlide>
       
      </Swiper>
   
    </>
  );
}
