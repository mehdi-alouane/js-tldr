import React from "react";
import classes from "./Main.module.scss";

import { SearchInput } from "./SearchInput";

export const Main = () => {
  return (
    <main className={classes.main}>
      <SearchInput />
    </main>
  );
};
