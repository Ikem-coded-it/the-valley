import EventSideFeedItem from "../../molecules/home/side-feed-item.js";
import TrendingTopicItem from "../../molecules/home/trending-topic-item.js";
import SectionContainer from "../../components/section-container.jsx/index.js";
import TopicItem from "@/molecules/home/topic-item.js";
import { eventsData, trendingTopicsData, topicsData } from "@/store/home"


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