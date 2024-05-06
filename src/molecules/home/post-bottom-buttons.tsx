import {
    CommentButton,
    ShareButton,
    SaveButton,
    GiveThanksButton
} from "@/atom/Home/post-buttons";

export default function PostButtomButtons({
    comments,
    postId
}: {
    comments: number
    postId: string
}) {
    return(
        <div className="flex justify-start items-start gap-2 flex-wrap">
            <CommentButton comments={comments} postId={postId}/>
            <ShareButton postId={postId}/>
            <SaveButton postId={postId}/>
            <GiveThanksButton postId={postId}/>
        </div>
    )
}