import React from "react";
import styled from "@emotion/styled";
import { Input } from "@components/index";

type LoginProps = {
  title: string;
  userEmail?: string;
  userPassword?: string;
  userEmailPlaceHolder?: string;
  userPasswordPlaceHolder?: string;
  isLoading?: boolean;
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
        <label className="title-label">이메일</label>
        <Input
          type="email"
          placeholder={userEmailPlaceHolder}
          value={userEmail}
          onChange={onChangeUserEmail}
        />
        <div className="margin--top--20" />
        <label className="title-label">비밀번호</label>
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

export { Form };

const Styled = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.color.formBgNormal};
    border-radius: 12px;
    h3 {
      font-size: 32px;
      color: ${({ theme }) => theme.color.fontWhite};
    }
  `,

  Form: styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 18px;

    width: 100%;
    height: 100%;

    .title-label {
      width: 75%;
      color: ${({ theme }) => theme.color.fontWhite};
      margin: 0px 0px 8px 10px;
    }

    .margin--top--20 {
      margin-top: 20px;
    }
  `,
};
