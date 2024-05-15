import Button from "@/components/button";
import PostInputBox from "@/molecules/home/post-input-box";
import SinglePageCommunitiesHeader from "@/organisms/Communities/single-communities-header";
import SingleCommunitiesSideBar from "./sidebar";
import { useEffect, useState } from "react";
import { cn } from "@/utils/util";

export default function SingleCommunities() {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 1027) {
      setToggle(false);
    }
  }, []);

  return (
    <div className="w-full">
      <Button
        text="Back"
        icon={<i className="ph ph-caret-left   #5A6F8C" />}
        className="bg-white   text-[#5A6F8C]"
        onClick={() => (window.location.href = "/communities")}
      />

      <div>
        <SinglePageCommunitiesHeader />
      </div>

      <div className="flex flex-col">
        <div className=" border border-[#227A5F] flex justify-end   self-end relative z-20 h-[30px] mt-4 ">
          <i
            className="ph ph-list  text-2xl"
            role="button"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <div className="flex justify-between   my-4 relative">
          <div
            className={cn("w-full max-w-[695px]", {
              ["max-w-full"]: !toggle,
            })}
          >
            <PostInputBox />
          </div>

          <SingleCommunitiesSideBar
            className={cn("absolute right-0 invisible", {
              ["visible"]: toggle,
            })}
          />
        </div>
      </div>
    </div>
  );
}
