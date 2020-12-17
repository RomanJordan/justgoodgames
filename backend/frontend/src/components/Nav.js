import React, { Component } from "react";
import { Link } from "react-router-dom"


export default class Nav extends Component {
    // constructor(props) {
    //     const darkMode = useDarkMode(initialState, darkModeConfig);
    // }

    render() {
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-lighter"  style={{borderBottom: '1px solid black'}}>
                {/* <p class="navbar-brand mb-0">Just Good Games</p> */}
                <p className="navbar-brand mb-0" > <Link to="/" id="brand">Just Good Games</Link> </p>
                
            </nav>
        )
    }
}