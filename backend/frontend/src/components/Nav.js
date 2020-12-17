import React, { Component } from "react";
import { Link } from "react-router-dom"


export default class Nav extends Component {
    
    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback    
        this.handleClick = this.handleClick.bind(this);  
    }

    handleClick() {    
        
    }

    render() {
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-lighter"  style={{borderBottom: '1px solid black'}}>
                {/* <p class="navbar-brand mb-0">Just Good Games</p> */}
                <p className="navbar-brand mb-0" > <Link to="/" id="brand">Just Good Games</Link> </p>
                <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="#" onClick={this.handleClick}>Dark Mode</a>
            </li>
        </ul>
            </nav>
        )
    }
}