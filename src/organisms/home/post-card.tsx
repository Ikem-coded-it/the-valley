import { PostLikeButtons } from "@/atom/Home/post-buttons";
import PostHeader from "@/molecules/home/post-header";
import PostButtomButtons from "@/molecules/home/post-bottom-buttons";

type Post = {
    imageURL?: string
    time: string
    community?: {
        path: string,
        name: string
    }
    body: string
    link?: string
    comments: number
    author: string
    authorAvatarURL: string
    likes: number
    id: string
}

export default function PostCard({...post}: Post) {
    return(
        <div className="min-w-full flex items-start justify-start gap-4">
            <PostLikeButtons likes={422}/>

            <div className="grow shrink flex flex-col gap-2">
                <PostHeader
                author={post.author}
                time={post.time}
                imageURL={post.authorAvatarURL}
                community={post.community}
                />

                {/* Body and image container */}
                <div className="grow shrink flex flex-col gap-[14px] justify-start items-center">
                    {/* body */}
                    <div className="grow shrink w-full flex flex-col items-start text-left gap-1 justify-start">
                        <p className="text-base font-semibold text-[#212630]">
                            {post.body}
                        </p>

                        {
                            post.link && (
                                <a className="font-[500] text-sm text-secondary">
                                    {post.link}
                                </a>
                            )
                        }
                    </div>

                    {
                        post?.imageURL && (
                            <img
                            src={post.imageURL}
                            alt="post"
                            loading="lazy"
                            className="grow shrink w-full md:w-3/4 lg:w-full 2xl:w-1/2 rounded-[4px] min-h-[236px] max-h-[236px]"
                            />
                        )
                    }

                    <PostButtomButtons comments={post.comments} postId={post.id}/>
                </div>
            </div>
        </div>
    )
}

