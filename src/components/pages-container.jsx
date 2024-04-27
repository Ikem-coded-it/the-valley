

export default function PagesContainer({ children }) {
    return(
        <main className="p-[15px] md:p-6 min-h-full max-h-full flex justify-center items-start grow shrink overflow-y-scroll">
            { children }
        </main>
    )
}