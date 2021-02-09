
import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Deposit from "./Component/Deposit";
import CustomerCare from "./Component/CustomerCare";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp"
import SaveCart from "./Component/SaveCart";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Welcome</h1>
          <ul className="header">
            <li><NavLink exact to="/">Deposit</NavLink></li>

            <li><NavLink to="/CustomerCare">CustomerCare</NavLink></li>
            <li><NavLink to="/Login">Login</NavLink></li>
            <li><NavLink to="/SignUp">SignUp</NavLink></li>
            <li><NavLink to="/SaveCart">SaveCart</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Deposit} />

            <Route path="/CustomerCare" component={CustomerCare} />
            <Route path="/Login" component={Login} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/SaveCart" component={SaveCart} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;