import * as yup from "yup";

const aboutOnboardingValidationSchema = yup.object().shape({
    user_role: yup.string().trim().required("*Required"),
    company_name: yup.string().trim().required("*Required"),
    // founder_industry: yup.lazy(value => {
    //   if (value === null) {
    //     return yup.mixed().oneOf([null]);
    //   } else if (Array.isArray(value)) {
    //     return yup.array().of(yup.string().required());
    //   } else {
    //     return yup.mixed().notOneOf([undefined], 'Required');
    //   }
    // }),
    // investor_industry: yup.lazy(value => {
    //   if (value === null) {
    //     return yup.mixed().oneOf([null]);
    //   } else if (Array.isArray(value)) {
    //     return yup.array().of(yup.string().required());
    //   } else {
    //     return yup.mixed().notOneOf([undefined], 'Required');
    //   }
    // }),
    company_stage: yup.lazy(value => {
        if (typeof value === 'string') {
          return yup.string().required("Please select your company's stage");
        } else if (Array.isArray(value)) {
          return yup.array().of(yup.string()).required('Please select the company stages you invest in');
        } else {
          return yup.mixed().notOneOf([undefined, null], '*Required');
        }
    }),
})

export default aboutOnboardingValidationSchema;