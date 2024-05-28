import styled from "styled-components";
import { ErrorMessage } from "formik";

const StyledInput = styled.input`
    width: 100%;
    height: 48px;
    padding: 12px 16px;
    border: 1px solid #D3D9E4;
    color: #ADBACC;
    font-weight: 500;
    font-size: 16px;
    background-color: #FFFFFF;
`

type InputProps = {
    name: string
    label: string
    value: string | number
    type: 'text' | 'number'
    error: string
    placeholder: string
}

export default function Input({ name, label, value, type, error, placeholder, ...rest }: InputProps) {
    return(
        <div className="flex flex-col justify-start items-start gap-[5px] w-full">
            <label
            htmlFor={name}
            className="text-base text-[#212630] font-[500]">
                {label}
            </label>

            <StyledInput
            id={name}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            {...rest}
            />

            <ErrorMessage
            component={"p"}
            className={"text-sm text-red-400"}
            name={name}
            />
        </div>
    )
}