import { createBrowserRouter } from "react-router-dom";
import Detection from "../core/detection/detection";
import Reports from "../core/reports/reports";
import App from "../App";
import LandingPage from "../core/landing-page/landing-page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "detection",
        element: <Detection />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
  
    ]
  },
 
 
]);


  export default router