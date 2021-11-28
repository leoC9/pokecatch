import styled from "styled-components";

interface TypeProps {
  type: string;
}

export const TypeContainer = styled.div<TypeProps>`
  width: 10rem;
  height: 3.2rem;
  text-align: center;
  padding: 0.7rem 0;
  border-radius: 42px;
  color: ${({ theme }) => theme.colors.neutrals[100]};
  text-transform: uppercase;
  background-color: ${(props) =>
    ({ theme }) =>
      theme.colors.types[props.type]};
  font-size: 1.2rem;
  line-height: 1.6rem;
  font-weight: 600;
`;
