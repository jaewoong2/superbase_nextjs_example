import type { NextPage } from "next";
import useForm from "hooks/useForm";
import React, { useCallback } from "react";
import { supabase } from "lib/supabase";
import { Form } from "@components/index";

const Home: NextPage = () => {
  const { email, password, onChangeEmail, onChangePassword } = useForm({
    email: "",
    password: "",
  });

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
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
    <div>
      <Form
        onSubmit={onSubmit}
        userEmail={email}
        userPassword={password}
        onChangeUserEmail={onChangeEmail}
        onChangeUserPassword={onChangePassword}
        userEmailPlaceHolder="아이디"
        userPasswordPlaceHolder="비밀번호"
        title="SignUp"
      >
        <button>Signup</button>
      </Form>
    </div>
  );
};

export default Home;
