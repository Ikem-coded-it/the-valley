import SectionContainer from "@/components/section-container.jsx/index.jsx";
import PostCard from "./post-card";
import { posts } from "@/store/home";

export default function Posts() {
    return(
        <SectionContainer
        title="Posts 📝"
        link={{
            text: "See All",
            path: "#"
        }}
        className="2xl:px-[32px]"
        >
            <div className="flex flex-col justify-start items-center gap-6">
                {
                    posts.map((post, index) => (
                        <PostCard key={index} {...post} />
                    ))
                }
            </div>
        </SectionContainer>
    )
}