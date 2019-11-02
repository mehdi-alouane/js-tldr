import React, { useMemo } from 'react';
import cn from 'classnames';
import MarkdownIt from 'markdown-it';
import compose from 'lodash/fp/compose';

import classes from './Markdown.module.scss';

const replaceLinksTarget = htmlString =>
  htmlString.replace('<a href', '<a target="_blank" href');

export const Markdown = ({
  component = 'div',
  className,
  source,
  options,
  ...props
}) => {
  const transformMd = useMemo(() => {
    const md = new MarkdownIt(options);
    return compose([replaceLinksTarget, md.render.bind(md)]);
  }, [options]);
  if (!source) return null;
  const html = transformMd(source);
  const MarkdownComponent = component;

  return (
    <MarkdownComponent
      className={cn(className, classes.container)}
      dangerouslySetInnerHTML={{ __html: html }}
      {...props}
    />
  );
};
