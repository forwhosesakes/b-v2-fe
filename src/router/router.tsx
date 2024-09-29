import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import App from "../App";

const LandingPage = lazy(() => import("../core/landing-page/landing-page"));
const Detection = lazy(() => import("../core/detection/detection"));
const Reports = lazy(() => import("../core/reports/reports"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: "detection",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Detection />
          </Suspense>
        ),
      },
      {
        path: "reports",
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
