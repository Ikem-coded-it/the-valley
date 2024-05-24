import { Formik } from "formik";
import createOnboardingQuestions from "@/store/onboarding";
import ModalHeader from "@/components/user-onboarding/modal-header";
import DynamicInput from "@/components/form/inputs";
import Button from "@/components/button";
import { useOnboarding } from "@/context/Onboarding";
import interestsOnboardingValidationSchema from "@/validators/onboarding/interests";
import { InterestTypes } from "@/types/onboarding";

export default function Interests() {
    const info = createOnboardingQuestions().interests;
    const { nextOnboardingStep, setOnboardingValues, onboardingValues } = useOnboarding()

    const handleSubmit = (values) => {
        console.log("new", values)
        console.log("old", onboardingValues)
        setOnboardingValues(prev => {
            return {...prev, interests: values}
        })
        nextOnboardingStep()
    }

    const initialValues: InterestTypes = {
        technology: null,
        trending: null,
        business: null,
    }

    return(
        <div className="w-full flex flex-col justify-start items-center gap-8">
            <ModalHeader
            caption={info.caption}
            title={info.title}
            description={info.description}
            />

            <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={interestsOnboardingValidationSchema}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    errors,
                    isValid
                }) => (
                    <form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-col justify-start items-start gap-8">
                        {
                            info.questions.map((question, index) => {
                                return(
                                    <DynamicInput
                                    key={index}
                                    type={question.type}
                                    name={question.key}
                                    label={question?.label}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors?.[question.key]}
                                    options={question.options}
                                    className=""
                                    {...question}
                                    />
                                )
                            })
                        }

                        <Button
                        type="submit"
                        disabled={!isValid}
                        className="bg-secondary w-full text-white disabled:bg-[#4fe7ba]"
                        text="Continue"
                        />
                    </form>
                )}
            </Formik>
        </div>
    )
}