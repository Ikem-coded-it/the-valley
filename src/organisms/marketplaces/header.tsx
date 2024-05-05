import SearchBar from "../../components/searchbar";

export default function MarketPlacesHeader() {
    return(
        <header className="relative overflow-clip bg-secondary w-full h-[238px] p-4 md:p-6 rounded-[8px] flex flex-col justify-start items-center gap-[48px]">
            <RightPattern/>
            <LeftPattern/>
            <div className="w-full flex flex-col gap-[9px] items-center justify-start">
                <h1 className="font-semibold text-[32px] text-[#FFFFFF] z-10 text-center">
                    Marketplaces
                </h1>

                <p className="font-[500] text-sm text-[#FFFFFF] z-10 text-center">
                Check product ready to sell on this marketplace. you can buy it or gift it
                </p>
            </div>

            <SearchBar
            placeholder="Search here..."
            className={"w-full z-10"}
            />
        </header>
    )
}

function RightPattern() {
    return(
        <img
        src="/pages/marketplaces/left-pattern.svg"
        alt="marketplaces header pattern"
        className="absolute scale-x-[-1] top-0 right-0"
        />
    )
}

function LeftPattern() {
    return(
        <img
        src="/pages/marketplaces/left-pattern.svg"
        alt="marketplaces header pattern"
        className="absolute left-0 top-0"
        />
    )
}