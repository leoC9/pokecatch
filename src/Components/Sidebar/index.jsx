import React from "react";

import Button from "../Button";

import iconPlus from "../../Assets/images/plus.png";
import { ReactComponent as Interrogation } from "../../Assets/images/interrogationIcon.svg";

import * as S from "./styles";

const Sidebar = () => (
  <S.SideBarWrapper>
    <S.SideBarList>
      <S.SideBarItem>
        <Interrogation />
      </S.SideBarItem>
      <S.SideBarItem>
        <Interrogation />
      </S.SideBarItem>
      <S.SideBarItem>
        <Interrogation />
      </S.SideBarItem>
      <S.SideBarItem>
        <Interrogation />
      </S.SideBarItem>
      <S.SideBarItem>
        <Interrogation />
      </S.SideBarItem>
      <S.SideBarItem>
        <Interrogation />
      </S.SideBarItem>
    </S.SideBarList>

    <Button />
  </S.SideBarWrapper>
);

export default Sidebar;
