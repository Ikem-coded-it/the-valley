import { truncateString } from "@/utils/util";

export default function TrendingTopicItem({ title, desc, imageURL }) {
    const slicedTitle = truncateString(title, 25);
    const slicedDescription= truncateString(desc, 40);

    return(
        <li className='flex justify-between py-2 items-center'>
            <div className='flex justify-start items-start gap-4'>
                <img
                alt=''
                src={imageURL}
                width={20}
                height={20}
                className="h-[73px] min-w-[80px] object-cover object-center rounded-[8px]"
                />

                <div>
                    <p className='text-base leading-6 text-[#212630] font-semibold'>
                        <strong>{slicedTitle}</strong>
                    </p>
                    <p className='text-sm leading-5 text-[#5A6F8C] font-[500]'>
                        {slicedDescription}
                    </p>
                </div>
            </div>
        </li>
    )
}