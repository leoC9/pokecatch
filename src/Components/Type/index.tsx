import React from "react";
import Typography from "../Typography";
import { TypeContainer } from "./styles";

interface TypeProps {
  type: string;
}

type typeNameHandlerOptions = {
  [key: string]: string;
};

const Type = (props: TypeProps) => {
  const typeNameHandler: typeNameHandlerOptions = {
    normal: "normal",
    bug: "inseto",
    dark: "sombrio",
    dragon: "dragão",
    electric: "elétrico",
    fairy: "fada",
    fighting: "lutador",
    fire: "fogo",
    flying: "voador",
    ghost: "fantasma",
    grass: "planta",
    ground: "terra",
    ice: "gelo",
    poison: "venenoso",
    psychic: "psíquico",
    rock: "pedra",
    steel: "aço",
    water: "água",
  };
  return (
    <TypeContainer type={props.type}>
      {typeNameHandler[props.type]}
    </TypeContainer>
  );
};

export default Type;
