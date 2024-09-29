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
      },
    ],
  },
]);

export default router;
