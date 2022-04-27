import { Theme } from "@emotion/react";
import styled from "@emotion/styled";
import React, { HtmlHTMLAttributes } from "react";

type ButtonProps = {
  buttonType?: "normal" | "primary" | "error" | "not-allowed";
} & React.DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <Styled.Button {...props}>{children}</Styled.Button>;
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
    background-color: ${({ theme, buttonType }) =>
      getBgColor(theme, buttonType)};
  `,
};

export { Button };
