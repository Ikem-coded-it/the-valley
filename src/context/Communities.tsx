import { ReactNode, createContext, useContext, useState } from "react";

const CommunitiesProvider = createContext<any>({});

export default function CommunitiesContext({
  children,
}: {
  children: ReactNode;
}) {
  const [communityData, setCommunityData] = useState<any>({});

  const values = {
    communityData,
    setCommunityData,
  };

  return (
    <CommunitiesProvider.Provider value={values}>
      {children}
    </CommunitiesProvider.Provider>
  );
}

export const useCommunities = () => useContext(CommunitiesProvider);
