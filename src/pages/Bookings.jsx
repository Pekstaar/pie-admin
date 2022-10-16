import { Box, Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Transaction } from "../assets/svg";
import BreadCrumb from "../components/general/BreadCrumb";
import Table from "../components/general/Table";
import Wrapper from "../components/general/Wrapper";

import { FiEye } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { VscFilter } from "react-icons/vsc";
import CInput from "../components/general/Input";
import { BiSort } from "react-icons/bi";

const Bookings = () => {
  return (
    <Box p={"3"} maxH={"91%"} overflowY={"scroll"}>
      <BreadCrumb icon={<Transaction />} title={"Bookings"} />

      <Wrapper my={"2"} p={"3"}>
        <HStack
          gap={"2"}
          className={"border-b-2 border-zinc-200"}
          h={"12"}
          mx={"2"}
        >
          <SubNavItem isCurrent title={"Ongoing"} handleClick={() => {}} />
          <SubNavItem title={"Scheduled"} handleClick={() => {}} />
          <SubNavItem title={"Completed"} handleClick={() => {}} />
        </HStack>

        {/* search and table actions */}
        <HStack py={"4"} justifyContent={"space-between"}>
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
                  : data?.status === 5
                  ? "bg-primary_green"
                  : "bg-primary_yellow_light";

              return (
                <tr
                  className={`h-14 capitalize ${
                    isEven ? "bg-[#F9F9F9]" : "white"
                  }`}
                >
                  <td className="  py-3 px-4">{data?.pickup}</td>
                  <td className="  py-3 px-4">{data?.destination}</td>
                  <td className=" py-3 px-4">{data?.sender}</td>
                  <td className=" py-3 px-4">{data?.receiver}</td>
                  <td className=" py-3 px-4">{data?.driver}</td>
                  <td className={` text-white py-3 px-4 `}>
                    <Box className="flex  ">
                      <Box
                        py={"0.5"}
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

export default Bookings;

const SubNavItem = ({ title, isCurrent }) => (
  // <Button>

  // </Button>
  <Button
    h={"12"}
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
    // py={"3"}
    borderBottomWidth={"2px"}
    borderBottomColor={isCurrent ? "dark_green" : "none"}
  >
    {title}
  </Button>
);

const tableData = [
  {
    pickup: "Saljona apartment",
    destination: "Brooke Manor",
    sender: "Collins joe",
    receiver: "Ben Doe",
    driver: "ken Driver",
    status: 4,
  },
  {
    pickup: "Saljona apartment",
    destination: "Brooke Manor",
    sender: "Collins joe",
    receiver: "Ben Doe",
    driver: "ken Driver",
    status: 5,
  },
  {
    pickup: "Saljona apartment",
    destination: "Brooke Manor",
    sender: "Collins joe",
    receiver: "Ben Doe",
    driver: "ken Driver",
    status: 0,
  },
  {
    pickup: "Saljona apartment",
    destination: "Brooke Manor",
    sender: "Collins joe",
    receiver: "Ben Doe",
    driver: "ken Driver",
    status: 1,
  },
  {
    pickup: "Saljona apartment",
    destination: "Brooke Manor",
    sender: "Collins joe",
    receiver: "Ben Doe",
    driver: "ken Driver",
    status: 2,
  },
  {
    pickup: "Saljona apartment",
    destination: "Brooke Manor",
    sender: "Collins joe",
    receiver: "Ben Doe",
    driver: "ken Driver",
    status: 3,
  },
  {
    pickup: "Saljona apartment",
    destination: "Brooke Manor",
    sender: "Collins joe",
    receiver: "Ben Doe",
    driver: "ken Driver",
    status: 4,
  },
  {
    pickup: "Saljona apartment",
    destination: "Brooke Manor",
    sender: "Collins joe",
    receiver: "Ben Doe",
    driver: "ken Driver",
    status: 5,
  },
];
const STATUS_LIST = {
  1: "arrived at pickup",
  2: "picked up",
  3: "on trip",
  4: "arrived destination",
  0: "cancelled",
  5: "completed",
};
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
const TableAction = ({ icon, text }) => (
  <button className="bg-zinc-200 px-3 py-1.5 gap-1 rounded-md text-sm capitalize flex  ">
    {icon}
    {text}
  </button>
);
