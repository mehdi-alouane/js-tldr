import React, { useRef, useState } from "react";

import { SearchChips } from "./SearchChips";
import { SearchInput } from "./SearchInput";
import classes from "./Search.module.scss";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current && inputRef.current.focus();
  };
  const handleChange = event => setSearchValue(event.target.value);
  const handleChipsChange = value => {
    setSearchValue(`${value}.`);
    focusInput();
  };

  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <SearchInput
          ref={inputRef}
          value={searchValue}
          onChange={handleChange}
        />
      </div>
      <div className={classes.row}>
        <SearchChips onChange={handleChipsChange} />
      </div>
    </div>
  );
};
