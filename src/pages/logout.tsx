import type { NextPage } from "next";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { supabase } from "lib/supabase";
import { Button } from "@components/index";
import styled from "@emotion/styled";
import { UserContext } from "context/user";
import { useRouter } from "next/router";

const Logout: NextPage = () => {
  const router = useRouter();
  const { isLogin, setIsLogin } = useContext(UserContext);

  useEffect(() => {
    if (!isLogin) {
      router.push("/login");
    }
  }, [isLogin, router]);

  const onClickButton = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      setIsLogin(false);
    }
  }, [setIsLogin]);

  return (
    <FormWrapper>
      <ButtonWrapper>
        <Button onClick={onClickButton} isLoading={false} buttonType="primary">
          Logout
        </Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default Logout;

const ButtonWrapper = styled.div`
  width: 75%;
  height: 50px;
`;

const FormWrapper = styled.div`
  width: 420px;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
