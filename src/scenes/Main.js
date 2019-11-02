import React, { useEffect, useState } from 'react';
import classes from './Main.module.scss';

import Markdown from 'components/Markdown';
import mdSrc from 'data/Array/Array.md';

import Search from './Search';

export const Main = () => {
  const [md, setMd] = useState(null);
  useEffect(() => {
    fetch(mdSrc)
      .then(rs => rs.text())
      .then(mdText => setMd(mdText));
  });

  return (
    <>
      <main className={classes.main}>
        <Search />
      </main>
      <Markdown source={md} />
    </>
  );
};
