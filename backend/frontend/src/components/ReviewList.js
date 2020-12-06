import React, { Component } from "react";
import { render } from "react-dom";
import { Button } from 'react-bootstrap';

export default class ReviewList extends Component {
  state = {
      reviews:[]
  }

  async componentDidMount() {
      try {
        const res = await fetch('http://127.0.0.1:8000/api/reviews/');
        const reviews = await res.json();
        this.setState({reviews});
      } catch (e){console.log(e)}
  }

  render() {
    return (
    <table className=" mt-2" style={{width: '100%'}}>
        <thead>
            <tr style={{borderBottom: '1px solid black'}}>
                <th scope="col">GAME</th>
                <th scope="col">YEAR RELEASED</th>
                <th scope="col">GENRE(s)</th>
            </tr>
        </thead>
        <tbody>
            {this.state.reviews.map(item => (
            <tr>
                <td className="">TITLE: {item.title}</td>
                <td className="">AUTHOR: {item.author}</td>
                <td className="" dangerouslySetInnerHTML={{__html: item.body}}></td>  
            </tr>
            ))}
        </tbody>
        
      </table>
    );
  }
}

