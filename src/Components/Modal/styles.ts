import styled from "styled-components";

interface ModalProps {
  height?: number;
  background?: string;
}

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.modalBackground};
  position: fixed;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
`;
export const ModalArea = styled.div<ModalProps>`
  width: 54rem;
  height: 84rem;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: 13px;
  display: flex;
  position: relative;
`;
export const Container = styled.main<ModalProps>`
  width: 100%;
  height: 70%;
  align-self: flex-end;
  background: ${({ theme }) => theme.colors.neutrals[100]};
  border-radius: 45px 45px 13px 13px;
`;
export const ImageArea = styled.figcaption<ModalProps>`
  width: 37.2rem;
  height: 37.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: 5px solid ${({ theme }) => theme.colors.default};
  top: 65px;
  right: calc(50% - 37.2rem / 2);
  background: ${({ theme }) => theme.colors.neutrals[100]};
  border-radius: 50%;
`;
