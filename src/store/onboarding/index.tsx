import { aboutOnboarding } from "./about"

export const onboardingSteps = [
    'login',
    'about',
    'interests',
    'founder-type',
    'funding-stage',
    'business-model',
    'description',
    'industry-group',
    'agreement',
    null
]

export type OnboardingStepType = 
    'login'|
    'about' |
    'interests' |
    'founder-type' |
    'funding-stage' |
    'business-model' |
    'description' |
    'industry-group' |
    'agreement' |
    null

export type Question = {
    key: string
    label: String
    placeholder: string
    type: string
    options?: {
        label: string
        value: string | number
    }[]
}

const createOnboardingQuestions = () => {
    return {
        about: aboutOnboarding()
    }
}

export default createOnboardingQuestions