import React from 'react';
import classes from './Main.module.scss';

import Search from './Search';

export const Main = () => {
  return (
    <>
      <main className={classes.main}>
        <Search />
      </main>
    </>
  );
};
