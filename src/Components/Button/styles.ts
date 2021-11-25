import styled from "styled-components";

interface ButtonProps {
  width?: number;
}
export const Button: any = styled.button<ButtonProps>`
  width: ${(props) => props.width || 12.4}rem;
  height: 5.6rem;
  border-radius: 42px;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.actionDefault};
  font-weight: 700;
  font-size: 1.8rem;
  transition: 250ms ease-in-out;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colors.neutrals[100]};
  -webkit-box-shadow: 0px 25px 25px 2px rgba(0, 0, 0, 0.18);
  box-shadow: 0px 25px 25px 2px rgba(0, 0, 0, 0.18);
  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.actionDark};
    transform: translateY(2px);
  }
`;
