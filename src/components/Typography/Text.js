import React from "react";
import cn from "classnames";

import classes from "./Typography.module.scss";

export const Text = ({
  component = "span",
  color,
  className,
  bold,
  children,
  ...textProps
}) => {
  const TextComponent = component;

  return (
    <TextComponent
      className={cn(className, {
        [classes[`color-${color}`]]: color,
        [classes.bold]: bold,
      })}
      {...textProps}
    >
      {children}
    </TextComponent>
  );
};
