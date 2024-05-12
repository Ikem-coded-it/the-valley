import { Link } from "react-router-dom";
import ApplicationRoutes from "@/config/routes";

export default function ComingSoonPageTemplate({ pageName }: {pageName: string}) {
    return(
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 w-full rounded-[20px]">
        <div className="text-center">
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Coming Soon</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">{pageName} will soon be available.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
                to={ApplicationRoutes.HOME}
                className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#EFFAF5] hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Go back home
            </Link>
            </div>
        </div>
        </main>
    )
}