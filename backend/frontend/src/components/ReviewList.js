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
    <div >
        <div className="row" style={{borderBottom: '1px solid black'}}>
                <p className="col">TITLE</p>
                <p className="col">DEVELOPER</p>
                <p className="col">YEAR</p>
                <p className="col">GENRE(s)</p>
            
        </div>
            {this.state.reviews.map(item => (
              <div>
                <a data-toggle="collapse" href={'#collapse'+item.id} role="button" aria-expanded="false" aria-controls={item.id}>
                  <div className="row" style={{borderBottom: '1px solid black'}}>
                    <p className="col mb-3 mt-3">{item.title}</p>
                    <p className="col mb-3 mt-3">{item.developer}</p>
                    <p className="col mb-3 mt-3">{item.release_date}</p>
                    <p className="col mb-3 mt-3">PRETEND TAG</p>
                  </div>
                </a>
                <div class="collapse" id={'collapse'+item.id}>
                  <div class="">
                    <p dangerouslySetInnerHTML={{__html: item.body}}></p>
                  </div>
                </div>
              </div>
            ))}
      </div>
      
    );
  }
}

