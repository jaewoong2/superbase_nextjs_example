import type { NextPage } from "next";
import useForm from "hooks/useForm";
import React, { useCallback, useState } from "react";
import { supabase } from "lib/supabase";
import { Button, Form } from "@components/index";
import styled from "@emotion/styled";
import { supaLogin } from "utils/supaLogin";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const { email, password, onChangeEmail, onChangePassword } = useForm({
    email: "",
    password: "",
  });

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (loading) return;
      setLoading(true);
      const { user, session, error } = await supaLogin({ email, password });
      setLoading(false);
    },
    [email, password]
  );

  return (
    <FormWrapper>
      <Form
        isLoading={loading}
        onSubmit={onSubmit}
        userEmail={email}
        userPassword={password}
        onChangeUserEmail={onChangeEmail}
        onChangeUserPassword={onChangePassword}
        title="회원가입"
      >
        <ButtonWrapper>
          <Button isLoading={loading} buttonType="primary">
            회원가입
          </Button>
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
