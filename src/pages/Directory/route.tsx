import FullScreenLoader from "@/components/loader";
import ApplicationRoutes from "@/config/routes";
import GridLayout from "@/organisms/discovery/grid-layout";
import DirectoryRootLayout from "@/template/Directory/layout";
import { Outlet } from "react-router-dom";

const route = {
  path: ApplicationRoutes.DIRECTORY.FOUNDERS,
  element: (
    <DirectoryRootLayout>
      <Outlet />
    </DirectoryRootLayout>
  ),
  children: [
    {
      path: ApplicationRoutes.DIRECTORY.FOUNDERS,
      element: <GridLayout />,
    },
    {
      path: ApplicationRoutes.DIRECTORY.INVESTORS,
      element: <h1>Ivestors</h1>,
    },
    {
      path: ApplicationRoutes.DIRECTORY.COMPANIES,
      element: <h1>Companies</h1>,
    },
  ],
  loader: async () => {
    return <FullScreenLoader />;
  },
};

const handle = (value) => `${route.path}/${value}`;

export default route;

export { handle };
