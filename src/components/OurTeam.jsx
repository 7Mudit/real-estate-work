import React from "react";
import styles from "../style";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import { Link } from "react-router-dom";

const OurTeam = () => {
  return (
    <section
      id="product"
      className={`flex flex-col  gap-[100px] justify-center items-center ${styles.paddingY}`}
    >
      <h2 className={`${styles.heading2} md:!text-[70px]  !w-auto`}>Our Team</h2>

      <div className="flex md:gap-6 w-full gap-[150px] md:flex-row flex-col items-center mx-auto">
        <Link
          to="/about-us"
          className=" flex flex-col items-center gap-5  object-cover"
        >
          <img
            src={user1}
            className="transition-all duration-300 hover:scale-90 rounded-[50%] w-[50%] h-[50%]"
            alt=""
          />
          <h1 className="text-[25px] md:text-[50px] text-white font-poppins tracking-wide">
          Ankur Siwach
          </h1>
        </Link>
        <Link
          to="/about-us"
          className=" flex flex-col items-center gap-5  object-cover"
        >
          <img
            src={user2}
            className="transition-all duration-300 hover:scale-90 rounded-[50%] w-[50%] h-[50%]"
            alt=""
          />
          <h1 className="text-[25px] md:text-[50px] text-white font-poppins  tracking-wide">
          Matt Peden
          </h1>
        </Link>
      </div>
    </section>
  );
};

export default OurTeam;
