/* eslint-disable no-unused-vars */
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Categories from './components/Categories';
import Footer from './components/Footer';
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
      <Footer />
    </Router>
  );
}

export default App;
