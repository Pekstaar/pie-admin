import { Box, Button, Center, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Lorry, Transaction } from "../assets/svg";
import BreadCrumb from "../components/general/BreadCrumb";
import Table from "../components/general/Table";
import Wrapper from "../components/general/Wrapper";

import { FiEye } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { VscFilter } from "react-icons/vsc";
import { GrEdit } from "react-icons/gr";
import CInput from "../components/general/Input";
import { BiSort } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { GoGraph } from "react-icons/go";
import BusinessImage from "../assets/images/business_image.png";
import PrimaryButton from "../components/general/PrimaryButton";

const ViewPartner = () => {
  const navigate = useNavigate();
  const params = useParams();

  const handleViewUser = (user) => {
    navigate(`/users/${user}`, user);
  };
  // const
  return (
    <Box p={"3"} maxH={"91%"} overflowY={"scroll"}>
      <BreadCrumb
        icon={<Transaction />}
        title={`Partners /`}
        subtitle={params?.id}
      />
      <Box className="flex gap-3 ">
        <Box className="w-2/5">
          <Wrapper
            my={"4"}
            p={"8"}
            borderRadius={"none"}
            className={"flex flex-col rounded"}
          >
            {/* body */}

            <Image
              w={"full"}
              objectFit={"cover"}
              src={BusinessImage}
              mb={"4"}
            />

            <Text
              fontSize={"xl"}
              textTransform={"uppercase"}
              fontWeight={"semibold"}
            >
              {params?.id}
            </Text>

            <Text fontSize={"sm"} fontWeight={"normal"}>
              Liquor store
            </Text>
          </Wrapper>

          {/* Personal information*/}
          <Box>
            <Box className="flex justify-between py-2 px-5">
              <Text fontSize={"lg"} fontWeight={"medium"}>
                Personal information
              </Text>

              <ActionButton>
                <GrEdit />
              </ActionButton>
            </Box>

            <Wrapper
              my={"2"}
              p={"10"}
              borderRadius={"none"}
              className={"flex justify-center items-center gap-3 text-[14px]"}
            >
              <Box className="text-right flex flex-col gap-4">
                <Text fontWeight={"medium"}>Full name</Text>
                <Text fontWeight={"medium"}>Category</Text>
                <Text fontWeight={"medium"}>Location</Text>
                <Text fontWeight={"medium"}>Email</Text>
                <Text fontWeight={"medium"}>Phone number</Text>
                <Text fontWeight={"medium"}>Onboarding date</Text>
                <Text fontWeight={"medium"}>Last edit date</Text>
              </Box>

              <div className={"bg-zinc-200 h-60 w-0.5 rounded-full"} />

              <Box className="text-left flex flex-col gap-4">
                <Text>Pekmah Cruiz</Text>
                <Text>Driver</Text>
                <Text>Nairobi CBD, Nairobi</Text>
                <Text>pekmah@mail.com</Text>
                <Text>+254 781223344</Text>
                <Text>3/9/2022</Text>
                <Text>3/10/2022</Text>
              </Box>
            </Wrapper>
          </Box>

          {/* vehicle information */}
          <Box>
            <Box className="flex justify-between py-2 px-5">
              <Text fontSize={"lg"} fontWeight={"medium"}>
                Payment Details
              </Text>

              <ActionButton>
                <GrEdit />
              </ActionButton>
            </Box>
            <Wrapper my={"2"} borderRadius={"none"} className={"gap-3"}>
              {/* mini cards */}
              <HStack w={"full"} fontFamily={"Poppins"}>
                <MiniCard no={"24"} text={"Total Bookings"} icon={<Lorry />} />
                <MiniCard
                  no={"3"}
                  text={"Canceled Bookings"}
                  icon={<Lorry />}
                />
                <MiniCard
                  no={"KES. 140,000"}
                  text={"Customer Value"}
                  icon={<GoGraph />}
                />
              </HStack>

              <Box mt={"3"}>
                <Table headers={[...Object.keys(sample_payment_data[0])]}>
                  {sample_payment_data?.map((data, key) => {
                    const isEven = key % 2;

                    return (
                      <tr
                        className={`h-20 capitalize ${
                          isEven ? "bg-[#F9F9F9]" : "white"
                        }`}
                      >
                        <td className=" text-center py-3 px-4">{data?.date}</td>
                        <td className=" text-center py-3 px-4">
                          {data?.["method of payment"]}
                        </td>
                        <td className="text-center py-3 px-4">
                          {data?.amount}
                        </td>
                      </tr>
                    );
                  })}
                </Table>
              </Box>
            </Wrapper>
          </Box>
        </Box>

        {/* table */}
        <Wrapper my={"4"} p={"5 "} className={"w-3/5"}>
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

              <PrimaryButton className={"font-medium"}>
                Reconcile payments
              </PrimaryButton>
            </HStack>
          </HStack>

          {/* body */}

          <Box>
            <Table
              headers={[...Object.keys(tableData[0]), "Actions"]}
              hasCheckbox
            >
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
                    className={`h-20 capitalize ${
                      isEven ? "bg-[#F9F9F9]" : "white"
                    }`}
                  >
                    <td className=" text-center py-3 px-3 bg-white">
                      <input type="checkbox" className="h-[20px] w-[20px]" />
                    </td>
                    <td className=" text-center py-3 px-4">{data?.pickup}</td>
                    <td className=" text-center py-3 px-4">
                      {data?.destination}
                    </td>
                    <td className="text-center py-3 px-4">{data?.sender}</td>
                    <td className="text-center py-3 px-4">{data?.receiver}</td>
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
                      <Box className="flex gap-4 justify-center">
                        <ActionButton
                          bg={bg}
                          handleClick={() => handleViewUser(data?.driver)}
                        >
                          <FiEye />
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

export default ViewPartner;

const tableData = [
  {
    pickup: "Saljona apartment",
    destination: "Brooke Manor",
    sender: "ken Driver",
    receiver: "Ben Doe",
    status: 4,
  },
  {
    pickup: "Saljona apartment",
    destination: "Brooke Manor",
    sender: "ken Driver",
    receiver: "Ben Doe",
    status: 5,
  },
  {
    pickup: "Saljona apartment",
    destination: "Brooke Manor",
    sender: "ken Driver",
    receiver: "Ben Doe",
    status: 0,
  },
  {
    pickup: "Saljona apartment",
    destination: "Brooke Manor",
    sender: "ken Driver",
    receiver: "Ben Doe",
    status: 1,
  },
  {
    pickup: "Saljona apartment",
    destination: "Brooke Manor",
    sender: "ken Driver",
    receiver: "Ben Doe",
    status: 2,
  },
  {
    pickup: "Saljona apartment",
    destination: "Brooke Manor",
    sender: "ken Driver",
    receiver: "Ben Doe",
    status: 3,
  },
  {
    pickup: "Saljona apartment",
    destination: "Brooke Manor",
    sender: "ken Driver",
    receiver: "Ben Doe",
    status: 4,
  },
  {
    pickup: "Saljona apartment",
    destination: "Brooke Manor",
    sender: "ken Driver",
    receiver: "Ben Doe",
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
const ActionButton = ({ bg, children, handleClick }) => (
  <Button
    fontSize={"lg"}
    p={"0"}
    h={"30px"}
    className={`${bg} rounded-md  text-dark_green border border-dark_green`}
    onClick={handleClick}
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

const MiniCard = ({ text, no, icon }) => (
  <Box borderRadius={"xl"} h={"20"} p={"2"} flexGrow={"1"}>
    <Text fontSize={"sm"} className={"text-zinc-400"}>
      {text}
    </Text>
    <Box className="flex justify-between items-center">
      <Text fontWeight={"bold"} fontSize={"lg"}>
        {no}
      </Text>

      <Center
        h={"40px"}
        w={"40px"}
        p={"1.5"}
        bg={"current_bg"}
        borderRadius={"md"}
      >
        {icon}
      </Center>
    </Box>
  </Box>
);

const sample_payment_data = [
  {
    date: "5/3/2019",
    "method of payment": "Mpesa",
    amount: "350",
  },
  {
    date: "5/3/2019",
    "method of payment": "Mpesa",
    amount: "350",
  },
  {
    date: "5/3/2019",
    "method of payment": "Mpesa",
    amount: "350",
  },
];
