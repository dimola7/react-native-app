import React from "react";
import { IButton } from "./types";
import { ButtonStyle, Text } from "./styled";

export const Button = ({ title, bgColor }: IButton) => {
  return (
    <ButtonStyle backgroundColor={bgColor}>
      <Text>{title}</Text>
    </ButtonStyle>
  );
};
