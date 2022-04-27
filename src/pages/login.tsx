import type { NextPage } from "next";
import useForm from "hooks/useForm";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { supabase } from "lib/supabase";
import { Button, Form } from "@components/index";
import styled from "@emotion/styled";
import { supaLogin } from "utils/supaLogin";
import { UserContext } from "context/user";
import { useRouter } from "next/router";
import Link from "next/link";

const Login: NextPage = () => {
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
      const { user, session } = await supaLogin({ email, password });
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
        title="로그인"
      >
        <ButtonWrapper>
          <Button isLoading={loading} buttonType="primary">
            로그인
          </Button>
          <div className="margin--right-10px" />
          <LinkWrapper>
            <Link href={"/"}>회원가입</Link>
          </LinkWrapper>
        </ButtonWrapper>
      </Form>
    </FormWrapper>
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
  width: 420px;
  height: 480px;
`;
