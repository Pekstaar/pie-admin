import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsPerson, BsTelephone } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import CInput from "./Input";
import PrimaryButton from "./PrimaryButton";
import PrimaryOutlinedButton from "./PrimaryOutlinedButton";

const CustomModal = ({ isOpen, onClose, button, title = "Modal Title" }) => {
  return (
    <>
      {button}
      <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="w-1/2">
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack gap={"2"} w={"full"}>
              <Box className="flex w-full flex-col gap-1">
                <Text fontSize={"sm"}>Full name</Text>

                <CInput
                  h={"10"}
                  w={3 / 4}
                  placeholder=""
                  icon={<BsPerson className="text-xl" />}
                  borderRadius={"md"}
                />
              </Box>

              <Box className="flex w-full flex-col gap-1">
                <Text fontSize={"sm"}>Category</Text>

                <CInput h={"10"} w={3 / 4} placeholder="" borderRadius={"md"} />
              </Box>

              <Box className="flex w-full flex-col gap-1">
                <Text fontSize={"sm"}>Location</Text>

                <CInput
                  h={"10"}
                  w={3 / 4}
                  placeholder=""
                  icon={<GrLocation className="text-xl" />}
                  borderRadius={"md"}
                />
              </Box>

              <Box className="flex w-full flex-col gap-1">
                <Text fontSize={"sm"}>Email</Text>

                <CInput
                  h={"10"}
                  w={3 / 4}
                  placeholder=""
                  icon={<AiOutlineMail className="text-xl" />}
                  borderRadius={"md"}
                />
              </Box>

              <Box className="flex w-full flex-col gap-1">
                <Text fontSize={"sm"}>Phone</Text>

                <CInput
                  h={"10"}
                  w={3 / 4}
                  placeholder=""
                  icon={<BsTelephone className="text-xl" />}
                  borderRadius={"md"}
                />
              </Box>
            </VStack>
          </ModalBody>

          <ModalFooter className="flex gap-3">
            <PrimaryOutlinedButton
              handleClick={onClose}
              className={"text-sm items-end px-10"}
            >
              <Text color={"primary_yellow"} fontWeight={"medium"}>
                Cancel
              </Text>
            </PrimaryOutlinedButton>

            <PrimaryButton className={"text-sm items-end px-10"}>
              <Text fontWeight={"medium"}>Save</Text>
            </PrimaryButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;
