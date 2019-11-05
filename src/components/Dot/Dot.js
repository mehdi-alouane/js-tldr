import React from 'react';
import cn from 'classnames';

import classes from './Dot.module.scss';

export const Dot = ({ component = 'span', className, children, ...props }) => {
  const DotComponent = component;

  return (
    <DotComponent className={cn(className, classes.dot, {})} {...props}>
      {children}
    </DotComponent>
  );
};
