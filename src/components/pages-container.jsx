

export default function PagesContainer({ children }) {
    return(
        <main className="p-6 min-h-full max-h-full flex justify-center items-start flex-1 overflow-y-scroll">
            { children }
        </main>
    )
}