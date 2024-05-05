import HomeTemplate from "@/template/Home";
import ApplicationRoutes from "@/config/routes";
import FullScreenLoader from "@/components/loader";

const route = {
    path: ApplicationRoutes.HOME,
    element: <HomeTemplate/>,
    loader: async () => {return(<FullScreenLoader/>)},
  };
  const handle = (value) => `${route.path}/${value}`;
  export default route;
  export { handle };