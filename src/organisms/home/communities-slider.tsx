import SliderFrame from "@/components/slider/frame";
import CommunityCard from "@/molecules/home/community-card";
import SectionContainer from "../../components/section-container.jsx/index.js";
import { community } from "@/services/community.service.ts";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CommunitiesSlider() {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await community.index();

      setCommunities(res);
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
          {communities.map((info) => (
            <Link to={`/communities/${info.id}`}>
              <CommunityCard
                key={info.communityName}
                imageURL={info.backgroundUrl}
                title={info.communityName}
                members={info.noOfMembers}
              />
            </Link>
          ))}
        </div>
      </SliderFrame>
    </SectionContainer>
  );
}
