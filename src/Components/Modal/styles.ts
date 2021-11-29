import styled from "styled-components";

interface ModalProps {
  typeModal?: string;
  hrWidth?: string;
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

export const Modal = styled.figcaption`
  width: 36rem;
  height: 55.9rem;
  position: relative;
  background: ${({ theme }) => theme.colors.neutrals[200]};

  border-radius: 8px;
`;
export const ModalHeader = styled.header`
  /* width: 30vw; */
  width: 36rem;
  /* height: 77vh; */
  height: 55.9rem;
  background: ${({ theme }) => theme.colors.gradient};
  /* border-radius: 13px; */
  border-radius: 8px;
  display: flex;
  position: absolute;
`;

export const ModalArea = styled.div`
  //TODO AJUSTAR
  /* width: 30vw; */
  width: 100%;
  /* height: 77vh; */

  height: 100%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  /* border-radius: 13px; */
  border-radius: 8px;
  display: flex;
  position: relative;
`;

export const ModalContent = styled.main`
  width: 100%;
  height: 40.6rem;
  padding: 16.2rem 2.5rem 16.2rem 2.5rem;
  display: flex;
  flex-direction: column;
  position: relative;

  z-index: 2;
  align-items: center;
  align-self: flex-end;
  background: ${({ theme }) => theme.colors.neutrals[200]};
  /* border-radius: 45px 45px 13px 13px; */
  border-radius: 24px 24px 8px 8px;
  section:last-child {
    padding-bottom: 16rem;
  }
`;

export const ImageArea = styled.figcaption`
  /* width: 33rem; */
  width: 24.7rem;
  /* height: 33rem; */
  height: 24.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: 5px solid ${({ theme }) => theme.colors.default};
  top: 32px;
  /* right: calc(50% - 33rem / 2); */
  right: calc(50% - 24.7rem / 2);
  background: ${({ theme }) => theme.colors.neutrals[200]};
  border-radius: 50%;
  z-index: 3;
`;

export const CloseButton = styled.button`
  position: absolute;
  background: ${({ theme }) => theme.colors.neutrals[200]};
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.neutrals[600]};
  top: 12px;
  z-index: 10;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin: 0 auto;
  }
  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.neutrals[600]};
  }
`;

export const Pokemon = styled.img`
  width: 16rem;
  transition: 1000ms ease-in-out;
  height: 16rem;
`;

export const InfoList = styled.ul`
  width: 100%;
  display: flex;
  height: 4.8rem;
  margin-top: 3.6rem;
  li:nth-child(2) {
    border-left: 1px solid ${({ theme }) => theme.colors.neutrals[500]};
    border-right: 1px solid ${({ theme }) => theme.colors.neutrals[500]};
  }
  li {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1;
  }
`;

export const DividerArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 4.2rem;
  justify-content: space-between;
`;
export const Divider = styled.hr<ModalProps>`
  width: ${(props) => props.hrWidth || "40%"};
  height: 0.1rem;
  background-color: ${({ theme }) => theme.colors.neutrals[500]};
  border: none;
`;

export const ElementArea = styled.section`
  width: 100%;
  max-width: 23rem;
  height: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2.7rem;
`;
//TODO - MUDAR A ORDEM DA LISTA
export const StatsArea = styled.section`
  width: 100%;
  margin-top: 2.7rem;
  table {
    width: 100%;
    tr {
      td:nth-child(1) {
        text-align: left;
        display: flex;
        align-items: center;
        label {
          margin-left: 1.7rem;
        }
        margin-bottom: 1.6rem;
      }
      td:nth-child(2) {
        text-align: right;
      }
    }
    tr:nth-child(even) {
      td {
        label {
          margin-left: 1.323rem;
        }
      }
    }
    tr:last-child {
      td {
        label {
          margin-left: 1.3rem;
        }
        margin-bottom: 0;
      }
    }
  }
`;

export const Loader = styled.div`
  top: 0;
  left: 0;
  background: rgba(245, 245, 245, 0.34);
  div {
    background-image: linear-gradient(to right, #e6e6e6, #000000, #e6e6e6);
    display: inline-block;
    background-size: 200%;
    animation: preloader-block 2s linear 0s infinite reverse forwards;
  }
  @keyframes preloader-block {
    from {
      background-position: 0%, 0;
    }
    to {
      background-position: 170%, 0;
    }
  }
`;

export const PokeballButton = styled.button<ModalProps>`
  /* width: 12rem;
  height: 12rem; */
  position: absolute;
  background: transparent;
  border: none;
  bottom: ${(props) => (props.typeModal === "capture" ? "0" : "52px")};
  z-index: 10;
  right: calc(
    50% - ${(props) => (props.typeModal === "capture" ? "14.5rem" : "22.1rem")} /
      2
  );
  :hover {
    cursor: pointer;
  }
`;
