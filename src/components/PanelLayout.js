import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import SideNav from "./general/SideNav";
import TopNav from "./general/TopNav";

const PanelLayout = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const handleToggle = () => {
    setShowSideBar((prev) => !prev);
  };
  return (
    <Box display={"flex"} flexDir={"row"} bg={"bg_gray"} className={"h-screen"}>
      <SideNav show={showSideBar} />

      <Box minH={"full"} flexGrow={"1"} ml={0}>
        <TopNav toggleSideBar={handleToggle} />
        {children}
      </Box>
    </Box>
  );
};

export default PanelLayout;
