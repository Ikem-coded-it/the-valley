import * as yup from "yup";

const businessModelOnboardingValidationSchema = yup.object().shape({
    business_model: yup.array(yup.string()).required("Please choose your business models"),
})

export default businessModelOnboardingValidationSchema;