import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import Transition from "../components/Transition";
import { BsTelephoneOutbound } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import UserModal from "../components/UserModal";
import { useState } from "react";

const AboutUs = () => {
  const [userModal, setUserModal] = useState(false);
  return (
    <>
      <Transition />
      <div className="bg-primary  w-full overflow-hidden">
        <div className={`${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <div className={`sm:px-16 px-6`}>
              <Navbar />
            </div>

            <div className={`flex flex-col gap-[150px] py-[50px]`}>
              <div className="flex flex-col  md:flex-row w-[90%]  gap-[50px] mx-auto">
                <div className="md:w-[40%] font-poppins gap-10 items-center  flex flex-col object-cover">
                  <img src={user2} className="rounded-[50%]  w-[80%] " alt="" />
                  <div className="px-2 flex flex-col gap-5  w-[80%]  items-center md:items-start justify-center">
                    <h2 className="text-white font-bold text-[35px] ">
                      Matt Peden
                    </h2>
                    <button
                      className="text-[#0086a1] hover:scale-90 transition-all duration-300  btn-pink"
                      onClick={() => setUserModal(true)}
                    >
                      Get an instant Appraisal
                    </button>
                    {/* <div className="flex items-center justify-center mt-4 flex-row gap-2">
                      <BsTelephoneOutbound size={20} color="white" />
                      <p className="text-white">+61 2 6209 4420 </p>
                    </div> */}
                    <div className="flex items-center justify-center mt-4 flex-row gap-2">
                      <CiMobile3 size={20} color="white" />
                      <p className="text-white">0419 000 079</p>
                    </div>
                    <a
                      href="mailto:mpeden@blackshaw.com.au"
                      className="flex items-center justify-center mt-4 flex-row gap-2"
                    >
                      <AiOutlineMail size={20} color="white" />
                      <p className="text-white">mpeden@blackshaw.com.au</p>
                    </a>
                  </div>
                </div>
                <div className="w-[100%] md:w-[50%] flex flex-col gap-[30px] text-white font-poppins">
                  <h1 className="text-[25px] tracking-wide md:text-[50px] ">
                    About Matt{" "}
                    <span className="text-[12px] md:text-sm ">
                      29 years experience
                    </span>
                  </h1>

                  <p className="font-poppins text-[16px] font-bold leading-normal text-justify ">
                    Born in the country town of Goulburn, Matt Peden was raised
                    with strong family beliefs and the traditional Australian
                    principle that hard work and enthusiasm is the key to a
                    happy and successful life. These are principles Matt now
                    endeavours to pass on to his own children, Jake, Rowan, Ava,
                    Ellie & Ashton. Success in real estate comes from having
                    passion, a comprehensive understanding of the industry, an
                    inherent ability to comprehend clients’ needs & impeccable
                    organisational skills. It is the recognition of these
                    qualities over a 29 year career so far, along with his
                    strong management capabilities that has seen him
                    consistently seen as one of the industry’s top agents.
                  </p>

                  <p className="font-poppins text-[16px] leading-normal text-justify ">
                    Matt’s personal success comes from his dedication to helping
                    people make good decisions when buying and selling property
                    in the ACT. The quality of Matt’s service is proven time and
                    time again as clients continue to trust and return to him
                    when reselling their homes or when looking to add an
                    investment property to their portfolio. Much of Matt’s new
                    business is referred to him by his loyal and extremely
                    satisfied client base.
                  </p>
                  <p className="font-poppins text-[16px] leading-normal text-justify ">
                    Much of Matt’s new business is referred to him by his loyal
                    and extremely satisfied client base. Buying and selling a
                    property is an important and sometimes demanding time. Matt
                    knows that clients need to feel comfortable and have
                    confidence in their agent’s ability to assist in every
                    aspect of the sale process. With six years’ experience in
                    the finance industry followed by nearly three decades of
                    highly successful years marketing and selling property,
                    Matt’s proven results speak for themselves.
                  </p>

                  <p className="font-poppins text-[16px] leading-normal text-justify ">
                    Matt’s personal experience as a home owner, renovator &
                    investor also gives him the empathy truly needed to achieve
                    his client’s goals. His close association with many of
                    Canberra’s builders and property developers provides him
                    with the ability to demonstrate a wider variety of new
                    properties to more homebuyers. Such is Matt’s ability and
                    dedication, that he now also devotes a portion of his time
                    to training and mentoring aspiring agents. Matt’s role in
                    training sees him pass on invaluable knowledge in areas such
                    as marketing, finance, time management and negotiation. Matt
                    believes in “clients for life” and knows you need to treat
                    people well to deserve that relationship.
                  </p>
                  <h1 className="text-[30px] font-walsheim">Awards</h1>
                  <p>
                    Along with a number of monthly and quarterly sales awards,
                    Matt's recent accolades include:
                  </p>
                  <ol className="list-inside list-disc">
                    <li>Independent Property Group Top Producer - 2013</li>
                    <li>Independent Property Group CEO Award - 2012</li>
                  </ol>
                </div>
              </div>
              <div className="flex flex-col  md:flex-row w-[90%]  gap-[50px] mx-auto">
                <div className="md:w-[40%] font-poppins gap-10 items-center  flex flex-col object-cover">
                  <img src={user1} className="rounded-[50%]  w-[80%] " alt="" />
                  <div className="px-2 flex flex-col gap-5  w-[80%]  items-center md:items-start justify-center">
                    <h2 className="text-white font-bold text-[35px] ">
                      Ankur Siwach
                    </h2>
                    <button
                      className="text-[#0086a1] hover:scale-90 transition-all duration-300  btn-pink"
                      onClick={() => setUserModal(true)}
                    >
                      Get an instant Appraisal
                    </button>
                    {/* <div className="flex items-center justify-center mt-4 flex-row gap-2">
                      <BsTelephoneOutbound size={20} color="white" />
                      <p className="text-white">+61 2 6209 4420 </p>
                    </div> */}
                    <div className="flex items-center justify-center mt-4 flex-row gap-2">
                      <CiMobile3 size={20} color="white" />
                      <p className="text-white">0414 620 420</p>
                    </div>
                    <a
                      href="mailto:asiwach@blackshaw.com.au"
                      className="flex items-center justify-center mt-4 flex-row gap-2"
                    >
                      <AiOutlineMail size={20} color="white" />
                      <p className="text-white">asiwach@blackshaw.com.au</p>
                    </a>
                  </div>
                </div>
                <div className="w-[100%] md:w-[50%] flex  flex-col gap-[30px] text-white font-poppins">
                  <h1 className="text-[25px] md:text-[50px] tracking-wide ">
                    About Ankur
                  </h1>
                  <p className=" text-[16px] font-bold font-poppins text-justify leading-normal">
                    Ankur Siwach brings a unique blend of technological
                    expertise & a client-focused approach to the Canberra real
                    estate market. With Ankur’s experience in off-the-plan
                    projects & established homes sales, he offers a
                    comprehensive understanding of the real estate landscape. He
                    believes an agent's ability to promote the value of a
                    property to a buyer & their ability to negotiate ultimately
                    determines the price of the home.
                  </p>

                  <p className="font-poppins text-justify text-[16px] leading-normal">
                    With a Master's Degree in Engineering from the University of
                    Western Sydney, Ankur has developed a keen eye for detail &
                    an analytical mindset that allows him to provide top-notch
                    service to his clients.
                  </p>
                  <p className="font-poppins text-justify text-[16px] leading-normal">
                    Ankur's negotiation skills have a proven track record of
                    helping clients secure their slice of the Australian dream,
                    whether they are first-time homebuyers or experienced
                    sellers. His clients appreciate his dedication to providing
                    unparalleled customer service & his ability to make the
                    process smooth & stress-free.
                  </p>

                  <p className="font-poppins text-justify text-[16px] leading-normal">
                    Outside of work, Ankur represented Eastlake Cricket Club &
                    received the prestigious Phil Senior Most Valuable Player
                    Award. He learned the values of collaboration, helpfulness &
                    respect while growing up in a large family in India. Ankur
                    brings this same sense of teamwork & family values to his
                    work in real estate, ensuring that his clients always feel
                    supported & valued.
                  </p>
                  <p className="font-poppins text-justify text-[16px] leading-normal">
                    If you're planning on selling your property, Ankur Siwach
                    will guide you through every step of the process, from
                    comprehensive market analysis to effective marketing
                    strategies that ensure maximum exposure for your property.
                  </p>
                  <h1 className="text-[30px] font-walsheim">Awards</h1>
                  <ol className="list-inside list-disc">
                    <li>
                      Eastlake Cricket Club - Phil Senior Most Valuable Player
                      Award in 2021
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
      {userModal && <UserModal setUserModal={setUserModal} />}
    </>
  );
};

export default AboutUs;
