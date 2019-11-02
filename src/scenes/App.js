import React from "react";
import 'normalize.css';
import { Main } from "./Main";
import { Header } from "./Header";
import "./index.scss";

export const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
