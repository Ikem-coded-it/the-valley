import EventSideFeedItem from "@/molecules/home/side-feed-item";
import TrendingTopicItem from "@/molecules/home/trending-topic-item";
import SectionContainer from "@/components/section-container/index";
import TopicItem from "@/molecules/home/topic-item";
import { eventsData, trendingTopicsData, topicsData } from "@/store/home";
import LeaderboardCard from "./leaderboard-card";
import CompanyHealthCard from "./company-health-card";


function Events() {
    return(
        <>
        {
            eventsData.map(item => (
                <EventSideFeedItem key={item.text} {...item}/>
            ))
        }
        </>
    )
}

function TrendingTopics() {
    return(
        <>
            {
                trendingTopicsData.map(item => (
                    <TrendingTopicItem key={item.title} {...item}/>
                ))
            }
        </>
    )
}

function Topics() {
    return(
        <>
            {
                topicsData.map(item => (
                    <TopicItem key={item.title} {...item}/>
                ))
            }
        </>
    )
}

export default function SideFeeds() {
    return(
        <div className="h-fit flex flex-col gap-4">
            <LeaderboardCard
            avatarURL="/avatar.jpg"
            name="Thomas A"
            points={1200}
            comments={15}
            posts={100}
            thanks={30}
            reaction={12}
            />

            <CompanyHealthCard tasksCompleted={9}/>

            <SectionContainer
            title="Upcoming Events 🗓️"
            link={{
                text: "See All",
                path: "#"
            }}
            >
                <Events/>
            </SectionContainer>

            <SectionContainer
            title="Trending Topic  🔥"
            link={{
                text: "See All",
                path: "#"
            }}
            >
                <TrendingTopics/>
            </SectionContainer>

            <SectionContainer
            title="Topics 📌"
            link={{
                text: "See All",
                path: "#"
            }}
            >
                <Topics/>
            </SectionContainer>
        </div>
    )
}