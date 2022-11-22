import { Box, Button, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsMailbox, BsPerson, BsTelephone } from "react-icons/bs";
import CustomModal from "../general/CustomModal";
import CInput from "../general/Input";
import Wrapper from "../general/Wrapper";

const EditPersonalInfoModal = ({ openModal, handleCloseModal, current }) => {
  const [usersValues, setUserValues] = useState({
    first_name: "",
    last_name: "",
    is_admin: "",
    is_driver: "",
    email: "",
    phone_number: "",
  });


  useEffect(() => {
    setUserValues((prev) => ({
      ...prev,
      first_name: current?.first_name,
      last_name: current?.last_name,
      is_admin: current?.is_admin,
      is_driver: current?.is_driver,
      email: current?.email,
      phone_number: current.phoneNumber,
    }));
  }, [current]);


  return (
    <CustomModal
      title={`Application/${usersValues?.first_name + " " +  usersValues?.last_name}`}
      isOpen={openModal}
      onClose={handleCloseModal}
      bg={"gray.100"}
      px={0}
      showHeader={false}
      ofy={"scroll"}
      hideSave
    >
      {/* {JSON.stringify(current)} */}
      <Wrapper className={"flex justify-end"} px={6} borderRadius={"0"}>
      <Button
          h={"30px"}
          borderRadius={"6"}
          className={"border border-yellow-400 text-yellow-400"}
          px={4}
          py={6}
        >
          Update
        </Button>
      </Wrapper>

      {/* sender information */}
      <Box className={""}>
        <Box className="px-7 py-3" fontSize={"lg"} fontWeight={"semibold"}>
          Personal Information
        </Box>

        <Wrapper borderRadius={0} px={"7"}>
          <VStack gap={"0.5"} w={"full"} mx={0}>
            <Box className="flex w-full flex-col gap-1">
              <Text fontSize={"sm"}>First name</Text>

              <CInput
                h={"10"}
                w={3 / 4}
                placeholder=""
                value={usersValues?.first_name}
                icon={<BsPerson className="text-xl" />}
                borderRadius={"md"}
              />
            </Box>

            <Box className="flex w-full flex-col gap-1">
              <Text fontSize={"sm"}>Last name</Text>

              <CInput
                h={"10"}
                w={3 / 4}
                placeholder=""
                value={usersValues?.last_name}
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
                value={usersValues?.is_admin ? "Admin" : usersValues?.is_driver ? "Driver" : "User"}
                icon={<BsPerson className="text-xl" />}
                borderRadius={"md"}
              />
            </Box>

            <Box className="flex w-full flex-col gap-1">
              <Text fontSize={"sm"}>Email</Text>

              <CInput
                h={"10"}
                w={3 / 4}
                placeholder=""
                value={usersValues?.email}
                icon={<BsMailbox className="text-xl" />}
                borderRadius={"md"}
              />
            </Box>

            <Box className="flex w-full flex-col gap-1">
              <Text fontSize={"sm"}>Phone</Text>

              <CInput
                h={"10"}
                w={3 / 4}
                placeholder=""
                value={usersValues?.phone_number}
                icon={<BsTelephone className="text-xl" />}
                borderRadius={"md"}
              />
            </Box>

          </VStack>
        </Wrapper>
      </Box>
    </CustomModal>
  );
};

export default EditPersonalInfoModal;
export const ActionButton = ({ bg, children, handleClick }) => (
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
