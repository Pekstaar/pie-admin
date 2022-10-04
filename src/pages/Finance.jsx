import { Box, Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import BreadCrumb from "../components/general/BreadCrumb";
import Table from "../components/general/Table";
import Wrapper from "../components/general/Wrapper";

import { IoSearchOutline } from "react-icons/io5";
import CInput from "../components/general/Input";
import { AiFillCreditCard } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import PayButton from "../components/finance/PayButton";
import FinanceCard from "../components/finance/FinanceCard";

const Finance = () => {
  return (
    <Box p={"3"} maxH={"91%"} overflowY={"scroll"}>
      <BreadCrumb icon={<GoGraph />} title={"Finance"} />

      <HStack p={"3"} pt={"5"} gap={3}>
        {cards_data?.map((item) => (
          <FinanceCard no={item?.number} text={item?.text} />
        ))}
      </HStack>

      <Box className="flex gap-2 " letterSpacing={"wide"}>
        <Wrapper w={2 / 3} my={"4"} p={"5"}>
          <HStack
            gap={"2"}
            className={"border-b-2 border-zinc-200"}
            h={"14"}
            mx={"4"}
          >
            <SubNavItem
              isCurrent
              title={"Withdrawal requests"}
              handleClick={() => {}}
            />
            <SubNavItem title={"Processing invoices"} handleClick={() => {}} />
            <SubNavItem title={"Paid invoices"} handleClick={() => {}} />
          </HStack>

          {/* search and table actions */}
          <HStack py={"6"} justifyContent={"space-between"} px={"4"}>
            {/* /search input */}
            <CInput icon={<IoSearchOutline className="text-xl" />} />
            {/* pay invoices button */}
            <Box gap={"2"} textAlign={"center"}>
              {/* text */}
              <Text fontWeight={"bold"} fontSize={"xl"} mb={"2"}>
                KES. 75,000
              </Text>
              {/* button */}
              <PayButton
                icon={<AiFillCreditCard className="text-xl" />}
                text={"Pay invoices"}
              />
            </Box>
          </HStack>

          {/* body */}
          <Box className="">
            <Table headers={[...Object.keys(tableData[0]), "Actions"]}>
              {tableData?.map((data, key) => {
                const isEven = key % 2;

                return (
                  <tr
                    className={`h-20 capitalize ${
                      isEven ? "bg-[#F9F9F9]" : "white"
                    }`}
                  >
                    <td className=" text-center py-3 px-4">{data?.date}</td>

                    <td className="text-center py-3 px-4">{data?.name}</td>
                    <td className="text-center py-3 px-4">{data?.amount}</td>

                    {/* actions table */}
                    <td className={`text-center py-3 px-4 w-[20%1]`}>
                      <Box className="flex justify-end gap-4">
                        <PayButton
                          icon={<AiFillCreditCard className="text-xl" />}
                          text={"Pay invoices"}
                        />
                      </Box>
                    </td>
                  </tr>
                );
              })}
            </Table>
          </Box>
        </Wrapper>

        <Box className="flex flex-col gap-5" w={1 / 3} p={"3"}>
          {/* current month breakdown  */}
          <Wrapper px={"8"}>
            {/* title */}
            <Text fontWeight={"semibold"} fontSize={"xl"}>
              Month breakdown
            </Text>
            {/* chart */}
            <Box className="h-[220px]"></Box>
            <Box display={"inline-block"}>
              <Box>
                <Text fontSize={"sm"} className={"text-zinc-400"}>
                  Revenue this month
                </Text>
                <Text fontWeight={"semibold"} fontSize={"2xl"}>
                  KES. 200000
                </Text>
              </Box>

              <hr className="w-full mt-3" />
            </Box>

            <Box
              display={"flex"}
              // justifyContent={"space-between"}
              gap={"12"}
              mt={"2"}
              // pr={"10"}
            >
              <Box>
                <Text fontSize={"sm"} className={"text-zinc-400"}>
                  Company share
                </Text>
                <Text
                  fontWeight={"semibold"}
                  fontSize={"xl"}
                  textColor="chart_primary"
                >
                  KES. 120000
                </Text>
              </Box>

              <Box>
                <Text fontSize={"sm"} className={"text-zinc-400"}>
                  Drivers payables
                </Text>
                <Text
                  fontWeight={"semibold"}
                  fontSize={"xl"}
                  textColor="chart_secondary"
                  letterSpacing={"wide"}
                >
                  KES. 80,000
                </Text>
              </Box>
            </Box>

            {/* line */}
          </Wrapper>

          {/* previous month breakdown */}
          <Wrapper px={"8"}>
            {/* title */}
            <Text fontWeight={"semibold"} fontSize={"xl"}>
              Previous breakdown
            </Text>
            {/* chart */}
            <Box className="h-[220px]"></Box>
            <Box display={"inline-block"}>
              <Box>
                <Text fontSize={"sm"} className={"text-zinc-400"}>
                  Revenue this month
                </Text>
                <Text fontWeight={"semibold"} fontSize={"2xl"}>
                  KES. 300000
                </Text>
              </Box>

              <hr className="w-full mt-3" />
            </Box>

            <Box
              display={"flex"}
              // justifyContent={"space-between"}
              gap={"12"}
              mt={"2"}
              // pr={"10"}
            >
              <Box>
                <Text fontSize={"sm"} className={"text-zinc-400"}>
                  Company share
                </Text>
                <Text
                  fontWeight={"semibold"}
                  fontSize={"xl"}
                  textColor="chart_primary"
                >
                  KES. 150000
                </Text>
              </Box>

              <Box>
                <Text fontSize={"sm"} className={"text-zinc-400"}>
                  Drivers payables
                </Text>
                <Text
                  fontWeight={"semibold"}
                  fontSize={"xl"}
                  textColor="chart_secondary"
                  letterSpacing={"wide"}
                >
                  KES. 150,000
                </Text>
              </Box>
            </Box>

            {/* line */}
          </Wrapper>
        </Box>
      </Box>
    </Box>
  );
};

export default Finance;

const SubNavItem = ({ title, isCurrent }) => (
  // <Button>

  // </Button>
  <Button
    h={"14"}
    cursor={"pointer"}
    borderRadius={"none"}
    bg={"white "}
    className={`text-primary_yellow text-lg ${
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
    px={"6"}
    // py={"3"}
    borderBottomWidth={"2px"}
    borderBottomColor={isCurrent ? "dark_green" : "none"}
  >
    {title}
  </Button>
);

const tableData = [
  {
    date: "12/5/2022",
    name: "Brooke Manor",
    amount: "Collins joe",
  },
  {
    date: "12/5/2022",
    name: "Brooke Manor",
    amount: "Collins joe",
  },
  {
    date: "12/5/2022",
    name: "Brooke Manor",
    amount: "Collins joe",
  },
  {
    date: "12/5/2022",
    name: "Brooke Manor",
    amount: "Collins joe",
  },
  {
    date: "12/5/2022",
    name: "Brooke Manor",
    amount: "Collins joe",
  },
  {
    date: "12/5/2022",
    name: "Brooke Manor",
    amount: "Collins joe",
  },
  {
    date: "12/5/2022",
    name: "Brooke Manor",
    amount: "Collins joe",
  },
  {
    date: "12/5/2022",
    name: "Brooke Manor",
    amount: "Collins joe",
  },
];
const cards_data = [
  {
    text: "Revenue",
    number: 200000,
  },
  {
    text: "Payables",
    number: 12000,
  },
  {
    text: "Withdrawal Requests",
    number: 75000,
  },
  {
    text: "Failed Transactions",
    number: 6,
  },
];
