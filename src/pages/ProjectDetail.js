import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router-dom";
import { EffectFade, Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ProjectDetail.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import IconBtn from "../components/IconBtn";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailLock } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import toast from "react-hot-toast";

const propertiesData = [
  {
    id: 1,
    img: prop1,
    name: "Harborview Towers",
    location: "22 Marina Blvd, Seaside City",
    lat: 28.7041,
    long: 77.1025,
    carouselImages: [prop1, prop2, prop3, prop4, prop5, prop6, prop7],
    descr:
      "An established mix of 1, 2 and 3 bedroom apartments of above average size - in a quiet reserve-side location. The location of Thynne Street is a true highlight. With the AIS, University of Canberra, Belconnen Town Centre, and Canberra CBD just a stone's throw away, residents will have easy access to a range of amenities, including shops, restaurants, cafes, and entertainment options. Whether you're a sports enthusiast, a student, or a city worker, this location offers unparalleled convenience.",
  },
  {
    id: 2,
    img: prop2,
    name: "Sunset Villas",
    location: "78 Westwood Lane, Sunnydale",
    lat: 28.7041,
    long: 77.1025,
    carouselImages: [prop1, prop2, prop3, prop4, prop5, prop6, prop7],
    descr:
      "An established mix of 1, 2 and 3 bedroom apartments of above average size - in a quiet reserve-side location. The location of Thynne Street is a true highlight. With the AIS, University of Canberra, Belconnen Town Centre, and Canberra CBD just a stone's throw away, residents will have easy access to a range of amenities, including shops, restaurants, cafes, and entertainment options. Whether you're a sports enthusiast, a student, or a city worker, this location offers unparalleled convenience.",
  },
  {
    id: 3,
    img: prop3,
    name: "Oakwood Residences",
    location: "55 Oak Street, Greenwood",
    lat: 35.6895,
    long: 139.6917,
    carouselImages: [prop1, prop2, prop3, prop4, prop5, prop6, prop7],
    descr:
      "Oakwood Residences offers a modern living experience with its spacious apartments and scenic city views. Located in the heart of Greenwood, the property is just minutes away from vibrant shopping districts and fine dining. Its contemporary design and amenities cater to both families and professionals.",
  },
  {
    id: 4,
    img: prop4,
    name: "Lakeside Condos",
    location: "101 Lakefront Road, Lakeview",
    lat: 40.7128,
    long: -74.006,
    carouselImages: [prop1, prop2, prop3, prop4, prop5, prop6, prop7],
    descr:
      "Lakeside Condos offer serene lake views and a peaceful environment. Each condo is designed with luxury and comfort in mind, providing residents with a tranquil retreat from the hustle and bustle of city life. The property includes private access to the lake and is surrounded by beautifully landscaped gardens.",
  },
  {
    id: 5,
    img: prop5,
    name: "The Metropolitan",
    location: "200 Central Avenue, Downtown",
    lat: 51.5074,
    long: -0.1278,
    carouselImages: [prop1, prop2, prop3, prop4, prop5, prop6, prop7],
    descr:
      "The Metropolitan stands tall in the vibrant heart of the city. This prestigious property features state-of-the-art facilities and is a symbol of elegance and sophistication. The apartments are crafted with an urban touch and offer panoramic views of the bustling cityscape.",
  },
  {
    id: 6,
    img: prop6,
    name: "Parkside Retreat",
    location: "88 Park Lane, Riverside",
    lat: 48.8566,
    long: 2.3522,
    carouselImages: [prop1, prop2, prop3, prop4, prop5, prop6, prop7],
    descr:
      "Parkside Retreat is a haven for those seeking a balance of city life and natural beauty. Overlooking the scenic Riverside Park, the property boasts elegant design and modern amenities. It's perfect for those who enjoy outdoor activities and appreciate a green environment.",
  },
  {
    id: 7,
    img: prop7,
    name: "Riverside Estates",
    location: "33 River Road, River Town",
    lat: 34.0522,
    long: -118.2437,
    carouselImages: [prop1, prop2, prop3, prop4, prop5, prop6, prop7],
    descr:
      "Riverside Estates offer luxurious living by the river. These exclusive homes provide a peaceful and private lifestyle with stunning riverfront views. Residents can enjoy boating and other water activities right at their doorstep.",
  },
  {
    id: 8,
    img: prop8,
    name: "The Highland",
    location: "77 Highland Ave, Mountain City",
    lat: 37.7749,
    long: -122.4194,
    carouselImages: [prop1, prop2, prop3, prop4, prop5, prop6, prop7],
    descr:
      "Nestled in the picturesque Mountain City, The Highland offers cozy and rustic living with modern conveniences. The property is surrounded by nature, offering breathtaking mountain views and immediate access to hiking trails and outdoor adventures.",
  },
  {
    id: 9,
    img: prop9,
    name: "Cliffside Villas",
    location: "99 Cliff Drive, Coastal Town",
    lat: 37.7749,
    long: -122.4194,
    carouselImages: [prop1, prop2, prop3, prop4, prop5, prop6, prop7],
    descr:
      "Nestled in the picturesque Mountain City, The Highland offers cozy and rustic living with modern conveniences. The property is surrounded by nature, offering breathtaking mountain views and immediate access to hiking trails and outdoor adventures.",
  },
];

