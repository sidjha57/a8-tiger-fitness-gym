import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function Coverflow() {
  return (
    <div className="swiper-container bg-white p-4">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySlider bg-white md:w-3/5"
      >
        <SwiperSlide>
          <Image width={300} height={300} src="/images/test.gif" alt="gif 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={300} height={300} src="/images/test.gif" alt="gif 2" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={300} height={300} src="/images/test.gif" alt="gif 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}