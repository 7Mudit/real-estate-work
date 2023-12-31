import React from "react";
import Transition from "../components/Transition";
import styles from "../style";
import { Footer, Navbar } from "../components";
import prop1 from "../assets/properties/prop1.jpeg";
import prop2 from "../assets/properties/prop2.jpg";
import prop3 from "../assets/properties/prop3.jpeg";
import prop4 from "../assets/properties/prop4.jpeg";
import prop5 from "../assets/properties/prop5.jpeg";
import prop6 from "../assets/properties/prop6.jpeg";
import prop7 from "../assets/properties/prop7.jpeg";
import prop8 from "../assets/properties/prop8.jpeg";
import prop9 from "../assets/properties/prop9.jpeg";
import { Link } from "react-router-dom";

const propertiesData = [
  {
    id: 1,
    img: prop1,
    name: "Harborview Towers",
    location: "22 Marina Blvd, Seaside City",
  },
  {
    id: 2,
    img: prop2,
    name: "Sunset Villas",
    location: "78 Westwood Lane, Sunnydale",
  },
  {
    id: 3,
    img: prop3,
    name: "Oakwood Residences",
    location: "55 Oak Street, Greenwood",
  },
  {
    id: 4,
    img: prop4,
    name: "Lakeside Condos",
    location: "101 Lakefront Road, Lakeview",
  },
  {
    id: 5,
    img: prop5,
    name: "The Metropolitan",
    location: "200 Central Avenue, Downtown",
  },
  {
    id: 6,
    img: prop6,
    name: "Parkside Retreat",
    location: "88 Park Lane, Riverside",
  },
  {
    id: 7,
    img: prop7,
    name: "Riverside Estates",
    location: "33 River Road, River Town",
  },
  {
    id: 8,
    img: prop8,
    name: "The Highland",
    location: "77 Highland Ave, Mountain City",
  },
  {
    id: 9,
    img: prop9,
    name: "Cliffside Villas",
    location: "99 Cliff Drive, Coastal Town",
  },
];

const Projects = () => {
  return (
    <>
      {" "}
      <Transition />
      <div className="bg-primary  w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} flex flex-col gap-[50px] `}>
            <h1 className="text-4xl font-walsheimCon decoration-emerald-500 underline underline-offset-[30px] text-white">
              Projects
            </h1>
            {/* projects text description */}
            <div className="w-[100%]  flex flex-col gap-[30px] text-white font-poppins">
              <p className="font-poppins text-[16px]  leading-normal text-justify ">
                Our dedicated project marketing team are renowned for partnering
                with a selective clientele of developers who strive to deliver
                high quality projects. Our portfolio of projects represents a
                diverse mix of stock, with lifestyle-defining points of
                difference that exceed expectations.
              </p>

              <p className="font-poppins text-[16px] leading-normal text-justify ">
                Blackshaw Projects pride themselves on their holistic and
                forward-thinking approach to marketing and sales, and work hard
                to ensure that value to both developer clients and purchasers is
                maximised. The developers that we partner with work equally hard
                to deliver premium off-plan units and townhouses across the
                Territory and surrounding regions.
              </p>
              <p className="font-poppins text-[16px] leading-normal text-justify ">
                Whether the purchaser is a first-home buyer, downsizer, investor
                or anywhere in between, our vast network of channel partners and
                sales professionals across Canberra make it easy and convenient
                for buyers to meet an agent.
              </p>
              <p className="font-poppins text-[16px] leading-normal text-justify ">
                Utilising our extensive resources and sales network, each
                project is given the care and devotion of an end-to-end
                marketing and sales campaign. Our team have a proven track
                record of selling stock faster - so that builders and developers
                can focus on delivering quality products quicker and homeowners
                can realise their dream of getting into their new home sooner.
              </p>
              <p className="font-poppins text-[16px] leading-normal text-justify ">
                Whether you’re in the market for your new home, a diversifying
                investment portfolio or a dedicated team of professionals to
                assist in the sale of your development, contact Blackshaw
                Projects today.
              </p>
            </div>

            {/* project cards */}

            <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-[50px]">
              {propertiesData.map((property, index) => (
                <Link
                  to={`/projects/${property.id}`}
                  key={property.id}
                  className="flex hover:cursor-pointer shadow-lg duration-300 hover:scale-110 flex-col 
                   gap-[15px]"
                >
                  <img
                    src={property.img}
                    className="w-[380px] shadow-lg rounded-xl h-[253px] object-cover"
                    alt="propertyImage"
                  />
                  <p className="text-white font-bold font-sans">
                    {property.name}
                  </p>
                  <p className="font-light font-walsheimReg text-teal">
                    {property.location}
                  </p>
                </Link>
              ))}
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
