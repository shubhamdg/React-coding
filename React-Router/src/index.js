
import React from "react";

import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Contact from "./Contact";
// //import Notfound from "./notfound";
 import Header from "./Header";
import Footer from "./footer";
import Home from "./Home";

const routing = (
  <Router>
    <div>
      <Header />
      <hr />
      <Switch>
        <Router exact path ="/" component ={Home}/>
        <Route exact path ="/Contact" component ={Contact}/>
      </Switch>
      <Footer />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById("root"));


