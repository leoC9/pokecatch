import React from "react";
import { TooltipImg } from "./styles";
import searchTooltip from "../../Assets/images/searchTooltip.png";
import searchingTooltip from "../../Assets/images/searchingTooltip.png";
import errorTooltip from "../../Assets/images/tooltipError.png";

interface TooltipProps {
  type: string;
}

type tooltipOptions = {
  [key: string]: JSX.Element;
};

const Tooltip = (props: TooltipProps) => {
  const tooltipType: tooltipOptions = {
    search: <TooltipImg src={searchTooltip} />,
    searching: <TooltipImg src={searchingTooltip} />,
    error: <TooltipImg src={errorTooltip} />,
  };
  return tooltipType[props.type!];
};

export default Tooltip;
