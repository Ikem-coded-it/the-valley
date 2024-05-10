import { useState } from "react";
import { cn } from "@/utils/util";
import { IoCaretDown } from "react-icons/io5";
import RadioInput from "./radio";
import { useFormikContext } from "formik";

export default function Dropdown({ name, label, value, type, error, options, placeholder, ...rest }) {
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
                className="h-[48px] w-full bg-inherit py-3 px-4 flex items-center justify-between text-[#ADBACC]">
                    {values?.[name] ?? label}

                    <IoCaretDown color="#ADBACC" size="10px"/>
                </button>

                <div className={cn(
                    "w-full flex flex-col justify-start items-start transition duration-[.6s]",
                    {
                        "hidden": !isOpen,
                        "flex": isOpen,
                    }
                )}>
                    {options.map(option => {
                        return(
                            <RadioInput
                            css="height: 56px;border-bottom: 1px solid #EBEEF3;padding-left: 16px;align-items: center;display: inherit;"
                            {...option}
                            name={name}
                            placeholder={placeholder}
                            {...rest}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}