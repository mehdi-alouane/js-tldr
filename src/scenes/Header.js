import React from "react";
import { Bracket } from "components/Typography";
import classes from "./Header.module.scss";

export const Header = props => {
  return (
    <header className={classes.header}>
      <h1>
        <Bracket>JS</Bracket> tl;dr{" "}
      </h1>
    </header>
  );
};
