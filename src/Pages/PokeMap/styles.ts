import styled from "styled-components";
import background from "../../Assets/images/pageBackground.png";

export const Background = styled.div`
  background: url(${background}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 100%;
`;
