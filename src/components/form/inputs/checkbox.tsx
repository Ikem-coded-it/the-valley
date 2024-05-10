import styled from "styled-components";
import { Field } from "formik"

const CheckboxContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start:
    gap: 10px;
    ${({css}: any) => css}
`

export default function Checkbox({ name, label, value, type, css, ...rest }) {
    return(
        <CheckboxContainer css={css}>
            <Field
            type="checkbox"
            name={name}
            value={typeof value == "boolean" ? undefined : value} // no value if used as single checkbox and not a group, defaults to true or false when single
            id={`${label}.${value}`}
            {...rest}
            className="mr-2"
            />

            <label htmlFor={`${label}.${value}`} className="text-base text-[#212630] font-[500]">
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