import { Box, Button, Center, HStack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/general/BreadCrumb";
import Table from "../components/general/Table";
import Wrapper from "../components/general/Wrapper";

import _ from "lodash";
import { BiSort } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { RiCarLine, RiDeleteBin5Line } from "react-icons/ri";
import { VscFilter } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { Lorry } from "../assets/svg";
import CInput from "../components/general/Input";
import FleetServices from "../utils/services/FleetServices";
import Loader from "../components/Loader";
import useTable from "../hooks/UseTable";
import TableFooter from "../components/Table/Footer";

const Fleet = () => {
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const { slice, range } = useTable(filteredVehicles, page, 20);

  const handleViewFleet = (plate) => {
    navigate(`${plate}`, plate);
  };

  const handleSearch = (arr, cond) => {
    const newArr = _.filter(arr, (obj) => {
      const name = `${obj?.owner?.first_name?.toLowerCase()} ${obj?.owner?.last_name?.toLowerCase()}`;
      return (
        name.includes(cond?.toLowerCase()) ||
        obj?.reg_number?.toLowerCase()?.includes(cond?.toLowerCase())
      );
    });

    return newArr;
  };

  React.useEffect(() => {
    setFilteredVehicles(handleSearch(vehicles, search));
  }, [search, vehicles]);

  useEffect(() => {
    FleetServices.fetchVehicles().then((response) => {
      setVehicles(response);
      setFilteredVehicles(response);
      setLoading(false);
    });
  }, []);
  return (
    <Box p={"3"} maxH={"91%"} overflowY={"scroll"}>
      <BreadCrumb icon={<RiCarLine />} title={"Fleet management"} />

      <HStack pt={"2"} gap={3}>
        {cards_data?.map((item) => (
          <FleetCard no={item?.number} text={item?.text} />
        ))}
      </HStack>

      <Wrapper my={"3"} px={"5"}>
        {/* search and table actions */}
        <HStack py={"3"} justifyContent={"space-between"}>
          {/* /search input */}
          <CInput
            icon={<IoSearchOutline className="text-xl" />}
            handleChange={(e) => {
              setSearch(e?.target?.value);
            }}
          />
          {/* actions */}
          <HStack gap={"2"}>
            <TableAction
              icon={<VscFilter className="text-lg" />}
              text={"Filter"}
            />
            <TableAction icon={<BiSort className="text-lg" />} text={"Sort"} />
          </HStack>
        </HStack>

        {/* body */}
        <Box>
          <Table
            headers={[...Object.keys(tableData[0]), "Actions"]}
            footer={
              <TableFooter
                range={range}
                slice={slice}
                setPage={setPage}
                page={page}
              />
            }
          >
            {loading ? (
              <Loader />
            ) : (
              slice?.map((data, key) => {
                const isEven = key % 2;
                const st = 2;
                // const status = STATUS_LIST[data?.status];
                const status = STATUS_LIST[2];
                const bg =
                  st === 0
                    ? "bg-primary_red"
                    : st === 2
                    ? "bg-primary_green"
                    : "bg-primary_yellow_light";
                // registration: "kcb 4457k",
                // driver: "Brooke Manor",
                // "license expiry": "Collins joe",
                //     status: 4,
                return (
                  <tr
                    className={`h-10 capitalize ${
                      isEven ? "bg-[#F9F9F9]" : "white"
                    }`}
                  >
                    <td className="  py-3 px-4">{data?.reg_number}</td>
                    <td className="  py-3 px-4">
                      {data?.owner?.first_name + " " + data?.owner?.last_name}
                    </td>
                    <td className=" py-3 px-4">{data?.insurance_expiry}</td>

                    <td className={` text-white py-3 px-4 `}>
                      <Box className="flex">
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
                    <td className={` text-white py-3 px-4 w-32`}>
                      <Box className="flex gap-4">
                        <ActionButton
                          handlePress={() => handleViewFleet(data?.id)}
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
              })
            )}
          </Table>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Fleet;

const tableData = [
  {
    registration: "kcb 4457k",
    driver: "Brooke Manor",
    "insurance expiry": "Collins joe",
    status: 1,
  },
];
const STATUS_LIST = {
  1: "busy",
  2: "available",
  0: "offline",
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
    text: "total vehicles",
    number: 152,
  },
  {
    text: "online vehicles",
    number: 60,
  },
  {
    text: "on trip",
    number: 30,
  },
  {
    text: "Offline vehicles",
    number: 6,
  },
];

const FleetCard = ({ text, no }) => (
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
      <Lorry />
    </Center>
  </HStack>
);
