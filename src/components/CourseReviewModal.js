import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import ReactStars from "react-rating-stars-component";
import { createRating } from "../services/ApiHandlers/courseDetailsAPI";
import IconBtn from "./IconBtn";

const CourseReviewModal = ({ setReviewModal }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("username", "");
    setValue("courseRating", 0);
    setValue("courseExperience", "");
    setValue("email", "");
    // eslint-disable-next-line
  }, []);

  const ratingChanged = (newRating) => {
    setValue("courseRating", newRating);
  };

  const onSubmit = async (data) => {
    console.log(data);
    await createRating({
      rating: data.courseRating,
      review: data.courseExperience,
      username: data.username,
      email: data.email,
    });
    setReviewModal(false);
  };
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="my-10 w-11/12 max-w-[700px] rounded-lg border border-richblack-400 bg-white ">
        <div className="flex items-center justify-between rounded-t-lg bg-richblack-700 p-5">
          <p className="text-xl font-semibold text-white font-walsheim">
            Add Review
          </p>
          <button onClick={() => setReviewModal(false)}>
            <RxCross2 className="text-2xl text-white" />
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-center gap-x-4">
            <div>
              <p className="text-sm text-darkblue font-walsheimReg">
                Posting Publicly
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex flex-col  items-center"
          >
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            ></ReactStars>
            <div className="flex w-11/12 mt-5 flex-col space-y-4">
              <label
                htmlFor="username"
                className="text-darkblue text-sm font-walsheimMed font-[600]"
              >
                Enter your name <sup className="text-pink-200">*</sup>
              </label>
              <input
                id="username"
                placeholder="Enter your name"
                {...register("username", {
                  required: true,
                  minLength: 5,
                  maxLength: 30,
                })}
                className="form-style2  w-full"
              />
              {errors.username && (
                <span className="ml-2 text-sx tracking-wide text-pink-200">
                  Please enter your name (minimum length : 5 and maximum length
                  : 30)
                </span>
              )}
              <label
                htmlFor="email"
                className="text-darkblue text-sm font-walsheimMed font-[600]"
              >
                Enter your email <sup className="text-pink-200">*</sup>
              </label>
              <input
                id="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: { value: true, message: "Email is required" },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "invalid email address",
                  },
                })}
                className="form-style2  w-full"
              />
              {errors.email && (
                <span className="ml-2 text-sx tracking-wide text-pink-200">
                  {errors.email.message}
                </span>
              )}
              <label
                htmlFor="courseExperience"
                className="text-darkblue text-sm font-walsheimMed font-[600]"
              >
                Add Your Experience <sup className="text-pink-200">*</sup>
              </label>
              <textarea
                id="courseExperience"
                placeholder="Enter your experience"
                {...register("courseExperience", { required: true })}
                className="form-style2 resize-x-none min-h-[130px] w-full"
              />
              {errors.courseExperience && (
                <span className="ml-2 text-sx tracking-wide text-pink-200">
                  Please add your experience
                </span>
              )}
            </div>
            <div className="mt-6 w-11/12 flex justify-end gap-x-2">
              <button
                onClick={() => setReviewModal(false)}
                className="flex cursor-pointer gap-x-2 items-center rounded-md bg-richblack-300 text-richblack-900 font-semibold py-[8px] px-[20px]"
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

export default CourseReviewModal;
