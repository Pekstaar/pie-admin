import { Box, Button, Center, HStack, Text } from "@chakra-ui/react";
import React from "react";
import BreadCrumb from "../components/general/BreadCrumb";
import Table from "../components/general/Table";
import Wrapper from "../components/general/Wrapper";

import { FiEye } from "react-icons/fi";
import { RiCarLine, RiDeleteBin5Line } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { VscFilter } from "react-icons/vsc";
import CInput from "../components/general/Input";
import { BiSort } from "react-icons/bi";
import { Lorry } from "../assets/svg";
import { useNavigate } from "react-router-dom";

const Fleet = () => {
  const navigate = useNavigate();

  const handleViewFleet = (plate) => {
    navigate(`${plate}`, plate);
  };
  return (
    <Box p={"3"} maxH={"91%"} overflowY={"scroll"}>
      <BreadCrumb icon={<RiCarLine />} title={"Fleet management"} />

      <HStack p={"3"} pt={"5"} gap={3}>
        {cards_data?.map((item) => (
          <FleetCard no={item?.number} text={item?.text} />
        ))}
      </HStack>

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
                      <ActionButton
                        handlePress={() =>
                          handleViewFleet(data?.registration.toLowerCase())
                        }
                        bg={bg}
                      >
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
const ActionButton = ({ bg, children, handlePress }) => (
  <Button
    fontSize={"lg"}
    p={"0"}
    h={"30px"}
    className={`${bg} rounded-md  text-dark_green border border-dark_green`}
    onClick={handlePress}
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
const cards_data = [
  {
    text: "total vehicles",
    number: 152,
  },
  {
    text: "online vehicles",
    number: 60,
  },
  {
    text: "on trip",
    number: 30,
  },
  {
    text: "Offline vehicles",
    number: 6,
  },
];

const FleetCard = ({ text, no }) => (
  <HStack bg={"white"} borderRadius={"xl"} h={"28"} w={1 / 4} px={"5"}>
    <Box className="flex-grow">
      <Text fontSize={"sm"} className={"text-zinc-400"}>
        {text}
      </Text>
      <Text fontWeight={"bold"} fontSize={"2xl"}>
        {no}
      </Text>
    </Box>

    <Center p={"2"} bg={"current_bg"} borderRadius={"md"}>
      <Lorry />
    </Center>
  </HStack>
);
