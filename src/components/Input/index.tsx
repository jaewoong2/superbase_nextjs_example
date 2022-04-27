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
      {prefix && <Styled.Prefix>{prefix}</Styled.Prefix>}
      <Styled.Input {...props} />
      {suffix && <Styled.Suffix>{suffix}</Styled.Suffix>}
    </Styled.Label>
  );
};

export { Input };

const Styled = {
  Label: styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
  `,
  Input: styled.input`
    width: 100%;
    height: 50px;
    padding-left: 20px;
    outline: none;
    border: none;
    border-radius: 25px;
    background-color: ${({ theme }) => theme.color.inputBgNormal};
    transition: box-shadow 0.4s;
    font-size: 16px;
    &:active,
    &:focus {
      box-shadow: 1px 1px 4px ${({ theme }) => theme.color.buttonBgNoraml},
        -1px -1px 4px ${({ theme }) => theme.color.buttonBgNoraml};
      transition: box-shadow 0.4s;
    }
  `,
  Prefix: styled.div``,
  Suffix: styled.div``,
};
