import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import BreadCrumb from "../components/general/BreadCrumb";
import Table from "../components/general/Table";
import Wrapper from "../components/general/Wrapper";
import PartnerServices from "../utils/services/PartnerServices";
import { FiEye } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { VscFilter } from "react-icons/vsc";
import CInput from "../components/general/Input";
import { BiSort } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { BsPerson, BsTelephone } from "react-icons/bs";
import PrimaryButton from "../components/general/PrimaryButton";
import { GrAdd, GrLocation } from "react-icons/gr";
import CustomModal from "../components/general/CustomModal";
import { FaPeopleArrows } from "react-icons/fa";
// import { AiOutlineMail } from "react-icons/ai";

const Partners = () => {
  const navigate = useNavigate();
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    PartnerServices.fetchPartners().then((response) => {
      setPartners(response);
    });
  }, []);

  const [openModal, setOpenModal] = useState(false);

  const handleViewUser = (partner) => {
    navigate(`${partner}`, partner);
  };
  return (
    <Box p={"3"} maxH={"91%"} overflowY={"scroll"}>
      <BreadCrumb icon={<FaPeopleArrows />} title={"Partners"} />

      <Wrapper my={"2"} p={"5 "}>
        {/* search and table actions */}
        <HStack py={"4"} justifyContent={"space-between"} alignItems={"end"}>
          {/* /search input */}
          <Box>
            <CInput icon={<IoSearchOutline className="text-xl" />} />
          </Box>
          {/* actions */}
          <HStack gap={"2"}>
            <TableAction
              icon={<VscFilter className="text-lg" />}
              text={"Filter"}
            />

            <TableAction icon={<BiSort className="text-lg" />} text={"Sort"} />

            <CustomModal
              title={"Add Partner"}
              isOpen={openModal}
              onClose={() => setOpenModal(false)}
              button={
                <PrimaryButton
                  className={"text-sm items-end"}
                  handleClick={() => setOpenModal(true)}
                >
                  <GrAdd className="text-lg" />
                  <Text fontWeight={"medium"}>Add Partner</Text>
                </PrimaryButton>
              }
            >
              <VStack gap={"2"} w={"full"}>
                <Box className="flex w-full flex-col gap-1">
                  <Text fontSize={"sm"}>Partner name</Text>

                  <CInput
                    h={"10"}
                    w={3 / 4}
                    placeholder=""
                    icon={<BsPerson className="text-xl" />}
                    borderRadius={"md"}
                  />
                </Box>

                <Box className="flex w-full flex-col gap-1">
                  <Text fontSize={"sm"}>Category</Text>

                  <CInput
                    h={"10"}
                    w={3 / 4}
                    placeholder=""
                    borderRadius={"md"}
                  />
                </Box>

                <Box className="flex w-full flex-col gap-1">
                  <Text fontSize={"sm"}>Location</Text>

                  <CInput
                    h={"10"}
                    w={3 / 4}
                    placeholder=""
                    icon={<GrLocation className="text-xl" />}
                    borderRadius={"md"}
                  />
                </Box>

                <Box className="flex w-full flex-col gap-1">
                  <Text fontSize={"sm"}>Phone</Text>

                  <CInput
                    h={"10"}
                    w={3 / 4}
                    placeholder=""
                    icon={<BsTelephone className="text-xl" />}
                    borderRadius={"md"}
                  />
                </Box>
              </VStack>
            </CustomModal>
          </HStack>
        </HStack>

        {/* body */}
        <Box>
          <Table headers={[...Object.keys(tableData[0]), "Actions"]}>
            {partners?.map((data, key) => {
              const isEven = key % 2;

              // registration: "kcb 4457k",
              // driver: "Brooke Manor",
              // "license expiry": "Collins joe",
              //     status: 4,
              return (
                <tr
                  className={`h-14 capitalize ${
                    isEven ? "bg-[#F9F9F9]" : "white"
                  }`}
                >
                  <td className="  py-3 px-4">{data?.name}</td>

                  <td className=" py-3 px-4">
                    {partnerCategories[data?.sector]}
                  </td>
                  <td className=" py-3 px-4">{data?.location || "_"}</td>
                  <td className=" py-3 px-4">{data?.owner?.phonenumber}</td>

                  {/* actions table */}
                  <td className={` text-white py-3 px-4 w-32`}>
                    <Box className="flex gap-6 justify-start">
                      <ActionButton
                        handlePress={() => handleViewUser(data?.id)}
                      >
                        <FiEye />
                      </ActionButton>

                      <ActionButton>
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

export default Partners;

export const partnerCategories = [
  "fashion",
  "Bakery",
  "Pharmacy",
  "Supermarket",
  "Manufacturing",
  "Restaurants",
];

const tableData = [
  {
    "partner name": "New User",
    category: "admin",
    location: "Nairobi CBD, Nairobi",
    phone: "0711334455",
  },
  {
    "partner name": "New User",
    category: "admin",
    location: "Nairobi CBD, Nairobi",
    phone: "0711334455",
  },
  {
    "partner name": "New User",
    category: "admin",
    location: "Nairobi CBD, Nairobi",
    phone: "0711334455",
  },
  {
    "partner name": "New User",
    category: "admin",
    location: "Nairobi CBD, Nairobi",
    phone: "0711334455",
  },
  {
    "partner name": "New User",
    category: "admin",
    location: "Nairobi CBD, Nairobi",
    phone: "0711334455",
  },
  {
    "partner name": "New User",
    category: "admin",
    location: "Nairobi CBD, Nairobi",
    phone: "0711334455",
  },
  {
    "partner name": "New User",
    category: "admin",
    location: "Nairobi CBD, Nairobi",
    phone: "0711334455",
  },
  {
    "partner name": "New User",
    category: "admin",
    location: "Nairobi CBD, Nairobi",
    phone: "0711334455",
  },
];

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
