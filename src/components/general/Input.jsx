import { Box } from "@chakra-ui/react";
import React from "react";

const CInput = ({ icon, placeholder = "search", ...rest }) => {
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
      {...rest}
    >
      {icon}

      <input
        placeholder={placeholder}
        className="border-0 outline-none focus:outline-none  h-10 flex-grow"
      />
    </Box>
  );
};

export default CInput;
