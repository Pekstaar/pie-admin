import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Transaction } from "../assets/svg";
import BreadCrumb from "../components/general/BreadCrumb";
import Table from "../components/general/Table";
import Wrapper from "../components/general/Wrapper";
import car from "../assets/images/car.png";

import { FiEye } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { HiDownload } from "react-icons/hi";
import { VscFilter } from "react-icons/vsc";
import { GrEdit } from "react-icons/gr";
import CInput from "../components/general/Input";
import { BiSort } from "react-icons/bi";
import { useLocation } from "react-router-dom";

const FleetView = () => {
  const location = useLocation()?.pathname.split("/");
  // const
  return (
    <Box p={"3"} maxH={"91%"} overflowY={"scroll"}>
      <BreadCrumb
        icon={<Transaction />}
        title={`Fleet management /`}
        subtitle={location[location?.length - 1]}
      />
      <Box className="flex gap-3 ">
        <Box className={"w-1/3"} flex={"1"}>
          <Wrapper
            my={"4"}
            p={"5"}
            borderRadius={"none"}
            className={"flex flex-col justify-center items-center"}
          >
            {/* body */}
            <Image src={car} h={40} w={44} mb={"3"} />
            <Text
              fontSize={"xl"}
              textTransform={"uppercase"}
              fontWeight={"semibold"}
            >
              {location[location?.length - 1]}
            </Text>

            <Text fontSize={"sm"} fontWeight={"light"}>
              Driver: Steve Driver
            </Text>
          </Wrapper>

          {/* vehicle information */}
          <Box>
            <Box className="flex justify-between py-2 px-5">
              <Text fontSize={"lg"} fontWeight={"medium"}>
                Vehicle information
              </Text>

              <ActionButton>
                <GrEdit />
              </ActionButton>
            </Box>
            <Wrapper
              my={"2"}
              p={"5"}
              borderRadius={"none"}
              className={"flex justify-center items-center gap-3 text-sm"}
            >
              <Box className="text-right flex flex-col gap-2">
                <Text fontWeight={"medium"}>Reg no</Text>
                <Text fontWeight={"medium"}>Color</Text>
                <Text fontWeight={"medium"}>Type</Text>
                <Text fontWeight={"medium"}>Model</Text>
                <Text fontWeight={"medium"}>License Expiry</Text>
              </Box>

              <div className={"bg-zinc-200 h-32 w-0.5 rounded-full"} />

              <Box className="text-left flex flex-col gap-2">
                <Text>KCB 121G</Text>
                <Text>Gray</Text>
                <Text>Cab</Text>
                <Text>Toyota Allion</Text>
                <Text>3/9/2022</Text>
              </Box>
            </Wrapper>
          </Box>

          {/* Documents */}
          <Box>
            <Box className="flex justify-between py-2 px-5">
              <Text fontSize={"lg"} fontWeight={"medium"}>
                Documents
              </Text>
            </Box>
            <Wrapper my={"2"} p={"5"} borderRadius={"none"} className={""}>
              <Box className="">
                <Text fontSize={"lg"} mb={"2"} fontWeight={"medium"}>
                  Insurance
                </Text>

                <DocItem text={"My_insurance docs.pdf"} />
              </Box>

              <Box className="flex justify-end py-5">
                <button className="rounded border border-primary_yellow text-primary_yellow hover:bg-gray-50 p-3">
                  Add document
                </button>
              </Box>
            </Wrapper>
          </Box>
        </Box>

        <Wrapper my={"4"} p={"5 "} className={"w-2/3"}>
          <Text fontWeight={"semibold"} fontSize={"lg"}>
            Bookings
          </Text>

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
              <TableAction
                icon={<BiSort className="text-lg" />}
                text={"Sort"}
              />
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
                      <Box className="flex  justify-center">
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
                    <td className={` text-white py-3 px-4`}>
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
    </Box>
  );
};

export default FleetView;

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

const DocItem = ({ text }) => (
  <Box className="flex p-5 border border-zinc-300 rounded-xl bg-white justify-between items-center">
    <Text>{text}</Text>

    <TableAction icon={<HiDownload className="text-lg" />} text={"Download"} />
  </Box>
);
