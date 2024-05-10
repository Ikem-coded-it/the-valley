import { cn } from "@/utils/util";
import ChipInput from "./chip";
import { ErrorMessage } from "formik";

export default function GroupChipInput({ options, ...props }) {
    return(
        <div className={cn(
            "w-full grow flex flex-col gap-2 items-start",
            options.className
        )}>
            <label
            className="font-[500] text-lg text-[#212630]"
            htmlFor={props.name}>
                {props.label}
            </label>

            <div className="flex w-full gap-2 items-start justify-start flex-wrap">
                {
                    options.map((option, index) => (
                        <ChipInput
                        key={option.label}
                        {...option}
                        {...props}
                        id={`${option.label}.${option.value}`}
                        label={option.label}
                        value={option.value}
                        />
                    ))
                }
            </div>

            <ErrorMessage
            component={"p"}
            className={"text-sm text-red-400"}
            name={props.name}
            />
        </div>
    )
}