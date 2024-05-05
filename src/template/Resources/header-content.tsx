import SearchBar from "../../components/searchbar";
import ContentFilter from "../../components/page-content/content-filter";

export default function ResourcesHeaderContent() {
    return(
        <div className="flex flex-col justify-between items-center h-full z-10">
            <div className="flex justify-between items-start w-full">
                <div className="flex flex-col items-start justify-start gap-2">
                    <h1 className="text-[#FFFFFF] font-[600] text-2xl">
                        Resources
                    </h1>

                    <p className="text-[#EBEEF3] font-[500] text-sm">
                    This all resource if you want to see the founders, 
                    investors, and another information
                    </p>
                </div>

                <SearchBar className="w-[247px]"/>
            </div>

            <ContentFilter type="dark"/>
        </div>
    )
}