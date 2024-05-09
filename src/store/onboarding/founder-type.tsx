

export const founderTypeOnboarding = () => {
    return{
        title: "Are you a solo founder or cofounder ? 🧑‍💻" ,
        key: "founder_type",
        type: "radio group",
        options: [
            {label: "I'm a solo founder", value: "solo founder"},
            {label: "I'm a cofounder", value: "cofounder"},
        ]
    }
}