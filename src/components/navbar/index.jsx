import SearchBar from "../searchbar";
import ValleyLogo from "../logo";
import Button from "../button";
import Avatar from "../avatar";

export default function Navbar() {
    return(
        <div className="fixed z-50 top-0 left-0 h-[80px] w-full py-[16px] px-[80px] flex justify-between border-[1px] border-[#EBEEF3] bg-[#FFFFFF]">
            <ValleyLogo/>
            <SearchBar
            placeholder="Search here..."
            border
            className="w-[650px]"
            />

            <div className="flex justify-start items-center gap-4">
                <Button
                icon={<i className="ph ph-plus"></i>}
                text="Create Post"
                className="text-[#227A5F] text-base font-semibold border-[#227A5F] hover:bg-[#227A5F] hover:text-[#ffffff]"
                />

                <Button
                icon={<i className="ph ph-chat-circle-dots text-[#ADBACC] text-[20px]"></i>}
                className="text-base border-[#ADBACC]"
                />

                <Avatar/>
            </div>
        </div>
    )
}