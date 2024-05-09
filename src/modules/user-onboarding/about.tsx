import { Formik } from "formik";
import createOnboardingQuestions from "@/store/onboarding";
import ModalHeader from "@/components/user-onboarding/modal-header";
import DynamicInput from "@/components/form/inputs";
import { useState } from "react";
import Button from "@/components/button";

export default function About() {
    const info = createOnboardingQuestions().about;
    const [userRoleQuestions, setUserRoleQuestions] = useState(null)

    const handleSubmit = (values) => {
        console.log(values)
    }

    const initialValues = {
        user_role: "",
        company_name: "",
        industry: "",
        company_stage: "",
        looking_for_founder: false
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
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    // error={errors?.[question.key]}
                                    options={question.options}
                                    setUserRoleQuestions={setUserRoleQuestions}
                                    className=""
                                    />
                                )
                            })
                        }

                        {
                            userRoleQuestions && userRoleQuestions.map((question, index) => {
                                return(
                                    <DynamicInput
                                    key={index}
                                    type={question.type}
                                    name={question.key}
                                    label={question?.label}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    // error={errors?.[question.key]}
                                    value={values?.[question.key]}
                                    options={question.options}
                                    placeholder={question.placeholder}
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