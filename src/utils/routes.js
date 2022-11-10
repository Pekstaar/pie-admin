import Home from "../pages/Home";
import Test from "../pages/Test";
import TestPreview from "../pages/TestPreview";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <Test />,
  },
  {
    path: "/:id/complete",
    element: <TestPreview />,
  },
  {
    path: "/tests",
    element: <TestPreview />,
  },
];
