import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import IconBtn from "./IconBtn";
import { useLoadScript } from "@react-google-maps/api";
import { creatingAppraisal } from "../services/ApiHandlers/Appraisal";

const libraries = ["places"];

const UserModal = ({ setUserModal }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
    setError,
  } = useForm();
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (value, data) => {
    setPhone(value);
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
    await creatingAppraisal(data);
    setUserModal(false);
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyA4UzERMDXnUJKpQW6YU-40RgQvDv-9raw", // Replace with your Google Maps API Key
    libraries,
  });

  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    register("streetAddress");
  }, [register]);

  const streetAddressValue = watch("streetAddress", "");

  useEffect(() => {
    // If the input value is empty or doesn't exist, clear predictions
    if (isLoaded && (!streetAddressValue || streetAddressValue.trim() === "")) {
      setPredictions([]);
      return;
    }

    // Else, if there's a valid streetAddressValue, fetch the predictions
    if (isLoaded && streetAddressValue && streetAddressValue.trim() !== "") {
      // const map = new window.google.maps.Map(document.getElementById('hidden-map'));
      // const service = new window.google.maps.places.PlacesService(map);

      // service.textSearch({
      //     query: streetAddressValue
      // }, (results, status) => {
      //     if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      //         const formattedAddresses = results.map(res => res.formatted_address);
      //         setPredictions(formattedAddresses);
      //     }
      // });
      const service = new window.google.maps.places.AutocompleteService();
      service.getPlacePredictions(
        {
          input: streetAddressValue,
          location: new window.google.maps.LatLng(-25.2744, 133.7751), // Central point of Australia
          radius: 5000000, // Roughly covers Australia's width
          componentRestrictions: { country: "AU" },
        },
        (predictions, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            const formattedAddresses = predictions.map(
              (pred) => pred.description
            );
            setPredictions(formattedAddresses);
          }
        }
      );
    }
  }, [streetAddressValue, isLoaded]);

  return (
    <>
      <div id="hidden-map" style={{ display: "none" }}></div>
      <div className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
        <div className="my-10 w-11/12 max-w-[700px] rounded-lg border border-richblack-400 bg-white ">
          <div className="flex items-center justify-between rounded-t-lg bg-richblack-700 p-5">
            <p className="text-xl font-semibold text-white font-walsheim">
              Your Contact Details
            </p>
            <button onClick={() => setUserModal(false)}>
              <RxCross2 className="text-2xl text-white" />
            </button>
          </div>
          <div className="p-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6 flex flex-col items-center"
            >
              <div className="flex  py-3  w-11/12 flex-col space-y-2">
                <label
                  htmlFor="fullName"
                  className="text-darkblue text-sm font-walsheimMed font-[600]"
                >
                  Your Full Name <sup className="text-pink-200">*</sup>
                </label>
                <input
                  id="fullName"
                  placeholder="Enter your full name"
                  {...register("fullName", { required: true })}
                  className="form-style2 w-full"
                />
                {errors.fullName && (
                  <span className="ml-2 text-sx tracking-wide text-pink-200">
                    Please add your full name.
                  </span>
                )}
              </div>
              <div className="flex py-3 w-11/12 justify-between gap-[10px] items-center flex-col ss:flex-row ">
                <div className="w-full ss:w-[50%] ss:h-[100px]">
                  <label
                    htmlFor="fullName"
                    className="text-darkblue text-sm  font-walsheimMed font-[600]"
                  >
                    Your Phone Number <sup className="text-pink-200">*</sup>
                  </label>

                  <PhoneInput
                    country={"au"}
                    id="phoneNumber"
                    value={watch("phoneNumber")}
                    onChange={handlePhoneChange}
                    placeholder="Enter your phone number"
                    inputProps={{
                      name: "phoneNumber",
                      required: true,
                      placeholder: "Enter your phone number",
                      className: "form-style2  w-full !pl-10",
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
                    className="text-darkblue text-sm  font-walsheimMed font-[600]"
                  >
                    Your Email<sup className="text-pink-200">*</sup>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: true,
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Please enter a valid email address.",
                      },
                    })}
                    className="form-style2 w-full"
                  />
                  {errors.email && (
                    <p className="ml-2  text-sx tracking-wide text-pink-200">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <h2 className="text-center text-2xl my-5 font-poppins text-darkblue ">
                Property Details
              </h2>
              <div className="flex w-11/12 py-3 flex-wrap  flex-col gap-[30px] justify-center items-start">
                <div className="w-full flex flex-col gap-[10px] ">
                  <label className="text-darkblue text-sm font-walsheimMed font-[600]">
                    Number of Bedrooms <sup className="text-pink-200">*</sup>
                  </label>
                  <div className="grid  sm:grid-cols-5 grid-cols-3 gap-2">
                    {["1", "2", "3", "4", "5+"].map((value) => (
                      <div key={value} className="flex  gap-2">
                        <input
                          type="radio"
                          id={`bedroom-${value}`}
                          value={value}
                          className="custom-radio"
                          {...register("bedrooms", { required: true })}
                        />
                        <label
                          className="custom-radio-label"
                          htmlFor={`bedroom-${value}`}
                        >
                          {value}
                        </label>
                      </div>
                    ))}
                  </div>
                  {errors.bedrooms && (
                    <span className="ml-2 text-sx tracking-wide text-pink-200">
                      Please select the number of bedrooms
                    </span>
                  )}
                </div>

                <div className="w-full flex flex-col gap-[10px] ">
                  <label className="text-darkblue text-sm font-walsheimMed font-[600]">
                    Number of Bathrooms <sup className="text-pink-200">*</sup>
                  </label>
                  <div className="grid  sm:grid-cols-5 grid-cols-3 gap-2">
                    {["1", "2", "3", "4", "5+"].map((value) => (
                      <div key={value} className="flex gap-2 flex-wrap">
                        <input
                          type="radio"
                          id={`bathroom-${value}`}
                          value={value}
                          className="custom-radio"
                          {...register("bathrooms", { required: true })}
                        />
                        <label
                          className="custom-radio-label"
                          htmlFor={`bathroom-${value}`}
                        >
                          {value}
                        </label>
                      </div>
                    ))}
                  </div>
                  {errors.bathrooms && (
                    <span className="ml-2 text-sx tracking-wide text-pink-200">
                      Please select the number of bathrooms
                    </span>
                  )}
                </div>

                <div className="w-full flex flex-col gap-[10px] ">
                  <label className="text-darkblue text-sm font-walsheimMed font-[600]">
                    Number of Car Spaces <sup className="text-pink-200">*</sup>
                  </label>
                  <div className="grid  sm:grid-cols-5 grid-cols-3 gap-2">
                    {["1", "2", "2+"].map((value) => (
                      <div key={value} className="flex gap-2 flex-wrap">
                        <input
                          type="radio"
                          id={`carSpace-${value}`}
                          value={value}
                          className="custom-radio"
                          {...register("carSpaces", { required: true })}
                        />
                        <label
                          className="custom-radio-label"
                          htmlFor={`carSpace-${value}`}
                        >
                          {value}
                        </label>
                      </div>
                    ))}
                  </div>
                  {errors.carSpaces && (
                    <span className="ml-2 text-sx tracking-wide text-pink-200">
                      Please select the number of car spaces
                    </span>
                  )}
                </div>
              </div>
              <div className="flex w-11/12 py-3 flex-col space-y-2">
                <label
                  htmlFor="streetAddress"
                  className="text-darkblue text-sm font-walsheimMed font-[600]"
                >
                  Your Street Address <sup className="text-pink-200">*</sup>
                </label>
                {isLoaded ? (
                  <div>
                    <input
                      id="streetAddress"
                      placeholder="Enter your street address"
                      {...register("streetAddress", { required: true })}
                      className="form-style2 w-full"
                    />
                    {predictions.length > 0 && (
                      <ul
                        style={{
                          border: "1px solid #e0e0e0", // Softened border
                          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Lighter shadow
                          borderRadius: "5px", // Rounded corners
                          backgroundColor: "#ffffff", // Background color
                          padding: "10px", // Padding for spacing
                          maxHeight: "200px", // Limiting height
                          overflowY: "auto", // Scroll if too many predictions
                        }}
                      >
                        {predictions.map((prediction, idx) => (
                          <li
                            key={idx}
                            onClick={() => {
                              setValue("streetAddress", prediction);
                              setPredictions([]); // Clear predictions once an address is selected
                            }}
                            style={{
                              padding: "8px 12px", // Padding for each list item
                              borderBottom: "1px solid #f0f0f0", // Border for visual separation
                              cursor: "pointer", // Pointer cursor on hover
                              transition: "background-color 0.2s", // Transition effect
                              ":hover": {
                                backgroundColor: "#f6f6f6", // Background color on hover
                              },
                            }}
                          >
                            {prediction}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <input
                    id="streetAddress"
                    placeholder="Enter your street address"
                    {...register("streetAddress", { required: true })}
                    className="form-style2 w-full"
                  />
                )}
              </div>
              <div className="flex w-11/12 py-3  flex-col space-y-2">
                <label
                  htmlFor="suburbPostCode"
                  className="text-darkblue text-sm font-walsheimMed font-[600]"
                >
                  Suburb and Post Code <sup className="text-pink-200">*</sup>
                </label>
                <input
                  id="suburbPostCode"
                  placeholder="Enter your suburb and post code"
                  {...register("suburbPostCode", { required: true })}
                  className="form-style2 w-full "
                />
                {errors.suburbPostCode && (
                  <span className="ml-2 text-sx tracking-wide text-pink-200">
                    Please add your suburb and post code.
                  </span>
                )}
              </div>

              {/* last two buttons */}
              <div className="mt-6 w-11/12 flex justify-end gap-x-2">
                <button
                  onClick={() => setUserModal(false)}
                  className="flex cursor-pointer gap-x-2 items-center rounded-md bg-richblack-300 text-richblack-900 font-semibold hover:scale-95 transition-all duration-300 py-[8px] px-[20px]"
                >
                  Cancel
                </button>
                <IconBtn text="Save" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserModal;
