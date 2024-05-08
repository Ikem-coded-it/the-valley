import { cn } from "@/utils/util";
import { ClassArray } from "clsx";
import { ReactNode } from "react";

export default function PageHeader({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <header
      className={cn(
        [
          "relative overflow-clip bg-secondary w-full min-h-[238px] max-h-fit p-4 md:p-6 rounded-[8px] flex flex-col justify-start items-center gap-[48px]",
        ],
        {
          [className]: className,
        }
      )}
    >
      <RightPattern />
      <LeftPattern />
      {children}
    </header>
  );
}

function RightPattern() {
  return (
    <img
      src="/pages/marketplaces/left-pattern.svg"
      alt="marketplaces header pattern"
      className="absolute scale-x-[-1] top-0 right-0"
    />
  );
}

function LeftPattern() {
  return (
    <img
      src="/pages/marketplaces/left-pattern.svg"
      alt="marketplaces header pattern"
      className="absolute left-0 top-0"
    />
  );
}
