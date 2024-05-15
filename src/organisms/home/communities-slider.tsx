import SliderFrame from "@/components/slider/frame";
import CommunityCard from "@/molecules/home/community-card";
import SectionContainer from "../../components/section-container.jsx/index.js";

export default function CommunitiesSlider() {
  const cards = [
    {
      imageURL: "/tree.jpg",
      alt: "Slide 1",
      title: "climate change",
      members: 1200,
    },
    {
      imageURL: "/stairs.jpg",
      alt: "Slide 2",
      title: "Abstract People",
      members: 1200,
    },
    {
      imageURL: "/office.jpg",
      alt: "Slide 3",
      title: "Standard",
      members: 1200,
    },
  ];
  return (
    <SectionContainer title="Communities 🎉">
      <SliderFrame>
        <div className="flex gap-2 justify-start items-center h-fit">
          {cards.map((info) => (
            <CommunityCard key={info.title} {...info} />
          ))}
        </div>
      </SliderFrame>
    </SectionContainer>
  );
}
