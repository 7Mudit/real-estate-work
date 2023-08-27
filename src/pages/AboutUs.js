import React from "react";
import styles from "../style";
import { Navbar, Footer } from "../components";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import Transition from "../components/Transition";
const AboutUs = () => {
  return (
    <>
      <Transition />
      <div className="bg-primary  w-full overflow-hidden">
        <div className={`${styles.paddingX}  ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />

            <div className={`flex flex-col gap-[150px] py-[50px]`}>
              <div className="flex flex-col md:flex-row w-[90%] gap-[50px] mx-auto">
                <div className="md:w-[40%] self-center object-cover">
                  <img src={user1} className="rounded-[50%] " alt="" />
                </div>
                <div className="w-[100%] md:w-[50%] flex flex-col gap-[30px] text-justify text-white font-poppins">
                <h1 className="text-[25px] md:text-[50px] font-walsheimCon">About Ankur</h1>
                  <p className="font-walsheimReg text-[16px] leading-normal">
                    Ankur Siwach is a reliable & results-driven real estate
                    professional with a passion for using technology & effective
                    communication to achieve success in the industry. With
                    extensive experience in customer service & a Master's Degree
                    in Engineering from the University of Western Sydney, Ankur
                    has developed a keen eye for detail & an analytical mindset
                    that allows him to provide top-notch service to his clients.
                  </p>

                  <p className="font-walsheimReg text-[16px] leading-normal">
                    Ankur's negotiation skills have a proven track record of
                    helping clients secure their slice of the Australian dream,
                    whether they are first-time homebuyers or experienced
                    sellers. His clients appreciate his dedication to providing
                    unparalleled customer service & his ability to make the
                    process smooth & stress-free.
                  </p>
                  <p className="font-walsheimReg text-[16px] leading-normal">
                    Outside of work, Ankur represented Eastlake Cricket Club in
                    ACT Premier Cricket Championship & received the prestigious
                    Phil Senior Most Valuable Player Award in 2021. He learned
                    the values of collaboration, helpfulness, & respect while
                    growing up in a large family in India. Ankur brings this
                    same sense of teamwork & community to his work in real
                    estate, ensuring that his clients always feel supported &
                    valued.
                  </p>

                  <p className="font-walsheimReg text-[16px] leading-normal">
                    If you're planning on selling your property, Ankur Siwach
                    will guide you through every step of the process, from
                    comprehensive market analysis to effective marketing
                    strategies that ensure maximum exposure for your property.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse w-[90%]  gap-[50px] mx-auto">
                <div className="md:w-[40%] self-center object-cover">
                  <img src={user2} className="rounded-[50%] " alt="" />
                </div>
                <div className="w-[100%] md:w-[50%] flex flex-col gap-[30px] text-white font-poppins">
                  <h1 className="text-[25px] md:text-[50px] font-walsheimCon">
                    About Matt{" "}
                    <span className="text-[12px] md:text-sm font-walsheimMed">
                      29 years experience
                    </span>
                  </h1>

                  <p className="font-walsheimReg text-[16px] leading-normal text-justify ">
                    Born in the country town of Goulburn, Matt Peden was raised
                    with strong family beliefs and the traditional Australian
                    principles that hard work and enthusiasm are the keys to a
                    happy and successful life. These are principles Matt now
                    endeavours to pass on to his own children, Jake, Rowan, Ava,
                    Ellie and Ashton.
                  </p>

                  <p className="font-walsheimReg text-[16px] leading-normal text-justify ">
                    Success in real estate comes from having passion; a
                    comprehensive understanding of the industry; an inherent
                    ability to comprehend clients' needs and impeccable
                    organisational skills. It is the recognition of these
                    qualities in Matt along with his strong management
                    capabilities that led to his appointment as Principal of the
                    Belconnen office in 2002. This has remained one of
                    Independent Property Group's most successful offices ever
                    since.
                  </p>
                  <p className="font-walsheimReg text-[16px] leading-normal text-justify ">
                    Matt's personal success comes from his dedication to
                    assisting people in making good decisions when buying and
                    selling established and new property in the region. The
                    quality of Matt's service is proven time and time again as
                    clients continue to trust and return to him when reselling
                    their homes or when looking to add an investment property to
                    their portfolio. Much of Matt's new business is referred to
                    him by his loyal and extremely satisfied client base.
                  </p>

                  <p className="font-walsheimReg text-[16px] leading-normal text-justify ">
                    Buying and selling a property is an important and sometimes
                    demanding time. "Clients need to feel comfortable and have
                    confidence in their agent's ability to assist in every
                    aspect of the sale process," says Matt. With six years'
                    experience in the finance industry followed by more than
                    twenty highly successful years marketing and selling
                    property with Independent Property Group, Matt's proven
                    results speak for themselves.
                  </p>
                  <p className="font-walsheimReg text-[16px] leading-normal text-justify ">
                    Matt's personal experience as a home owner, renovator and
                    investment property buyer also gives him the empathy truly
                    needed to achieve his clients' goals. His close association
                    with many of Canberra's builders and property developers
                    provides him with the ability to demonstrate a wider variety
                    of new properties to more homebuyers.
                  </p>
                  <p className="font-walsheimReg text-[16px] leading-normal text-justify ">
                    Such is Matt's ability and dedication that he now also
                    devotes a portion of his time to training and mentoring
                    other aspiring agents. Matt's role in training sees him pass
                    on invaluable knowledge in areas such as marketing, finance,
                    time management and negotiation. Matt believes in ‘clients
                    for life' and knows you need to treat people well to deserve
                    that relationship. Talk to Matt about your real estate needs
                    today.
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
            </div>
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
