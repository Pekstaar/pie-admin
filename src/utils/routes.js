import Home from "../pages/Home";
import Test from "../pages/Test";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <Test />,
  },
];
