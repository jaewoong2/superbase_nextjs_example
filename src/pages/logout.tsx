import type { NextPage } from "next";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { supabase } from "lib/supabase";
import { Button } from "@components/index";
import styled from "@emotion/styled";
import { UserContext } from "context/user";
import { useRouter } from "next/router";

const Logout: NextPage = () => {
  const [loading, setLoading] = useState(false);
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
        <Button
          onClick={onClickButton}
          isLoading={loading}
          buttonType="primary"
        >
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
  margin-top: 100px;
`;

const FormWrapper = styled.div`
  width: 420px;
  height: 480px;
`;
