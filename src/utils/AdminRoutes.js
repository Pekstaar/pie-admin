import Things from "../pages/Things";
import Users from "../pages/Users";
import DeliveryTime from "../pages/DeliveryTime";
import ResponseTime from "../pages/ResponseTime";
import Roles from "../pages/Role";
import FoodCategory from "../pages/FoodCategory";
import Reports from "../pages/Reports";
import Questions from "../pages/Questions";
import Currency from "../pages/Currency";
// import { Dashboard } from "../pages/admin/Dashboard";

export const AdminRoutes = [
  {
    path: "/",
    element: <Users />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/things",
    element: <Things />,
  },
  {
    path: "/delivery_time",
    element: <DeliveryTime />,
  },
  {
    path: "/response_time",
    element: <ResponseTime />,
  },
  {
    path: "/roles",
    element: <Roles />,
  },
  {
    path: "/food_category",
    element: <FoodCategory />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
  {
    path: "/questions",
    element: <Questions />,
  },
  {
    path: "/currency",
    element: <Currency />,
  },

  //
];
