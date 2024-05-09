import SearchBar from "@/components/searchbar";

export default function SearchFilter() {
  return (
    <div className="bg-white flex sm:justify-center flex-wrap sm:flex-nowrap p-4 gap-5 ">
      <SearchBar
        placeholder="Search here"
        className="border-[1px] w-full max-w-[353px]"
      />

      <div className="flex w-full max-w-[189px] border-[1px] rounded-lg">
        <div className="flex w-full items-center justify-center gap-4">
          {/* <img src="/icons/sorting-a-z-02.jpg" alt="sorting icon" /> */}
          <i className="ph ph-faders text-2xl"></i>
          <button
            onClick={() => {}}
            className="font-semibold text-sm text-[#121630]"
          >
            Sort
          </button>
        </div>
        <div className="flex w-full items-center justify-center gap-4">
          <i className="ph ph-sliders-horizontal text-2xl "></i>
          <button
            onClick={() => {}}
            className="font-semibold text-sm text-[#121630]"
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}
