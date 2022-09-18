import {
  Users,
  Things,
  DeliveryTime,
  ResponseTime,
  Roles,
  FoodCategory,
  Reports,
  Questions,
  Currency,
} from "../pages";
import BlockedUsers from "../pages/Activities/BlockedUsers";
import UpdateThingsStatus from "../pages/Activities/UpdateThingsStatus";
import Permissions from "../pages/permissions/Permissions";
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
    path: "/users/blocked",
    element: <BlockedUsers />,
  },
  {
    path: "/things",
    element: <Things />,
  },
  {
    path: "/things/status",
    element: <UpdateThingsStatus />,
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
  {
    path: "/permissions",
    element: <Permissions />,
  },

  //
];
