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
        className="mySlider bg-white md:w-3/5 md:h-[600px] w-4/5 h-[400px]"
      >
        <SwiperSlide>
          <Image id="pic1" fill src="/images/gallery/pic1.webp" alt="pic 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image id="pic2" fill src="/images/gallery/pic2.webp" alt="pic 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image id="pic3" fill src="/images/gallery/pic3.webp" alt="pic 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image id="pic4" fill src="/images/gallery/pic4.webp" alt="pic 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image id="pic5" fill src="/images/gallery/pic5.webp" alt="pic 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image id="pic6" fill src="/images/gallery/pic6.webp" alt="pic 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image id="pic7" fill src="/images/gallery/pic7.webp" alt="pic 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image id="pic8" fill src="/images/gallery/pic8.webp" alt="pic 1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}