import React, { useContext, useState } from "react";
import { DataContext } from "../App";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import List from "../components/List";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Home = () => {
  const { data } = useContext(DataContext);
  const [swiper, setSwiper] = useState(null);

  const handlePrev = () => {
    swiper?.slidePrev();
  };
  const handleNext = () => {
    swiper?.slideNext();
  };
  return (
    <div className="home">
      {
        <Swiper
          className="swiperMain"
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={3}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.slice(11, 16).map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.ATT_FILE_NO_MK} alt="{item.HASH_TAG}" />
            </SwiperSlide>
          ))}
        </Swiper>
      }
      <div className="title">
        <h2> 추천 레시피</h2>
      </div>
      <div className="homeList">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={3}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          {data.slice(0, 10).map((item) => (
            <SwiperSlide key={item.id}>
              <List data={[item]} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper_btn">
          <div className="swiperPrevBtn" onClick={handlePrev}>
            <GrFormPrevious />
          </div>
          <div className="swiperNextBtn" onClick={handleNext}>
            <GrFormNext />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
