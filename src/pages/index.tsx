import type { NextPage } from "next";
import useForm from "hooks/useForm";
import React, { useCallback } from "react";
import { supabase } from "lib/supabase";
import { Button, Form } from "@components/index";
import styled from "@emotion/styled";

const Home: NextPage = () => {
  const { email, password, onChangeEmail, onChangePassword } = useForm({
    email: "",
    password: "",
  });

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        if (email.trim() === "" || password.trim() === "") {
          return;
        }

        const { error, user, session } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) {
        } else {
        }
      } catch (err) {}
    },
    [email, password]
  );

  return (
    <FormWrapper>
      <Form
        onSubmit={onSubmit}
        userEmail={email}
        userPassword={password}
        onChangeUserEmail={onChangeEmail}
        onChangeUserPassword={onChangePassword}
        title="회원가입"
      >
        <ButtonWrapper>
          <Button buttonType="primary">회원가입</Button>
        </ButtonWrapper>
      </Form>
    </FormWrapper>
  );
};

export default Home;

const ButtonWrapper = styled.div`
  width: 75%;
  height: 50px;
  margin-top: 100px;
`;

const FormWrapper = styled.div`
  width: 420px;
  height: 480px;
`;
