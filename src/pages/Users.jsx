import {
  Box,
  Button,
  Center,
  HStack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { BsPeople, BsPerson, BsTelephone } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../components/general/BreadCrumb";
import CustomModal from "../components/general/CustomModal";
import CInput, { CSelect } from "../components/general/Input";
import PrimaryButton from "../components/general/PrimaryButton";
import PrimaryOutlinedButton from "../components/general/PrimaryOutlinedButton";
// import Table from "../components/general/Table";
import { ConfigProvider, Table } from "antd";
import Wrapper from "../components/general/Wrapper";
import { toastProps } from "../utils/Helper";
import UserServices from "../utils/services/UserServices";
import { FiEye } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [filteredUser, setFilteredUsers] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [search, setSearch] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [stateLoading, setStateLoading] = useState(true);

  const [page, setPage] = useState(1);

  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState({
    name: "",
    category: "",
    email: "",
    phone: "",
    password: "",
  });
  const toast = useToast();

  useEffect(() => {
    setStateLoading(true);

    UserServices.fetchUsers().then((response) => {
      let arr = [];
      for (let i = 0; i <= response?.length; i++) {
        const newUser = response[i];
        const category = newUser?.is_admin
          ? "admin"
          : newUser?.is_driver
          ? "driver"
          : "user";
        const status = STATUS_LIST[newUser?.is_active];
        const newUserObj = {
          fullname: newUser?.first_name || "" + newUser?.last_name || "",
          phone: newUser?.phonenumber || "",
          email: newUser?.email || "",
          category,
          status,
          id: newUser?.id,
        };

        arr.push(newUserObj);
      }

      setUsers(arr);
      setStateLoading(false);
    });
  }, []);

  const columns = [
    {
      title: "Fullname",
      dataIndex: "fullname",
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a?.fullname.localeCompare(b?.fullname),
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a?.email.localeCompare(b?.email),
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Category",
      dataIndex: "category",
      filters: [...userCategories],
      render: (text) => <Box className={"text-uppercase"}>{text}</Box>,
      onFilter: (value, record) =>
        record.category.startsWith(value.toLowerCase()),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => {
        const bg =
          !text === "deactivated" ? "bg-primary_red" : "bg-primary_green";
        return (
          <Box display={"flex"}>
            <Box
              py={"1"}
              px={"2"}
              fontSize={"xs"}
              textTransform={"capitalize"}
              className={`${bg} rounded-md font-medium text-center text-white`}
            >
              {text}
            </Box>
          </Box>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text) => {
        return (
          <Box className="flex gap-6 justify-start">
            <ActionButton
            // handlePress={() => handleViewUser(data)}
            >
              <FiEye />
            </ActionButton>

            <ActionButton>
              <RiDeleteBin5Line />
            </ActionButton>
          </Box>
        );
      },
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

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
    const admins = _.filter(users, { category: "admin" });
    const drivers = _.filter(users, { category: "driver" });
    const senders = _.filter(users, {
      category: "user",
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

  const handleCreate = async () => {
    setLoading(true);
    try {
      if (user?.category === "user") {
        await UserServices.createUser({
          ...user,
          password1: user?.password,
          password2: user?.password,
        });
      } else {
        await UserServices.createDriver({
          ...user,
          password1: user?.password,
          password2: user?.password,
        });
      }

      setLoading(false);

      toast({
        ...toastProps,
        title: "Success!",
        description: "User created successfully",
        status: "success",
      });
      UserServices.fetchUsers().then((response) => {
        setUsers(response);
        setFilteredUsers(response);
      });
    } catch (error) {
      toast({
        ...toastProps,
        title: "Error!",
        description: error?.message,
        status: "error",
      });
      console.log("USER CREATE ERROR:", error);
    }
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
    console.log(user);
    if (user?.is_driver) {
      navigate(`driver/${user?.id}`, user);
      return;
    }
    navigate(`${user?.first_name}`, user);
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
          </Box>
          {/* actions */}
          <HStack gap={"2"}>
            <CustomModal
              loading={loading}
              handleSave={handleCreate}
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
                    handleChange={handleChange}
                    h={"10"}
                    w={3 / 4}
                    placeholder=""
                    name={"name"}
                    value={user?.name}
                    icon={<BsPerson className="text-xl" />}
                    borderRadius={"md"}
                  />
                </Box>

                <Box className="flex w-full flex-col gap-1">
                  <Text fontSize={"sm"}>Category</Text>

                  {/* <CInput
                    h={"10"}
                    w={3 / 4}
                    placeholder=""
                    borderRadius={"md"}
                  /> */}

                  <CSelect
                    handleChange={(selected) =>
                      setUser((prev) => ({
                        ...prev,
                        category: selected,
                      }))
                    }
                    h={"10"}
                    w={3 / 4}
                  >
                    <option value="user">User</option>
                    <option value="driver">Driver</option>
                  </CSelect>
                </Box>

                {/* <Box className="flex w-full flex-col gap-1">
                  <Text fontSize={"sm"}>Location</Text>

                  <CInput
                    h={"10"}
                    w={3 / 4}
                    placeholder=""
                    icon={<GrLocation className="text-xl" />}
                    borderRadius={"md"}
                  />
                </Box> */}

                <Box className="flex w-full flex-col gap-1">
                  <Text fontSize={"sm"}>Email</Text>

                  <CInput
                    handleChange={handleChange}
                    value={user?.email}
                    name={"email"}
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
                    handleChange={handleChange}
                    value={user?.phone}
                    name={"phone"}
                    h={"10"}
                    w={3 / 4}
                    placeholder=""
                    icon={<BsTelephone className="text-xl" />}
                    borderRadius={"md"}
                  />
                </Box>

                <Box className="flex w-full flex-col gap-1">
                  <Text fontSize={"sm"}>Password</Text>

                  <CInput
                    handleChange={handleChange}
                    value={user?.password}
                    handleEyeClick={() => setShowPassword(!showPassword)}
                    name={"password"}
                    h={"10"}
                    w={3 / 4}
                    placeholder="password"
                    type={showPassword ? "name" : "password"}
                    icon={<AiFillLock className="text-xl" />}
                    borderRadius={"md"}
                  />
                </Box>
              </VStack>
            </CustomModal>
          </HStack>
        </HStack>

        {/* body */}
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#EFAF1C",
              colorPrimaryTextActive: "#19411D",
              colorPrimaryText: "#19411D",
              // colorBgBase: "#19411D",
              colorPrimaryBg: "#EFAF1C",
            },
          }}
        >
          <Box>
            <Table
              rowKey={(data) => data.id}
              loading={stateLoading}
              pagination={{
                defaultPageSize: 15,
                showSizeChanger: true,
                pageSizeOptions: ["10", "15", "20", "30"],
              }}
              // rowSelection={{
              //   type: "checkbox",
              //   ...rowSelection,
              // }}
              columns={columns}
              dataSource={users}
            />
          </Box>
        </ConfigProvider>
      </Wrapper>
    </Box>
  );
};

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    // disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
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

const userCategories = [
  { text: "Admin", value: "Admin" },
  { text: "User", value: "User" },
  { text: "Driver", value: "Driver" },
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
