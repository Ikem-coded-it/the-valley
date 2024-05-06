import EventSideFeedItem from "../../molecules/home/side-feed-item.js";
import TrendingTopicItem from "../../molecules/home/trending-topic-item.js";
import SectionContainer from "../../components/section-container.jsx/index.js";
import TopicItem from "@/molecules/home/topic-item.js";
import { eventsData, trendingTopicsData, topicsData } from "@/store/home";
import LeaderboardCard from "./leaderboard-card.js";
import CompanyHealthCard from "./company-health-card.js";


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
        <>
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
        </>
    )
}