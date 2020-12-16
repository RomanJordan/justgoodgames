import React, { Component } from "react";
import axios from "axios"
import Nav from "./Nav"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

export default class Contact extends Component {
    handleFormSubmit = (event, requestType) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const email = event.target.elements.email.value;
        const title = event.target.elements.title.value;
        const link = event.target.elements.link.value;
        const synopsis = event.target.elements.synopsis.value;
        
        axios.defaults.headers = {
            "Content-Type": "application/json",
          };
                
        axios.post('http://127.0.0.1:8000/api/recs/', {
            name: name,
            email: email,
            title: title,
            link: link,
            synopsis: synopsis          
        }, {headers:{'Content-Type': 'application/json'}})
        .then(res => console.log(res))
        window.location.reload()
        .catch(err => console.error(err))
        
    }

    render() {
        return(
            <div className="container-fluid">
                <Nav></Nav>
                <h1>Contact</h1>
                <form onSubmit={this.handleFormSubmit} style={{borderRadius: '0'}} >
                    <div className="form-group">
                       <label title="name">Your name</label>
                       <input name="name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"></input>
                     
                    </div>
                    <div className="form-group">
                       <label title="email">Email</label>
                       <input name="email" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                       <small id="emailHelp" class="form-text text-muted">I won't sell ur info</small> 
                    </div>

                    <div className="form-group">
                       <label title="title">Title of game</label>
                       <input name="title" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title"></input>
                       
                    </div>

                    <div className="form-group">
                       <label title="link">External link</label>
                       <input name="link" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title"></input>
                       <small id="emailHelp" class="form-text text-muted">Where else can I find this game? e.g. Steam store page, Wikipedia page, etc</small>
                    </div>

                    <div class="form-group">
                        <label title="synopsis" for="exampleFormControlTextarea1">Synopsis</label>
                        <textarea name="synopsis" type="text" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <small id="emailHelp" class="form-text text-muted">In your own words, briefly give an appealing description of the game</small>
                    </div>
                    <button class="btn btn-outline-dark" type="submit" style={{borderRadius: '0'}} htmlType="submit">Submit form</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      token: state.token
    };
  };