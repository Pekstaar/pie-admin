import React from "react";
import Table from "../../general/Table";

import { IoSearchOutline } from "react-icons/io5";
import CInput from "../../general/Input";
import { Box, Button, HStack } from "@chakra-ui/react";

import { FiEye } from "react-icons/fi";
import { VscFilter } from "react-icons/vsc";
import { BiSort } from "react-icons/bi";
import UserServices from "../../../utils/services/UserServices";
import { useState } from "react";
import Loader from "../../Loader";
import TableFooter from "../../Table/Footer";
import useTable from "../../../hooks/UseTable";

const Accepted = ({ handleView }) => {
  const [applications, setApplications] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(applications, page, 20);

  React.useEffect(() => {
    UserServices.fetchDrivers(true).then((response) => {
      setApplications(response);
      setLoading(false);
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
        <Table
          footer={
            <TableFooter
              range={range}
              slice={slice}
              setPage={setPage}
              page={page}
            />
          }
          headers={[...Object.keys(tableData[0]), "Actions"]}
        >
          {loading ? (
            <Loader />
          ) : (
            slice?.map((data, key) => {
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
            })
          )}
        </Table>
      </Box>
    </>
  );
};

export default Accepted;

const tableData = [
  {
    fullname: "New User",
    phone: "0711223344",
    email: "brook@okapy.com",
    // vehicle_cat: "Cab",
    "accepted date": new Date().toLocaleString(),
  },
  {
    fullname: "New User",
    phone: "0711223344",
    email: "brook@okapy.com",
    vehicle_cat: "Truck",
    "accepted date": new Date().toLocaleString(),
  },
  {
    fullname: "New User",
    phone: "0711223344",
    email: "brook@okapy.com",
    vehicle_cat: "Truck",
    "accepted date": new Date().toLocaleString(),
  },
  {
    fullname: "New User",
    phone: "0711223344",
    email: "brook@okapy.com",
    vehicle_cat: "Cab",
    "accepted date": new Date().toLocaleString(),
  },
  {
    fullname: "New User",
    phone: "0711223344",
    email: "brook@okapy.com",
    vehicle_cat: "Cab",
    "accepted date": new Date().toLocaleString(),
  },
  {
    fullname: "New User",
    phone: "0711223344",
    email: "brook@okapy.com",
    vehicle_cat: "Motorbike",
    "accepted date": new Date().toLocaleString(),
  },
  {
    fullname: "New User",
    phone: "0711223344",
    email: "brook@okapy.com",
    vehicle_cat: "Motorbike",
    "accepted date": new Date().toLocaleString(),
  },
  {
    fullname: "New User",
    phone: "0711223344",
    email: "brook@okapy.com",
    vehicle_cat: "Cab",
    "accepted date": new Date().toLocaleString(),
  },
];

export const ActionButton = ({ bg, children, handleClick }) => (
  <Button
    onClick={handleClick}
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
