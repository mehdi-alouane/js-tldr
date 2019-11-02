import React from "react";
import cn from "classnames";

import classes from "./Input.module.scss";

export const Input = ({ className, size, ...inputProps }) => {
  return (
    <input
      className={cn(className, classes.input, {
        [classes[`size-${size}`]]: size,
      })}
      {...inputProps}
    />
  );
};
