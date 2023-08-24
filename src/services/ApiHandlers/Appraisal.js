import { apiConnector } from "../apiconnector";
import { toast } from "react-hot-toast";
import { appraisalEndpoints } from "../apis";

const { GET_USER_DETAILS, POST_A_APPRAISAL } = appraisalEndpoints;

export const creatingAppraisal = async (formData) => {
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", POST_A_APPRAISAL, formData);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    toast.success("We have sent you a email");
  } catch (err) {
    toast.error("Server Down. Please try again later");
    console.log(err);
  }
  toast.dismiss(toastId);
};

export const getUserDetails = async (formData) => {
  const toastId = toast.loading("Loading...");
  try {
    const response = await apiConnector("POST", GET_USER_DETAILS, formData);
    if (!response.data.success) {
      throw new Error(response.data.message);
    }
    toast.success("We have sent you a email");
  } catch (err) {
    toast.error("Server Down. Please try again later");
    console.log(err);
  }
  toast.dismiss(toastId);
};
