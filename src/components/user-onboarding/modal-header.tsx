

export default function ModalHeader({
    caption,
    title,
    description
}: {
    caption?: string
    title: string
    description?: string
}) {
    return(
        <div className="flex flex-col justify-start items-start gap-1 w-full">
            {caption && <p className="text-base text-secondary font-[500]">
                {caption}
            </p>}

            <h1 className="text-[#212630] text-2xl font-semibold text-left w-full">
                {title}
            </h1>

            {description && <p className="text-sm text-[#4C5F7D] font-[500]">
                {description}
            </p>}
        </div>
    )
}