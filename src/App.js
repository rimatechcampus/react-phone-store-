import React, { Component } from "react";
// todo

import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// TODO  componenets
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/cart";
import Default from "./components/Default";
import Model from "./components/Model.";
export default class App extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route component={Default} />
          </Switch>
          <Model />
        </React.Fragment>
      </div>
    );
  }
}
