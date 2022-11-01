import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiIdCard } from "react-icons/bi";
import { GrEdit } from "react-icons/gr";
import { useLocation } from "react-router-dom";
import RejectModal from "../components/apps/RejectModal";
import BreadCrumb from "../components/general/BreadCrumb";
import Wrapper from "../components/general/Wrapper";
import auth from "../utils/services/AuthServices";
import FleetServices from "../utils/services/FleetServices";
import UserServices from "../utils/services/UserServices";
import { ActionButton } from "./Apps";

const ViewDriver = () => {
  const location = useLocation()?.pathname.split("/");
  const [openRejectModal, setOpenModal] = React.useState(false);
  const [user, setUser] = useState({});
  const [vehicle, setVehicle] = useState({});
  const [driverProfile, setDriverProfile] = useState({});

  let userId = location[location?.length - 1];

  const handleOpenModal = React.useCallback(() => {
    setOpenModal(true);
  }, []);

  const handleCloseModal = React.useCallback(() => {
    setOpenModal(false);
  }, []);

  useEffect(() => {
    UserServices.fetchUsers().then((response) => {
      setUser(response.find((user) => user.id === parseInt(userId)));
    });

    FleetServices.fetchDriversVehicles(userId).then((response) => {
      setVehicle(response[0] || {});
    });

    auth.getProfiles().then((response) => {
      setDriverProfile(response.find((user) => user.id === parseInt(userId)));
    });
  }, [userId]);

  return (
    <>
      <Box p={"3"} maxH={"91%"} overflowY={"scroll"}>
        <BreadCrumb
          icon={<BiIdCard />}
          title={`Applications /`}
          subtitle={user?.first_name + " " + user?.last_name}
          c={"capitalize"}
        />
        <Box className="flex gap-3">
          <Box className="w-1/3">
            <Wrapper
              my={"4"}
              p={"5"}
              borderRadius={"none"}
              className={"flex flex-col justify-center items-center rounded"}
            >
              {/* body */}
              <Box
                className="rounded-full overflow-hidden"
                h={40}
                w={40}
                bg={"gray.300"}
                mb={"3"}
              >
                <Image
                  h={"full"}
                  objectFit={"cover"}
                  src={
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
                  }
                />
              </Box>
              <Text
                fontSize={"xl"}
                textTransform={"uppercase"}
                fontWeight={"semibold"}
              >
                {userId}
              </Text>

              <Text fontSize={"sm"} fontWeight={"light"}>
                {user?.is_driver ? "Driver" : user?.is_admin ? "Admin" : "User"}
                : {user?.first_name + " " + user?.last_name}
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
                p={"5"}
                borderRadius={"none"}
                className={"flex justify-center items-center gap-3"}
              >
                <Box className="text-right text-sm flex flex-col gap-4">
                  <Text fontWeight={"medium"}>Full name</Text>
                  <Text fontWeight={"medium"}>Category</Text>
                  {/* <Text fontWeight={"medium"}>Location</Text> */}
                  <Text fontWeight={"medium"}>Email</Text>
                  <Text fontWeight={"medium"}>Phone number</Text>
                  <Text fontWeight={"medium"}>Onboarding date</Text>
                  {/* <Text fontWeight={"medium"}>Last edit date</Text> */}
                </Box>

                <div className={"bg-zinc-200 h-48 w-0.5 rounded-full"} />

                <Box className="text-left text-sm flex flex-col gap-4">
                  <Text>{user?.first_name + " " + user?.last_name}</Text>
                  <Text>
                    {" "}
                    {user?.is_driver
                      ? "Driver"
                      : user?.is_admin
                      ? "Admin"
                      : "User"}
                    : {user?.first_name + " " + user?.last_name}
                  </Text>
                  {/* <Text>Nairobi CBD, Nairobi</Text> */}
                  <Text>{user?.email}</Text>
                  <Text>{user?.phonenumber}</Text>
                  <Text>{user?.date_joined}</Text>
                  {/* <Text>3/10/2022</Text> */}
                </Box>
              </Wrapper>
            </Box>

            {/* vehicle information */}
            <Box>
              <Box className="flex justify-between py-2 px-5">
                <Text fontWeight={"medium"}>Vehicle information</Text>

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
                <Box className="text-right flex flex-col gap-4">
                  <Text fontWeight={"medium"}>Reg no</Text>
                  <Text fontWeight={"medium"}>Color</Text>
                  <Text fontWeight={"medium"}>Type</Text>
                  <Text fontWeight={"medium"}>Model</Text>
                  <Text fontWeight={"medium"}>License Expiry</Text>
                </Box>

                <div className={"bg-zinc-200 h-40 w-0.5 rounded-full"} />

                <Box className="text-left flex flex-col gap-4">
                  <Text>{vehicle?.reg_number}</Text>
                  <Text>{vehicle?.color || "__"}</Text>
                  <Text>{vehicle_types[vehicle?.vehicle_type]}</Text>
                  <Text>{vehicle?.model || "__"}</Text>
                  <Text>{vehicle?.owner?.date_joined || "__"}</Text>
                </Box>
              </Wrapper>
            </Box>
          </Box>

          <Box className="w-2/3  my-3">
            <Wrapper w={"full"}>
              <Box>
                {/* title */}
                <Text fontSize={"lg"} fontWeight={"semibold"}>
                  License
                </Text>

                <Box p={"4"}>
                  <Image
                    src={driverProfile?.driving_license}
                    alt={"license"}
                    h={"150px"}
                  />
                </Box>

                <hr className="my-2" />

                <Text fontSize={"lg"} fontWeight={"semibold"}>
                  Insurance Document
                </Text>

                <Box p={"2"}>
                  <Image
                    src={driverProfile?.insurance}
                    alt={"insurance"}
                    h={"540px"}
                  />
                </Box>
              </Box>

              <Box className="flex gap-4 justify-end">
                <button
                  onClick={handleOpenModal}
                  className="text-primary_yellow border-[1.5px] border-primary_yellow rounded-md items-center flex gap-2 px-16 py-3"
                >
                  <Text fontWeight={"semibold"}>Reject</Text>
                </button>

                <button className="bg-primary_yellow rounded-md items-center flex gap-2 px-16 py-3">
                  <Text fontWeight={"semibold"}>Approve</Text>
                </button>
              </Box>
            </Wrapper>
          </Box>
        </Box>
      </Box>

      <RejectModal
        handleCloseModal={handleCloseModal}
        openModal={openRejectModal}
      />
    </>
  );
};

export default ViewDriver;

const vehicle_types = ["Motorbike", "Vehicle", "Van", "Truck"];
