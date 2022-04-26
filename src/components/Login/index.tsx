import React from "react";
import styled from "@emotion/styled";
import Input from "@components/Input";

type LoginProps = {
  userId?: string;
  userPassword?: string;
  onChangeUserId?: (e: React.ChangeEvent) => {};
  onChangeUserPassword?: (e: React.ChangeEvent) => {};
} & React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

const Login: React.FC<LoginProps> = ({
  userId,
  userPassword,
  onChangeUserId,
  onChangeUserPassword,
  ...props
}) => {
  return (
    <Styled.Form {...props}>
      <Input value={userId} onChange={onChangeUserId} />
      <div className="margin--top--20" />
      <Input value={userPassword} onChange={onChangeUserPassword} />
    </Styled.Form>
  );
};

export default Login;

const Styled = {
  Form: styled.form`
    width: 480px;
    height: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    border: 1px solid #52557ec8;
    border-radius: 7px 7px 7px 7px;

    .margin--top--20 {
      margin-top: 20px;
    }
  `,
};
