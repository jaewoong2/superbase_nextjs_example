import styled from "@emotion/styled";
import React from "react";

type InputProps = {
  prefix?: React.ReactNode | React.ReactElement | JSX.Element;
  suffix?: React.ReactNode | React.ReactElement | JSX.Element;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<InputProps> = ({ prefix, suffix, ...props }) => {
  return (
    <Styled.Label>
      <Styled.Prefix>{prefix}</Styled.Prefix>
      <Styled.Input {...props} />
      <Styled.Suffix>{suffix}</Styled.Suffix>
    </Styled.Label>
  );
};

export default Input;

const Styled = {
  Label: styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `,
  Input: styled.input`
    width: 100%;
    padding: 6px 3px 6px 3px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
  `,
  Prefix: styled.div``,
  Suffix: styled.div``,
};
