import { aboutOnboarding } from "./about"
import { interestsOnboarding } from "./interests"
import { founderTypeOnboarding } from "./founder-type"
import { fundingStageOnboarding } from "./funding-stage"
import { businessModelOnboarding } from "./business-model"
import { descriptionOnboarding } from "./description"
import { industryGroupOnboarding } from "./industry-group"
import { ethosOnboarding } from "./ethos"

export const onboardingSteps = [
    'login',
    'about',
    'interests',
    'founder-type',
    // 'funding-stage',
    'business-model',
    'description',
    // 'industry-group',
    'ethos',
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
    'ethos' |
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
        about: aboutOnboarding(),
        interests: interestsOnboarding(),
        founderType: founderTypeOnboarding(),
        fundingStage: fundingStageOnboarding(),
        businessModel: businessModelOnboarding(),
        description: descriptionOnboarding(),
        industryGroup: industryGroupOnboarding(),
        ethos: ethosOnboarding()
    }
}

export default createOnboardingQuestions