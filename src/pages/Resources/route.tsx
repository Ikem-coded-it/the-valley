import ResourcesTemplate from "@/template/Resources";
import ApplicationRoutes from "@/config/routes";
import FullScreenLoader from "../../components/loader";

const route = {
    path: ApplicationRoutes.RESOURCES,
    element: <ResourcesTemplate/>,
    loader: async () => {return(<FullScreenLoader/>)},
  };
  const handle = (value) => `${route.path}/${value}`;
  export default route;
  export { handle };