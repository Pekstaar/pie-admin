import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Transaction } from "../assets/svg";
import BreadCrumb from "../components/general/BreadCrumb";
import Table from "../components/general/Table";
import Wrapper from "../components/general/Wrapper";

import { BiSort } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { GrEdit } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { VscFilter } from "react-icons/vsc";
import { useNavigate, useParams } from "react-router-dom";
import BusinessImage from "../assets/images/business_image.png";
import CInput from "../components/general/Input";
import PrimaryButton from "../components/general/PrimaryButton";
import PartnerServices from "../utils/services/PartnerServices";
import { partnerCategories } from "./Partners";

const ViewPartner = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [partner, setPartner] = useState({});

  const handleViewUser = (user) => {
    navigate(`/users/${user}`, user);
  };

  React.useEffect(() => {
    PartnerServices.fetchSinglePartner(params?.id).then((response) => {
      setPartner(response);
    });
  }, [params?.id]);
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
              {partnerCategories[partner?.sector]}
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
                {/* <Text fontWeight={"medium"}>Last edit date</Text> */}
              </Box>

              <div className={"bg-zinc-200 h-60 w-0.5 rounded-full"} />

              <Box className="text-left flex flex-col gap-4">
                <Text>
                  {partner?.owner?.first_name + " " + partner?.owner?.last_name}
                </Text>
                <Text>
                  {partner?.owner?.is_driver
                    ? "Driver"
                    : partner?.owner?.is_admin
                    ? "Admin"
                    : "user"}
                </Text>
                <Text>Nairobi CBD, Nairobi</Text>
                <Text> {partner?.owner?.email}</Text>
                <Text> {partner?.owner?.phonenumber}</Text>
                <Text> {partner?.owner?.date_joined}</Text>
              </Box>
            </Wrapper>
          </Box>

          {/* vehicle information */}
          {/* <Box>
            <Box className="flex justify-between py-2 px-5">
              <Text fontSize={"lg"} fontWeight={"medium"}>
                Payment Details
              </Text>

              <ActionButton>
                <GrEdit />
              </ActionButton>
            </Box>
            <Wrapper my={"2"} borderRadius={"none"} className={"gap-3"}> */}
          {/* mini cards */}
          {/* <HStack w={"full"} fontFamily={"Poppins"}>
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
                        className={`h-14 capitalize ${
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
              // </Box>
            </Wrapper> */}
          {/* </Box> */}
        </Box>

        {/* table */}
        <Wrapper my={"4"} p={"5 "} className={"w-3/5"}>
          <Text fontWeight={"semibold"} fontSize={"lg"}>
            Bookings
          </Text>

          {/* search and table actions */}
          <HStack py={"7"} justifyContent={"space-between"}>
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
              {[]?.map((data, key) => {
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
                    <td className="  py-3 px-3 bg-white">
                      <input type="checkbox" className="h-[20px] w-[20px]" />
                    </td>
                    <td className="  py-3 px-4">{data?.destination}</td>
                    <td className=" py-3 px-4">{data?.sender}</td>
                    <td className=" py-3 px-4">{data?.receiver}</td>
                    <td className={` text-white py-3 px-4 `}>
                      <Box className="flex ">
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
                    <td className={` text-white py-3 px-4`}>
                      <Box className="flex gap-4 ">
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
    destination: "Brooke Manor",
    sender: "ken Driver",
    receiver: "Ben Doe",
    status: 4,
  },
  {
    destination: "Brooke Manor",
    sender: "ken Driver",
    receiver: "Ben Doe",
    status: 5,
  },
  {
    destination: "Brooke Manor",
    sender: "ken Driver",
    receiver: "Ben Doe",
    status: 0,
  },
  {
    destination: "Brooke Manor",
    sender: "ken Driver",
    receiver: "Ben Doe",
    status: 1,
  },
  {
    destination: "Brooke Manor",
    sender: "ken Driver",
    receiver: "Ben Doe",
    status: 2,
  },
  {
    destination: "Brooke Manor",
    sender: "ken Driver",
    receiver: "Ben Doe",
    status: 3,
  },
  {
    destination: "Brooke Manor",
    sender: "ken Driver",
    receiver: "Ben Doe",
    status: 4,
  },
  {
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

// const MiniCard = ({ text, no, icon }) => (
//   <Box borderRadius={"xl"} h={"20"} p={"2"} flexGrow={"1"}>
//     <Text fontSize={"sm"} className={"text-zinc-400"}>
//       {text}
//     </Text>
//     <Box className="flex justify-between items-center">
//       <Text fontWeight={"bold"} fontSize={"lg"}>
//         {no}
//       </Text>

//       <Center
//         h={"40px"}
//         w={"40px"}
//         p={"1.5"}
//         bg={"current_bg"}
//         borderRadius={"md"}
//       >
//         {icon}
//       </Center>
//     </Box>
//   </Box>
// );

// const sample_payment_data = [
//   {
//     date: "5/3/2019",
//     "method of payment": "Mpesa",
//     amount: "350",
//   },
//   {
//     date: "5/3/2019",
//     "method of payment": "Mpesa",
//     amount: "350",
//   },
//   {
//     date: "5/3/2019",
//     "method of payment": "Mpesa",
//     amount: "350",
//   },
// ];
