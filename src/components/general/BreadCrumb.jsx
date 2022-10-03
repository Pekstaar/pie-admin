import { Box, Center, HStack, Text } from "@chakra-ui/react";
import React from "react";

const BreadCrumb = ({ title, icon, subtitle }) => {
  return (
    <HStack gap={"4"}>
      <Center bg={"white"} p={"2"}>
        {icon}
      </Center>
      <Box className="flex">
        <Text fontWeight={"semibold"} fontSize={"xl"}>
          {title}
        </Text>
        &nbsp;
        {subtitle && (
          <Text className="uppercase" fontSize={"lg"}>
            {subtitle}
          </Text>
        )}
      </Box>
    </HStack>
  );
};

export default BreadCrumb;
