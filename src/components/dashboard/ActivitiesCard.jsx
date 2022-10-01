import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import { Cancelled, Completed, Picked, Requests } from "../../assets/svg";
// import Example from "../charts/Pie";
import Wrapper from "../general/Wrapper";
import ActivityItem from "./ActivityItem";

const ActivitiesCard = () => {
  //   const handleChart = useCallback(() => {}, []);

  return (
    <Wrapper p={"5"}>
      <HStack gap={"5"}>
        {activities?.map((act) => (
          <ActivityItem
            icon={act?.icon}
            name={act?.title}
            number={act.no}
            bg={act?.bg}
          />
        ))}

        <Box>{/* <Example /> */}</Box>
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
