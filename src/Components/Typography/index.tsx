import React from "react";
import * as S from "./styles";

interface TypographyProps {
  type?: string;
  children?: string;
  weight?: number;
  color?: number;
}

type typographyOptions = {
  [key: string]: JSX.Element;
};

const Typography = (props: TypographyProps) => {
  const typeHandler: typographyOptions = {
    title: <S.Title>{props.children}</S.Title>,
    subtitle: <S.SubTitle>{props.children}</S.SubTitle>,
    label: <S.Label weight={props.weight}>{props.children}</S.Label>,
  };
  return typeHandler[props.type!];
};

export default Typography;
