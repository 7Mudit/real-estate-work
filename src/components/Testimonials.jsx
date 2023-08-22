import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Testimonials = () => (
  <div className="w-full h-full mt-10">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={90}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      speed={500}
      autoplay
      className="w-[100%] h-[100%] cursor-pointer"
      // pagination={{ clickable: true }}
      // navigation
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1084: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
      }}
    >
      {feedback.map((card, index) => (
        <SwiperSlide key={index}>
          <FeedbackCard key={card.id} {...card} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default Testimonials;
