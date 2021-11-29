import styled from "styled-components";

interface TypographyProps {
  weight?: number;
  color?: string;
}

export const Title = styled.h1<TypographyProps>`
  font-size: 1.8rem;
  line-height: 2.4rem;
  font-weight: ${(props) => props.weight || 700};
  color: ${(props) =>
    ({ theme }) =>
      theme.colors.neutrals[props.color!] || theme.colors.neutrals[700]};
`;
export const SubTitle = styled.h2<TypographyProps>`
  color: ${(props) =>
    ({ theme }) =>
      theme.colors.neutrals[props.color!] || theme.colors.neutrals[700]};
  font-size: 1.5rem;
  line-height: 2.4rem;
  font-weight: ${(props) => props.weight || 600};
`;
export const Label = styled.label<TypographyProps>`
  color: ${(props) =>
    ({ theme }) =>
      theme.colors.neutrals[props.color!] || theme.colors.neutrals[700]};
  font-size: 1.2rem;
  line-height: 1.6rem;
  font-weight: ${(props) => props.weight || 600};
  text-transform: uppercase;
`;
