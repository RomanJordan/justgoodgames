import React, { Component } from "react";
import { render } from "react-dom";
import { Accordion, Button, Card, } from 'react-bootstrap';

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
    <div className="container-fluid">
        <div className="row" style={{borderBottom: '1px solid black'}}>
                <p className="col">TITLE</p>
                <p className="col">DEVELOPER</p>
                <p className="col">YEAR</p>
                <p className="col">GENRE</p>
            
        </div>
            {this.state.reviews.map(item => (
              <div className="items">
                <a data-toggle="collapse" href={'#collapse'+item.id} role="button" aria-expanded="false" aria-controls={item.id} id="reviews">
                  <div className="row col-sm-12" style={{borderTop: '1px solid black'}} id="review-row">
                    <p className="col mb-3 mt-3" id="game-title">{item.title}</p>
                    <p className="col mb-3 mt-3">{item.developer}</p>
                    <p className="col mb-3 mt-3">{item.release_date}</p>
                    <p className="col mb-3 mt-3">{item.genre}</p>
                  </div>
                </a>
                <div class="collapse" id={'collapse'+item.id}>
                  <div className="row mb-1 mt-1">
                    <div className="col-2 d-none d-lg-block" style={{width: '100%', height: '100%'}}>
                      <img  src={ item.image } style={{width: '100%', height: '100%'}}></img>
                    </div>
                    <div className="col-10">
                      <p className="">SYNOPSIS:</p>
                      <p  dangerouslySetInnerHTML={{__html: item.body}}></p>
                      <p>PLAY IF YOU LIKE:</p>
                      <p  dangerouslySetInnerHTML={{__html: item.play_if_you_like}}></p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
      
    );
  }
}

