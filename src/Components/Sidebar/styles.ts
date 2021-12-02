import styled from "styled-components";

interface LiProps {
  pokemonColor?: boolean;
  src?: string;
}

export const SideBarWrapper = styled.aside`
  background-color: transparent;
  position: absolute;
  top: 34px;
  left: 24px;
  display: flex;
  flex-direction: column;
`;

export const SideBarList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const SideBarItem = styled.li<LiProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5.3rem;
  height: 5.3rem;
  border: 4px solid
    ${(props) =>
      ({ theme }) =>
        props.pokemonColor ? theme.colors.default : theme.colors.dark};
  border-radius: 12.8rem;
  font-size: 4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark};
  cursor: ${(props) => (props.pokemonColor ? "pointer" : "default")};
  transition: all 0.2s;
  background-color: ${(props) =>
    ({ theme }) =>
      props.pokemonColor ? theme.colors.neutrals[200] : theme.colors.default};
  background-image: url(${(props) => props.src || null});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  :hover {
    background-color: ${(props) =>
      ({ theme }) =>
        props.pokemonColor ? theme.colors.default : theme.colors.dark};
    color: ${({ theme }) => theme.colors.default};
  }
  :hover svg {
    path {
      fill: ${({ theme }) => theme.colors.default};
    }
  }
  :not(last-of-type) {
    margin-bottom: 1.6rem;
  }
`;
