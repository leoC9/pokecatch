import React from "react";
import Button from "../Button";
import { ReactComponent as Interrogation } from "../../Assets/images/interrogationIcon.svg";

import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getCatchedPokemon } from "../../Stores/pokemonActions";

interface SidebarProps {
  setSlotFull: Function;
  setModalProps: Function;
}

type PokemonTypes = {
  name: string;
  stats: Array<{ base_stat: number; stat: { name: string } }>;
  height: number;
  wheight: number;
  abilities: Array<{ ability: { name: string } }>;
  sprites: { front_default: string };
  types: Array<{ type: { name: string } }>;
};

const Sidebar = (props: SidebarProps) => {
  const dispatch = useDispatch();
  const { catchedPokemons } = useSelector(({ pokemon }: any) => pokemon);
  let count = ["1", "2", "3", "4", "5", "6"];

  function handleClick() {
    if (catchedPokemons.length === 6) {
      props.setSlotFull(true);
      setTimeout(() => {
        props.setSlotFull(false);
      }, 2500);
      return;
    }
    props.setModalProps({ active: true, type: "add" });
  }

  function editPokemon(pokemon: object) {
    dispatch(getCatchedPokemon(pokemon));
    props.setModalProps({ active: true, type: "edit" });
  }

  return (
    <S.SideBarWrapper>
      <S.SideBarList>
        {catchedPokemons.map((item: PokemonTypes, i: number) => {
          count.pop();
          return (
            <S.SideBarItem
              key={i}
              onClick={() => editPokemon(item)}
              pokemonColor={true}
              src={item?.sprites.front_default}
            ></S.SideBarItem>
          );
        })}
        {count.map((i: string) => (
          <S.SideBarItem key={i}>
            <Interrogation />
          </S.SideBarItem>
        ))}
      </S.SideBarList>

      <Button onClick={handleClick} type="addButton" />
    </S.SideBarWrapper>
  );
};

export default Sidebar;
