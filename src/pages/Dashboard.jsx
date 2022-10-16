import { Box, HStack, Text } from "@chakra-ui/react";
import React, { useMemo } from "react";
import { BarChart } from "../components/charts/Bar";
import { Doughnat } from "../components/charts/Doughnat";
// import { Doughnat } from "../components/charts/Doughnat";
import { CustomLineChart } from "../components/charts/LineChart";
import RadialChart from "../components/charts/Radial";
import ActivitiesCard from "../components/dashboard/ActivitiesCard";
import Breadcrumb from "../components/dashboard/Breadcrumb";
import Table from "../components/general/Table";
import Wrapper from "../components/general/Wrapper";

const Dashboard = () => {
  const bookingsByProduct = useMemo(
    () => ({
      options: {
        plugins: {
          centerText: {
            display: true,
            text: "90%",
          },
          legend: {
            display: true,
            position: "right",
          },
        },
      },

      data: {
        labels: ["Gifts", "Electronics", "Documents", "Package", "Others"],
        datasets: [
          {
            label: "# of Votes",
            data: [
              (Math.random() * 20) / 10,
              (Math.random() * 30) / 10,
              (Math.random() * 40) / 10,
              (Math.random() * 50) / 10,
              (Math.random() * 60) / 10,
            ],
            backgroundColor: [
              "#6EF07B",
              "#6FCDFB",
              "#FF65C1",
              "#BB1600",
              "#FFCF63",
            ],
          },
        ],
        text: "40",
      },
    }),
    []
  );

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
            data: labels.map(() => Math.random() * 100),
            backgroundColor: "#EFAF1D",
          },
          {
            label: "Complete booking",
            data: labels.map(() => Math.random() * 100),
            backgroundColor: "#00A406",
          },
        ],
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const radialKeys = [
    { text: "very satisified", color: "#16AC52" },
    { text: "satisified", color: "#EAC625" },
    { text: "dissatisfied", color: "#D9D9D9" },
    { text: "very dissatisfied", color: "#BB1600" },
  ];

  return (
    <Box p={"3"} className="max-h-[calc(100%-80px)]" overflowY={"scroll"}>
      <Breadcrumb />

      <ActivitiesCard />

      {/* body */}
      {/* Bookings and customer satisfaction */}
      <HStack my={"2"} gap={"1"}>
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
          <div className="h-[96%] mt-2">
            <BarChart data={barChart?.data} options={barChart?.options} />
          </div>
        </Wrapper>

        <Wrapper className={"w-1/3 flex flex-col relative "} h={"350px"}>
          {/* header */}
          <HStack justifyContent={"space-between"} px={"5"}>
            <Text fontWeight={"semibold"}>Customer Satisfaction</Text>
          </HStack>

          {/* body */}
          <div className="h-[280px] w-full mx-auto">
            <RadialChart />
            <Box className="flex-wrap flex absolute bottom-1 right-0 left-5">
              {radialKeys?.map((r) => (
                <HStack className="w-[45%] p-2">
                  <Box bg={r?.color} className={`h-4 w-4 rounded-full `} />

                  <Text className="text-zinc-400">{r?.text}</Text>
                </HStack>
              ))}
            </Box>
          </div>
        </Wrapper>
      </HStack>

      {/* ranking and revenue breakdown */}
      <HStack my={"2"} gap={"1"}>
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
          <HStack justifyContent={"space-between"} mb={"2"}>
            <Text fontWeight={"semibold"}>Ranking</Text>

            <Box className={"flex items-center text-sm"} gap={"2"}>
              <Box className="bg-zinc-100 rounded-md p-2">Top locations</Box>
              <Text className={"text-zinc-300 "}>Top Drivers</Text>
              <Text className={"text-zinc-300 "}>Top Products</Text>
            </Box>
          </HStack>

          {/* body */}
          <Table size={"sm"} headers={[...Object.keys(sampleRanking[0])]}>
            {sampleRanking?.map((data, key) => {
              const isEven = key % 2;

              return (
                <tr
                  className={`h-10 capitalize text-[12px] ${
                    isEven ? "bg-[#F9F9F9]" : "white"
                  }`}
                >
                  <td className="  py-1 px-4">{data?.location}</td>
                  <td className="  py-1 px-4">{data?.created}</td>
                  <td className=" py-1 px-4">{data?.completed}</td>
                  <td className=" py-1 px-4">{data?.revenue}</td>
                </tr>
              );
            })}
          </Table>
        </Wrapper>
      </HStack>

      {/* Bookings by product category and vehicle type*/}
      <HStack my={"2"} gap={"1"}>
        <Wrapper className={"w-1/3 flex flex-col "} h={"350px"}>
          {/* header */}
          <HStack justifyContent={"space-between"} px={"5"}>
            <Text fontWeight={"semibold"}>Bookings by product category</Text>
          </HStack>

          {/* body */}
          <div className=" xl:w-[85%] lg:w-[95%] w-[100%]  flex justify-start m-auto">
            <Doughnat
              data={bookingsByProduct.data}
              options={bookingsByProduct.options}
            />
          </div>
        </Wrapper>

        <Wrapper className={"w-2/3"} h={"350px"}>
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

const sampleRanking = [
  {
    location: "Kasarani",
    created: "20",
    completed: "18",
    revenue: "18000",
  },

  {
    location: "Kasarani",
    created: "20",
    completed: "18",
    revenue: "18000",
  },
  {
    location: "Ngong",
    created: "15",
    completed: "14",
    revenue: "14000",
  },
  {
    location: "Kasarani",
    created: "20",
    completed: "18",
    revenue: "18000",
  },
  {
    location: "Ngong",
    created: "15",
    completed: "14",
    revenue: "14000",
  },
  {
    location: "Ngong",
    created: "15",
    completed: "14",
    revenue: "14000",
  },
];
