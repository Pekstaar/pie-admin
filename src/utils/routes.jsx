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
  ViewApp,
} from "../pages";
import FleetView from "../pages/FleetView";

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
    path: "/applications/:name",
    element: <ViewApp />,
  },
  {
    path: "/fleet",
    element: <Fleet />,
  },
  {
    path: "/fleet/:plate",
    element: <FleetView />,
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
