import SectionContainer from "@/components/section-container.jsx";
import SliderFrame from "@/components/slider/frame";
import CommunityCard from "@/molecules/home/community-card";

interface ICOMMUNITIES {
  title: string;
  data: {
    imageURL: string;
    alt: string;
    title: string;
    members: number;
  }[];
}

export default function CommunitiesIndex({ title, data }: ICOMMUNITIES) {
  return (
    <SectionContainer title={title} link={{ text: "See All", path: "#" }}>
      <SliderFrame>
        <div className="flex gap-2 justify-start items-center h-fit">
          {data.map((info) => (
            <CommunityCard key={info.title} {...info} />
          ))}
        </div>
      </SliderFrame>
    </SectionContainer>
  );
}
