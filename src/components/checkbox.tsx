import { cn } from "@/utils/util";
import { useState } from "react";

export default function Checkbox({
  label,
  num,
}: {
  label: string;
  num: number;
}) {
  const [isTicked, setIsTicked] = useState(false);

  return (
    <div className="flex items-center gap-3 p-4 w-full">
      <input
        type="checkbox"
        id="checkbox"
        className="bg-white checked:bg-[#227a5f] border hidden"
      />
      <label
        role="button"
        htmlFor="checkbox"
        onClick={() => setIsTicked(!isTicked)}
        className={cn("h-[15px] w-[15px] border border-[#227a5f]", {
          ["bg-[#227a5f]"]: isTicked,
        })}
      />

      <div className="flex gap-3 items-center">
        <p>{label}</p>

        <div className="bg-[#effaf5] text-xs text-[#227a5f] rounded-[83px] p-2">
          {num}
        </div>
      </div>
    </div>
  );
}
