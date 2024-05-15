import { mockCommunities } from "@/mock/communities";
import CommunitiesIndex from ".";

export default function AvailableCommunities() {
  return (
    <>
      {mockCommunities.map((x) => {
        return (
          <div className="mb-4">
            <CommunitiesIndex title={x.name} data={x.communities} />
          </div>
        );
      })}
    </>
  );
}
