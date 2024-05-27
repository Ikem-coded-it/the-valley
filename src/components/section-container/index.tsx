import "./style.css";
import { Link } from "react-router-dom";
import { cn } from "@/utils/util";
import { ReactNode } from "react";

type ContainerProps = {
    title: string,
    link?: {
        text: string,
        path: string
    },
    children: ReactNode,
    className?: string
}

export default function SectionContainer({ title, link, children, className }: ContainerProps) {
    return(
        <div className={cn(
            'eventcomponent w-full',
            className
        )}>
            <div className='flex justify-between'>
            <h2 className='text-lg font-semibold leading-7 text-left'>{title}</h2>
            {link && <Link to={link.path} className='seeAll'>{link.text}</Link>}
            </div>
            <ul className='py-4 w-full flex flex-col justify-start items-start gap-4'>
                {children}
            </ul>
        </div>
    )
}