import React, { useEffect, useState } from 'react';

import Markdown from 'components/Markdown';
import mdSrc from 'data/Array/slice.md';

export const Documentation = props => {
  const [md, setMd] = useState(null);
  useEffect(() => {
    fetch(mdSrc)
      .then(rs => rs.text())
      .then(mdText => setMd(mdText));
  });

  return <Markdown source={md} />;
};
