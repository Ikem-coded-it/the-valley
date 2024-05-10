import "./App.css";
import { PrimeReactProvider } from "primereact/api";
import { ThemeProvider } from 'styled-components';
import AppContextProvider from './context/app';
import AuthProvider from './context/Auth';
import Onboarding from './modules/user-onboarding';
import { theme } from './theme/styled-components';
import Tailwind from "primereact/passthrough/tailwind";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import DashboardRootLayout from "./template/layout";
import ResourcesPageRoute from "@/pages/Resources/route";
import MarketPlacesPageRoute from "@/pages/Marketplaces/route";
import HomePageRoute from "@/pages/Home/route";
import NotFound from "@/template/not-found";
import DirectoryPageRoute from "@/pages/Directory/route";

import AuthorizationRoute from "@/pages/Authorize/route"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DashboardRootLayout>
        <Outlet />
      </DashboardRootLayout>
    ),
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
      HomePageRoute,
      MarketPlacesPageRoute,
      ResourcesPageRoute,
      DirectoryPageRoute
    ]
  },
  AuthorizationRoute,
])

function App() {
  return (
    <>
      <PrimeReactProvider
        value={{
          unstyled: true,
          pt: Tailwind,
        }}
      >
        <AuthProvider>
          <AppContextProvider>
            <ThemeProvider theme={theme}>
              <RouterProvider router={router}/>
              <Onboarding/>
            </ThemeProvider>
          </AppContextProvider>
        </AuthProvider>
      </PrimeReactProvider>
    </>
  );
}

export default App;
