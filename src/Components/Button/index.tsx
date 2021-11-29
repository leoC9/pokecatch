import React from "react";
import Typography from "../Typography";
import * as S from "./styles";
import plusIcon from "../../Assets/images/plus.png";

interface ButtonProps {
  children?: string | JSX.Element;
  width?: number;
  type?: string;
  onClick?: Function;
  disabled?: boolean;
}

type buttonOptions = {
  [key: string]: JSX.Element;
};
const Button = (props: ButtonProps) => {
  const typeHandler: buttonOptions = {
    default: (
      <S.Button
        size={props.width}
        onClick={props.onClick}
        disabled={props.disabled || false}
      >
        {props.children}
      </S.Button>
    ),
    addButton: (
      <S.AddButton
        size={props.width}
        onClick={props.onClick}
        disabled={props.disabled || false}
      >
        <img src={plusIcon} />
      </S.AddButton>
    ),
  };
  return typeHandler[props.type! || "default"];
};

export default Button;
