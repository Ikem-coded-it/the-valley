import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import PagesContainer from '@/components/pages-container';
import { ReactNode } from 'react';
import userService from '@/services/user.service';
import { useEffect, useState } from 'react';
import { useOnboarding } from '@/context/Onboarding';
import { useAuth } from '@/context/Auth';
import Overlay from "@/components/overlay";
import CreateCommunity from "@/organisms/Communities/create-community";

export default function DashboardRootLayout({ children }: { children: ReactNode }) {
    const { setOnboarding } = useOnboarding()
    const { isLoggedIn } = useAuth()
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        // on entering dashboard, check if loggedin and onboarded, if not onboarded then trigger onboarding modal
        (async() => {
            try {
                const me = await userService.getMe()
                if(!me?.onboardingDataId) return setOnboarding('about')
            } catch (error) {
                console.log(error)
                if(error?.response?.statusText === "Unauthorized")
                    return setOnboarding('login')
            }
        })()
    }, [isLoggedIn])

  return (
    <main className="w-full pt-[80px] relative max-w-[100vw]">
      <Header />

      <Sidebar className="hidden lg:block fixed top-[80px]" setShow={setShow} />

      <PagesContainer>{children}</PagesContainer>

      {show && (
        <Overlay>
          <CreateCommunity setShow={setShow} />
        </Overlay>
      )}
    </main>
  );
}
