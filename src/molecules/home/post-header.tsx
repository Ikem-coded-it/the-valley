import { Link } from "react-router-dom"

type PostHeaderProps = {
    imageURL: string,
    author: string,
    time: string,
    community?: {
        path: string,
        name: string
    }
}

export default function PostHeader({ imageURL, author, time, community }: PostHeaderProps) {
    return(
        <div className="flex justify-start items-center gap-1">
            <img
            src={imageURL ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjFKecUxi3sSInAmCaJT5DCrv94ph8dcZ4PiSLgKVW1A&s"}
            alt="avatar"
            className="h-6 w-6 rounded-[50%] object-cover object-center"
            />

            <div className="flex flex-col md:flex-row gap-1 justify-start items-start md:items-center">
                <h2 className="font-[600] text-[#212630] text-base ">
                    {author}
                </h2>

                <p className="font-[500] text-sm text-slate-500">
                    posted {time} ago
                    {
                        community && (
                            <>
                            <span> in </span><Link to={community.path ?? "#"} className="text-secondary">{community.name}</Link>
                            </>
                        )
                    }
                </p>
            </div>
        </div>
    )
}