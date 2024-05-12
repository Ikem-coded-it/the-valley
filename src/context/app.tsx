import { ReactNode, createContext, useContext, useState } from "react";
import { onboardingSteps, OnboardingStepType } from "@/store/onboarding";

export const AppContext = createContext({})

export const useApp = () => useContext<any>(AppContext);


export default function AppContextProvider({ children }: { children: ReactNode }) {
    const [onboarding, setOnboarding] = useState<OnboardingStepType>(null);

    const nextOnboardingStep = () => {
        const currentStep = onboarding 
        return setOnboarding(onboardingSteps[onboardingSteps.indexOf(currentStep) + 1] as OnboardingStepType)
    }

    const values = {
        onboarding,
        setOnboarding,
        nextOnboardingStep
    }
    return(
        <AppContext.Provider value={values}>
            { children }
        </AppContext.Provider>
    )
}