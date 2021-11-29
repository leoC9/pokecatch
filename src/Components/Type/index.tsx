import React from "react";
import Typography from "../Typography";
import { TypeTag } from "./styles";

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
  console.log("type", props.type);

  return (
    <TypeTag type={props.type}>
      <Typography
        type="label"
        weight={700}
        color={props.type === "normal" || props.type === "ice" ? "1100" : "100"}
      >
        {typeNameHandler[props.type]}
      </Typography>
    </TypeTag>
  );
};

export default Type;
