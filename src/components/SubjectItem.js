import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import { GoEye } from "react-icons/go";

const SubjectItem = ({ color, title, prefix }) => {
  return (
    <HStack
      p={"3"}
      w={"full"}
      borderRadius={"xl"}
      bg={"#F8F9FB"}
      borderWidth={"thin"}
      borderColor={"gray.300"}
      gap={"4"}
      h={"12"}
      _hover={{
        bg: "#E6E7F0",
        cursor: "pointer",
      }}
    >
      <ColorTag color={color} prefix={prefix} />

      <Box
        flexGrow={"1"}
        className="text-slate-500 tracking-wide "
        fontSize={{ md: "sm", base: "xs" }}
        fontWeight={"normal"}
      >
        {title}
      </Box>

      <Box className="text-slate-500">
        <GoEye />
      </Box>
    </HStack>
  );
};

export default SubjectItem;

const ColorTag = ({ color, prefix }) => (
  <Box
    className="uppercase font-medium"
    fontSize={{ md: "xs", base: "2xs" }}
    px={"3"}
    py={"1.5"}
    bg={color}
    borderRadius={"md"}
    textColor={"white"}
  >
    {prefix}
  </Box>
);
