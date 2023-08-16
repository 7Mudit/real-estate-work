import React, { useState , useEffect } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import IconBtn from "./IconBtn";

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
    setValue("phoneNumber", value);  // sets value for react-hook-form
    if(!/^(\+)?[0-9]{10,15}$/.test(value)){
      setError("phoneNumber", {
        type: "manual",
        message: "Please enter a valid phone number."
      });
    }
    else{
      setError("phoneNumber", {
        type: "manual",
        message: ""
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
    setUserModal(false);
  };
  return (
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
                    placeholder:"Enter your phone number",
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
                      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
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
            <div className="flex w-11/12 py-3 flex-col space-y-2">
              <label
                htmlFor="streetAddress"
                className="text-darkblue text-sm font-walsheimMed font-[600]"
              >
                Your Street Address <sup className="text-pink-200">*</sup>
              </label>
              <input
                id="streetAddress"
                placeholder="Enter your street address"
                {...register("streetAddress", { required: true })}
                className="form-style2 w-full"
              />
              {errors.streetAddress && (
                <span className="ml-2 text-sx tracking-wide text-pink-200">
                  Please add your street address.
                </span>
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
            <div className="flex w-11/12 py-3 flex-wrap  flex-row gap-[10px] justify-between items-center">
              <div className="w-full sm:w-[25%]">
                <label
                  htmlFor="bedrooms"
                  className="text-darkblue text-sm font-walsheimMed font-[600]"
                >
                  Bedrooms <sup className="text-pink-200">*</sup>
                </label>
                <input
                  id="bedrooms"
                  placeholder="Enter the number of bedrooms"
                  type="number"
                  {...register("bedrooms", { required: true })}
                  className="form-style2 placeholder:text-sm w-full "
                />
                {errors.bedrooms && (
                  <span className="ml-2 text-sx tracking-wide text-pink-200">
                    Please enter the number of bedrooms
                  </span>
                )}
              </div>
              <div className=" w-full sm:w-[25%]">
                <label
                  htmlFor="bathrooms"
                  className="text-darkblue text-sm font-walsheimMed font-[600]"
                >
                  Bathrooms <sup className="text-pink-200">*</sup>
                </label>
                <input
                  id="bathrooms"
                  type="number"
                  placeholder="Enter the number of bathrooms"
                  {...register("bathrooms", { required: true })}
                  className="form-style2 placeholder:text-sm w-full "
                />
                {errors.bathrooms && (
                  <span className="ml-2 text-sx tracking-wide text-pink-200">
                    Please enter the number of bathrooms
                  </span>
                )}
              </div>
              <div className="w-full sm:w-[25%]">
                <label
                  htmlFor="carSpaces"
                  className="text-darkblue text-sm font-walsheimMed font-[600]"
                >
                  Car Spaces <sup className="text-pink-200">*</sup>
                </label>
                <input
                  id="carSpaces"
                  type="number"
                  placeholder="Enter the number of car spaces"
                  {...register("carSpaces", { required: true })}
                  className="form-style2 placeholder:text-sm w-full "
                />
                {errors.carSpaces && (
                  <span className="ml-2 text-sx tracking-wide text-pink-200">
                    Please enter the number of car spaces
                  </span>
                )}
              </div>
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
  );
};

export default UserModal;
