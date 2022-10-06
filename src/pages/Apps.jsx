import { Box, Button, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Transaction } from "../assets/svg";
import BreadCrumb from "../components/general/BreadCrumb";
import Wrapper from "../components/general/Wrapper";

import Pending from "../components/apps/sub_screens/Pending";
import Rejected from "../components/apps/sub_screens/Rejected";
import Accepted from "../components/apps/sub_screens/Accepted";
import { useNavigate } from "react-router-dom";

const Apps = () => {
  const navigate = useNavigate();
  const [currentSubNav, setCurrent] = useState("pending"); //processing,paid

  const handleViewApplication = (name) => {
    navigate(`${name}`, name);
  };

  return (
    <Box p={"3"} maxH={"91%"} overflowY={"scroll"}>
      <BreadCrumb icon={<Transaction />} title={"Applications"} />

      <Wrapper my={"4"} p={"5 "}>
        <HStack
          gap={"2"}
          className={"border-b-2 border-zinc-200"}
          h={"14"}
          mx={"4"}
        >
          <SubNavItem
            isCurrent={currentSubNav.toLowerCase() === "pending"}
            title={"Pending"}
            handleClick={() => setCurrent("pending")}
          />
          <SubNavItem
            isCurrent={currentSubNav.toLowerCase() === "rejected"}
            handleClick={() => setCurrent("rejected")}
            title={"Rejected"}
          />
          <SubNavItem
            isCurrent={currentSubNav.toLowerCase() === "accepted"}
            handleClick={() => setCurrent("accepted")}
            title={"Accepted"}
          />
        </HStack>

        {currentSubNav === "pending" ? (
          <Pending handleView={handleViewApplication} />
        ) : currentSubNav === "rejected" ? (
          <Rejected />
        ) : (
          <Accepted />
        )}
      </Wrapper>
    </Box>
  );
};

export default Apps;

const SubNavItem = ({ title, isCurrent, handleClick }) => (
  // <Button>

  // </Button>
  <Button
    h={"14"}
    cursor={"pointer"}
    borderRadius={"none"}
    bg={"white "}
    className={`text-primary_yellow text-lg ${
      isCurrent ? "text-dark_green " : "text-zinc-400 "
    }`}
    //  onClick={handleLogout}
    _hover={{
      bg: "white",
      borderBottomColor: "dark_green",
      textColor: "dark_green",
    }}
    _focus={{ bg: "white" }}
    fontWeight={isCurrent ? "semibold" : "normal"}
    px={"6"}
    // py={"3"}
    borderBottomWidth={"2px"}
    borderBottomColor={isCurrent ? "dark_green" : "none"}
    onClick={handleClick}
  >
    {title}
  </Button>
);

export const ActionButton = ({ bg, children }) => (
  <Button
    fontSize={"lg"}
    p={"0"}
    h={"30px"}
    className={`${bg} rounded-md  text-dark_green border border-dark_green`}
  >
    {children}
  </Button>
);
