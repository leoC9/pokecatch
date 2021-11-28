import React, { useState, useEffect } from "react";
import { types } from "util";
import Type from "../Type";
import Typography from "../Typography";
import * as S from "./styles";
import { ReactComponent as Pokeball } from "../../Assets/images/Pokeball.svg";
import closeIcon from "../../Assets/images/close.png";

interface ModalProps {
  modalActive: boolean;
  setModalActive: Function;
  pokemon: any;
}

const Modal = (props: ModalProps) => {
  const [abilities, setAbilities] = useState();
  let abilityList: any = [];
  const infoArray = [
    {
      label: "HP",
      title: `${props.pokemon?.stats[0].base_stat}/${props.pokemon?.stats[0].base_stat}`,
    },
    {
      label: "Altura",
      title: `${
        props.pokemon?.height > 10
          ? props.pokemon?.height
          : `0.${props.pokemon?.height}`
      } m`,
    },
    {
      label: "Peso",
      title: `${props.pokemon?.weight} kg`,
    },
  ];
  console.log(props.pokemon);
  useEffect(() => {
    for (let i = 0; i < props.pokemon?.abilities.length; i++) {
      const element = props.pokemon.abilities[i];
      abilityList.push(element.ability.name);
      abilityList.join();
    }
    setAbilities(abilityList.join(", "));
  }, [props.modalActive]);
  return props.modalActive ? (
    <S.Background>
      <S.Modal>
        <S.ModalArea>
          <S.ModalHeader>
            <S.ImageArea>
              <S.Pokemon src={props.pokemon?.sprites.front_default} />
            </S.ImageArea>
            <S.CloseButton onClick={() => props.setModalActive(false)}>
              <img src={closeIcon} />
            </S.CloseButton>
          </S.ModalHeader>
          <S.ModalContent>
            <Typography type="title">
              {props.pokemon?.name.toUpperCase()}
            </Typography>
            <S.InfoList>
              {infoArray.map((item, key) => (
                <li key={key}>
                  <Typography type="label" weight={700}>
                    {item.label}
                  </Typography>
                  <Typography type="title">{item.title}</Typography>
                </li>
              ))}
            </S.InfoList>
            <S.DividerArea>
              <S.Divider />
              <Typography type="subtitle">TIPO</Typography>
              <S.Divider />
            </S.DividerArea>
            <S.TypeArea>
              {props.pokemon?.types.map((item: any) => (
                <Type type={item.type.name} />
              ))}
            </S.TypeArea>
            <S.DividerArea>
              <S.Divider />
              <Typography type="subtitle">HABILIDADES</Typography>
              <S.Divider />
            </S.DividerArea>
            <S.AbilitiesArea>
              <Typography type="label" weight={700}>
                {abilities}
              </Typography>
            </S.AbilitiesArea>
          </S.ModalContent>
        </S.ModalArea>
        <S.PokeballButton>
          <Pokeball />
        </S.PokeballButton>
      </S.Modal>
    </S.Background>
  ) : (
    <></>
  );
};

export default Modal;
