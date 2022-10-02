import { Box, Input } from "@chakra-ui/react";
import React from "react";

const CInput = ({ icon }) => {
  return (
    <Box
      display={"flex"}
      gap={"3"}
      alignItems={"center"}
      w={"350px"}
      p={"2"}
      borderWidth={"1px"}
      overflow={"hidden"}
      borderRadius={"xl"}
      borderColor={"primary_yellow"}
    >
      {icon}

      <input
        placeholder="search"
        className="border-0 outline-none focus:outline-none  h-10 flex-grow"
      />
    </Box>
  );
};

export default CInput;
