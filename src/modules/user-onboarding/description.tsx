import { Formik } from "formik";
import createOnboardingQuestions from "@/store/onboarding";
import ModalHeader from "@/components/user-onboarding/modal-header";
import DynamicInput from "@/components/form/inputs";
import Button from "@/components/button";
import { useOnboarding } from "@/context/Onboarding";
import descriptionOnboardingValidationSchema from "@/validators/onboarding/description";

export default function Description() {
    const info = createOnboardingQuestions().description;
    const { nextOnboardingStep, setOnboardingValues, onboardingValues } = useOnboarding()

    const handleSubmit = (values) => {
        console.log("new", values)
        console.log("old", onboardingValues)
        setOnboardingValues(prev => {
            return {...prev, ...values}
        })
        nextOnboardingStep()
    }

    const initialValues: {description: string[]} = {
        description: null,
    }

    return(
        <div className="w-full flex flex-col justify-start items-center gap-8">
            <ModalHeader
            title={info.title}
            />

            <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={descriptionOnboardingValidationSchema}
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
                        <DynamicInput
                        name={info.key}
                        type={info.type}
                        options={info.options}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors?.[info.key]}
                        className=""
                        />

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