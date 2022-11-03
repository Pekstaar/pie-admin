import { Box, Button, HStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Transaction } from "../assets/svg";
import BreadCrumb from "../components/general/BreadCrumb";
import Table from "../components/general/Table";
import Wrapper from "../components/general/Wrapper";
import BookingService from "../utils/services/BookingServices";
import { BiSort } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { VscFilter } from "react-icons/vsc";
import ViewModal from "../components/Booking/ViewModal";
import CInput from "../components/general/Input";
import { STATUS_LIST } from "../utils/Helper";

const Bookings = () => {
  // const toast = useToast();
  const [openModal, setOpenModal] = React.useState(false);
  const [bookingId, setBookingId] = React.useState();
  const [bookings, setBookings] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [recievers, setRecievers] = React.useState({});
  const [current, setCurrent] = React.useState({});

  

  const handleOpenModal = React.useCallback((id) => {
    setOpenModal(true);
    setBookingId(id);
  }, []);

  const handleCloseModal = React.useCallback(() => {
    setOpenModal(false);
  }, []);

  useEffect(() => {
    BookingService.fetchBookings().then(async (response) => {
      setBookings(response);

      let receivers = {};

      for (var obj of response) {
        const rec = await BookingService.getBookingReceiver(obj?.booking?.id);
        receivers[obj?.booking?.id] = rec;
      }

      setRecievers(receivers);
    });
  }, []);

  return (
    <>
      <Box p={"3"} maxH={"91%"} overflowY={"scroll"} position={"relative"}>
        <BreadCrumb icon={<Transaction />} title={"Bookings"} />
        {/* <Loader /> */}

        <Wrapper my={"2"} p={"3"}>
          <HStack
            gap={"2"}
            className={"border-b-2 border-zinc-200"}
            h={"12"}
            mx={"2"}
          >
            <SubNavItem isCurrent title={"Ongoing"} handleClick={() => {}} />
            {/* <SubNavItem title={"Scheduled"} handleClick={() => {}} />
            <SubNavItem title={"Completed"} handleClick={() => {}} /> */}
          </HStack>

          {/* search and table actions */}
          <HStack py={"4"} justifyContent={"space-between"}>
            {/* /search input */}
            <CInput
              icon={<IoSearchOutline className="text-xl" />}
              handleChange={(e) => {
                setSearchValue(e?.target?.value);
              }}
            />
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
              {bookings
                ?.filter((data) => {
                  return data === ""
                    ? data
                    : // data?.booking?.formated_address.toLowerCase().includes(searchValue.toLowerCase()) ||
                      data?.owner?.first_name
                        .toLowerCase()
                        .includes(searchValue.toLowerCase()) ||
                        data?.owner?.last_name
                          .toLowerCase()
                          .includes(searchValue.toLowerCase()) ||
                        data?.driver?.last_name
                          .toLowerCase()
                          .includes(searchValue.toLowerCase()) ||
                        data?.driver?.last_name
                          .toLowerCase()
                          .includes(searchValue.toLowerCase());
                })
                .map((data, key) => {
                  const isEven = key % 2;
                  const status = STATUS_LIST[data?.status];
                  const bg =
                    data?.status === 0
                      ? "bg-primary_red"
                      : data?.status === 5
                      ? "bg-primary_green"
                      : "bg-primary_yellow_light";
                  const booking_receiver = recievers[data?.booking?.id];

                  console.log(data);

                  return (
                    <tr
                      className={`h-14 capitalize ${
                        isEven ? "bg-[#F9F9F9]" : "white"
                      }`}
                    >
                      <td className="  py-3 px-4">
                        {data?.booking?.formated_address}
                      </td>
                      <td className="  py-3 px-4">
                        {booking_receiver?.formated_address}
                      </td>
                      <td className=" py-3 px-4">
                        {data?.owner?.first_name} {data?.owner?.last_name}
                      </td>
                      <td className=" py-3 px-4">{booking_receiver?.name}</td>
                      <td className=" py-3 px-4">
                        {data?.driver?.first_name} {data?.driver?.last_name}
                      </td>
                      <td className={` text-white py-3 px-4 `}>
                        <Box className="flex  ">
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
                      <td className={`text-center text-white py-3 px-4 w-32`}>
                        <Box className="flex gap-4">
                          <Box
                            onClick={() => {
                              setCurrent({
                                receiver: booking_receiver,
                                sender: data,
                              });
                              handleOpenModal(data?.id);
                            }}
                          >
                            <ActionButton>
                              <FiEye />
                            </ActionButton>
                          </Box>

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
      <ViewModal
        bookingId={bookingId}
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        current={current}
      />
    </>
  );
};

export default Bookings;

const SubNavItem = ({ title, isCurrent }) => (
  // <Button>

  // </Button>
  <Button
    h={"12"}
    cursor={"pointer"}
    borderRadius={"none"}
    bg={"white "}
    className={`text-primary_yellow text-xl ${
      isCurrent ? "text-dark_green " : "text-zinc-400 "
    }`}
    //  onClick={handleLogout}
    _hover={{
      bg: "white",
      borderBottomColor: "dark_green",
      textColor: "dark_green",
    }}
    _focus={{ bg: "white" }}
    fontWeight={isCurrent ? "semibold" : "normal"}
    // py={"3"}
    borderBottomWidth={"2px"}
    borderBottomColor={isCurrent ? "dark_green" : "none"}
  >
    {title}
  </Button>
);

const tableData = [
  {
    pickup: "Saljona apartment",
    destination: "Brooke Manor",
    sender: "Collins joe",
    receiver: "Ben Doe",
    driver: "ken Driver",
    status: 4,
  },
  {
    pickup: "Saljona apartment",
    destination: "Brooke Manor",
    sender: "Collins joe",
    receiver: "Ben Doe",
    driver: "ken Driver",
    status: 5,
  },
  {
    pickup: "Saljona apartment",
    destination: "Brooke Manor",
    sender: "Collins joe",
    receiver: "Ben Doe",
    driver: "ken Driver",
    status: 0,
  },
  {
    pickup: "Saljona apartment",
    destination: "Brooke Manor",
    sender: "Collins joe",
    receiver: "Ben Doe",
    driver: "ken Driver",
    status: 1,
  },
  {
    pickup: "Saljona apartment",
    destination: "Brooke Manor",
    sender: "Collins joe",
    receiver: "Ben Doe",
    driver: "ken Driver",
    status: 2,
  },
  {
    pickup: "Saljona apartment",
    destination: "Brooke Manor",
    sender: "Collins joe",
    receiver: "Ben Doe",
    driver: "ken Driver",
    status: 3,
  },
  {
    pickup: "Saljona apartment",
    destination: "Brooke Manor",
    sender: "Collins joe",
    receiver: "Ben Doe",
    driver: "ken Driver",
    status: 4,
  },
  {
    pickup: "Saljona apartment",
    destination: "Brooke Manor",
    sender: "Collins joe",
    receiver: "Ben Doe",
    driver: "ken Driver",
    status: 5,
  },
];

export const ActionButton = ({ bg, children }) => (
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
