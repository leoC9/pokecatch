import React from "react";
import * as S from "./styles";

interface ModalProps {
  modalActive: boolean;
  setModalActive: Function;
}

const Modal = (props: ModalProps) => {
  return props.modalActive ? (
    <S.Background onClick={() => props.setModalActive(false)}>
      <S.ModalArea>
        <S.Container></S.Container>
        <S.ImageArea>BLABLA</S.ImageArea>
      </S.ModalArea>
    </S.Background>
  ) : (
    <></>
  );
};

export default Modal;
