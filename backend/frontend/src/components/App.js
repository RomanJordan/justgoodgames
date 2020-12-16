import React, { Component } from "react";
import { render } from "react-dom";
import Main from "./Main"
import Contact from "./Contact"
// import "../../static/css/index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv)