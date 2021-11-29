import styled from "styled-components";

interface TypeProps {
  type: string;
}

export const TypeTag = styled.div<TypeProps>`
  width: 10rem;
  height: 3.2rem;
  text-align: center;
  padding: 0.7rem 0;
  border-radius: 42px;
  text-transform: uppercase;
  background-color: ${(props) =>
    ({ theme }) =>
      theme.colors.types[props.type]};
`;
