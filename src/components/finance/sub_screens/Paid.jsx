import React, { useState } from "react";
import Table from "../../../components/general/Table";

import { Box, HStack } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";
import CInput from "../../../components/general/Input";
import EarningServices from "../../../utils/services/EarningServices";

const Paid = () => {
  const [earnings, setEarnings] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  React.useEffect(() => {
    EarningServices.fetchEarnings().then((response) => {
      setEarnings(response.filter((data) => data.status === 1));
    });
  }, []);

  return (
    <>
      {/* search and table actions */}
      <HStack py={"4"} justifyContent={"space-between"} px={"4"}>
        {/* /search input */}
        <CInput icon={<IoSearchOutline className="text-xl"
          handleChange={(e) => {
            setSearchValue(e?.target?.value);
          }}
        />} />
        {/* pay invoices button */}
      </HStack>
      {/* body */}
      <Box className="">
        <Table headers={[...Object.keys(tableData[0])]}>
          {earnings?.filter((data) => {
            return (
              data === "" ? data :
              data?.created_at.toLowerCase().includes(searchValue.toLowerCase()) ||
              data?.owner?.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
              data?.owner?.last_name.toLowerCase().includes(searchValue.toLowerCase()) ||
              data?.amount.toLowerCase().includes(searchValue.toLowerCase())
            )
          }).map((data, key) => {
            const isEven = key % 2;

            return (
              <tr
                className={`h-14 capitalize ${isEven ? "bg-[#F9F9F9]" : "white"
                  }`}
              >
                <td className="py-3 px-4">{data?.created_at}</td>

                <td className=" py-3 px-4">
                  {data?.owner?.first_name} {data?.owner?.last_name}
                </td>
                <td className=" py-3 px-4">
                  KES. {(data?.amount)}
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
