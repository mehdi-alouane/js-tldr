import React from "react";
import cn from "classnames";

import classes from "./Chip.module.scss";

export const Chip = ({ component = "button", className, ...chipProps }) => {
  const ChipComponent = component;
  return (
    <ChipComponent className={cn(className, classes.chip)} {...chipProps} />
  );
};
