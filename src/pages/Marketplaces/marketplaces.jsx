import MarketPlaceCard from "../../organisms/marketplaces/marketplace-card";
import { marketPlaces } from "../../store/marketplaces";

export default function MarketPlaces() {
    return(
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
            {
                marketPlaces.map((place, i) => {
                    return(
                        <MarketPlaceCard key={i} {...place}/>
                    )
                })
            }
        </div>
    )
}