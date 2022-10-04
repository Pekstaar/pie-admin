import { Text } from "@chakra-ui/react";
import React from "react";

const PayButton = ({ icon, text }) => {
  return (
    <button className="bg-primary_yellow rounded-md items-center flex gap-2 px-5 py-3">
      {icon}
      <Text fontWeight={"semibold"}>{text}</Text>
    </button>
  );
};

export default PayButton;
