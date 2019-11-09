import React from 'react';
import { BoxOverlay } from 'components/BoxOverlay/BoxOverlay';
import { Title } from 'components/Typography/Title';
import { P } from 'components/Typography/P';
import { Bracket } from 'components/Typography';

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
        of language build-in objects. It's okay to google how
        Array.prototype.slice() works over and over again; we do that too! We
        believe that developers don't have to remember all those basic details.
      </P>

      <P>
        We're inspired by the MDN project on how they collect and introduce
        specifications in a human-readable manner. We do use their content as a
        base for our documentation under CC-BY-SA 2.5 license.
        <br />
        See more details here:{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/MDN/About#Copyrights_and_licenses"
          rel="noreferrer noopener"
          target="_blank"
        >
          https://developer.mozilla.org/en-US/docs/MDN/About#Copyrights_and_licenses
        </a>
      </P>

      <P>
        But sometimes all we need is a hint on how to use some method correctly
        or what its arguments are without going deeper into details.
      </P>

      <P>
        As a team of{' '}
        <strong>
          <Bracket>JS</Bracket> tl;dr
        </strong>{' '}
        tool, our goal is to provide info on language essentials in a noiseless,
        zen-mode manner, so you can focus on what matters - built great stuff.
      </P>

      <P>
        <strong>
          <Bracket>JS</Bracket> tl;dr
        </strong>{' '}
        tool is free and AD-less forever. It's also an open-source tool. You can
        give it back to the community by contributing to docs, web app or become
        a Patreon so that you cover all our time and material expenses.
      </P>

      <P>
        We're happy to recognize our Patreons! Become one and we'll add info
        about you here.
      </P>
    </BoxOverlay>
  );
};
