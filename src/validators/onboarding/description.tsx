import * as yup from "yup";

const descriptionOnboardingValidationSchema = yup.object().shape({
    description:  yup.array(yup.string()).required("Please choose descriptions for your company"),
})

export default descriptionOnboardingValidationSchema;