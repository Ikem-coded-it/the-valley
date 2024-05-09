import Input from "./input";
import GroupChoiceBox from "./group-choice-box";
import SelectField from "./select";
import Checkbox from "./checkbox";
import GroupChipInput from "./group-chip-input";
import SearchBar from "@/components/searchbar";
import RadioInput from "./radio";
import RadioGroup from "./radio-group";
import CheckboxGroup from "./checkbox-group";

export default function DynamicInput({...props}) {
    const render = () => {
        switch(props.type) {
            case "group choice-box":
                return <GroupChoiceBox options={props?.options} {...props}/>

            case "select":
                return <SelectField options={props?.options} {...props}/>

            case "checkbox":
                return <Checkbox options={props?.options} {...props}/>

            case "group chip":
                return <GroupChipInput options={props?.options} {...props}/>

            case "search":
                return <SearchBar className="w-full" placeholder="Search here..."/>

            case "radio":
                return <RadioInput {...props}/>

            case "radio group":
                return <RadioGroup  options={props?.options} {...props}/>

            case "checkbox group":
                return <CheckboxGroup  options={props?.options} {...props}/>

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