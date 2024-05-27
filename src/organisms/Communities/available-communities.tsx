import { mockCommunities } from "@/mock/communities";
import CommunitiesIndex from "./index";

export default function AvailableCommunities() {
  return (
    <>
      {mockCommunities.map((x, i) => {
        return (
          <div className="mb-4" key={i}>
            <CommunitiesIndex title={x.name} data={x.communities} />
          </div>
        );
      })}
    </>
  );
}
