import React from 'react';
import { BoxOverlay } from 'components/BoxOverlay/BoxOverlay';
import { Title } from 'components/Typography/Title';
import { P } from 'components/Typography/P';
import { Bracket } from 'components/Typography';
import { OutboundLink } from 'react-ga';
import { PRIVACY_POLICY } from './routes';
import { Link } from 'react-router-dom';

export const About = props => {
  return (
    <BoxOverlay>
      <Title>
        <strong>
          <Bracket>JS</Bracket> tl;dr
        </strong>{' '}
        - javascript cheatsheet you needed.
      </Title>
      <P>
        We can all agree that developers often forget how to use basic methods
        of language build-in objects. It's okay to google how{' '}
        <strong>Array.prototype.slice()</strong> works over and over again; we
        do that too! We believe that developers don't have to remember all those
        basic language feature.
      </P>

      <P>
        We're inspired by such projects as the{' '}
        <OutboundLink
          to="https://tldr.sh/"
          rel="noreferrer noopener"
          target="_blank"
          eventLabel="tldr"
        >
          tldr
        </OutboundLink>{' '}
        and the <b>MDN</b> on how they collect and introduce information in a
        human-readable manner.
        <br />
        We do use MDN documentation as a base for our texts under{' '}
        <strong>CC-BY-SA 2.5 license</strong>.
        <br />
        See more details here:{' '}
        <OutboundLink
          to="https://developer.mozilla.org/en-US/docs/MDN/About#Copyrights_and_licenses"
          rel="noreferrer noopener"
          target="_blank"
          eventLabel="MDN license"
        >
          https://developer.mozilla.org/en-US/docs/MDN/About#Copyrights_and_licenses
        </OutboundLink>
      </P>

      <P>
        But sometimes all we need is just a hint on how to use some method
        correctly or what its arguments are without going deeper into details.
      </P>

      <P>
        As a team of{' '}
        <strong>
          <Bracket>JS</Bracket> tl;dr
        </strong>{' '}
        tool, our goal is to provide info on language essentials in a noiseless,
        zen-mode manner, so you can focus on what matters - build great stuff.
      </P>

      <P>
        <strong>
          <Bracket>JS</Bracket> tl;dr
        </strong>{' '}
        tool is free and AD-less forever. It's also an{' '}
        <OutboundLink
          to={process.env.REACT_APP_GITHUB_REPO_LINK}
          rel="noreferrer noopener"
          target="_blank"
          eventLabel="Github Repo"
        >
          open-source
        </OutboundLink>{' '}
        ! You can give it back to the community by contributing to docs, web app
        or become a patrons so that you cover all our time and material
        expenses.
      </P>

      <P>
        We're happy to recognize our patrons! Become one and we'll add info
        about you here.{' '}
        <a href="https://www.patreon.com/jstldr">
          https://www.patreon.com/jstldr
        </a>
      </P>
      <P>
        Read the story in the{' '}
        <OutboundLink
          to="https://medium.com/@rusinovantondev/js-tl-dr-zen-mode-web-docs-for-javascript-developers-cf45e0143a09"
          target="_blank"
          rel="noreferrer noopener"
          eventLabel="Medium"
        >
          Medium article
        </OutboundLink>
      </P>
      <P>
        <Link to={PRIVACY_POLICY}>Privacy Policy</Link>
      </P>
    </BoxOverlay>
  );
};
