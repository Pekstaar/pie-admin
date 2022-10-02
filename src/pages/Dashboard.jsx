import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import ActivitiesCard from "../components/dashboard/ActivitiesCard";
import Breadcrumb from "../components/dashboard/Breadcrumb";
import Wrapper from "../components/general/Wrapper";

const Dashboard = () => {
  return (
    <Box p={"3"} maxH={"91%"} overflowY={"scroll"}>
      <Breadcrumb />

      <ActivitiesCard />

      {/* body */}

      {/* Bookings and customer satisfaction */}
      <HStack my={"4"} gap={"2"}>
        <Wrapper className={"w-2/3"} h={"350px"}>
          {/* header */}
          <HStack justifyContent={"space-between"} px={"5"}>
            <Text fontWeight={"semibold"}>Bookings Overview</Text>

            <Box display={"flex"} gap={"2"}>
              <Text>This Week</Text>
              <Text className={"text-zinc-300"}>Monthly</Text>
            </Box>
          </HStack>

          {/* body */}
        </Wrapper>

        <Wrapper className={"w-1/3"} h={"350px"}>
          {/* header */}
          <HStack justifyContent={"space-between"} px={"5"}>
            <Text fontWeight={"semibold"}>Customer Satisfaction</Text>
          </HStack>

          {/* body */}
        </Wrapper>
      </HStack>

      {/* ranking and revenue breakdown */}
      <HStack my={"4"} gap={"2"}>
        <Wrapper className={"w-1/2"} h={"350px"}>
          {/* header */}
          <HStack justifyContent={"space-between"} px={"5"}>
            <Text fontWeight={"semibold"}>Revenue Breakdown</Text>
          </HStack>

          {/* body */}
        </Wrapper>

        <Wrapper className={"w-1/2"} h={"350px"}>
          {/* header */}
          <HStack justifyContent={"space-between"} px={"5"}>
            <Text fontWeight={"semibold"}>Ranking</Text>

            <Box display={"flex"} gap={"2"}>
              <Text>This Week</Text>
              <Text className={"text-zinc-300"}>Monthly</Text>
            </Box>
          </HStack>

          {/* body */}
        </Wrapper>
      </HStack>

      {/* Bookings by product category and vehicle type*/}
      <HStack my={"4"} gap={"2"}>
        <Wrapper className={"w-1/3"} h={"350px"}>
          {/* header */}
          <HStack justifyContent={"space-between"} px={"5"}>
            <Text fontWeight={"semibold"}>Revenue Breakdown</Text>
          </HStack>

          {/* body */}
        </Wrapper>

        <Wrapper className={"w-2/3"} h={"350px"}>
          {/* header */}
          <HStack justifyContent={"space-between"} px={"5"}>
            <Text fontWeight={"semibold"}>Ranking</Text>

            <Box display={"flex"} gap={"2"}>
              <Text>This Week</Text>
              <Text className={"text-zinc-300"}>Monthly</Text>
            </Box>
          </HStack>

          {/* body */}
        </Wrapper>
      </HStack>
    </Box>
  );
};

export default Dashboard;
