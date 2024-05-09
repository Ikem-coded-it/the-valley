

export const interestsOnboarding = () => {
    return{
        caption: "Choose your Interests",
        title: "What are your interests? 🎨️" ,
        description: "Let us know your interests, this will help us personalize your experience",
        questions: [
            {
                type: "search"
            },
            {
                key: "technology",
                type: "group chip",
                label: "🖥️ Technology",
                options: [
                    {label: "Web3", value: "web3"},
                    {label: "Tailwind", value: "tailwind"},
                    {label: "Python", value: "python"},
                    {label: "Artificial Intelligence", value: "artificial intelligence"},
                    {label: "Vision Pro", value: "Vision Pro"},
                ]
            },
            {
                key: "trending",
                type: "group chip",
                label: "📊 Trending",
                options: [
                    {label: "NFL", value: "NFL"},
                    {label: "Taylor Swift", value: "taylor swift"},
                    {label: "NHL", value: "NHL"},
                    {label: "One Piece", value: "one piece"},
                    {label: "ChatGPT", value: "ChatGPT"},
                    {label: "Football", value: "football"},
                ]
            },
            {
                key: "business",
                type: "group chip",
                label: "💼 Business",
                options: [
                    {label: "Investment", value: "investment"},
                    {label: "Finance", value: "finance"},
                    {label: "Startup", value: "startup"},
                    {label: "Small Business", value: "small business"},
                    {label: "Funding", value: "funding"},
                ]
            },
        ]
    }
}