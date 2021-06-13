import React from "react";
import Navbar from "./components/DefaultPages/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import AboutMe from "./components/aboutMe/AboutMe";
import "./App.css";
import "./assets/css/bootstrap-select.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/color.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/icomoon.css";
import "./assets/css/jquery.mmenu.all.css";
import "./assets/css/main.css";
import "./assets/css/normalize.css";
import "./assets/css/owl.carousel.css";
import "./assets/css/prettyPhoto.css";
import "./assets/css/responsive.css";
import "./assets/css/scrollbar.css";
import "./assets/css/transitions.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/about-me" component={AboutMe} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
