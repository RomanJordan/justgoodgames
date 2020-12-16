import React, { Component } from "react";
import { Link } from "react-router-dom"

export default class Header extends Component {
    render() {
        return(
            <div className="ml-3 mb-5">
                <h1 className="display-4">A small collection of good video game recommendations</h1>
                <p>JustGoodGames is online repository of good video games. Here you will find a collection of good games, with a brief description of each game</p>
                {/* <Link to="/contact">dnhwiaduhawhd</Link> */}
                <p> <Link to="/contact">Have a recommendation of your own?</Link> </p>
            </div>
        )
    }
}