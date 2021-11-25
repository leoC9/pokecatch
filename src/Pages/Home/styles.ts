import styled from "styled-components";

export const Background = styled.div`
  background: ${({ theme }) => theme.colors.gradient};
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  img {
    margin-bottom: 1.5rem;
  }
  button {
    margin-top: 1.5rem;
  }
`;
