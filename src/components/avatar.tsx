import { Link } from "react-router-dom";
import useUser from "@/hooks/useUser";

export default function Avatar({ profileLink, url }: {profileLink?: string, url?: string}) {
    const { user } = useUser()
    return(
        <Link to={profileLink ?? "#"}>
            <div className="relative h-fit w-fit">
                <img
                className="w-[48PX] h-[48px] rounded-[50%] object-cover object-center"
                src={url ?? user?.avatarUrl ?? "/default-avatar.png"}
                alt="avatar"
                />

                <div
                className="absolute h-4 w-4 rounded-[50%] bg-[#22C55E] bottom-0 right-0"
                />
            </div>
        </Link>
    )
}