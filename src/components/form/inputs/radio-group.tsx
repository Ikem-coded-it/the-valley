import RadioInput from "./radio";
import { ErrorMessage } from "formik";

export default function RadioGroup({ options, ...props }) {
    return(
        <div className="w-full flex flex-col rounded-[8px] border-[1px] border-[#D3D9E4] bg-[#FFFFFF]">
            {options.map((option, idx) => {
                return(
                    <RadioInput
                    key={idx}
                    $css="height: 56px;border-bottom: 1px solid #EBEEF3;padding-left: 16px;align-items: center;"
                    {...option}
                    {...props}
                    />
                )
            })}

            <ErrorMessage
            component={'p'}
            className={"text-sm text-red-400 ml-[20px]"}
            name={props.name}
            />
        </div>
    )
}