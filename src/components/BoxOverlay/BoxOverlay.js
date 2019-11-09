import React from 'react';
import cn from 'classnames';
import { useKey } from 'react-use';
import { Link, useHistory } from 'react-router-dom';

import { CloseButton } from 'components/CloseButton';
import classes from './BoxOverlay.module.scss';

export const BoxOverlay = ({
  component = 'div',
  className,
  children,
  ...props
}) => {
  const history = useHistory();
  const BoxOverlayComponent = component;
  useKey('Escape', () => history.push('/'));

  return (
    <BoxOverlayComponent className={cn(className, classes.box, {})} {...props}>
      <CloseButton className={classes.close} component={Link} to="/" />
      {children}
    </BoxOverlayComponent>
  );
};
