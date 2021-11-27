import styled from "styled-components";

//TO DO
//keyframe para a animação ficar funcional no mobile

export const TooltipImg = styled.img`
  visibility: hidden;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  width: 8rem;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  bottom: 80%;
  left: 0;
  margin-left: 7px;
  opacity: 0;
  transition: all 500ms ease-in-out;
`;
