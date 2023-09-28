const baseUrl = "http://localhost:4000/api/v1";

export const appraisalEndpoints = {
  GET_ALL_APPRAISALS: baseUrl + "/getAllAppraisals",
  POST_A_APPRAISAL: baseUrl + "/create-appraisal",
  GET_USER_DETAILS: baseUrl + "/getContactDetails",
};

export const courseEndpoints = {
  CREATE_RATING_API: baseUrl + "/createRating",
};
