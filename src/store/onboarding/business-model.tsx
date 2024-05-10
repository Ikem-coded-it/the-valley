


export const businessModelOnboarding = () => {
    return{
        title: "Which best represents your business model? 💼" ,
        key: "business_model",
        type: "checkbox group",
        options: [
            {label: "B2B (Enterprise)", value: "B2B (Enterprise)"},
            {label: "B2B (Midmarket)", value: "B2B (Midmarket)"},
            {label: "B2B (All Biz size)", value: "B2B (All Biz size)"},
            {label: "B2C (Midmarket)", value: "B2C (Midmarket)"},
            {label: "B2G", value: "B2G"},
            {label: "B2BTC ", value: "B2BTC"},
            {label: "Marketplace ", value: "Marketplace"},
            {label: "Other", value: "other"},
        ]
    }
}