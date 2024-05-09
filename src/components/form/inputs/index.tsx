import Input from "./input";
import MultipleChoiceBox from "./multiple-choice-box";
import SelectField from "./select";
import Checkbox from "./checkbox";

export default function DynamicInput({...props}) {
    const render = () => {
        switch(props.type) {
            case "multiple choice-box":
                return <MultipleChoiceBox options={props?.options} {...props}/>

            case "select":
                return <SelectField options={props?.options} {...props}/>

            case "checkbox":
                return <Checkbox options={props?.options} {...props}/>

            default:
                return <Input {...props}/>
        }
    }

    return (
        <div className="w-full">
            {props && render()}
        </div>
    )
}