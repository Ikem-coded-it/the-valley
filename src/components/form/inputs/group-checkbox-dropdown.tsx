import { useState } from "react";
import { cn } from "@/utils/util";
import { IoCaretDown } from "react-icons/io5";
import Checkbox from "./checkbox";
import { useFormikContext, ErrorMessage } from "formik";

export default function GroupCheckboxDropdown({ name, label, value, type, error, options, placeholder, ...rest }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { values } = useFormikContext<any>()

    return(
        <div className="flex flex-col justify-start items-start gap-[5px] w-full">
            <label
            htmlFor={name}
            className="text-base text-[#212630] font-[500]">
                {label}
            </label>

            <div className="bg-[#ffffff] w-full">
                <button
                type="button"
                onClick={() => setIsOpen(prev => !prev)}
                className="min-h-[48px] max-h-fit w-full bg-inherit py-3 px-4 flex items-center justify-between text-[#ADBACC]">
                    {(values?.[name] && Array.isArray(values?.[name]) && values?.[name]?.join(', ')) ?? label}

                    <IoCaretDown color="#ADBACC" size="10px"/>
                </button>

                <div className={cn(
                    "w-full flex flex-col justify-start items-start transition duration-[.6s]",
                    {
                        "hidden": !isOpen,
                        "flex": isOpen,
                    }
                )}>
                    {options.map((option, i) => {
                        return(
                            <Checkbox
                            key={i}
                            $css="height: 56px;border-bottom: 1px solid #EBEEF3;padding-left: 16px;align-items: center;display: inherit;"
                            {...option}
                            name={name}
                            placeholder={placeholder}
                            {...rest}
                            />
                        )
                    })}

                    <ErrorMessage
                    component={"p"}
                    className={"text-sm text-red-400 ml-[20px]"}
                    name={name}
                    />
                </div>
            </div>
        </div>
    )
}