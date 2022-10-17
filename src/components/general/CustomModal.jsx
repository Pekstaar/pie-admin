import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import PrimaryOutlinedButton from "./PrimaryOutlinedButton";

const CustomModal = ({
  isOpen,
  onClose,
  button,
  title = "Modal Title",
  children,
  bg = "white",
  px,
}) => {
  return (
    <>
      {button}
      <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent height={"90vh"} bg={bg} className="w-1/2">
          <ModalHeader py={"3"}>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody overflowY={"scroll"} h={"90%"} py={0} px={px}>
            {children}
          </ModalBody>

          <ModalFooter className="flex gap-3 bg-white">
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
