import { cn } from "@/utils/util";
import { ReactNode } from "react";

export default function Overlay({ children }: { children: ReactNode }) {
  return (
    <div
      className={cn(
        "fixed inset-0 bg-[rgba(0,0,0,0.5)] z-50 flex flex-col justify-center items-center"
      )}
    >
      {children}
    </div>
  );
}
