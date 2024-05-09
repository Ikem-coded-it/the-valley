import SearchBar from "@/components/searchbar";

export default function DirectoryPageHeader() {
  return (
    <div className="flex items-center gap-4 flex-wrap md:flex-nowrap relative z-20 ">
      <div>
        <h1 className=" text-white font-semibold text-2xl leading-[33.8px]">
          Directory
        </h1>
        <p className="text-white font-medium">
          This all directory and resource if you want to see the founders,
          investors, and another information
        </p>
      </div>

      <SearchBar
        className="relative z-10 w-[242px]"
        placeholder="Search here..."
      />
    </div>
  );
}
