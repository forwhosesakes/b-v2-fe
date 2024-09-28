import { createBrowserRouter } from "react-router-dom";
import Detection from "../core/detection/detection";
import Reports from "../core/reports/reports";
import App from "../App";
import HousingUnits from "../core/housing-units/housingUnits";
import LandingPage from "../core/landing-page/landing-page";


const router = createBrowserRouter([
  {
    path: "/b-v2-fe/",
    element: <App />,
    children:[
      {
        path: "/b-v2-fe/",
        element: <LandingPage />,
      },
      {
        path: "/detection",
        element: <Detection />,
      },
      {
        path: "/b-v2-fe/reports",
        element: <Reports />,
      },
  
    ]
  },
 
 
]);


  export default router