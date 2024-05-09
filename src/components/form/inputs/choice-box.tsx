import { cn } from "@/utils/util"
import { ReactNode } from "react"
import { useFormikContext } from "formik"
import { Question } from "@/store/onboarding"
import { Field } from "formik"

type ChoiceBoxProps = {
    id: string
    name: string
    icon: ReactNode
    label: string
    selected?: boolean
    value: string
    setUserRoleQuestions: (any) => void
    questions: Question[]
}

export default function ChoiceBoxInput({
    id,
    name,
    icon,
    label,
    value,
    setUserRoleQuestions,
    questions,
    ...props
}: ChoiceBoxProps) {
    const { values, handleChange, handleBlur } = useFormikContext();

    return(
        <div className="w-fit h-fit">
            <label
            htmlFor={id}
            onClick={() => setUserRoleQuestions(questions as any)}
            className={cn(
                "h-[93px] w-[160px] rounded-[4px] border-[1px] p-4 flex flex-col gap-3 items-center hover:bg-[#EFFAF5] hover:border-secondary hover:cursor-pointer transition duration-[.2s]",
                {
                    "border-[#D3D9E4] bg-[#FFFFFF]": values?.[name] !== value ,
                    "border-secondary bg-[#EFFAF5]": values?.[name] === value 
                }
            )}
            >
                {icon}
                <p className="text-[#212630] text-base font-[500]">
                    {label}
                </p>
            </label>
            <Field
            {...props}
            type="radio"
            id={id}
            value={value}
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="hidden"
            />
        </div>
    )
}