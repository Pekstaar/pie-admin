import { Box, HStack, Text } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { BarChart } from "../components/charts/Bar";
// import { Doughnat } from "../components/charts/Doughnat";
import { CustomLineChart } from "../components/charts/LineChart";
import RadialChart from "../components/charts/Radial";
import ActivitiesCard from "../components/dashboard/ActivitiesCard";
import Breadcrumb from "../components/dashboard/Breadcrumb";
import Wrapper from "../components/general/Wrapper";

const Dashboard = () => {
  // const customerSatisfaction = useMemo(
  //   () => ({
  //     options: {
  //       plugins: {
  //         centerText: {
  //           display: true,
  //           text: "90%",
  //         },
  //         legend: {
  //           display: false,
  //           position: "bottom",
  //         },
  //       },
  //     },

  //     data: {
  //       labels: [
  //         "Very satisfied",
  //         "Satisfied",
  //         "Dissatisfied",
  //         "Very dissatisfied",
  //       ],
  //       datasets: [
  //         {
  //           label: "# of Votes",
  //           data: [
  //             Math.random() * 20,
  //             Math.random() * 30,
  //             Math.random() * 40,
  //             Math.random() * 50,
  //           ],
  //           backgroundColor: ["#16AC52", "#EAC625", "#D9D9D9", "#BB1600"],
  //         },
  //       ],
  //       text: "40",
  //     },
  //   }),
  //   []
  // );

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const barChart = useMemo(
    () => ({
      options: {
        // responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
          },
          // title: {
          //   display: true,
          //   text: "Chart.js Bar Chart",
          // },
        },
      },

      data: {
        labels,
        datasets: [
          {
            label: "Created booking",
            data: labels.map(() => Math.random() * 1000),
            backgroundColor: "#EFAF1D",
          },
          {
            label: "Complete booking",
            data: labels.map(() => Math.random() * 1000),
            backgroundColor: "#00A406",
          },
        ],
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Box p={"3"} maxH={"91%"} overflowY={"scroll"}>
      <Breadcrumb />

      <ActivitiesCard />

      {/* body */}

      {/* Bookings and customer satisfaction */}
      <HStack my={"4"} gap={"2"}>
        <Wrapper className={"w-2/3"} h={"390px"}>
          {/* header */}
          <HStack justifyContent={"space-between"} px={"5"}>
            <Text fontWeight={"semibold"}>Bookings Overview</Text>

            <Box display={"flex"} gap={"2"}>
              <Text>This Week</Text>
              <Text className={"text-zinc-300"}>Monthly</Text>
            </Box>
          </HStack>

          {/* body */}
          <div className="h-[96%] mt-2">
            <BarChart data={barChart?.data} options={barChart?.options} />
          </div>
        </Wrapper>

        <Wrapper className={"w-1/3 flex flex-col  "} h={"390px"}>
          {/* header */}
          <HStack justifyContent={"space-between"} px={"5"}>
            <Text fontWeight={"semibold"}>Customer Satisfaction</Text>
          </HStack>

          {/* body */}
          <div className="h-[300px] w-[300px] m-auto">
            {/* <Doughnat
              data={customerSatisfaction.data}
              options={customerSatisfaction.options}
            /> */}
            <RadialChart />
          </div>
        </Wrapper>
      </HStack>

      {/* ranking and revenue breakdown */}
      <HStack my={"4"} gap={"2"}>
        <Wrapper className={"w-1/2 flex flex-col"} h={"350px"}>
          {/* header */}
          <HStack justifyContent={"space-between"} px={"5"}>
            <Text fontWeight={"semibold"}>Revenue Breakdown</Text>
          </HStack>

          {/* body */}
          {/* <div className="m-3"> */}
          <CustomLineChart />
          {/* </div> */}
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
            <Text fontWeight={"semibold"}>Bookings by product category</Text>
          </HStack>

          {/* body */}
        </Wrapper>

        <Wrapper className={"w-2/3"} h={"390px"}>
          {/* header */}
          <HStack justifyContent={"space-between"} px={"5"}>
            <Text fontWeight={"semibold"}>Bookings by vehicle type</Text>

            <Box display={"flex"} gap={"2"}>
              <Text>This Week</Text>
              <Text className={"text-zinc-300"}>Monthly</Text>
            </Box>
          </HStack>

          {/* body */}
          <BarChart data={barChart?.data} options={barChart?.options} />
        </Wrapper>
      </HStack>
    </Box>
  );
};

export default Dashboard;
