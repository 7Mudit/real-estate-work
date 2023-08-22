import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
{
  /* <div
className="w-1/3 sm:p-0 p-4 mx-auto mb-10 hover:cursor-pointer"
>
<div className="bg-white pb-4 rounded-lg shadow-md overflow-hidden justify-center items-center flex flex-col dark:bg-[#1E1E1E] dark:border">
  <img
    src={icon}
    alt={title}
    className="object-cover"
  />
  <div className="p-4 flex-grow">
    <h3 className="text-xl sm:text-sm md:text-md text-gray-500 dark:text-[#63B8FF]  font-semibold mb-2">
      {title}
    </h3>
    <p className="text-gray-800 sm:text-sm dark:text-[#E0E0E0]  mb-4 ">
      {content}
    </p>
  </div>
  <div
    className="bg-dark
   dark:bg-white dark:text-[#F57C00] text-white w-[80%] text-center py-2 rounded-b-lg"
  >
    <button className="font-semibold sm:text-sm md:text-md">
    {btnText}
    </button>
  </div>
</div>
</div> */
}
const FeatureCard = ({ icon, title, content, index, btnText }) => (
  <div
    className={`flex flex-col gap-5 transition-all duration-300 hover:scale-110  sm:h-[350px]  items-center p-6 rounded-[20px]  ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
      {title}
    </h4>
    <p className="font-poppins text-center  sm:h-[50px] font-normal  text-dimWhite text-[16px] leading-[24px]">
      {content}
    </p>
    <div
      className="bg-dark
   dark:bg-white dark:text-[#F57C00] text-white w-[80%] text-center py-2 rounded-b-lg"
    >
      <button className="font-semibold sm:text-sm md:text-md">{btnText}</button>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className="flex flex-col items-center">
    <div className={styles.paddingY}>
      <h2 className={styles.heading2}>Resources</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5  mx-auto">
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
