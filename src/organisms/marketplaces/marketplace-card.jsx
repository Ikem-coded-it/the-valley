

export default function MarketPlaceCard({
    src,
    title,
    description,
    price
}) {
    return(
        <div className="overflow-clip min-w-[285px] min-h-[334px] rounded-t-[8px] border-[1px] border-[#EBEEF3] bg-[#FFFFFF] flex flex-col justify-start items-start gap-4">
            <img
            src={src}
            alt="marketplace banner"
            loading="lazy"
            className="min-h-[146px] max-h-[146px] flex-1 min-w-[275px] max-w-[275px] object-cover object-center rounded-t-[8px]"
            />

            <div className="h-fit w-full px-4 pb-4 flex flex-col justify-start items-start gap-4 bg-[#FFFFFF]">
                <h3 className="font-semibold text-[#212630] text-[20px]">
                    {title}
                </h3>

                <p className="font-[500] text-base text-[#3F4E65]">
                    {description}
                </p>

                <strong className="text-secondary text-[20px] font-semibold">
                    ${price}
                </strong>
            </div>
        </div>
    )
}