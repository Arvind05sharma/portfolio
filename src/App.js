import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from "./components/aboutMe/AboutMe";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route exact path="/about-me" component={AboutMe} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
