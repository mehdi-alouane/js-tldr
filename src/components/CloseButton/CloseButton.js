import React from 'react';
import cn from 'classnames';

import classes from './CloseButton.module.scss';

export const CloseButton = ({
  component = 'button',
  className,
  children,
  ...props
}) => {
  const CloseButtonComponent = component;
  return (
    <CloseButtonComponent
      className={cn(className, classes.button, {})}
      {...props}
    ></CloseButtonComponent>
  );
};
