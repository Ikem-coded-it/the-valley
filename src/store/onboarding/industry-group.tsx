


export const industryGroupOnboarding = () => {
    return{
        title: "Which industry group(s) apply most closely to your business? 🏢" ,
        key: "industry_group",
        type: "checkbox group",
        options: [
            {label: "Agritech & Biotech", value: "Agritech & Biotech"},
            {label: "Artificial Intelligence", value: "Artificial Intelligence"},
            {label: "Software as a Service (SAAS)", value: "Software as a Service (SAAS)"},
            {label: "Financial", value: "Financial"},
            {label: "Medical & Healthcare", value: "Medical & Healthcare"},
            {label: "Graphic Design ", value: "Graphic Design"},
            {label: "Other", value: "other"},
        ]
    }
}