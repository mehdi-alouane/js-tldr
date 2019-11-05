import React from 'react';
import { Link } from 'react-router-dom';

import { Dot } from 'components/Dot';
import { Row, Col } from 'components/Grid';
import { Bracket } from 'components/Typography';

import classes from './Header.module.scss';

export const Header = props => {
  return (
    <Row component="header" alignCenter className={classes.header}>
      <Col>
        <h1>
          <Bracket>JS</Bracket> tl;dr
        </h1>
      </Col>
      <Col>
        <Link>About</Link>
        {' '}
        <Dot />
      </Col>
    </Row>
  );
};
