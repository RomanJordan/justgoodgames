import React, { Component } from "react";
import Nav from "./Nav"
import ReviewList from "./ReviewList"
import Header from "./Header"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

export default class Contact extends Component {
    render() {
        return(
            <div className="container-fluid">
                <Nav></Nav>
                <Header></Header>
                <ReviewList></ReviewList>       
            </div>
        )
    }
}