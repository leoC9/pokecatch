import styled from "styled-components";

interface LabelProps {
  weight?: number;
}

export const Title = styled.h1`
  font-size: 1.8rem;
  line-height: 2.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutrals[700]};
`;
export const SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.neutrals[700]};
  font-size: 1.5rem;
  line-height: 2.4rem;
  font-weight: 600;
`;
export const Label = styled.label<LabelProps>`
  color: ${({ theme }) => theme.colors.neutrals[700]};
  font-size: 1.2rem;
  line-height: 1.6rem;
  font-weight: ${(props) => props.weight || 600};
  text-transform: uppercase;
`;
