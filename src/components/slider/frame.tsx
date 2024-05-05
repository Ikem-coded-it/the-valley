import { ReactNode } from "react";
import { cn } from "@/utils/util";

export default function SliderFrame({
  children,
  className
}: {
  children: ReactNode,
  className?: string
}) {

  const classIn = cn(
    "min-w-full max-w-full h-fit overflow-x-scroll no-scrollbar flex justify-start items-center",
    className
  )

  return (
    <div className={classIn}>
      {children}
    </div>
  )
}