import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import people from "../assets/people.jpg";
import comma from "../assets/comma.svg";
import RatingStars from "./RatingStars";

const peopleData = [
  {
    title: "Great Work",
    desc: ` " I think Uniemtech is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance. It was so satisfying I never found such content anywhere else." `,
    img: people,
    name: "Courtney Henry",
    post: "Web Designer",
    rating: 4.5,
  },
  {
    title: "Excellent Experience",
    desc: "Uniemtech has exceeded my expectations in every aspect. The user-friendly interface, extensive features, and exceptional customer support make it a top-notch platform for both beginners and professionals. Highly recommended!",
    img: people,
    name: "Alexandra Smith",
    post: "Digital Marketer",
    rating: 5.0,
  },
  {
    title: "Impressive Platform",
    desc: "Uniemtech offers an impressive platform with a seamless user experience. The wide range of courses, informative content, and interactive learning materials have greatly contributed to my professional development. Thank you, Uniemtech!",
    img: people,
    name: "John Davis",
    post: "Data Analyst",
    rating: 3.5,
  },
  {
    title: "Game Changer",
    desc: "Uniemtech has been a game changer for me. The comprehensive courses, knowledgeable instructors, and practical exercises have tremendously enhanced my skills and opened up new career opportunities. I can't recommend it enough!",
    img: people,
    name: "Emily Johnson",
    post: "Software Engineer",
    rating: 4.0,
  },
  {
    title: "Exceptional Learning Platform",
    desc: "Uniemtech provides an exceptional learning platform with high-quality courses and a supportive community. The interactive lessons, real-world projects, and valuable resources have made my learning journey enjoyable and rewarding.",
    img: people,
    name: "Michael Thompson",
    post: "Data Scientist",
    rating: 4.2,
  },
  {
    title: "Game Changer",
    desc: "Uniemtech has been a game changer for me. The comprehensive courses, knowledgeable instructors, and practical exercises have tremendously enhanced my skills and opened up new career opportunities. I can't recommend it enough!",
    img: people,
    name: "Emily Johnson",
    post: "Software Engineer",
    rating: 4.7,
  },
  {
    title: "Excellent Experience",
    desc: "Uniemtech has exceeded my expectations in every aspect. The user-friendly interface, extensive features, and exceptional customer support make it a top-notch platform for both beginners and professionals. Highly recommended!",
    img: people,
    name: "Alexandra Smith",
    post: "Digital Marketer",
    rating: 4.1,
  },
];

const Billing = () => (
  <section
    id="product"
    className={`flex flex-col justify-center items-center ${styles.paddingY}`}
  >
    <div className="flex flex-row w-full items-center justify-between">
      <h2 className={`${styles.heading2}  !w-auto`}>People we've helped</h2>
      {/* <div className=" btn-pink  transition-all duration-300 hover:scale-95 cursor-pointer ">
        <button className="font-semibold sm:text-sm md:text-xl">
          Review us
        </button>
      </div> */}
    </div>

    <div className="w-full h-full mt-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={90}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        speed={500}
        autoplay
        className="w-full h-full cursor-pointer"
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
        {peopleData.map((people, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col transition-all duration-300 hover:scale-90 gap-4 px-[20px] py-[30px] rounded-[8px] bg-white">
              <div className="flex flex-row items-center justify-between">
                <h3 className="text-[#6440fb] text-[18px] font-normal leading-[36px] text-[400]">
                  {people.title}
                </h3>
                <img src={comma} alt="" />
              </div>
              <RatingStars Review_Count={people.rating} />
              <p className="text-[#140342]  font-normal leading-[30px] font-walsheimReg">
                {people.desc}
              </p>
              <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-1 justify-center">
                  <p className="text-[#140342] text-[15px] leading-normal font-[400] font-walsheimCon">
                    {people.name}
                  </p>
                  <p className="text-[13px] font-walsheimMed leading-normal font-[400]">
                    {people.post}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Billing;
