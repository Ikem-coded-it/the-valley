import { cn } from "../../utils/util";
import { filterItems } from "../../store/marketplaces";

export default function MarketPlaceFilter() {
    return (
        <section className="h-fit w-fit">
            <div className="h-fit w-fit flex gap-[9px]">
                {
                    filterItems.map(item => {
                        return(
                            <FilterItem key={item} text={item}/>
                        )
                    })
                }
            </div>
        </section>
    )
}

function FilterItem({
    active = "All",
    text
}) {
    return(
        <button className={cn(
            "h-[41px] w-fit py-[10px] px-4 rounded-[20px] border-[1px] border-[#EBEEF3] font-[500] text-sm text-[#212630] bg-[#FFFFFF] hover:text-white hover:bg-secondary transition duration-[.2s]",
            {
                "bg-secondary text-white": active == text
            }
        )}>
            {text}
        </button>
    )
}