import { MouseEventHandler, ReactNode } from "react"

const PostLikeButtons = ({likes}: {likes: number}) => {
    const handleLike = () => {

    }

    const handleDislike = () => {
        
    }

    return(
        <div className="flex flex-col h-[107px] w-[28px] gap-[3px] justify-center -translate-y-4">
            <button onClick={handleLike}>
                <i className="ph ph-arrow-fat-up text-[#5A6F8C] text-lg"></i>
            </button>

            <p className="font-semibold text-sm text-[#212630]">{likes}</p>

            <button onClick={handleDislike}>
                <i className="ph ph-arrow-fat-down text-[#5A6F8C] text-lg"></i>
            </button>
        </div>
    )
}

function PostBottomButton({
    children,
    onClick
}: {
    children: ReactNode,
    onClick: MouseEventHandler
}) {
    return(
        <button
        className="h-10 bg-[#F6F7F9] hover:bg-[#e9ecf1] gap-[3px] font-semibold text-sm text-[#212630] flex justify-center items-center px-4 py-2 rounded-[100px]"
        onClick={onClick}
        >
            {children}
        </button>
    )
}

const CommentButton = ({comments, postId}: {comments: number, postId: string}) => {
    const handleComment = () => {

    }

    return(
        <PostBottomButton onClick={handleComment}>
            <i className="ph ph-chat text-2xl text-[#5A6F8C]"></i>
            {` ${comments} `}
            <p className="hidden md:block">Comments</p>
        </PostBottomButton>
    )
}

const ShareButton = ({postId}) => {
    const handleShare = () => {

    }

    return(
        <PostBottomButton onClick={handleShare}>
            <i className="ph ph-export text-2xl text-[#5A6F8C]"></i>
            <p className="hidden md:block">Share</p>
        </PostBottomButton>
    )
}

const SaveButton = ({postId}) => {
    const handleSave = () => {

    }

    return(
        <PostBottomButton onClick={handleSave}>
            <i className="ph ph-bookmark-simple text-2xl text-[#5A6F8C]"></i>
            <p className="hidden md:block">Save</p>
        </PostBottomButton>
    )
}

const GiveThanksButton = ({postId}) => {
    const handleGiveThanks = () => {

    }

    return(
        <PostBottomButton onClick={handleGiveThanks}>
            Give Thanks
        </PostBottomButton>
    )
}

export {
    PostLikeButtons,
    CommentButton,
    ShareButton,
    SaveButton,
    GiveThanksButton
}