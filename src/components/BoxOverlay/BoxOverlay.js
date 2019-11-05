import React from 'react';
import cn from 'classnames';

import classes from './BoxOverlay.module.scss';

export const BoxOverlay = ({
  component = 'div',
  className,
  children,
  ...props
}) => {
  const BoxOverlayComponent = component;
  return (
    <BoxOverlayComponent className={cn(className, classes.box, {})} {...props}>
      {children}
    </BoxOverlayComponent>
  );
};
