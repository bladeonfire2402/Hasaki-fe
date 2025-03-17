import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import imgData from '../../../public/assets/data/imgData';

const Banner = () => {
  const bannerList = [imgData.banner1, imgData.banner2];

  return (
    <div className="w-full overflow-hidden mb-5">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {bannerList.map((banner, index) => (
          <SwiperSlide key={index}>
            <img
              src={banner}
              alt={`Banner ${index + 1}`}
              className="h-[500px] w-full object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
