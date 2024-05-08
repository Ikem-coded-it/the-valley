import "./App.css";
import { PrimeReactProvider } from "primereact/api";
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
      DirectoryPageRoute,
    ],
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
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </>
  );
}

export default App;
