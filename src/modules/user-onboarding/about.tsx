import { Formik } from "formik";
import createOnboardingQuestions from "@/store/onboarding";
import ModalHeader from "@/components/user-onboarding/modal-header";
import DynamicInput from "@/components/form/inputs";
import { useState } from "react";
import Button from "@/components/button";
import { useOnboarding } from "@/context/Onboarding";
import aboutOnboardingValidationSchema from "@/validators/onboarding/about";
import { AboutValueTypes } from "@/types/onboarding";



export default function About() {
    const info = createOnboardingQuestions().about;
    const [userRoleQuestions, setUserRoleQuestions] = useState(null)
    const { nextOnboardingStep, setOnboardingValues, onboardingValues } = useOnboarding()

    const handleSubmit = (values) => {
        console.log("new", values)
        console.log("old", onboardingValues)
        setOnboardingValues(prev => {
            return {...prev, ...values}
        })
        nextOnboardingStep()
    }

    const initialValues: AboutValueTypes = {
        user_role: null,
        company_name: null,
        founder_industry: null,
        investor_industry: null,
        company_stage: null,
        looking_for_cofounder: false
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
            validationSchema={aboutOnboardingValidationSchema}>
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    errors,
                    values,
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
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors?.[question.key]}
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
                                    error={errors?.[question.key]}
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
                        disabled={!isValid}
                        className="bg-secondary w-full text-white disabled:bg-green-300"
                        text="Continue"
                        />
                    </form>
                )}
            </Formik>
        </div>
    )
}