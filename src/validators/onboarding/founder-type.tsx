import * as yup from "yup";

const founderTypeOnboardingValidationSchema = yup.object().shape({
    founder_type: yup.string().required("Required"),
})

export default founderTypeOnboardingValidationSchema;