import styled from "styled-components";
import { useState } from "react";
import { cn } from "@/utils/util";
import { Field } from "formik"

const CheckboxContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start:
    gap: 10px;
    ${({$css}: any) => $css}
`

export default function Checkbox({ name, label, value, type, $css, ...rest }) {
    const [checked, setChecked] = useState<boolean>()

    return(
        <CheckboxContainer $css={$css}>
            <div className="mr-2">
                <Field
                type="checkbox"
                name={name}
                value={typeof value == "boolean" ? undefined : value} // no value if used as single checkbox and not a group, defaults to true or false when single
                id={`${label}.${value}`}
                {...rest}
                className="hidden"
                />

                 {/* Custom label styled as green checkbox */}
                <label
                role="button"
                htmlFor={`${label}.${value}`}
                onClick={() => setChecked(!checked)}
                className={cn(
                    "h-4 w-4 rounded-[4px] flex justify-center items-center border-[1px] border-slate-500",
                    {"bg-secondary": checked, "bg-transparent": !checked}
                )}>
                    <i className="ph ph-check text-[10px] font-[500] text-white"></i>
                </label>
            </div>

            {/* Text label for checkbox description */}
            <label
            onClick={() => setChecked(!checked)}
            htmlFor={`${label}.${value}`}
            className="text-base text-[#212630] font-[500]">
                <div className="flex flex-col justify-start items-start gap-1">
                    <p>{label}</p>
                    {
                        rest.labelDescription &&
                        <p className="text-fontBlue text-sm font-[500]">{rest.labelDescription}</p>
                    }
                </div>
            </label>
        </CheckboxContainer>
    )
}