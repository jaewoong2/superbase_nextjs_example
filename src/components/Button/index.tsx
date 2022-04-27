import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import React, { HtmlHTMLAttributes } from "react";

type ButtonProps = {
  isLoading?: boolean;
  buttonType?: "normal" | "primary" | "error" | "not-allowed";
} & React.DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: React.FC<ButtonProps> = ({ isLoading, children, ...props }) => {
  return (
    <Styled.Button disabled={isLoading} {...props}>
      {children}
    </Styled.Button>
  );
};

const getBgColor = (theme: Theme, type: ButtonProps["buttonType"]) => {
  if (type === "normal") {
    return theme.color.buttonBgNoraml;
  }

  if (type === "primary") {
    return theme.color.buttonBgNoraml;
  }

  if (type === "error") {
    return theme.color.buttonBgNoraml;
  }

  if (type === "not-allowed") {
    return theme.color.buttonBgNoraml;
  }
};

const Styled = {
  Button: styled.button<ButtonProps>`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: ${({ theme, buttonType }) =>
      getBgColor(theme, buttonType)};

    &:disabled {
      background-color: #db7070;
      cursor: not-allowed;
    }
  `,
};

export { Button };
