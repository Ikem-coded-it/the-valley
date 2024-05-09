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
                                key: 'industry',
                                label: "Choose your industry",
                                type: "select",
                                placeholder: "Select your industry",
                                options: [
                                    {label: "Technology", value: "technology"},
                                    {label: "Finance", value: "finance"},
                                    {label: "Healthcare", value: "healthcare"},
                                ]
                            },
                            {
                                key: 'company_stage',
                                label: "What is your company stage",
                                type: "select",
                                placeholder: "Select company stage",
                                options: [
                                    {label: "Stage 1", value: 1},
                                    {label: "Stage 2", value: 2},
                                    {label: "Stage 3", value: 3},
                                ]
                            },
                            {
                                key: 'looking_for_founder',
                                type: 'checkbox',
                                label: 'Im currently looking for a cofounder',
                                labelDescription: "if you check this box, we'll help you get matched with a cofounder in our community"
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
                                key: 'industry',
                                label: "Which industry do you invest in",
                                type: "select",
                                placeholder: "Select Your industry",
                                options: [
                                    {label: "Technology", value: "technology"},
                                    {label: "Finance", value: "finance"},
                                    {label: "Healthcare", value: "healthcare"},
                                ]
                            },
                            {
                                key: 'company_stage',
                                label: "What stages do you invest in",
                                type: "select",
                                placeholder: "Select company stage",
                                options: [
                                    {label: "Stage 1", value: 1},
                                    {label: "Stage 2", value: 2},
                                    {label: "Stage 3", value: 3},
                                ]
                            },
                        ]
                    },
                ]
            }
        ]
    }
}