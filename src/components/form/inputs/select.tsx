import { ErrorMessage, Field } from "formik"

export default function SelectField({ name, label, value, type, error, options, placeholder, ...rest }) {
    return(
        <div className="flex flex-col justify-start items-start gap-[5px] w-full">
            <label
            htmlFor={name}
            className="text-base text-[#212630] font-[500]">
                {label}
            </label>

            <Field
            as={'select'}
            id={name}
            name={name}
            {...rest}
            className="bg-[#FFFFFF] w-[95%] h-[48px] py-3 px-4 border-[1px] border-[#D3D9E4] font-[500] text-base text-[#ADBACC]"
            >
                <option value="default" className="bg-[#FFFFFF]">{placeholder}</option>
                {
                    options.map(({ label, value }) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))
                }
            </Field>

            <ErrorMessage
            component={"p"}
            className={"text-sm text-red-400"}
            name={name}
            />
        </div>
    )
}