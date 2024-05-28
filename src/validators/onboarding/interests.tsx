import * as yup from "yup";

const interestsOnboardingValidationSchema = yup.object().shape({
    technology: yup.array(yup.string()).required("Please select some technologies you're interested in"),
    trending: yup.array(yup.string()).required("Please select some trends you're interested in"),
    business: yup.array(yup.string()).required("Please select some business topics you're interested in"),
})

export default interestsOnboardingValidationSchema;