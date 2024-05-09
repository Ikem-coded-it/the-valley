import { cn } from "@/utils/util";
import { ReactNode } from "react";

export default function DirectorySidebar({
  children,
  filterBy,
  className,
  ref,
}: {
  children: ReactNode;
  filterBy: string;
  className?: string;
  ref?: any;
}) {
  return (
    <div className={cn({ [className]: className })} ref={ref}>
      <div className="flex justify-between items-center p-4">
        <h1 className="font-semibold text-lg text-[#212630]">{filterBy}</h1>
        <i className="ph ph-plus text-2xl  font-bold"></i>
      </div>

      <div>
        <form>{children}</form>
      </div>
    </div>
  );
}
