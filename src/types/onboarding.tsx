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

export type CompanyStageTypes =
    'Pre Seed' |
    'Seed' |
    'Series A' |
    'Series B' |
    'Series C+' |
    'Bootstrapped' |
    'Other'

export type AboutValueTypes = {
    user_role: 'founder' | 'investor'
    company_name: string
    company_stage: CompanyStageTypes
    founder_industry: string[]
    investor_industry: string[]
    looking_for_cofounder?: boolean
}

export interface InterestTypes {
    technology: string[]
    trending: string[]
    business: string[]
}

export interface FounderTypes {
    founder_type: 'solo founder' | 'cofounder'
}

export type BusinessModelTypes = 
"B2B (Enterprise)" |
"B2B (Midmarket)" |
"B2B (All Biz size)" |
"B2C (Midmarket)" |
"B2G" |
"B2BTC" |
"Marketplace" |
"other"