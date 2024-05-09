import { Formik } from "formik";
import createOnboardingQuestions from "@/store/onboarding";
import ModalHeader from "@/components/user-onboarding/modal-header";
import DynamicInput from "@/components/form/inputs";
import Button from "@/components/button";
import { useApp } from "@/context/app";

export default function Interests() {
    const info = createOnboardingQuestions().interests;
    const { nextOnboardingStep } = useApp()

    const handleSubmit = (values) => {
        console.log(values)
        nextOnboardingStep()
    }

    const initialValues = {
        technology: "",
        trending: "",
        business: "",
    }

    return(
        <div className="w-full flex flex-col justify-start items-center gap-8">
            <ModalHeader
            caption={info.caption}
            title={info.title}
            description={info.description}
            />

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
                                    // error={errors?.[question.key]}
                                    options={question.options}
                                    className=""
                                    {...question}
                                    />
                                )
                            })
                        }

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