import { Box, Center } from "@chakra-ui/react";
import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const CInput = ({
  icon,
  placeholder = "search",
  type = "text",

  value,
  handleChange,
  name,
  rIcon,
  handleEyeClick,
  ...rest
}) => {
  return (
    <Box
      display={"flex"}
      gap={"3"}
      alignItems={"center"}
      w={"350px"}
      px={"2"}
      borderWidth={"1px"}
      overflow={"hidden"}
      borderRadius={"xl"}
      borderColor={"primary_yellow"}
      {...rest}
    >
      {icon}

      <input
        placeholder={placeholder}
        className="border-0 outline-none focus:outline-none  h-12 flex-grow"
        type={type}
        value={value}
        onChange={handleChange}
        name={name}
      />
      {name === "password" && (
        <Center
          className="cursor-pointer"
          w={"10"}
          h={"full"}
          onClick={() => {
            if (type === "password") {
              handleEyeClick("text");
            } else {
              handleEyeClick("password");
            }
          }}
        >
          {type === "password" ? (
            <AiFillEye className="text-2xl" />
          ) : (
            <AiFillEyeInvisible className="text-2xl" />
          )}
        </Center>
      )}
    </Box>
  );
};

export default CInput;
