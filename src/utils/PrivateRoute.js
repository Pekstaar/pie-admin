import React from "react";
// import { Login } from "../pages";

// import useUserStore from "./zustand/Store";

const PrivateRoute = ({ children }) => {
  const user = { token: "1234" };

  // return user?.token ? <>{children}</> : <></>;
  return user ? <>{children}</> : <></>;
};

export default PrivateRoute;
