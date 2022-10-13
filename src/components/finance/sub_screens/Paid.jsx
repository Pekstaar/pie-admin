import React from "react";
import Table from "../../../components/general/Table";

import { IoSearchOutline } from "react-icons/io5";
import CInput from "../../../components/general/Input";
import { Box, HStack } from "@chakra-ui/react";

const Paid = () => {
  return (
    <>
      {/* search and table actions */}
      <HStack py={"4"} justifyContent={"space-between"} px={"4"}>
        {/* /search input */}
        <CInput icon={<IoSearchOutline className="text-xl" />} />
        {/* pay invoices button */}
      </HStack>
      {/* body */}
      <Box className="">
        <Table headers={[...Object.keys(tableData[0])]}>
          {tableData?.map((data, key) => {
            const isEven = key % 2;

            return (
              <tr
                className={`h-14 capitalize ${
                  isEven ? "bg-[#F9F9F9]" : "white"
                }`}
              >
                <td className="py-3 px-4">{data?.date}</td>

                <td className=" py-3 px-4">{data?.name}</td>
                <td className=" py-3 px-4">KES. {data?.amount}</td>
              </tr>
            );
          })}
        </Table>
      </Box>
    </>
  );
};

export default Paid;

const tableData = [
  {
    date: "12/5/2022",
    name: "Brooke Manor",
    amount: "10,000",
  },
  {
    date: "12/5/2022",
    name: "Brooke Manor",
    amount: "10,000",
  },
  {
    date: "12/5/2022",
    name: "Brooke Manor",
    amount: "10,000",
  },
  {
    date: "12/5/2022",
    name: "Brooke Manor",
    amount: "10,000",
  },
  {
    date: "12/5/2022",
    name: "Brooke Manor",
    amount: "10,000",
  },
  {
    date: "12/5/2022",
    name: "Brooke Manor",
    amount: "10,000",
  },
  {
    date: "12/5/2022",
    name: "Brooke Manor",
    amount: "10,000",
  },
  {
    date: "12/5/2022",
    name: "Brooke Manor",
    amount: "10,000",
  },
];
