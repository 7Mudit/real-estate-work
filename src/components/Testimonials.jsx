import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const peopleData = [
  {
    title: "Great Work",
    desc: `A lovely, friendly person who was genuine and sincere in all aspects.
    Thanks so much! `,
    name: "Buyer of townhouse in Kambah, ACT",
    rating: 4.0,
  },
  {
    title: "Excellent Experience",
    desc: "His knowledge of the market and understanding was excellent , very impressed with the kindness and genuine help shown to me.",
    name: "Buyer of unit in Phillip, ACT",
    rating: 5.0,
  },
  {
    title: "Great Seller",
    desc: "Matt has a great knowledge of the market in Belconnen. He has gone above and beyond his role for my husband and I on a number of occasions and we can’t thank him enough.Would highly recommend Matt if you are thinking of either selling or buying property.",
    name: "Seller of unit in Belconnen, ACT",
    rating: 5.0,
  },
  {
    title: "Impressive Platform",
    desc: "Excellent overall. Helpful.",
    name: "Buyer of apartment in Dunlop, ACT",
    rating: 5.0,
  },
  {
    title: "Game Changer",
    desc: "Ankur was a great help in assisting us with buying our first home, reliable, punctual and a great communicator.",
    name: "Buyer of house in Dunlop, ACT",
    rating: 5.0,
  },
  {
    title: "Great Experience",
    desc: "He had a great knowledge of the market",
    name: "Seller of apartment in Dunlop, ACT",
    rating: 4.2,
  },
];

const Testimonials = ({ setReviewModal }) => (
  <div className="w-full h-full mt-[100px]">
    <div className="flex gap-5 flex-col-reverse  sm:flex-row w-full items-center justify-between">
      <h2
        className={`font-poppins font-semibold text-[28px] xs:text-[2.5em] sm:text-[3em] text-white xs:leading-[76.8px] leading-[66.8px]`}
      >
        People we helped
      </h2>
      <div
        className=" btn-pink w-[60%] xs:w-[40%] sm:w-[20%] text-center  transition-all duration-300 hover:scale-95 cursor-pointer "
        onClick={() => setReviewModal(true)}
      >
        <button className="font-semibold sm:text-sm md:text-xl">
          Review us
        </button>
      </div>
    </div>
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
      {peopleData.map((card, index) => (
        <SwiperSlide key={index}>
          <FeedbackCard key={card.id} {...card} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default Testimonials;
