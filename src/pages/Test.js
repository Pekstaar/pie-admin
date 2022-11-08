import { Box, Center, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { sample_questions } from "../utils/quiz";

const Test = () => {
  return (
    <Box className="md:container mx-auto flex flex-col gap-2">
      {/* Bread crumb */}
      <Header title={"Airlaw - test"} />

      {/* body */}
      <Box className="bg-white rounded-b-lg p-5 flex flex-col gap-1">
        {sample_questions?.map((qn, index) => (
          <>
            <QuestionCard
              answers={qn?.answers}
              key={index}
              number={index + 1}
              question={qn?.question}
            />
            <QuestionCard
              answers={qn?.answers}
              key={index}
              number={index + 1}
              question={qn?.question}
            />
          </>
        ))}
      </Box>
    </Box>
  );
};

export default Test;

const Header = ({ title }) => {
  const navigate = useNavigate();

  return (
    <HStack gap={"1"} className="p-3 rounded-t-lg bg-white">
      {/* back icon */}

      <Center
        className="text-xl rounded-lg cursor-pointer h-10 w-10 hover:bg-slate-100"
        color={"primary"}
        onClick={() => navigate(-1)}
      >
        <MdOutlineKeyboardBackspace />
      </Center>

      {/* title */}
      <Text fontSize={"xl"} fontWeight={"semibold"} color={"primary"}>
        {title}
      </Text>
    </HStack>
  );
};

const QuestionCard = ({ number, question, answers }) => (
  <Box className="px-5 py-8 bg-[#FBFCFE] border border-slate-300 rounded flex flex-col gap-2">
    <Text className="text-slate-400 text-sm">Question {number}</Text>

    <Text className="text-slate-800 font-semibold text-sm">{question}</Text>

    <Box ml={"2"}>
      {Object.keys(answers).map((ans) => (
        <AnswerItem
          key={ans}
          isSelected={ans === "1"}
          index={choice_keys[ans]}
          answer={answers[ans]}
        />
      ))}
    </Box>
  </Box>
);

const AnswerItem = ({ answer, index, isSelected = false }) => (
  <HStack
    gap={"1"}
    className={`hover:bg-slate-100 cursor-pointer ${
      isSelected ? "text-[#2CCAA9]" : "text-slate-600"
    }`}
  >
    {/* choice */}
    <Center className="h-10 w-10 border-r border-slate-300 font-semibold ">
      {index}
    </Center>
    <Box className="text-sm font-medium ">{answer}</Box>
  </HStack>
);

let choice_keys = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
};
