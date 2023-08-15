import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import banner_image from './banner.png'

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row  flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 ">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">101</span> Tips to present your {" "}
            <span className="text-white">home</span> for Sale
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] md:text-[55px] lg:text-[65px]  text-[26px] text-white ss:leading-[100.8px]  text-center ss:text-start sm:leading-[80px]">
            Sell your <br className="hidden ss:block"/>  property in
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1
          className="font-poppins text-center ss:text-start font-semibold  ss:text-[60px] text-[28px] text-white lg:text-[65px]  md:text-[55px]
        ss:leading-[80.8px] w-full"
        >
          <span className="text-gradient ss:text-[80px] sm:text-[80px] text-[45px]">
            Canberra
          </span>{" "}
          <br />  with confidence!
        </h1>
        <p
          className={`${styles.paragraph} text-center sm:text-justify max-w-[470px] mt-5`}
        >
          Our trusted team of expert real estate agents provide personalized
          marketing strategies & transparent communication to maximize the value
          of your property.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={banner_image}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
