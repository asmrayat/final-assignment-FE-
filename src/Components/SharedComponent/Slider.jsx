import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = ({links}) => {
    return (
        <div>
             <div className=" p-5">
      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            links.map(link=><SwiperSlide key={link}><img className="h-96 w-full" src={link} alt="" /></SwiperSlide>)
        }
        {/* <SwiperSlide ><img className="h-96 w-full" src="" alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-96 w-full" src="" alt="" /></SwiperSlide> */}
      </Swiper>
      </div>
        </div>
    );
};

export default Slider;