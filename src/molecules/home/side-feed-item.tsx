import EventDateDisplay from "@/atom/Home/event-date-display"

export default function EventSideFeedItem({text, date}) {
    return(
        <li className='h-fit w-full'>
            <div className='flex gap-4 justify-start items-center w-full'>
                <EventDateDisplay date={date}/>
                <p className="text-base text-left font-semibold break-words">{text}</p>
            </div>
        </li>
    )
}