import { stats } from "../constants";
import styles from "../style";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { discount, robot } from "../assets";
const Stats = () => (
  <>
    <div className={`flex-1 ${styles.flexStart} mt-5 sm:mt-0   flex-col `}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 ">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">101</span> Tips to present your{" "}
          <span className="text-white">home</span> for Sale
        </p>
      </div>
    </div>

    <section
      className={`flex justify-center flex-col lg:flex-row sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex  w-[550px]  items-start xs:items-center flex-col  xs:flex-row  m-3`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] w-[150px] lg:w-auto  text-white">
            {stat.title === "Total Sales Value" ? "$" : ""}
            <VisibilitySensor>
              {({ isVisible }) => (
                <CountUp end={isVisible ? `${stat.value}` : 0} duration={5} />
              )}
            </VisibilitySensor>
            {stat.title === "Total Sales Value" ? "M" : ""}+
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px]  text-gradient uppercase ml-3">
            {stat.title}
            <br />
            {stat.title === "Total Sales Value" && (
              <span className=" text-sm">In the last 12 months</span>
            )}
          </p>
        </div>
      ))}
    </section>
  </>
);

export default Stats;
