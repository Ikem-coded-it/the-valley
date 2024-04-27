import { cn } from "../utils/util"

export default function Button({ icon, text, onClick, className, type }) {

    const mergedClasses = cn(
        "font-semibold text-base flex items-center justify-center gap-2 h-[48px] rounded-[8px] border-[1px] px-4 py-3 transition duration-[.2s]",
        className
    )
    return(
        <button
        type={type ?? "button"}
        onClick={onClick}
        className={mergedClasses}>
            {icon ?? icon}
            {text ?? text}
        </button>
    )
}