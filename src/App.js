import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.scss';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Books />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
