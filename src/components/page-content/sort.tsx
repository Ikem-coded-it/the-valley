import Button from "@/components/button";
import RadioInput from "../form/inputs/radio";
import { useState, useEffect } from "react";
import { cn } from "@/utils/util";

const options = [
    {label: "A - Z", value: "asc"},
    {label: "Z - A", value: "desc"},
    {label: "new - old", value: "desc-date"},
    {label: "old - new", value: "asc-date"},
]

export default function SortButton({...props}) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        function handleSort() {
            // update search query
            // Make API call
            console.log("sort query: ", props.values)
        }

        handleSort()
    }, [props.values])
    return(
        <div className="relative">
            <Button
            icon={
                <img
                className="h-6 w-6"
                src="/pages/marketplaces/sort.svg"
                alt="sort button icon"
                />
            }
            onClick={() => setIsOpen(!isOpen)}
            text="Sort"
            className="font-semibold text-[#212630] text-sm"
            />

            <div className={cn(
                "absolute top-[40px] bg-[#ffffff] w-[130px] left-0 border-[1px] border-slate-500 flex flex-col justify-start items-start transition duration-[.6s]",
                {
                    "hidden": !isOpen,
                    "flex": isOpen,
                }
            )}>
                {options.map(option => {
                    return(
                        <RadioInput
                        css="height: 56px;border-bottom: 1px solid #EBEEF3;padding-left: 16px;align-items: center;display: inherit;"
                        {...option}
                        name={name}
                        {...props}
                        />
                    )
                })}
            </div>
        </div>
    )
}