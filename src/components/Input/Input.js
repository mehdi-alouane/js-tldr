import React, { forwardRef } from "react";
import cn from "classnames";

import classes from "./Input.module.scss";

export const Input = forwardRef(({ className, size, ...inputProps }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(className, classes.input, {
        [classes[`size-${size}`]]: size,
      })}
      {...inputProps}
    />
  );
});
