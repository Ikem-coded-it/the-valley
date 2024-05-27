import SearchBar from "@/components/searchbar";
import Button from "@/components/button";

export default function MarketPlacesContentHeader() {
    return(
        <div className="h-fit w-full flex flex-col-reverse md:flex-row gap-[10px] justify-start md:justify-between items-start md:items-center">
            <SearchBar
            className={"w-[280px]"} 
            border
            placeholder="Search here..."
            />

            <div className="flex justify-between items-center gap-[10px]">
                <Button
                icon={
                    <img
                    className="h-6 w-6"
                    src="/pages/marketplaces/sort.svg"
                    alt="sort button icon"
                    />
                }
                text="Sort"
                className="font-semibold text-[#212630] text-sm"
                />

                <Button
                icon={
                    <img
                    className="h-6 w-6"
                    src="/pages/marketplaces/filter.svg"
                    alt="filter button icon"
                    />
                }
                text="Filter"
                className="font-semibold text-[#212630] text-sm"
                />
            </div>
        </div>
    )
}