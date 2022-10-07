import { Box, Button, Center, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import BreadCrumb from "../components/general/BreadCrumb";
import Table from "../components/general/Table";
import Wrapper from "../components/general/Wrapper";

import { FiEye } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { VscFilter } from "react-icons/vsc";
import CInput from "../components/general/Input";
import { BiSort } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { BsPeople } from "react-icons/bs";
import PrimaryButton from "../components/general/PrimaryButton";
import { GrAdd } from "react-icons/gr";
import PrimaryOutlinedButton from "../components/general/PrimaryOutlinedButton";
import CustomModal from "../components/general/CustomModal";

const Users = () => {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  const handleViewFleet = (plate) => {
    navigate(`${plate}`, plate);
  };
  return (
    <Box p={"3"} maxH={"91%"} overflowY={"scroll"}>
      <BreadCrumb icon={<BsPeople />} title={"Fleet management"} />

      <HStack p={"3"} pt={"5"} gap={3}>
        {cards_data?.map((item) => (
          <UserCard no={item?.number} text={item?.text} />
        ))}
      </HStack>

      <Wrapper my={"4"} p={"5 "}>
        {/* search and table actions */}
        <HStack py={"6"} justifyContent={"space-between"} alignItems={"end"}>
          {/* /search input */}
          <Box>
            <CInput icon={<IoSearchOutline className="text-xl" />} />

            <HStack gap={"5"} mt={"5"}>
              <PrimaryOutlinedButton
                className={"h-[35px] px-3 border-[2px] rounded-lg text-sm"}
              >
                All
              </PrimaryOutlinedButton>
              <PrimaryOutlinedButton
                className={"h-[35px] px-3 border-[2px] rounded-lg text-sm"}
              >
                Admin
              </PrimaryOutlinedButton>
              <PrimaryOutlinedButton
                className={"h-[35px] px-3 border-[2px] rounded-lg text-sm"}
              >
                Drivers
              </PrimaryOutlinedButton>
              <PrimaryOutlinedButton
                className={"h-[35px] px-3 border-[2px] rounded-lg text-sm"}
              >
                Users
              </PrimaryOutlinedButton>
            </HStack>
          </Box>
          {/* actions */}
          <HStack gap={"2"}>
            <TableAction
              icon={<VscFilter className="text-lg" />}
              text={"Filter"}
            />

            <TableAction icon={<BiSort className="text-lg" />} text={"Sort"} />

            <CustomModal
              title={"Add User"}
              isOpen={openModal}
              onClose={() => setOpenModal(false)}
              button={
                <PrimaryButton
                  className={"text-sm items-end"}
                  handleClick={() => setOpenModal(true)}
                >
                  <GrAdd className="text-lg" />
                  <Text fontWeight={"medium"}>Add User</Text>
                </PrimaryButton>
              }
            ></CustomModal>
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
                  : data?.status === 1
                  ? "bg-primary_green"
                  : "";
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
                  <td className=" text-center py-3 px-4">{data?.fullname}</td>
                  <td className=" text-center py-3 px-4">
                    {data?.["email address"]}
                  </td>
                  <td className="text-center py-3 px-4">{data?.phone}</td>{" "}
                  <td className="text-center py-3 px-4">{data?.category}</td>
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
                    <Box className="flex gap-6 justify-center">
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

export default Users;

const tableData = [
  {
    fullname: "New User",
    "email address": "newuser@gmail.com",
    phone: "0711334455",
    category: "admin",
    status: 1,
  },
  {
    fullname: "New User",
    "email address": "newuser@gmail.com",
    phone: "0711334455",
    category: "admin",
    status: 1,
  },
  {
    fullname: "New User",
    "email address": "newuser@gmail.com",
    phone: "0711334455",
    category: "admin",
    status: 0,
  },
  {
    fullname: "New User",
    "email address": "newuser@gmail.com",
    phone: "0711334455",
    category: "admin",
    status: 0,
  },
  {
    fullname: "New User",
    "email address": "newuser@gmail.com",
    phone: "0711334455",
    category: "admin",
    status: 1,
  },
  {
    fullname: "New User",
    "email address": "newuser@gmail.com",
    phone: "0711334455",
    category: "admin",
    status: 1,
  },
  {
    fullname: "New User",
    "email address": "newuser@gmail.com",
    phone: "0711334455",
    category: "admin",

    status: 0,
  },
  {
    fullname: "New User",
    "email address": "newuser@gmail.com",
    phone: "0711334455",
    category: "admin",
    status: 1,
  },
];
const STATUS_LIST = {
  0: "active",
  1: "deactivated",
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
    text: "Senders",
    number: 152,
  },
  {
    text: "Drivers",
    number: 60,
  },
  {
    text: "Admins",
    number: 5,
  },
  {
    text: "Receivers",
    number: 70,
  },
];

const UserCard = ({ text, no }) => (
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
      <BsPeople className="text-2xl" />
    </Center>
  </HStack>
);
