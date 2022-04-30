import type { NextPage } from "next";
import React from "react";
import styled from "@emotion/styled";
import { FormikProvider, useFormik } from "formik";
import { Button, Flex, Box, Stack, VStack, Checkbox } from "@chakra-ui/react";
import Input from "@components/Chark/Input";

const Login: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // <Box p /> p 는 padding

  return (
    <FormikProvider value={formik}>
      <FormWrapper>
        <Flex
          bg="gray.100"
          align="center"
          justify="center"
          width="100%"
          height="100%"
        >
          <Box
            bg="white"
            width="100%"
            maxWidth={"400px"}
            p={10}
            rounded="9px 9px 99px 1px"
          >
            <form onSubmit={formik.handleSubmit}>
              <VStack>
                <Input
                  value={formik.values.email}
                  htmlfor="email"
                  id="email"
                  key="email"
                  label="Email Address"
                  name="email"
                  onChange={formik.handleChange}
                  type="email"
                  variant="filled"
                  validate={(value) => {
                    if (value.trim() === "") {
                      return "띄어쓰기는 제거 해주세요.";
                    }
                  }}
                />
                <Input
                  isInvalid={false}
                  value={formik.values.password}
                  htmlfor="password"
                  id="password"
                  key="password"
                  label="password"
                  name="password"
                  onChange={formik.handleChange}
                  type="password"
                  variant="filled"
                  validate={(value) => {
                    let error;
                    if (value.length < 5) {
                      error = "Password must contain at least 6 characters";
                    }
                    return error;
                  }}
                />
                <Checkbox
                  width={"100%"}
                  id="rememberMe"
                  name="rememberMe"
                  onChange={formik.handleCgithange}
                  isChecked={formik.values.rememberMe}
                  colorScheme="purple"
                >
                  Remember me?
                </Checkbox>
                <Button type="submit" colorScheme="purple" isFullWidth>
                  Login
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
      </FormWrapper>
    </FormikProvider>
  );
};

export default Login;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 75%;
  height: 50px;
  margin-top: 100px;

  .margin--right-10px {
    margin-right: 4px;
  }
`;

const LinkWrapper = styled.div`
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  border-radius: 25px;

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
