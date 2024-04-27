

export default function Page({ children }) {
    return(
        <div className="min-h-fit flex flex-col gap-10 justify-start items-center flex-1">
            { children }
        </div>
    )
}