import React from "react";
import Input from "components/Input";

import classes from "./SearchInput.module.scss";
import { SearchIcon } from "./SearchIcon";

export const SearchInput = props => {
  return (
    <div className={classes.container}>
      <span className={classes.icon}>
        <SearchIcon />
      </span>
      <Input
        autoFocus
        className={classes.input}
        placeholder="Look for some tl;dr"
        size="xl"
      />
    </div>
  );
};
