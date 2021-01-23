
// import React from "react";

// import ReactDOM from "react-dom";
// import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// import Contact from "./Contact";
// // //import Notfound from "./notfound";
// //import App from "./App"
//  import Header from "./Header";
// import Footer from "./footer";
// import Home from "./Home";

// const routing = (
//   <Router>
//     <div>
//       <Header />
//       <hr />
//       <Switch>
//         <Router exact path ="/" component ={Home}/>
//         <Route exact path ="/Contact" component ={Contact}/>
//       </Switch>
//       <Footer />
//     </div>
//   </Router>
// )
// ReactDOM.render(routing, document.getElementById("root"));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
