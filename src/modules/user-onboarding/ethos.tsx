import createOnboardingQuestions from "@/store/onboarding";
import ModalHeader from "@/components/user-onboarding/modal-header";
import EthosContainer from "@/components/ethos";
import Button from "@/components/button";
import { useOnboarding } from "@/context/Onboarding";
// import { objectToFormData } from "@/utils/formatter";
import userService from "@/services/user.service";
import { toast } from "react-toastify";
import { useState } from "react";
import { saveUser } from "@/store/user.atom";

export default function Ethos() {
    const info = createOnboardingQuestions().ethos;
    const { nextOnboardingStep, onboardingValues } = useOnboarding()
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const agree = async() => {
        setIsSubmitting(true)
        console.log("all values: ", onboardingValues)
        let payload
        if(onboardingValues?.user_role === "founder") {
            payload = {
                userRole: onboardingValues?.user_role,
                founderType: onboardingValues.founder_type,
                foundersCompanyName: onboardingValues?.company_name,
                foundersIndustry: JSON.stringify(onboardingValues?.founder_industry),
                foundersCompanyStage: onboardingValues?.company_stage,
                lookingForCofounder: onboardingValues?.looking_for_cofounder,
                interests: JSON.stringify(onboardingValues?.interests),
                businessModels: JSON.stringify(onboardingValues?.business_model),
                descriptions: JSON.stringify(onboardingValues?.description)
            }
        } else {
            payload = {
                userRole: onboardingValues?.user_role,
                founderType: onboardingValues.founder_type,
                investorsFirmsName: onboardingValues?.company_name,
                investorsIndustries: JSON.stringify(onboardingValues?.investor_industry),
                investorsCompanyStages: JSON.stringify(onboardingValues?.company_stage),
                interests: JSON.stringify(onboardingValues?.interests),
                businessModels: JSON.stringify(onboardingValues?.business_model),
                descriptions: JSON.stringify(onboardingValues?.description)
            }
        }

        try {
            const data = await userService.saveOnboardingData(payload)
            if(data.status == 201) {
                setIsSubmitting(false)
                saveUser(data.user)
                toast.success(data.message)
                return nextOnboardingStep()
            }
        } catch (error) {
            console.log("onboarding error: ", error)
            toast.error("Failed to complete onboarding")
        }
    }

    return(
        <div className="w-full flex flex-col justify-start items-center gap-8">
            <ModalHeader
            title={info.title}
            titleClassName="text-[48px] font-semibold text-[#FFFFFF]"
            />
            <div
            className="w-full flex flex-col justify-start items-start gap-8">
                <EthosContainer
                rules={info.options}
                />

                <Button
                className="bg-secondary w-full text-white border-none disabled:bg-green-300"
                disabled={isSubmitting}
                onClick={agree}
                text="I Agree"
                />
            </div>
        </div>
    )
}