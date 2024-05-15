import FullScreenLoader from "@/components/loader";
import ApplicationRoutes from "@/config/routes";
import Communities from "@/template/Communities";

const route = {
  path: ApplicationRoutes.COMMUNITIES.ALL_COMMUNITIES,
  element: <Communities />,
  loader: async () => {
    return <FullScreenLoader />;
  },
};

const handle = (value) => `${route.path}/${value}`;

export { handle };

export default route;
