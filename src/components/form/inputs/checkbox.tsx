import styled from "styled-components";
import { Field } from "formik"

const CheckboxContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start:
    gap: 10px;
`

export default function Checkbox({ name, label, value, type, ...rest }) {
    return(
        <CheckboxContainer>
            <Field
            type="checkbox"
            name={name}
            id={name}
            {...rest}
            className="mr-2"
            />

            <label htmlFor={name} className="text-base text-[#212630] font-[#212630]">
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