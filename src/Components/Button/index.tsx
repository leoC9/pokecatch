import React from "react";
import Typography from "../Typography";
import * as S from "./styles";
import plusIcon from "../../Assets/images/plus.png";
import plusIcon2 from "../../Assets/images/plusIcon.png";

interface ButtonProps {
  children?: string | JSX.Element;
  width?: number;
  type?: string;
  onClick?: Function;
  disabled?: boolean;
  modalButton?: boolean;
}

type buttonOptions = {
  [key: string]: JSX.Element;
};
const Button = (props: ButtonProps) => {
  const handleFileUpload = (event: any) => {
    console.log(event.target.files[0].name);
  };
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
    addButton: !props.modalButton ? (
      <S.AddButton
        modalButton={props.modalButton}
        size={props.width}
        onClick={props.onClick}
        disabled={props.disabled || false}
      >
        {!props.modalButton ? <img src={plusIcon} /> : <img src={plusIcon2} />}
      </S.AddButton>
    ) : (
      <S.AddButton
        modalButton={props.modalButton}
        size={props.width}
        disabled={props.disabled || false}
      >
        {!props.modalButton ? <img src={plusIcon} /> : <img src={plusIcon2} />}
        <input
          onChange={handleFileUpload}
          type="file"
          style={{ opacity: "0" }}
        />
      </S.AddButton>
    ),
  };
  return typeHandler[props.type! || "default"];
};

export default Button;
