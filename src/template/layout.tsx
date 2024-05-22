import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import PagesContainer from '@/components/pages-container';
import { ReactNode } from 'react';
import userService from '@/services/user.service';
import { useEffect } from 'react';
import { useOnboarding } from '@/context/Onboarding';
import { useAuth } from '@/context/Auth';

export default function DashboardRootLayout({ children }: { children: ReactNode }) {
    const { setOnboarding } = useOnboarding()
    const { isLoggedIn } = useAuth()
    
    useEffect(() => {
        // on entering dashboard, check if loggedin and onboarded, if not onboarded then trigger onboarding modal
        (async() => {
            try {
                const me = await userService.getMe()
                if(!me?.onboardingDataId) return setOnboarding('about')
            } catch (error) {
                console.log(error)
            }
        })()
    }, [isLoggedIn])

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