import styled from "@emotion/styled";
import React, { HtmlHTMLAttributes } from "react";

type ButtonProps = {} & React.DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: React.FC<ButtonProps> = ({}) => {
  return <Styled.Button>Button</Styled.Button>;
};

const Styled = {
  Button: styled.button`
    width: 100%;
    height: 100%;
  `,
};

export { Button };
