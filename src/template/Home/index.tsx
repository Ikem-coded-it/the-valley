import Page from "@/components/main";
import { goToTop } from "@/utils/util";
import { useEffect } from "react";
import CommunitiesSlider from "../../organisms/home/communities-slider";
import SideFeeds from "../../organisms/home/sidefeeds";
import Posts from "@/organisms/home/posts";
import PostInputBox from "@/molecules/home/post-input-box";

export default function HomeTemplate() {

    useEffect(() => {
        goToTop()
    }, [])

    return(
        <Page className="flex-row justify-between items-start gap-4 2xl:gap-6">
            <section className="grow shrink min-w-full lg:min-w-[425px] 2xl:min-w-[625px] min-h-screen max-h-fit flex flex-col justify-start items-start gap-4">
                <CommunitiesSlider/>
                <PostInputBox/>
                <Posts/>
            </section>

            <section className="hidden lg:flex min-w-[296px] min-h-screen max-h-fit flex-col gap-4">
                <SideFeeds/>
            </section>
        </Page>
    )
}