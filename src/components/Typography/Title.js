import React from 'react';

import {Text} from './Text';
import classes from './Title.module.scss';

export const Title = props => {
  return <Text component="h2" className={classes.title} {...props} />;
};
