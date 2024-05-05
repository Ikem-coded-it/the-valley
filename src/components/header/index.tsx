import SearchBar from "../searchbar";
import ValleyLogo from "../logo";
import Button from "../button";
import Avatar from "../avatar";
import Sidebar from "../sidebar";
import { useState } from "react";
import { cn } from "../../utils/util";

export default function Header() {
    const [open, setOpen] = useState(false)
    return(
        <div className="fixed z-50 top-0 left-0 h-[80px] w-full py-[16px] px-[15px] md:px-[30px] lg:px-[50px] xl:px-[80px] flex justify-between items-center gap-[20px] border-[1px] border-[#EBEEF3] bg-[#FFFFFF]">
            <ValleyLogo/>
            <SearchBar
            placeholder="Search here..."
            border
            className="flex-1 hidden lg:flex"
            />

            <div className="flex justify-start items-center gap-4">
                <Button
                icon={<i className="ph ph-list"></i>}
                className="text-xl border-[#ADBACC] lg:hidden"
                onClick={() => setOpen(!open)}
                />

                <Button
                icon={<i className="ph ph-plus"></i>}
                text="Create Post"
                className="hidden lg:flex text-[#227A5F] text-base font-semibold border-[#227A5F] hover:bg-[#227A5F] hover:text-[#ffffff]"
                />

                <Button
                icon={<i className="ph ph-chat-circle-dots text-[#ADBACC] text-[20px]"></i>}
                className="text-base border-[#ADBACC] hidden lg:flex"
                />

                <Avatar/>
            </div>

            <Sidebar
            className={cn(
                "fixed top-[80px]",
                {
                    "translate-x-[-20px]": open,
                    "-translate-x-[1000px]": !open
                }
            )}
            />
        </div>
    )
}