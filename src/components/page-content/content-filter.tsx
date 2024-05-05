import { cn } from "../../utils/util";
import { filterItems } from "../../store/content-filter";

export default function ContentFilter({type}) {
    return (
        <section className="h-fit w-full">
            <div className="h-fit w-full flex justify-center items-center flex-wrap gap-[9px]">
                {
                    filterItems.map(item => {
                        return(
                            <FilterItem key={item} text={item} type={type}/>
                        )
                    })
                }
            </div>
        </section>
    )
}

function FilterItem({
    active = "All",
    text,
    type = "light"
}) {
    return(
        <button className={cn(
            "h-[41px] w-fit py-[10px] px-4 rounded-[20px] border-[1px] font-[500] text-sm text-[#212630] bg-[#FFFFFF] transition duration-[.2s]",
            {
                "hover:bg-secondary hover:text-white border-secondary": type == "light",
                "bg-secondary hover:bg-white hover:text-secondary border-[#EBEEF3] text-white": type == "dark",
                // "bg-secondary text-white": active == text
            }
        )}>
            {text}
        </button>
    )
}