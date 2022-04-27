import type { NextPage } from "next";
import useForm from "hooks/useForm";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { supabase } from "lib/supabase";
import { Button, Form } from "@components/index";
import styled from "@emotion/styled";
import { supaSignup } from "utils/supaSignup";
import { UserContext } from "context/user";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { setUser, isLogin, setIsLogin } = useContext(UserContext);
  const { email, password, onChangeEmail, onChangePassword } = useForm({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isLogin) {
      router.push("/logout");
    }
  }, [isLogin, router]);

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (loading) return;
      setLoading(true);
      const { user, session } = await supaSignup({ email, password });
      console.log(user, session);
      setLoading(false);
      if (user) {
        setUser(user);
        setIsLogin(true);
      }
    },
    [email, password, loading, setUser, setIsLogin]
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
