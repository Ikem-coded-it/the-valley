import { ReactNode } from "react";
import { cn } from "../utils/util";

export default function Page({
    children,
    className
}:{
    children: ReactNode
    className?: string
}) {
    return(
        <div className={cn(
            "min-h-fit flex flex-col gap-10 justify-start items-center grow shrink min-w-full max-w-full",
            className
        )}>
            { children }
        </div>
    )
}