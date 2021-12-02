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
  [key: string]: JSX.Element;
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
