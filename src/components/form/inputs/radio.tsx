import styled from "styled-components";
import { RadioButton } from 'primereact/radiobutton';

const RadioContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center:
    gap: 10px;
    ${({css}: any) => css}
`

export default function RadioInput({ name, label, value, css, ...rest }) {
    return(
        <RadioContainer css={css as string}>
            <RadioButton
            name={name}
            value={value}
            inputId={`${label}.${value}`}
            {...rest}
            className="mr-2 invalid:bg-red-600"
            variant="filled"
            invalid={!!rest.error}
            />

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