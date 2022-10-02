import { Center, HStack, Text } from "@chakra-ui/react";
import React from "react";

const BreadCrumb = ({ title, icon }) => {
  return (
    <HStack gap={"4"}>
      <Center bg={"white"} p={"2"}>
        {icon}
      </Center>
      <Text fontWeight={"semibold"} fontSize={"xl"}>
        {title}
      </Text>
    </HStack>
  );
};

export default BreadCrumb;
