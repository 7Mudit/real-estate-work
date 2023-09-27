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
    desc: ` " I think Uniemtech is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. It was so satisfying I never found such content anywhere else." `,
    name: "Courtney Henry",
    rating: 4.5,
  },
  {
    title: "Excellent Experience",
    desc: "Uniemtech has exceeded my expectations in every aspect. The user-friendly interface, extensive features, and exceptional customer support make it a top-notch platform for both beginners and professionals. Highly recommended!",
    name: "Alexandra Smith",
    rating: 5.0,
  },
  {
    title: "Impressive Platform",
    desc: "Uniemtech offers an impressive platform with a seamless user experience. The wide range of courses, informative content, and interactive learning materials have greatly contributed to my professional development. Thank you, Uniemtech!",
    name: "John Davis",
    rating: 3.5,
  },
  {
    title: "Game Changer",
    desc: "Uniemtech has been a game changer for me. The comprehensive courses, knowledgeable instructors, and practical exercises have tremendously enhanced my skills and opened up new career opportunities. I can't recommend it enough!",
    name: "Emily Johnson",
    rating: 4.0,
  },
  {
    title: "Exceptional Learning Platform",
    desc: "Uniemtech provides an exceptional learning platform with high-quality courses and a supportive community. The interactive lessons, real-world projects, and valuable resources have made my learning journey enjoyable and rewarding.",
    name: "Michael Thompson",
    rating: 4.2,
  },
  {
    title: "Game Changer",
    desc: "Uniemtech has been a game changer for me. The comprehensive courses, knowledgeable instructors, and practical exercises have tremendously enhanced my skills and opened up new career opportunities. I can't recommend it enough!",
    name: "Emily Johnson",
    rating: 4.7,
  },
  {
    title: "Excellent Experience",
    desc: "Uniemtech has exceeded my expectations in every aspect. The user-friendly interface, extensive features, and exceptional customer support make it a top-notch platform for both beginners and professionals. Highly recommended!",
    name: "Alexandra Smith",
    rating: 4.1,
  },
];

const Testimonials = () => (
  <div className="w-full h-full mt-[100px]">
    <div className="flex gap-5 flex-col-reverse  sm:flex-row w-full items-center justify-between">
      <h2 className={`font-poppins font-semibold text-[1.5em] xs:text-[2.5em] sm:text-[3em] text-white xs:leading-[76.8px] leading-[66.8px]`}>People we've helped</h2>
      <div className=" btn-pink w-[60%] xs:w-[40%] sm:w-[20%] text-center  transition-all duration-300 hover:scale-95 cursor-pointer ">
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
