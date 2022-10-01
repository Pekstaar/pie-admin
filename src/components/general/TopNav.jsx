import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

import { BiMenuAltLeft } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import Avatar from "./Avatar";

const TopNav = ({ toggleSideBar }) => {
  return (
    <HStack h={"20"} bg={"white"} justifyContent={"space-between"}>
      <button
        className={"hover:bg-zinc-100 p-1 rounded-md focus:outline-none"}
        onClick={toggleSideBar}
      >
        <BiMenuAltLeft className="text-3xl" />
      </button>

      {/* nav items */}
      <HStack px={"3"} gap={"1"}>
        <button
          className={
            "hover:bg-zinc-100 p-2 rounded-full focus:outline-none relative"
          }
        >
          <BsBell className="text-3xl" />

          <Badge />
        </button>

        <HStack gap={"1"}>
          <Avatar text={"A"} />

          <Text color={"dark_green"} fontWeight={"bold"}>
            Admin
          </Text>
        </HStack>
      </HStack>
    </HStack>
  );
};

export default TopNav;

const Badge = () => (
  <Box
    bg={"primary_red"}
    borderRadius={"full"}
    position={"absolute"}
    top={"1"}
    right={"2"}
    h={"3.5"}
    w={"3.5"}
    borderWidth={"2px"}
    borderColor={"white"}
  />
);
