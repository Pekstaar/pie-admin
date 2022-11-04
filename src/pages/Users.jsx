import { Box, Button, Center, HStack, Text, VStack } from "@chakra-ui/react";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiSort } from "react-icons/bi";
import { BsPeople, BsPerson, BsTelephone } from "react-icons/bs";
import { FiEye } from "react-icons/fi";
import { GrAdd, GrLocation } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { RiDeleteBin5Line } from "react-icons/ri";
import { VscFilter } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../components/general/BreadCrumb";
import CustomModal from "../components/general/CustomModal";
import CInput from "../components/general/Input";
import PrimaryButton from "../components/general/PrimaryButton";
import PrimaryOutlinedButton from "../components/general/PrimaryOutlinedButton";
import Table from "../components/general/Table";
import Wrapper from "../components/general/Wrapper";
import Loader from "../components/Loader";
import UserServices from "../utils/services/UserServices";

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [filteredUser, setFilteredUsers] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    UserServices.fetchUsers().then((response) => {
      setUsers(response);
      setFilteredUsers(response);
      setLoading(false);
    });
  }, []);

  const handleFilter = React.useCallback(
    (filter) => {
      // const result = intersectionBy(users, conditionArr, "user");

      let newList = [];

      if (filter === "is_user") {
        newList = users?.filter(
          (item) =>
            item?.is_admin === false &&
            item?.is_superuser === false &&
            item?.is_driver === false
        );

        return newList;
      }
      newList = users?.filter((item) => item?.[filter] === true);

      return newList;
    },
    [users]
  );

  const groupings = React.useMemo(() => {
    const admins = _.filter(users, { is_admin: true });
    const drivers = _.filter(users, { is_driver: true });
    const senders = _.filter(users, {
      is_driver: false,
      is_admin: false,
      is_superuser: false,
    });

    return {
      admins: admins.length,
      drivers: drivers.length,
      senders: senders.length,
      receivers: 0,
    };
  }, [users]);

  const handleSearch = (arr, cond) => {
    const newArr = _.filter(arr, (obj) => {
      const name = `${obj?.first_name?.toLowerCase()} ${obj?.last_name?.toLowerCase()}`;
      return (
        name.includes(cond?.toLowerCase()) ||
        obj?.email?.includes(cond?.toLowerCase()) ||
        obj?.phonenumber?.includes(cond?.toLowerCase())
      );
    });

    return newArr;
  };

  React.useEffect(() => {
    setFilteredUsers(handleSearch(users, search));
  }, [search, users]);

  React.useEffect(() => {
    if (selectedFilter === "") {
      setFilteredUsers(users);
      return;
    }
    setFilteredUsers(handleFilter(selectedFilter));
  }, [handleFilter, selectedFilter, users]);

  const handleViewUser = (user) => {
    navigate(`${user}`, user);
  };
  return (
    <Box p={"3"} maxH={"91%"} overflowY={"scroll"}>
      <BreadCrumb icon={<BsPeople />} title={"User management"} />

      <HStack py={"2"} pt={"3"} gap={3}>
        {cards_data?.map((item) => (
          <UserCard
            no={groupings[item?.text?.toLowerCase()]}
            text={item?.text}
          />
        ))}
      </HStack>

      <Wrapper my={"2"} p={"3"}>
        {/* search and table actions */}
        <HStack py={"3"} justifyContent={"space-between"} alignItems={"end"}>
          {/* /search input */}
          <Box>
            <CInput
              icon={<IoSearchOutline className="text-xl" />}
              handleChange={(e) => {
                setSearch(e?.target?.value);
              }}
            />

            <HStack gap={"2"} mt={"5"}>
              <PrimaryOutlinedButton
                className={"h-[30px] px-2 border-[2px] rounded-lg text-sm"}
                handleClick={() => setSelectedFilter("")}
              >
                All
              </PrimaryOutlinedButton>
              <PrimaryOutlinedButton
                className={"h-[30px] px-2 border-[2px] rounded-lg text-sm"}
                handleClick={() => setSelectedFilter("is_admin")}
              >
                Admin
              </PrimaryOutlinedButton>
              <PrimaryOutlinedButton
                className={"h-[30px] px-2 border-[2px] rounded-lg text-sm"}
                handleClick={() => setSelectedFilter("is_driver")}
              >
                Drivers
              </PrimaryOutlinedButton>
              <PrimaryOutlinedButton
                className={"h-[30px] px-2 border-[2px] rounded-lg text-sm"}
                handleClick={() => setSelectedFilter("is_user")}
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
            >
              <VStack gap={"2"} w={"full"}>
                <Box className="flex w-full flex-col gap-1">
                  <Text fontSize={"sm"}>Full name</Text>

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
                  <Text fontSize={"sm"}>Email</Text>

                  <CInput
                    h={"10"}
                    w={3 / 4}
                    placeholder=""
                    icon={<AiOutlineMail className="text-xl" />}
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
            { loading? <Loader/> : filteredUser?.map((data, key) => {
              const isEven = key % 2;
              const status = STATUS_LIST[data?.is_active];
              const bg = !data?.is_active
                ? "bg-primary_red"
                : data?.is_active
                ? "bg-primary_green"
                : "";
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
                  <td className="  py-3 px-4">
                    {data?.first_name} {data?.last_name}
                  </td>
                  <td className="  py-3 px-4">{data?.email}</td>
                  <td className=" py-3 px-4">{data?.phonenumber}</td>{" "}
                  <td className=" py-3 px-4">
                    {data?.is_admin
                      ? "admin"
                      : data?.is_driver
                      ? "driver"
                      : "user"}
                  </td>
                  <td className={` text-white py-3 px-4 `}>
                    <Box className="flex  justify-start">
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
                  <td className={` text-white py-3 px-4  w-32`}>
                    <Box className="flex gap-6 justify-start">
                      <ActionButton
                        handlePress={() => handleViewUser(data?.first_name)}
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
  true: "active",
  false: "deactivated",
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
