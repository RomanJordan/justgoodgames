import React, { Component } from "react";
import { render } from "react-dom";
import ReviewList from "./ReviewList"
// import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <ReviewList></ReviewList>
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv)