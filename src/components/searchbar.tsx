import { cn } from "../utils/util";

export default function SearchBar({
  className,
  placeholder,
  border,
}: {
  className?: string;
  placeholder?: string;
  border?: boolean;
}) {
  return (
    <div
      className={cn(
        "h-[48px] min-w-fit w-[650px] rounded-[8px] py-3 px-4 flex justify-start items-center gap-[10px] bg-[#FFFFFF]",
        {
          "border-[1px] border-[#D3D9E4]": border,
        },
        className
      )}
    >
      <i className="ph ph-magnifying-glass text-base text-[#ADBACC]"></i>
      <input
        className="h-full flex-1 text-[#ADBACC] font-[600] text-base bg-[#FFFFFF] border-none outline-0"
        type="search"
        placeholder={placeholder}
      />
    </div>
  );
}
