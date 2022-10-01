import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { Logo } from "../../assets/svg";

const SideNav = () => {
  return (
    <Box w={"250px"} bg={"white"} position={"fixed"} className={"h-screen "}>
      {/* Logo */}
      <Center h={"180px"}>
        <Logo />
      </Center>
    </Box>
  );
};

export default SideNav;
