import styled from "styled-components";

interface ButtonProps {
  size?: number;
  modalButton?: boolean;
}
export const Button = styled.button<ButtonProps>`
  width: ${(props) => props.size || 12.4}rem;
  height: 5.6rem;
  border-radius: 42px;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.actionDefault};
  transition: 250ms ease-in-out;
  color: ${({ theme }) => theme.colors.neutrals[100]};
  -webkit-box-shadow: 0px 25px 25px 2px rgba(0, 0, 0, 0.18);
  box-shadow: 0px 25px 25px 2px rgba(0, 0, 0, 0.18);
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2.4rem;
  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.actionDark};
    transform: translateY(2px);
  }
`;
export const AddButton = styled.button<ButtonProps>`
  width: ${(props) => props.size || 5.3}rem;
  height: 5.3rem;
  position: relative;
  border-radius: 50%;
  border: ${(props) =>
    ({ theme }) =>
      props.modalButton
        ? `4px solid ${theme.colors.neutrals[100]}`
        : `4px solid ${theme.colors.actionDark}`};
  background: ${(props) =>
    ({ theme }) =>
      props.modalButton
        ? theme.colors.neutrals[100]
        : theme.colors.actionDefault};
  transition: 250ms ease-in-out;
  color: ${({ theme }) => theme.colors.neutrals[100]};
  -webkit-box-shadow: 0px 25px 25px 2px rgba(0, 0, 0, 0.18);
  box-shadow: ${(props) =>
    props.modalButton ? "none" : "0px 25px 25px 2px rgba(0, 0, 0, 0.18)"};
  :hover {
    cursor: pointer;
    background: ${(props) =>
      ({ theme }) =>
        props.modalButton
          ? theme.colors.neutrals[100]
          : theme.colors.actionDark};
    border: ${(props) =>
      ({ theme }) =>
        props.modalButton
          ? `4px solid ${theme.colors.neutrals[100]}`
          : `4px solid ${theme.colors.actionDark}`};
    transform: ${(props) => (props.modalButton ? "scale(110%)" : "none")};
  }
  img {
    width: ${(props) => (props.modalButton ? "100%" : "none")};
    height: ${(props) => (props.modalButton ? "100%" : "none")};
  }
  input {
    position: absolute;
    opacity: 0;
    width: 100%;
    left: 0;
    height: 100%;
    :hover {
      cursor: pointer;
    }
  }
`;
