import React, { useState } from "react";

import Button from "../Button";

import iconPlus from "../../Assets/images/plus.png";
import { ReactComponent as Interrogation } from "../../Assets/images/interrogationIcon.svg";

import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getCatchedPokemon } from "../../Stores/pokemonActions";

interface SidebarProps {
  setSlotFull: Function;
  setModalProps: Function;
}

const Sidebar = (props: SidebarProps) => {
  const dispatch = useDispatch();
  const { catchedPokemons } = useSelector(({ pokemon }: any) => pokemon);
  let count = ["1", "2", "3", "4", "5", "6"];
  console.log({ count });

  function handleClick() {
    if (catchedPokemons.length === 6) {
      props.setSlotFull(true);
      setTimeout(() => {
        props.setSlotFull(false);
      }, 2500);
      return;
    }
  }

  function editPokemon(pokemon: object) {
    dispatch(getCatchedPokemon(pokemon));
    props.setModalProps({ active: true, type: "edit" });
  }

  return (
    <S.SideBarWrapper>
      <S.SideBarList>
        {catchedPokemons.map((item: any) => {
          console.log(item);
          count.pop();
          return (
            <S.SideBarItem
              onClick={() => editPokemon(item)}
              pokemonColor={true}
              src={item.sprites.front_default}
            ></S.SideBarItem>
          );
        })}
        {count.map((i: any) => (
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
