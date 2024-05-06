import { Link } from "react-router-dom";

export default function Avatar({ profileLink, avatarURL }: {profileLink?: string, avatarURL: string}) {
    return(
        <Link to={profileLink ?? "#"}>
            <div className="relative h-fit w-fit">
                <img
                className="w-[48PX] h-[48px] rounded-[50%] object-cover object-center"
                src={avatarURL ?? "/avatar.jpg"}
                alt="avatar"
                />

                <div
                className="absolute h-4 w-4 rounded-[50%] bg-[#22C55E] bottom-0 right-0"
                />
            </div>
        </Link>
    )
}