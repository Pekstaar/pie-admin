import { Box, Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Transaction } from "../assets/svg";
import BreadCrumb from "../components/general/BreadCrumb";
import Table from "../components/general/Table";
import Wrapper from "../components/general/Wrapper";

import { FiEye } from "react-icons/fi";
import { RiCarLine, RiDeleteBin5Line } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { VscFilter } from "react-icons/vsc";
import CInput from "../components/general/Input";
import { BiSort } from "react-icons/bi";

const Fleet = () => {
  return (
    <Box p={"3"} maxH={"91%"} overflowY={"scroll"}>
      <BreadCrumb icon={<RiCarLine />} title={"Fleet management"} />

      <Wrapper my={"4"} p={"5 "}>
        {/* search and table actions */}
        <HStack py={"6"} justifyContent={"space-between"}>
          {/* /search input */}
          <CInput icon={<IoSearchOutline className="text-xl" />} />
          {/* actions */}
          <HStack gap={"2"}>
            <TableAction
              icon={<VscFilter className="text-lg" />}
              text={"Filter"}
            />
            <TableAction icon={<BiSort className="text-lg" />} text={"Sort"} />
          </HStack>
        </HStack>

        {/* body */}
        <Box>
          <Table headers={[...Object.keys(tableData[0]), "Actions"]}>
            {tableData?.map((data, key) => {
              const isEven = key % 2;
              const status = STATUS_LIST[data?.status];
              const bg =
                data?.status === 0
                  ? "bg-primary_red"
                  : data?.status === 2
                  ? "bg-primary_green"
                  : "bg-primary_yellow_light";
              // registration: "kcb 4457k",
              // driver: "Brooke Manor",
              // "license expiry": "Collins joe",
              //     status: 4,
              return (
                <tr
                  className={`h-20 capitalize ${
                    isEven ? "bg-[#F9F9F9]" : "white"
                  }`}
                >
                  <td className=" text-center py-3 px-4">
                    {data?.registration}
                  </td>
                  <td className=" text-center py-3 px-4">{data?.driver}</td>
                  <td className="text-center py-3 px-4">
                    {data?.["license expiry"]}
                  </td>

                  <td className={`text-center text-white py-3 px-4 `}>
                    <Box className="flex  justify-center">
                      <Box
                        py={"1"}
                        px={"2"}
                        fontSize={"xs"}
                        className={`${bg} rounded-md font-medium  `}
                      >
                        {status}
                      </Box>
                    </Box>
                  </td>
                  {/* actions table */}
                  <td className={`text-center text-white py-3 px-4`}>
                    <Box className="flex gap-4">
                      <ActionButton bg={bg}>
                        <FiEye />
                      </ActionButton>

                      <ActionButton bg={bg}>
                        <RiDeleteBin5Line />
                      </ActionButton>
                    </Box>
                  </td>
                </tr>
              );
            })}
          </Table>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Fleet;

const SubNavItem = ({ title, isCurrent }) => (
  // <Button>

  // </Button>
  <Button
    h={"14"}
    cursor={"pointer"}
    borderRadius={"none"}
    bg={"white "}
    className={`text-primary_yellow text-xl ${
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
  >
    {title}
  </Button>
);

const tableData = [
  {
    registration: "kcb 4457k",
    driver: "Brooke Manor",
    "license expiry": "Collins joe",
    status: 1,
  },
  {
    registration: "kde 4457k",
    driver: "Brooke Manor",
    "license expiry": "Collins joe",
    status: 2,
  },
  {
    registration: "kba 4457k",
    driver: "Brooke Manor",
    "license expiry": "9/9/2022",
    status: 0,
  },
  {
    registration: "kca 4457k",
    driver: "Brooke Manor",
    "license expiry": "8/2/2023",
    status: 0,
  },
  {
    registration: "kcb 4457k",
    driver: "Brooke Manor",
    "license expiry": "9/5/2023",
    status: 2,
  },
  {
    registration: "kde 4457k",
    driver: "Brooke Manor",
    "license expiry": "9/9/2022",
    status: 1,
  },
  {
    registration: "kba 4457k",
    driver: "Brooke Manor",
    "license expiry": "9/9/2022",

    status: 2,
  },
  {
    registration: "kca 4457k",
    driver: "Brooke Manor",
    "license expiry": "9/9/2022",
    status: 1,
  },
];
const STATUS_LIST = {
  1: "busy",
  2: "available",
  0: "offline",
};
const ActionButton = ({ bg, children }) => (
  <Button
    fontSize={"lg"}
    p={"0"}
    h={"30px"}
    className={`${bg} rounded-md  text-dark_green border border-dark_green`}
  >
    {children}
  </Button>
);
const TableAction = ({ icon, text }) => (
  <button className="bg-zinc-200 px-3 py-1.5 gap-1 rounded-md text-sm capitalize flex  ">
    {icon}
    {text}
  </button>
);
