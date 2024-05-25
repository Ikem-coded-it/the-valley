import SearchBar from "../searchbar";
import ValleyLogo from "../logo";
import Button from "../button";
import Avatar from "../avatar";
import Sidebar from "../sidebar";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "../../utils/util";
import { useOnboarding } from "@/context/Onboarding";
import { useAuth } from "@/context/Auth";
import { Link } from "react-router-dom";
import ApplicationRoutes from "@/config/routes";

export default function Header() {
    const [open, setOpen] = useState(false)
    const {setOnboarding} = useOnboarding()
    const {pathname} = useLocation();
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        setOpen(false)
    }, [pathname])
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

                {
                    isLoggedIn === true ? (
                        <ShowIfLoggedIn/>
                    ) : (
                        <Button
                        text="Login"
                        className="bg-secondary text-white w-[100px] md:w-[154px]"
                        onClick={() => setOnboarding("login")}
                        />
                    )
                }
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

function ShowIfLoggedIn() {
    const [openMiniMenu, setOpenMiniMenu] = useState<boolean>(false)
    return(
        <div className="flex justify-start items-center gap-4">
            <Button
            icon={<i className="ph ph-plus"></i>}
            text="Create Post"
            className="hidden lg:flex text-[#227A5F] text-base font-semibold border-[#227A5F] hover:bg-[#227A5F] hover:text-[#ffffff]"
            />

            <Button
            icon={<i className="ph ph-chat-circle-dots text-[#ADBACC] text-[20px]"></i>}
            className="text-base border-[#ADBACC] hidden lg:flex"
            />

            <button
            className="relative"
            onClick={() => setOpenMiniMenu(!openMiniMenu)}
            >
                <Avatar profileLink="#"/>

                <MiniMenu open={openMiniMenu}/>
            </button>
        </div>
    )
}

function MiniMenu({ open }: {open: boolean}) {
    return(
        <div className={cn(
            "w-[130px] bg-[#ffffff] flex flex-col justify-start items-start gap-[10px] absolute bottom-[-90px] right-0 h-[90px] p-2 rounded-[8px] shadow-md z-40",
            {
                "opacity-0 pointer-events-none": !open,
                "opacity-1 pointer-events-auto": open,
            }
        )}>
            <Link to="#" className="text-base font-semibold text-slate-800 flex justify-center items-center gap-1">
                <i className="ph ph-user text-lg"></i>
                Profile
            </Link>

            <Link to={ApplicationRoutes.USER.LOGOUT} className="text-base font-semibold text-slate-800 flex justify-center items-center gap-1">
                <i className="ph ph-sign-out text-red-500 text-lg"></i>
                Logout
            </Link>
        </div>
    )
}