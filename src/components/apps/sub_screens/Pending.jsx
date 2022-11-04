import React, { useState } from "react";
import Table from "../../general/Table";

import { IoSearchOutline } from "react-icons/io5";
import CInput from "../../general/Input";
import { Box, Button, HStack } from "@chakra-ui/react";

import { FiEye } from "react-icons/fi";
import { VscFilter } from "react-icons/vsc";
import { BiSort } from "react-icons/bi";
import UserServices from "../../../utils/services/UserServices";

const Pending = ({ handleView }) => {
  const [applications, setApplications] = useState();

  React.useEffect(() => {
    UserServices.fetchDrivers(false).then((response) => {
      setApplications(response);
    });
  }, []);
  return (
    <>
      {/* search and table actions */}
      <HStack py={"3"} justifyContent={"space-between"}>
        {/* /search input */}
        <CInput icon={<IoSearchOutline className="text-xl" />} />
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
        <Table headers={[...Object.keys(tableData[0]), "Actions"]}>
          {applications?.map((data, key) => {
            const isEven = key % 2;

            return (
              <tr
                className={`h-14 capitalize ${
                  isEven ? "bg-[#F9F9F9]" : "white"
                }`}
              >
                <td className="  py-3 px-4">
                  {data?.user?.first_name + " " + data?.user?.last_name}
                </td>
                <td className=" py-3 px-4">{data?.user?.phonenumber}</td>
                <td className="  py-3 px-4">{data?.user?.email}</td>
                {/* <td className=" py-3 px-4">__</td> */}
                <td className=" py-3 px-4">{data?.user?.date_joined}</td>
                {/* actions table */}
                <td className={`text-center text-white py-3 px-4 w-24 `}>
                  <Box className="flex gap-4 justify-center">
                    <ActionButton handleClick={() => handleView(data?.id)}>
                      <FiEye />
                    </ActionButton>
                  </Box>
                </td>
              </tr>
            );
          })}
        </Table>
      </Box>
    </>
  );
};

export default Pending;

const tableData = [
  {
    fullname: "New User",
    phone: "0711223344",
    email: "brook@okapy.com",
    vehicle_cat: "Cab",
  },
  {
    fullname: "New User",
    phone: "0711223344",
    email: "brook@okapy.com",
    vehicle_cat: "Truck",
  },
  {
    fullname: "New User",
    phone: "0711223344",
    email: "brook@okapy.com",
    vehicle_cat: "Truck",
  },
  {
    fullname: "New User",
    phone: "0711223344",
    email: "brook@okapy.com",
    vehicle_cat: "Cab",
  },
  {
    fullname: "New User",
    phone: "0711223344",
    email: "brook@okapy.com",
    vehicle_cat: "Cab",
  },
  {
    fullname: "New User",
    phone: "0711223344",
    email: "brook@okapy.com",
    vehicle_cat: "Motorbike",
  },
  {
    fullname: "New User",
    phone: "0711223344",
    email: "brook@okapy.com",
    vehicle_cat: "Motorbike",
  },
  {
    fullname: "New User",
    phone: "0711223344",
    email: "brook@okapy.com",
    vehicle_cat: "Cab",
  },
];

export const ActionButton = ({ bg, children, handleClick }) => (
  <Button
    fontSize={"lg"}
    p={"0"}
    h={"30px"}
    onClick={handleClick}
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
