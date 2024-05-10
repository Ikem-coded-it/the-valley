import { cn } from "@/utils/util"
import { useFormikContext } from "formik"
import { Field } from "formik"

type ChipProps = {
    id: string
    name: string
    label: string
    value: string
}

export default function ChipInput({
    id,
    name,
    label,
    value,
    ...props
}: ChipProps) {
    const { values, handleChange, handleBlur } = useFormikContext();
    
    return(
        <div className="w-fit h-fit">
            <label
            htmlFor={id}
            className={cn(
                "h-[44px] rounded-[20px] border-[1px] px-4 flex items-center justify-center hover:border-secondary hover:cursor-pointer transition duration-[.05s]",
                {
                    "border-[#D3D9E4] bg-[#FFFFFF]": values?.[name] !== value ,
                    "border-secondary bg-secondary text-white": values?.[name] === value 
                }
            )}
            >
                {label}
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