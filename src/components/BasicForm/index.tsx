import React from "react";
import styled from "@emotion/styled";
import Input from "@components/Input";

type LoginProps = {
  title: string;
  userEmail?: string;
  userPassword?: string;
  userEmailPlaceHolder: string;
  userPasswordPlaceHolder: string;
  onChangeUserEmail?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeUserPassword?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

const Form: React.FC<LoginProps> = ({
  title,
  userEmailPlaceHolder,
  userPasswordPlaceHolder,
  userEmail,
  userPassword,
  onChangeUserEmail,
  onChangeUserPassword,
  children,
  ...props
}) => {
  return (
    <Styled.Container>
      <h3 className="title">{title}</h3>
      <Styled.Form {...props}>
        <Input
          type="email"
          placeholder={userEmailPlaceHolder}
          value={userEmail}
          onChange={onChangeUserEmail}
        />
        <div className="margin--top--20" />
        <Input
          type="password"
          placeholder={userPasswordPlaceHolder}
          value={userPassword}
          onChange={onChangeUserPassword}
        />
        {children}
      </Styled.Form>
    </Styled.Container>
  );
};

export default Form;

const Styled = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #74996c;
    border-radius: 12px;
    h3 {
      font-size: 32px;
      color: #cfcfcf;
    }
  `,

  Form: styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 18px;

    width: 480px;
    height: 360px;
    padding: 120px 50px 50px 50px;

    .margin--top--20 {
      margin-top: 20px;
    }
  `,
};
