import styled from "styled-components";
import background from "../../Assets/images/pageBackground.png";
import ashStop from "../../Assets/images/ashStop.png";
import ashRightLeg from "../../Assets/images/ashRightLeg.png";
import ashLeftLeg from "../../Assets/images/ashLeftLeg.png";

interface PokeMapProps {
  animationStatic?: boolean;
  cursorDisabled?: boolean;
}

export const Background = styled.div`
  background: url(${background}) no-repeat center center fixed;
  background-color: #5dae12;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateX(-10px);
  animation: anime 0.4s forwards;
  @keyframes anime {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;
export const CharacterArea = styled.main<PokeMapProps>`
  width: 6.4rem;
  height: 6.4rem;
  position: relative;
  display: flex;
  :hover img {
    visibility: visible;
    opacity: 1;
    bottom: 100%;
  }
  img:nth-child(2) {
    ${({ animationStatic }) =>
      animationStatic &&
      `   
      visibility: visible;
      opacity: 1;
      bottom: 100%;
  `}
  }
`;
export const Ash = styled.img<PokeMapProps>`
  margin: 0 auto;
  :hover {
    cursor: ${({ cursorDisabled }) => (cursorDisabled ? "no-drop" : "pointer")};
  }
`;
export const AshWalking = styled.div`
  width: 4.4rem;
  height: 5.4rem;
  background: url(${ashStop}) no-repeat;
  animation: walk 2s infinite;
  background-size: cover;
  margin: 0 auto;
  margin-top: 0.5rem;

  @keyframes walk {
    0%,
    100%,
    30%,
    50%,
    70% {
      background: url(${ashStop}) no-repeat;
      background-size: cover;
    }
    20%,
    60% {
      background: url(${ashLeftLeg}) no-repeat;
      background-size: cover;
    }
    40%,
    80% {
      background: url(${ashRightLeg}) no-repeat;
      background-size: cover;
    }
  }
`;
