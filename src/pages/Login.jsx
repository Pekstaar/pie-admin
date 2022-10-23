import { Box, Center, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import CInput from "../components/general/Input";
import LoadingButton from "../components/general/LoadingButton";
import PrimaryButton from "../components/general/PrimaryButton";
import { toastProps } from "../utils/Helper";
import AuthServices from "../utils/services/AuthServices";

const Login = () => {
  const toast = useToast();

  const [state, setState] = useState({
    emailPhone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleValidation = () => {
    if (state?.emailPhone === "") {
      toast({
        ...toastProps,
        title: "Error!",
        description: "Email or phone-number required!",
        status: "error",
      });

      return false;
    } else if (state?.password === "") {
      toast({
        ...toastProps,
        title: "Error!",
        description: "Password required",
        status: "error",
      });

      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    const isValid = handleValidation();

    if (!isValid) return;

    setLoading(true);
    try {
      const response = await AuthServices.login({
        email_or_phonenumber: state?.emailPhone,
        password: state?.password,
      });

      console.log("LOGIN RESPONSE IS: ", response);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      toast({
        ...toastProps,
        title: "Error!",
        description: error?.message,
        status: "error",
      });
      console.log("LOGIN ERROR!:", error);
    }
  };
  return (
    <Center className="h-screen bg-slate-100 ">
      <Box className="rounded-xl p-6 bg-white w-4/12 flex flex-col gap-6 items-center px-8">
        <Text textAlign={"center"} fontSize={"3xl"} fontWeight={"semibold"}>
          LOGIN
        </Text>

        <Box className="flex  flex-col gap-1 w-full ">
          <Text fontSize={"lg"}>email / phone</Text>

          <CInput
            h={"12"}
            w={"full"}
            placeholder="email@mail.com or "
            icon={<AiOutlineMail className="text-xl" />}
            borderRadius={"md"}
            name={"emailPhone"}
            handleChange={handleChange}
          />
        </Box>

        <Box className="flex  flex-col gap-1 w-full ">
          <Text fontSize={"lg"}>password</Text>

          <CInput
            h={"12"}
            w={"full"}
            type={"password"}
            placeholder="password"
            icon={<AiFillLock className="text-xl" />}
            borderRadius={"md"}
            name={"password"}
            handleChange={handleChange}
          />
        </Box>

        <Box className="py-5 w-full flex justify-center">
          {!loading ? (
            <PrimaryButton
              handleClick={handleSubmit}
              className="text-[20px] font-medium w-3/4 flex justify-center rounded-full h-12"
            >
              LOGIN
            </PrimaryButton>
          ) : (
            <LoadingButton
              borderRadius={"full"}
              fontSize={"20px"}
              w={"75%"}
              h={"12"}
            />
          )}
        </Box>
      </Box>
    </Center>
  );
};

export default Login;
