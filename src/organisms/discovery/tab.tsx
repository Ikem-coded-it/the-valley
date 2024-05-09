import TextWithNum from "@/molecules/directory/text-with-num";
import { directoryTabs } from "@/store/directories-tabs";
import { calculateHeight } from "./responsive-height";
import { useRef, useState } from "react";

export default function Tab() {
  const eRef = useRef(null);
  const parentRef = useRef(null);

  const [openSubNav, setOpenSubNav] = useState(false);

  return (
    <div className="bg-white rounded-lg pt-4  ">
      <div className="px-4 sm:hidden">
        <button
          onClick={() => {
            setOpenSubNav(!openSubNav);
            calculateHeight({ eRef, parentRef, openSubNav });
          }}
        >
          <i className="ph ph-list text-2xl"></i>
        </button>
      </div>
      <div
        className="max-[640px]:h-0  overflow-hidden  transition-all ease-[cubic-bezier(0.95,0.05,0.795,0.035)] duration-200"
        ref={parentRef}
      >
        <div ref={eRef} className="flex flex-col   sm:flex-row">
          {directoryTabs.map((x, i) => {
            return <TextWithNum text={x.text} url={x.url} num={100} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
