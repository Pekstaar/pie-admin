import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import React, { useState, useCallback } from "react";
import car from "../assets/images/car.png";
import { Transaction } from "../assets/svg";
import BreadCrumb from "../components/general/BreadCrumb";
import Table from "../components/general/Table";
import Wrapper from "../components/general/Wrapper";

import { BiSort } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { GrEdit } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { VscFilter } from "react-icons/vsc";
import { useLocation } from "react-router-dom";
import CInput from "../components/general/Input";
import FleetServices from "../utils/services/FleetServices";
import Loader from "../components/Loader";
import EditVehicleModal from "../components/apps/EditVehicleInfoModal";

const FleetView = () => {
  const location = useLocation()?.pathname.split("/");

  const [vehicle, setVehicle] = useState({});
  const [loading, setLoading] = useState(true);
  const [openVehicleInfoModal, setOpenVehicleInfoModal] = useState(false);
  const [current, setCurrent] = useState({});

  console.log(location[location?.length - 1])

  React.useEffect(() => {
    FleetServices.fetchVehicle(location[location?.length - 1]).then(
      (response) => {
        setVehicle(response);
        setLoading(false);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEditVehicleInfoOpenModal = useCallback(() => {
    setOpenVehicleInfoModal(true);
  }, []);

  const handleEditVehicleInfoCloseModal = useCallback(() => {
    setOpenVehicleInfoModal(false);
  }, []);

  // const
  return (
    <>
      <Box p={"3"} maxH={"91%"} overflowY={"scroll"}>
        <BreadCrumb
          icon={<Transaction />}
          title={`Fleet management /`}
          subtitle={vehicle?.reg_number || "_"}
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
                {vehicle?.reg_number || "_"}
              </Text>

              <Text fontSize={"sm"} fontWeight={"light"}>
                Driver:{" "}
                {`${vehicle?.owner?.first_name?.toLowerCase()} ${vehicle?.owner?.last_name?.toLowerCase()}`}
              </Text>
            </Wrapper>

            {/* vehicle information */}
            <Box>
              <Box className="flex justify-between py-2 px-5">
                <Text fontSize={"lg"} fontWeight={"medium"}>
                  Vehicle information
                </Text>

                <ActionButton>
                  <GrEdit
                    onClick={() => {
                      setCurrent({
                        id: vehicle?.id,
                        reg_number: vehicle?.reg_number,
                        color: vehicle?.color,
                        vehicle_type: vehicle?.vehicle_type,
                        model: vehicle?.model,
                        owner: vehicle?.owner?.id,
                      })
                      handleEditVehicleInfoOpenModal()
                    }}
                  />
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
                  <Text> {vehicle?.reg_number}</Text>
                  <Text>{vehicle?.color}</Text>
                  <Text>{vehicle_types[vehicle?.vehicle_type]}</Text>
                  <Text>{vehicle?.model}</Text>
                  <Text>{vehicle?.insurance_expiry}</Text>
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

                  {/* <DocItem text={"My_insurance docs.pdf"} /> */}
                </Box>

                <Box className="flex justify-end py-5">
                  <button className="rounded border border-primary_yellow text-primary_yellow hover:bg-gray-50 p-3">
                    Add document
                  </button>
                </Box>
              </Wrapper>
            </Box>
          </Box>

          <Wrapper mt={"4"} mb={"2"} p={"5 "} className={"w-2/3"}>
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
                {loading ? <Loader /> : []?.map((data, key) => {
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
                      className={`h-14 capitalize ${isEven ? "bg-[#F9F9F9]" : "white"
                        }`}
                    >
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
                      <td className={` text-white py-3 px-4 w-32`}>
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

      <EditVehicleModal
        openModal={openVehicleInfoModal}
        handleCloseModal={handleEditVehicleInfoCloseModal}
        current={current}
      />
    </>
  );
};

export default FleetView;

const vehicle_types = ["Motorbike", "Vehicle", "Van", "Truck"];
const tableData = [
  {
    destination: "Brooke Manor",
    sender: "Collins joe",
    receiver: "Ben Doe",
    driver: "ken Driver",
    status: 4,
  },
  {
    destination: "Brooke Manor",
    sender: "Collins joe",
    receiver: "Ben Doe",
    driver: "ken Driver",
    status: 5,
  },
  {
    destination: "Brooke Manor",
    sender: "Collins joe",
    receiver: "Ben Doe",
    driver: "ken Driver",
    status: 0,
  },
  {
    destination: "Brooke Manor",
    sender: "Collins joe",
    receiver: "Ben Doe",
    driver: "ken Driver",
    status: 1,
  },
  {
    destination: "Brooke Manor",
    sender: "Collins joe",
    receiver: "Ben Doe",
    driver: "ken Driver",
    status: 2,
  },
  {
    destination: "Brooke Manor",
    sender: "Collins joe",
    receiver: "Ben Doe",
    driver: "ken Driver",
    status: 3,
  },
  {
    destination: "Brooke Manor",
    sender: "Collins joe",
    receiver: "Ben Doe",
    driver: "ken Driver",
    status: 4,
  },
  {
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

// const DocItem = ({ text }) => (
//   <Box className="flex p-5 border border-zinc-300 rounded-xl bg-white justify-between items-center">
//     <Text>{text}</Text>

//     <TableAction icon={<HiDownload className="text-lg" />} text={"Download"} />
//   </Box>
// );
