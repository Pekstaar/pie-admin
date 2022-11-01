import React, { useState } from "react";
import Table from "../../../components/general/Table";

import { Box, HStack } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";
import CInput from "../../../components/general/Input";
import EarningServices from "../../../utils/services/EarningServices";

const Paid = () => {
  const [earnings, setEarnings] = useState([]);

  React.useEffect(() => {
    EarningServices.fetchPaidEarnings().then((response) => {
      setEarnings(response);
    });
  }, []);

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
          {earnings?.map((data, key) => {
            const isEven = key % 2;

            return (
              <tr
                className={`h-14 capitalize ${
                  isEven ? "bg-[#F9F9F9]" : "white"
                }`}
              >
                <td className="py-3 px-4">{data?.date}</td>

                <td className=" py-3 px-4">
                  {data?.owner__first_name} {data?.owner__last_name}
                </td>
                <td className=" py-3 px-4">
                  KES. {new Date(data?.created_at).toLocaleDateString()}
                </td>
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
