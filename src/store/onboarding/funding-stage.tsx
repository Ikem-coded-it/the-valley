

export const fundingStageOnboarding = () => {
    return{
        title: "What funding stage is your company? 🏢" ,
        key: "funding_stage",
        type: "radio group",
        options: [
            {label: "Pre seed", value: "Pre Seed"},
            {label: "Seed", value: "Seed"},
            {label: "Series A", value: "Series A"},
            {label: "Series B", value: "Series B"},
            {label: "Series C+", value: "Series C+"},
            {label: "Bootstrapped", value: "Bootstrapped"},
            {label: "Other", value: "other"},
        ]
    }
}