const ProjectDetail = () => {
  let { id } = useParams();
  console.log(id);
  const currentProperty = propertiesData[id - 1];
  const center = {
    lat: currentProperty.lat,
    lng: currentProperty.long,
  };
  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    setError,
    reset,
  } = useForm();

  const handlePhoneChange = (value, data) => {
    setValue("phoneNumber", value); // sets value for react-hook-form
    if (!/^(\+)?[0-9]{10,15}$/.test(value)) {
      setError("phoneNumber", {
        type: "manual",
        message: "Please enter a valid phone number.",
      });
    } else {
      setError("phoneNumber", {
        type: "manual",
        message: "",
      });
    }
  };
  useEffect(() => {
    register("phoneNumber", {
      required: "Please enter your phone number.",
      pattern: {
        value: /^(\+)?[0-9]{10,15}$/,
        message: "Please enter a valid phone number.",
      },
    });
  }, [register]);
  const onSubmit = async (data) => {
    console.log("Data for my form ", data);
    toast.success("Submitted Successfully");
    reset();
  };

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
              {currentProperty.name}
            </h1>

            <div className="flex flex-col lg:items-start lg:flex-row gap-[100px]">
              {/* left side */}
              <div className="flex flex-col w-full lg:w-[60%] gap-[50px]">
                {/* first show carousel */}
                <div className="shadow-lg rounded-xl">
                  <Swiper
                    effect={"fade"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    loop={true} // Enable looping
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: true,
                    }}
                    pagination={true}
                    modules={[EffectFade, Pagination, Autoplay, Navigation]}
                    className="mySwiper"
                  >
                    {currentProperty.carouselImages.map((image, index) => (
                      <SwiperSlide>
                        <img
                          src={image}
                          className="shadow-xl rounded-xl"
                          key={index}
                          alt=""
                        />
                      </SwiperSlide>
                    ))}
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                  </Swiper>
                </div>
                {/* description */}
                <p className="font-light font-serif text-dimWhite text-justify">
                  {currentProperty.descr}
                </p>
                {/* Google Map */}
                <div>
                  <LoadScript googleMapsApiKey="AIzaSyA4UzERMDXnUJKpQW6YU-40RgQvDv-9raw">
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={10}
                    >
                      {/* Marker */}
                      <Marker position={center} />
                    </GoogleMap>
                  </LoadScript>
                </div>

                {/* form */}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-6 flex flex-col items-center"
                >
                  <div className="flex  py-3  w-11/12 flex-col space-y-2">
                    <label
                      htmlFor="fullName"
                      className="text-white  text-lg font-walsheimMed font-[600]"
                    >
                      Full Name <sup className="text-pink-200">*</sup>
                    </label>
                    <input
                      id="fullName"
                      placeholder="Enter your full name"
                      {...register("fullName", {
                        required: "Please add your full name.",
                      })}
                      className="form-style2 bg-zinc-500 placeholder:text-dimWhite focus:text-white focus:scale-105 duration-300 w-full"
                    />
                    {errors.fullName && (
                      <span className="ml-2 text-sx tracking-wide text-pink-200">
                        Please add your full name.
                      </span>
                    )}
                  </div>
                  <div className="flex py-3 w-11/12 justify-between gap-[10px] items-center flex-col ss:flex-row ">
                    <div className="w-full  ss:w-[50%] ss:h-[100px]">
                      <label
                        htmlFor="phoneNumber"
                        className="text-white text-lg  font-walsheimMed font-[600]"
                      >
                        Phone Number <sup className="text-pink-200">*</sup>
                      </label>

                      <PhoneInput
                        country={"au"}
                        id="phoneNumber"
                        value={watch("phoneNumber")}
                        onChange={handlePhoneChange}
                        buttonStyle={{
                          backgroundColor: "rgb(113 113 122)",
                          borderStyle: "none",
                        }}
                        placeholder="Enter your phone number"
                        inputProps={{
                          name: "phoneNumber",
                          required: true,
                          placeholder: "Enter your phone number",
                          className:
                            "form-style2 bg-zinc-500 placeholder:text-dimWhite focus:text-white duration-300 w-full !pl-10",
                        }}
                      />
                      {errors.phoneNumber && (
                        <p className="ml-2 text-sx tracking-wide text-pink-200">
                          {errors.phoneNumber.message}
                        </p>
                      )}
                    </div>
                    <div className="w-full ss:w-[50%] ss:h-[100px]">
                      <label
                        htmlFor="email"
                        className="text-white text-lg  font-walsheimMed font-[600]"
                      >
                        Email<sup className="text-pink-200">*</sup>
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        {...register("email", {
                          required: "Please add your email",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Please enter a valid email address.",
                          },
                        })}
                        className="form-style2 bg-zinc-500 placeholder:text-dimWhite focus:text-white focus:scale-105 duration-300 w-full"
                      />
                      {errors.email && (
                        <p className="ml-2  text-sx tracking-wide text-pink-200">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* last two buttons */}
                  <div className="mt-6 w-11/12 flex justify-end gap-x-2">
                    <IconBtn text="Enquire" />
                  </div>
                </form>
              </div>

              {/* right side */}
              <div className="flex flex-col  gap-[50px] lg:my-[50px]">
                <div className="flex flex-row gap-2 items-center justify-start">
                  <IoLocationOutline width={20} height={20} color="white" />
                  <p className="font-light font-serif text-dimWhite text-justify">
                    {currentProperty.location}
                  </p>
                </div>
                <h2 className="text-2xl font-walsheimCon decoration-emerald-500 underline underline-offset-[30px] text-white">
                  Listing Agents
                </h2>
                <div className="flex flex-col gap-5">
                  <h4 className="font-light font-serif text-white text-justify">
                    Ankur Siwach
                  </h4>
                  <div className="flex flex-row gap-2 items-center justify-start">
                    <MdOutlinePhone color="white" size={20} />
                    <p className="text-dimWhite">0414 620 420</p>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start">
                    <MdOutlineMailLock color="white" size={20} />
                    <p className="text-dimWhite">
                      ankur.siwach@independent.com.au
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <h4 className="font-light font-serif text-white text-justify">
                    Matt Pedan
                  </h4>
                  <div className="flex flex-row gap-2 items-center justify-start">
                    <MdOutlinePhone color="white" size={20} />
                    <p className="text-dimWhite">0419 000 079</p>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-start">
                    <MdOutlineMailLock color="white" size={20} />
                    <p className="text-dimWhite">
                      matt.peden@independent.com.au
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
