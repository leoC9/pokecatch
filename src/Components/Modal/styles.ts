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

export const Modal = styled.div`
  opacity: 0;
  transform: translateY(10rem);
  animation: anime 0.5s forwards;
  width: 36rem;
  height: 55.9rem;
  position: relative;
  background: ${({ theme }) => theme.colors.neutrals[200]};

  border-radius: 8px;
  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
  }
  @keyframes anime {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;
export const ModalHeader = styled.header`
  width: 36rem;
  height: 55.9rem;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: 8px;
  display: flex;
  position: absolute;
  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
  }
`;

export const ModalArea = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  border-radius: 8px;
  display: flex;
  position: relative;
`;

export const ModalContent = styled.main`
  width: 100%;
  height: 40.6rem;
  padding: 13.2rem 2.5rem 16.2rem 2.5rem;
  display: flex;
  flex-direction: column;
  position: relative;

  z-index: 2;
  align-items: center;
  align-self: flex-end;
  background: ${({ theme }) => theme.colors.neutrals[200]};
  border-radius: 24px 24px 8px 8px;
  & > img {
    position: absolute;
    right: 100px;
    top: 166px;
    :hover {
      cursor: pointer;
    }
  }
  & > section:last-child {
    padding-bottom: 16rem;
  }
  @media (max-width: 800px) {
    padding: 4.2rem 2.5rem 16.2rem 2.5rem;
  }
`;
export const ContentData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 2;
  align-items: center;

  padding-bottom: 6.8rem;
  & > button {
    margin-top: 6rem;
  }
`;

export const ImageArea = styled.figcaption`
  width: 24.7rem;
  height: 24.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: 5px solid ${({ theme }) => theme.colors.default};
  top: 32px;
  right: calc(50% - 24.7rem / 2);
  background: ${({ theme }) => theme.colors.neutrals[200]};
  border-radius: 50%;
  z-index: 3;
  button {
    position: absolute;
    width: 3.3rem;
    height: 3.3rem;
    right: 67px;
    bottom: 67px;
  }
`;

export const ChangeNameArea = styled.div`
  max-width: 31rem;
  display: flex;
  filter: drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31))
    drop-shadow(0px 20px 32px rgba(9, 30, 66, 0.25));
  justify-content: center;
  height: 4.8rem;
  align-items: center;
  z-index: 3;
  margin-top: 1.8rem;
  div {
    margin-top: 0;
    flex: 2;
    height: 100%;
  }
  input {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.neutrals[600]};
    margin-top: 0;
    border-radius: 4px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.8rem;
    height: 100%;
    margin-left: 0.8rem;
    background: ${({ theme }) => theme.colors.neutrals[300]};
    border-radius: 4px;
    border: none;
    :hover {
      background: ${({ theme }) => theme.colors.neutrals[400]};
      cursor: pointer;
    }
    :active {
      background: ${({ theme }) => theme.colors.neutrals[500]};
    }
    img {
      width: 1.6rem;
    }
  }
  button:nth-child(3) {
    img {
      width: 1.38rem;
    }
  }
`;
export const TitlteEditArea = styled.div`
  display: flex;
  margin-top: 2.4rem;
  justify-content: flex-start;
  align-items: center;
  img {
    margin-left: 2.8rem;
    :hover {
      cursor: pointer;
    }
  }
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

export const Camera = styled.img`
  width: auto;
  transition: 1000ms ease-in-out;
  height: auto;
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
  h1 {
    margin-top: 0.6rem;
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
  position: absolute;
  background: transparent;
  border: none;
  transition: 0.2s ease-in-out;
  bottom: ${(props) => (props.typeModal === "capture" ? "0" : "52px")};
  z-index: 10;
  right: calc(
    50% - ${(props) => (props.typeModal === "capture" ? "14.5rem" : "22.1rem")} /
      2
  );
  :hover {
    transform: scale(107%);
    cursor: pointer;
  }
  :active {
    transform: scale(90%);
  }
`;
