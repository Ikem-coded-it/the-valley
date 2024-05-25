import * as yup from "yup";

const interestsOnboardingValidationSchema = yup.object().shape({
    technology: yup.string().required("Please choose a technology you're interested in"),
    trending: yup.string().required("Please choose a trend you're interested in"),
    business: yup.string().required("Please choose a business topic you're interested in")
})

export default interestsOnboardingValidationSchema;