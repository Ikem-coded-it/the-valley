import "./App.css";

// Providers
import { PrimeReactProvider } from "primereact/api";
import Toast from "@/components/toast";
import { ThemeProvider } from "styled-components";
import AppContextProvider from "./context/app";
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
import LogoutPageRoute from "@/pages/Logout/route";
import AuthorizationRoute from "@/pages/Authorize/route";
import CommunitiesPageRoute from "@/pages/Communities/route";

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
  return (
    <>
      <PrimeReactProvider
        value={{
          unstyled: true,
          pt: Tailwind,
        }}
      >
        <AppContextProvider>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
            <Onboarding />
            <Toast />
            {/* <Overlay/> */}
          </ThemeProvider>
        </AppContextProvider>
      </PrimeReactProvider>
    </>
  );
}

export default App;
