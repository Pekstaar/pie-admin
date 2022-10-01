import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Breadcrumb = () => {
  return (
    <Box p={"2"}>
      <Text fontWeight={"semibold"} className={"text-xl"}>
        Hi Sam,
      </Text>

      <Text className={"text-sm"}>Have a look at today’s activities</Text>

      <Box className="rounded-full bg-zinc-200 h-0.5 mt-2" />
    </Box>
  );
};

export default Breadcrumb;
