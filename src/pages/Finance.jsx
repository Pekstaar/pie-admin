import { Box, Button, HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import BreadCrumb from "../components/general/BreadCrumb";
import Wrapper from "../components/general/Wrapper";

import { GoGraph } from "react-icons/go";
import FinanceCard from "../components/finance/FinanceCard";
import Withdrawal from "../components/finance/sub_screens/Withdrawal";
import Processing from "../components/finance/sub_screens/Processing";
import Paid from "../components/finance/sub_screens/Paid";

const Finance = () => {
  const [currentSubNav, setCurrent] = useState("withdrawal"); //processing,paid

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
              isCurrent={currentSubNav.toLowerCase() === "withdrawal"}
              title={"Withdrawal requests"}
              handleClick={() => setCurrent("withdrawal")}
            />
            <SubNavItem
              isCurrent={currentSubNav.toLowerCase() === "processing"}
              handleClick={() => setCurrent("processing")}
              title={"Processing invoices"}
            />
            <SubNavItem
              isCurrent={currentSubNav.toLowerCase() === "paid"}
              handleClick={() => setCurrent("paid")}
              title={"Paid invoices"}
            />
          </HStack>

          {currentSubNav === "withdrawal" ? (
            <Withdrawal />
          ) : currentSubNav === "processing" ? (
            <Processing />
          ) : (
            <Paid />
          )}
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

const SubNavItem = ({ title, isCurrent, handleClick }) => (
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
    onClick={handleClick}
  >
    {title}
  </Button>
);

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
