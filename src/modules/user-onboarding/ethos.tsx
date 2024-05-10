import createOnboardingQuestions from "@/store/onboarding";
import ModalHeader from "@/components/user-onboarding/modal-header";
import EthosContainer from "@/components/ethos";
import Button from "@/components/button";
import { useApp } from "@/context/app";

export default function Ethos() {
    const info = createOnboardingQuestions().ethos;
    const { nextOnboardingStep } = useApp()

    const agree = () => {
        nextOnboardingStep()
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
                className="bg-secondary w-full text-white border-none"
                onClick={agree}
                text="I Agree"
                />
            </div>
        </div>
    )
}