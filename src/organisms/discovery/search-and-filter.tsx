import Filter from "@/components/filter";
import SearchBar from "@/components/searchbar";
import Sort from "@/components/sorting";
import { filterData } from "@/store/directory-filter";
import { cn } from "@/utils/util";
import { useState } from "react";

export default function SearchFilter() {
  const [controlVisibility, setControlVisibility] = useState({
    showSort: false,
    showFilter: false,
  });
  const [selectedSort, setSelectedSort] = useState("A-Z");
  const [checkBoxValue, setCheckBoxValue] = useState("");
  return (
    <div className="bg-white flex sm:justify-center flex-wrap sm:flex-nowrap p-4 gap-5 ">
      <SearchBar
        placeholder="Search here"
        className="border-[1px] w-full max-w-[353px]"
      />

      <div className="flex w-full max-w-[189px] border-[1px] rounded-lg relative">
        <div className="flex w-full items-center justify-center gap-4 ">
          <i className="ph ph-faders text-2xl"></i>
          <button
            onClick={() => {
              setControlVisibility({
                ...controlVisibility,
                showSort: !controlVisibility.showSort,
              });
            }}
            className="font-semibold text-sm text-[#121630]"
          >
            Sort
          </button>
        </div>
        <div className="flex w-full items-center justify-center gap-4">
          <i className="ph ph-sliders-horizontal text-2xl "></i>
          <button
            onClick={() => {
              setControlVisibility({
                ...controlVisibility,
                showFilter: !controlVisibility.showFilter,
              });
            }}
            className="font-semibold text-sm text-[#121630]"
          >
            Filter
          </button>
        </div>
        <Sort
          showSort={controlVisibility.showSort}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
        />
        <div
          className={cn(
            "bg-white absolute z-20  top-full w-full p-4 invisible",
            {
              ["visible"]: controlVisibility.showFilter,
            }
          )}
        >
          {filterData.map((x, i) => {
            return (
              <>
                {x.subValues ? (
                  <Filter
                    type="dropdown"
                    title={x.value}
                    checkBoxValue={checkBoxValue}
                    subValues={x.subValues}
                    setCheckBoxValue={setCheckBoxValue}
                    key={i}
                  />
                ) : (
                  <Filter
                    type="typical"
                    value={x.value}
                    id={x.id}
                    checkBoxValue={checkBoxValue}
                    setCheckBoxValue={setCheckBoxValue}
                  />
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
