import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { About } from './About';
import { Documentation } from './Documentation';
import Search from './Search';

import classes from './Main.module.scss';
import { ABOUT, DOCS, HOME } from './routes';

export const Main = () => {
  return (
    <>
      <main className={classes.main}>
        <Switch>
          <Route exact path={HOME} component={Search} />
          <Route path={DOCS} component={Documentation} />
          <Route path={ABOUT} component={About} />
        </Switch>
      </main>
    </>
  );
};
