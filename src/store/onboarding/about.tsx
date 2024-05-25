import { FaUser } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";

export const aboutOnboarding = () => {
    return {
        caption: "Lets get started",
        title: "Tell Us About Yourself 👋" ,
        description: "Before we dive in, tell us more about yourself so we can help shape your community",
        questions: [
            {
                key: "user_role",
                type: "group choice-box",
                options: [
                    {
                        icon: <FaUser color="#227A5F" size="24px"/>,
                        label: "I'm a Founder",
                        value: "founder",
                        questions: [
                            {
                                key: 'company_name',
                                label: "What's your company's name",
                                type: "text",
                                placeholder: "Company Name"
                            },
                            {
                                key: 'founder_industry',
                                label: "Choose your industry",
                                type: "group checkbox dropdown",
                                placeholder: "Select your industry",
                                options: [
                                    {label: "Agritech & Biotech", value: "Agritech & Biotech"},
                                    {label: "Artificial Intelligence", value: "Artificial Intelligence"},
                                    {label: "Software as a Service (SAAS)", value: "Software as a Service (SAAS)"},
                                    {label: "Financial", value: "Financial"},
                                    {label: "Medical & Healthcare", value: "Medical & Healthcare"},
                                    {label: "Graphic Design ", value: "Graphic Design"},
                                    {label: "Other", value: "other"},
                                ]
                            },
                            {
                                key: 'company_stage',
                                label: "What is your company stage",
                                type: "select",
                                placeholder: "Select company stage",
                                options: [
                                    {label: "Pre seed", value: "Pre Seed"},
                                    {label: "Seed", value: "Seed"},
                                    {label: "Series A", value: "Series A"},
                                    {label: "Series B", value: "Series B"},
                                    {label: "Series C+", value: "Series C+"},
                                    {label: "Bootstrapped", value: "Bootstrapped"},
                                    {label: "Other", value: "other"},
                                ]
                            },
                            {
                                key: 'looking_for_cofounder',
                                type: 'checkbox',
                                label: "I'm currently looking for a cofounder",
                                labelDescription: "if you check this box, we'll help you get matched with a cofounder in our community",
                            }
                        ]
                    },
                    {
                        icon: <FaUserGroup color="#227A5F" size="24px"/>,
                        label: "I'm an Investor",
                        value: "investor",
                        questions: [
                            {
                                key: 'company_name',
                                label: "What's your firms's name",
                                type: "text",
                                placeholder: "Firm's Name"
                            },
                            {
                                key: 'investor_industry',
                                label: "Which industry do you invest in",
                                type: "group checkbox dropdown",
                                placeholder: "Select Your industry",
                                options: [
                                    {label: "Agritech & Biotech", value: "Agritech & Biotech"},
                                    {label: "Artificial Intelligence", value: "Artificial Intelligence"},
                                    {label: "Software as a Service (SAAS)", value: "Software as a Service (SAAS)"},
                                    {label: "Financial", value: "Financial"},
                                    {label: "Medical & Healthcare", value: "Medical & Healthcare"},
                                    {label: "Graphic Design ", value: "Graphic Design"},
                                    {label: "Other", value: "other"},
                                ]
                            },
                            {
                                key: 'company_stage',
                                label: "What stages do you invest in",
                                type: "group checkbox dropdown",
                                placeholder: "Select company stage",
                                options: [
                                    {label: "Pre seed", value: "Pre Seed"},
                                    {label: "Seed", value: "Seed"},
                                    {label: "Series A", value: "Series A"},
                                    {label: "Series B", value: "Series B"},
                                    {label: "Series C+", value: "Series C+"},
                                    {label: "Bootstrapped", value: "Bootstrapped"},
                                    {label: "Other", value: "other"},
                                ]
                            },
                        ]
                    },
                ]
            }
        ]
    }
}