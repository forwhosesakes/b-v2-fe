import { createBrowserRouter, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import App from "../App";

const LandingPage = lazy(() => import("../core/landing-page/landing-page"));
const Detection = lazy(() => import("../core/detection/detection"));
const Reports = lazy(() => import("../core/reports/reports"));
const ReportNeighbor = lazy(()=>import("../core/reports/reports-tabs/neighbors-tab"))
const ReportHeatmap = lazy(()=>import("../core/reports/reports-tabs/heatmap-tab"))
const ReportTable = lazy(()=>import("../core/reports/reports-tabs/reports-table-tab"))


const router = createBrowserRouter([
  {
    path: "/b-v2-fe/",
    element: <App />,
    children: [
      {
        path: "/b-v2-fe/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: "/b-v2-fe/detection",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Detection />
          </Suspense>
        ),
      },
      {
        path: "/b-v2-fe/reports",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Reports />
          </Suspense>
        ),
        children: [
          {index:true, element:<Navigate to={"neighbor"}/>},
          {path:"neighbor", element:    <Suspense fallback={<div>Loading...</div>}>
          <ReportNeighbor />
        </Suspense> },
         {path:"heatmap", element:    <Suspense fallback={<div>Loading...</div>}>
         <ReportHeatmap />
       </Suspense> },
           {path:"records", element:    <Suspense fallback={<div>Loading...</div>}>
           <ReportTable />
         </Suspense> }
          
        ]
      },
    ],
  },
]);

export default router;
