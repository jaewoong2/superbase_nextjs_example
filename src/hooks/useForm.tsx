import React, { useCallback, useState } from "react";

type useFormProps = {
  email?: string;
  password?: string;
};

const useForm = (init?: useFormProps) => {
  const [email, setEmail] = useState(init?.email ?? "");
  const [password, setPassword] = useState(init?.password ?? "");

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const resetEmail = () => {
    setEmail("");
  };

  const resetPassword = () => {
    setPassword("");
  };

  return {
    email,
    password,
    onChangeEmail,
    onChangePassword,
    resetEmail,
    resetPassword,
  };
};

export default useForm;
