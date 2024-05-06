import { truncateString } from "@/utils/util";

type Topic = {
    title: string
    time: string
    posts: number
}

export default function TopicItem({title, time, posts}: Topic) {
    const slicedTitle = truncateString(title, 25);

    return(
        <li className='flex justify-between py-2 items-center w-full'>
            <div className="flex justify-between items-center w-full">
                <div className="flex flex-col grow shrink items-start justify-start">
                    <h3 className="font-[500] text-base text-[#000000]">
                        {slicedTitle}
                    </h3>

                    <div className="w-full flex gap-1 items-end justify-start">
                        <p className="text-[#8094B0] font-[500] text-sm">
                            Created {time} ago
                        </p>

                        <div className="bg-[#EFFAF5] h-6 rounded-[16px] px-2 py-[2px] flex justify-start items-center">
                            <div className="h-3 w-3 bg-[#B6E4D0] rounded-[50%]"/>
                            <p className="text-secondary text-sm font-[500]">
                                {posts} post
                            </p>
                        </div>
                    </div>
                </div>

                <button>
                    <i className="ph ph-dots-three text-[#5A6F8C] text-[20px]"></i>
                </button>
            </div>
        </li>
    )
}