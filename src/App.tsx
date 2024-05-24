import "./App.css";
import axios from "axios";

// Providers
import { PrimeReactProvider } from "primereact/api";
import Toast from "@/components/toast";
import { ThemeProvider } from "styled-components";
import OnboardingContextProvider from "./context/Onboarding";
import AuthProvider from "./context/Auth";
import Onboarding from "./modules/user-onboarding";
import { theme } from "./theme/styled-components";
import Tailwind from "primereact/passthrough/tailwind";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Routes
import WaitlistPageRoute from "@/pages/Waitlist/route";
import DashboardRootLayout from "./template/layout";
import ResourcesPageRoute from "@/pages/Resources/route";
import MarketPlacesPageRoute from "@/pages/Marketplaces/route";
import HomePageRoute from "@/pages/Home/route";
import NotFound from "@/template/not-found";
import DirectoryPageRoute from "@/pages/Directory/route";
import QuizPageRoute from "@/pages/Quiz/route";
import LogoutPageRoute from "@/pages/Logout/route"
import AuthorizationRoute from "@/pages/Authorize/route";
import CommunitiesPageRoute from "@/pages/Communities/route";
import { useEffect } from "react";

const router = createBrowserRouter([
  // guest routes
  WaitlistPageRoute,
  AuthorizationRoute,
  LogoutPageRoute,
  
  // dashboard routes
  {
    path: "/",
    element: (
      <AuthProvider>
        <DashboardRootLayout>
          <Outlet />
        </DashboardRootLayout>
      </AuthProvider>
    ),
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
      HomePageRoute,
      MarketPlacesPageRoute,
      ResourcesPageRoute,
      DirectoryPageRoute,
      QuizPageRoute,
      CommunitiesPageRoute,
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  const API_URL = import.meta.env['VITE_BASE_API_URL'];

  useEffect(() => {
    // start render service ahead of time
    (async () => {
      if(API_URL.includes('onrender')) {
        try {
          const res = await axios.get(API_URL.replace("v1", ""))
          if(res.status === 200) alert("Server running...")
          else
            alert("Failed to start the server")
        } catch (error) {
          alert("There was a problem starting the server")
        }
      }
    })()
  }, [])

  return (
    <>
      <PrimeReactProvider
        value={{
          unstyled: true,
          pt: Tailwind,
        }}
      >
        <OnboardingContextProvider>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
            <Onboarding />
            <Toast />
          </ThemeProvider>
        </OnboardingContextProvider>
      </PrimeReactProvider>
    </>
  );
}

export default App;
