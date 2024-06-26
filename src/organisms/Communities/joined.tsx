import CommunitiesIndex from ".";
import { joinedCommunities } from "@/mock/communities";

export default function JoinedCommunities() {
  return (
    <CommunitiesIndex
      title={joinedCommunities.name}
      data={joinedCommunities.communities}
    />
  );
}
