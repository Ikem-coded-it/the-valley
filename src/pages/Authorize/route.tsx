import AuthorizationPage from "@/template/authorize";
import ApplicationRoutes from "@/config/routes";

const route = {
    path: ApplicationRoutes.USER.AUTHORIZE,
    element: <AuthorizationPage/>
  };
  export default route;