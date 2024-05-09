import { Formik } from "formik";
import createOnboardingQuestions from "@/store/onboarding";
import ModalHeader from "@/components/user-onboarding/modal-header";
import DynamicInput from "@/components/form/inputs";
import Button from "@/components/button";
import { useApp } from "@/context/app";
import * as yup from "yup";

const schema =  yup.object().shape({
    founder_type: yup.string().min(9).max(12).required("Please choose founder type")
})

export default function FounderType() {
    const info = createOnboardingQuestions().founderType;
    console.log("founder type info", info)
    const { nextOnboardingStep } = useApp()

    const handleSubmit = (values) => {
        console.log(values)
        // nextOnboardingStep()
    }

    const initialValues = {
        founder_type: "",
    }

    return(
        <div className="w-full flex flex-col justify-start items-center gap-8">
            <ModalHeader
            title={info.title}
            />

            <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}>
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