import React from 'react';
import 'normalize.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from './Header';
import { Main } from './Main';
import './index.scss';

export const App = () => {
  return (
    <Router>
      <Header />
      <Main />
    </Router>
  );
};

export default App;
