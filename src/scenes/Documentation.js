import React, { useEffect, useState } from 'react';
import urlJoin from 'url-join';

import Markdown from 'components/Markdown';

export const Documentation = ({ match: { params } }) => {
  const { domain, method } = params;
  const [md, setMd] = useState(null);
  useEffect(() => {
    fetch(urlJoin(process.env.REACT_APP_DOCS_PATH, domain, method))
      .then(rs => rs.text())
      .then(mdText => setMd(mdText));
  });

  return <Markdown source={md} />;
};
