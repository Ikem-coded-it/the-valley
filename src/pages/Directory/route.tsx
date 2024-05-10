import FullScreenLoader from "@/components/loader";
import ApplicationRoutes from "@/config/routes";
import { mockCompanies } from "@/mock/companies";
import { mockFounders } from "@/mock/founders";
import { mockInvestors } from "@/mock/investors";
import DirectoryCard from "@/molecules/directory/directory-card";
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
      element: <GridLayout data={mockFounders} />,
    },
    {
      path: ApplicationRoutes.DIRECTORY.INVESTORS,
      element: <GridLayout data={mockInvestors} />,
    },
    {
      path: ApplicationRoutes.DIRECTORY.COMPANIES,
      element: <GridLayout data={mockCompanies} />,
    },
  ],
  loader: async () => {
    return <FullScreenLoader />;
  },
};

const handle = (value) => `${route.path}/${value}`;

export default route;

export { handle };
