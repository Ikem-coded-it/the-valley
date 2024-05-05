import { cn } from "../utils/util";

export default function Page({ children, className }) {
    return(
        <div className={cn(
            "min-h-fit flex flex-col gap-10 justify-start items-center grow shrink min-w-full maz-w-full",
            className
        )}>
            { children }
        </div>
    )
}