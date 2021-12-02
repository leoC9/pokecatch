import * as S from "./styles";
import plusIcon from "../../Assets/images/plus.png";
import plusIcon2 from "../../Assets/images/plusIcon.png";
import React from "react";
import { FieldTypes } from "../types/field";

interface ButtonProps {
  children?: string | JSX.Element;
  width?: number;
  type?: string;
  onClick?: () => Promise<void> | void;
  disabled?: boolean;
  modalButton?: boolean;
  setField?: Function;
  field?: FieldTypes;
}

type buttonOptions = {
  [key: string]: JSX.Element;
};
const Button = (props: ButtonProps) => {
  const getBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const imageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      getBase64(file).then(
        (base64) =>
          props.setField && props.setField({ ...props.field, image: base64 })
      );
    }
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
        {!props.modalButton ? (
          <img src={plusIcon} alt="plus" />
        ) : (
          <img src={plusIcon2} alt="plus" />
        )}
      </S.AddButton>
    ) : (
      <S.AddButton
        modalButton={props.modalButton}
        size={props.width}
        disabled={props.disabled || false}
      >
        {!props.modalButton ? (
          <img src={plusIcon} alt="plus" />
        ) : (
          <img src={plusIcon2} alt="plus" />
        )}
        <input onChange={(e) => imageUpload(e)} type="file" />
      </S.AddButton>
    ),
  };
  return typeHandler[props.type! || "default"];
};

export default Button;
