import { Formik } from "formik";
import createOnboardingQuestions from "@/store/onboarding";
import ModalHeader from "@/components/user-onboarding/modal-header";
import DynamicInput from "@/components/form/inputs";
import Button from "@/components/button";
import { useApp } from "@/context/app";

export default function Description() {
    const info = createOnboardingQuestions().description;
    const { nextOnboardingStep } = useApp()

    const handleSubmit = (values) => {
        console.log(values)
        nextOnboardingStep()
    }

    const initialValues = {
        description: [],
    }

    return(
        <div className="w-full flex flex-col justify-start items-center gap-8">
            <ModalHeader
            title={info.title}
            />

            <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}>
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    errors,
                    values
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
                        className="bg-secondary w-full text-white"
                        text="Continue"
                        />
                    </form>
                )}
            </Formik>
        </div>
    )
}