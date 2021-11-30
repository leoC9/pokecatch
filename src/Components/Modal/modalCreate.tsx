import React from "react";
import * as S from "./styles";
import newImageIcon from "../../Assets/images/camera.png";
import closeIcon from "../../Assets/images/close.png";
import { useDispatch } from "react-redux";
import { clearPokemon } from "../../Stores/pokemonActions";
import Button from "../Button";
import Input from "../Input";
import Typography from "../Typography";

type modalData = {
  active: boolean;
  type: string;
};

interface ModalProps {
  modalProps: modalData;
  setModalProps: Function;
}

interface PokeTeste {
  pokemon: any;
}

type modalDataOptions = {
  [key: string]: any;
};

const ModalCreate = (props: ModalProps) => {
  const dispatch = useDispatch();
  return (
    <S.Background>
      <S.Modal>
        <S.ModalArea>
          <S.ModalHeader>
            <S.ImageArea>
              <S.Camera src={newImageIcon} />
              <Button type="addButton" modalButton={true} />
            </S.ImageArea>
            <S.CloseButton
              onClick={() => {
                props.setModalProps({ ...props.modalProps, active: false });
                dispatch(clearPokemon());
              }}
            >
              <img src={closeIcon} />
            </S.CloseButton>
          </S.ModalHeader>
          <S.ModalContent>
            <S.ContentData>
              <Input
                label="Nome"
                name="nome"
                placeholder="Nome"
                type="default"
              />
              <Input label="HP" name="HP" placeholder="HP" type="number" />
              <Input
                label="Peso"
                name="peso"
                placeholder="Peso"
                measure="Kg"
                type="number"
              />
              <Input
                label="Altura"
                placeholder="Altura"
                name="altura"
                measure="Cm"
                type="number"
              />
              <S.DividerArea>
                <S.Divider />
                <Typography type="subtitle">TIPO</Typography>
                <S.Divider />
              </S.DividerArea>
              <Input type="multiSelect" />
              <S.DividerArea>
                <S.Divider hrWidth="30%" />
                <Typography type="subtitle">HABILIDADES</Typography>
                <S.Divider hrWidth="30%" />
              </S.DividerArea>
              <Input type="default" placeholder="Habilidade 1" />
              <Input type="default" placeholder="Habilidade 2" />
              <Input type="default" placeholder="Habilidade 3" />
              <Input type="default" placeholder="Habilidade 4" />
              <S.DividerArea>
                <S.Divider hrWidth="30%" />
                <Typography type="subtitle">ESTATÍSTICAS</Typography>
                <S.Divider hrWidth="30%" />
              </S.DividerArea>
              <Input
                label="defesa"
                name="defesa"
                placeholder="00"
                type="number"
              />
              <Input
                label="ataque"
                name="ataque"
                placeholder="00"
                type="number"
              />
              <Input
                label="defesa especial"
                name="defesa especial"
                placeholder="00"
                type="number"
              />
              <Input
                label="ataque especial"
                name="ataque especial"
                placeholder="00"
                type="number"
              />
              <Input
                label="velocidade"
                name="velocidade"
                placeholder="00"
                type="number"
              />
              <Button width={22.1}>Criar Pokemon</Button>
            </S.ContentData>
          </S.ModalContent>
        </S.ModalArea>
        {/* <S.PokeballButton typeModal={props.modalProps.type}></S.PokeballButton> */}
      </S.Modal>
    </S.Background>
  );
};

export default ModalCreate;
