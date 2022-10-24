import { Box, Button, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsPerson, BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { STATUS_LIST } from "../../utils/Helper";
import CustomModal from "../general/CustomModal";
import CInput from "../general/Input";
import StatusTag from "../general/StatusTag";

import Wrapper from "../general/Wrapper";

const ViewModal = ({ openModal, handleCloseModal }) => {
  const status = 1;

  const statusBG =
    status === 0
      ? "bg-primary_red"
      : status === 5
      ? "bg-primary_green"
      : "bg-primary_yellow_light";

  return (
    <CustomModal
      title="Booking"
      isOpen={openModal}
      onClose={handleCloseModal}
      bg={"gray.100"}
      px={0}
      showHeader={false}
      ofy={"scroll"}
    >
      <Wrapper className={"flex gap-8 items-center"} px={6} borderRadius={"0"}>
        <Text fontSize={"sm"}>Status</Text>

        <Box className={"flex-grow flex"}>
          <StatusTag
            bg={statusBG}
            status={
              <Text textTransform={"capitalize"} textColor={"white"}>
                {STATUS_LIST[status]}
              </Text>
            }
          />
        </Box>

        <Button
          h={"30px"}
          borderRadius={"0"}
          className={"border border-red-600"}
          px={1}
        >
          <AiOutlineDelete className="text-xl text-red-600" />
        </Button>
      </Wrapper>

      {/* sender information */}
      <Box className={""}>
        <Box className="px-7 py-3" fontSize={"lg"} fontWeight={"semibold"}>
          Sender Infromation
        </Box>

        <Wrapper borderRadius={0} px={"7"}>
          <VStack gap={"0.5"} w={"full"} mx={0}>
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
              <Text fontSize={"sm"}>Phone</Text>

              <CInput
                h={"10"}
                w={3 / 4}
                placeholder=""
                icon={<BsTelephone className="text-xl" />}
                borderRadius={"md"}
              />
            </Box>

            <Box className="flex w-full flex-col gap-1">
              <Text fontSize={"sm"}>Pickup Location</Text>

              <CInput
                h={"10"}
                w={3 / 4}
                placeholder=""
                icon={<FiMapPin className="text-xl" />}
                borderRadius={"md"}
              />
            </Box>
          </VStack>
        </Wrapper>
      </Box>

      {/* receiver information */}
      <Box className={""}>
        <Box className="px-7 py-3" fontSize={"lg"} fontWeight={"semibold"}>
          Receiver Infromation
        </Box>

        <Wrapper borderRadius={0} px={"7"}>
          <VStack gap={"0.5"} w={"full"} mx={0}>
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
              <Text fontSize={"sm"}>Phone</Text>

              <CInput
                h={"10"}
                w={3 / 4}
                placeholder=""
                icon={<BsTelephone className="text-xl" />}
                borderRadius={"md"}
              />
            </Box>

            <Box className="flex w-full flex-col gap-1">
              <Text fontSize={"sm"}>Pickup Location</Text>

              <CInput
                h={"10"}
                w={3 / 4}
                placeholder=""
                icon={<FiMapPin className="text-xl" />}
                borderRadius={"md"}
              />
            </Box>
          </VStack>
        </Wrapper>
      </Box>

      {/* driver information */}
      <Box className={""}>
        <Box className="px-7 py-3" fontSize={"lg"} fontWeight={"semibold"}>
          Driver Infromation
        </Box>

        <Wrapper borderRadius={0} px={"7"}>
          <VStack gap={"0.5"} w={"full"} mx={0}>
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
        </Wrapper>
      </Box>
    </CustomModal>
  );
};

export default ViewModal;
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