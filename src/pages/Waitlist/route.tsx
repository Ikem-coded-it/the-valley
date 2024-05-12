import WaitlistPageTemplate from "@/template/Waitlist";
import ApplicationRoutes from "@/config/routes";

const route = {
    path: ApplicationRoutes.LANDING,
    element: <WaitlistPageTemplate/>,
    loader: async () => {return null},
  };
  const handle = (value) => `${route.path}/${value}`;
  export default route;
  export { handle };