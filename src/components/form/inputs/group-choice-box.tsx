import { cn } from "@/utils/util";
import ChoiceBoxInput from "./choice-box";
import { ErrorMessage } from "formik";

export default function GroupChoiceBox({ options, ...props }) {
    return(
        <div className={cn(
            "w-full grow flex flex-col gap-1 items-start",
            options.className
        )}>
            <div className="flex w-full flex-col md:flex-row gap-2 items-center md:items-start">
                {
                    options.map((option, index) => (
                        <ChoiceBoxInput
                        key={option.label}
                        {...option}
                        {...props}
                        id={`${option.name}.${index}`}
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