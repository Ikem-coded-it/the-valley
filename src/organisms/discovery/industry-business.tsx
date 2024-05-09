import { cn } from "@/utils/util";
import { useEffect, useRef, useState } from "react";
import DirectorySidebar from "./siderbar-container";
import { industry, regions } from "@/store/directory-filter";
import Checkbox from "@/components/chechbox";
import { calculateHeight } from "./responsive-height";

export default function IndustryBusiness() {
  const industryRef = useRef(null);
  const regionRef = useRef(null);
  const parentRef = useRef(null);

  const [openSubNav, setOpenSubNav] = useState(false);

  useEffect(() => {
    calculateHeight({ industryRef, regionRef, parentRef, openSubNav });
  }, [openSubNav]);

  return (
    <div className="w-full min-[1220px]:max-w-[296px] bg-white rounded-lg max-[1220px]:order-1 relative ">
      <div className="hidden max-[1220px]:flex gap-4 items-center p-4 border">
        <button onClick={() => setOpenSubNav(!openSubNav)}>
          <i className="ph ph-list text-2xl"></i>
        </button>
        <p>Industry & Label</p>
      </div>
      <div
        className={cn(
          "bg-white transition-all ease-[cubic-bezier(0.95,0.05,0.795,0.035)] duration-200 max-[1220px]: overflow-hidden w-full",
          {
            [`absolute z-20`]: openSubNav,
          }
        )}
        ref={parentRef}
      >
        <div ref={industryRef}>
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
        </div>
        <div ref={regionRef}>
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
    </div>
  );
}
