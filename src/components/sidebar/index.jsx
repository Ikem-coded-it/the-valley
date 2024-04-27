import { menu, recentCommunities, recentChats, extraMenuOptions } from "../../store/menu";
import { cn } from "../../utils/util";

export default function Sidebar() {
    return(
        <aside className="sidebar min-w-[376px] max-w-[376px] border-[1px] border-[#EBEEF3] pl-[80px] py-6 bg-[#FFFFFF] flex items-start overflow-y-auto">
            <nav className="w-[256px] h-fit flex flex-col justify-start gap-12">
                <ul className="flex flex-col gap-2 items-start justify-start w-full">
                    {
                        menu.map(item => {
                            return(
                                <MenuItem key={item.text} {...item}/>
                            )
                        })
                    }
                </ul>

                {/* Recent communities section */}
                <ul className="flex flex-col gap-2 items-start justify-start w-full pr-2">
                    <h2 className="font-semibold text-base text-[#8094B0] flex items-center gap-1 justify-start">
                        Recent Communities
                        <i className="ph ph-users"></i>
                    </h2>
                    {
                        recentCommunities.map(item => {
                            return(
                                <MenuRecentItem key={item.text} {...item}/>
                            )
                        })
                    }
                </ul>

                {/* Recent chats section */}
                <ul className="flex flex-col gap-2 items-start justify-start w-full pr-2">
                    <h2 className="font-semibold text-base text-[#8094B0] flex items-center gap-1 justify-start">
                        Recent Chats
                        <i className="ph ph-chat-circle-dots"></i>
                    </h2>

                    {
                        recentChats.map(item => {
                            return(
                                <MenuRecentItem key={item.text} {...item}/>
                            )
                        })
                    }
                </ul>

                <ul className="flex flex-col gap-2 items-start justify-start w-full">
                    {
                        extraMenuOptions.map(item => {
                            return(
                                <MenuItem key={item.text} {...item}/>
                            )
                        })
                    }
                </ul>
            </nav>
        </aside>
    )
}

function MenuItem({...props}) {
    return(
        <li className="h-[40px] w-full">
            <a
            href={props.path}
            className={cn(
                "w-full h-full flex justify-start items-center gap-2 pl-4 hover:bg-[#EFFAF5] hover:text-secondary text-[#212630] group",
                
            )}>
                <img
                src={props.icon}
                alt={`${props.icon} menu link icon`}
                className="h-6 w-6 object-cover object-center"
                />

                <p className="font-semibold text-base hover:text-inherit">
                    {props.text}
                </p>
            </a>
        </li>
    )
}

function MenuRecentItem({...props}) {
    return(
        <li className="h-[40px] w-full">
            <a
            href={props.path}
            className={cn(
                "w-full h-full flex justify-between items-center gap-2 pl-4 hover:bg-[#EFFAF5] hover:text-secondary text-[#212630] group",
                
            )}>
                <div className="flex justify-start items-center gap-2">
                    <img
                    src={props.icon}
                    alt={`${props.icon} recent community avatar`}
                    className="h-6 w-6 group-hover:fill-secondary rounded-[50%] object-cover object-center"
                    />

                    <p className="font-semibold text-base hover:text-inherit">
                        {props.text}
                    </p>
                </div>

                <button classname="h-4 w-4">
                    <i className="ph ph-x text-base text-[#5A6F8C]"></i>
                </button>
            </a>
        </li>
    )
}