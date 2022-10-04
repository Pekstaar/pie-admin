import { Box, Center, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Finance } from "../../assets/svg";

const FinanceCard = ({ text, no }) => (
  <HStack
    fontFamily={"Poppins"}
    bg={"white"}
    borderRadius={"xl"}
    h={"32"}
    w={1 / 4}
    px={"5"}
  >
    <Box className="flex-grow">
      <Text fontSize={"sm"} className={"text-zinc-400"}>
        {text}
      </Text>
      <Text mt={"2"} fontWeight={"semibold"} fontSize={"30px"}>
        KES. {no}
      </Text>
    </Box>

    <Center p={"2"} bg={"current_bg"} borderRadius={"md"}>
      <Finance />
    </Center>
  </HStack>
);

export default FinanceCard;
