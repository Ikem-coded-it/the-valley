

export default function ContentCard({
    imageURL,
    title,
    description,
    category
}) {
    return(
        <div className="overflow-clip min-w-[285px] min-h-[334px] rounded-t-[8px] border-[1px] border-[#EBEEF3] bg-[#FFFFFF] flex flex-col justify-start items-start gap-4">
            <img
            src={imageURL}
            alt="marketplace banner"
            loading="lazy"
            className="min-h-[146px] max-h-[146px] w-full flex-1 object-cover object-center rounded-t-[8px]"
            />

            <div className="h-fit w-full px-4 pb-4 flex flex-col justify-start items-start gap-4 bg-[#FFFFFF]">
                <div className="w-full flex flex-col items-start justify-start gap-2">
                    <Category text={category}/>
                    <h3 className="font-semibold text-[#212630] text-[20px]">
                        {title}
                    </h3>
                </div>

                <p className="font-[500] text-base text-[#3F4E65]">
                    {description}
                </p>
            </div>
        </div>
    )
}

function Category({text}) {
    return(
        <div className="border-[1px] border-[#D3D9E4] h-[41px] w-fit rounded-[20px] flex justify-center items-center color font-[500] text-[#4C5F7D] py-[10px] px-4">
            {text}
        </div>
    )
}