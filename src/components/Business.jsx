import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import UserModal2 from "./UserModal2";

const FeatureCard = ({
  icon,
  title,
  content,
  index,
  btnText,
  setUserModal2,
}) => (
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
    {title === "Lease My Home" ? (
      <div
        className="text-colorOrange cursor-pointer bg-white w-[80%] text-center py-2 rounded-b-lg"
        onClick={() => setUserModal2(true)}
      >
        <button className="font-semibold sm:text-sm md:text-md">
          {btnText}
        </button>
      </div>
    ) : title === "Buy A Property" ? (
      <a
        className="text-colorOrange cursor-pointer bg-white w-[80%] text-center py-2 rounded-b-lg"
        href="/Market.pdf" // Assume you have a function to handle eBook download
      >
        <button className="font-semibold sm:text-sm md:text-md">
          {btnText}
        </button>
      </a>
    ) : (
      <a
        className="text-colorOrange cursor-pointer bg-white w-[80%] text-center py-2 rounded-b-lg"
        href="/Sell.pdf"
      >
        <button className="font-semibold sm:text-sm md:text-md">
          {btnText}
        </button>
      </a>
    )}
  </div>
);

const Business = ({ setUserModal2 }) => (
  <section id="features" className="flex flex-col items-center">
    <div className={styles.paddingY}>
      <h2 className={styles.heading2}>Resources</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5  mx-auto">
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.id}
          {...feature}
          index={index}
          setUserModal2={setUserModal2}
        />
      ))}
    </div>
  </section>
);

export default Business;
