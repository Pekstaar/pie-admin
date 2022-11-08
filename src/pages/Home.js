import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import SubjectItem from "../components/SubjectItem";

const Home = () => {
  return (
    <Box display={"flex"} flexDir={"column"} gap={"5"}>
      {/* Bread crumb */}
      <Box
        fontWeight={"bold"}
        fontSize={"20"}
        color={"primary"}
        p={"5"}
        w={{ base: "full", lg: "70%" }}
        bg={"white"}
        borderRadius={"xl"}
      >
        Exam Subjects
      </Box>

      <Box
        fontWeight={"bold"}
        fontSize={"20"}
        color={"primary"}
        p={"5"}
        w={{ base: "full", lg: "70%" }}
        bg={"white"}
        borderRadius={"xl"}
      >
        <Text color={"primary"} fontSize={"sm"} fontWeight={"medium"} mb={"5"}>
          Tests
        </Text>

        {/* list */}
        <VStack gap={"2"}>
          {subjects.map((sub, i) => (
            <Link
              to={"/" + sub?.pre?.slice(1, sub?.pre.length)}
              as={"div"}
              className={"w-full"}
            >
              <SubjectItem
                title={sub?.name}
                prefix={sub?.pre}
                color={color_tags[i]}
              />
            </Link>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default Home;

// const
// CiAirportSign1 Aircraft tech
// IoPlanetOutline Meteorology
// BsFillAwardFill Air law
// TbPlaneInflight flight learning and perfoarmance
// BiBrain Human perfomance
// FiNavigation Navigation
// Operation procedure VscServerProcess

const color_tags = [
  "#7DA6FA",
  "#FCDE9D",
  "#FF8399",
  "#7DA6FA",
  "#CDA6EC",
  "#5A5AB5",
  "#FCDE9D",
  "#FF8399",
  "#7DA6FA",
];

const subjects = [
  {
    name: "Airlaw",
    pre: "#ARLAW",
  },
  {
    name: "Meteorology",
    pre: "#METEO",
  },
  {
    name: "Aircraft tech",
    pre: "#ATECH",
  },
  {
    name: "Flight learning and Performance",
    pre: "#FLPER",
  },
  {
    name: "Human Performance",
    pre: "#HNPER",
  },
  {
    name: "Navigation",
    pre: "#NVGTN",
  },
  {
    name: "Operation Procedures",
    pre: "#OPPRO",
  },
  {
    name: "Principles of flight",
    pre: "#PRFLT",
  },
  {
    name: "Radio Telephone",
    pre: "#RDTEL",
  },
];
