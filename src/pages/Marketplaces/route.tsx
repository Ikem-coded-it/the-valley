// import MarketPlacesTemplate from "@/template/Marketplaces";
import ComingSoonPageTemplate from "@/template/Coming-soon";
import ApplicationRoutes from "@/config/routes";
import FullScreenLoader from "../../components/loader";

const route = {
    path: ApplicationRoutes.MARKETPLACES,
    element: <ComingSoonPageTemplate pageName="Marketplace"/>,
    loader: async () => {return(<FullScreenLoader/>)},
  };
  const handle = (value) => `${route.path}/${value}`;
  export default route;
  export { handle };