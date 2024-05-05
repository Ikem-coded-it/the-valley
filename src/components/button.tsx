import React from "react"
import { MouseEventHandler } from "react"
import { cn } from "../utils/util"

type ButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>,
    text?: string,
    icon?: React.ReactNode,
    className?: string,
    type?: 'button' | 'submit' | 'reset' | undefined
}

export default function Button({ icon, text, onClick, className, type }: ButtonProps) {

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