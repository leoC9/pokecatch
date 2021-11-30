import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 31.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 2.4rem;
  & .multiSelect input {
    height: 3.267rem;
  }
  & .multiSelect__control {
    background: ${({ theme }) => theme.colors.neutrals[100]};
    border: 2px solid ${({ theme }) => theme.colors.neutrals[400]};
    border-radius: 3px;
    margin-top: 0.6rem;
    padding-left: 0.8rem;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    &:focus-within {
      /* border: 1px solid #598bff; */
    }
    &:hover {
      border: 2px solid ${({ theme }) => theme.colors.neutrals[400]};
    }
    /* background: ${({ theme }) => theme.colors.neutrals[500]}; */
  }
  & .multiSelect__control--menu-is-focused,
  & .multiSelect__control--menu-is-open {
    border: 2px solid ${({ theme }) => theme.colors.inputFocus} !important;
  }
`;

export const InputDefault = styled.input`
  height: 4.8rem;
  background: ${({ theme }) => theme.colors.neutrals[100]};
  border: 2px solid ${({ theme }) => theme.colors.neutrals[400]};
  border-radius: 3px;
  margin-top: 0.6rem;
  padding-left: 0.8rem;
  &::-webkit-input-placeholder,
  &::-moz-placeholder,
  &::-moz-placeholder,
  &::-ms-input-placeholder,
  &::placeholder {
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    background: ${({ theme }) => theme.colors.neutrals[500]};
  }
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.inputFocus};
  }
`;
export const InputNumberArea = styled.div`
  height: 4.8rem;
  background: ${({ theme }) => theme.colors.neutrals[100]};
  border: 2px solid ${({ theme }) => theme.colors.neutrals[400]};
  border-radius: 3px;
  margin-top: 0.6rem;
  padding-left: 0.8rem;
  position: relative;
  &:focus-within {
    border: 2px solid ${({ theme }) => theme.colors.inputFocus};
  }
`;
export const InputNumber = styled.input`
  height: 100%;
  background: ${({ theme }) => theme.colors.neutrals[100]};
  border: none;
  width: 100%;
  padding-left: 0.8rem;
  &::-webkit-input-placeholder,
  &::-moz-placeholder,
  &::-moz-placeholder,
  &::-ms-input-placeholder,
  &::placeholder {
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    background: ${({ theme }) => theme.colors.neutrals[500]};
  }
`;

export const ButtonArea = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  width: 4.9rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  h2 {
    position: absolute;
    right: 30px;
    :hover {
      cursor: default;
    }
  }
`;
export const Button = styled.button`
  height: 50%;
  width: 2.4rem;
  border: none;
  background: #ebecf0;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:nth-child(2) {
    box-shadow: inset 1px -1px 0px #dfe2e7;
    border-radius: 0px 0.1px 0px 0px;
    img {
      transform: rotate(180deg);
    }
  }
  &:nth-child(3) {
    border-radius: 0px 0px 0.1px 0px;
    box-shadow: inset 1px 0px 0px #dfe2e7;
  }
  :hover {
    cursor: pointer;
    background: #dfe2e7;
  }
`;
export const MultiSelect = styled.select`
  height: 100%;
  background: ${({ theme }) => theme.colors.neutrals[100]};
  border: none;
  border-radius: 3px;
  width: 100%;
  padding-left: 0.8rem;
  &::-webkit-input-placeholder,
  &::-moz-placeholder,
  &::-moz-placeholder,
  &::-ms-input-placeholder,
  &::placeholder {
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
    background: ${({ theme }) => theme.colors.neutrals[500]};
  }
`;
export const ButtonSelect = styled.button`
  height: 100%;
  width: 2.4rem;
  position: absolute;
  border: none;
  background: transparent;
  top: 4px;
  pointer-events: none;
  right: 10px;
  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;
