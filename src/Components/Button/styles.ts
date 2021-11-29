import styled from "styled-components";

interface ButtonProps {
  size?: number;
}
export const Button: any = styled.button<ButtonProps>`
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
export const AddButton: any = styled.button<ButtonProps>`
  width: ${(props) => props.size || 5.3}rem;
  height: 5.3rem;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.actionDark};
  background: ${({ theme }) => theme.colors.actionDefault};
  transition: 250ms ease-in-out;
  color: ${({ theme }) => theme.colors.neutrals[100]};
  -webkit-box-shadow: 0px 25px 25px 2px rgba(0, 0, 0, 0.18);
  box-shadow: 0px 25px 25px 2px rgba(0, 0, 0, 0.18);
  :hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.actionDark};
  }
`;
