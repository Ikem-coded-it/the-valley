import { cn } from "@/utils/util";
import { Dispatch, SetStateAction } from "react";

export default function Sort({
  showSort,
  selectedSort,
  setSelectedSort,
}: {
  showSort: boolean;
  selectedSort: string;
  setSelectedSort: Dispatch<SetStateAction<string>>;
}) {
  return (
    <form
      className={cn(
        "bg-white w-full absolute top-full border z-20 p-4 invisible",
        {
          ["visible"]: showSort,
        }
      )}
    >
      <div className="mb-2">
        <div className="flex items-center gap-3">
          <input type="radio" value={"A-Z"} id="sort-a-z" className="hidden" />
          <label
            role="button"
            htmlFor="sort-a-z"
            onClick={() => setSelectedSort("A-Z")}
            className={cn([
              "h-[15px] w-[15px] border  border-[#227a5f] rounded-[50%] block",
              {
                ["bg-[#227a5f]"]: selectedSort === "A-Z",
              },
            ])}
          />
          <label htmlFor="sort-a-z">A-Z</label>
        </div>
      </div>
      <div className="mb-2">
        <div className="flex items-center gap-3">
          <input type="radio" value={"Z-A"} id="sort-z-a" className="hidden" />
          <label
            role="button"
            htmlFor="sort-z-a"
            onClick={() => setSelectedSort("Z-A")}
            className={cn([
              "h-[15px] w-[15px] border  border-[#227a5f] rounded-[50%] block",
              {
                ["bg-[#227a5f]"]: selectedSort === "Z-A",
              },
            ])}
          />
          <label htmlFor="sort-z-a">Z-A</label>
        </div>
      </div>
    </form>
  );
}
