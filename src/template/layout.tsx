import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import PagesContainer from '@/components/pages-container';
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import { ReactNode } from 'react';

export default function DashboardRootLayout({ children }: { children: ReactNode }) {
    return(
        <PrimeReactProvider
        value={{
            unstyled: true,
            pt: Tailwind,
        }}
        >
            <section className="w-full max-h-[100vh] min-h-[100vh] pt-[80px]">
                <Header/>

                <div className="sidebar-pages-container dashboard-container flex">
                    <Sidebar className="hidden lg:block"/>

                    <PagesContainer>
                        { children }
                    </PagesContainer>
                </div>
            </section>
        </PrimeReactProvider>
    )
}