import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

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
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Box
              p={"3"}
              w={"full"}
              borderRadius={"xl"}
              bg={"#F8F9FB"}
              borderWidth={"thin"}
              borderColor={"gray.300"}
              h={"12"}
              _hover={{
                bg: "#E6E7F0",
                cursor: "pointer",
              }}
            ></Box>
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
