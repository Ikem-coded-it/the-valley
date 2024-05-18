import SectionContainer from "@/components/section-container.jsx";
import TopicText from "@/molecules/topics-text";
import { cn } from "@/utils/util";
import { Link } from "react-router-dom";

export default function SingleCommunitiesSideBar({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn("w-full max-w-[295px]", {
        [className]: className,
      })}
    >
      <SectionContainer title="About">
        <p className="text-[#3F4E65]">
          This is group for people who love nature and like connect with other
          people. you will meet with amazing people in this group{" "}
          <Link to={"#"} className="text-[#227A5F]">
            See More....
          </Link>
        </p>
      </SectionContainer>
      <div className="mt-4">
        <SectionContainer
          title="Topics 📌 "
          link={{
            text: "See all",
            path: "#",
          }}
        >
          <TopicText
            title="Agriculture & Biotech"
            created={"1 hour"}
            numOfPost={200}
          />{" "}
          <TopicText
            title="Crypto & blockchain"
            created={"1 hour"}
            numOfPost={200}
          />{" "}
          <TopicText
            title="Energy & climate"
            created={"1 hour"}
            numOfPost={200}
          />
        </SectionContainer>
      </div>{" "}
      <div className="mt-4">
        <SectionContainer
          title="Topics 📌 "
          link={{
            text: "See all",
            path: "#",
          }}
        >
          <TopicText
            title="Agriculture & Biotech"
            created={"1 hour"}
            numOfPost={200}
          />{" "}
          <TopicText
            title="Crypto & blockchain"
            created={"1 hour"}
            numOfPost={200}
          />{" "}
          <TopicText
            title="Energy & climate"
            created={"1 hour"}
            numOfPost={200}
          />
        </SectionContainer>
      </div>
    </div>
  );
}
