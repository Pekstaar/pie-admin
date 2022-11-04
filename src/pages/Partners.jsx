import { Box, Button, HStack, Text, useToast, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiSort } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { FaPeopleArrows } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { GrAdd, GrLocation } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { VscFilter } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../components/general/BreadCrumb";
import CustomModal from "../components/general/CustomModal";
import Loader from "../components/Loader";
import CInput, { CSelect } from "../components/general/Input";
import PrimaryButton from "../components/general/PrimaryButton";
import Table from "../components/general/Table";
import Wrapper from "../components/general/Wrapper";
import { toastProps } from "../utils/Helper";
import PartnerServices from "../utils/services/PartnerServices";
// import { AiOutlineMail } from "react-icons/ai";

const Partners = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [partners, setPartners] = useState([]);
  const [stateLoading, setStateLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [partner, setPartner] = useState({
    name: "",
    latitude: "",
    longitude: "",
    category: "",
    owner: 0,
  });

  useEffect(() => {
    setLoading(false);
    PartnerServices.fetchPartners().then((response) => {
      setPartners(response);
      setStateLoading(false);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setPartner((prev) => ({ ...prev, [name]: value }));
  };

  const [openModal, setOpenModal] = useState(false);

  const handleViewUser = (partner) => {
    navigate(`${partner}`, partner);
  };

  const handleCreate = async () => {
    setLoading(true);
    try {
      await PartnerServices.createPartner({
        ...partner,
        owner: 50,
      });

      setLoading(false);

      toast({
        ...toastProps,
        title: "Success!",
        description: "User created successfully",
        status: "success",
      });
      PartnerServices.fetchPartners().then((response) => {
        setPartners(response);
      });
    } catch (error) {
      setLoading(false);
      toast({
        ...toastProps,
        title: "Error!",
        description: error?.message,
        status: "error",
      });
      console.log("USER CREATE ERROR:", error);
    }
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
              loading={loading}
              handleSave={handleCreate}
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
                    name={"name"}
                    value={partner?.name}
                    handleChange={handleChange}
                  />
                </Box>

                <Box className="flex w-full flex-col gap-1">
                  <Text fontSize={"sm"}>Longitude</Text>

                  <CInput
                    h={"10"}
                    w={3 / 4}
                    placeholder=""
                    icon={<GrLocation className="text-xl" />}
                    borderRadius={"md"}
                    name={"longitude"}
                    value={partner?.longitude}
                    handleChange={handleChange}
                  />
                </Box>

                <Box className="flex w-full flex-col gap-1">
                  <Text fontSize={"sm"}>Latitude</Text>

                  <CInput
                    h={"10"}
                    w={3 / 4}
                    placeholder=""
                    icon={<GrLocation className="text-xl" />}
                    borderRadius={"md"}
                    name={"latitude"}
                    value={partner?.latitude}
                    handleChange={handleChange}
                  />
                </Box>

                <Box className="flex w-full flex-col gap-1">
                  <Text fontSize={"sm"}>Category</Text>

                  <CSelect
                    handleChange={(e) =>
                      setPartner((prev) => ({
                        ...prev,
                        category: e?.target?.value,
                      }))
                    }
                    h={"10"}
                    w={3 / 4}
                  >
                    {partnerCategories?.map((cat, index) => (
                      <option value={index}>{cat}</option>
                    ))}
                  </CSelect>
                </Box>
              </VStack>
            </CustomModal>
          </HStack>
        </HStack>

        {/* body */}
        <Box>
          <Table headers={[...Object.keys(tableData[0]), "Actions"]}>
            {stateLoading ? <Loader /> : partners?.map((data, key) => {
              const isEven = key % 2;

              // registration: "kcb 4457k",
              // driver: "Brooke Manor",
              // "license expiry": "Collins joe",
              //     status: 4,
              return (
                <tr
                  className={`h-14 capitalize ${isEven ? "bg-[#F9F9F9]" : "white"
                    }`}
                >
                  <td className="  py-3 px-4">{data?.name}</td>

                  <td className=" py-3 px-4">
                    {partnerCategories[data?.sector]}
                  </td>
                  {/* <td className=" py-3 px-4">{data?.location || "_"}</td> */}
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
    // location: "Nairobi CBD, Nairobi",
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
