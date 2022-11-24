import { Box, Button, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import BreadCrumb from "../components/general/BreadCrumb";
import Wrapper from "../components/general/Wrapper";

import { GoGraph } from "react-icons/go";
import { Doughnat } from "../components/charts/Doughnat";
import FinanceCard from "../components/finance/FinanceCard";
import Paid from "../components/finance/sub_screens/Paid";
import Received from "../components/finance/sub_screens/Received";

const Finance = () => {
  const [currentSubNav, setCurrent] = useState("paid"); //processing,paid

  const bookingsByProduct = React.useMemo(
    () => ({
      options: {
        plugins: {
          centerText: {
            display: true,
            text: "90%",
          },
          legend: {
            display: false,
            position: "right",
          },
        },
      },

      data: {
        labels: ["Gifts"],
        datasets: [
          {
            label: "# of Votes",
            data: [1],
            backgroundColor: ["#FFBDA7", "#7B61FF"],
          },
        ],
        text: "40",
      },
    }),
    []
  );

  return (
    <Box p={"3"} maxH={"91%"} overflowY={"scroll"}>
      <BreadCrumb icon={<GoGraph />} title={"Finance"} />

      <HStack pt={"3"} gap={2}>
        {cards_data?.map((item) => (
          <FinanceCard no={item?.number} text={item?.text} />
        ))}
      </HStack>

      <Box className="flex gap-1 " letterSpacing={"wide"}>
        <Wrapper w={2 / 3} my={"3"} p={"3"}>
          <HStack
            gap={"2"}
            className={"border-b-2 border-zinc-200"}
            h={"10"}
            mx={"4"}
          >
            <SubNavItem
              isCurrent={currentSubNav.toLowerCase() === "paid"}
              handleClick={() => setCurrent("paid")}
              title={"Paid invoices"}
            />
            <SubNavItem
              isCurrent={currentSubNav.toLowerCase() === "unpaid"}
              handleClick={() => setCurrent("unpaid")}
              title={"unpaid invoices"}
            />
          </HStack>

          {currentSubNav === "paid" ? (
            <Paid />
          ) : (
            currentSubNav === "unpaid" && <Received />
          )}
        </Wrapper>

        <Box className="flex flex-col gap-5" w={1 / 3} p={"3"}>
          {/* current month breakdown  */}
          <Wrapper px={"5"}>
            {/* title */}
            <Text fontWeight={"semibold"} fontSize={"xl"}>
              Month breakdown
            </Text>
            {/* chart */}
            <Box className="h-[220px]">
              <div className=" w-[55%] flex justify-start m-auto">
                <Doughnat
                  data={bookingsByProduct.data}
                  options={bookingsByProduct.options}
                />
              </div>
            </Box>
            <Box display={"inline-block"}>
              <Box>
                <Text fontSize={"sm"} className={"text-zinc-400"}>
                  Revenue this month
                </Text>
                <Text fontWeight={"semibold"} fontSize={"22px"}>
                  KES. {0}
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
                  KES. {0}
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
          <Wrapper px={"5"}>
            {/* title */}
            <Text fontWeight={"semibold"} fontSize={"xl"}>
              Previous breakdown
            </Text>
            {/* chart */}
            <Box className="h-[220px]">
              <div className=" w-[55%] flex justify-start m-auto">
                <Doughnat
                  data={bookingsByProduct.data}
                  options={bookingsByProduct.options}
                />
              </div>
            </Box>
            <Box display={"inline-block"}>
              <Box>
                <Text fontSize={"sm"} className={"text-zinc-400"}>
                  Revenue this month
                </Text>
                <Text fontWeight={"semibold"} fontSize={"22px"}>
                  KES. 0
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
                  fontSize={"lg"}
                  textColor="chart_primary"
                >
                  KES. 0
                </Text>
              </Box>

              <Box>
                <Text fontSize={"sm"} className={"text-zinc-400"}>
                  Drivers payables
                </Text>
                <Text
                  fontWeight={"semibold"}
                  fontSize={"lg"}
                  textColor="chart_secondary"
                  letterSpacing={"wide"}
                >
                  KES. 0
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

const SubNavItem = ({ title, isCurrent, handleClick }) => (
  // <Button>

  // </Button>
  <Button
    h={"10"}
    cursor={"pointer"}
    borderRadius={"none"}
    bg={"white "}
    className={`text-primary_yellow text-lg text-start ${
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
    // px={"6"}
    // py={"3"}
    borderBottomWidth={"2px"}
    borderBottomColor={isCurrent ? "dark_green" : "none"}
    onClick={handleClick}
  >
    {title}
  </Button>
);

const cards_data = [
  {
    text: "Revenue",
    number: 0,
  },
  {
    text: "Payables",
    number: 0,
  },
  // {
  //   text: "Withdrawal Requests",
  //   number: 75000,
  // },
  {
    text: "Failed Transactions",
    number: 6,
  },
];
