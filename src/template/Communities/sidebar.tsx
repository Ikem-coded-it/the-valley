import Schedule from "@/components/schedule";
import SectionContainer from "@/components/section-container";
import TextWithImgFlex from "@/components/text-with-img-flex";
import { mockCommunities } from "@/mock/communities";

export default function CommunitiesSidebar() {
  return (
    <div className="w-full max-w-[300px]">
      <SectionContainer
        title="New Communities"
        link={{ text: "See all", path: "#" }}
      >
        {mockCommunities[0].communities.map((x, index) => {
          return (
            <TextWithImgFlex
              key={index}
              title={x.title}
              img={x.imageURL}
              created={"1 hour"}
            />
          );
        })}
      </SectionContainer>
      <div className="mt-2">
        <SectionContainer
          title="Upcoming Events 🗒"
          link={{ text: "See all", path: "#" }}
        >
          <Schedule
            title="Weekly Q&A : Building healthy habits"
            day="7"
            month="May"
          />
          <Schedule
            title="Mindfulness with surprise special guest"
            day="8"
            month="Jun"
          />
          <Schedule
            title="Weekly coaching session live call"
            day="9"
            month="May"
          />
          <Schedule
            title="Foundation of healthy suistanable relationship"
            day="2"
            month="May"
          />
        </SectionContainer>
      </div>
    </div>
  );
}
