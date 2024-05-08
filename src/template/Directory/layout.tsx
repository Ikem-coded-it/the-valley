import Page from "@/components/main";
import PageHeader from "@/components/page-header";
import { ReactNode } from "react";
import DirectoryPageHeader from "./header";
import FindACofounder from "./find-a-cofounder";
import Tab from "@/organisms/discovery/tab";
import SearchFilter from "@/organisms/discovery/search-and-filter";
import DirectorySidebar from "@/organisms/discovery/siderbar-container";
import Checkbox from "@/components/chechbox";
import { industry, regions } from "@/store/directory-filter";

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
      <div className="w-full flex justify-between">
        <div className="w-full max-w-[623px] flex flex-col gap-10">
          <FindACofounder />
          <div>
            <Tab />
            <SearchFilter />

            {children}
          </div>
        </div>

        <div className="w-full max-w-[296px] bg-white rounded-lg  ">
          <DirectorySidebar filterBy="Industry">
            {industry.map((x, i) => {
              return <Checkbox label={x} num={100} key={i} />;
            })}
            <div className="px-4 pb-4">
              <button className="text-[#227a5f] font-medium">
                See All Option
              </button>
            </div>
          </DirectorySidebar>
          <DirectorySidebar filterBy="Region" className="border-t">
            {regions.map((x, i) => {
              return <Checkbox label={x} num={100} key={i} />;
            })}

            <div className="px-4 pb-4">
              <button className="text-[#227a5f] font-medium">
                See All Option
              </button>
            </div>
          </DirectorySidebar>
        </div>
      </div>
    </Page>
  );
}
