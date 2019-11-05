import React from 'react';
import cn from 'classnames';

import classes from './Grid.module.scss';

export const Grid = ({
  component = 'div',
  className,
  justifyCenter,
  alignCenter,
  type = 'row',
  children,
  spacing = 1,
  ...props
}) => {
  const GridComponent = component;

  return (
    <GridComponent
      className={cn(className, classes.grid, {
        [classes.alignCenter]: alignCenter,
        [classes.justifyCenter]: justifyCenter,
        [classes[type]]: type,
        [classes[`spacing-${spacing}`]]: spacing,
      })}
      {...props}
    >
      {children}
    </GridComponent>
  );
};
