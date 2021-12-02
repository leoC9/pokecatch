import styled from "styled-components";

export const TooltipImg = styled.img`
  visibility: hidden;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 80%;
  left: 0;
  margin-left: 0px;
  opacity: 0;
  transition: all 500ms ease-in-out;
`;
