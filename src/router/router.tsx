import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import App from "../App";

const LandingPage = lazy(() => import("../core/landing-page/landing-page"));
const Detection = lazy(() => import("../core/detection/detection"));
const Reports = lazy(() => import("../core/reports/reports"));

const router = createBrowserRouter([
  {
    path: "/b-v2-fe/",
    element: <App />,
    children: [
      {
        path: "/b-v2-fe/",
        element: (
        
            <LandingPage />
      
        ),
      },
      {
        path: "/b-v2-fe/detection",
        element: (
         
            <Detection />
    
        ),
      },
      {
        path: "/b-v2-fe/reports",
        element: (
        
            <Reports />
        
        ),
      },
    ],
  },
]);

export default router;
