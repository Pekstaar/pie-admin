import { Box } from "@chakra-ui/react";
import React from "react";
import SideNav from "./general/SideNav";

const PanelLayout = ({ children }) => {
  return (
    <Box bg={"bg_gray"} className={"min-h-screen"}>
      <SideNav />

      <Box ml={"250px"} bg={"orange.200"}>
        {children}
      </Box>
    </Box>
  );
};

export default PanelLayout;
