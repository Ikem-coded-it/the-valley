import Badge from "@/atom/Home/badge"
import Avatar from "@/components/avatar"
import { Link } from "react-router-dom"
import ApplicationRoutes from "@/config/routes"
import Button from "@/components/button"

type LeaderboardCardProps = {
    avatarURL: string,
    name: string,
    points: number,
    comments: number,
    posts: number,
    thanks: number,
    reaction: number
}

export default function LeaderboardCard({
    avatarURL,
    name,
    points,
    comments,
    posts,
    thanks,
    reaction
}: LeaderboardCardProps) {
    return(
        <div className="w-full flex flex-col gap-2 justify-start items-center px-4 bg-[#FFFFFF] rounded-[8px]">
            <div className="w-full h-[92px] flex justify-start items-center gap-[8px]">
                <div className="relative">
                    <Avatar url={avatarURL}/>

                    <div className="bg-[#EF4444] font-semibold text-xs text-white h-6 w-6 rounded-[50%] absolute bottom-0 right-0 flex justify-center items-center">
                        #1
                    </div>
                </div>

                <div className="grow shrink flex flex-col items-start justify-between">
                    <h2 className="font-semibold text-lg text-[#212630]">
                        {name}
                    </h2>

                    <Badge points={points}/>
                </div>
            </div>

            <div className="w-full h-[74px] flex justify-around items-center gap-[6px] flex-wrap">
                <ScoreItem type="Comments" score={comments}/>
                <ScoreItem type="Posts" score={posts}/>
                <ScoreItem type="Thanks" score={thanks}/>
                <ScoreItem type="Reaction" score={reaction}/>
            </div>

            <div className="w-full h-[80px] flex justify-center items-center">
                <Link to={ApplicationRoutes.LEADERBOARD} className="w-full" >
                    <Button
                    text="See Leaderboard"
                    className="h-[48px] w-full text-secondary bg-[#EFFAF5] hover:bg-secondary hover:text-white"
                    />
                </Link>
            </div>
        </div>
    )
}

function ScoreItem({type, score}: {type: string, score: number}) {
    return(
        <div className="flex flex-col items-center justify-center gap-[8px]">
            <strong className="font-semibold text-base text-[#212630]">{score}</strong>
            <p className="text-xs font-[500] text-[#5A6F8C]">{type}</p>
        </div>
    )
}