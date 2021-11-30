import React from "react";
import Typography from "../Typography";
import buttonNumberIcon from "../../Assets/images/chevronDownBlack.png";
import Select from "react-select";
import checkIcon from "../../Assets/images/checkIcon.png";
import closeIcon from "../../Assets/images/close.png";
import * as S from "./styles";

interface InputProps {
  name?: string;
  value?: string | number;
  label?: string;
  placeholder?: string;
  onChange?: any;
  type?: string;
  measure?: string;
  width?: number;
  borderColor?: number;
}

type typeHandlerOptions = {
  [key: string]: JSX.Element;
};

const Input = (props: InputProps) => {
  const colourOptions = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  function inputNumberChange(value: number | string) {
    if (typeof value === "string") {
      return;
    }
    props.onChange(value);
  }

  const typeHandler: typeHandlerOptions = {
    default: (
      <S.InputDefault
        id={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        type="text"
      />
    ),
    number: (
      <S.InputNumberArea>
        <S.InputNumber
          id={props.name}
          placeholder={props.placeholder}
          onChange={(e) => inputNumberChange(e.target.value)}
          value={props.value}
        />
        <S.ButtonArea>
          <Typography type="subtitle">{props.measure}</Typography>
          <S.Button>
            <img src={buttonNumberIcon} />
          </S.Button>
          <S.Button>
            <img src={buttonNumberIcon} />
          </S.Button>
        </S.ButtonArea>
      </S.InputNumberArea>
    ),
    multiSelect: (
      <Select
        defaultValue={[colourOptions[2], colourOptions[3]]}
        isMulti
        name="colors"
        options={colourOptions}
        className="basic-multi-select multiSelect"
        classNamePrefix="select multiSelect"
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "#E4E9F2",
            primary: "none",
          },
        })}
      />
    ),
    // inputEdit: (
    //     <S.InputNumberArea>
    //         <S.InputDefault/>
    //         <S.ButtonCheck>
    //             <img src={checkIcon} alt="" />
    //         </S.ButtonCheck>
    //         <S.ButtonCheck>
    //         <img src={closeIcon} alt="" />
    //         </S.ButtonCheck>
    //     </S.InputNumberArea>
    // )
  };
  return (
    <S.InputWrapper>
      <Typography weight={700} htmlFor={props.name} type="label">
        {props.label}
      </Typography>
      {typeHandler[props.type!]}
    </S.InputWrapper>
  );
};

export default Input;
