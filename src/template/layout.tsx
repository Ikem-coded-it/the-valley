import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import PagesContainer from '@/components/pages-container';
import { ReactNode } from 'react';

export default function DashboardRootLayout({ children }: { children: ReactNode }) {
    return(
        <main className="w-full pt-[80px] relative max-w-[100vw]">
            <Header/>

            <Sidebar className="hidden lg:block fixed top-[80px]"/>

            <PagesContainer>
                { children }
            </PagesContainer>
        </main>
    )
}