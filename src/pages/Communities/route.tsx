import FullScreenLoader from "@/components/loader";
import TextEditor from "@/components/text-editor";
import ApplicationRoutes from "@/config/routes";
import CommunitiesContext from "@/context/Communities";
import Communities from "@/template/Communities";
import SingleCommunities from "@/template/SingleCommunities";
import { Outlet } from "react-router-dom";

const route = {
  path: ApplicationRoutes.COMMUNITIES.ALL_COMMUNITIES,
  element: (
    <CommunitiesContext>
      <Outlet />
    </CommunitiesContext>
  ),
  children: [
    {
      path: ApplicationRoutes.COMMUNITIES.ALL_COMMUNITIES,
      element: <Communities />,
    },
    {
      path: ApplicationRoutes.COMMUNITIES.SINGLE_COMMUNITIES,

      element: (
        <>
          <Outlet />
        </>
      ),
      children: [
        {
          index: true,
          element: <SingleCommunities />,
        },
        {
          path: ApplicationRoutes.EDITOR,
          element: <TextEditor />,
        },
      ],
    },
  ],
  loader: async () => {
    return <FullScreenLoader />;
  },
};

const handle = (value) => `${route.path}/${value}`;
export default route;

export { handle };
