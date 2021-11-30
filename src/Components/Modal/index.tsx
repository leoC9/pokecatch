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
import ModalDefault from "./modalDefault";
import ModalCreate from "./modalCreate";

type modalData = {
  active: boolean;
  type: string;
};

interface ModalProps {
  modalProps: modalData;
  setModalProps: Function;
}

type modalDataOptions = {
  [key: string]: any;
};
const Modal = (props: ModalProps) => {
  const modalTypeHandler: modalDataOptions = {
    capture: (
      <ModalDefault
        modalProps={props.modalProps}
        setModalProps={props.setModalProps}
      />
    ),
    edit: (
      <ModalDefault
        modalProps={props.modalProps}
        setModalProps={props.setModalProps}
      />
    ),
    add: (
      <ModalCreate
        modalProps={props.modalProps}
        setModalProps={props.setModalProps}
      />
    ),
  };
  return props.modalProps.active ? (
    modalTypeHandler[props.modalProps.type]
  ) : (
    <></>
  );
};

export default Modal;
