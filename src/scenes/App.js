import React from 'react';
import 'normalize.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from './Header';
import { Main } from './Main';
import { About } from './About';
import { Documentation } from './Documentation';
import './index.scss';

export const App = () => {
  return (
    <Router>
      <Header />
      <Main />
      <Switch>
        <Route path="/docs/:domain/:method" component={Documentation} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default App;
