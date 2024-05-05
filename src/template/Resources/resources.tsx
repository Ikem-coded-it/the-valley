import ContentCard from "../../components/page-content/content-card";
import { resources } from "../../store/resources";

export default function Resources() {
    return(
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-start items-start gap-4">
            {
                resources.map((item, i) => {
                    return(
                        <ContentCard key={i} {...item}/>
                    )
                })
            }
        </div>
    )
}