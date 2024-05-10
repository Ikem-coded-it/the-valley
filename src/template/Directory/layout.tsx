import Page from "@/components/main";
import PageHeader from "@/components/page-header";
import { ReactNode } from "react";
import DirectoryPageHeader from "./header";
import FindACofounder from "./find-a-cofounder";
import Tab from "@/organisms/discovery/tab";
import SearchFilter from "@/organisms/discovery/search-and-filter";

import IndustryBusiness from "@/organisms/discovery/industry-business";

export default function DirectoryRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Page>
      <PageHeader className="min-h-[150px] flex justify-center ">
        <DirectoryPageHeader />
      </PageHeader>
      <div className="w-full flex flex-row justify-between gap-4 max-[1220px]:flex-col">
        <div className="w-full max-w-[623px] flex flex-col gap-10 max-[1220px]:order-2">
          <FindACofounder />
          <div>
            <Tab />
            <SearchFilter />

            {children}
          </div>
        </div>
        <IndustryBusiness />
      </div>
    </Page>
  );
}
