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

        <HStack>
          {/* <Example /> */}
          {/* <div className="h-100px w-100px"> */}
          <div className="h-[80px] w-[80px] ml-8">
            <Doughnat />
          </div>
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
          {/* </div> */}
        </HStack>
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
