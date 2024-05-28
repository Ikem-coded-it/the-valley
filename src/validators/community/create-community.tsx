import * as yup from "yup";

export const communityValidationSchema = yup.object().shape({
  communityName: yup
    .string()
    .trim()
    .min(3, "Community name must be greater than 3 characters")
    .required("Please input a community name"),

  about: yup
    .string()
    .trim()
    .required("Please provide a description")
    .min(3, "Community name must be greater than 3 characters"),
});
