import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Cancelled, Completed, Picked, Requests } from "../../assets/svg";
import { Doughnat } from "../charts/Doughnat";
// import Example from "../charts/Pie";
import Wrapper from "../general/Wrapper";
import ActivityItem from "./ActivityItem";

const ActivitiesCard = () => {
  //   const handleChart = useCallback(() => {}, []);
  // const handleChart = React.useMemo(() => );
  const chartOptions = {
    plugins: {
      centerText: {
        display: true,
        text: "90%",
      },
      legend: {
        display: false,
      },
    },
  };

  const chartData = {
    labels: ["Red", "Blue"],
    datasets: [
      {
        label: "# of Votes",
        data: [75, 25],
        backgroundColor: ["#16AC52", "#2DFC3430"],
      },
    ],
    text: "40",
  };

  return (
    <Wrapper py={"2"}>
      <HStack gap={"3"} justifyContent={"space-between"}>
        <div className="flex flex-wrap 2xl:flex-nowrap ">
          {activities?.map((act) => (
            <ActivityItem
              icon={act?.icon}
              name={act?.title}
              number={act.no}
              bg={act?.bg}
            />
          ))}
        </div>

        <div className="lg:flex hidden items-center gap-1">
          {/* <Example /> */}
          {/* <div className="h-100px w-100px"> */}
          <div className="h-[80px] w-[80px] ml-8">
            <Doughnat options={chartOptions} data={chartData} />
          </div>

          <div className="text-center">
            <Text
              textAlign={"center"}
              color={"primary_green"}
              fontWeight={"semibold"}
              fontSize={"xl"}
            >
              75/100
            </Text>
            <Text
              fontSize={"sm"}
              fontWeight={"light"}
              className={"text-zinc-400"}
            >
              Completed Bookings
            </Text>
          </div>
          {/* </div> */}
        </div>
      </HStack>
    </Wrapper>
  );
};

export default ActivitiesCard;

const activities = [
  {
    title: "Requests",
    no: "32",
    icon: <Requests />,
    bg: "current_bg",
  },
  {
    title: "Picked",
    no: "10",
    icon: <Picked />,
    bg: "picked_bg",
  },
  {
    title: "Completed",
    no: "33",
    icon: <Completed />,
    bg: "completed_bg",
  },
  {
    title: "Cancelled",
    no: "33",
    icon: <Cancelled />,
    bg: "cancelled_bg",
  },
];
