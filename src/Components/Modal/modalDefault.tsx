import React, { useState, useEffect } from "react";
import Type from "../Type";
import Typography from "../Typography";
import * as S from "./styles";
import { ReactComponent as Pokeball } from "../../Assets/images/Pokeball.svg";
import closeIcon from "../../Assets/images/close.png";
import checkIcon from "../../Assets/images/checkIcon.png";
import editIcon from "../../Assets/images/editIcon.png";
import shieldIcon from "../../Assets/images/shield.png";
import swordIcon from "../../Assets/images/sword.png";
import speedIcon from "../../Assets/images/speed.png";
import { useDispatch, useSelector } from "react-redux";
import {
  clearPokemon,
  removePokemon,
  setCatchedPokemon,
  updatePokemon,
} from "../../Stores/pokemonActions";
import Button from "../Button";
import Input from "../Input";

type modalData = {
  active: boolean;
  type: string;
};

interface ModalProps {
  modalProps: modalData;
  setModalProps: Function;
}
type PokemonTypes = {
  type: { name: string };
};
type PokemonStats = {
  stat: { name: string };
  base_stat?: string;
};

type modalDataOptions = {
  [key: string]: any;
};
const ModalDefault = (props: ModalProps) => {
  const { pokemon } = useSelector(({ pokemon }: any) => pokemon);
  const [abilities, setAbilities] = useState();
  const [changeNameActive, setChangeNameActive] = useState(false);
  const [newNameValue, setNewNameValue] = useState<string>("");

  const dispatch = useDispatch();

  let abilityList: any = [];

  function captureHandleClick() {
    dispatch(setCatchedPokemon(pokemon));
    props.setModalProps({ ...props.modalProps, active: false });
    dispatch(clearPokemon());
  }

  function editHandleClick() {
    dispatch(removePokemon(pokemon));
    props.setModalProps({ ...props.modalProps, active: false });
  }

  function checkButtonHandleClick() {
    if (newNameValue !== "") {
      pokemon.name = newNameValue;
      dispatch(updatePokemon(pokemon));
    }
    setChangeNameActive(false);
  }

  const infoArray = [
    {
      label: "HP",
      title: `${pokemon?.stats[0].base_stat}/${pokemon?.stats[0].base_stat}`,
    },
    {
      label: "Altura",
      title: `${
        pokemon?.height > 10 ? pokemon?.height : `0.${pokemon?.height}`
      } m`,
    },
    {
      label: "Peso",
      title: `${pokemon?.weight} kg`,
    },
  ];

  const typeDataHandler: modalDataOptions = {
    capture: {
      button: <Pokeball onClick={captureHandleClick} />,
      nameArea: (
        <Typography type="title">{pokemon?.name.toUpperCase()}</Typography>
      ),
    },
    edit: {
      button: (
        <Button onClick={editHandleClick} width={22.1}>
          LIBERAR POKEMON
        </Button>
      ),
      nameArea: changeNameActive ? (
        <S.ChangeNameArea>
          <Input
            value={newNameValue.toUpperCase()}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewNameValue(e.target.value)
            }
            type="default"
          />
          <button onClick={checkButtonHandleClick}>
            <img src={checkIcon} alt="" />
          </button>
          <button
            onClick={() => {
              setNewNameValue(pokemon?.name);
              setChangeNameActive(false);
            }}
          >
            <img src={closeIcon} alt="close" />
          </button>
        </S.ChangeNameArea>
      ) : (
        <S.TitlteEditArea>
          <Typography type="title">{pokemon?.name.toUpperCase()}</Typography>
          <img
            onClick={() => {
              setChangeNameActive(true);
              setNewNameValue(pokemon?.name);
            }}
            src={editIcon}
            alt="editName"
          />
        </S.TitlteEditArea>
      ),
      specifiedStats: (
        <>
          <S.DividerArea>
            <S.Divider hrWidth="30%" />
            <Typography type="subtitle">ESTATÍSTICAS</Typography>
            <S.Divider hrWidth="30%" />
          </S.DividerArea>
          <S.StatsArea>
            <table>
              {pokemon?.stats.map((item: PokemonStats, i: number) => {
                const statsTable: modalDataOptions = {
                  attack: { icon: swordIcon, name: "Ataque" },
                  defense: { icon: shieldIcon, name: "Defesa" },
                  "special-attack": {
                    icon: swordIcon,
                    name: "Ataque especial",
                  },
                  "special-defense": {
                    icon: shieldIcon,
                    name: "Defesa especial",
                  },
                  speed: { icon: speedIcon, name: "Velocidade" },
                };
                if (i > 0) {
                  return (
                    <tr>
                      <td>
                        <img
                          src={statsTable[item.stat.name]?.icon}
                          alt={item.stat.name}
                        />
                        <Typography type="label" weight={700}>
                          {statsTable[item.stat.name]?.name}
                        </Typography>
                      </td>
                      <td>
                        <Typography type="subtitle">
                          {item?.base_stat}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
                return <></>;
              })}
            </table>
          </S.StatsArea>
        </>
      ),
    },
  };
  useEffect(() => {
    for (let i = 0; i < pokemon?.abilities.length; i++) {
      const element = pokemon.abilities[i];
      abilityList.push(element.ability.name);
    }

    setAbilities(abilityList.join(", "));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.modalProps.active]);

  return (
    <S.Background>
      <S.Modal>
        <S.ModalArea>
          <S.ModalHeader>
            <S.ImageArea>
              <S.Pokemon src={pokemon?.sprites.front_default} />
            </S.ImageArea>
            <S.CloseButton
              onClick={() => {
                props.setModalProps({ ...props.modalProps, active: false });
                dispatch(clearPokemon());
              }}
            >
              <img src={closeIcon} alt="close" />
            </S.CloseButton>
          </S.ModalHeader>
          <S.ModalContent>
            {typeDataHandler[props.modalProps.type]?.nameArea}
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
            <S.ElementArea>
              {pokemon?.types.map((item: PokemonTypes, i: number) => (
                <Type key={i} type={item.type.name} />
              ))}
            </S.ElementArea>
            <S.DividerArea>
              <S.Divider hrWidth="30%" />
              <Typography type="subtitle">HABILIDADES</Typography>
              <S.Divider hrWidth="30%" />
            </S.DividerArea>
            <S.ElementArea>
              <Typography type="label" weight={700}>
                {abilities}
              </Typography>
            </S.ElementArea>
            {typeDataHandler[props.modalProps.type]?.specifiedStats}
          </S.ModalContent>
        </S.ModalArea>
        <S.PokeballButton typeModal={props.modalProps.type}>
          {typeDataHandler[props.modalProps.type]?.button}
        </S.PokeballButton>
      </S.Modal>
    </S.Background>
  );
};
export default ModalDefault;
