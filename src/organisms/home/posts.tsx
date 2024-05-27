import SectionContainer from "@/components/section-container";
import PostCard from "./post-card";
import { posts } from "@/store/home";
import RealPostCard from "./real-post-card";

export default function Posts({ ...props }) {
  return (
    <SectionContainer
      title="Posts 📝"
      link={{
        text: "See All",
        path: "#",
      }}
      className="2xl:px-[32px]"
    >
      <div className="flex flex-col justify-start items-center gap-6 w-full">
        {props.showReal ? (
          <>
            {props.communityPost.map((x) => {
              return <RealPostCard info={x} />;
            })}
          </>
        ) : (
          <>
            {posts.map((post, index) => (
              <PostCard key={index} {...post} />
            ))}
          </>
        )}
      </div>
    </SectionContainer>
  );
}
