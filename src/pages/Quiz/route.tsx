import ComingSoonPageTemplate from "@/template/Coming-soon";
import ApplicationRoutes from "@/config/routes";

const route = {
    path: ApplicationRoutes.QUIZ,
    element: <ComingSoonPageTemplate pageName="Quiz"/>,
    loader: async () => {return null},
  };
  const handle = (value) => `${route.path}/${value}`;
  export default route;
  export { handle };