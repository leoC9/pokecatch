import React from "react";
import Typography from "../Typography";
import * as S from "./styles";

interface ButtonProps {
  children?: string;
  width?: number;
  onClick?: Function;
  disabled?: boolean;
}
const Button = (props: ButtonProps) => {
  return (
    <S.Button
      width={props.width}
      onClick={props.onClick}
      disabled={props.disabled || false}
    >
      <Typography type="title">{props.children}</Typography>
    </S.Button>
  );
};

export default Button;
