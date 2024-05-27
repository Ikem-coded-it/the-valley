import { PostLikeButtons } from "@/atom/Home/post-buttons";
import PostHeader from "@/molecules/home/post-header";
import PostButtomButtons from "@/molecules/home/post-bottom-buttons";
import { formatRelativeTime } from "@/utils/util";
import { useState } from "react";
import { community } from "@/services/community.service";

type Post = {
  imageURL?: string;
  time?: string;
  community?: {
    path: string;
    name: string;
  };
  body?: string;
  link?: string;
  comments?: number;
  author?: string;
  authorAvatarURL?: string;
  likes?: number;
  id?: string;
  info?: any;
};

export default function RealPostCard({ ...post }: Post) {
  console.log(post.info);

  const postData = JSON.parse(post.info.post);
  const liked = post.info.like.some(
    (x) => x.userId === "b47484b5-b3c3-4c51-964b-8e1c72f468e0"
  );

  const likeReactionObject = post.info.like.find(
    (x) => x.userId === "b47484b5-b3c3-4c51-964b-8e1c72f468e0"
  );

  const [isLiked, setIsLiked] = useState(liked);
  const [reactionId, setReactionId] = useState(likeReactionObject?.id || " ");
  const [likeCount, setLikeCount] = useState(post.info.like.length);

  const handleLike = () => {
    if (isLiked) {
      (async () => {
        await community.removeReaction(reactionId, "like");
        setIsLiked(false);
        setLikeCount(likeCount - 1);
      })();
    } else {
      (async () => {
        const reactionObj = await community.reaction("like", post.info.id);
        setIsLiked(true);
        setLikeCount(likeCount + 1);
        setReactionId(reactionObj.id);
      })();
    }
  };

  return (
    <div className="min-w-full flex items-start justify-start gap-4 ">
      <PostLikeButtons
        likes={likeCount}
        handleLike={handleLike}
        liked={isLiked}
      />

      <div className="grow shrink flex flex-col gap-2">
        <PostHeader
          author={postData.user}
          time={formatRelativeTime(post.info.time)}
          imageURL={post.authorAvatarURL}
          community={post.info.communityName}
          showDots={post.info.userId === "b47484b5-b3c3-4c51-964b-8e1c72f468e0"}
        />

        {/* Body and image container */}
        <div className="grow shrink flex flex-col gap-[14px] justify-start items-center">
          {/* body */}
          <div className="grow shrink w-full flex flex-col items-start text-left gap-1 justify-start">
            <p className="text-base font-semibold text-[#212630]">
              {postData.post}
            </p>

            {post.link && (
              <a className="font-[500] text-sm text-secondary">{post.link}</a>
            )}
          </div>

          {post?.imageURL && (
            <img
              src={post.imageURL}
              alt="post"
              loading="lazy"
              className="grow shrink w-full md:w-3/4 lg:w-full 2xl:w-1/2 rounded-[4px] min-h-[236px] max-h-[236px]"
            />
          )}
          <div className="w-full">
            <PostButtomButtons
              comments={post.info.comment.length}
              postId={post.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
