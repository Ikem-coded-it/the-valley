import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import DashboardRootLayout from './template/layout';
import ResourcesPageRoute from "@/pages/Resources/route"
import MarketPlacesPageRoute from "@/pages/Marketplaces/route"
import HomePageRoute from "@/pages/Home/route"
import NotFound from '@/template/not-found';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DashboardRootLayout>
        <Outlet/>
      </DashboardRootLayout>
    ),
    children: [
      {
        path: "*",
        element: <NotFound/>
      },
      HomePageRoute,
      MarketPlacesPageRoute,
      ResourcesPageRoute
    ]
  }
])

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
