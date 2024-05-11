import styled from "styled-components";
import { RadioButton } from 'primereact/radiobutton';
import { useFormikContext } from "formik";
import { cn } from "@/utils/util";

const RadioContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center:
    gap: 10px;
    ${({css}: any) => css}
`

export default function RadioInput({ name, label, value, css, ...rest }) {
    const { values } = useFormikContext<any>()
    return(
        <RadioContainer css={css as string}>
            <div className="mr-2">
                <RadioButton
                name={name}
                value={value}
                inputId={`${label}.${value}`}
                {...rest}
                variant="filled"
                invalid={!!rest.error}
                className="hidden"
                />

                <label
                className="rounded-[50%] border-[1px] border-slate-500 flex justify-center items-center"
                htmlFor={`${label}.${value}`}
                >
                    <div className={cn(
                        "h-3 w-3 rounded-[50%] m-1",
                        {
                            "bg-secondary": value === values?.[name],
                            "bg-transparent": value !== values?.[name]
                        }
                    )}/>
                </label>
            </div>

            <label
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
        </RadioContainer>
    )
}