import { Box, Button, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomModal from "../general/CustomModal";
import CInput from "../general/Input";
import Wrapper from "../general/Wrapper";

const EditVehicleModal = ({ openModal, handleCloseModal, current }) => {
  const [usersValues, setUserValues] = useState({
    reg_number: "",
    color: "",
    vehicle_type: "",
    model: ""
  });

  // useEffect(() => {
  //   BookingService.fetchBookings().then((response) => {
  //     setBooking(response.find((data) => data.id === bookingId));
  //     setUserValues();
  //   });
  // }, [bookingId]);

  useEffect(() => {
    setUserValues((prev) => ({
      ...prev,
      reg_number: current.reg_number,
      color: current.color,
      vehicle_type: current.vehicle_type,
      model: current.model
    }));
  }, [current]);



  return (
    <CustomModal
      title="Booking"
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
          Vehicle Information
        </Box>

        <Wrapper borderRadius={0} px={"7"}>
          <VStack gap={"0.5"} w={"full"} mx={0}>
            <Box className="flex w-full flex-col gap-1">
              <Text fontSize={"sm"}>Registration Number</Text>

              <CInput
                h={"10"}
                w={3 / 4}
                placeholder=""
                value={usersValues?.reg_number}
                borderRadius={"md"}
              />
            </Box>

            <Box className="flex w-full flex-col gap-1">
              <Text fontSize={"sm"}>Color</Text>

              <CInput
                h={"10"}
                w={3 / 4}
                placeholder=""
                value={usersValues?.color}
                borderRadius={"md"}
              />
            </Box>

            <Box className="flex w-full flex-col gap-1">
              <Text fontSize={"sm"}>Vehicle type</Text>

              <CInput
                h={"10"}
                w={3 / 4}
                placeholder=""
                value={vehicle_types[usersValues?.vehicle_type]}
                borderRadius={"md"}
              />
            </Box>

            <Box className="flex w-full flex-col gap-1">
              <Text fontSize={"sm"}>Model</Text>

              <CInput
                h={"10"}
                w={3 / 4}
                placeholder=""
                value={usersValues?.model}
                borderRadius={"md"}
              />
            </Box>
          </VStack>
        </Wrapper>
      </Box>

    </CustomModal>
  );
};

export default EditVehicleModal;
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

const vehicle_types = ["Motorbike", "Vehicle", "Van", "Truck"];
