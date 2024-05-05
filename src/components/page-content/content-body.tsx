

export default function ContentBody({children}) {
    return(
        <section className="bg-[#FFFFFF] p-[15px] md:p-8 flex flex-col justify-start items-center h-fit w-full gap-6 rounded-[8px]">
            {children}
        </section>
    )
}