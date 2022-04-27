import styled from "@emotion/styled";
import React, { HtmlHTMLAttributes } from "react";

type ButtonProps = {} & React.DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <Styled.Button {...props}>{children}</Styled.Button>;
};

const Styled = {
  Button: styled.button`
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.color.buttonBgNoraml};
  `,
};

export { Button };
