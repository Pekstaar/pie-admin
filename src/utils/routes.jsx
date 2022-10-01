import {
  Apps,
  Bookings,
  Dashboard,
  Finance,
  Fleet,
  Partners,
  SettingsPartner,
  SettingsUser,
  Users,
} from "../pages";

export const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/bookings",
    element: <Bookings />,
  },
  {
    path: "/finance",
    element: <Finance />,
  },
  {
    path: "/applications",
    element: <Apps />,
  },
  {
    path: "/fleet",
    element: <Fleet />,
  },
  {
    path: "/partners",
    element: <Partners />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/settings/users",
    element: <SettingsUser />,
  },
  {
    path: "/settings/partners",
    element: <SettingsPartner />,
  },
];
