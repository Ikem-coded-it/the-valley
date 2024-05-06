import "./style.css"

export default function PagesContainer({ children }) {
    return(
        <main className="pages-container static lg:absolute p-[15px] md:p-6 h-fit flex justify-center items-start grow shrink">
            { children }
        </main>
    )
}