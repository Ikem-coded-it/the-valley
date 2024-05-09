import AuthorizationPage from "@/template/authorize";
import ApplicationRoutes from "@/config/routes";
import FullScreenLoader from "@/components/loader";

const route = {
    path: ApplicationRoutes.AUTHORIZE,
    element: <AuthorizationPage/>,
    loader: async () => {return(<FullScreenLoader/>)},
  };
  const handle = (value) => `${route.path}/${value}`;
  export default route;
  export { handle };