import React from "react";
import Typography from "../Typography";
import buttonNumberIcon from "../../Assets/images/chevronDownBlack.png";
import Select from "react-select";
import { FieldTypes } from "../GlobalTypes/field";
import * as S from "./styles";

interface InputProps {
  name?: string;
  value?: string | number;
  label?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  type?: string;
  measure?: string;
  width?: number;
  borderColor?: number;
  field?: FieldTypes;
  setField?: any;
  errorMessage?: string;
}

type typeHandlerOptions = {
  [key: string]: JSX.Element;
};

const Input = (props: InputProps) => {
  const typeOptions = [
    { value: "normal", label: "normal" },
    { value: "bug", label: "inseto" },
    { value: "dark", label: "sombrio" },
    { value: "dragon", label: "dragão" },
    { value: "electric", label: "elétrico" },
    { value: "fairy", label: "fada" },
    { value: "figthing", label: "lutador" },
    { value: "fire", label: "fogo" },
    { value: "flying", label: "voador" },
    { value: "ghost", label: "fantasma" },
    { value: "grass", label: "planta" },
    { value: "ground", label: "terra" },
    { value: "ice", label: "gelo" },
    { value: "poison", label: "venenoso" },
    { value: "psychic", label: "psíquico" },
    { value: "rock", label: "pedra" },
    { value: "steel", label: "aço" },
    { value: "water", label: "água" },
  ];

  function changeNumber(value: number) {
    if (props.field) {
      const number = parseInt(props.field[props.name!]);
      const calc = (isNaN(number) ? 0 : number) + value;

      props.setField({
        ...props.field,
        [props.name!]: calc > 0 ? calc : 0,
      });
    }
  }

  function inputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (props.onChange) {
      props.onChange(e);
    }
  }
  function inputNumberChange(e: React.ChangeEvent<HTMLInputElement>) {
    const re = /^[0-9\b]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      if (props.onChange) {
        props.onChange(e);
      }
    }
  }

  const typeHandler: typeHandlerOptions = {
    default: (
      <S.InputDefault
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        onChange={inputChange}
        value={props.value}
        type="text"
        onClick={props.onClick}
      />
    ),
    number: (
      <S.InputNumberArea>
        <S.InputNumber
          id={props.name}
          name={props.name}
          placeholder={props.placeholder}
          onChange={inputNumberChange}
          onClick={props.onClick}
          value={props.value}
        />
        <S.ButtonArea>
          <Typography type="subtitle">{props.measure}</Typography>
          <S.Button name={props.name} onClick={() => changeNumber(1)}>
            <img src={buttonNumberIcon} alt="addNumber" />
          </S.Button>
          <S.Button onClick={() => changeNumber(-1)}>
            <img src={buttonNumberIcon} alt="decreaseNumber" />
          </S.Button>
        </S.ButtonArea>
      </S.InputNumberArea>
    ),
    multiSelect: (
      <S.MultiSelectArea
        error={props.errorMessage ? true : false}
        onClick={props.onClick}
      >
        <Select
          isMulti
          name={props.name}
          onChange={props.setField && props.setField}
          options={typeOptions}
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
      </S.MultiSelectArea>
    ),
  };

  return (
    <S.InputWrapper error={props.errorMessage ? true : false}>
      <Typography weight={700} htmlFor={props.name} type="label">
        {props.label}
      </Typography>
      {typeHandler[props.type!]}
      {props.errorMessage && (
        <Typography type="subtitle">{props.errorMessage}</Typography>
      )}
    </S.InputWrapper>
  );
};

export default Input;
