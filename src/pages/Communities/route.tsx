import FullScreenLoader from "@/components/loader";
import ApplicationRoutes from "@/config/routes";
import Communities from "@/template/Communities";
import SingleCommunities from "@/template/SingleCommunities";
import { Outlet } from "react-router-dom";

const route = {
  path: ApplicationRoutes.COMMUNITIES.ALL_COMMUNITIES,
  element: (
    <>
      <Outlet />
    </>
  ),
  children: [
    {
      path: ApplicationRoutes.COMMUNITIES.ALL_COMMUNITIES,
      element: <Communities />,
    },
    {
      path: ApplicationRoutes.COMMUNITIES.SINGLE_COMMUNITIES,
      element: <SingleCommunities />,
    },
  ],
  loader: async () => {
    return <FullScreenLoader />;
  },
};

const handle = (value) => `${route.path}/${value}`;
export default route;

export { handle };
