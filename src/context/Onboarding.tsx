import { ReactNode, createContext, useContext, useState } from "react";
import { onboardingSteps, OnboardingStepType } from "@/store/onboarding";

export const OnboardingContext = createContext({})

export const useOnboarding = () => useContext<any>(OnboardingContext);


export default function OnboardingContextProvider({ children }: { children: ReactNode }) {
    const [onboarding, setOnboarding] = useState<OnboardingStepType>(null);
    const [onboardingValues, setOnboardingValues] = useState({})

    const nextOnboardingStep = () => {
        const currentStep = onboarding 
        return setOnboarding(onboardingSteps[onboardingSteps.indexOf(currentStep) + 1] as OnboardingStepType)
    }

    const values = {
        onboarding,
        setOnboarding,
        nextOnboardingStep,
        onboardingValues,
        setOnboardingValues
    }
    return(
        <OnboardingContext.Provider value={values}>
            { children }
        </OnboardingContext.Provider>
    )
}