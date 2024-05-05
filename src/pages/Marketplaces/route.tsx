import MarketPlacesTemplate from "@/template/Marketplaces";
import ApplicationRoutes from "@/config/routes";
import FullScreenLoader from "../../components/loader";

const route = {
    path: ApplicationRoutes.MARKETPLACES,
    element: <MarketPlacesTemplate/>,
    loader: async () => {return(<FullScreenLoader/>)},
  };
  const handle = (value) => `${route.path}/${value}`;
  export default route;
  export { handle };