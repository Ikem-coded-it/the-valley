import SliderFrame from "@/components/slider/frame";
import CommunityCard from "@/molecules/home/community-card";
import SectionContainer from "@/components/section-container";
import { community } from "@/services/community.service";
import { useEffect, useState } from "react";

export default function CommunitiesSlider() {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await community.index();

      setCommunities(res);
      console.log("communities", res);
    })();
  }, []);
  // const cards = [
  //   {
  //     imageURL: "/tree.jpg",
  //     alt: "Slide 1",
  //     title: "climate change",
  //     members: 1200,
  //   },
  //   {
  //     imageURL: "/stairs.jpg",
  //     alt: "Slide 2",
  //     title: "Abstract People",
  //     members: 1200,
  //   },
  //   {
  //     imageURL: "/office.jpg",
  //     alt: "Slide 3",
  //     title: "Standard",
  //     members: 1200,
  //   },
  // ];
  return (
    <SectionContainer title="Communities 🎉">
      <SliderFrame>
        <div className="flex gap-2 justify-start items-center h-fit">
          {communities && communities.length > 0 && communities.map((info) => (
            <CommunityCard
              key={info.communityName}
              imageURL={info.backgroundUrl}
              title={info.communityName}
              members={info.noOfMembers}
              id={info.id}
              joined={info?.user?.some(
                (x) => x.id === "b47484b5-b3c3-4c51-964b-8e1c72f468e0"
              )}
            />
          ))}
        </div>
      </SliderFrame>
    </SectionContainer>
  );
}
