

export default function Badge({ points }: {points: number}) {
    return(
        <div className="bg-[#EFFAF5] h-6 rounded-[16px] px-2 py-[2px] flex justify-start items-center">
            <div className="h-3 w-3 bg-[#B6E4D0] rounded-[50%]"/>
            <p className="text-secondary text-sm font-[500]">
                {points} pts
            </p>
        </div>
    )
}