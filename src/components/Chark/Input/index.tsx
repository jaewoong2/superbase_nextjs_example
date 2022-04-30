import { FormControl, FormLabel, Input as ChakraInput } from "@chakra-ui/react";
import { Field as FormikField, FieldAttributes, FieldValidator } from "formik";

import React from "react";

type InputProps = {
  value: string;
  label?: string;
  onChange: (e: React.ChangeEvent) => void;
  id: string;
  name: string;
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
  variant: "outline" | "unstyled" | "flushed" | "filled";
  htmlfor?: string;
  validate?: FieldValidator;
  isInvalid?: boolean;
};

const Input: React.FC<InputProps> = ({
  label,
  htmlfor,
  validate,
  isInvalid,
  ...props
}) => {
  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel htmlFor={htmlfor}>{label}</FormLabel>
      {validate ? (
        <Field validate={validate} {...props} />
      ) : (
        <ChakraInput {...props} />
      )}
    </FormControl>
  );
};

const Field: React.FC<FieldAttributes<InputProps>> = ({
  id,
  name,
  type,
  variant,
  validate,
}) => {
  return (
    <FormikField
      as={ChakraInput}
      id={id}
      name={name}
      type={type}
      variant={variant}
      validate={validate}
    />
  );
};

export default Input;
