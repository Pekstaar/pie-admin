import React, { useState } from "react";
import { ConfigProvider, Table } from "antd";

import _ from "lodash";
import { Box, HStack } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";
import CInput from "../../../components/general/Input";
import EarningServices from "../../../utils/services/EarningServices";

const Paid = () => {
  const [earnings, setEarnings] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterPaidEarnings, setFilterPaidEarnings] = useState([]);
  const [stateLoading, setStateLoading] = useState(true);

  React.useEffect(() => {
    EarningServices.fetchEarnings().then((response) => {
      // console.log(response)
      let arr = [];
      response
        .filter((data) => data.status === 1)
        .forEach((element) => {
          const paidEarningsObj = {
            fullname:
              element?.owner?.first_name + " " + element?.owner?.last_name ||
              "",
            amount: element?.amount || 0,
            createdAt: element?.created_at || "",
            id: element?.id,
          };
          arr.push(paidEarningsObj);
        });
      setEarnings(arr);
      setFilterPaidEarnings(arr);
      setStateLoading(false);
    });
  }, []);

  const handleSearch = (arr, cond) => {
    const newArr = _.filter(arr, (obj) => {
      if (cond) {
        return (
          obj?.fullname?.toLowerCase()?.includes(cond?.toLowerCase()) ||
          obj?.createdAt?.toLowerCase()?.includes(cond?.toLowerCase())
        );
      }
    });

    if (cond) return newArr;
    else return earnings;
  };

  React.useEffect(() => {
    setFilterPaidEarnings(handleSearch(earnings, searchValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [earnings, searchValue]);

  const columns = [
    {
      title: "Date",
      dataIndex: "createdAt",
      sorter: (a, b) => a?.createdAt.localeCompare(b?.createdAt),
    },
    {
      title: "Name",
      dataIndex: "fullname",
      sorter: (a, b) => a?.fullname.localeCompare(b?.fullname),
    },
    {
      title: "Amount (KES)",
      dataIndex: "amount",
      // render: (text, u) => (
      //   "Ksh. " + {text}
      // ),
      sorter: (a, b) => a?.amount.localeCompare(b?.amount),
    },
  ];

  return (
    <>
      {/* search and table actions */}
      <HStack py={"4"} justifyContent={"space-between"} px={"4"}>
        {/* /search input */}
        <CInput
          icon={<IoSearchOutline className="text-xl" />}
          handleChange={(e) => {
            setSearchValue(e?.target?.value);
          }}
        />
        {/* pay invoices button */}
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
            dataSource={filterPaidEarnings}
          />
        </Box>
      </ConfigProvider>
    </>
  );
};

export default Paid;

// const tableData = [
//   {
//     date: "12/5/2022",
//     name: "Brooke Manor",
//     amount: "10,000",
//   },
//   {
//     date: "12/5/2022",
//     name: "Brooke Manor",
//     amount: "10,000",
//   },
//   {
//     date: "12/5/2022",
//     name: "Brooke Manor",
//     amount: "10,000",
//   },
//   {
//     date: "12/5/2022",
//     name: "Brooke Manor",
//     amount: "10,000",
//   },
//   {
//     date: "12/5/2022",
//     name: "Brooke Manor",
//     amount: "10,000",
//   },
//   {
//     date: "12/5/2022",
//     name: "Brooke Manor",
//     amount: "10,000",
//   },
//   {
//     date: "12/5/2022",
//     name: "Brooke Manor",
//     amount: "10,000",
//   },
//   {
//     date: "12/5/2022",
//     name: "Brooke Manor",
//     amount: "10,000",
//   },
// ];
