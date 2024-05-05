import { useState, useEffect } from "react";

export default function EventDateDisplay({date}) {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");

    useEffect(() => {
        setDay(date.toString().split(' ')[2])
        setMonth(date.toString().split(' ')[1])
    }, [])
    
    return(
        <div className="h-[58px] min-w-[59px] bg-[#EFFAF5] rounded-[8px] flex flex-col justify-center items-center gap-[10pz]">
            <strong className="font-semibold text-[20px] text-secondary">{day}</strong>
            <p className="font-[500] text-sm text-secondary">{month}</p>
        </div>
    )
}