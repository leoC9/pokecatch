import React from "react";
import * as S from "./styles";

interface TypographyProps {
  type?: string;
  children?: string;
  weight?: number;
  color?: string;
}

type typographyOptions = {
  [key: string]: JSX.Element;
};

const Typography = (props: TypographyProps) => {
  const typeHandler: typographyOptions = {
    title: <S.Title color={props.color}>{props.children}</S.Title>,
    subtitle: <S.SubTitle color={props.color}>{props.children}</S.SubTitle>,
    label: (
      <S.Label color={props.color} weight={props.weight}>
        {props.children}
      </S.Label>
    ),
  };
  return typeHandler[props.type!];
};

export default Typography;
