import AvailableCommunities from "@/organisms/Communities/available-communities";
import JoinedCommunities from "@/organisms/Communities/joined";
import CommunitiesSidebar from "./sidebar";
import { useEffect, useState } from "react";
import { cn } from "@/utils/util";

export default function Communities() {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 1027) {
      setToggle(false);
    }
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* <div className=" border border-[#227A5F] flex justify-end  self-end relative z-20 h-[30px] mb-4 ">
        <i
          className="ph ph-list  text-2xl"
          role="button"
          onClick={() => setToggle(!toggle)}
        />
      </div> */}

      <div className="w-full flex justify-between relative gap-4">
        <div className={cn("w-full  lg:max-w-[695px]")}>
          <JoinedCommunities />

          <div className="mt-8">
            <h1 className="font-semibold text-[#8094B0] font-2xl">
              Other Communities 🫂
            </h1>

            <div className="mt-8 ">
              <AvailableCommunities />
            </div>
          </div>
        </div>

        {/* <div
          className={cn("absolute right-0 pt-4 bg-white invisible", {
            ["visible"]: toggle,
          })}
        ></div> */}

        <section
          className={`hidden lg:flex min-w-[296px] max-w-[296px] min-h-screen max-h-screen overflow-y-scroll flex-col sticky top-[50px] -bottom-[100px] -right-6 rounded-[8px]`}
        >
          <CommunitiesSidebar />
        </section>
      </div>
    </div>
  );
}
