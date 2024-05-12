import Page from '@/components/main';
import MarketPlacesHeader from '@/organisms/marketplaces/header';
import MarketPlaceFilter from '@/organisms/marketplaces/filter';
import MarketPlacesContentHeader from '@/organisms/marketplaces/content-header';
import MarketPlaces from './marketplaces';
import { goToTop } from "@/utils/util";
import { useEffect } from "react";

export default function MarketPlacesTemplate() {
    useEffect(() => {
        goToTop()
    }, [])
    
    return(
        <Page>
            <MarketPlacesHeader/>
            <MarketPlaceFilter/>

            <section className="bg-[#FFFFFF] p-[15px] md:p-8 flex flex-col justify-start items-center h-fit w-full gap-6 rounded-[8px]">
                <MarketPlacesContentHeader/>
                <MarketPlaces/>
            </section>
        </Page>
    )
}